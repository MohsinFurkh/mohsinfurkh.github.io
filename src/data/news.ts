export type NewsItem = {
  date: string;
  text: string;
  href?: string;
  linkLabel?: string;
};

// Dates are when an item happened or went online (DOI registration), not the
// journal issue date.
export const news: NewsItem[] = [
  {
    date: "Aug 2026",
    text: "MSCT-Trans — a multi-scale CNN token transformer for interpretable breast, thyroid and fetal ultrasound classification — published online in Ultrasound in Medicine & Biology (vol. 52, no. 11).",
    href: "https://doi.org/10.1016/j.ultrasmedbio.2026.07.032",
    linkLabel: "Read the paper",
  },
  {
    date: "Aug 2026",
    text: "Saliency-guided AttentionNet, a dual-branch model for breast ultrasound classification, published online in Biomedical Signal Processing and Control (vol. 127).",
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
    date: "2026",
    text: "Submitted, as Principal Investigator, an ICMR ANVESHAN proposal on AI-assisted quantification of umbilical artery Doppler ultrasound. The proposal is under review.",
  },
  {
    date: "Jan 2026",
    text: "Moved to the Research Faculty track in the School of Computer Science, UPES.",
  },
  {
    date: "Jan 2026",
    text: "“Fuzzy Rough Set Loss for Deep Learning-Based Precise Medical Image Segmentation” published online in Computerized Medical Imaging and Graphics (vol. 128).",
    href: "https://doi.org/10.1016/j.compmedimag.2026.102716",
    linkLabel: "Read the paper",
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
    date: "Jan 2025",
    text: "UMA-Net — adaptive ensemble loss and multi-scale attention for breast ultrasound segmentation — published online in Medical & Biological Engineering & Computing.",
    href: "https://doi.org/10.1007/s11517-025-03301-5",
    linkLabel: "Read the paper",
  },
  {
    date: "Oct 2024",
    text: "Presented “Dynamic Weight-Adjusted Ensemble Loss for Enhanced Medical Image Segmentation” at ICCCNet-2024 in Manchester, UK, supported by a University of Hyderabad IoE International Travel Grant.",
  },
  {
    date: "2024",
    text: "Our work on genetic algorithm-based feature selection for breast ultrasound classification was published in Image and Vision Computing.",
    href: "https://doi.org/10.1016/j.imavis.2024.105018",
    linkLabel: "Read the paper",
  },
];
