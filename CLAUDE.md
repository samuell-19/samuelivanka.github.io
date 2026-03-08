# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Bilingual (EN/DA - using t-en/t-da span pattern) personal portfolio for Samuel Ivanka, an SEO Manager based in Copenhagen. Pure HTML/CSS/JS — no build tools, no framework, no package manager. Deployed to `https://samuelivanka.github.io/`.

## File structure

```
index.html                      ← Home
about.html                      ← About (professional/personal mode toggle)
projects.html                   ← Projects listing
projects/seo-toolkit.html       ← SEO Toolkit case study
projects/outwithkidz.html       ← OutWithKidz consultancy case study
style.css                       ← Shared stylesheet (Google Fonts import included)
script.js                       ← Shared IIFE JS, no external dependencies
S.Ivanka_CV.pdf                 ← CV (period not underscore in filename)
assets/
  organic_traffic_outwithkidz.png
  organic_keywords_outwithkidz.png
```

Sub-pages in `projects/` reference shared assets with `../` prefix (`../style.css`, `../script.js`, `../index.html`, etc.).

## Development

No build step. Open HTML files directly in a browser or use any static file server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

## Architecture

### Bilingual system (EN/DA)

- `html.lang-en` / `html.lang-da` CSS classes control visibility: `.lang-en .t-da { display: none }` and vice versa.
- All bilingual content uses sibling elements: `<span class="t-en">...</span><span class="t-da">...</span>`.
- Language persisted in `localStorage` key `si-lang`.
- Anti-FOUC inline script must appear in every `<head>` **before** the stylesheet `<link>`:
  ```html
  <script>(function(){var l=localStorage.getItem('si-lang')||'en';document.documentElement.classList.add('lang-'+l);document.documentElement.lang=l;}());</script>
  ```
- `applyPageMeta(lang)` in `script.js` switches `document.title` and `<meta name="description">` at runtime using `data-title-en/da` and `data-desc-en/da` attributes on the `<html>` element. Add these attributes to pages that need localised title/description.

### Professional/Personal mode (about.html only)

- `body.mode-professional` (default) / `body.mode-personal` toggled by `.mode-btn[data-mode]` buttons.
- CSS hides `.personal-content` in professional mode and `.professional-content` in personal mode.

### Scroll animations

- `.fade-up` elements animate via `IntersectionObserver` (threshold 0.12, rootMargin `0px 0px -40px 0px`).
- `.pipeline-step` elements get staggered `data-delay` (index × 150ms) automatically.
- Both gain a `.visible` class when intersecting.

### Navigation

- Active nav link determined by `window.location.pathname` matching `href` values.
- Pages inside `/projects/` highlight the "Projects" nav link.
- Mobile hamburger toggles `.open` on `.nav-links` and `.nav-hamburger`.

## Design system

CSS custom properties (defined in `:root` in `style.css`):

| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` | `#0C2B4E` | Primary dark, nav/hero background |
| `--blue` | `#1A3D64` | Secondary, hover states |
| `--teal` | `#1D546C` | Accent, links, active states |
| `--grey` | `#F4F4F4` | Page/card backgrounds |
| `--white` | `#FFFFFF` | Content backgrounds |
| `--ink` | `#1A1A1A` | Body text |
| `--muted` | `#6B7280` | Secondary text |
| `--rule` | `#E2E8F0` | Borders, dividers |

Fonts: `Fraunces` (display/headings), `Outfit` (body), `JetBrains Mono` (labels, tags, mono accents) — loaded from Google Fonts.

### Button variants

- `.btn-primary` — filled navy
- `.btn-secondary` — lighter secondary
- `.btn-outline` — teal border/text on light backgrounds; **on dark navy sections** (`.featured-project`, `.feature-card`), scoped CSS overrides apply white border/text instead

## Structured data (JSON-LD)

Each page has a `<script type="application/ld+json">` in `<head>`:

| Page | Schema types |
|------|-------------|
| `index.html` | `WebSite` + `Person` (`@graph`) |
| `about.html` | `Person` (extended) |
| `projects.html` | `ItemList` |
| `projects/seo-toolkit.html` | `SoftwareApplication` |
| `projects/outwithkidz.html` | `Service` |

Person schema always references `https://samuelivanka.github.io/#person` & `https://www.linkedin.com/in/samuel-ivanka/` and includes `worksFor` SkyCity Entertainment Group with its Wikipedia `sameAs`.

## Content conventions

- Bilingual content pattern: always pair `.t-en` + `.t-da` sibling spans/paragraphs. Never apply a language class to a single standalone element unless the content is identical in both languages.
- Pipeline step meta blocks use `.pipeline-step-meta > .meta-row > .meta-label + .meta-value`. Labels (`Input`, `API`, `Output` / Danish equivalents) use `.meta-label`; values use `.meta-value` with `font-family: var(--font-mono)`.
- Inline contextual links inside `<p>` tags are styled via `main p a { color: var(--teal); text-decoration: underline; }` — no need for extra classes.
- Chart/screenshot images go in `assets/` and are displayed via `.charts-stack` (single-column, full text-width).
