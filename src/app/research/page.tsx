import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { researchDirections } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research directions and doctoral work in deep learning for medical image segmentation and classification.",
};

export default function Research() {
  return (
    <>
      <section className="container animate-rise pt-20 pb-12 text-center sm:pt-24">
        <p className="kicker">Medical AI</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Research
        </h1>
        <p className="mx-auto mt-8 max-w-[38rem]">
          I build deep learning methods for ultrasound images that treat
          ambiguity — at lesion boundaries and across datasets — as a signal
          rather than noise. The aim is models that stay reliable on the small,
          heterogeneous datasets typical of point-of-care imaging, remain small
          enough to deploy, and show what they based a decision on. Most of this
          work so far is on breast ultrasound.
        </p>
      </section>

      <section className="container py-16">
        <SectionHeading id="directions">Research Directions</SectionHeading>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {researchDirections.map((direction) => (
            <article key={direction.number}>
              <p className="font-display text-2xl text-line">
                {direction.number}
              </p>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink">
                {direction.title}
              </h3>
              <p className="mt-2 text-[15px]">{direction.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-wash py-16">
        <div className="container text-center">
          <p className="kicker">Doctoral work</p>
          <h3 className="mt-2 font-display text-2xl text-ink">PhD Thesis</h3>
          <p className="mx-auto mt-3 max-w-[34rem] text-[15px]">
            Advances in Deep Learning for Medical Image Segmentation and
            Classification — EfficientU-Net, UMA-Net, fuzzy rough set losses,
            GA-based ensembles and SGAN, validated across five public breast
            ultrasound datasets.
          </p>
          <p className="mt-5">
            <Link href="/phd-thesis" className="prose-link text-[15px]">
              Read the summary <ArrowRight className="inline h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section className="container py-16 text-center">
        <Link href="/publications" className="prose-link text-[15px]">
          All publications <ArrowRight className="inline h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
