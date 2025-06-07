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
    console.log('Full API response keys:', Object.keys(data));
    console.log('Author info keys:', data.author ? Object.keys(data.author) : 'No author');
    
    // More detailed logging
    if (data.author) {
      console.log('Author cited_by:', data.author.cited_by);
      console.log('Author indices:', data.author.indices);
      console.log('Author table:', data.author.table);
    }
    
    // Check if data is in different locations
    console.log('Direct citations field:', data.citations);
    console.log('Direct cited_by field:', data.cited_by);
    
    // Extract data from the API response - try multiple approaches
    const authorInfo = data.author || {};
    
    // Try to get citations from various possible locations
    let citations = 0;
    if (authorInfo.cited_by?.total) {
      citations = authorInfo.cited_by.total;
    } else if (authorInfo.table && Array.isArray(authorInfo.table)) {
      // Sometimes citation data is in a table format
      const citationRow = authorInfo.table.find((row: any) => 
        row.field === 'Citations' || row.label === 'Citations'
      );
      if (citationRow && citationRow.value) {
        citations = parseInt(citationRow.value.toString().replace(/,/g, ''));
      }
    }
    
    // Try to get h-index from various locations
    let hIndex = 0;
    if (authorInfo.indices?.h_index) {
      hIndex = authorInfo.indices.h_index;
    } else if (authorInfo.table && Array.isArray(authorInfo.table)) {
      const hIndexRow = authorInfo.table.find((row: any) => 
        row.field === 'h-index' || row.label === 'h-index'
      );
      if (hIndexRow && hIndexRow.value) {
        hIndex = parseInt(hIndexRow.value.toString());
      }
    }
    
    const publications = data.articles?.length || 0;
    
    // Try to extract citations by year
    let citationsByYear: Array<{year: number, citations: number}> = [];
    
    if (authorInfo.cited_by?.graph && Array.isArray(authorInfo.cited_by.graph)) {
      citationsByYear = authorInfo.cited_by.graph.map((item: any) => ({
        year: item.year,
        citations: item.citations
      }));
    }
    
    console.log('Final extracted values:', { citations, hIndex, publications, citationsByYear: citationsByYear.length });
    
    // Extract citations by year from the graph data
    citationsByYear = citationsByYear.length > 0 ? citationsByYear : [];
    
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
