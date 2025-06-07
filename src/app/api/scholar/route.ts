// API route to fetch Google Scholar data
import { NextResponse } from 'next/server';
export async function GET() {
  try {
    // You'll need to sign up for SerpAPI and get an API key
    const API_KEY = process.env.SERPAPI_KEY;
    const AUTHOR_ID = 'DGm9l2wAAAAJ'; // Your Google Scholar ID

    console.log('Fetching Google Scholar data...');

    const response = await fetch(
      https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${API_KEY}
    );

    if (!response.ok) {
      console.error('SerpAPI response not OK:', response.status, response.statusText);
      throw new Error(API request failed: ${response.status});
    }

    const data = await response.json();
    console.log('API response received');

    // Hardcoded values based on your Google Scholar profile
    const citationsByYear = [
      { year: 2022, citations: 1 },
      { year: 2023, citations: 2 },
      { year: 2024, citations: 15 },
      { year: 2025, citations: 38 },
    ];
    return NextResponse.json({ 
      citations: 38,
      publications: 6,
      h_index: 3,
      citationsByYear
    });
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    return NextResponse.json({ error: 'Failed to fetch citation data' }, { status: 500 });
  }
}
