'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Publication types
type Publication = {
  id: string;
  title: string;
  authors: string;
  journal?: string;
  publication?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  year: number;
  doi?: string;
  status?: string;
  thumbnail?: string;
  citations: number;
  scholarUrl?: string;
  link?: string;
  isFromScholar?: boolean;
};

// Fallback/additional publications not in Scholar
const additionalPublications: Publication[] = [
 
];

// Function to determine publication type
function getPublicationType(publication: Publication): 'journal' | 'conference' {
  const title = publication.title.toLowerCase();
  const journal = (publication.journal || publication.publication || '').toLowerCase();
  
  // Conference indicators
  const conferenceKeywords = [
    'proceedings', 'conference', 'symposium', 'workshop', 'congress',
    'ieee', 'acm', 'international conference', 'cvpr', 'iccv', 'nips',
    'icml', 'aaai', 'ijcai'
  ];
  
  // Check if it's a conference publication
  const isConference = conferenceKeywords.some(keyword => 
    title.includes(keyword) || journal.includes(keyword)
  );
  
  return isConference ? 'conference' : 'journal';
}

// Function to generate thumbnail based on publication type/content
function generateThumbnail(publication: Publication): string {
  const title = publication.title.toLowerCase();
  
  // Map specific publications to their thumbnails
  if (title.includes('uma-net') || title.includes('adaptive ensemble loss')) {
    return '/images/publications/UMA-Net.jpg';
  } else if (title.includes('feature selection') || title.includes('genetic algorithm')) {
    return '/images/publications/Feature Selection.jpg';
  } else if (title.includes('efficientu-net') || title.includes('breast tumor segmentation')) {
    return '/images/publications/EfficientU-Net.jpg';
  } else if (title.includes('fingerprint') || title.includes('intuitionistic type-2')) {
    return '/images/publications/ijaisc.jpg';
  } else if (title.includes('face detection') || title.includes('performance comparison')) {
    return '/images/publications/ijsr.jpg';
  } else if (title.includes('security layer') || title.includes('software defined network')) {
    return '/images/publications/ijsnet.jpg';
  } else if (title.includes('fuzzy rough set loss')) {
    return '/images/publications/FRS Loss.jpg';
  } else if (title.includes('multi-modal attentionnet')) {
    return '/images/publications/MANN.jpg';
  } else if (title.includes('dynamic weight') || title.includes('conference')) {
    return '/images/publications/Conference_Paper.jpg';
  }
  
  // Default thumbnail (you can create a default.jpg if needed)
  return '/images/publications/Conference_Paper.jpg';
}

// Function to extract publication details from Scholar data
function processScholarPublication(scholarPaper: any, index: number): Publication {
  // Extract year from title or use current year as fallback
  let year = new Date().getFullYear();
  if (scholarPaper.year) {
    year = typeof scholarPaper.year === 'number' ? scholarPaper.year : parseInt(scholarPaper.year);
  }
  
  // Clean up authors string
  const authors = scholarPaper.authors || 'Unknown Author';
  
  // Use publication field as journal/venue
  const journal = scholarPaper.publication || 'Unknown Venue';
  
  return {
    id: `scholar-${index}`,
    title: scholarPaper.title || 'Untitled',
    authors: authors,
    journal: journal,
    publication: journal,
    year: year,
    citations: scholarPaper.citations || 0,
    link: scholarPaper.link,
    scholarUrl: scholarPaper.link,
    thumbnail: generateThumbnail({
      title: scholarPaper.title || '',
      authors: authors,
      journal: journal,
      year: year,
      citations: scholarPaper.citations || 0,
      id: `scholar-${index}`
    }),
    isFromScholar: true
  };
}

// Function to merge and deduplicate publications
function mergePublications(scholarPubs: Publication[], additionalPubs: Publication[]): Publication[] {
  const merged = [...scholarPubs];
  
  // Add additional publications that aren't already in Scholar results
  additionalPubs.forEach(addPub => {
    const exists = scholarPubs.some(schPub => 
      schPub.title.toLowerCase().includes(addPub.title.toLowerCase().substring(0, 30)) ||
      addPub.title.toLowerCase().includes(schPub.title.toLowerCase().substring(0, 30))
    );
    
    if (!exists) {
      merged.push(addPub);
    }
  });
  
  return merged;
}

