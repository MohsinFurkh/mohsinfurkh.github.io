export type ResearchDirection = {
  number: string;
  title: string;
  description: string;
};

// Only published results carry numbers. Ongoing and proposed work is labelled
// as such.
export const researchDirections: ResearchDirection[] = [
  {
    number: "01",
    title: "Ambiguity-Aware Learning Objectives",
    description:
      "Loss functions that treat boundary ambiguity as signal rather than noise. The fuzzy rough set loss combines fuzzy similarity with lower and upper approximations, improving Dice by 2.1% on average over the best baseline across breast ultrasound, polyp, brain MRI, chest CT and skin-lesion datasets (CMIG, 2026). An adaptive ensemble loss rebalances BCE, Dice, Hausdorff and Tversky terms during training (MBEC, 2025).",
  },
  {
    number: "02",
    title: "Interpretable Ultrasound Classification",
    description:
      "Lightweight models that show where they look. Saliency-guided AttentionNet models lesion and surrounding tissue in separate branches: 90.51% accuracy across five public breast ultrasound datasets, and 78.46% on held-out data (BSPC, 2026). MSCT-Trans turns multi-scale CNN features into transformer tokens for breast, thyroid and fetal ultrasound, with Grad-CAM++ localisation and confidence analysis (UMB, 2026).",
  },
  {
    number: "03",
    title: "Uncertainty and Reliability (ongoing)",
    description:
      "Current work on pixel-level uncertainty estimation, aimed at flagging unreliable segmentations so that only uncertain cases go to human review.",
  },
  {
    number: "04",
    title: "Maternal–Fetal Doppler Ultrasound (proposed)",
    description:
      "Automated quantification of umbilical artery Doppler for early detection of fetal compromise, the subject of an ICMR ANVESHAN proposal under review.",
  },
];
