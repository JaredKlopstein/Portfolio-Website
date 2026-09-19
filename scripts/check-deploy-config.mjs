// Guards the launch-readiness contract of the Vercel deploy: security headers on
// every response, a real 404 for unknown paths, and a crawlable sitemap that
// robots.txt points at. Runs as part of `npm run build`.
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const failures = []

const config = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf8'))

const globalRule = (config.headers ?? []).find((rule) => rule.source === '/(.*)')
if (!globalRule) {
  failures.push('vercel.json has no headers rule for source "/(.*)"')
}

const headers = new Map(
  (globalRule?.headers ?? []).map(({ key, value }) => [key.toLowerCase(), value])
)

const expected = [
  ['x-content-type-options', (v) => v === 'nosniff', 'nosniff'],
  ['x-frame-options', (v) => v === 'DENY', 'DENY'],
  [
    'referrer-policy',
    (v) => ['no-referrer', 'strict-origin', 'strict-origin-when-cross-origin'].includes(v),
    'no-referrer | strict-origin | strict-origin-when-cross-origin',
  ],
  ['content-security-policy', (v) => v.includes('frame-ancestors'), "frame-ancestors 'none'"],
]

for (const [key, isValid, want] of expected) {
  const value = headers.get(key)
  if (value === undefined) {
    failures.push(`vercel.json is missing the ${key} header (expected ${want})`)
  } else if (!isValid(value)) {
    failures.push(`vercel.json ${key} is "${value}", expected ${want}`)
  }
}

// A catch-all rewrite to index.html makes every nonexistent path answer 200.
// The site has no router, so unknown paths must fall through to 404.html.
const catchAll = (config.rewrites ?? []).find(
  (rule) => rule.source === '/(.*)' && rule.destination === '/index.html'
)
if (catchAll) {
  failures.push('vercel.json rewrites every path to /index.html, so unknown paths return 200')
}

for (const file of ['index.html', '404.html', 'sitemap.xml', 'robots.txt']) {
  if (!existsSync(resolve(root, 'dist', file))) {
    failures.push(`dist/${file} is missing from the build output`)
  }
}

// /sitemap.xml must be a real sitemap listing the canonical URL, and robots.txt
// must advertise it on an uncommented Sitemap: line so crawlers find it.
const site = 'https://jaredklopstein.dev'
const sitemapPath = resolve(root, 'dist', 'sitemap.xml')
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8')
  if (!sitemap.includes('<urlset')) {
    failures.push('dist/sitemap.xml has no <urlset> element')
  }
  if (!sitemap.includes(`<loc>${site}/</loc>`)) {
    failures.push(`dist/sitemap.xml does not list ${site}/ as a <loc>`)
  }
}

const robotsPath = resolve(root, 'dist', 'robots.txt')
if (existsSync(robotsPath)) {
  const advertisesSitemap = readFileSync(robotsPath, 'utf8')
    .split('\n')
    .some((line) => line.trim().toLowerCase() === `sitemap: ${site}/sitemap.xml`)
  if (!advertisesSitemap) {
    failures.push(`dist/robots.txt has no uncommented "Sitemap: ${site}/sitemap.xml" line`)
  }
}

if (failures.length > 0) {
  console.error('Deploy config check failed:')
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

console.log(
  'Deploy config check passed: security headers set, 404 page shipped, sitemap published.'
)
