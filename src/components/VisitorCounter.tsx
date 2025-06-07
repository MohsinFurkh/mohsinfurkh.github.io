'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    setIsClient(true);
    
    // Get or initialize the visitor count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    let count = 1; // Default to 1 for new visitors
    
    if (storedCount) {
      // If we have a stored count, increment it
      count = parseInt(storedCount, 10) + 1;
    }
    
    // Update the count in state and localStorage
    setVisitorCount(count);
    localStorage.setItem('visitorCount', count.toString());
  }, []);

  // Don't render anything during SSR or if we're not on the client yet
  if (!isClient) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
      👥 {visitorCount.toLocaleString()} visitors
    </div>
  );
}
