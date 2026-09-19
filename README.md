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

Deployed on Vercel. `vercel.json` sets security headers on every response
(`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and a
`frame-ancestors` CSP). There is no catch-all rewrite — the site has no router,
so unknown paths fall through to `public/404.html` with a real 404 status.

See `CLAUDE.md` for layout, design-system, and copy-voice notes.
