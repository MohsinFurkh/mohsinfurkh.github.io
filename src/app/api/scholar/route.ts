// API route to fetch Google Scholar data from local JSON file
import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Type definitions for the JSON file structure
interface CitationMetrics {
  all_time: string;
  since_2019: string;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  citations: number;
  year: string;
  scholar_url: string;
}

interface BasicInfo {
  name: string;
  affiliation: string;
  email_domain: string;
  profile_image: string;
}

interface ScholarJsonData {
  user_id: string;
  profile_url: string;
  basic_info: BasicInfo;
  citation_metrics: {
    citations?: CitationMetrics;
    'h-index'?: CitationMetrics;
    'i10-index'?: CitationMetrics;
  };
  research_interests: string[];
  publications: Publication[];
  coauthors: any[];
  fetch_timestamp: string;
}

// Response format types (keeping the same as original)
interface ProcessedPaper {
  title: string;
  citations: number;
  year?: number;
  authors?: string;
  publication?: string;
  link?: string;
}

interface CitationByYear {
  year: number;
  citations: number;
}

export async function GET() {
  try {
    // Path to the JSON file (adjust path as needed)
    const jsonFilePath = join(process.cwd(), 'scholar_profile_DGm9l2wAAAAJ.json');
    
    console.log('Reading Google Scholar data from JSON file...');
    
    // Read and parse the JSON file
    const fileContent = readFileSync(jsonFilePath, 'utf8');
    const data: ScholarJsonData = JSON.parse(fileContent);
    
    console.log('JSON file read successfully');
    
    // Extract basic information
    const authorInfo = data.basic_info;
    const citationMetrics = data.citation_metrics;
    
    // Process publications into the expected format
    const papers: ProcessedPaper[] = data.publications.map((pub: Publication) => {
      // Parse year from string, handling cases where it might be 'N/A'
      let year: number | undefined;
      if (pub.year && pub.year !== 'N/A') {
        const yearNum = parseInt(pub.year);
        if (!isNaN(yearNum)) {
          year = yearNum;
        }
      }
      
      return {
        title: pub.title || 'Untitled',
        citations: pub.citations || 0,
        year,
        authors: pub.authors || '',
        publication: pub.journal || '',
        link: pub.scholar_url || ''
      };
    });
    
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
    
    // Extract metrics from the JSON data
    const totalCitations = parseInt(citationMetrics.citations?.all_time || '0');
    const hIndex = parseInt(citationMetrics['h-index']?.all_time || '0');
    const i10Index = parseInt(citationMetrics['i10-index']?.all_time || '0');
    const publications = data.publications.length;
    
    // Generate citations by year from publication data
    // Group publications by year and sum their citations
    const citationsByYearMap = new Map<number, number>();
    
    papers.forEach(paper => {
      if (paper.year && paper.citations > 0) {
        const currentCitations = citationsByYearMap.get(paper.year) || 0;
        citationsByYearMap.set(paper.year, currentCitations + paper.citations);
      }
    });
    
    // Convert to array and sort by year
    const citationsByYear: CitationByYear[] = Array.from(citationsByYearMap.entries())
      .map(([year, citations]) => ({ year, citations }))
      .sort((a, b) => a.year - b.year);
    
    // If we don't have yearly data, create a simple estimation
    if (citationsByYear.length === 0 && totalCitations > 0) {
      // Create a rough distribution based on publication years
      const publicationYears = papers
        .filter(p => p.year)
        .map(p => p.year as number)
        .sort((a, b) => a - b);
      
      if (publicationYears.length > 0) {
        const minYear = Math.min(...publicationYears);
        const maxYear = Math.max(...publicationYears);
        const yearRange = maxYear - minYear + 1;
        
        // Distribute citations across years (this is an approximation)
        for (let year = minYear; year <= maxYear; year++) {
          const papersInYear = papers.filter(p => p.year === year).length;
          if (papersInYear > 0) {
            const avgCitationsPerYear = Math.floor(totalCitations / yearRange);
            citationsByYear.push({
              year,
              citations: avgCitationsPerYear * papersInYear
            });
          }
        }
      }
    }
    
    console.log('Processed data:', {
      totalCitations,
      hIndex,
      i10Index,
      publications,
      citationsByYear: citationsByYear.length,
      authorName: authorInfo.name,
      papersWithCitations: papers.filter(p => p.citations > 0).length
    });
    
    const responseData = {
      citations: totalCitations,
      publications,
      h_index: hIndex,
      i10_index: i10Index,
      citationsByYear,
      papers: sortedPapers,
      author_name: authorInfo.name || 'Unknown',
      author_affiliation: authorInfo.affiliation || '',
      research_interests: data.research_interests || [],
      last_updated: data.fetch_timestamp,
      // Include debug info in development
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          json_file_path: jsonFilePath,
          total_publications: data.publications.length,
          papers_with_citations: papers.filter(p => p.citations > 0).length,
          citation_metrics_raw: citationMetrics,
          sample_paper: papers[0] // First paper for debugging
        }
      })
    };
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Error reading Google Scholar JSON file:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Check if it's a file not found error
    if (errorMessage.includes('ENOENT')) {
      return NextResponse.json({ 
        error: 'Scholar profile JSON file not found',
        message: 'Please ensure scholar_profile_DGm9l2wAAAAJ.json exists in the project root directory',
        fallback: {
          citations: 0,
          publications: 0,
          h_index: 0,
          i10_index: 0,
          citationsByYear: [],
          papers: []
        }
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      error: 'Failed to read citation data from JSON file',
      message: errorMessage,
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
