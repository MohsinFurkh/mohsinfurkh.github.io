'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'medical' | 'computer-vision' | 'fuzzy-logic' | 'web' | 'nlp';
  image: string;
  technologies: string[];
  highlights?: string[];
  collaborators?: string[];
  papers?: {
    title: string;
    link: string;
  }[];
  links?: {
    title: string;
    url: string;
  }[];
}

const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'EfficientU-Net for Breast Tumor Analysis',
    description: 'A novel deep learning method for breast tumor segmentation in ultrasound images, combining EfficientNetB7 as an encoder with an Atrous Convolution block to improve segmentation accuracy.',
    category: 'medical',
    image: '/images/projects/efficient-unet.jpg',
    technologies: ['TensorFlow', 'EfficientNetB7', 'Atrous Convolution', 'Medical Image Analysis'],
    highlights: [
      'Developed a lightweight architecture combining EfficientNetB7 with U-Net',
      'Implemented Atrous Convolution blocks for better feature extraction',
      'Achieved state-of-the-art performance on breast ultrasound datasets',
      'Published in Neural Processing Letters (2023)'
    ],
    papers: [
      {
        title: 'EfficientU-Net: A Novel Deep Learning Method for Breast Tumor Segmentation and Classification in Ultrasound Images',
        link: 'https://doi.org/10.1007/s11063-023-11333-x'
      }
    ],
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/EfficientU-Net'
      }
    ]
  },
  {
    id: 'proj2',
    title: 'UMA-Net for Breast Ultrasound Segmentation',
    description: 'Advanced deep learning architecture incorporating multi-scale attention mechanisms and adaptive ensemble loss for accurate breast tumor segmentation in ultrasound images.',
    category: 'medical',
    image: '/images/projects/uma-net.png',
    technologies: ['TensorFlow', 'Deep Learning', 'Attention Mechanisms', 'Medical Imaging'],
    highlights: [
      'Proposed novel multi-scale attention mechanisms for better feature extraction',
      'Developed adaptive ensemble loss function for improved training stability',
      'Achieved superior performance on benchmark datasets',
      'Published in Medical & Biological Engineering & Computing (2025)'
    ],
    papers: [
      {
        title: 'Adaptive Ensemble Loss and Multi-Scale Attention in Breast Ultrasound Segmentation with UMA-Net',
        link: 'https://doi.org/10.1007/s11517-025-33301-5'
      }
    ],
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/UMA-Net-with-Multi-Scale-Attention'
      }
    ]
  },
  {
    id: 'proj3',
    title: 'Genetic Algorithm for Feature Selection',
    description: 'An ensemble approach combining deep learning and genetic algorithms for optimal feature selection in breast ultrasound image classification.',
    category: 'computer-vision',
    image: '/images/projects/genetic-algo.png',
    technologies: ['TensorFlow', 'Genetic Algorithms', 'Feature Selection', 'Deep Learning'],
    highlights: [
      'Developed novel feature selection method using genetic algorithms',
      'Integrated with deep learning models for improved classification',
      'Achieved 4-9% improvement in accuracy on benchmark datasets',
      'Published in Image and Vision Computing (2024)'
    ],
    papers: [
      {
        title: 'Deep Learning and Genetic Algorithm-based Ensemble Model for Feature Selection and Classification of Breast Ultrasound Images',
        link: 'https://doi.org/10.1016/j.imavis.2024.105018'
      }
    ],
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/Genetic-Algorithm-based-Feature-Selection'
      }
    ]
  },
  {
    id: 'proj4',
    title: 'Shifa.AI - AI-Powered Healthcare Platform',
    description: 'An advanced healthcare platform providing AI-powered medical assistance, symptom analysis, and personalized health assessments with secure data management.',
    category: 'web',
    image: '/images/projects/shifa-ai.png',
    technologies: [
      'Next.js', 
      'TypeScript', 
      'Tailwind CSS', 
      'MongoDB', 
      'NextAuth.js',
      'Google Gemini AI',
      'OpenAI',
      'Mongoose ODM',
      'Headless UI'
    ],
    highlights: [
      'AI-powered symptom analysis and health assessments using Google Gemini AI and OpenAI',
      'Secure user authentication with JWT and NextAuth.js integration',
      'Responsive UI built with Tailwind CSS and Headless UI components',
      'MongoDB database with Mongoose for secure medical data management',
      'Modern development setup with TypeScript and Next.js API routes',
      'Real-time toast notifications for user feedback'
    ],
    links: [
      {
        title: 'Live Demo',
        url: 'https://shifa-ai.vercel.app/'
      },
      {
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/Shifa.AI'
      }
    ]
  },
  {
    id: 'proj5',
    title: 'UGC NET CS HUB',
    description: 'A specialized e-learning platform tailored for aspirants preparing for the UGC NET (University Grants Commission - National Eligibility Test) in Computer Science and Applications.',
    category: 'web',
    image: '/images/projects/ugc-net-cs-hub.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'NextAuth.js', 'Tailwind CSS'],
    highlights: [
      'Comprehensive question bank with detailed solutions and explanations',
      'Practice modes including subject-wise, topic-specific, and difficulty-based questions',
      'Performance analytics and progress tracking for effective learning',
      'Secure authentication with role-based access control',
      'Admin dashboard for content management and user monitoring'
    ],
    links: [
      {
        title: 'Live Demo',
        url: 'https://ntanetcs.vercel.app/'
      },
      {
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/NTANETCS'
      }
    ]
  },
  {
    id: 'proj6',
    title: 'GoalTrackr - Personal Goal Management',
    description: 'A full-stack web application for tracking personal goals, tasks, and progress with visualization dashboards and journaling features.',
    category: 'web',
    image: '/images/projects/goal-tracker.png',
    technologies: ['Next.js', 'React', 'MongoDB', 'Material UI', 'NextAuth'],
    highlights: [
      'Built with modern web technologies including Next.js and MongoDB',
      'Implements secure user authentication and data persistence',
      'Features interactive dashboards with progress visualization',
      'Live demo available at smart-goal-tracker.vercel.app'
    ],
    links: [
      {
        title: 'Live Demo',
        url: 'https://smart-goal-tracker.vercel.app/'
      },
      { 
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/GoalTracker'
      }
    ]
  },
  {
    id: 'proj7',
    title: 'IEEE BigMM Data Challenge',
    description: 'Multi-task multimodal framework for predicting labels from tweets, developed for the IEEE BigMM Data Challenge.',
    category: 'nlp',
    image: '/images/projects/ieee-bigmm.png',
    technologies: ['Python', 'TensorFlow', 'Transformers', 'Multimodal Learning'],
    highlights: [
      'Developed solution for multi-label tweet classification',
      'Incorporated both text and image modalities',
      'Implemented state-of-the-art transformer architectures',
      'Competed in IEEE BigMM conference challenge'
    ],
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/MohsinFurkh/IEEE-BigMM-Data-Challenge'
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
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg ${
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
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg ${
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
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg ${
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
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg ${
                filter === 'web' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('web')}
            >
              Web Development
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg ${
                filter === 'nlp' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('nlp')}
            >
              NLP
            </button>
          </div>
        </div>
        
        {/* Projects List */}
        <div className="max-w-6xl mx-auto space-y-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Image */}
                <div className="lg:w-1/3 w-full h-64 relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/800x600/6B7280/FFFFFF?text=${encodeURIComponent(project.title)}`;
                      }}
                      priority={index < 3} // Load first 3 images eagerly for better LCP
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <span className="text-gray-500 text-sm">{project.title}</span>
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    <a 
                      href={project.links?.[0]?.url || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative group-hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      {project.title}
                    </a>
                  </h2>
                  
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
                  
                  {/* Project Links */}
                  {project.links && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Links</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1.5 bg-primary text-white rounded-md text-sm hover:bg-primary-dark transition-colors"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
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
