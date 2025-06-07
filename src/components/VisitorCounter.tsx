'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<string>('0');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    setIsClient(true);
    
    // Generate a unique ID for this visitor if it doesn't exist
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
      visitorId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('visitorId', visitorId);
    }
    
    // Update the visitor count using the badge service
    const updateCounter = async () => {
      try {
        const response = await fetch(`https://visitor-badge.glitch.me/badge?page_id=${encodeURIComponent(visitorId!)}`);
        const text = await response.text();
        // Extract the count from the badge URL
        const match = text.match(/visitors-([0-9,]+)-/);
        if (match && match[1]) {
          setVisitorCount(match[1]);
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    };
    
    updateCounter();
  }, []);

  // Don't render anything during SSR or if we're not on the client yet
  if (!isClient) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
      <span className="inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        {visitorCount} visitors
      </span>
    </div>
  );
}
