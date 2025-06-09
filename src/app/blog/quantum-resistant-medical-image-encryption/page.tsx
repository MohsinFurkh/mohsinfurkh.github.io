'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import SocialShare from '@/components/SocialShare';
import TableOfContents from '@/components/TableOfContents';
import RelatedPosts from '@/components/RelatedPosts';
import { Bookmark, Heart, MessageSquare, Share2 } from 'lucide-react';
import BlogPostContent from '@/components/BlogPostContent';

export default function QuantumResistantMedicalImageEncryption() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => Math.max(0, prev - 1));
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // You could add to localStorage here to persist the bookmark
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Handle hash-based navigation
    const handleHashNavigation = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (!href) return;
      
      // Only handle hash links
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to all anchor tags with hash links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.removeEventListener('click', handleHashNavigation as EventListener);
      link.addEventListener('click', handleHashNavigation as EventListener);
    });

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleHashNavigation as EventListener);
      });
    };
  }, []);

  const postUrl = typeof window !== 'undefined' ? window.location.href : '';
  const postTitle = 'Quantum-Resistant Medical Image Encryption';
  const postExcerpt = 'An interactive exploration of post-quantum cryptography for securing medical imaging data against future quantum computing threats.';

  return (
    <div className="antialiased">
      <Head>
        <title>{postTitle}: An Interactive Overview</title>
        <meta name="description" content={postExcerpt} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postExcerpt} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={postExcerpt} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js" async></script>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex gap-8">
          {/* Main content */}
          <article className="lg:w-2/3">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {postTitle}
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>June 9, 2025</span>
                <span className="mx-2">•</span>
                <span>10 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Cybersecurity
                </span>
              </div>
              
              {/* Featured Image */}
              <div className="w-full h-64 md:h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">The Quantum Countdown</h2>
                    <p className="text-xl opacity-90">Securing Tomorrow's Health Data, Today</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Interactive Actions */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleLike}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors ${
                    isLiked 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  aria-label={isLiked ? 'Unlike' : 'Like'}
                >
                  <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                  <span className="text-sm font-medium">{likes}</span>
                </button>
                
                <button 
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-expanded={showComments}
                >
                  <MessageSquare size={18} />
                  <span className="text-sm font-medium">{comments.length}</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleBookmark}
                  className={`p-2 rounded-full ${isBookmarked ? 'text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                >
                  <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: postTitle,
                        text: postExcerpt,
                        url: postUrl,
                      });
                    }
                  }}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
                  aria-label="Share"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Table of Contents for mobile */}
            <div className="lg:hidden mb-8">
              <TableOfContents />
            </div>

            {/* Blog content */}
            <div id="blog-content" className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                {postExcerpt}
              </p>
              
              {/* Blog post content component */}
              <BlogPostContent />
              
              {/* Social Sharing */}
              <SocialShare 
                url={postUrl} 
                title={postTitle} 
                excerpt={postExcerpt} 
              />
              
              {/* Comments Section */}
              {showComments && (
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-6">
                    {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
                  </h3>
                  
                  <form onSubmit={handleCommentSubmit} className="mb-8">
                    <div className="mb-4">
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                        Add a comment
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          id="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                          placeholder="Share your thoughts..."
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="space-y-4">
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                              U
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">Anonymous User</p>
                            <p className="text-sm text-gray-700 mt-1">{comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {comments.length === 0 && (
                      <p className="text-center text-gray-500 py-4">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    )}
                  </div>
                </div>
              )}
              
              {/* Related Posts */}
              <RelatedPosts 
                currentPostId={13} 
                posts={[]} 
                category="Cybersecurity" 
              />
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-1/3">
            <TableOfContents />
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe to the Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest posts on cybersecurity and medical imaging delivered to your inbox.
              </p>
              <form className="space-y-3">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
