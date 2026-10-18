# harness.md — Operating Manual for AI Agents (v2)

> Project: **karan-verma-portfolio** — React 19 + TypeScript + Vite 8 + Tailwind CSS v4 + Motion + Lucide.
> Owner: Karan Verma. This file is the **single source of truth** for how any AI agent (agy cli and its sub-agents) works in this repo.
> Precedence: `docs/SECURITY.md` > `harness.md` > every other file.

---

## 0. Prime Directives

1. **Quality first, tokens second.** Never trade correctness, security or design quality for token savings; never burn tokens on avoidable work.
2. **Structure is law.** Follow the folder structure in §8. No stray files.
3. **Nothing ships untested.** Testing happens at defined stages (§6, `docs/TESTING.md`).
4. **Secrets never reach the browser or git.** API keys, tokens and confidential environment variables are server-side only (§12, `docs/SECURITY.md`).
5. **Docs travel with code.** Every iteration updates the required md files (§9).
6. **Small, frequent, reversible commits** (§10). Never lose work.
7. **Ship the latest verified version** after every completed iteration (§11).
8. **No misuse of information.** Karan's data, credentials, identity and unpublished code are protected.
9. **Don't invent facts.** Portfolio content (projects, credentials, metrics, dates, badges) comes only from Karan or existing repo files. Unknown → `TODO(karan)`.

---

## 1. Session Start Protocol (the cheap way)

Read **only** these, in order, then stop:

| Order | File | Why |
|---|---|---|
| 1 | `AGENTS.md` | Entry point and quick rules |
| 2 | `harness.md` | Process |
| 3 | `docs/TASKS.md` | Current iteration, owners, state |
| 4 | `docs/ARCHITECTURE.md` | Only if the task touches structure or unfamiliar code |
| 5 | `docs/TESTING.md` | Only if you write or run tests |
| 6 | `docs/SECURITY.md` | Mandatory if you touch env vars, data, assets, deps, network calls, headers or deploy config |

**Never open or print `.env*` files.** Variable *names* come from `.env.example`. Do not read the whole repo; use `ls`, search, targeted reads.

---

## 2. Operating Model: Orchestrator + Sub-Agents ("Employees")

agy cli runs as the **Orchestrator**. It plans, delegates, integrates, releases. It does not do bulk implementation when work can be parallelised.

Sub-agents are specialised roles defined in `docs/AGENT_ROSTER.md`. Spawn only the roles an iteration needs.

**Capability note:** use agy cli's native sub-agent/parallel feature if available. If not, run the same roles **sequentially** as separate focused passes with the same briefs and file ownership. All rules below stay identical.

### Orchestrator
- Break the goal into independent tasks (§4), write `docs/TASKS.md`.
- Issue a **brief** per sub-agent (template in `docs/AGENT_ROSTER.md`).
- Guarantee **one owner per file** at a time.
- Review reports, integrate, resolve conflicts, run integration/system gates.
- Own shared files (`src/App.tsx`, `src/index.css`, `src/data/portfolioData.ts`, `src/types/*`, `package.json`, `vite.config.ts`, host config) unless explicitly delegated.
- Own merges to `main`, docs sign-off, release and deploy.

### Sub-agents
- Edit **only** the files in the brief. Reading others is fine.
- Write **unit tests (white box)** for the code they write, in the same task (§6).
- Return a **short structured report** (§5).
- Never deploy, never push `main`, never edit another agent's files, never add dependencies without Orchestrator approval, never touch `.env*`.

---

## 3. Roster at a Glance

Full definitions in `docs/AGENT_ROSTER.md`.

