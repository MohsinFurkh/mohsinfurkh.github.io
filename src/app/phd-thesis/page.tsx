import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "PhD Thesis",
  description:
    "Summary of the doctoral thesis “Advances in Deep Learning for Medical Image Segmentation and Classification” (University of Hyderabad).",
};

const contributions = [
  {
    number: "01",
    title: "EfficientU-Net: parameter-optimized segmentation",
    description:
      "EfficientNet-B7 and atrous convolution folded into U-Net, tuning breast tumor segmentation and classification in ultrasound for lower computational cost.",
    points: [
      "13× reduction in parameters — 1.31M against U-Net's 17.27M",
      "Stronger segmentation of malignant tumors with irregular shapes",
      "Better boundary localisation through adaptive receptive fields",
      "97.905% accuracy classifying benign, malignant and normal tissue",
      "Validated on two public datasets with 5-fold cross-validation",
    ],
  },
  {
    number: "02",
    title: "UMA-Net with adaptive loss functions",
    description:
      "A U-Net variant with residual connections, attention blocks and atrous convolutions, trained under a dynamic ensemble loss.",
    points: [
      "Residual connections and attention blocks sharpen feature integration",
      "Atrous convolutions capture multi-scale context without losing resolution",
      "Dynamic ensemble loss (BCE, Dice, Hausdorff, Tversky) rebalances weights during training",
      "Generalises across five breast ultrasound datasets: BUET, BUSI, Mendeley, OMI, UDIAT",
    ],
  },
  {
    number: "03",
    title: "Fuzzy rough set loss for boundary precision",
    description:
      "A loss function built on fuzzy rough set theory to handle boundary uncertainty in medical images.",
    points: [
      "Higher sensitivity to uncertain predictions and ambiguous lesion boundaries",
      "Lower computational complexity alongside improved segmentation accuracy",
      "Handles irregular shapes and overlapping edges",
      "New similarity functions for uncertainty in boundary regions",
    ],
  },
  {
    number: "04",
    title: "Deep learning and genetic algorithm ensemble",
    description:
      "MobileNet for feature extraction, genetic algorithms for feature selection, and an ensemble classifier with soft voting.",
    points: [
      "MobileNet as a minimal-parameter feature extractor for medical images",
      "GA-based selection navigating complex feature spaces",
      "Soft-voting ensemble for robust classification decisions",
      "Addresses overfitting where data is limited",
    ],
  },
  {
    number: "05",
    title: "Saliency-Guided AttentionNet (SGAN)",
    description:
      "A dual-branch architecture using Grad-CAM saliency maps for breast ultrasound classification.",
    points: [
      "90.51% accuracy on multi-center validation",
      "87.95% F1-score and 94.08% AUC across five datasets",
      "Explicit foreground–background decomposition for lesion and peritumoral analysis",
      "Adaptive attention fusion, keeping transfer learning benefits at minimal parameter cost",
    ],
  },
];

export default function PhdThesis() {
  return (
    <>
      <section className="container animate-rise pt-20 pb-12 text-center sm:pt-24">
        <p className="kicker">University of Hyderabad · 2026</p>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Advances in Deep Learning for Medical Image Segmentation and
          Classification
        </h1>
        <p className="mx-auto mt-8 max-w-[38rem]">
          My doctoral research tackled accuracy, computational cost and
          generalisation in medical image analysis, with breast ultrasound and
          tumor detection as the proving ground. Advisor: Dr. Avatharam
          Ganivada, School of Computer and Information Sciences. Funded by the
          UGC Junior Research Fellowship.
        </p>
      </section>

      <section className="container py-16">
        <SectionHeading id="contributions">Key Contributions</SectionHeading>
        <div className="space-y-14">
          {contributions.map((item) => (
            <article key={item.number}>
              <p className="font-display text-2xl text-line">{item.number}</p>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px]">{item.description}</p>
              <ul className="mt-3 space-y-1.5 text-[15px]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-wash py-16">
        <div className="container">
          <SectionHeading id="impact">Impact &amp; Validation</SectionHeading>
          <p>
            The methods were evaluated on public datasets:
          </p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {[
              "Five public breast ultrasound datasets (BUET, BUSI, Mendeley, OMI, UDIAT)",
              "The fuzzy rough set loss was also tested on polyp, brain MRI, chest CT and skin-lesion datasets, with statistically significant gains (p < 0.001)",
              "Cross-dataset testing: SGAN reached 78.46% accuracy on held-out datasets, against 90.51% on its multi-center evaluation",
              "Compact models: EfficientU-Net uses 1.31M parameters against U-Net's 17.27M",
            ].map((point) => (
              <li key={point} className="flex gap-2.5">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            Throughout, the emphasis is on methods that stay accurate with few
            parameters and little data — a prerequisite for use in health
            systems with limited access to expert radiologists, though clinical
            evaluation is still future work. Each method is published in a
            peer-reviewed venue, with code released publicly.
          </p>
        </div>
      </section>

      <section className="container py-16 text-center">
        <Link href="/research" className="pill">
          <ArrowLeft className="h-4 w-4" /> Back to research
        </Link>
      </section>
    </>
  );
}
