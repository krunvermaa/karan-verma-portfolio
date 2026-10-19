# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 017 — `iter/017-photo-perf-about-layout-blending`
- **Goal:** (1) Replace resume photo with Karan's actual portrait photo `/karan-photo.jpg`; (2) Fix laggy/jittery UI in Journey by removing GPU-choking nested multi-pass blurs; (3) Reorganize About section so boxes sit under Creative License in a balanced bento grid; (4) Animate Creative License Badge with interactive 3D tilt and specular shine; (5) Add smooth gradient blending transitions between sections; (6) Remove browser scrollbar on the right.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 5 Parallel Subagents | Deploy specialized subagents for Photo, Journey Perf, About Layout, Badge Animation, Global CSS | Complete |
| S2 Photo & Badge Integration | Verify `/karan-photo.jpg` properly cropped & formatted on Resume Pass and License Badge | Complete |
| S3 60FPS Journey Performance | Verify lag and jitter eliminated via hardware acceleration and optimized glass styling | Complete |
| S4 About Bento Layout | Verify boxes adjusted under Creative License to fill horizontal space harmoniously | Complete |
| S5 Scrollbar & Section Blending | Verify right-side scrollbar hidden and sections blend smoothly into each other | Complete |
| S6 Quality Gate & Deploy | Run npm run lint (tsc --noEmit), npm run build, zero select-none, commit and push | Complete |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 017-1 | Resume Photo Replacement & Pass Styling | Resume Specialist | `src/sections/resume/ResumeSection.tsx` | done | Replaced unsplash placeholder with `/karan-photo.jpg` |
| 017-2 | Journey 60FPS GPU Optimization & De-jitter | Performance Specialist | `src/sections/journey/JourneySection.tsx` | done | Eliminated recursive blur bottlenecks, buttery smooth 60FPS |
| 017-3 | About Section Space Utilization & Bento Grid | About Layout Specialist | `src/sections/about/AboutSection.tsx` | done | Positioned credential boxes under Creative License in 2-col bento grid |
| 017-4 | Creative License Badge 3D Animation | Animation Specialist | `src/sections/about/DeveloperLicenseBadge.tsx` | done | Interactive 3D tilt, holographic shine, photo avatar |
| 017-5 | Scrollbar Removal & Global Blend Utilities | Styling Specialist | `src/index.css` | done | Hid right scrollbar globally, added section blend gradients |
| 017-6 | Seamless Section Blending Integration | Orchestrator | `src/App.tsx` | done | Added smooth atmospheric gradient boundaries |

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


