# DigitalArc — CLAUDE.md

## Project Overview

DigitalArc is a full-stack website for a creative design production studio. It is a pixel-faithful port of the static mockup in `../digitalarc-mockup/` into a CMS-driven Next.js application.

**Stack:** Next.js 15.4.11 · Payload CMS 3.x · NeonDB (PostgreSQL) · Resend · Tailwind CSS v4

---

## Dev Commands

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run generate:types  # Regenerate payload-types.ts after schema changes
npx tsx src/seed/seed.ts  # Populate demo data (run after first migration)
```

**Database:**
```bash
npx payload migrate:create --name <name>  # Create a new migration
npx payload migrate                        # Run pending migrations
```

---

## Environment Variables

All secrets live in `.env.local`. The file ships with placeholders — replace before running:

| Variable | Required | Description |
|---|---|---|
| `PAYLOAD_SECRET` | Yes | Random 32+ char string for Payload JWT signing |
| `DATABASE_URI` | Yes | NeonDB PostgreSQL connection string |
| `RESEND_API_KEY` | Yes | Resend API key (`re_...`) |
| `RESEND_FROM` | Yes | Sender address, must match a verified Resend domain |
| `RESEND_TO` | Yes | Where contact form notifications are delivered |
| `NEXT_PUBLIC_SERVER_URL` | Yes | Full origin URL (e.g. `http://localhost:3000`) |

> **First-run checklist:** update `.env.local` → `npx payload migrate` → visit `/admin` to create your first user → `npx tsx src/seed/seed.ts`.

---

## Architecture

### Route Groups

| Group | Path | Purpose |
|---|---|---|
| `(frontend)` | `/` `/services` `/projects` `/about` `/blog` `/blog/[slug]` `/contact` | Public-facing site |
| `(payload)` | `/admin` `/api/[...payload]` | Payload admin UI + REST API |

The two groups have **separate root layouts** — never add `layout.tsx` to `(payload)` that imports fonts or the site nav, and never add Payload admin styles into `(frontend)/layout.tsx`.

### Data Fetching

All `(frontend)` pages are Server Components marked `export const dynamic = 'force-dynamic'`. They fetch via Payload's local API (no HTTP overhead):

```ts
const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: 'projects', sort: 'order' })
```

Never call the REST API from page components — use the local API only.

### Client vs Server Components

- **Server (default):** All page components, section components that receive data as props, `Navbar` shell, `Footer` shell.
- **Client (`'use client'`):** `NavbarClient` (active links, mobile drawer), `FooterClient` (active links), `ThemeToggle`, `ThemeScript`, `ScrollToTop`, `FAQAccordion`, `TestimonialsCarousel`, `ContactForm`.

When adding interactivity, keep the client boundary as deep as possible — pass data down from server components as props.

---

## Payload Collections

| Slug | Purpose | Key fields |
|---|---|---|
| `projects` | Portfolio work | `title`, `slug`, `description`, `image`, `tags[]`, `order` |
| `services` | Service offerings | `name`, `slug`, `description`, `image`, `order` |
| `blog-posts` | Blog articles | `title`, `slug` (auto), `excerpt`, `content` (richText), `featuredImage`, `author`, `publishedAt` |
| `team-members` | Team profiles | `name`, `role`, `image`, `order` |
| `testimonials` | Client quotes | `quote`, `author`, `company`, `avatar`, `order` |
| `faq-items` | FAQ accordion | `question`, `answer`, `order` |
| `contact-submissions` | Form submissions | `name`, `phone`, `email`, `message` — public create, admin-only read |
| `media` | Uploaded files | `alt`, image sizes: `thumbnail` (400×300), `card` (700×500), `hero` (1400×600) |

**Slug auto-generation:** `BlogPosts`, `Projects`, and `Services` have a `beforeValidate` field hook that runs `slugify(title)` if `slug` is blank. Always run `npm run generate:types` after changing collection schemas.

**Access control:** `contact-submissions` has `create: () => true` (unauthenticated POST is intentional for the public form) and `read: adminOnly`.

---

## Styling

### CSS Architecture

- **`src/styles/globals.css`** — the single stylesheet. It imports Tailwind v4 via `@import "tailwindcss"` then defines Tailwind design tokens in `@theme {}`, CSS custom properties in `:root` / `[data-theme="dark"]`, and all component styles using the original mockup class names.
- **No separate Tailwind config file** — Tailwind v4 reads tokens directly from `@theme {}` in `globals.css`.
- **PostCSS** — configured in `postcss.config.mjs` using `@tailwindcss/postcss`.

### Design Tokens (CSS Custom Properties)

```css
/* Light (default) */
--bg: #F0EDE5    --fg: #0A0A0A    --border: #D5D0C6    --text-muted: #8A877E

/* Dark ([data-theme="dark"]) */
--bg: #0F0F0D    --fg: #F0EDE5    --border: #222220    --text-muted: #6A6762
```

Dark mode is CSS-variable-driven via `[data-theme="dark"]` on `<html>`. The value is persisted in `localStorage` under the key `da-theme`.

### Theme Flash Prevention

`ThemeScript` renders an inline `<script>` as the **first child of `<head>`** that reads `localStorage` and sets `data-theme` before React hydrates. Do not move or defer this script.

### Fonts (next/font)

Three fonts are loaded via `next/font/google` in `(frontend)/layout.tsx` and injected as CSS variables:

| Variable | Font | Usage |
|---|---|---|
| `--font-space-mono` | Space Mono | Labels, nav, numbers, dates |
| `--font-syne` | Syne | Section titles, headings, hero |
| `--font-dm-sans` | DM Sans | Body text, paragraphs |

---

## Contact Form Flow

1. `ContactForm` (client component) POSTs to `/api/contact`
2. `app/api/contact/route.ts`:
   - Validates required fields (`name`, `email`, `message`)
   - Saves to `contact-submissions` collection via Payload local API
   - Sends owner notification via `resend.emails.send()` — check `error` explicitly (SDK returns `{ data, error }`, does not throw)
   - Sends user confirmation email
3. Returns `{ success: true }` or a 4xx/5xx JSON error

---

## Mockup Reference

The original static mockup lives at `../digitalarc-mockup/`. When in doubt about layout, spacing, class names, or copy, it is the source of truth:

- `index.html` — homepage section order and all class names
- `styles.css` — full design system (CSS variables, component classes, breakpoints)
- `main.js` — original JS interactions ported to React client components
- `contact.html` — contact form field names and info card layout
- `blog-detail.html` — blog detail page structure

---

## Project Skills

Skill files with patterns and best practices are in `../.agents/skills/`:

| Skill | Apply when |
|---|---|
| `payload/` | Writing/modifying collections, hooks, access control, or local API queries |
| `neon-postgres/` | Configuring the DB adapter, connection pooling, migrations |
| `resend/` | Modifying the contact API route or adding any email sending |
| `nextjs-best-practices/` | Server vs client component decisions, caching, metadata |
| `typescript-advanced-types/` | Typing Payload documents, component props, API responses |
