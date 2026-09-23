export type ResearchDirection = {
  number: string;
  title: string;
  description: string;
};

export const researchDirections: ResearchDirection[] = [
  {
    number: "01",
    title: "Domain-Aware Optimization for Segmentation",
    description:
      "Optimization frameworks that fold anatomical priors, imaging physics and clinical workflow constraints into the training pipeline, balancing accuracy, uncertainty and compute under limited medical data.",
  },
  {
    number: "02",
    title: "Saliency-Guided Attention for Ultrasound",
    description:
      "A dual-branch architecture that models lesion and peritumoral tissue separately through Grad-CAM saliency guidance — 90.51% accuracy across five public datasets, 78.46% on held-out data.",
  },
  {
    number: "03",
    title: "Fuzzy Similarity-Driven Loss Design",
    description:
      "Fuzzy rough set losses that treat boundary ambiguity as a first-class signal, sharpening lesion delineation across ultrasound, MRI and CT at lower computational cost than conventional objectives.",
  },
  {
    number: "04",
    title: "Uncertainty-Aware Explainable Models",
    description:
      "Pixel-level uncertainty estimation paired with multi-modal explainability — detecting 92% of segmentation failures while sending only 15% of cases to manual review.",
  },
];
