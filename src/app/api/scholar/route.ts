// API route to fetch Google Scholar data with multiple fallback methods
import { NextResponse } from 'next/server';
import { load } from 'cheerio';

// Type definitions remain the same
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
  value?: number;
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
  [key: string]: any;
}

// Alternative 1: Web scraping Google Scholar directly
async function scrapeGoogleScholar(authorId: string): Promise<ScholarApiResponse> {
  try {
    const url = `https://scholar.google.com/citations?user=${authorId}&hl=en`;
    
    // Use different user agents to avoid blocking
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    ];
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)],
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = load(html);

    // Extract author information
    const name = $('#gsc_prf_in').text().trim();
    const affiliation = $('.gsc_prf_il').first().text().trim();
    
    // Extract citation metrics
    const citationStats = $('.gsc_rsb_std');
    const totalCitations = parseInt(citationStats.eq(0).text().replace(/,/g, '')) || 0;
    const hIndex = parseInt(citationStats.eq(2).text()) || 0;
    const i10Index = parseInt(citationStats.eq(4).text()) || 0;

    // Extract papers
    const articles: Article[] = [];
    $('.gsc_a_tr').each((index, element) => {
      const $row = $(element);
      const title = $row.find('.gsc_a_at').text().trim();
      const authors = $row.find('.gsc_a_at').next().text().trim();
      const citedBy = parseInt($row.find('.gsc_a_ac').text()) || 0;
      const year = parseInt($row.find('.gsc_a_y').text()) || undefined;
      const link = 'https://scholar.google.com' + $row.find('.gsc_a_at').attr('href');

      if (title) {
        articles.push({
          title,
          authors,
          cited_by: { value: citedBy },
          year,
          link
        });
      }
    });

    // Extract citation graph data
    const citationsByYear: CitationGraphItem[] = [];
    // This requires parsing the JavaScript chart data, which is more complex
    // For now, we'll provide a basic structure

    return {
      author: {
        name,
        affiliations: [affiliation],
        cited_by: { total: totalCitations },
        indices: { h_index: hIndex, i10_index: i10Index }
      },
      articles,
      cited_by: { total: totalCitations },
      h_index: hIndex,
      i10_index: i10Index
    };
  } catch (error) {
    console.error('Error scraping Google Scholar:', error);
    throw error;
  }
}

// Alternative 2: Using ScrapingBee API (another scraping service)
async function fetchWithScrapingBee(authorId: string): Promise<ScholarApiResponse> {
  const SCRAPINGBEE_API_KEY = process.env.SCRAPINGBEE_API_KEY;
  
  if (!SCRAPINGBEE_API_KEY) {
    throw new Error('ScrapingBee API key not configured');
  }

  const url = `https://scholar.google.com/citations?user=${authorId}&hl=en`;
  const apiUrl = `https://app.scrapingbee.com/api/v1/?api_key=${SCRAPINGBEE_API_KEY}&url=${encodeURIComponent(url)}&render_js=false`;

  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    throw new Error(`ScrapingBee API error: ${response.status}`);
  }

  const html = await response.text();
  const $ = load(html);

  // Same parsing logic as above
  const name = $('#gsc_prf_in').text().trim();
  const affiliation = $('.gsc_prf_il').first().text().trim();
  
  const citationStats = $('.gsc_rsb_std');
  const totalCitations = parseInt(citationStats.eq(0).text().replace(/,/g, '')) || 0;
  const hIndex = parseInt(citationStats.eq(2).text()) || 0;
  const i10Index = parseInt(citationStats.eq(4).text()) || 0;

  const articles: Article[] = [];
  $('.gsc_a_tr').each((index, element) => {
    const $row = $(element);
    const title = $row.find('.gsc_a_at').text().trim();
    const authors = $row.find('.gsc_a_at').next().text().trim();
    const citedBy = parseInt($row.find('.gsc_a_ac').text()) || 0;
    const year = parseInt($row.find('.gsc_a_y').text()) || undefined;
    const link = 'https://scholar.google.com' + $row.find('.gsc_a_at').attr('href');

    if (title) {
      articles.push({
        title,
        authors,
        cited_by: { value: citedBy },
        year,
        link
      });
    }
  });

  return {
    author: {
      name,
      affiliations: [affiliation],
      cited_by: { total: totalCitations },
      indices: { h_index: hIndex, i10_index: i10Index }
    },
    articles,
    cited_by: { total: totalCitations },
    h_index: hIndex,
    i10_index: i10Index
  };
}

