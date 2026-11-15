# Portfolio Website — jaredklopstein.dev

Personal site for Jared Klopstein. A single-page, text-first "here's what I'm
doing" page in the vein of leerob.com / antfu.me — short bio, dated "now"
section, one short blurb + link for each company (Ascella Studios, Frontier
Forge Technologies), a personal-project placeholder, email. No projects grid, no skills
list, no blog, no contact form. Content is intentionally sparse; resist adding
sections back.

**Tech**: React 19 + Vite 7, plain CSS (component-scoped files + CSS custom
properties), lucide-react icons. No router, no CSS framework, no form/email
dependencies.

## Layout

Single centered column (`.page`, max-width 42rem) defined in `src/App.css`.
Sections use the shared `.section` / `.section-heading` / `.section-label`
(mono, lowercase, accent color) / `.section-meta` classes from `App.css`.
Inline prose links use `.text-link`.

Page order (`src/App.jsx`):

| Component | Purpose |
|---|---|
| `Header` | Fixed minimal bar: "jk" logo (scrolls to top) + theme toggle. No nav. |
| `Intro` | Avatar + name + mono role line, 3-paragraph bio, mono text links (GitHub / LinkedIn / X). Replaces the old Hero + About. |
| `Now` | /now-style list of label→value rows. Has an `UPDATED` constant — **bump it whenever the items change**, it's the section's credibility. |
| `Venture` (×2) | Generic company block, used once for Ascella Studios and once for Frontier Forge Technologies: 1 short honest paragraph + plain mono link to the company site. Copy lives in `App.jsx`. Generic info only — no product names, no mission statements, no gradient billboards. |
| `Personal` | One-line placeholder for Jared's own project. Replace with a real blurb + link when it exists. |
| `SayHi` | Click-to-copy email button (`hello@jaredklopstein.dev`), mailto fallback. |
| `Footer` | © year + text social links. |

## Design system

Theme variables live in `src/index.css` (`:root[data-theme="light"|"dark"]`).
Light theme is warm paper (`#faf7f2`), dark is near-black blue (`#0b0d10`),
accent is teal (`#0d9488` light / `#2dd4bf` dark).

Typography: Source Serif 4 for headings, Inter for body, JetBrains Mono for
labels/metadata/links (loaded in `index.html`). The mono-label + serif-name
contrast is the visual identity — keep new UI inside those three fonts.

Theme state: `App.jsx` → localStorage, defaults to system preference, sets
`data-theme` on `<html>`. `prefers-reduced-motion` is respected globally in
`index.css`.

## Voice

Copy is first-person, plain, a little dry ("The urge to polish instead of
ship."). No marketing language, no "passionate", no "innovative" — and at
most one aphorism per section; the rest stays factual. Stacked clever lines
read as performed humility. Keep content about the tech/entrepreneur journey
only — no personal life-goal items (e.g. an "Italy" line was removed on
request). When editing copy, match this register.

## Facts that gate content (as of November 2026)

- The company sections stay generic on purpose: describe each company and
  link to its site (ascellastudios.com, frontierforge.tech). Do not name
  individual products here; the company sites own that.
- The personal project is unannounced. Keep the placeholder until Jared says
  otherwise.
- OG/Twitter image is `public/me.jpg` (square, `summary` card). There is no
  `og-image.png`; if one is added to `public/`, switch the meta tags in
  `index.html` back to `summary_large_image`.

## Commands

```bash
npm run dev      # Vite dev server (localhost:5173)
npm run build    # production build → dist/
npm run lint     # eslint
```

`npm run build` also runs `scripts/check-deploy-config.mjs`, which fails the
build if `vercel.json` loses its security headers or regains a catch-all
rewrite, or if `dist/404.html` is missing, or if `dist/sitemap.xml` stops
listing `https://jaredklopstein.dev/` or `dist/robots.txt` stops advertising it.

`public/sitemap.xml` lists the one URL this single-page site has — bump its
`<lastmod>` when the page content changes.

Deployed on Vercel. No rewrites: unknown paths serve `public/404.html` with a
404 status, and `vercel.json` sets `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, and a `frame-ancestors` CSP on every response.
Domain: jaredklopstein.dev.
