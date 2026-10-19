# TASKS.md — Live Task Board

Updated by the Orchestrator at iteration start, on every task state change, and at close. First file read after `harness.md`.

## Current iteration
- **Iteration:** 015 — `iter/015-unique-section-content-and-ambient-tints`
- **Goal:** (1) Remove 4 Core Engineering Values boxes from About; (2) Add luminous background ambient light tints to About, Stack, and Resume matching Hero/Work/Contact; (3) Reshuffle and de-duplicate content across all sections so every section has a unique, non-overlapping narrative focus.
- **Status:** completed

### Test plan for this iteration
| Stage | What | Status |
|---|---|---|
| S1 7 Parallel Subagents | Run disjoint subagents for About, Stack, Resume, Hero, Journey, Work, Data | Passed ✅ |
| S2 Values Removal & Tints | Verify 4 values boxes removed from About, ambient tints added to About, Stack, Resume | Passed ✅ |
| S3 Narrative De-Duplication | Ensure each section presents unique content without repetitive boilerplate | Passed ✅ |
| S4 Quality Gate & Deploy | Run npm run lint (tsc --noEmit), npm run build, commit, and push | Passed ✅ |

### Tasks
| ID | Task | Owner (role) | Owned files | State | Notes |
|---|---|---|---|---|---|
| 015-1 | About Values Removal & Terracotta Tint | About Specialist | `src/sections/about/AboutSection.tsx` | done | 4 boxes removed, warm terracotta glows |
| 015-2 | Stack Amber Ambient Tint & Tech Toolchain | Stack Specialist | `src/sections/skills/SkillsSection.tsx` | done | Golden honey glows, tech competencies |
| 015-3 | Resume Rose Ambient Tint & Recruiter Dossier | Resume Specialist | `src/sections/resume/ResumeSection.tsx` | done | Rose/crimson glows, recruiter clearance |
| 015-4 | Hero Executive Snapshot & Ambition | Hero Specialist | `src/sections/hero/Hero.tsx` | done | Clean executive builder hook & CTAs |
| 015-5 | Journey Chronological Progression 2023-27 | Journey Specialist | `src/sections/journey/JourneySection.tsx` | done | Purple glass kept, 10 distinct flight records |
| 015-6 | Work Systems & Software Deliverables | Work Specialist | `src/sections/work/HangingCardsShowcase.tsx` | done | Cyan theme kept, 5 software deliverables |
| 015-7 | Single Source of Truth Optimization | Data Architect | `src/data/portfolioData.ts` | done | Global data contracts de-duplicated |
| 015-8 | Integration & Build Verification | QA & Integrator | whole repo | done | 0 lint errors, 0 build errors, 0 select-none |

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


