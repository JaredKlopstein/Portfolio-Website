# jaredklopstein.dev

Personal site for Jared Klopstein — founder of Ascella Studios. A single-page,
text-first site: short bio, dated "now" section, studio blurb, email.

Built with React 19 + Vite 7 and plain CSS. No router, no CSS framework.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs to dist/
```

## Deploy

Deployed on Vercel; `vercel.json` rewrites all routes to `index.html`.

See `CLAUDE.md` for layout, design-system, and copy-voice notes.
