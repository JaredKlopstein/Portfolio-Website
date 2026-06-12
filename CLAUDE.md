# Portfolio Website — jaredklopstein.dev

Personal site for Jared Klopstein, founder of Ascella Studios. A single-page,
text-first personal site in the vein of leerob.com / antfu.me — short bio,
dated "now" section, honest studio blurb, email. No projects grid, no skills
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
| `Ascella` | 1 short honest paragraph + plain mono link to ascellastudios.com. No mission statements, no gradient billboards. |
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

## Facts that gate content (as of June 2026)

- ascellastudios.com is live and being rebuilt from scratch in a separate
  effort; the next Ascella product is a mobile app, unannounced. Do not name
  unreleased products here.
- OG/Twitter image is `public/me.jpg` (square, `summary` card). There is no
  `og-image.png`; if one is added to `public/`, switch the meta tags in
  `index.html` back to `summary_large_image`.

## Commands

```bash
npm run dev      # Vite dev server (localhost:5173)
npm run build    # production build → dist/
npm run lint     # eslint
```

Deployed on Vercel (all routes rewrite to `index.html` via `vercel.json`).
Domain: jaredklopstein.dev.
