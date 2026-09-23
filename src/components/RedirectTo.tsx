'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// Static export cannot issue server redirects, so pages that moved during the
// 2026 redesign keep a client-side stub for inbound links.
export default function RedirectTo({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  // A full location replace rather than a router push, so that the target's
  // hash anchor is honoured on arrival.
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <section className="container py-32 text-center">
      <p className="kicker">This page moved</p>
      <p className="mt-4 text-[15px]">
        Taking you to {label}.{' '}
        <Link href={href} className="prose-link">
          Go there now
        </Link>
        .
      </p>
    </section>
  );
}
