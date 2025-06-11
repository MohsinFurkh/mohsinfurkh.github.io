// API route to fetch Google Scholar data
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
}

interface AuthorInfo {
  name?: string;
  affiliations?: string[];
  cited_by?: CitedBy;
  indices?: AuthorIndices;
}

interface ScholarApiResponse {
  author?: AuthorInfo;
  articles?: any[];
}

export async function GET() {
  try {
    const API_KEY = process.env.SERPAPI_KEY;
    const AUTHOR_ID = 'DGm9l2wAAAAJ'; // Your Google Scholar ID
    
    if (!API_KEY) {
      console.error('SERPAPI_KEY not found in environment variables');
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }
    
    console.log('Fetching Google Scholar data...');
    
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${API_KEY}`
    );
    
    if (!response.ok) {
      console.error('SerpAPI response not OK:', response.status, response.statusText);
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data: ScholarApiResponse = await response.json();
    console.log('API response received');
    
    // Debug: Log the actual response structure
    if (process.env.NODE_ENV === 'development') {
      console.log('Full API response:', JSON.stringify(data, null, 2));
    }
    
    // Extract data based on SerpAPI Google Scholar Author response structure
    const authorInfo = data.author || {};
    
    // Get total citations - usually in author.cited_by.total
    const totalCitations = authorInfo.cited_by?.total || 0;
    
    // Get h-index from author indices
    const hIndex = authorInfo.indices?.h_index || 0;
    
    // Get i10-index if available
    const i10Index = authorInfo.indices?.i10_index || 0;
    
    // Get publications count from articles array length
    const publications = data.articles?.length || 0;
    
    // Extract citations by year from the graph data
    // This is typically in author.cited_by.graph
    const citationsGraph = authorInfo.cited_by?.graph || [];
    const citationsByYear = Array.isArray(citationsGraph) ? citationsGraph.map((item: CitationGraphItem) => ({
      year: parseInt(item.year),
      citations: parseInt(item.citations)
    })).sort((a, b) => a.year - b.year) : [];
    
    // If we have yearly data but no total, calculate it
    let finalCitations = totalCitations;
    if (totalCitations === 0 && citationsByYear.length > 0) {
      finalCitations = citationsByYear.reduce((sum, yearData) => sum + yearData.citations, 0);
    }
    
    console.log('Extracted data:', {
      citations: finalCitations,
      publications,
      h_index: hIndex,
      i10_index: i10Index,
      citationsByYear: citationsByYear.length
    });
    
    const responseData = { 
      citations: finalCitations,
      publications,
      h_index: hIndex,
      i10_index: i10Index,
      citationsByYear,
      author_name: authorInfo.name || 'Unknown',
      author_affiliation: authorInfo.affiliations?.[0] || '',
      // Include debug info in development
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          raw_author: authorInfo,
          articles_count: data.articles?.length || 0,
          has_graph_data: !!authorInfo.cited_by?.graph,
          graph_years: citationsGraph.map((item: CitationGraphItem) => item.year)
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
        citationsByYear: []
      }
    }, { status: 500 });
  }
}
