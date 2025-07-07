// API route to fetch Google Scholar data with Next.js compatible alternatives
import { NextResponse } from 'next/server';

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

// Alternative 1: Using regex parsing (no external dependencies)
function parseGoogleScholarHTML(html: string): ScholarApiResponse {
  try {
    // Extract author name
    const nameMatch = html.match(/id="gsc_prf_in"[^>]*>([^<]+)</);
    const name = nameMatch ? nameMatch[1].trim() : 'Unknown';

    // Extract affiliation
    const affiliationMatch = html.match(/class="gsc_prf_il"[^>]*>([^<]+)</);
    const affiliation = affiliationMatch ? affiliationMatch[1].trim() : '';

    // Extract citation stats
    const statsMatches = html.match(/class="gsc_rsb_std"[^>]*>([^<]+)</g);
    const totalCitations = statsMatches && statsMatches[0] ? 
      parseInt(statsMatches[0].replace(/[^0-9]/g, '')) || 0 : 0;
    const hIndex = statsMatches && statsMatches[2] ? 
      parseInt(statsMatches[2].replace(/[^0-9]/g, '')) || 0 : 0;
    const i10Index = statsMatches && statsMatches[4] ? 
      parseInt(statsMatches[4].replace(/[^0-9]/g, '')) || 0 : 0;

    // Extract papers - this is more complex with regex
    const articles: Article[] = [];
    const paperRowRegex = /class="gsc_a_tr"[^>]*>([\s\S]*?)<\/tr>/g;
    const paperRows = html.match(paperRowRegex);

    if (paperRows) {
      paperRows.forEach((row, index) => {
        // Extract title
        const titleMatch = row.match(/class="gsc_a_at"[^>]*>([^<]+)</);
        const title = titleMatch ? titleMatch[1].trim() : `Paper ${index + 1}`;

        // Extract authors (usually the next text after title)
        const authorMatch = row.match(/class="gs_gray"[^>]*>([^<]+)</);
        const authors = authorMatch ? authorMatch[1].trim() : '';

        // Extract citations
        const citationMatch = row.match(/class="gsc_a_ac[^"]*"[^>]*>([^<]*)</);
        const citations = citationMatch && citationMatch[1] ? 
          parseInt(citationMatch[1]) || 0 : 0;

        // Extract year
        const yearMatch = row.match(/class="gsc_a_y"[^>]*>([^<]*)</);
        const year = yearMatch && yearMatch[1] ? 
          parseInt(yearMatch[1]) || undefined : undefined;

        // Extract link
        const linkMatch = row.match(/href="([^"]*)"[^>]*class="gsc_a_at"/);
        const link = linkMatch ? `https://scholar.google.com${linkMatch[1]}` : '';

        articles.push({
          title,
          authors,
          cited_by: { value: citations },
          year,
          link
        });
      });
    }

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
    console.error('Error parsing HTML:', error);
    throw new Error('Failed to parse Google Scholar HTML');
  }
}

// Alternative 2: Using ScrapingBee API (works with Next.js)
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
  return parseGoogleScholarHTML(html);
}

// Alternative 3: Using Proxycrawl API
async function fetchWithProxycrawl(authorId: string): Promise<ScholarApiResponse> {
  const PROXYCRAWL_API_KEY = process.env.PROXYCRAWL_API_KEY;
  
  if (!PROXYCRAWL_API_KEY) {
    throw new Error('Proxycrawl API key not configured');
  }

  const url = `https://scholar.google.com/citations?user=${authorId}&hl=en`;
  const apiUrl = `https://api.proxycrawl.com/?token=${PROXYCRAWL_API_KEY}&url=${encodeURIComponent(url)}`;

  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    throw new Error(`Proxycrawl API error: ${response.status}`);
  }

  const html = await response.text();
  return parseGoogleScholarHTML(html);
}

// Alternative 4: Direct scraping with better error handling
async function scrapeGoogleScholar(authorId: string): Promise<ScholarApiResponse> {
  const url = `https://scholar.google.com/citations?user=${authorId}&hl=en`;
  
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  ];
  
  const headers = {
    'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)],
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Cache-Control': 'max-age=0'
  };

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const html = await response.text();
  return parseGoogleScholarHTML(html);
}

