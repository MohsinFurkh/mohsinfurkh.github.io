'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container py-32 text-center">
      <p className="kicker">Error</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">
        Something went wrong
      </h1>
      <p className="mx-auto mt-6 max-w-[30rem]">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <p className="mt-8">
        <button type="button" className="pill pill-filled" onClick={() => reset()}>
          Try again
        </button>
      </p>
    </section>
  );
}
