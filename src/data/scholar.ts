// Mirrors scholar_profile_DGm9l2wAAAAJ.json. The site is a static export, so the
// /api/scholar route cannot run in production; scripts/update_scholar.py rewrites
// the values below each week. Keep the key names as they are — the script matches
// them literally.
export const scholarMetrics = {
  citations: 115,
  publications: 9,
  h_index: 4,
  i10_index: 3,
  citationsByYear: [
      { year: 2023, citations: 3 },
      { year: 2024, citations: 16 },
      { year: 2025, citations: 48 },
      { year: 2026, citations: 47 }
    ],
};
