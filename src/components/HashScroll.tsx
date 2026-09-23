'use client';

import { useEffect } from 'react';

// Next's App Router restores scroll to the top on load, which swallows the
// #anchor in links like /about#teaching. Re-apply it after hydration.
export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(decodeURIComponent(id));
      target?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    };

    // Two passes: the first lands the jump, the second corrects for the router's
    // own scroll restoration and for images that size late.
    const timers = [0, 300].map((delay) => window.setTimeout(scrollToHash, delay));
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return null;
}
