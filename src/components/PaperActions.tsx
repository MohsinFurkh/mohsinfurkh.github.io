'use client';

import { useState } from 'react';
import { Check, Copy, FileText, Github } from 'lucide-react';
import { copyText } from '@/lib/clipboard';

export default function PaperActions({
  paper,
  code,
  bibtex,
  align = 'center',
  className,
}: {
  paper?: string;
  code?: string;
  bibtex: string;
  align?: 'center' | 'left';
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (await copyText(bibtex)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={`flex flex-wrap gap-2 ${
        align === 'center' ? 'justify-center' : ''
      } ${className ?? ''}`}
    >
      {paper && (
        <a
          href={paper}
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-sm"
        >
          <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
          Paper
        </a>
      )}
      {code && (
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-sm"
        >
          <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
          Code
        </a>
      )}
      <button type="button" onClick={copy} className="pill pill-sm">
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
            BibTeX
          </>
        )}
      </button>
    </div>
  );
}
