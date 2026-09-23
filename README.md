# Academic Website - Deep Learning for Medical Image Analysis

A minimalist academic website showcasing research in Deep Learning and Medical Image Analysis.

## Features

- Next.js App Router + Tailwind CSS, deployed to GitHub Pages as a static export
- Pages: Home, Research, Publications, Writing, About & CV, plus the MedVIS Lab and
  PhD thesis pages
- Publication metrics sync weekly from Google Scholar
  (`scripts/update_scholar.py`, run by `.github/workflows/update_scholar.yml`)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd academic-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Where the content lives

Page content is kept in `src/data/` so pages stay presentational:

| File | Contents |
| --- | --- |
| `site.ts` | Name, role, email, profile links, top navigation |
| `cv.ts` | Education, appointments, grants, awards, teaching, service, skills, IDs |
| `news.ts` | Home page news items |
| `research.ts` | Research directions and projects |
| `featuredPublications.ts` | The three publications highlighted on the home page |
| `posts.ts` | Writing index |
| `scholar.ts` | Scholar metrics — rewritten weekly by `scripts/update_scholar.py` |

Colors and fonts are defined in `tailwind.config.js`, `src/app/globals.css` and
`src/app/layout.tsx`. Images live in `public/images`.

## License

This project is licensed under the ISC License. 