// scripts/check-dist.mjs
// Post-build leak check. Run after `npm run build`.
// Fails (exit 1) if dist/ contains source maps, forbidden files, secret-looking strings, or internal URLs.
// The pattern list is a safety net, not a guarantee. Real protection = no secrets in frontend code at all.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
const TEXT_EXT = new Set(['.js', '.mjs', '.css', '.html', '.json', '.txt', '.svg', '.xml', '.webmanifest']);
const FORBIDDEN_FILES = [
  /\.map$/i,
  /(^|\/)\.env/i,
  /(^|\/)harness\.md$/i,
  /(^|\/)AGENTS\.md$/i,
  /(^|\/)docs\//i,
  /\.pem$/i,
  /\.key$/i,
];

const PATTERNS = [
  ['Private key block', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ['AWS access key id', /\bAKIA[0-9A-Z]{16}\b/],
  ['Google API key', /\bAIza[0-9A-Za-z_\-]{35}\b/],
  ['GitHub token', /\bgh[pousr]_[A-Za-z0-9]{36,}\b/],
  ['Slack token', /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/],
  ['Stripe secret key', /\bsk_(?:live|test)_[A-Za-z0-9]{16,}\b/],
  ['OpenAI/Anthropic-style secret key', /\bsk-[A-Za-z0-9_\-]{20,}\b/],
  ['JWT', /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/],
  ['Generic secret assignment', /(?:api[_-]?key|secret|token|passwd|password)["']?\s*[:=]\s*["'][A-Za-z0-9_\-\/+=]{16,}["']/i],
  ['Localhost / internal URL', /https?:\/\/(?:localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+)/],
  ['sourceMappingURL reference', /\/\/# sourceMappingURL=/],
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error('check-dist: dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const problems = [];
for (const file of walk(DIST)) {
  const rel = file.replace(/\\/g, '/');
  for (const re of FORBIDDEN_FILES) {
    if (re.test(rel)) problems.push(`Forbidden file in dist: ${rel}`);
  }
  if (!TEXT_EXT.has(extname(file).toLowerCase())) continue;
  const text = readFileSync(file, 'utf8');
  for (const [label, re] of PATTERNS) {
    // Never print the matched value: it may be a real secret.
    if (re.test(text)) problems.push(`${label} pattern found in ${rel} (value redacted)`);
  }
}

if (problems.length) {
  console.error('check-dist FAILED:\n - ' + problems.join('\n - '));
  console.error('\nIf a real secret is present: STOP, rotate it, and tell Karan. Do not just rebuild.');
  process.exit(1);
}
console.log('check-dist OK: no source maps, forbidden files, or secret patterns in dist/.');
