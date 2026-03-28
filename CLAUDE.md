# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-file static personal website for Nancy Kacungira — a BBC journalist and strategic communications professional. The entire site lives in `index.html` (~809 lines), with local image assets alongside it. There is no build step, no framework, and no bundler.

## Development

Open `index.html` directly in a browser — no server required. For a local dev server:

```bash
npx serve .
# or
python3 -m http.server
```

## Architecture

**Single-page application in one HTML file.** All CSS (in `<style>`), HTML structure, and JavaScript (in `<script>`) are colocated in `index.html`.

**Page routing** is client-side via `showPage(page)` — it toggles `display:none/block` using `.page-section` / `.page-section.active` classes. There are five pages, each wrapped in `<div id="page-{name}" class="page-section">`:

- `home` — hero, logo bar, services tabs, bio, impact stats, testimonials
- `speaking` — hero, topics grid, stats strip, audience cards, formats, testimonials
- `about` — hero, bio, timeline, quote section
- `library` — hero, filter tabs, articles grid, videos grid, resources, courses, book
- `contact` — info panel + form, social strip

**CSS design tokens** are defined as CSS custom properties on `:root` — colors (`--bg-*`, `--text-*`, `--accent`), font families (`--serif`, `--sans`, `--ui`), and shared values (`--r-btn`, `--ease`). All components reference these tokens.

**JavaScript features** (all vanilla, no dependencies):
- `showPage()` — routing + scroll reset + re-triggering observers
- `IntersectionObserver` for scroll reveal (`.reveal`, `.reveal-left`, `.reveal-right`) and animated counters (`data-count` / `data-suffix` attributes)
- Testimonial carousels with `initCarousel()` + 6s auto-advance
- Horizontal scrolling timeline with progress bar
- Quote word-reveal animation
- 3D tilt on article cards
- Nav state: `.scrolled` class on scroll, `.over-dark` for dark-background sections

**Images** are local JPGs in the project root (`Nancy01.jpg`, `Nancy02.jpg`, `Nancy07.jpg`, `Nancy15.jpg`, `DSC00256.jpg`).

**Responsive breakpoints:** 1080px (tablets), 768px (mobile — hamburger nav activates), 480px (small mobile).

## Key Conventions

- Counter animations use `data-count="500" data-suffix="+"` attributes on `.impact-number` elements
- Staggered reveals use `.reveal-stagger > .reveal` — delay is applied via nth-child CSS
- The nav logo links back to home with `showPage('home')`; all internal links use `onclick="showPage('...');return false"`
- The Framer design guide is in `Nancy-Kacungira-Framer-Guide.html/.docx` — reference for design intent
