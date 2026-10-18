# CONVENTIONS.md — Code, Tests, Security, Git

## TypeScript / React
- Strict typing. No `any`, no `@ts-ignore`, no loosening `tsconfig` to pass checks.
- Function components + hooks. One component per file, `PascalCase.tsx`.
- Props typed with interfaces; domain types in `src/types/portfolio.ts`, re-exported from `src/types/index.ts`.
- Content from `portfolioData.ts`; no hard-coded copy, links or dates in components.
- Split files past ~250 lines or mixed concerns. Memoise only with a measured reason.
- No `console.log`, dead code, commented-out blocks, unused imports.
- No `dangerouslySetInnerHTML` with unsanitised content; no `eval`/`new Function`.
- External links: `rel="noopener noreferrer"`.

## Env & secrets in code
- Never hard-code keys, tokens, or private URLs. Never read `import.meta.env.VITE_*` for anything secret (it's public).
- Public config only via documented `VITE_*` vars listed in `.env.example` as `# PUBLIC`.

## Tests
- Unit tests colocated: `<Name>.test.tsx` (white box). Integration: `tests/integration/*.int.test.tsx`. E2E: `tests/e2e/*.spec.ts` (black box).
- `describe('<Unit>')` / `it('does X when Y')`; Arrange–Act–Assert; one behaviour per test.
- Query by role/label/text; avoid class-name selectors and snapshots of animated trees.
- Mock network, timers, `IntersectionObserver`, `matchMedia`. Fake fixtures only.
- Never skip, delete or weaken a test to pass; bug fix = failing test first.

## Styling
- Tailwind v4 utilities + semantic tokens from `src/index.css`; no raw hex for theme-aware colors.
- Check Day and Night, mobile/tablet/desktop. No new CSS files without a DECISIONS entry.

## Motion & accessibility
- Motion springs consistent with existing components; animate `transform`/`opacity`; respect `prefers-reduced-motion`.
- Semantic HTML first; keyboard operable; visible focus; meaningful labels/alt; contrast to AAA aim.

## Naming
- Components `PascalCase`; hooks `useThing`; utils `camelCase`; true constants `SCREAMING_SNAKE_CASE`.
- Branches: `iter/NNN-slug`, `agent/<role>/<task>`.

## Git
- Conventional Commits: `type(scope): imperative summary` (≤ 72 chars). Types: feat, fix, style, refactor, perf, a11y, test, docs, chore, build, ci, security, revert.
- One logical change per commit; commit after typecheck + unit tests pass.
- Stage files explicitly; review `git diff --staged`; run the secret scan before committing.
- No force-push or history rewrite on shared branches. Never commit `node_modules/`, `dist/`, `coverage/`, `playwright-report/`, `test-results/`, `.env*` (except `.env.example`), `*.map`.
- Tags: `v0.<iteration>.0`.

## Docs
- Present tense, short, tables and bullets, `YYYY-MM-DD`, no marketing language, no secrets or personal data.
