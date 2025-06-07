'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);
  const [isNewVisitor, setIsNewVisitor] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    setIsClient(true);
    
    // Count every visit, not just new visitors
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
    
    // Track if this is a new visitor (first visit)
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toISOString();
    if (!lastVisit) {
      setIsNewVisitor(true);
    }
    localStorage.setItem('lastVisit', now);
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
        {visitorCount > 0 ? visitorCount.toLocaleString() : '...'} visitors
        {isNewVisitor && <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">New</span>}
      </span>
    </div>
  );
}
