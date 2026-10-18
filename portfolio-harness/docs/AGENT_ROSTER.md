# AGENT_ROSTER.md — Roles, Ownership, Briefs

Spawn only the roles an iteration needs. One owner per file at a time. Default max concurrency: 4.
Every role: follow `harness.md` §5 (tokens) and `docs/SECURITY.md`; never read `.env*`.

## Roles

### 1. Orchestrator (agy cli main agent)
- **Does:** plan, test plan, briefs, merge, integration gate (S2), conflict resolution, release, deploy decision.
- **Owns:** `src/App.tsx`, `src/index.css` (unless delegated), `src/data/portfolioData.ts` + `src/types/*` (unless delegated), `package.json`, `vite.config.ts`, host config, `.env.example`, `docs/TASKS.md`, `CHANGELOG.md`, `DECISIONS.md`.
- **Tier:** strongest.

### 2. UI Engineer
- **Does:** React components, props, composition, responsiveness.
- **Owns:** only named component files **and their colocated unit tests** (`<Name>.test.tsx`).
- **Must:** typed props; content from `portfolioData.ts`; S1 white-box unit tests; no secrets/env access.
- **Tier:** strong.

### 3. Motion & Interaction
- **Does:** Motion springs, gestures, drag, scroll-linked effects.
- **Owns:** animation logic in assigned components (via brief) + unit tests for logic (not pixel visuals).
- **Must:** respect `prefers-reduced-motion`; < 50 ms response; no layout shift.
- **Tier:** strong.

### 4. Style & Theme
- **Does:** Tailwind v4 tokens, Day/Night themes, tint engine, type scale.
- **Owns:** `src/index.css`, tokens.
- **Must:** contrast target; verify both themes.
- **Tier:** mid.

### 5. Content & Data
- **Does:** content structure in `portfolioData.ts`, type updates.
- **Owns:** `src/data/portfolioData.ts`, `src/types/*`, `src/data/portfolioData.test.ts`.
- **Must:** only facts supplied by Karan or already in repo; `TODO(karan)` for unknowns; no private personal data.
- **Tier:** mid.

### 6. Test Engineer
- **Does:** integration tests (S2, white/gray box), E2E and live-smoke tests (S3/S5, **black box**), test configs, fixtures, mocks; security black-box probes (exposed paths, headers).
- **Owns:** `tests/*`, `playwright.config.ts`, Vitest config section, test scripts proposal.
- **Must:** deterministic tests, fake fixtures only, no real network/keys, never weaken tests to pass.
- **Tier:** mid.

### 7. QA, A11y & Perf (read-only on source)
- **Does:** run S4 acceptance checklist: both themes, widths, keyboard, reduced motion, axe, Lighthouse, bundle size, console errors. Reports defects with `path:line`.
- **Owns:** nothing.
- **Tier:** mid.

### 8. Security Reviewer (read-only)
- **Does:** diff review vs `docs/SECURITY.md`: secrets/PII, `VITE_*` misuse, new deps, external requests, headers/CSP, serverless function behavior, `check:dist` result, `.gitignore`. **Can BLOCK a release.**
- **Owns:** nothing.
- **Tier:** mid.

### 9. Docs Scribe
- **Does:** required md files per `harness.md` §9; keep them short and free of secrets/personal data.
- **Owns:** `docs/*` (except `SECURITY.md`), `README.md`, `PROJECT_SUMMARY.md`.
- **Tier:** cheap.

### 10. Release Engineer
- **Does:** clean install, `verify`, tag, push, deploy per `docs/DEPLOYMENT.md`, S5 live smoke, rollback on failure.
- **Acts only on:** Orchestrator's explicit go after Definition of Done.
- **Tier:** cheap.

## Ownership conflicts
- Two agents need one file → split into separate files, or serialise (A then B).
- Shared files are edited only by their owner; others send the Orchestrator a **patch request** (what and why).
- Renames/moves belong to the Orchestrator.

## Brief template (≤ 200 words)
```
ROLE: <role>
ITERATION/TASK: NNN / <slug>
GOAL: <one sentence>
OWNED FILES (edit): <paths, incl. test files>
READ-ONLY CONTEXT: <paths or symbols>
CONTRACT: <types/props/tokens/env names that must hold>
TESTS REQUIRED: <stage S1/S2/S3, what to cover, white vs black box>
DONE WHEN: <testable conditions + lint/unit pass + coverage>
CONSTRAINTS: harness.md §5 (tokens), docs/SECURITY.md (no secrets, never open .env*)
BRANCH: agent/<role>/<task> (worktree ../wt-<role>-<task>)
REPORT: STATUS / FILES / WHAT / TESTS / VERIFIED / RISKS / NEEDS (≤150 words)
```

## Example split ("add contact form with email delivery")
| Agent | Task | Owned files |
|---|---|---|
| Orchestrator | Phase A: types, `.env.example` names, decide function host, DECISIONS entry | `src/types/portfolio.ts`, `.env.example` |
| UI Engineer | Form component + unit tests (validation branches) | `src/components/ContactForm.tsx`, `.test.tsx` |
| Orchestrator/Backend-capable agent | Server-side function reading secret from host env (never from `src/`) | `api/contact.*` (host-specific) |
| Test Engineer | Integration (form → fetch mock), E2E black box, probe that no key is in `dist/` | `tests/*` |
| Security Reviewer | Origin check, rate limit, input validation, no key leakage | read-only |
