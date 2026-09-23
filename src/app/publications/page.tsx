'use client';

import { useEffect, useState } from 'react';
import PaperActions from '@/components/PaperActions';
import SectionHeading from '@/components/SectionHeading';
import { linksFor } from '@/data/paperLinks';
import { site } from '@/data/site';

type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  link?: string;
};

const conferenceKeywords = [
  'proceedings',
  'conference',
  'symposium',
  'workshop',
  'congress',
  'international conference',
];

function getPublicationType(pub: Publication): 'journal' | 'conference' {
  const haystack = `${pub.title} ${pub.journal}`.toLowerCase();
  return conferenceKeywords.some((keyword) => haystack.includes(keyword))
    ? 'conference'
    : 'journal';
}

function generateBibTeX(pub: Publication): string {
  const type = getPublicationType(pub) === 'journal' ? 'article' : 'inproceedings';
  const key = pub.title.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30);
  const venueField = type === 'article' ? 'journal' : 'booktitle';

  return [
    `@${type}{${key},`,
    `  title = {${pub.title}},`,
    `  author = {${pub.authors}},`,
    `  ${venueField} = {${pub.journal}},`,
    `  year = {${pub.year}},`,
    `}`,
  ].join('\n');
}

// Highlights the site owner in a Google Scholar author string like "MF Dar, A Ganivada".
function renderAuthors(authors: string) {
  return authors.split(',').map((author, index) => {
    const name = author.trim();
    const isOwner = /^MF Dar$/i.test(name) || /mohsin/i.test(name);
    return (
      <span key={name + index}>
        {index > 0 && ', '}
        <span className={isOwner ? 'font-semibold text-ink' : undefined}>{name}</span>
      </span>
    );
  });
}

export default function Publications() {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference'>('all');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [stats, setStats] = useState({ citations: 0, publications: 0, hIndex: 0, i10Index: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/scholar');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.message || 'Failed to fetch citation data');
        }

        const papers: Publication[] = (data.papers ?? []).map((paper: any, index: number) => ({
          id: `scholar-${index}`,
          title: paper.title ?? 'Untitled',
          authors: paper.authors ?? '',
          journal: paper.publication ?? '',
          year: Number(paper.year) || 0,
          citations: paper.citations ?? 0,
          link: paper.link,
        }));

        papers.sort((a, b) => b.year - a.year || b.citations - a.citations);

        setPublications(papers);
        setStats({
          citations: data.citations ?? 0,
          publications: data.publications ?? papers.length,
          hIndex: data.h_index ?? 0,
          i10Index: data.i10_index ?? 0,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Could not load publications');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const counts = {
    all: publications.length,
    journal: publications.filter((pub) => getPublicationType(pub) === 'journal').length,
    conference: publications.filter((pub) => getPublicationType(pub) === 'conference').length,
  };

  const filtered =
    filter === 'all'
      ? publications
      : publications.filter((pub) => getPublicationType(pub) === filter);

  return (
    <>
      <section className="container animate-rise pt-20 pb-12 text-center sm:pt-24">
        <p className="kicker">Peer-reviewed work</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Publications
        </h1>
        <p className="mx-auto mt-8 max-w-[36rem]">
          Journal articles and conference papers on medical image segmentation,
          classification and loss function design. Metrics and entries sync from{' '}
          <a href={site.scholar} target="_blank" rel="noopener noreferrer" className="prose-link">
            Google Scholar
          </a>
          .
        </p>

        <dl className="mx-auto mt-12 grid max-w-lg grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
          {[
            { label: 'Publications', value: stats.publications },
            { label: 'Citations', value: stats.citations },
            { label: 'h-index', value: stats.hIndex },
            { label: 'i10-index', value: stats.i10Index },
          ].map((metric) => (
            <div key={metric.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-subtle">
                {metric.label}
              </dt>
              <dd className="mt-1 font-display text-3xl text-ink">
                {loading ? '—' : metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container py-12">
        <SectionHeading>All Publications</SectionHeading>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {(['all', 'journal', 'conference'] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`pill pill-sm ${filter === option ? 'pill-filled' : ''}`}
            >
              {option === 'all' ? 'All' : option === 'journal' ? 'Journal' : 'Conference'} (
              {counts[option]})
            </button>
          ))}
        </div>

        {loading && <p className="text-center text-[15px] text-subtle">Loading publications…</p>}

        {error && (
          <p className="text-center text-[15px] text-subtle">
            Could not reach the Scholar data ({error}). The full list is available{' '}
            <a href={site.scholar} target="_blank" rel="noopener noreferrer" className="prose-link">
              on Google Scholar
            </a>
            .
          </p>
        )}

        <ol className="space-y-10">
          {filtered.map((pub) => {
            const links = linksFor(pub.title);
            const paper = links?.paper ?? pub.link;

            return (
              <li key={pub.id} className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="pt-0.5 text-sm font-medium text-subtle">{pub.year || '—'}</p>
                <div className="border-l border-line pl-5">
                  <h3 className="font-sans text-base font-semibold leading-snug text-ink">
                    {paper ? (
                      <a
                        href={paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  {pub.authors && (
                    <p className="mt-1.5 text-[15px]">{renderAuthors(pub.authors)}</p>
                  )}
                  {pub.journal && (
                    <p className="mt-1 font-display text-[15px] italic text-subtle">{pub.journal}</p>
                  )}
                  {pub.citations > 0 && (
                    <p className="mt-2 text-[13px] text-subtle">
                      {pub.citations} {pub.citations === 1 ? 'citation' : 'citations'}
                    </p>
                  )}
                  <PaperActions
                    paper={paper}
                    code={links?.code}
                    bibtex={generateBibTeX(pub)}
                    align="left"
                    className="mt-3"
                  />
                </div>
              </li>
            );
          })}
        </ol>

        {!loading && filtered.length === 0 && !error && (
          <p className="text-center text-[15px] text-subtle">
            No publications in this category.
          </p>
        )}
      </section>
    </>
  );
}
