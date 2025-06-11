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
  cited_by_total?: number;
  h_index?: number;
  i10_index?: number;
}

interface ScholarApiResponse {
  author?: AuthorInfo;
  articles?: any[];
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
      console.log('=== FULL API RESPONSE ===');
      console.log(JSON.stringify(data, null, 2));
      console.log('=== AUTHOR OBJECT ===');
      console.log(JSON.stringify(data.author, null, 2));
      console.log('=== CITED BY OBJECT ===');
      console.log(JSON.stringify(data.author?.cited_by, null, 2));
      console.log('=== INDICES OBJECT ===');
      console.log(JSON.stringify(data.author?.indices, null, 2));
      console.log('=== SEARCHING FOR H-INDEX ===');
      console.log('data.author?.indices?.h_index:', data.author?.indices?.h_index);
      console.log('data.h_index:', data.h_index);
      console.log('data.author?.h_index:', data.author?.h_index);
      console.log('data.indices?.h_index:', data.indices?.h_index);
      console.log('=== TOP LEVEL KEYS ===');
      console.log(Object.keys(data));
      
      // Search for any property containing 'h_index' or 'i10_index'
      const searchForIndices = (obj: any, path = '') => {
        for (const [key, value] of Object.entries(obj)) {
          const currentPath = path ? `${path}.${key}` : key;
          if (key.includes('h_index') || key.includes('i10_index') || key.includes('index')) {
            console.log(`Found index-related field: ${currentPath} =`, value);
          }
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            searchForIndices(value, currentPath);
          }
        }
      };
      console.log('=== SEARCHING FOR ANY INDEX FIELDS ===');
      searchForIndices(data);
    }
    
    // Extract data based on SerpAPI Google Scholar Author response structure
    const authorInfo = data.author || {};
    
    // Try multiple possible locations for total citations
    const totalCitations = authorInfo.cited_by?.total || 
                          data.cited_by?.total || 
                          authorInfo.cited_by_total || 
                          data.citations || 
                          0;
    
    // Try multiple possible locations for h-index with more aggressive searching
    const hIndex = authorInfo.indices?.h_index || 
                   data.h_index || 
                   authorInfo.h_index || 
                   data.indices?.h_index ||
                   data.author?.hindex ||
                   data.hindex ||
                   authorInfo.hindex ||
                   // Sometimes it might be in a different format
                   (typeof data.author?.indices === 'object' ? 
                     Object.values(data.author.indices).find(v => typeof v === 'number' && v > 0) : null) ||
                   0;
    
    // Try multiple possible locations for i10-index with more aggressive searching
    const i10Index = authorInfo.indices?.i10_index || 
                     data.i10_index || 
                     authorInfo.i10_index || 
                     data.indices?.i10_index ||
                     data.author?.i10index ||
                     data.i10index ||
                     authorInfo.i10index ||
                     // Check for alternative naming
                     data.author?.indices?.['i10_index'] ||
                     data.author?.indices?.['i10-index'] ||
                     0;
    
    // Get publications count from articles array length
    const publications = data.articles?.length || 0;
    
    // Extract citations by year from the graph data
    // Try multiple possible locations for graph data
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
    
    console.log('Extracted data before processing:', {
      totalCitations,
      hIndex,
      i10Index,
      publications,
      citationsByYear: citationsByYear.length,
      authorName: authorInfo.name,
      graphDataExists: !!citationsGraph.length
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
