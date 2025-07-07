// API route to fetch Google Scholar data with individual paper citations
import { NextResponse } from 'next/server';

// Type definitions for SerpAPI Google Scholar response
interface CitationGraphItem {
  year: string;
  citations: string;
}

interface AuthorIndices {
  h_index?: number;
  i10_index?: number;
}

interface CitedBy {
  total?: number;
  graph?: CitationGraphItem[];
  value?: number; // For individual articles
}

interface Article {
  title?: string;
  cited_by?: CitedBy;
  cited_by_count?: number;
  citations?: number;
  num_citations?: number;
  year?: string | number;
  authors?: string;
  publication?: string;
  link?: string;
  [key: string]: any;
}

interface AuthorInfo {
  name?: string;
  affiliations?: string[];
  cited_by?: CitedBy;
  indices?: AuthorIndices;
  cited_by_total?: number;
  h_index?: number;
  i10_index?: number;
}

interface ProcessedPaper {
  title: string;
  citations: number;
  year?: number;
  authors?: string;
  publication?: string;
  link?: string;
}

interface ScholarApiResponse {
  author?: AuthorInfo;
  articles?: Article[];
  cited_by?: CitedBy;
  h_index?: number;
  i10_index?: number;
  citations?: number;
  graph?: CitationGraphItem[];
  indices?: AuthorIndices;
  [key: string]: any; // Allow for unexpected fields
}

