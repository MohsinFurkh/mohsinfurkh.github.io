export type FeaturedPublication = {
  title: string;
  venue: string;
  image: string;
  summary: string;
  paper: string;
  code: string;
  bibtex: string;
};

export const featuredPublications: FeaturedPublication[] = [
  {
    title:
      "MSCT-Trans: A Multi-scale Convolutional Neural Network Token Transformer for Interpretable Ultrasound Image Classification",
    venue: "Ultrasound in Medicine & Biology, 52(11), 2623–2638, 2026",
    image: "/images/architectures/msct-trans.jpg",
    summary:
      "Multi-scale convolutional features from a lightweight backbone become a unified token sequence for a transformer encoder, giving cross-scale global reasoning and interpretable predictions across breast, thyroid and fetal ultrasound.",
    paper: "https://doi.org/10.1016/j.ultrasmedbio.2026.07.032",
    code: "https://github.com/MohsinFurkh/MSCT-Trans",
    bibtex: `@article{dar2026mscttrans,
  title   = {MSCT-Trans: A Multi-scale Convolutional Neural Network Token Transformer for Interpretable Ultrasound Image Classification},
  author  = {Dar, Mohsin Furkh and Mukhtar, Sayima},
  journal = {Ultrasound in Medicine \\& Biology},
  volume  = {52},
  number  = {11},
  pages   = {2623--2638},
  year    = {2026},
  doi     = {10.1016/j.ultrasmedbio.2026.07.032}
}`,
  },
  {
    title:
      "Saliency-guided AttentionNet: Dual-branch deep learning for breast ultrasound classification",
    venue: "Biomedical Signal Processing and Control, 127, 111194, 2026",
    image: "/images/architectures/sgan.jpg",
    summary:
      "Grad-CAM saliency splits each scan into lesion and context branches over a shared backbone, fused by an adaptive attention block — 90.51% accuracy across five public datasets and 78.46% on held-out data.",
    paper: "https://doi.org/10.1016/j.bspc.2026.111194",
    code: "https://github.com/MohsinFurkh/Saliency-Guided-AttentionNet",
    bibtex: `@article{dar2026sgan,
  title   = {Saliency-guided AttentionNet: Dual-branch deep learning for breast ultrasound classification},
  author  = {Dar, Mohsin Furkh and Ganivada, Avatharam},
  journal = {Biomedical Signal Processing and Control},
  volume  = {127},
  pages   = {111194},
  year    = {2026},
  doi     = {10.1016/j.bspc.2026.111194}
}`,
  },
  {
    title:
      "Fuzzy rough set loss for deep learning-based precise medical image segmentation",
    venue: "Computerized Medical Imaging and Graphics, 128, 102716, 2026",
    image: "/images/architectures/frs-loss.jpg",
    summary:
      "A loss built on fuzzy rough set theory that treats boundary ambiguity as a first-class signal, combining fuzzy similarity with lower and upper approximations — a 2.1% average Dice gain over the best baseline across breast ultrasound, polyp, brain MRI, chest CT and skin-lesion datasets.",
    paper: "https://doi.org/10.1016/j.compmedimag.2026.102716",
    code: "https://github.com/MohsinFurkh/Fuzzy-Rough-Set-Loss",
    bibtex: `@article{dar2026frsloss,
  title   = {Fuzzy rough set loss for deep learning-based precise medical image segmentation},
  author  = {Dar, Mohsin Furkh and Ganivada, Avatharam},
  journal = {Computerized Medical Imaging and Graphics},
  volume  = {128},
  pages   = {102716},
  year    = {2026},
  doi     = {10.1016/j.compmedimag.2026.102716}
}`,
  },
  {
    title:
      "Adaptive ensemble loss and multi-scale attention in breast ultrasound segmentation with UMA-Net",
    venue: "Medical & Biological Engineering & Computing, 63(6), 1697–1713, 2025",
    image: "/images/architectures/uma-net.jpg",
    summary:
      "Residual connections, attention blocks and atrous convolutions trained under a dynamic ensemble loss that rebalances BCE, Dice, Hausdorff and Tversky terms during training — generalising across five breast ultrasound datasets.",
    paper: "https://doi.org/10.1007/s11517-025-03301-5",
    code: "https://github.com/MohsinFurkh/UMA-Net-with-Multi-Scale-Attention",
    bibtex: `@article{dar2025umanet,
  title   = {Adaptive ensemble loss and multi-scale attention in breast ultrasound segmentation with UMA-Net},
  author  = {Dar, Mohsin Furkh and Ganivada, Avatharam},
  journal = {Medical \\& Biological Engineering \\& Computing},
  volume  = {63},
  number  = {6},
  pages   = {1697--1713},
  year    = {2025},
  doi     = {10.1007/s11517-025-03301-5}
}`,
  },
  {
    title:
      "Deep learning and genetic algorithm-based ensemble model for feature selection and classification of breast ultrasound images",
    venue: "Image and Vision Computing, 146, 105018, 2024",
    image: "/images/architectures/ga-ensemble.jpg",
    summary:
      "Deep features selected by a genetic algorithm and classified by a weighted-voting ensemble, gaining 4–9% accuracy on benchmark breast ultrasound data while curbing overfitting on small datasets.",
    paper: "https://doi.org/10.1016/j.imavis.2024.105018",
    code: "https://github.com/MohsinFurkh/Genetic-Algorithm-based-Feature-Selection",
    bibtex: `@article{dar2024gaensemble,
  title   = {Deep learning and genetic algorithm-based ensemble model for feature selection and classification of breast ultrasound images},
  author  = {Dar, Mohsin Furkh and Ganivada, Avatharam},
  journal = {Image and Vision Computing},
  volume  = {146},
  pages   = {105018},
  year    = {2024},
  doi     = {10.1016/j.imavis.2024.105018}
}`,
  },
  {
    title:
      "EfficientU-Net: A Novel Deep Learning Method for Breast Tumor Segmentation and Classification in Ultrasound Images",
    venue: "Neural Processing Letters, 55(8), 10439–10462, 2023",
    image: "/images/architectures/efficient-unet.jpg",
    summary:
      "EfficientNet-B7 and atrous convolution inside U-Net: a 13× parameter reduction over U-Net (1.31M vs 17.27M) with 97.9% classification accuracy on breast ultrasound.",
    paper: "https://doi.org/10.1007/s11063-023-11333-x",
    code: "https://github.com/MohsinFurkh/EfficientU-Net",
    bibtex: `@article{dar2023efficientunet,
  title   = {EfficientU-Net: A Novel Deep Learning Method for Breast Tumor Segmentation and Classification in Ultrasound Images},
  author  = {Dar, Mohsin Furkh and Ganivada, Avatharam},
  journal = {Neural Processing Letters},
  volume  = {55},
  number  = {8},
  pages   = {10439--10462},
  year    = {2023},
  doi     = {10.1007/s11063-023-11333-x}
}`,
  },
];
