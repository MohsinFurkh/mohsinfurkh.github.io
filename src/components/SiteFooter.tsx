import Link from 'next/link';
import SocialLinks from './SocialLinks';
import { site } from '@/data/site';

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-wash">
      <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="kicker">Get in touch</p>
          <a
            href={`mailto:${site.email}`}
            className="font-display text-xl text-ink transition-colors hover:text-accent"
          >
            {site.email}
          </a>
          <p className="text-sm">
            {site.role}
            <span className="mx-2 text-line">·</span>
            {site.institution}
          </p>

          <SocialLinks />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-subtle">
            <Link href="/phd-thesis" className="transition-colors hover:text-accent">
              PhD Thesis
            </Link>
            <a
              href={site.facultyProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              UPES Faculty Profile
            </a>
            <a href="/cv.pdf" className="transition-colors hover:text-accent">
              CV (PDF)
            </a>
          </div>

          <p className="text-[13px] text-subtle">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
