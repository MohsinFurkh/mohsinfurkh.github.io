export type NewsItem = {
  date: string;
  text: string;
  href?: string;
  linkLabel?: string;
};

export const news: NewsItem[] = [
  {
    date: "Nov 2026",
    text: "MSCT-Trans — a multi-scale CNN token transformer for interpretable ultrasound classification — published in Ultrasound in Medicine & Biology.",
    href: "https://doi.org/10.1016/j.ultrasmedbio.2026.07.032",
    linkLabel: "Read the paper",
  },
  {
    date: "Nov 2026",
    text: "Saliency-guided AttentionNet, our dual-branch model for breast ultrasound classification, published in Biomedical Signal Processing and Control.",
    href: "https://doi.org/10.1016/j.bspc.2026.111194",
    linkLabel: "Read the paper",
  },
  {
    date: "Jul 2026",
    text: "Awarded the PhD degree by the University of Hyderabad on 28 July 2026, for the thesis “Advances in Deep Learning for Medical Image Segmentation and Classification”.",
    href: "/phd-thesis",
    linkLabel: "Read the summary",
  },
  {
    date: "Jan 2026",
    text: "Shortlisted as Research Faculty at UPES Dehradun.",
  },
  {
    date: "Jan 2026",
    text: "Our paper “Fuzzy Rough Set Loss for Deep Learning-Based Precise Medical Image Segmentation” was accepted in Computerized Medical Imaging and Graphics (SCI).",
  },
  {
    date: "Jul 2025",
    text: "Joined the School of Computer Science, UPES Dehradun, as Assistant Professor.",
  },
  {
    date: "Jul 2025",
    text: "Submitted my PhD thesis, “Advances in Deep Learning for Medical Image Segmentation and Classification”, to the University of Hyderabad.",
  },
  {
    date: "2025",
    text: "UMA-Net — adaptive ensemble loss and multi-scale attention for breast ultrasound segmentation — published in Medical & Biological Engineering & Computing (Springer, SCIE).",
  },
  {
    date: "2025",
    text: "Three papers submitted to Biomedical Signal Processing & Control and Ultrasound in Medicine & Biology.",
  },
  {
    date: "2024",
    text: "Our work on genetic algorithm-based feature selection was published in Image and Vision Computing (Elsevier, SCIE).",
  },
];
