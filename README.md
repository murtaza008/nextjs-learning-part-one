# one-onwards — Next.js Learning Project

## Project Overview

`one-onwards` is a small, hands-on Next.js project created for learning and experimentation. It demonstrates the App Router (`app/`), layouts, nested routes, dynamic routing, and a few simple components and pages. The intent of this repository is educational — to practice core Next.js concepts and to serve as a reference for common patterns.

## What's Included

- App Router structure under `app/` with top-level `page.tsx` and `layout.tsx`.
- Example pages: `about`, `blog` (with dynamic `[id]` route), `contact`, and `dashboard`.
- `app/components/Counter.tsx`: a simple client-side component demonstrating React state.
- Global styles in `app/globals.css` and static assets in `public/`.
- Minimal configuration files (`next.config.ts`, `tsconfig.json`, and ESLint setup) to keep focus on learning.

## Learning Goals

- Understand the Next.js App Router and how layouts work.
- Implement nested layouts and shared UI between pages.
- Create dynamic routes (e.g., `app/blog/[id]/page.tsx`).
- Build simple client components and manage state.
- Apply global and component-level CSS with the new app structure.
- Practice building, running, and preparing for deployment.

## How to Run

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. To build and start for production:

```bash
npm run build
npm run start
```

Replace `npm` with `yarn`, `pnpm`, or `bun` if you prefer a different package manager.

## Notes & Next Steps

- This project is intentionally small and focused on learning — it contains examples, not production-ready features.
- Next improvements could include TypeScript types for components, unit tests, accessibility checks, and more example pages.
- Feel free to fork or extend these examples while you learn.

---

This repository is a learning exercise — use it to explore, experiment, and practice Next.js features.
