export type Post = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug?: string;
  url?: string;
};

// Newest first. Posts with `slug` live on this site; the rest are on the
// earlier deepmedresearch blog.
export const posts: Post[] = [
  {
    title: "Quantum-Resistant Medical Image Encryption",
    excerpt:
      "An interactive exploration of post-quantum cryptography for securing medical imaging data against future quantum computing threats.",
    date: "June 9, 2025",
    category: "Cybersecurity",
    readTime: "10 min read",
    slug: "quantum-resistant-medical-image-encryption",
  },
  {
    title: "Fuzzy Cross-Entropy Loss Function in Image Segmentation (Part 2)",
    excerpt:
      "Advanced applications and optimizations of fuzzy cross-entropy loss in medical image segmentation.",
    date: "November 1, 2023",
    category: "Deep Learning",
    readTime: "9 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/fuzzy-cross-entropy-loss-function-in-image-segmentation",
  },
  {
    title: "Fuzzy Cross-Entropy Loss Function in Image Segmentation",
    excerpt:
      "Understanding and implementing fuzzy cross-entropy loss for more robust image segmentation models.",
    date: "September 1, 2023",
    category: "Deep Learning",
    readTime: "8 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/fuzzy-cross-entropy-loss-function-in-image-segmentation",
  },
  {
    title: "Fuzzy-Based U-Net Model",
    excerpt:
      "Exploring the integration of fuzzy logic with U-Net for improved medical image segmentation.",
    date: "August 20, 2023",
    category: "Image Processing",
    readTime: "6 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/fuzzy-based-unet-model",
  },
  {
    title: "U-Net Model and Its Limitations",
    excerpt:
      "An in-depth analysis of the U-Net architecture for image segmentation and its current limitations.",
    date: "August 5, 2023",
    category: "Deep Learning",
    readTime: "7 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/unet-model-and-its-limitations",
  },
  {
    title: "Deepfakes: The Double-Edged Sword of Synthetic Media",
    excerpt:
      "Examining the implications and challenges of deepfake technology in media and society.",
    date: "July 1, 2023",
    category: "AI Ethics",
    readTime: "8 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/deepfakes-the-double-edged-sword-of-synthetic-media",
  },
  {
    title: "Developing a Novel Segmentation Technique",
    excerpt:
      "Exploring innovative approaches to medical image segmentation for improved diagnostic accuracy.",
    date: "June 2, 2023",
    category: "Image Processing",
    readTime: "7 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/developing-a-novel-segmentation-technique",
  },
  {
    title: "Skills Requirement for PhD in Medical Image Analysis",
    excerpt:
      "Essential skills and knowledge areas needed to excel in medical image analysis research.",
    date: "May 12, 2023",
    category: "Research",
    readTime: "6 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/skills-requirement-for-ph-d-in-medical-image-analysis",
  },
  {
    title: "PhD in Medical Image Analysis",
    excerpt:
      "Research objectives and approaches for PhD studies in medical image analysis, focusing on segmentation techniques.",
    date: "May 10, 2023",
    category: "Research",
    readTime: "5 min read",
    url: "https://mohsinfaurkh.wixsite.com/deepmedresearch/post/ph-d-in-medical-image-analysis",
  },
];
