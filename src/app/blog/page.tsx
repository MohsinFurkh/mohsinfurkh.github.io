'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// This would typically come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: 'PhD in Medical Image Analysis',
    excerpt: 'Research objectives and approaches for PhD studies in medical image analysis, focusing on segmentation techniques for medical images.',
    date: 'May 10, 2023',
    readTime: '5 min read',
    category: 'Research',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/ph-d-in-medical-image-analysis'
  },
  {
    id: 2,
    title: 'Skills Requirement for PhD in Medical Image Analysis',
    excerpt: 'Essential skills and knowledge areas needed to excel in medical image analysis research.',
    date: 'May 12, 2023',
    readTime: '6 min read',
    category: 'Research',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/skills-requirement-for-ph-d-in-medical-image-analysis'
  },
  {
    id: 3,
    title: 'Developing a Novel Segmentation Technique',
    excerpt: 'Exploring innovative approaches to medical image segmentation for improved diagnostic accuracy.',
    date: 'June 2, 2023',
    readTime: '7 min read',
    category: 'Image Processing',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/developing-a-novel-segmentation-technique'
  },
  {
    id: 4,
    title: 'Overcoming Distractions and Staying Focused',
    excerpt: 'Strategies for maintaining focus and productivity during research work and studies.',
    date: 'June 15, 2023',
    readTime: '5 min read',
    category: 'Productivity',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/overcoming-distractions-and-staying-focused'
  },
  {
    id: 5,
    title: 'Deepfakes: The Double-Edged Sword of Synthetic Media',
    excerpt: 'Examining the implications and challenges of deepfake technology in media and society.',
    date: 'July 1, 2023',
    readTime: '8 min read',
    category: 'AI Ethics',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/deepfakes-the-double-edged-sword-of-synthetic-media'
  },
  {
    id: 6,
    title: 'The Many Causes of Arrogance: Understanding and Overcoming Them',
    excerpt: 'An exploration of the psychological factors behind arrogance and strategies for personal growth.',
    date: 'July 15, 2023',
    readTime: '6 min read',
    category: 'Personal Development',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/the-many-causes-of-arrogance-understanding-and-overcoming-them'
  },
  {
    id: 7,
    title: 'U-Net Model and Its Limitations',
    excerpt: 'An in-depth analysis of the U-Net architecture for image segmentation and its current limitations.',
    date: 'August 5, 2023',
    readTime: '7 min read',
    category: 'Deep Learning',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/unet-model-and-its-limitations'
  },
  {
    id: 8,
    title: 'Fuzzy-Based U-Net Model',
    excerpt: 'Exploring the integration of fuzzy logic with U-Net for improved medical image segmentation.',
    date: 'August 20, 2023',
    readTime: '6 min read',
    category: 'Image Processing',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/fuzzy-based-unet-model'
  },
  {
    id: 9,
    title: 'Fuzzy Cross-Entropy Loss Function in Image Segmentation',
    excerpt: 'Understanding and implementing fuzzy cross-entropy loss for more robust image segmentation models.',
    date: 'September 1, 2023',
    readTime: '8 min read',
    category: 'Deep Learning',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/fuzzy-cross-entropy-loss-function-in-image-segmentation'
  },
  {
    id: 10,
    title: '12 Signs You\'re a Great Parent',
    excerpt: 'Key indicators of effective parenting and creating a nurturing environment for children.',
    date: 'September 15, 2023',
    readTime: '5 min read',
    category: 'Parenting',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/12-signs-you-re-a-great-parent-how-to-create-a-nurturing-environment-for-your-children'
  },
  {
    id: 11,
    title: 'Exploring Achabal Gardens: A Mughal Masterpiece',
    excerpt: 'A journey through the historical and architectural significance of Achabal Gardens in Kashmir.',
    date: 'October 1, 2023',
    readTime: '6 min read',
    category: 'Travel',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/exploring-achabal-gardens-a-mughal-masterpiece'
  },
  {
    id: 12,
    title: 'Data Analysis of Anantnag District\'s Teaching Support Merit List',
    excerpt: 'Insights and analysis from the teaching support recruitment merit list in Anantnag district.',
    date: 'October 15, 2023',
    readTime: '7 min read',
    category: 'Data Analysis',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/unveiling-insights-data-analysis-of-anantnag-district-s-teaching-support-recruitment-merit-list'
  },
  {
    id: 13,
    title: 'Fuzzy Cross-Entropy Loss Function in Image Segmentation (Part 2)',
    excerpt: 'Advanced applications and optimizations of fuzzy cross-entropy loss in medical image segmentation.',
    date: 'November 1, 2023',
    readTime: '9 min read',
    category: 'Deep Learning',
    external: true,
    url: 'https://mohsinfaurkh.wixsite.com/deepmedresearch/post/fuzzy-cross-entropy-loss-function-in-image-segmentation'
  }
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 5;

  // Get all unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle next/previous page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Blog</h1>
            <p className="text-xl text-gray-600 mb-6">Insights and updates on medical AI, deep learning, and healthcare technology</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <Link href={post.external ? post.url : `/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link 
                      href={post.external ? post.url : `/blog/${post.id}`} 
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No posts found in this category.</p>
              </div>
            )}
          </div>
          
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button 
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                  }`}
                >
                  Previous
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Show first page, last page, and current page with neighbors
                  if (
                    i === 0 || 
                    i === totalPages - 1 || 
                    (i >= currentPage - 2 && i <= currentPage)
                  ) {
                    return (
                      <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`px-4 py-2 border rounded-md ${
                          currentPage === i + 1
                            ? 'border-primary bg-primary text-white hover:bg-primary/90'
                            : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  }
                  
                  // Show ellipsis
                  if (i === 1 || i === totalPages - 2) {
                    return (
                      <span key={i} className="px-2 py-2">
                        ...
                      </span>
                    );
                  }
                  
                  return null;
                })}
                
                <button 
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === totalPages
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
