# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 012 — `iter/012-restore-stack-and-journey-prior-state`
- **Goal:** Restore Stack section (`SkillsSection.tsx`) and Journey section (`JourneySection.tsx`) to their exact previous state from commit `9cdf15c` per user request, while preserving the Work Electric Cyan theme and About 2-column bento layout.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 Targeted Checkout | Restore SkillsSection.tsx and JourneySection.tsx from commit 9cdf15c | Passed |
| S2 Scope Boundary | Confirm AboutSection.tsx and HangingCardsShowcase.tsx remain intact | Passed |
| S3 Quality Gate | Run npm run lint (tsc --noEmit) and npm run build | Passed (0 errors, 937ms) |
| S4 Deploy & Verify | Commit and push to origin main | In progress |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 012-1 | Restore Stack & Journey from 9cdf15c | Integrator | `src/sections/skills/SkillsSection.tsx`, `src/sections/journey/JourneySection.tsx` | done | Restored exact prior state |
| 012-2 | Integration & Build Verification | QA & Integrator | whole repo | done | 0 errors verified, ready to push |

States: `todo` · `in-progress` · `blocked` · `review` · `done`

## Backlog
- (Karan adds goals; Orchestrator groups them into iterations)

## Completed iterations
| # | Slug | Date | Commit/Tag | Live URL |
|---|---|---|---|---|
| 001 | `iter/001-responsive-realignment` | 2026-10-18 | `4163ae9` | `http://localhost:3000` |
| 002 | `iter/002-portfolio-studio-visual-editor` | 2026-10-18 | `HEAD` | `http://localhost:3001` |
| 003 | `iter/003-visual-portfolio-editor-direct-live` | 2026-10-18 | `HEAD` | `http://localhost:3001` |
| 004 | `iter/004-decommission-editor` | 2026-10-18 | `718b8ea` | `http://localhost:3000` |
| 005 | `iter/005-ui-whitespace-and-padding-harmony` | 2026-10-18 | `HEAD` | `http://localhost:3000` |
| 006 | `iter/006-enable-native-text-selection` | 2026-10-18 | `0bdd1e7` | `http://localhost:3000` |
| 007 | `iter/007-credentials-and-educator-enrichment` | 2026-10-18 | `b61b009` | `http://localhost:3000` |
| 008 | `iter/008-stack-hud-redesign-and-declutter` | 2026-10-18 | `294fa73` | `http://localhost:3000` |
| 009 | `iter/009-chromatic-identity-and-light-mode-a11y` | 2026-10-18 | `0ebce83` | `http://localhost:3000` |
| 010 | `iter/010-journey-frosted-glassmorphism-restoration` | 2026-10-18 | `9cdf15c` | `http://localhost:3000` |
| 011 | `iter/011-journey-spread-stack-redesign-about-grid-work-cyan` | 2026-10-18 | `d891734` | `http://localhost:3000` |
| 012 | `iter/012-restore-stack-and-journey-prior-state` | 2026-10-18 | `HEAD` | `http://localhost:3000` |

## Session handoff (if a session must end mid-iteration)
- Last completed step: Restored Stack section and Journey section from commit 9cdf15c. Verified with lint and production build.
- Next step: Ready for user review.
- Open risks: none


