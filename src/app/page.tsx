import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import CitationStrip from "@/components/CitationStrip";
import PaperActions from "@/components/PaperActions";
import { site } from "@/data/site";
import { news } from "@/data/news";
import { featuredPublications } from "@/data/featuredPublications";
import { researchDirections } from "@/data/research";

export default function Home() {
  return (
    <>
      <section className="container animate-rise pt-20 pb-16 text-center sm:pt-28">
        <Image
          src="/images/profile_pic.jpg"
          alt={site.name}
          width={128}
          height={128}
          priority
          className="mx-auto mb-10 h-32 w-32 rounded-full object-cover"
        />
        <h1 className="font-display text-4xl tracking-tight text-ink sm:text-6xl">
          {site.name}
        </h1>
        <p className="kicker mt-4">{site.kicker}</p>
        <p className="mx-auto mt-8 max-w-[38rem] text-balance">
          I am an Assistant Professor in the School of Computer Science at UPES
          Dehradun. My research develops efficient, interpretable deep learning
          for medical image segmentation and classification — architectures such
          as EfficientU-Net and UMA-Net, and uncertainty-aware losses built on
          fuzzy rough set theory.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/about" className="pill pill-filled">
            About &amp; CV
          </Link>
          <a
            href={site.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            Google Scholar
          </a>
        </div>

        <SocialLinks className="mt-10 justify-center" />
      </section>

      <section className="border-y border-line bg-wash py-14">
        <div className="container">
          <CitationStrip />
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <SectionHeading id="news">News</SectionHeading>
        <ul className="space-y-5">
          {news.map((item) => (
            <li key={item.date + item.text} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <span className="text-sm font-medium text-subtle">{item.date}</span>
              <p className="text-[15px]">
                {item.text}
                {item.href && (
                  <>
                    {" "}
                    <Link href={item.href} className="prose-link">
                      {item.linkLabel}
                    </Link>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-wash py-20 sm:py-24">
        <div className="container">
          <SectionHeading id="publications">Selected Publications</SectionHeading>
          <div className="space-y-16">
            {featuredPublications.map((pub) => (
              <article key={pub.title} className="text-center">
                <a
                  href={pub.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-line bg-white p-3 transition-colors hover:border-accent"
                >
                  <Image
                    src={pub.image}
                    alt={`Architecture diagram — ${pub.title}`}
                    width={1400}
                    height={900}
                    className="h-auto w-full"
                  />
                </a>
                <h3 className="mt-6 font-sans text-base font-semibold leading-snug text-ink">
                  {pub.title}
                </h3>
                <p className="mt-2 font-display text-[15px] italic text-subtle">
                  {pub.venue}
                </p>
                <p className="mx-auto mt-4 max-w-[34rem] text-[15px]">
                  {pub.summary}
                </p>
                <PaperActions
                  paper={pub.paper}
                  code={pub.code}
                  bibtex={pub.bibtex}
                  className="mt-5"
                />
              </article>
            ))}
          </div>
          <p className="mt-14 text-center">
            <Link href="/publications" className="prose-link text-[15px]">
              All publications <ArrowRight className="inline h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <SectionHeading id="research">Research</SectionHeading>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {researchDirections.map((direction) => (
            <article key={direction.number}>
              <p className="font-display text-2xl text-line">{direction.number}</p>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink">
                {direction.title}
              </h3>
              <p className="mt-2 text-[15px]">{direction.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-14 text-center">
          <Link href="/research" className="prose-link text-[15px]">
            Explore research <ArrowRight className="inline h-4 w-4" />
          </Link>
        </p>
      </section>
    </>
  );
}
