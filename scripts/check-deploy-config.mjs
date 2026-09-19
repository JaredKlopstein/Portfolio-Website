// Guards the launch-readiness contract of the Vercel deploy: security headers on
// every response, and a real 404 for unknown paths. Runs as part of `npm run build`.
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

for (const file of ['index.html', '404.html']) {
  if (!existsSync(resolve(root, 'dist', file))) {
    failures.push(`dist/${file} is missing from the build output`)
  }
}

if (failures.length > 0) {
  console.error('Deploy config check failed:')
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

console.log('Deploy config check passed: security headers set, 404 page shipped.')
