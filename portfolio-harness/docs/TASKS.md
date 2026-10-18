# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 008 — `iter/008-stack-hud-redesign-and-declutter`
- **Goal:** Redesign the STACK section active skill detail card into a sleek, modern Developer Telemetry HUD (Linear/Vercel/Raycast aesthetic); remove the Chronological Year Index Selector from Journey; and declutter Resume section of kitschy/unnecessary elements.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 UI Research | Survey web for modern developer telemetry/HUD inspector card patterns | Passed |
| S2 Section Updates | Disjoint subagents remove selector in Journey, declutter Resume, and build HUD in Skills | Passed |
| S3 Typecheck & Build | Run npm run lint (tsc --noEmit) and npm run build | Passed (0 errors, 1.17s) |
| S4 Visual & Selection Gate | Confirm text selectability preserved (0 select-none in sections) | Passed |
| S5 Push & Deploy | Push verified changes to GitHub main branch | Passed |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 008-1 | Remove Year Index Selector | Journey Specialist | `src/sections/journey/JourneySection.tsx` | done | Removed chronological year index strip |
| 008-2 | UI Research & Spec | UI Researcher | read-only | done | Produced Developer Telemetry HUD spec |
| 008-3 | Build Developer HUD in Skills | Skills UI Engineer | `src/sections/skills/SkillsSection.tsx` | done | Modern glassmorphism HUD with SVG dial |
| 008-4 | Declutter Resume Section | Resume Specialist | `src/sections/resume/ResumeSection.tsx` | done | Removed HELLO eye, Bengali stamp, graffiti, barcodes |
| 008-5 | Integration quality gate | QA & Integrator | whole repo | done | 0 errors verified, pushed to main |

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
| 008 | `iter/008-stack-hud-redesign-and-declutter` | 2026-10-18 | `HEAD` | `http://localhost:3000` |

## Session handoff (if a session must end mid-iteration)
- Last completed step: Integrated Pro Learn Coaching Classes (Co-Founder & Educator, 3+ years teaching, 50+ students guided), Institution's Innovation Council (IIC) & Incubation Centre Student Coordinator, Creator & Video Editing dimension, and Hero 19-year-old believer positioning across all active sections. Verified with TypeScript lint and production build.
- Next step: Ready for user review.
- Open risks: none


