'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function VisitorCounter() {
  const { data, error, isLoading } = useSWR('/api/visitors', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  });

  if (error) return null; // Don't show anything if there's an error
  
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
      {isLoading ? (
        'Loading...'
      ) : (
        `👥 ${data?.count?.toLocaleString() || '0'} visitors`
      )}
    </div>
  );
}
