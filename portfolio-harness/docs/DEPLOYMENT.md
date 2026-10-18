# DEPLOYMENT.md — Release, Deploy & Hosting Security

Static site: `npm run build` → `dist/`.

## Target (fill in once, keep current)
| Field | Value |
|---|---|
| Hosting provider | `TODO(karan)` — README lists Vercel, GitHub Pages, Cloudflare Pages, Netlify |
| Live URL | `TODO(karan)` |
| Deploy trigger | `TODO(karan)` — e.g. auto on push to `main`, or manual command |
| Serverless functions | none yet (add only per `docs/SECURITY.md` §4.2) |
| Build command / output | `npm run build` / `dist` |
| Node version | 20+ (18 minimum) |

## Environment variables on the host
- Set **production secrets only in the host dashboard** (server-side env). Never in the repo, never `VITE_*`.
- `VITE_*` values set on the host are **public**; use only for values marked `# PUBLIC` in `.env.example`.
- Keep `.env.example` and this section in sync. List variable **names** and purpose here, never values:

| Name | Public? | Used by | Purpose |
|---|---|---|---|
| (none yet) | | | |

## Security headers (add per host)
Baseline to apply via the host's config (`vercel.json` headers, `_headers` for Netlify/Cloudflare Pages, or Pages/Actions-compatible equivalents; GitHub Pages cannot set custom headers — note that limitation in DECISIONS if chosen):

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
X-Frame-Options: DENY
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```
Notes:
- Adjust CSP to what the app really loads (fonts, images, any approved API). Start with `Content-Security-Policy-Report-Only`, check the browser console on both themes and all sections, then enforce.
- `style-src 'unsafe-inline'` is commonly needed for animation libraries that set inline styles; revisit if a nonce/hash approach becomes feasible.
- Never loosen `script-src` to `'unsafe-inline'`/`'unsafe-eval'` without a DECISIONS entry and Karan's approval.

## Hardening in the build
- `vite.config.ts`: `build.sourcemap: false`; drop `console`/`debugger` in production; no secrets via `define`.
- `npm run check:dist` after every production build (fails on `.map`, forbidden files, secret patterns, localhost URLs).
- Do not serve `.git`, `.env*`, `package.json`, `docs/`, `harness.md` (they're not in `dist/`; S5 verifies).

## Release steps (after every completed iteration)
1. Definition of Done in `harness.md` §7 fully checked; Security Reviewer = PASS.
2. `git checkout main && git pull --ff-only`; merge `iter/NNN-slug`.
3. `npm ci && npm run verify` on merged `main` (lint → unit → integration → build → check:dist → e2e). Also `npm audit --omit=dev` reviewed and secret scan over history clean.
4. Update `docs/CHANGELOG.md`; `git tag -a v0.NNN.0 -m "<summary>"`; `git push origin main --follow-tags`.
5. Deploy per target; wait for the host build to finish.
6. **S5 live smoke test:** `SMOKE_URL=<live-url> npm run test:smoke`. Confirms new version served, no console errors, Day/Night work, mobile viewport OK, headers present, `/.env` `/.git/config` `/package.json` `/harness.md` `/docs/` and `*.map` not exposed.
7. Record live URL + SHA in `CHANGELOG.md`; close the iteration in `TASKS.md`.

## Rollback
1. Find last good tag: `git tag --sort=-creatordate | head`.
2. Preferred: `git revert <bad-commit-or-merge>` on `main`, push, redeploy (no force-push). Or redeploy the previous deployment from the host dashboard.
3. If the problem is a **leak** (secret, source map, private file): take the deployment down or roll back **first**, rotate the credential, then fix (see `docs/SECURITY.md` §10).
4. Re-run S5, add a fix task, note in `DECISIONS.md`.

## Rules
- Deploy only from `main`, only verified code.
- Production env values are never pasted into chat, commits, docs or reports.
- If the target is still `TODO`, the Orchestrator asks Karan once, records the answer here, and proceeds.