// Alternative 5: Using a cached data strategy with periodic updates
async function getCachedData(authorId: string): Promise<ScholarApiResponse> {
  // Manual data entry - update this periodically
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
    author: { 
      name: 'Unknown', 
      affiliations: [], 
      cited_by: { total: 0 }, 
      indices: { h_index: 0, i10_index: 0 } 
    },
    articles: [],
    cited_by: { total: 0 },
    h_index: 0,
    i10_index: 0
  };
}

// Alternative 6: Using a third-party academic API
async function fetchFromSemanticScholar(authorId: string): Promise<ScholarApiResponse> {
  try {
    // Note: You'll need to map Google Scholar ID to Semantic Scholar ID
    const semanticScholarId = 'your-semantic-scholar-id'; // Replace with actual ID
    const url = `https://api.semanticscholar.org/graph/v1/author/${semanticScholarId}?fields=name,affiliations,paperCount,citationCount,hIndex,papers.title,papers.citationCount,papers.year,papers.authors`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Semantic Scholar API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Convert Semantic Scholar format to our format
    const articles: Article[] = data.papers?.map((paper: any) => ({
      title: paper.title,
      authors: paper.authors?.map((author: any) => author.name).join(', '),
      cited_by: { value: paper.citationCount || 0 },
      year: paper.year
    })) || [];
    
    return {
      author: {
        name: data.name,
        affiliations: data.affiliations || [],
        cited_by: { total: data.citationCount || 0 },
        indices: { h_index: data.hIndex || 0, i10_index: 0 }
      },
      articles,
      cited_by: { total: data.citationCount || 0 },
      h_index: data.hIndex || 0,
      i10_index: 0
    };
  } catch (error) {
    console.error('Semantic Scholar API error:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const AUTHOR_ID = 'DGm9l2wAAAAJ'; // Replace with your actual Google Scholar ID
    let data: ScholarApiResponse | null = null;
    let dataSource = 'unknown';

    console.log('Attempting to fetch Google Scholar data...');

    // Try methods in order of preference
    const methods = [
      { name: 'SerpAPI', enabled: !!process.env.SERPAPI_KEY },
      { name: 'ScrapingBee', enabled: !!process.env.SCRAPINGBEE_API_KEY },
      { name: 'Proxycrawl', enabled: !!process.env.PROXYCRAWL_API_KEY },
      { name: 'DirectScraping', enabled: true },
      { name: 'SemanticScholar', enabled: true },
      { name: 'Cached', enabled: true }
    ];

    console.log('Available methods:', methods.filter(m => m.enabled).map(m => m.name));

    let lastError: any = null;

    // Method 1: Try SerpAPI first (if available)
    if (process.env.SERPAPI_KEY) {
      try {
        console.log('Attempting SerpAPI...');
        const response = await fetch(
          `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${process.env.SERPAPI_KEY}`
        );
        
        if (response.ok) {
          data = await response.json();
          dataSource = 'SerpAPI';
          console.log('SerpAPI successful');
        } else {
          throw new Error(`SerpAPI failed: ${response.status}`);
        }
      } catch (error) {
        lastError = error;
        console.log('SerpAPI failed:', error);
      }
    }

    // Method 2: Try ScrapingBee
    if (!data && process.env.SCRAPINGBEE_API_KEY) {
      try {
        console.log('Attempting ScrapingBee...');
        data = await fetchWithScrapingBee(AUTHOR_ID);
        dataSource = 'ScrapingBee';
        console.log('ScrapingBee successful');
      } catch (error) {
        lastError = error;
        console.log('ScrapingBee failed:', error);
      }
    }

    // Method 3: Try Proxycrawl
    if (!data && process.env.PROXYCRAWL_API_KEY) {
      try {
        console.log('Attempting Proxycrawl...');
        data = await fetchWithProxycrawl(AUTHOR_ID);
        dataSource = 'Proxycrawl';
        console.log('Proxycrawl successful');
      } catch (error) {
        lastError = error;
        console.log('Proxycrawl failed:', error);
      }
    }

    // Method 4: Try direct scraping
    if (!data) {
      try {
        console.log('Attempting direct scraping...');
        data = await scrapeGoogleScholar(AUTHOR_ID);
        dataSource = 'DirectScraping';
        console.log('Direct scraping successful');
      } catch (error) {
        lastError = error;
        console.log('Direct scraping failed:', error);
      }
    }

    // Method 5: Try Semantic Scholar
    if (!data) {
      try {
        console.log('Attempting Semantic Scholar...');
        data = await fetchFromSemanticScholar(AUTHOR_ID);
        dataSource = 'SemanticScholar';
        console.log('Semantic Scholar successful');
      } catch (error) {
        lastError = error;
        console.log('Semantic Scholar failed:', error);
      }
    }

    // Method 6: Use cached data as final fallback
    if (!data) {
      console.log('All methods failed, using cached data...');
      data = await getCachedData(AUTHOR_ID);
      dataSource = 'Cached';
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
    
    // Calculate h-index and i10-index
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
    
    // Process citations by year, ensuring we have valid numbers and filtering out invalid entries
    let citationsByYear: Array<{year: number, citations: number}> = [];
    if (Array.isArray(citationsGraph)) {
      citationsByYear = citationsGraph
        .map((item: CitationGraphItem) => {
          const year = parseInt(item.year);
          const citations = parseInt(item.citations);
          return {
            year: isNaN(year) ? 0 : year,
            citations: isNaN(citations) ? 0 : citations
          };
        })
        .filter(item => item.year > 0) // Filter out invalid years
        .sort((a, b) => a.year - b.year);
    }
    
    const sortedPapers = papers.sort((a, b) => {
      if (a.citations !== b.citations) {
        return b.citations - a.citations;
      }
      const yearA = a.year || 0;
      const yearB = b.year || 0;
      return yearB - yearA;
    });
    
    // Ensure we have at least some citation data
    const hasCitationData = citationsByYear.length > 0 || totalCitations > 0;
    
    const responseData = { 
      citations: totalCitations,
      publications,
      h_index: hIndex,
      i10_index: i10Index,
      citationsByYear: hasCitationData ? citationsByYear : [
        // Default data if no citations are available
        { year: new Date().getFullYear() - 2, citations: 0 },
        { year: new Date().getFullYear() - 1, citations: 0 },
        { year: new Date().getFullYear(), citations: totalCitations || 0 }
      ],
      papers: sortedPapers,
      author_name: authorInfo.name || 'Unknown',
      author_affiliation: authorInfo.affiliations?.[0] || '',
      data_source: dataSource,
      last_updated: new Date().toISOString()
    };
    
    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('Error fetching Google Scholar data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Return cached data as fallback even on error
    try {
      const fallbackData = await getCachedData('DGm9l2wAAAAJ');
      const processedFallback = {
        citations: fallbackData.cited_by?.total || 0,
        publications: fallbackData.articles?.length || 0,
        h_index: fallbackData.h_index || 0,
        i10_index: fallbackData.i10_index || 0,
        citationsByYear: [],
        papers: fallbackData.articles?.map(article => ({
          title: article.title || 'Untitled',
          citations: article.cited_by?.value || 0,
          year: typeof article.year === 'string' ? parseInt(article.year) : article.year,
          authors: article.authors,
          publication: article.publication,
          link: article.link
        })) || [],
        author_name: fallbackData.author?.name || 'Unknown',
        author_affiliation: fallbackData.author?.affiliations?.[0] || '',
        data_source: 'Cached (Error Fallback)',
        error: errorMessage
      };
      
      return NextResponse.json(processedFallback);
    } catch (fallbackError) {
      return NextResponse.json({ 
        error: 'Failed to fetch citation data',
        message: errorMessage,
        fallback: {
          citations: 0,
          publications: 0,
          h_index: 0,
          i10_index: 0,
          citationsByYear: [],
          papers: [],
          data_source: 'Empty Fallback'
        }
      }, { status: 500 });
    }
  }
}
