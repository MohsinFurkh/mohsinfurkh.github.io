'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    setIsClient(true);
    
    // Initialize counter with a more reliable service
    const initCounter = () => {
      // Use a simple counter service that works with GitHub Pages
      const counterScript = document.createElement('script');
      counterScript.src = 'https://cdn.counter.dev/script.js';
      counterScript.setAttribute('data-id', 'mohsinfurkh');
      counterScript.setAttribute('data-utcoffset', '5.5');
      counterScript.async = true;
      
      // Set up a message listener to get the visitor count
      const handleMessage = (event: MessageEvent) => {
        if (event.data && event.data.type === 'counter:data') {
          const count = event.data.payload.visits;
          setVisitorCount(count.toLocaleString());
        }
      };
      
      window.addEventListener('message', handleMessage);
      document.body.appendChild(counterScript);
      
      // Cleanup
      return () => {
        window.removeEventListener('message', handleMessage);
        if (document.body.contains(counterScript)) {
          document.body.removeChild(counterScript);
        }
      };
    };
    
    initCounter();
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
        {visitorCount || '...'} visitors
      </span>
    </div>
  );
}
