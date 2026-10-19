# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 016 — `iter/016-journey-purple-glass-and-scroll-animations`
- **Goal:** (1) Uniform authentic purple glassmorphism for all Journey cards with high-contrast black text in light mode; (2) Revert scroll animations as per user feedback to maintain clean, classic portfolio flow.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 Parallel Subagents | Deploy specialized subagents for Journey glassmorphism and contrast | Passed ✅ |
| S2 Journey Uniform Purple Glass & Black Text | Verify all 10 cards use uniform purple glass and light mode text is crisp black | Passed ✅ |
| S3 Clean Scroll Flow | Remove scroll portal conduits, radar HUD, and velocity indicators per user request | Passed ✅ |
| S4 Quality Gate & Deploy | Run npm run lint (tsc --noEmit), npm run build, zero select-none, commit and push | Passed ✅ |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 016-1 | Journey Uniform Purple Glass & Light Mode Black Text | Journey Specialist | `src/sections/journey/JourneySection.tsx` | done | All 10 cards uniform purple glass, crisp black text in light mode |
| 016-2 | Revert Scroll Animations & HUD | Orchestrator | `src/App.tsx`, `src/components/index.ts` | done | Removed conduits, radar HUD, and velocity pill for clean native flow |

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
| 012 | `iter/012-restore-stack-and-journey-prior-state` | 2026-10-18 | `0b515ce` | `http://localhost:3000` |
| 013 | `iter/013-restore-about-section-prior-state` | 2026-10-18 | `ebddd6d` | `http://localhost:3000` |
| 014 | `iter/014-journey-purple-glass-and-stack-sticky-spread` | 2026-10-18 | `50ba510` | `http://localhost:3000` |
| 015 | `iter/015-unique-section-content-and-ambient-tints` | 2026-10-19 | `HEAD` | `http://localhost:3000` |

## Session handoff (if a session must end mid-iteration)
- Last completed step: Iteration 015 completed: ambient tints added to About, Stack, Resume; 4 values boxes removed from About; unique content across all sections.
- Next step: All tasks complete. Ready for user feedback.
- Open risks: none


