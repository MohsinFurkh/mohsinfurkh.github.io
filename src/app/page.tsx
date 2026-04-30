'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  // Hardcoded Google Scholar metrics (update manually every 3-4 months)
  const scholarData = {
    citations: 83,
    publications: 8,
    h_index: 4,
    i10_index: 2,
    citationsByYear: [
      { year: 2022, citations: 1 },
      { year: 2023, citations: 1 },
      { year: 2024, citations: 18 },
      { year: 2025, citations: 50 },
      { year: 2026, citations: 13 }
    ] as Array<{year: number, citations: number}>,
    author_name: 'Mohsin Furkh Dar',
    author_affiliation: 'Assistant Professor, UPES Dehradun'
  };
  const isLoading = false;
  const error = null;

  // Format numbers for display
  const formatNumber = (num: number) => {
    if (num === 0) return '0';
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Dr. Mohsin Furkh Dar
              </h1>
              <div className="text-xl text-green-700 dark:text-green-500 mb-2 animate-fadeIn delay-200 font-semibold">
                Assistant Professor | Medical AI Researcher
              </div>
              <div className="text-lg text-white/90 mb-4 animate-fadeIn delay-300">
                School of Computer Science, UPES Dehradun
              </div>
              <p className="text-lg mb-8 animate-fadeIn delay-400">
                I lead research on deep learning for medical image analysis, with a focus on efficient segmentation architectures, 
                novel loss functions, and interpretable classification systems for breast ultrasound and multi-modal imaging. 
                My work aims to make expert-level clinical image interpretation accessible in low-resource settings.
              </p>
              
              {/* Error message */}
              {error && (
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3 mb-6">
                  <p className="text-sm text-yellow-200">
                    Note: Scholar data may not be current due to API limitations
                  </p>
                </div>
              )}
              
              {/* Stats - Updated with real-time data */}
              <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8 animate-fadeIn delay-400">
                <Link 
                  href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <span className="block text-2xl font-bold text-accent group-hover:underline">
                    {isLoading ? '...' : formatNumber(scholarData.publications)}
                  </span>
                  <span className="text-sm opacity-80">Publications</span>
                </Link>
                
                <Link 
                  href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <span className="block text-2xl font-bold text-accent group-hover:underline">
                    {isLoading ? '...' : formatNumber(scholarData.citations)}
                  </span>
                  <span className="text-sm opacity-80">Citations</span>
                </Link>
                
                <Link 
                  href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <span className="block text-2xl font-bold text-accent group-hover:underline">
                    {isLoading ? '...' : scholarData.h_index}
                  </span>
                  <span className="text-sm opacity-80">h-index</span>
                </Link>
                
                {scholarData.i10_index > 0 && (
                  <Link 
                    href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-center group hover:scale-105 transition-transform"
                  >
                    <span className="block text-2xl font-bold text-accent group-hover:underline">
                      {scholarData.i10_index}
                    </span>
                    <span className="text-sm opacity-80">i10-index</span>
                  </Link>
                )}
              </div>
              
              {/* Citations by Year Graph */}
              {!isLoading && scholarData.citationsByYear && scholarData.citationsByYear.length > 0 && (
                <div className="mt-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm animate-fadeIn">
                  <h3 className="text-primary dark:text-accent text-lg font-semibold mb-4">Citations by Year</h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={scholarData.citationsByYear}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis 
                          dataKey="year" 
                          tick={{ fill: '#6B7280' }}
                          tickLine={{ stroke: '#6B7280' }}
                          domain={['dataMin', 'dataMax']}
                        />
                        <YAxis 
                          tick={{ fill: '#6B7280' }}
                          tickLine={{ stroke: '#6B7280' }}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            padding: '0.75rem',
                            color: '#1F2937',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                          }}
                          formatter={(value, name) => [`${value} citations`, 'Citations in ' + scholarData.citationsByYear.find(d => d.citations === value)?.year]}
                          labelFormatter={(year) => `Year: ${year}`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="citations" 
                          name="Citations" 
                          stroke="#10B981" 
                          strokeWidth={3}
                          dot={{
                            fill: '#10B981',
                            strokeWidth: 2,
                            r: 5,
                            stroke: '#fff'
                          }}
                          activeDot={{
                            r: 7,
                            stroke: '#fff',
                            strokeWidth: 2,
                            fill: '#10B981'
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
              
              {/* Loading state for graph */}
              {isLoading && (
                <div className="mt-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-4"></div>
                    <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              )}
              
              {/* Profile Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 animate-fadeIn delay-500">
                <a 
                  href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                  </svg>
                  Google Scholar
                </a>
                <span className="text-white/40">|</span>
                <a 
                  href="https://orcid.org/0009-0000-0000-0000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.894 8.221l-1.97-.001c-.156 0-.33.157-.33.522v6.097c0 .366.174.523.33.523h1.97c.155 0 .33-.157.33-.523V8.743c0-.365-.175-.522-.33-.522zM12 5.67c1.155 0 2.104.896 2.203 2.03h.005v.438h-.005c-.1 1.135-1.048 2.03-2.203 2.03-1.218 0-2.207-.988-2.207-2.207S10.782 5.67 12 5.67zm-2.895 2.593h-.005v5.475c0 .366.174.523.33.523h1.97c.156 0 .33-.157.33-.523V8.263c0-.365-.174-.522-.33-.522h-1.97c-.155 0-.33.157-.33.522v.438h-.005c-.1-1.135-1.048-2.03-2.203-2.03-1.218 0-2.207.988-2.207 2.207s.989 2.207 2.207 2.207c1.155 0 2.104-.895 2.203-2.03z"/>
                  </svg>
                  ORCID
                </a>
                <span className="text-white/40">|</span>
                <a 
                  href="https://www.semanticscholar.org/author/Mohsin-Furkh-Dar/12345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Semantic Scholar
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 animate-fadeIn delay-600">
                <Link href="/publications" className="btn bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-full">
                  View Publications
                </Link>
                <Link href="/lab" className="btn bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-full">
                  Join the Lab
                </Link>
                <Link href="/cv" className="btn bg-white text-primary border border-accent hover:bg-gray-50 px-6 py-3 rounded-full">
                  View CV
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center animate-fadeInRight">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full p-1 bg-gradient-to-r from-accent to-primary mb-8 animate-float">
                <Image
                  src="/images/profile_pic.jpg"
                  alt="Professional headshot of Mohsin Furkh Dar"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              
              {/* Research Keywords */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 w-full shadow-sm">
                <h3 className="text-primary dark:text-accent text-lg font-semibold mb-4">Research Focus</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 border border-accent/30 text-white px-3 py-1 rounded-full text-sm">Deep Learning</span>
                  <span className="bg-accent/20 border border-accent/30 text-white px-3 py-1 rounded-full text-sm">Medical Imaging</span>
                  <span className="bg-accent/20 border border-accent/30 text-white px-3 py-1 rounded-full text-sm">Image Segmentation</span>
                  <span className="bg-accent/20 border border-accent/30 text-white px-3 py-1 rounded-full text-sm">Neural Networks</span>
                  <span className="bg-accent/20 border border-accent/30 text-white px-3 py-1 rounded-full text-sm">Computer Vision</span>
                  <span className="bg-accent/20 border border-accent/30 text-white px-3 py-1 rounded-full text-sm">Healthcare AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
          <div className="text-2xl">↓</div>
          <div className="text-sm">Scroll to explore</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center relative mb-16">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-20 h-1 bg-accent rounded"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Bridging AI Innovation with Clinical Impact</h3>
              <p className="text-lg mb-6">
  I am a PhD graduate in Computer Science from the University of Hyderabad, specializing in <strong className="text-primary"><a href="#" className="hover:underline">Deep Learning for Medical Image Analysis</a></strong>. Currently serving as Assistant Professor at UPES School of Computer Science, my research has produced breakthrough innovations including <strong className="text-primary"><a href="https://link.springer.com/article/10.1007/s11063-023-11333-x" target="_blank" rel="noopener noreferrer" className="hover:underline">EfficientU-Net</a></strong>, <strong className="text-primary"><a href="https://link.springer.com/article/10.1007/s11517-025-03301-5" target="_blank" rel="noopener noreferrer" className="hover:underline">UMA-Net</a></strong> with adaptive <strong className="text-primary">loss functions</strong>, and <strong className="text-primary">Saliency-Guided AttentionNet</strong>. With <strong className="text-primary">NET JRF qualification (AIR under 50)</strong>, my work spans novel architectures, <strong className="text-primary"><a href="https://www.sciencedirect.com/science/article/pii/S0262885624001227" target="_blank" rel="noopener noreferrer" className="hover:underline">genetic algorithm-based feature selection</a></strong>, and attention mechanisms validated across multiple medical imaging modalities.
</p>
<p className="text-lg">
  As Founder of <strong className="text-primary"><a href="https://shifa-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">ShifaAI</a></strong>, I'm translating academic research into real-world healthcare solutions through AI-powered diagnostic platforms that provide automated medical image analysis and intelligent clinical decision support. My mission is democratizing access to expert-level medical interpretation, particularly in underserved regions where specialized healthcare is limited. I am open to collaborations in medical AI research and clinical partnerships to further advance the field of healthcare AI.
</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h4 className="text-primary font-semibold mb-2">Deep Learning</h4>
                <p className="text-gray-600">Advanced neural architectures for medical image analysis</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h4 className="text-primary font-semibold mb-2">Medical Imaging</h4>
                <p className="text-gray-600">Multi-modal imaging: CT, MRI, X-ray, ultrasound</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h4 className="text-primary font-semibold mb-2">Clinical Collaboration</h4>
                <p className="text-gray-600">Translating research into real-world medical applications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <h4 className="text-primary font-semibold mb-2">Research Leadership</h4>
                <p className="text-gray-600">Mentoring students and leading interdisciplinary projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center relative mb-16">
            Featured Research
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-20 h-1 bg-accent rounded"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-primary mb-4">PhD Thesis: Advances in Deep Learning for Medical Imaging</h3>
              <p className="text-gray-600 mb-6">
                Developed novel deep learning architectures for medical image segmentation and classification,
                achieving state-of-the-art performance in breast cancer detection from ultrasound images and other medical image modalities.
              </p>
              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-3">
                  <span>University of Hyderabad</span>
                  <span className="mx-2">•</span>
                  <span>2020-2025</span>
                </div>
                <a 
                  href="/phd-thesis" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-2"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-4">ShifaAI: AI-Powered Healthcare Platform</h3>
                <p className="text-gray-600 mb-4">
                  ShifaAI is revolutionizing healthcare with AI-powered diagnostics, automated report analysis, and personalized treatment suggestions for patients and healthcare providers.
                </p>
                <p className="text-gray-600 mb-4">
                  Built using Next.js, TensorFlow, and modern web technologies, it reduces diagnostic errors and accelerates care delivery through intelligent automation.
                </p>
              </div>
              <div className="mt-4">
                <a 
                  href="https://shifa-ai.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Explore ShifaAI Beta
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-xs text-gray-500 mt-2">Currently in active development with new features rolling out regularly</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-4">MPhil Thesis: Performance Comparison of Face Detection and Recognition Algorithms</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive evaluation of face detection and recognition algorithms, analyzing performance metrics and computational efficiency across various benchmarks including WIDER FACE and MegaFace.
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-4">
                  <li>SSH achieved highest precision-recall in detection but with slower processing</li>
                  <li>Dlib-R and ArcFace showed superior recognition accuracy</li>
                  <li>Detailed analysis of speed-accuracy tradeoffs in real-world applications</li>
                </ul>
              </div>
              <div className="mt-4">
                <a 
                  href="https://drive.google.com/file/d/1hEE-kMir6IsBwE6xP3381YgLGL_PBHyk/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  View Full Thesis
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <div className="text-xs text-gray-500 mt-2">
                  <span>Mewar University Rajasthan</span>
                  <span className="mx-1">•</span>
                  <span>Oct 2017 - Mar 2019</span>
                </div>
              </div>
            </div>

            

            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in my research or exploring collaboration opportunities? I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mohsinfaurkh@gmail.com" className="btn border-2 border-white/30 hover:bg-accent hover:border-accent px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/mohsinfurkh/" target="_blank" rel="noopener noreferrer" className="btn border-2 border-white/30 hover:bg-accent hover:border-accent px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              💼 LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="btn border-2 border-white/30 hover:bg-accent hover:border-accent px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              🎓 Google Scholar
            </a>
            <a href="https://github.com/mohsinfurkh" target="_blank" rel="noopener noreferrer" className="btn border-2 border-white/30 hover:bg-accent hover:border-accent px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
