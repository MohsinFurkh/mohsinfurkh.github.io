'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  external: boolean;
  url?: string;
  slug?: string;
}

interface RelatedPostsProps {
  currentPostId: number;
  posts: Post[];
  category: string;
}

export default function RelatedPosts({ currentPostId, posts, category }: RelatedPostsProps) {
  // Filter related posts by category, excluding the current post
  const relatedPosts = posts
    .filter(post => post.category === category && post.id !== currentPostId)
    .slice(0, 3); // Show max 3 related posts

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 bg-blue-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">You might also like</h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">
                  <Link 
                    href={post.external ? post.url || '#' : `/blog/${post.slug || post.id}`}
                    target={post.external ? "_blank" : "_self"}
                    rel={post.external ? "noopener noreferrer" : undefined}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h4>
                <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
              </div>
              <Link 
                href={post.external ? post.url || '#' : `/blog/${post.slug || post.id}`}
                target={post.external ? "_blank" : "_self"}
                rel={post.external ? "noopener noreferrer" : undefined}
                className="text-blue-600 hover:text-blue-800 ml-4 flex-shrink-0"
                aria-label={`Read more about ${post.title}`}
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
