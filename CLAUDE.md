# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **LogicMitra**, a fictional/sample software engineering company, built as a Vite + React + TypeScript SPA. All company details (contact info, team, testimonials, portfolio, stats) are placeholder content — see the "Before going live" section of [README.md](README.md) for what to replace before deployment.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (Vite, default port 5173)
npm run build     # type-check via `tsc -b`, then production build via `vite build`
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

There is no test suite configured. When type-checking a single file, prefer `npx tsc --noEmit -p tsconfig.app.json` over the full `build` script if a full production build isn't needed.

## Architecture

**Routing**: `react-router-dom` with a `BrowserRouter` in [src/main.tsx](src/main.tsx). All routes are declared in [src/App.tsx](src/App.tsx) and wrapped in a single `Layout` (Navbar + page content + Footer + BackToTopButton). There is no code-splitting/lazy-loading — every page is a plain top-level import.

**Page composition pattern**: Each file in `src/pages/` composes reusable section components from `src/components/sections/` in sequence (see [src/pages/Home.tsx](src/pages/Home.tsx) for the clearest example). Sections are self-contained — they pull their own data from `src/data/*.ts` rather than receiving it as props. To change what appears on a page, edit the composition in the page file; to change a section's content, edit its data source or the section component directly.

**Data layer**: All editable content (services, portfolio projects, testimonials, team bios, FAQs, process steps, stats, job openings, nav links) lives in typed data files under `src/data/`, typed against interfaces in [src/types/index.ts](src/types/index.ts). Components never hardcode this content inline — always add/edit content in the corresponding `src/data/*.ts` file.

**Styling**: Tailwind CSS v4, configured via CSS-first `@theme` in [src/index.css](src/index.css) (no `tailwind.config.js`). Custom design tokens (brand color scale, ink/dark neutral scale, font families, marquee/float keyframes) are defined there — extend the theme by adding to that `@theme` block, not by adding a config file. The site is dark-themed only (no light mode toggle).

**Icons**: `lucide-react` v1+, which no longer ships brand/logo icons (Twitter, Github, Linkedin, etc. are unavailable) — use generic icons instead. Where a service's icon is chosen dynamically by name (see [src/data/services.ts](src/data/services.ts) `icon` field), the string must have a corresponding entry in the map in [src/lib/icons.ts](src/lib/icons.ts).

**UI primitives**: `src/components/ui/` holds generic building blocks (`Button`/`LinkButton`, `Container`, `SectionHeading`, `PageHeader`, `Logo`) reused across sections and pages. Prefer composing with these over ad-hoc markup when adding new sections.

**Contact form**: [src/components/sections/ContactForm.tsx](src/components/sections/ContactForm.tsx) does client-side validation and simulates submission with a `setTimeout` — there is no backend wired up. A real submit handler (API route, serverless function, or form service) needs to replace the simulated one before launch.