export async function GET() {
  try {
    const API_KEY = process.env.SCRAPINGBEE_API_KEY;
    const AUTHOR_ID = 'DGm9l2wAAAAJ'; // Your Google Scholar ID
    
    if (!API_KEY) {
      console.error('SCRAPINGBEE_API_KEY not found in environment variables');
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }
    
    console.log('Fetching Google Scholar data...');
    
    const url = `https://scholar.google.com/citations?user=${AUTHOR_ID}&hl=en`;
    const apiUrl = `https://app.scrapingbee.com/api/v1/?api_key=${API_KEY}&url=${encodeURIComponent(url)}&render_js=false`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error('SerpAPI response not OK:', response.status, response.statusText);
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data: ScholarApiResponse = await response.json();
    console.log('API response received');
    
    // Debug: Log the actual response structure
    if (process.env.NODE_ENV === 'development') {
      console.log('=== FULL API RESPONSE ===');
      console.log(JSON.stringify(data, null, 2));
      console.log('=== AUTHOR OBJECT ===');
      console.log(JSON.stringify(data.author, null, 2));
      console.log('=== SAMPLE ARTICLE ===');
      console.log(JSON.stringify(data.articles?.[0], null, 2));
    }
    
    // Extract data based on SerpAPI Google Scholar Author response structure
    const authorInfo = data.author || {};
    
    // Process individual papers with their citation counts
    const papers: ProcessedPaper[] = [];
    const citationCounts: number[] = [];
    
    if (data.articles && Array.isArray(data.articles)) {
      data.articles.forEach((article: Article) => {
        // Try different possible fields for citation count
        const citationCount = article.cited_by?.value || 
                             article.cited_by_count || 
                             article.citations || 
                             article.num_citations || 
                             0;
        
        // Extract year, handling both string and number formats
        let year: number | undefined;
        if (article.year) {
          const yearNum = typeof article.year === 'string' ? parseInt(article.year) : article.year;
          if (!isNaN(yearNum)) {
            year = yearNum;
          }
        }
        
        const paper: ProcessedPaper = {
          title: article.title || 'Untitled',
          citations: citationCount,
          year,
          authors: article.authors,
          publication: article.publication,
          link: article.link
        };
        
        papers.push(paper);
        
        // Only include papers with citations for h-index calculation
        if (citationCount > 0) {
          citationCounts.push(citationCount);
        }
      });
      
      // Sort citation counts for h-index calculation
      citationCounts.sort((a, b) => b - a);
    }
    
    // Get publications count from articles array length
    const publications = papers.length;
    
    // Calculate h-index and i10-index manually from publications data
    let calculatedHIndex = 0;
    let calculatedI10Index = 0;
    
    if (citationCounts.length > 0) {
      console.log('Citation counts per publication:', citationCounts);
      
      // Calculate h-index: largest number h such that h publications have at least h citations each
      for (let i = 0; i < citationCounts.length; i++) {
        if (citationCounts[i] >= i + 1) {
          calculatedHIndex = i + 1;
        } else {
          break;
        }
      }
      
      // Calculate i10-index: number of publications with at least 10 citations
      calculatedI10Index = citationCounts.filter((count: number) => count >= 10).length;
      
      console.log('Manual calculation results:', {
        hIndex: calculatedHIndex,
        i10Index: calculatedI10Index,
        totalPublications: publications,
        publicationsWithCitations: citationCounts.length
      });
    }
    
    // Try multiple possible locations for total citations
    const totalCitations = authorInfo.cited_by?.total || 
                          data.cited_by?.total || 
                          authorInfo.cited_by_total || 
                          data.citations || 
                          0;
    
    // Try multiple possible locations for h-index, fallback to calculated value
    const hIndex = authorInfo.indices?.h_index || 
                   data.h_index || 
                   authorInfo.h_index || 
                   data.indices?.h_index || 
                   calculatedHIndex;
    
    // Try multiple possible locations for i10-index, fallback to calculated value
    const i10Index = authorInfo.indices?.i10_index || 
                     data.i10_index || 
                     authorInfo.i10_index || 
                     data.indices?.i10_index || 
                     calculatedI10Index;
    
    // Extract citations by year from the graph data
    const citationsGraph = authorInfo.cited_by?.graph || 
                          data.cited_by?.graph || 
                          data.graph || 
                          [];
    
    const citationsByYear = Array.isArray(citationsGraph) ? citationsGraph.map((item: CitationGraphItem) => ({
      year: parseInt(item.year),
      citations: parseInt(item.citations)
    })).sort((a, b) => a.year - b.year) : [];
    
    // If we have yearly data but no total, calculate it
    let finalCitations = totalCitations;
    if (totalCitations === 0 && citationsByYear.length > 0) {
      finalCitations = citationsByYear.reduce((sum, yearData) => sum + yearData.citations, 0);
    }
    
    // Sort papers by citation count (descending) and then by year (descending)
    const sortedPapers = papers.sort((a, b) => {
      if (a.citations !== b.citations) {
        return b.citations - a.citations; // Higher citations first
      }
      // If citations are equal, sort by year (newer first)
      const yearA = a.year || 0;
      const yearB = b.year || 0;
      return yearB - yearA;
    });
    
    console.log('Extracted data before processing:', {
      totalCitations,
      hIndex,
      i10Index,
      publications,
      citationsByYear: citationsByYear.length,
      authorName: authorInfo.name,
      papersWithCitations: papers.filter(p => p.citations > 0).length
    });
    
    const responseData = { 
      citations: finalCitations,
      publications,
      h_index: hIndex,
      i10_index: i10Index,
      citationsByYear,
      papers: sortedPapers, // Include individual papers with citations
      author_name: authorInfo.name || 'Unknown',
      author_affiliation: authorInfo.affiliations?.[0] || '',
      // Include debug info in development
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          raw_author: authorInfo,
          articles_count: data.articles?.length || 0,
          has_graph_data: !!authorInfo.cited_by?.graph,
          graph_years: citationsGraph.map((item: CitationGraphItem) => item.year),
          sample_paper: papers[0] // First paper for debugging
        }
      })
    };
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({ 
      error: 'Failed to fetch citation data',
      message: errorMessage,
      // Provide fallback data in case of API failure
      fallback: {
        citations: 0,
        publications: 0,
        h_index: 0,
        i10_index: 0,
        citationsByYear: [],
        papers: []
      }
    }, { status: 500 });
  }
}
