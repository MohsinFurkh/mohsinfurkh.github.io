import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes and essays on deep learning, medical image analysis, research practice and occasional detours.",
};

export default function Blog() {
  return (
    <>
      <section className="container animate-rise pt-20 pb-12 text-center sm:pt-24">
        <p className="kicker">Notes &amp; essays</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Writing
        </h1>
        <p className="mx-auto mt-8 max-w-[36rem]">
          Explanations of methods I work with, advice I wish I had as a PhD
          student, and the occasional detour. Older pieces live on my earlier
          blog and open in a new tab.
        </p>
      </section>

      <section className="container py-12">
        <SectionHeading>All Posts</SectionHeading>
        <div className="space-y-10">
          {posts.map((post) => {
            const meta = (
              <p className="text-[13px] text-subtle">
                {post.date}
                <span className="mx-2">·</span>
                {post.category}
                <span className="mx-2">·</span>
                {post.readTime}
              </p>
            );

            return (
              <article key={post.title + post.date}>
                {meta}
                <h3 className="mt-1.5 font-sans text-base font-semibold leading-snug text-ink">
                  {post.slug ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  ) : (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {post.title}
                      <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
                    </a>
                  )}
                </h3>
                <p className="mt-2 text-[15px]">{post.excerpt}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
