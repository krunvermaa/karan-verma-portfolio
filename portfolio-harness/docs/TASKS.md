# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 014 — `iter/014-journey-purple-glass-and-stack-sticky-spread`
- **Goal:** (1) Restore authentic rich purple glassmorphism on Journey folder and remove background curved lines; (2) Redesign Stack section by removing the side card and background grid lines, spreading tactile sticky notes across the section.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 Disjoint Subagents | Run parallel subagents for Journey (20a14c2e) and Stack (b7c18655) | Passed |
| S2 Journey Purple Glass & Lines | Verify purple glass on folder and background rays deleted | Passed |
| S3 Stack Sticky Notes Spread | Verify side card removed, grid lines deleted, sticky notes spread across grid | Passed |
| S4 Quality Gate & Deploy | Run npm run lint (tsc --noEmit), npm run build, commit, and push | Passed (0 errors, 396ms) |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 014-1 | Journey Purple Glass & Background Rays Removal | Journey Specialist | `src/sections/journey/JourneySection.tsx` | done | Purple glass on folder + background rays removed |
| 014-2 | Stack Side Card Removal & Sticky Notes Spread | Stack Specialist | `src/sections/skills/SkillsSection.tsx` | done | Grid lines removed + full-width sticky notes spread |
| 014-3 | Integration & Build Verification | QA & Integrator | whole repo | done | 0 errors verified, ready to push |

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
| 014 | `iter/014-journey-purple-glass-and-stack-sticky-spread` | 2026-10-18 | `HEAD` | `http://localhost:3000` |

## Session handoff (if a session must end mid-iteration)
- Last completed step: Restored rich purple glassmorphism on Journey folder and removed background lines; redesigned Stack section to spread tactile sticky notes across the section without side cards or grid lines.
- Next step: Ready for user review.
- Open risks: none


