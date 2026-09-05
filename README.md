# LogicMitra — Company Website

Marketing website for **LogicMitra**, a software engineering company. Built with React, TypeScript, Vite and Tailwind CSS.

## Pages

- `/` — Home (hero, stats, services, process, tech stack, featured projects, testimonials, CTA)
- `/about` — Company story, mission/vision/values, team
- `/services` — Detailed service breakdown + FAQ
- `/portfolio` — Filterable project showcase
- `/careers` — Perks and open job listings
- `/contact` — Contact form with client-side validation

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for tooling
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling (config lives in `src/index.css` via `@theme`)
- [Framer Motion](https://www.framer.com/motion/) for entrance animations
- [Lucide](https://lucide.dev/) for icons

## Contact channels

- **WhatsApp** — a floating "click to chat" button ([WhatsAppButton.tsx](src/components/layout/WhatsAppButton.tsx)) opens a chat to `+91 95540 58799` with a pre-filled message. Update `WHATSAPP_NUMBER` there if the number changes.
- **Email / phone** — clickable `mailto:`/`tel:` links in the footer and on `/contact`, currently `hello@logicmitra.com` and `+91 95540 58799`.
- **Office** — Prayagraj, India.
- **Budget ranges** on the contact form are in INR (₹ Lakh).

## Before going live

Some content is still sample/placeholder and should be replaced:

- **Team, testimonials, portfolio, stats** — sample data in `src/data/*.ts`, clearly marked with comments
- **Contact form** — currently simulates a submission client-side only; wire it up to a real backend or form service (see the comment in [ContactForm.tsx](src/components/sections/ContactForm.tsx))
- **Social links** — placeholder `#` links in the footer (Twitter/LinkedIn/GitHub-style icons)
- **Email address** — `hello@logicmitra.com` assumes that domain is registered; update if not

See [CLAUDE.md](CLAUDE.md) for a fuller architecture overview.
