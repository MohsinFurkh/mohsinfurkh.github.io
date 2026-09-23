// Publication entries come from Google Scholar, which carries no DOI or repo
// link. Match a Scholar title against `match` to attach the canonical paper URL
// and the code repository.
export type PaperLink = {
  match: string;
  paper?: string;
  code?: string;
};

export const paperLinks: PaperLink[] = [
  {
    match: "msct-trans",
    paper: "https://doi.org/10.1016/j.ultrasmedbio.2026.07.032",
    code: "https://github.com/MohsinFurkh/MSCT-Trans",
  },
  {
    match: "saliency-guided attentionnet",
    paper: "https://doi.org/10.1016/j.bspc.2026.111194",
    code: "https://github.com/MohsinFurkh/Saliency-Guided-AttentionNet",
  },
  {
    match: "fuzzy rough set loss",
    paper: "https://doi.org/10.1016/j.compmedimag.2026.102716",
    code: "https://github.com/MohsinFurkh/Fuzzy-Rough-Set-Loss",
  },
  {
    match: "uma-net",
    paper: "https://doi.org/10.1007/s11517-025-03301-5",
    code: "https://github.com/MohsinFurkh/UMA-Net-with-Multi-Scale-Attention",
  },
  {
    match: "genetic algorithm-based ensemble model",
    paper: "https://doi.org/10.1016/j.imavis.2024.105018",
    code: "https://github.com/MohsinFurkh/Genetic-Algorithm-based-Feature-Selection",
  },
  {
    match: "efficientu-net",
    paper: "https://doi.org/10.1007/s11063-023-11333-x",
    code: "https://github.com/MohsinFurkh/EfficientU-Net",
  },
];

export function linksFor(title: string): PaperLink | undefined {
  const needle = title.toLowerCase();
  return paperLinks.find((entry) => needle.includes(entry.match));
}
