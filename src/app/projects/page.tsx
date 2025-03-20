'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'medical' | 'computer-vision' | 'fuzzy-logic';
  image: string;
  technologies: string[];
  highlights?: string[];
  collaborators?: string[];
  papers?: {
    title: string;
    link: string;
  }[];
}

const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Breast Ultrasound Segmentation with UMA-Net',
    description: 'A novel deep learning architecture for accurate segmentation of breast tumors in ultrasound images using multi-scale attention mechanisms and adaptive ensemble loss functions.',
    category: 'medical',
    image: '/images/projects/uma-net.png',
    technologies: ['PyTorch', 'Deep Learning', 'Medical Image Analysis', 'Attention Mechanisms'],
    highlights: [
      'Developed a new architecture that achieves state-of-the-art performance on benchmark datasets',
      'Implemented adaptive ensemble loss to handle class imbalance and boundary uncertainty',
      'Integrated multi-scale attention mechanisms to capture global context and local details',
      'Demonstrated 95%+ accuracy in segmenting breast tumors in clinical datasets'
    ],
    papers: [
      {
        title: 'Adaptive ensemble loss and multi-scale attention in breast ultrasound segmentation with uma-net',
        link: 'https://doi.org/10.1007/s11517-025-03301-5'
      }
    ]
  },
  {
    id: 'proj2',
    title: 'Fuzzy Rough Set Loss for Medical Image Segmentation',
    description: 'A novel loss function based on fuzzy rough set theory that effectively handles boundary uncertainty in medical image segmentation tasks, improving performance over traditional losses.',
    category: 'fuzzy-logic',
    image: '/images/projects/fuzzy-rough.png',
    technologies: ['PyTorch', 'Fuzzy Rough Sets', 'Medical Imaging', 'Loss Functions'],
    highlights: [
      'Formulated a new theoretical framework combining fuzzy rough sets with deep learning',
      'Implemented the loss function in PyTorch and integrated with popular segmentation networks',
      'Conducted extensive experiments on multiple medical imaging modalities',
      'Demonstrated superior performance on boundary regions compared to existing methods'
    ],
    papers: [
      {
        title: 'Fuzzy rough set loss for handling boundary uncertainty in medical image segmentation',
        link: '#'
      }
    ]
  },
  {
    id: 'proj3',
    title: 'Multi-Modal AttentionNet for Medical Image Classification',
    description: 'A deep learning framework that combines information from multiple imaging modalities using a dual-branch feature extraction network and saliency maps for enhanced classification.',
    category: 'medical',
    image: '/images/projects/multi-modal.png',
    technologies: ['TensorFlow', 'Multi-modal Learning', 'Attention Mechanisms', 'Medical Imaging'],
    highlights: [
      'Designed a dual-branch architecture for extracting features from different imaging modalities',
      'Implemented cross-modal attention to fuse complementary information',
      'Generated interpretable saliency maps to visualize network decisions',
      'Achieved improved diagnostic accuracy compared to single-modality approaches'
    ],
    collaborators: ['Prof. A. Ganivada'],
    papers: [
      {
        title: 'Multi-modal attentionnet for medical image classification with dual branch feature extraction and saliency maps',
        link: '#'
      }
    ]
  },
  {
    id: 'proj4',
    title: 'EfficientU-Net for Breast Tumor Analysis',
    description: 'An efficient deep learning approach for simultaneous segmentation and classification of breast tumors in ultrasound images, optimized for clinical deployment.',
    category: 'medical',
    image: '/images/projects/efficientu.png',
    technologies: ['PyTorch', 'U-Net', 'Efficient Neural Networks', 'Medical Image Analysis'],
    highlights: [
      'Developed a lightweight architecture for resource-constrained clinical environments',
      'Implemented joint training for segmentation and classification tasks',
      'Optimized for real-time inference on standard clinical workstations',
      'Validated on multi-center clinical datasets with diverse imaging protocols'
    ],
    papers: [
      {
        title: 'Efficientu-net: A novel deep learning method for breast tumor segmentation and classification in ultrasound images',
        link: 'https://doi.org/10.1007/s11063-023-11333-x'
      }
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Research Projects
        </h1>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-gray-200 ${
                filter === 'medical' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('medical')}
            >
              Medical Imaging
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border-t border-b border-gray-200 ${
                filter === 'computer-vision' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('computer-vision')}
            >
              Computer Vision
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-r-lg ${
                filter === 'fuzzy-logic' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('fuzzy-logic')}
            >
              Fuzzy Logic
            </button>
          </div>
        </div>
        
        {/* Projects List */}
        <div className="max-w-6xl mx-auto space-y-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Image */}
                <div className="lg:w-1/3 w-full h-64 relative bg-gray-200 rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Project image placeholder</span>
                  </div>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  )}
                </div>
                
                {/* Project Details */}
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Highlights</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.highlights.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Associated Papers */}
                  {project.papers && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Associated Papers</h3>
                      <ul className="space-y-1">
                        {project.papers.map((paper, idx) => (
                          <li key={idx}>
                            <a 
                              href={paper.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {paper.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
