'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentId?: string;
}

export default function TableOfContents({ contentId = 'blog-content' }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const content = document.getElementById(contentId);
    if (!content) return;

    const elements = Array.from(
      content.querySelectorAll('h2, h3, h4')
    ) as HTMLElement[];

    const headingElements = elements.map((element) => {
      const id = element.id || element.textContent?.toLowerCase().replace(/\s+/g, '-');
      if (id) element.id = id;
      
      return {
        id: id || '',
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1)),
      };
    });

    setHeadings(headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%', threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [contentId]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-medium text-gray-700 mb-2"
        >
          <span>Table of Contents</span>
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {isOpen && (
          <nav className="space-y-2 mt-2">
            {headings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                  activeId === heading.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${heading.level === 3 ? 'pl-4' : heading.level === 4 ? 'pl-6' : ''}`}
              >
                {heading.text}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
