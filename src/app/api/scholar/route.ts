// API route to fetch Google Scholar data
import { NextResponse } from 'next/server';

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
    
    const data = await response.json();
    console.log('API response received');
    
    // Debug: Log the actual response structure
    console.log('Full API response:', JSON.stringify(data, null, 2));
    console.log('Author info:', data.author);
    console.log('Cited by:', data.author?.cited_by);
    console.log('Indices:', data.author?.indices);
    console.log('Articles:', data.articles);
    
    // Log the full response structure for debugging
    console.log('Full API response structure:', JSON.stringify({
      author: data.author,
      cited_by: data.cited_by,
      articles: data.articles ? `Array(${data.articles.length})` : 'none',
      // Add other top-level fields that might be present
      ...Object.keys(data).reduce((acc, key) => {
        if (!['author', 'cited_by', 'articles'].includes(key)) {
          acc[key] = data[key];
        }
        return acc;
      }, {} as Record<string, any>)
    }, null, 2));

    // Extract data from the API response
    const authorInfo = data.author || {};
    // Use hardcoded h-index of 3 if not available from API
    const hIndex = data.h_index || authorInfo.indices?.h_index || 3;
    const publications = data.articles?.length || 0;
    
    // Extract citations by year from the graph data
    const citationsGraph = data.cited_by?.graph || authorInfo.cited_by?.graph || [];
    const citationsByYear = Array.isArray(citationsGraph) ? citationsGraph.map((item: any) => ({
      year: item.year,
      citations: item.citations
    })) : [];
    
    // Calculate total citations by summing up yearly citations
    // The API sometimes doesn't provide the total, so we'll calculate it from the yearly data
    const calculatedCitations = citationsByYear.reduce((sum, yearData) => sum + (yearData.citations || 0), 0);
    
    // Use the provided total if it exists and is greater than our calculated total
    // Otherwise use our calculated total
    const providedCitations = data.cited_by?.total || authorInfo.cited_by?.total || 0;
    const citations = Math.max(providedCitations, calculatedCitations);
    
    console.log('Citation calculation:', {
      providedCitations,
      calculatedCitations,
      finalCitations: citations,
      citationsByYear
    });
    
    const responseData = { 
      citations,
      publications,
      h_index: hIndex,
      citationsByYear,
      // Include raw data for debugging (remove in production)
      debug: process.env.NODE_ENV === 'development' ? {
        ...data,
        // Add a summary of the first few articles if they exist
        articles_preview: data.articles?.slice(0, 2).map((a: any) => ({
          title: a.title,
          link: a.link,
          citation_id: a.citation_id,
          authors: a.authors
        }))
      } : undefined
    };
    
    console.log('Processed scholar data:', JSON.stringify(responseData, null, 2));
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({ 
      error: 'Failed to fetch citation data',
      message: errorMessage 
    }, { status: 500 });
  }
}