// Alternative 3: Using Scholarly Python library via serverless function
async function fetchWithScholarly(authorId: string): Promise<ScholarApiResponse> {
  // This would require setting up a Python serverless function
  // For example, using Vercel's Python runtime or AWS Lambda
  const SCHOLARLY_API_URL = process.env.SCHOLARLY_API_URL;
  
  if (!SCHOLARLY_API_URL) {
    throw new Error('Scholarly API URL not configured');
  }

  const response = await fetch(`${SCHOLARLY_API_URL}/author/${authorId}`);
  
  if (!response.ok) {
    throw new Error(`Scholarly API error: ${response.status}`);
  }

  return await response.json();
}

// Alternative 4: Using a caching strategy with manual data entry
async function getCachedData(authorId: string): Promise<ScholarApiResponse> {
  // You can manually update this data periodically
  const cachedData: { [key: string]: ScholarApiResponse } = {
    'DGm9l2wAAAAJ': {
      author: {
        name: 'Mohsin Furkh Dar',
        affiliations: ['University of Hyderabad'],
        cited_by: { total: 44 }, // Update manually
        indices: { h_index: 3, i10_index: 2 }
      },
      articles: [
        // Add your papers manually with current citation counts
        {
          title: 'Adaptive ensemble loss and multi-scale attention in breast ultrasound segmentation with UMA-Net',
          authors: 'Mohsin Furkh Dar, Avatharam Ganivada',
          cited_by: { value: 1 },
          year: 2025,
          link: 'https://link.springer.com/article/10.1007/s11517-025-03301-5',
          Journal: 'Medical & Biological Engineering & Computing'
        },
        {
          title: 'Dynamic Weight-Adjusted Ensemble Loss for Enhanced Medical Image Segmentation',
          authors: 'Mohsin Furkh Dar, Avatharam Ganivada',
          cited_by: { value: 0 },
          year: 2024,
          link: 'https://link.springer.com/chapter/10.1007/978-981-96-3250-3_1',
          Conference: 'International Conference on Computing and Communication Networks',
          Publisher: 'Springer Nature Singapore'
        },
         {
          title: 'Deep learning and genetic algorithm-based ensemble model for feature selection and classification of breast ultrasound images',
          authors: 'Mohsin Furkh Dar, Avatharam Ganivada',
          cited_by: { value: 13 },
          year: 2024,
          link: 'https://doi.org/10.1016/j.imavis.2024.105018',
          Journal: 'Image and Vision Computing',
          Publisher: 'Elsevier'
        },
        {
          title: 'Design and analysis of a robust security layer for software defined network framework',
          authors: 'Ali Nadim Alhaj, Narottam Das Patel, Ajeet Singh, Rohit Kumar Bondugula, Mohsin Furkh Dar, Jameel Ahamed',
          cited_by: { value: 13 },
          year: 2024,
          link: 'https://doi.org/10.1504/IJSNET.2024.141613',
          Journal: 'International Journal of Sensor Networks',
          Publisher: 'Inderscience Publishers (IEL)'
        },
        
        {
          title: 'EfficientU-Net: A Novel Deep Learning Method for Breast Tumor Segmentation and Classification in Ultrasound Images',
          authors: 'Mohsin Furkh Dar, Avatharam Ganivada',
          cited_by: { value: 23 },
          year: 2023,
          link: 'https://link.springer.com/article/10.1007/s11063-023-11333-x',
          Journal: 'Neural Processing Letters',
          Publisher: 'Springer US'
        },
        {
          title: 'Latent fingerprint enhancement and matching using intuitionistic type-2 fuzzy',
          authors: 'Sayima Mukhtar, Mohsin Furkh Dar, Amandeep Kaur',
          cited_by: { value: 2},
          year: 2022,
          link: 'https://doi.org/10.1504/IJAISC.2022.130558',
          Journal: 'International Journal of Artificial Intelligence and Soft Computing',
          Publisher: 'Inderscience Publishers (IEL)'
        },
        {
          title: 'Performance Comparison of Face Detection and Recognition Algorithms',
          authors: 'Mohsin Furkh Dar, Sarvottam Dixit',
          cited_by: { value: 1},
          year: 2019,
          link: 'https://www.ijsr.net/getabstract.php?paperid=ART20194439',
          Journal: 'https://www.ijsr.net/getabstract.php?paperid=ART20194439'
        }
        // ... more papers
      ],
      cited_by: { total: 44 },
      h_index: 3,
      i10_index: 2
    }
  };

  return cachedData[authorId] || {
    author: { name: 'Unknown', affiliations: [], cited_by: { total: 0 }, indices: { h_index: 0, i10_index: 0 } },
    articles: [],
    cited_by: { total: 0 },
    h_index: 0,
    i10_index: 0
  };
}

