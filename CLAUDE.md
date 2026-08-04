# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Nancy Kacungira — BBC journalist and strategic communications professional. Built as a **Next.js 14 App Router** app with a **Sanity** CMS backend and a **Resend**-powered contact form.

A legacy single-file static prototype lives at `index.html` (plus `Nancy-Kacungira-Framer-Guide.html/.docx`). It is **not** what's deployed — it's kept for design reference only. The live site is the Next.js app under `src/`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

Environment variables (create `.env.local`):
- `RESEND_API_KEY` — required for the `/api/contact` route
- Sanity project ID and dataset are hardcoded in [src/sanity/lib/client.ts](src/sanity/lib/client.ts) (`projectId: 5fox7e7k`, `dataset: production`), so no Sanity env vars are needed for read-only access.

Deployed on Vercel at https://nancy-kk.vercel.app.

## Architecture

**Next.js App Router with a route group for the marketing site and a separate Sanity Studio mount.**

```
src/
  app/
    (site)/              # Marketing site route group — shared layout.tsx
      page.tsx           # /
      about/             # /about
      speaking/          # /speaking
      contact/           # /contact
    api/
      contact/route.ts   # POST → Resend email to info@nancykacungira.com
    studio/[[...tool]]/  # Sanity Studio mounted at /studio
    layout.tsx           # Root layout
    globals.css
  components/            # Shared React components (Nav, Footer, sections, forms…)
  sanity/
    lib/client.ts        # next-sanity client (hardcoded projectId)
    lib/queries.ts       # GROQ queries
    schemaTypes/         # article, programme schemas
sanity.config.ts         # Studio config consumed by /studio route
```

**Sanity content model** (see [src/sanity/schemaTypes](src/sanity/schemaTypes)):
- `article` — editorial content
- `programme` — speaking/programme entries

> **Note:** the `/library` (Resources) route and the `home-v2` variant were removed in the Jul 2026 "Website Changes — FINAL" pass. The site is now four pages only — Home, About, Speaking, Contact — with two offers (Advisory; Speaking, Workshops & Training) and every CTA pointing at `/contact`. Courses, the book waitlist and downloadable toolkits are sold via social, not the website; do not reintroduce them. The `article`/`programme` schemas and the GROQ helpers in `lib/queries.ts` are consequently **unused by any page** — retained only so existing Studio content isn't orphaned.

**Contact form flow:** [ContactForm.tsx](src/components/ContactForm.tsx) POSTs to [/api/contact](src/app/api/contact/route.ts), which calls Resend with `from: onboarding@resend.dev` and `to: info@nancykacungira.com`. Requires `RESEND_API_KEY`.

**Styling:** `styled-components` + `globals.css`. Design tokens (colors, type, easings) follow the same conventions used in the legacy `index.html` prototype.

**Client-side behaviour** (motion, observers, carousels, timeline scroll) is mounted via [PageScripts.tsx](src/components/PageScripts.tsx) and per-component logic — no global vanilla-JS bundle.

## Key Conventions

- All marketing routes live inside the `(site)` route group so they share one layout (`Nav` + `Footer`).
- The Sanity Studio is served from the same Next app at `/studio` via the catch-all `[[...tool]]` segment.
- Sanity content is fetched server-side via the `next-sanity` client; queries are centralized in [src/sanity/lib/queries.ts](src/sanity/lib/queries.ts).
- Images that ship with the repo (`Nancy01.jpg`, `Nancy02.jpg`, `Nancy07.jpg`, `Nancy15.jpg`, `DSC00256.jpg`, `nancy cut out.png`, `nancy logo.svg`, `logos/`) are referenced from `public/` or the project root depending on context.
- `index.html` is the original Framer-style static prototype — useful as a design reference, but do **not** edit it expecting changes to appear on the live site.