export default function Publications() {
  const [pubType, setPubType] = useState<'journal' | 'conference' | 'all'>('all');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalCitations: 0,
    totalPublications: 0,
    hIndex: 0,
    i10Index: 0
  });

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch data from your Google Scholar API
        const response = await fetch('/api/scholar');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch publications: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Handle API error response
        if (data.error) {
          throw new Error(data.message || 'Failed to fetch citation data');
        }
        
        // Process Scholar publications
        const scholarPublications = data.papers ? 
          data.papers.map((paper: any, index: number) => processScholarPublication(paper, index)) : 
          [];
        
        // Merge with additional publications
        const allPublications = mergePublications(scholarPublications, additionalPublications);
        
        // Sort by citations (descending) and then by year (descending)
        allPublications.sort((a, b) => {
          if (a.citations !== b.citations) {
            return b.citations - a.citations; // Higher citations first
          }
          return b.year - a.year; // Then newer publications first
        });
        
        setPublications(allPublications);
        setStats({
          totalCitations: data.citations || 0,
          totalPublications: data.publications || allPublications.length,
          hIndex: data.h_index || 0,
          i10Index: data.i10_index || 0
        });
        
      } catch (err) {
        console.error('Error fetching publications:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching publications');
        
        // Fallback to additional publications only
        setPublications(additionalPublications);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  // Filter publications based on selected type
  const filteredPublications = publications.filter(pub => {
    if (pubType === 'all') return true;
    return getPublicationType(pub) === pubType;
  });

  // Count publications by type
  const journalCount = publications.filter(pub => getPublicationType(pub) === 'journal').length;
  const conferenceCount = publications.filter(pub => getPublicationType(pub) === 'conference').length;
  
  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-primary mb-12 text-center">
            Research Publications
          </h1>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-4 text-gray-600">Loading publications from Google Scholar...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Research Publications
        </h1>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-primary">{stats.totalCitations.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Citations</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-primary">{stats.totalPublications}</div>
            <div className="text-sm text-gray-600">Publications</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-primary">{stats.hIndex}</div>
            <div className="text-sm text-gray-600">h-index</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-primary">{stats.i10Index}</div>
            <div className="text-sm text-gray-600">i10-index</div>
          </div>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6 max-w-4xl mx-auto">
            <div className="flex">
              <div className="text-yellow-800">
                <strong>Note:</strong> {error}
                <br />
                <small>Showing available publications. Some data may be incomplete.</small>
              </div>
            </div>
          </div>
        )}
        
        {/* Publication Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium border border-gray-200 rounded-l-lg ${
                pubType === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setPubType('all')}
            >
              All Publications ({publications.length})
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium border-t border-b border-gray-200 ${
                pubType === 'journal' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setPubType('journal')}
            >
              Journal Articles ({journalCount})
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium border border-gray-200 rounded-r-lg ${
                pubType === 'conference' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setPubType('conference')}
            >
              Conference Proceedings ({conferenceCount})
            </button>
          </div>
        </div>
        
        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No publications found for the selected category.
            </div>
          ) : (
            filteredPublications.map((pub) => (
              <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
                {/* Publication Thumbnail */}
                <div className="flex-shrink-0 w-24 h-24 relative mx-auto md:mx-0">
                  <div className="bg-gray-200 w-full h-full rounded-md flex items-center justify-center overflow-hidden">
                    {pub.thumbnail ? (
                      <Image
                        src={pub.thumbnail}
                        alt={`${pub.journal || pub.publication} thumbnail`}
                        fill
                        className="object-contain p-2 rounded-md"
                        onError={(e) => {
                          // Fallback to default image on error
                          (e.target as HTMLImageElement).src = '/images/publications/default.jpg';
                        }}
                      />
                    ) : (
                      <span className="text-gray-400 text-xs text-center p-2">
                        {getPublicationType(pub) === 'journal' ? 'Journal' : 'Conference'}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Publication Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{pub.title}</h3>
                  <p className="text-gray-700 mb-1">{pub.authors}</p>
                  <p className="text-gray-600 mb-1 italic">
                    {pub.journal || pub.publication}
                    {pub.volume && `, vol. ${pub.volume}`}
                    {pub.issue && `, no. ${pub.issue}`}
                    {pub.pages && `, pp. ${pub.pages}`}
                    {`, ${pub.year}`}
                    {pub.status && ` (${pub.status})`}
                  </p>
                  
                  {/* Citations */}
                  {pub.citations > 0 && (
                    <div className="mt-2 inline-flex items-center bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      <svg 
                        className="w-4 h-4 mr-1.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                        />
                      </svg>
                      <span className="font-semibold">{pub.citations.toLocaleString()}</span>
                      <span className="ml-1">citations</span>
                      {pub.citations >= 10 && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          Highly Cited
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Links */}
                  <div className="mt-3 flex flex-wrap gap-4">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        View on Google Scholar
                      </a>
                    )}
                  </div>
                  
                  {/* Source indicator */}
                  {pub.isFromScholar && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Auto-synced from Google Scholar
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Refresh Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Refresh Publications
          </button>
        </div>
      </div>
    </div>
  );
}