export async function GET() {
  try {
    const AUTHOR_ID = 'DGm9l2wAAAAJ';
    let data: ScholarApiResponse;

    // Try methods in order of preference
    const methods = [
      { name: 'SerpAPI', enabled: !!process.env.SERPAPI_KEY },
      { name: 'ScrapingBee', enabled: !!process.env.SCRAPINGBEE_API_KEY },
      { name: 'DirectScraping', enabled: true },
      { name: 'Scholarly', enabled: !!process.env.SCHOLARLY_API_URL },
      { name: 'Cached', enabled: true }
    ];

    console.log('Available methods:', methods.filter(m => m.enabled).map(m => m.name));

    // Try SerpAPI first (if available)
    if (process.env.SERPAPI_KEY) {
      try {
        console.log('Attempting SerpAPI...');
        const response = await fetch(
          `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${process.env.SERPAPI_KEY}`
        );
        
        if (response.ok) {
          data = await response.json();
          console.log('SerpAPI successful');
        } else {
          throw new Error(`SerpAPI failed: ${response.status}`);
        }
      } catch (error) {
        console.log('SerpAPI failed, trying alternatives...', error);
        
        // Try ScrapingBee
        if (process.env.SCRAPINGBEE_API_KEY) {
          try {
            console.log('Attempting ScrapingBee...');
            data = await fetchWithScrapingBee(AUTHOR_ID);
            console.log('ScrapingBee successful');
          } catch (error) {
            console.log('ScrapingBee failed, trying direct scraping...', error);
            
            // Try direct scraping
            try {
              console.log('Attempting direct scraping...');
              data = await scrapeGoogleScholar(AUTHOR_ID);
              console.log('Direct scraping successful');
            } catch (error) {
              console.log('Direct scraping failed, using cached data...', error);
              data = await getCachedData(AUTHOR_ID);
            }
          }
        } else {
          // Try direct scraping
          try {
            console.log('Attempting direct scraping...');
            data = await scrapeGoogleScholar(AUTHOR_ID);
            console.log('Direct scraping successful');
          } catch (error) {
            console.log('Direct scraping failed, using cached data...', error);
            data = await getCachedData(AUTHOR_ID);
          }
        }
      }
    } else {
      // No SerpAPI key, try other methods
      try {
        console.log('No SerpAPI key, attempting direct scraping...');
        data = await scrapeGoogleScholar(AUTHOR_ID);
        console.log('Direct scraping successful');
      } catch (error) {
        console.log('Direct scraping failed, using cached data...', error);
        data = await getCachedData(AUTHOR_ID);
      }
    }

    // Process the data (same logic as before)
    const authorInfo = data.author || {};
    const papers: ProcessedPaper[] = [];
    const citationCounts: number[] = [];
    
    if (data.articles && Array.isArray(data.articles)) {
      data.articles.forEach((article: Article) => {
        const citationCount = article.cited_by?.value || 
                             article.cited_by_count || 
                             article.citations || 
                             article.num_citations || 
                             0;
        
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
        
        if (citationCount > 0) {
          citationCounts.push(citationCount);
        }
      });
      
      citationCounts.sort((a, b) => b - a);
    }
    
    const publications = papers.length;
    
    let calculatedHIndex = 0;
    let calculatedI10Index = 0;
    
    if (citationCounts.length > 0) {
      for (let i = 0; i < citationCounts.length; i++) {
        if (citationCounts[i] >= i + 1) {
          calculatedHIndex = i + 1;
        } else {
          break;
        }
      }
      
      calculatedI10Index = citationCounts.filter((count: number) => count >= 10).length;
    }
    
    const totalCitations = authorInfo.cited_by?.total || 
                          data.cited_by?.total || 
                          authorInfo.cited_by_total || 
                          data.citations || 
                          0;
    
    const hIndex = authorInfo.indices?.h_index || 
                   data.h_index || 
                   authorInfo.h_index || 
                   calculatedHIndex;
    
    const i10Index = authorInfo.indices?.i10_index || 
                     data.i10_index || 
                     authorInfo.i10_index || 
                     calculatedI10Index;
    
    const citationsGraph = authorInfo.cited_by?.graph || 
                          data.cited_by?.graph || 
                          data.graph || 
                          [];
    
    const citationsByYear = Array.isArray(citationsGraph) ? citationsGraph.map((item: CitationGraphItem) => ({
      year: parseInt(item.year),
      citations: parseInt(item.citations)
    })).sort((a, b) => a.year - b.year) : [];
    
    const sortedPapers = papers.sort((a, b) => {
      if (a.citations !== b.citations) {
        return b.citations - a.citations;
      }
      const yearA = a.year || 0;
      const yearB = b.year || 0;
      return yearB - yearA;
    });
    
    const responseData = { 
      citations: totalCitations,
      publications,
      h_index: hIndex,
      i10_index: i10Index,
      citationsByYear,
      papers: sortedPapers,
      author_name: authorInfo.name || 'Unknown',
      author_affiliation: authorInfo.affiliations?.[0] || '',
      data_source: data.author ? 'API' : 'Cached' // Indicate data source
    };
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({ 
      error: 'Failed to fetch citation data',
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
