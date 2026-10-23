# Glenn High School Model UN

A responsive first-draft website for Tom Glenn High School Model United Nations. The site is designed for local development now and is ready for a future Vercel deployment.

## Pages

- Home: club introduction, Model UN focus areas, and delegate journey
- About Us: officer structure with seven requested positions
- Helpful Links: six clearly labeled draft delegate resources
- Conferences: CTMUN Fall, SICMUN, MUNSA, and CTMUN Spring

## Local development

Requirements: Node.js 20.19+ (Node.js 22 recommended) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. `vercel.json` includes the single-page app rewrite needed for direct route visits on Vercel.

## Content status

This draft intentionally avoids unconfirmed officer names, conference dates, costs, locations, and participation claims. Resource buttons are disabled and marked “Coming soon” until real files are supplied. Homepage photography is intentionally omitted until approved images are provided.

## Logo

The site uses the user-approved Glenn Model UN logo crop in `public/brand/glenn-model-un-logo.png`. The source reference was a desktop screenshot, so only the logo itself is included to avoid publishing unrelated screen content. Replace it with an original SVG or high-resolution transparent export when available.