| Role | Owns (typical) | Tier |
|---|---|---|
| Orchestrator | Plans, shared files, git, release | Strongest |
| UI Engineer | Assigned `src/components/*` + their unit tests | Strong |
| Motion & Interaction | Animation logic in assigned components | Strong |
| Style & Theme | `src/index.css`, tokens | Mid |
| Content & Data | `portfolioData.ts`, `src/types/*` + data tests | Mid |
| Test Engineer | `tests/integration/*`, `tests/e2e/*`, test configs | Mid |
| QA, A11y & Perf | Read-only; runs gates, reports defects | Mid |
| Security Reviewer | Read-only; reviews diff, bundle, headers; can BLOCK | Mid |
| Docs Scribe | `docs/*` (not SECURITY), README, PROJECT_SUMMARY | Cheap |
| Release Engineer | Build, tag, deploy, live smoke test (on Orchestrator's go) | Cheap |

Use the **cheapest tier that does the job well** (§5).

---

## 4. Parallel Execution Rules

### 4.1 Decompose
A task is parallelisable only if it has (a) distinct owned files, (b) no dependency on another task's unfinished output, (c) a testable done-condition.

```
Phase A (serial, Orchestrator)  : plan, define types/tokens/contracts, update TASKS.md, test plan
Phase B (parallel, sub-agents)  : implement + UNIT tests (white box) in disjoint files
Phase C (serial, Orchestrator)  : merge, INTEGRATION tests, typecheck, build
Phase D (parallel, light)       : SYSTEM tests (black box E2E), A11y, Perf, Security review, Docs
Phase E (serial, Orchestrator)  : fix findings, final commit, release, LIVE smoke test
```

Contracts (interfaces in `src/types/portfolio.ts`, CSS tokens in `src/index.css`, env var names in `.env.example`) are fixed in **Phase A**.

### 4.2 Isolation
- Prefer **one git worktree per sub-agent**: `git worktree add ../wt-<role>-<task> -b agent/<role>/<task>` from latest `main`.
- Without worktrees: disjoint file ownership on one tree, commit per agent.
- Merge agent branches into the iteration branch in dependency order. Remove worktrees afterwards (they are never committed).

### 4.3 Limits
- Max **4 concurrent** sub-agents (more only if independent and Karan approved).
- Max **2 retries** per task, then escalate with an error summary.
- A sub-agent that finds its brief wrong or incomplete stops and reports; it does not widen scope.

---

## 5. Token Optimisation Rules

**Everyone**
1. Search before reading. Read **line ranges**, not whole large files.
2. Never paste whole files into briefs/reports; use `path:line` and diffs.
3. Don't re-read what is in context; don't re-run commands you already have output for.
4. Targeted edits, not full rewrites of unchanged files.
5. Keep output small: `--reporter=dot`, `| tail -n 30`, filter to failures.
6. **Run the narrowest test first** (changed file/test), the full suite only at gates (§6).
7. No filler, no restating the task. Bullets and the report template only.
8. Cache findings in repo docs (`ARCHITECTURE.md`, `DECISIONS.md`) so the next session doesn't rediscover them.

**Orchestrator**
1. Briefs ≤ **200 words**: goal, owned files, read-only context, contract, done-condition, tests required, report format.
2. Pass **pointers**, not contents.
3. Match tier to task: strongest for planning/integration/complex motion; mid for components/styling/tests/QA; cheap for docs/mechanical edits.
4. Batch micro-tasks into one agent instead of many tiny ones.

**Report format (≤ 150 words)**
```
STATUS: done | blocked | partial
FILES CHANGED: path (+x/-y), ...
WHAT: 1–3 bullets
TESTS: unit n pass/fail · coverage on changed files x%
VERIFIED: typecheck ✅/❌ · build ✅/❌
RISKS/FOLLOW-UPS: bullets or "none"
NEEDS FROM ORCHESTRATOR: bullets or "none"
```

---

## 6. Testing Stages (details in `docs/TESTING.md`)

| Stage | When | Test type | Approach | Who | Scope / command |
|---|---|---|---|---|---|
| **S1 Task** | End of every sub-agent task | **Unit** | **White box** (internals, branches, edge cases, hooks, data validators) | The agent that wrote the code | Changed files only: `npm run test:unit -- <path>` |
| **S2 Integration** | After merging agent branches (Phase C) | **Integration** | White + gray box (components working together, data → UI, theme toggle, modal flow) | Test Engineer / Orchestrator | `npm run test:integration` |
| **S3 System** | Before every release (Phase D) | **System / E2E** | **Black box** (user-visible behaviour only, built app via `vite preview`) | Test Engineer + QA | `npm run test:e2e` |
| **S4 Acceptance** | Before merge to `main` | Black box acceptance + a11y + perf + security scan | Checklist in `docs/TESTING.md` | QA, A11y & Perf + Security Reviewer | `npm run verify` |
| **S5 Live smoke** | Right after deploy | Black box smoke on the **live URL** | Critical-path checks, read-only, no data entry | Release Engineer | `npm run test:smoke` (with `SMOKE_URL`) |
| **Regression** | Any bug fix | Unit or E2E reproducing the bug first | Failing test → fix → passing test | Fixing agent | narrowest first |

Rules:
- **Test-first for bug fixes.** Reproduce, then fix.
- A new component/function ships with unit tests; a new user flow ships with an E2E test.
- Tests must be deterministic: no real network, no real time dependence, no secrets, mock external calls.
- Never weaken, delete or skip a test to get green. If a test is wrong, fix it and log why in the report.
- Coverage targets (changed code): ≥ 80% lines, ≥ 70% branches; data/validators/utilities ≥ 90%. Don't chase coverage on pure animation visuals; cover logic.
- Test files never contain real personal data or real keys. Use fixtures.

---

## 7. Iteration Lifecycle

One **iteration** = one coherent goal.

1. **Plan** — Orchestrator writes goal, tasks, owners, test plan, done-conditions in `docs/TASKS.md`; creates `iter/NNN-slug` from latest `main`.
2. **Build + S1** — parallel sub-agents implement and write unit tests; each commits on its agent branch.
3. **Integrate + S2** — merge, resolve, `npm run lint`, `npm run test:integration`, `npm run build`.
4. **Verify + S3/S4** — E2E black box, a11y, perf, bundle/secret scan, Security Reviewer. Defects go back to owners.
5. **Document** — Docs Scribe updates required md files (§9).
6. **Release + S5** — merge to `main`, tag, push, deploy, live smoke test (§11).
7. **Close** — mark complete in `TASKS.md`, log in `CHANGELOG.md`.

### Definition of Done (all true)
- [ ] `npm run lint` (typecheck) passes, zero errors
- [ ] S1 unit tests pass; coverage targets met on changed code
- [ ] S2 integration tests pass
- [ ] S3 system/E2E (black box) pass on the production build
- [ ] `npm run build` succeeds; no new warnings
- [ ] `npm run check:dist` passes (no source maps, no secret patterns in `dist/`)
- [ ] Secret scan on diff and history is clean (§12)
- [ ] Day and Night themes verified; mobile ≈ 375px, tablet, desktop verified
- [ ] Keyboard navigation + visible focus; `prefers-reduced-motion` respected
- [ ] Contrast meets project target; no layout shift; no heavy new deps
- [ ] No `console.log`, dead code, commented-out blocks, unused imports
- [ ] Required md files updated; folder structure matches §8
- [ ] Security Reviewer = PASS
- [ ] Committed, merged, pushed, deployed, **live smoke test (S5) passed**

---

## 8. Folder Structure Governance

### 8.1 Canonical structure
```
.
├── AGENTS.md                  # Agent entry point
├── harness.md                 # This file
├── README.md                  # Public readme
├── PROJECT_SUMMARY.md         # Existing summary — keep current
├── LICENSE                    # MIT — do not modify
├── .env.example               # Variable NAMES + placeholder values only (committed)
├── .env.local                 # Real local values (NEVER committed, NEVER read by agents)
├── .gitignore
├── index.html
├── metadata.json
├── package.json / package-lock.json
├── tsconfig.json
├── vite.config.ts             # also holds Vitest config (or vitest.config.ts)
├── playwright.config.ts       # E2E config (added in iteration 001 after approval)
├── docs/
│   ├── ARCHITECTURE.md  AGENT_ROSTER.md  CONVENTIONS.md  DEPLOYMENT.md
│   ├── SECURITY.md      TESTING.md       TASKS.md        CHANGELOG.md  DECISIONS.md
│   └── handoffs/        _TEMPLATE.md (+ optional per-iteration reports)
├── scripts/
│   └── check-dist.mjs         # Post-build leak check (source maps, secret patterns)
├── tests/
│   ├── setup.ts               # Test setup (jest-dom matchers, mocks)
│   ├── integration/           # *.int.test.tsx
│   └── e2e/                   # *.spec.ts (Playwright, black box)
├── public/                    # Static PUBLIC assets only (favicon.svg, robots.txt, images)
└── src/
    ├── components/            # PascalCase.tsx + colocated PascalCase.test.tsx (unit)
    ├── data/                  # portfolioData.ts (+ portfolioData.test.ts)
    ├── types/                 # index.ts (barrel) + portfolio.ts
    ├── App.tsx  index.css  main.tsx
```

### 8.2 Rules
1. Components → `src/components/<PascalName>.tsx`; unit test colocated as `<PascalName>.test.tsx`.
2. Hooks → `src/hooks/`, utilities → `src/utils/` (create on first use; list in `ARCHITECTURE.md`).
3. **Content never hard-coded in components**; it lives in `portfolioData.ts`, typed in `portfolio.ts`.
4. Styling through Tailwind utilities + tokens in `src/index.css`; no new CSS files without a DECISIONS entry.
5. `public/` is **public by definition**: never place private docs, notes, keys, harness files or backups there. Everything in `public/` ships to every visitor.
6. Agent/process docs (`harness.md`, `docs/*`) live outside `public/` and `src/` so they are never bundled.
7. No new root files beyond §8.1 without a DECISIONS entry.
8. Never commit: `node_modules/`, `dist/`, `coverage/`, `playwright-report/`, `test-results/`, `.env*` (except `.env.example`), logs, OS/editor junk, worktrees, `*.map`, local scratch.
9. Move/rename = structural change: update imports, `ARCHITECTURE.md`, and README structure in the same commit.
10. Run a structure audit (`git status`, compare with §8.1) before closing every iteration.

---

## 9. Required Markdown Files — Create & Maintain Every Time

If a required file is missing, **create it first**. Keep each short and factual.

| File | Purpose | Update when |
|---|---|---|
| `AGENTS.md` | Entry point | Roster/process changes |
| `harness.md` | Operating manual | Process changes (log in DECISIONS) |
| `docs/TASKS.md` | Live board, test plan per iteration, backlog | Iteration start, every task state change, close |
| `docs/TESTING.md` | Test strategy, stages, commands, coverage | Test tooling/strategy changes |
| `docs/CHANGELOG.md` | One entry per released iteration | Release |
| `docs/ARCHITECTURE.md` | Folder tree, component map, data flow, theme, test layout | Any structural/component change |
| `docs/DECISIONS.md` | Short ADRs (incl. every new dependency and deviation) | Any non-obvious choice |
| `docs/CONVENTIONS.md` | Code, naming, git style | Convention changes |
| `docs/DEPLOYMENT.md` | Host, headers, env setup, rollback, live URL | Deploy process/target changes |
| `docs/SECURITY.md` | Information and web-security rules | Only with Karan's approval |
| `docs/AGENT_ROSTER.md` | Roles, ownership, briefs | Roles change |
| `docs/handoffs/NNN-<slug>.md` | Optional concise agent reports | Per iteration; prune after release |
| `.env.example` | Env var names + placeholders (never real values) | Any env var added/removed |
| `README.md` | Public readme (stack, structure, scripts, deploy) | Features, structure, scripts, deploy change |
| `PROJECT_SUMMARY.md` | High-level summary | Features/case studies change |

Docs style: headings, tables, bullets; present tense; `YYYY-MM-DD`. **Docs never contain secrets, real env values, private URLs or personal data.**

---

## 10. Git Protocol

### 10.1 Branching
- `main` = always deployable; **only the Orchestrator merges to `main`**, only after the Definition of Done.
- `iter/NNN-slug` = iteration integration branch. `agent/<role>/<task>` = sub-agent branches.

### 10.2 Commit cadence
- Commit after **every completed logical unit** that passes typecheck **and its unit tests**. Never carry more than one finished task uncommitted.
- Sub-agents commit at the end of each task and at stable checkpoints on long tasks.
- Orchestrator commits at: plan created, each merge, docs updated, release.
- Push agent/iteration branches at integration points; push `main` at release.
- No broken builds or failing tests on `main`. `wip:` commits only on agent/iteration branches.

### 10.3 Message format (Conventional Commits)
```
<type>(<scope>): <imperative summary, ≤ 72 chars>

<optional body: what and why>
```
Types: `feat fix style refactor perf a11y test docs chore build ci security revert`.
Examples: `test(hero): add unit tests for theme-aware heading` · `security: strip source maps from production build`

### 10.4 Safety
- **Forbidden without Karan's approval:** `git push --force` (only `--force-with-lease` on your own agent branches), `git reset --hard` on shared branches, rewriting `main`, deleting others' branches, changing remotes/config.
- Before every commit: `git status`, `git diff --staged`, secret scan (§12.4). Stage files **explicitly**; no blind `git add -A`.
- Never alter the configured git identity.

### 10.5 Tagging
`v0.<iteration>.0` per released iteration; patch bumps for hotfixes.

---

## 11. Deployment Protocol — "Always Ship the Latest"

Full runbook: `docs/DEPLOYMENT.md`. After **every completed iteration**:

1. `git checkout main && git pull --ff-only`
2. Merge `iter/NNN-slug`.
3. Clean gate on merged `main`: `npm ci && npm run verify` (= lint → unit → integration → build → check:dist → e2e).
4. Update `docs/CHANGELOG.md`; tag; `git push origin main --follow-tags`.
5. Deploy (auto on push to `main` if Git-connected; else documented command). Production env vars are set **in the host dashboard**, never in the repo.
6. **S5 live smoke test** on the live URL; also confirm security headers and that no `.map` files or source are exposed.
7. Record live URL + SHA in `CHANGELOG.md`.
8. **Failure → roll back immediately** (`docs/DEPLOYMENT.md`), add a fix task. Never leave a broken or leaking version live.

Deploy only from `main`. Never deploy uncommitted or unverified code.

---

## 12. Website Security & Confidentiality (summary — full rules in `docs/SECURITY.md`)

### 12.1 The core fact
This is a static Vite site. **Anything bundled into it is public.** Any `VITE_*` variable is inlined into the JavaScript every visitor downloads. Therefore:

1. **Real secrets (API keys, tokens, passwords, private URLs) must never be in frontend code, `VITE_*` vars, `public/`, `index.html`, `metadata.json`, tests, docs or git.**
2. If a feature needs a secret (email service, AI API, database), call it through a **server-side function** (host serverless/edge function) that reads the secret from the host's environment variables. The browser calls only your function.
3. `VITE_*` variables are allowed **only** for values that are safe to be public (e.g. a public site URL, analytics site ID that Karan approved). Mark each in `.env.example` with `# PUBLIC`.

### 12.2 Environment variables
- Real values only in `.env.local` (git-ignored) and in the host dashboard. `.env.example` has names + dummy placeholders.
- **Agents never read, print, copy or log `.env*` files** or the host's secret values. Use `.env.example` for names.
- Add/remove a variable → update `.env.example` and `docs/DEPLOYMENT.md` in the same commit.
- Don't embed secrets via `define` in `vite.config.ts` or `import.meta.env` tricks.

### 12.3 Preventing code and data leaks
- Production builds ship **no source maps**; `check:dist` fails if any `.map` exists or `sourcemap` is enabled.
- Strip `console.*`/`debugger` from production builds; no private comments, TODOs with personal info, or internal notes in shipped code.
- Process/agent docs and tests are never inside `public/` or imported by `src/`.
- Security headers on the host (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, frame protection, HSTS) — see `docs/DEPLOYMENT.md`.
- Honest limit: browser code can always be viewed by visitors. Minification/obfuscation is **not** security; never rely on it to hide anything. What must stay private stays on the server or out of the repo.
- Repo visibility: the repo is public (MIT). Anything committed is public forever, including history. Karan decides whether to make the repo private or keep `harness.md`/`docs/` out of the public repo (`TODO(karan)` in `docs/SECURITY.md` §6).
- Agents must never send code, prompts or data to third-party services that Karan hasn't approved.

### 12.4 Scanning (required gates)
- **Pre-commit:** secret scan on staged changes (`gitleaks protect --staged` if installed; otherwise the grep patterns in `docs/SECURITY.md` §5).
- **Pre-release:** `gitleaks detect` over history (or equivalent), `npm audit --omit=dev`, `npm run check:dist`.
- **If a secret ever lands in git or a deployed bundle:** stop, rotate it first, then clean up with Karan's approval. Deleting the file is not enough.

---

## 13. Quality Bar
- Editorial typography, tactile metaphors (frosted folders, clothesline, license badge), spring motion.
- Interaction response < 50 ms; zero layout shift; fast bundle; WCAG AAA contrast aim.
- Day and Night themes first-class; section-by-section tint engine intact.
- Don't redesign established components unless the iteration goal says so.

## 14. When to Ask Karan
One consolidated question before: changing host, adding paid services/analytics/telemetry, publishing personal info, making the repo private/public, major redesigns, new dependencies with network/telemetry behavior, anything `SECURITY.md` marks as needing approval. Otherwise decide, log in `DECISIONS.md`, proceed.

## 15. Failure Handling
- Typecheck/build/test failure: fix the root cause; no `any`, `@ts-ignore`, loosened `tsconfig`, skipped or deleted tests.
- Merge conflict: Orchestrator resolves.
- Stuck after 2 attempts: stop, report, re-plan.
- Context/token pressure: finish current task, commit, write state in `TASKS.md`, end cleanly.
