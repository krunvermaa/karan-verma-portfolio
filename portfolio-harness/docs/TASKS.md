# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 001 — `iter/001-harness-testing-security`
- **Goal:** Adopt the harness, set up the test stack, and lock down secrets/leak protection.
- **Status:** planned

### Test plan for this iteration
| Stage | What |
|---|---|
| S1 unit (white box) | `portfolioData` validators; `ThemeToggle` branches; smoke-render each component |
| S2 integration | `App` renders all sections from data; modal open/close/focus; theme toggle across sections |
| S3 system (black box) | Load, nav, theme toggle, case-study modal, keyboard walk, 375px viewport, exposed-path probes |
| S4 acceptance | `npm run verify` + checklist in `docs/TESTING.md` §4 |
| S5 live smoke | After deploy, on the live URL |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 001-1 | Add harness + docs + scripts + `.env.example` to repo | Orchestrator | root md files, `docs/*`, `scripts/*`, `.env.example` | todo | |
| 001-2 | Verify/extend `.gitignore` per `SECURITY.md` §4.3; confirm `.env.local` ignored | Orchestrator | `.gitignore` | todo | |
| 001-3 | Harden `vite.config.ts`: no source maps, drop console/debugger; add Vitest config | Orchestrator | `vite.config.ts` | todo | needs DECISIONS entries for new devDeps |
| 001-4 | Add test deps + scripts; test setup | Test Engineer | `tests/setup.ts`, `package.json` scripts (via Orchestrator) | todo | |
| 001-5 | Unit tests: data + ThemeToggle + component render smoke | UI Engineer / Content & Data | colocated `*.test.*` | todo | S1 |
| 001-6 | Integration + E2E + smoke + exposed-path probes | Test Engineer | `tests/integration/*`, `tests/e2e/*`, `playwright.config.ts` | todo | S2/S3/S5 |
| 001-7 | Security review: history scan, deps audit, headers plan | Security Reviewer | read-only | todo | |
| 001-8 | Sync README / PROJECT_SUMMARY with ARCHITECTURE | Docs Scribe | `README.md`, `PROJECT_SUMMARY.md` | todo | |
| 001-9 | Confirm hosting, live URL, repo-visibility decision | Orchestrator → Karan | `docs/DEPLOYMENT.md`, `docs/SECURITY.md` §6 | todo | ask once |
| 001-10 | Apply security headers on host; run S5 | Release Engineer | host config | todo | after 001-9 |

States: `todo` · `in-progress` · `blocked` · `review` · `done`

## Backlog
- (Karan adds goals; Orchestrator groups them into iterations)

## Completed iterations
| # | Slug | Date | Commit/Tag | Live URL |
|---|---|---|---|---|
| — | — | — | — | — |

## Session handoff (if a session must end mid-iteration)
- Last completed step: Full responsive realignment across mobile (<640px), tablet (640px–1024px), and laptop/desktop (>1024px) executed using 4 parallel specialist agents. Resolved all negative-margin occlusions, clothesline scroll tilts, binder clip clearances, fanning cards viewport overflow with touch swipe carousel, top-row sticker collisions, and light-mode perforation notch styling. Passed all lint, build, and dist leak checks.
- Next step: Setup testing harness dependencies (Vitest/Playwright) and git hooks as planned in Iteration 001.
- Open risks: none


