'use client';

import { useState } from 'react';
import Image from 'next/image';

// Publication types
type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  year: string;
  doi?: string;
  status?: string;
  thumbnail?: string;
};

// Publications data
const journalArticles: Publication[] = [
  {
    id: 'j1',
    title: 'Fuzzy rough set loss for handling boundary uncertainty in medical image segmentation',
    authors: 'M. F. Dar and A. Ganivada',
    journal: 'Congnitive Computation',
    volume: 'Under Review',
    year: '2025',
    thumbnail: '/images/publications/FRS Loss.jpg'
  },
  {
    id: 'j2',
    title: 'Multi-modal attentionnet for medical image classification with dual branch feature extraction and saliency maps',
    authors: 'M. F. Dar and A. Ganivada',
    journal: 'Expert Systems with Applications',
    volume: 'Under Review',
    year: '2025',
    thumbnail: '/images/publications/MANN.jpg'
  },
  {
    id: 'j3',
    title: 'Adaptive ensemble loss and multi-scale attention in breast ultrasound segmentation with uma-net',
    authors: 'M. F. Dar and A. Ganivada',
    journal: 'Medical & Biological Engineering & Computing',
    year: '2025',
    doi: '10.1007/s11517-025-03301-5',
    thumbnail: '/images/publications/UMA-Net.jpg'
  },
  {
    id: 'j4',
    title: 'Design and analysis of a robust security layer for software defined network framework',
    authors: 'A. N. Alhaj, N. D. Patel, A. Singh, R. K. Bondugula, M. F. Dar, and J. Ahamed',
    journal: 'International Journal of Sensor Networks',
    volume: '46',
    issue: '1',
    pages: '1-14',
    year: '2024',
    doi: '10.1504/IJSNET.2024.141613',
    thumbnail: '/images/publications/ijsnet.png'
  },
  {
    id: 'j5',
    title: 'Deep learning and genetic algorithm-based ensemble model for feature selection and classification of breast ultrasound images',
    authors: 'M. F. Dar and A. Ganivada',
    journal: 'Image and Vision Computing',
    volume: '146',
    pages: '105018',
    year: '2024',
    doi: '10.1016/J.IMAVIS.2024.105018',
    thumbnail: '/images/publications/Feature Selection.jpg'
  },
  {
    id: 'j6',
    title: 'Efficientu-net: A novel deep learning method for breast tumor segmentation and classification in ultrasound images',
    authors: 'M. F. Dar and A. Ganivada',
    journal: 'Neural Processing Letters',
    volume: '55',
    pages: '10439-10462',
    year: '2023',
    doi: '10.1007/s11063-023-11333-x',
    thumbnail: '/images/publications/EfficientU-Net.jpg'
  },
  {
    id: 'j7',
    title: 'Latent fingerprint enhancement and matching using intuitionistic type-2 fuzzy',
    authors: 'S. Mukhtar, M. F. Dar, and A. Kaur',
    journal: 'International Journal of Artificial Intelligence and Soft Computing',
    volume: '7',
    issue: '4',
    pages: '313-328',
    year: '2022',
    doi: '10.1504/IJAISC.2022.130558',
    thumbnail: '/images/publications/ijaisc.png'
  },
  {
    id: 'j8',
    title: 'Performance comparison of face detection and recognition algorithms',
    authors: 'M. F. Dar and D. S. Dixit',
    journal: 'International Journal of Science and Research (IJSR)',
    volume: '8',
    issue: '1',
    pages: '986-994',
    year: '2019',
    doi: '10.21275/ART20194439',
    thumbnail: '/images/publications/ijsr.png'
  }
];

const conferenceProceedings: Publication[] = [
  {
    id: 'c1',
    title: 'Dynamic weight adjusted ensemble loss for enhanced medical image segmentation',
    authors: 'M. F. Dar and A. Ganivada',
    journal: 'Proceedings of Fourth International Conference on Computing and Communication Networks',
    year: '2025',
    thumbnail: '/images/publications/Conference_Paper.jpg'
  }
];

export default function Publications() {
  const [pubType, setPubType] = useState<'journal' | 'conference'>('journal');
  
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Research Publications
        </h1>
        
        {/* Publication Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium border border-gray-200 rounded-l-lg ${
                pubType === 'journal' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setPubType('journal')}
            >
              Journal Articles ({journalArticles.length})
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
              Conference Proceedings ({conferenceProceedings.length})
            </button>
          </div>
        </div>
        
        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {(pubType === 'journal' ? journalArticles : conferenceProceedings).map((pub) => (
            <div key={pub.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
              {/* Journal Thumbnail */}
              <div className="flex-shrink-0 w-24 h-24 relative mx-auto md:mx-0">
                <div className="bg-gray-200 w-full h-full rounded-md flex items-center justify-center">
                  {pub.thumbnail ? (
                    <Image
                      src={pub.thumbnail}
                      alt={`${pub.journal} thumbnail`}
                      fill
                      className="object-contain p-2 rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs text-center">Journal thumbnail</span>
                  )}
                </div>
              </div>
              
              {/* Publication Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{pub.title}</h3>
                <p className="text-gray-700 mb-1">{pub.authors}</p>
                <p className="text-gray-600 mb-1 italic">
                  {pub.journal}
                  {pub.volume && `, vol. ${pub.volume}`}
                  {pub.issue && `, no. ${pub.issue}`}
                  {pub.pages && `, pp. ${pub.pages}`}
                  {`, ${pub.year}`}
                  {pub.status && ` (${pub.status})`}
                </p>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
