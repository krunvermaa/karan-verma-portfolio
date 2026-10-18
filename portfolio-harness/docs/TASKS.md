# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 006 — `iter/006-enable-native-text-selection`
- **Goal:** Enable native selectable and copyable text across all sections (Work, About, Skills, Journey, Resume, Contact) by removing select-none constraints from section roots and cards.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 Unit & Component checks | Remove select-none in disjoint section components | Passed |
| S2 Integration | Verify all 6 section components compile cleanly together | Passed |
| S3 Typecheck & Build | Run npm run lint (tsc --noEmit) and npm run build | Passed (0 errors, 609ms) |
| S4 Visual & Selection Gate | Black-box verification that text can be highlighted & copied across all sections | Passed |
| S5 Push & Deploy | Push verified changes to GitHub main branch | Passed |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 006-1 | Work section text selection | Work Specialist | `src/sections/work/HangingCardsShowcase.tsx`, `src/sections/work/ProjectMockup.tsx` | done | Removed select-none on section & mockups |
| 006-2 | About section text selection | About Specialist | `src/sections/about/DeveloperLicenseBadge.tsx` | done | Removed select-none on license badge |
| 006-3 | Skills & Journey text selection | Skills & Journey Specialist | `src/sections/skills/SkillsSection.tsx`, `src/sections/journey/JourneySection.tsx` | done | Removed select-none on section roots & cards |
| 006-4 | Resume & Contact text selection | Resume & Contact Specialist | `src/sections/resume/ResumeSection.tsx`, `src/sections/contact/ContactSection.tsx` | done | Removed select-none on section roots & stamps |
| 006-5 | Build verification & release gate | QA & Integrator | whole repo | done | 0 errors verified, pushed to main |

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

## Session handoff (if a session must end mid-iteration)
- Last completed step: Standardized all section paddings, eliminated vertical voids, prevented horizontal scroll/jitter, fixed MoovFolderDeepDive ambient shadow bleed, tightened FrostedFolderFan stage, improved touch targets in Navbar, and verified clean TypeScript lint and production build.
- Next step: Ready for user review.
- Open risks: none


