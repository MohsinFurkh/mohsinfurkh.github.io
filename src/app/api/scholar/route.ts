// API route to fetch Google Scholar data with proper TypeScript types
import { NextResponse } from 'next/server';

// Type definitions for SerpAPI Google Scholar response
interface CitationGraph {
  year: number;
  citations: number;
}

interface AuthorIndices {
  h_index: number;
  i10_index: number;
}

interface CitedBy {
  total: number;
  graph: CitationGraph[];
}

interface AuthorInfo {
  cited_by: CitedBy;
  indices: AuthorIndices;
}

interface ScholarArticle {
  title: string;
  authors: string;
  publication: string;
  cited_by: {
    value: number;
  };
}

interface SerpApiResponse {
  author: AuthorInfo;
  articles: ScholarArticle[];
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
    
    const data: SerpApiResponse = await response.json();
    console.log('API response received');
    
    // Extract data from the API response with proper typing
    const authorInfo = data.author || {};
    const citations = authorInfo.cited_by?.total || 0;
    const hIndex = authorInfo.indices?.h_index || 0;
    const publications = data.articles?.length || 0;
    
    // Extract citations by year from the graph data
    const citationsByYear = authorInfo.cited_by?.graph?.map((item: CitationGraph) => ({
      year: item.year,
      citations: item.citations
    })) || [];
    
    return NextResponse.json({ 
      citations,
      publications,
      h_index: hIndex,
      citationsByYear,
      // Include raw data for debugging (remove in production)
      debug: process.env.NODE_ENV === 'development' ? data : undefined
    });
    
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({ 
      error: 'Failed to fetch citation data',
      message: errorMessage 
    }, { status: 500 });
  }
}
