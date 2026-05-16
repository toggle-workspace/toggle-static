# Design System

## Grid Layout

The site uses a three-column grid system that creates consistent side borders on every row of content. The primitives live in a single shared file:

```ts
import { SideCol, GridRow, Spacer } from "@/components/ui/grid";
```

---

## How the layout works

`layout.tsx` wraps **all** page content in a single `<GridRow plain>`:

```tsx
// layout.tsx
<main className="bg-zinc-950/10">
  <GridRow plain>{children}</GridRow>
</main>
```

This means every section component is rendered inside the outer `GridRow plain`'s `bg-card/90` centre column. **This is the critical constraint** — it affects how grid lines are made visible.

### Why `GridRow` breaks inside the layout

`GridRow` (standard mode) has no background on its outer container. When nested inside `bg-card/90`, the 0.5 px border gaps in `*:p-[0.5px]` show the parent `bg-card/90` — the same colour as the cells — so all grid lines are **invisible**.

`Spacer` works because it sets `bg-border` explicitly on its outer div. Section components must do the same.

---

## Section row pattern

Every section that needs visible grid borders must use the **raw three-column structure** directly, never `GridRow`:

```tsx
import { SideCol } from "@/components/ui/grid";

// One section row
<div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
  <SideCol wide />
  <div className="max-w-276 lg:min-w-276 mx-auto w-full">
    <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
      {/* inner grid of data-grid-content cells */}
    </div>
  </div>
  <SideCol />
</div>
```

`bg-border` on the outer div is what makes the 0.5 px gaps visible — it bleeds through as the grid line colour (`#D5D0C6` light / `#222220` dark).

### Plain single-cell row (header, label bar, etc.)

```tsx
<div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
  <SideCol wide />
  <div className="max-w-276 lg:min-w-276 mx-auto w-full p-[0.5px]">
    <div data-slot="content" className="bg-card/90 h-full rounded p-6 lg:p-12">
      {children}
    </div>
  </div>
  <SideCol />
</div>
```

Use `p-[0.5px]` directly on the centre wrapper (instead of the inner `**:data-grid-content:` pattern) for rows that contain a single card.

---

## When to use `GridRow`

`GridRow` is safe **only** in page files that own their own `<main>` with `bg-zinc-950/10` as a direct parent (not inside the layout's `GridRow plain`). Inner pages (e.g. `about/page.tsx`) render their own `<main>` and call `GridRow` directly.

| Context | Use |
|---|---|
| Section component inside `layout.tsx` children | Raw three-column structure + `bg-border` |
| Stand-alone page with its own `<main>` | `GridRow` / `GridRow plain` |

---

## `SideCol`

The vertical border strip. Used directly in every raw section row.

```tsx
<SideCol wide />   {/* left border — fills available space at lg: */}
<SideCol />        {/* right border — fixed narrow width (w-2 / md:w-6) */}
```

Internally renders a `p-[0.5px]` wrapper with a `bg-card/90 h-full rounded` inner div. Width is `w-2` on mobile, `md:w-6`, and `lg:w-full` when `wide`.

---

## `Spacer`

A fixed-height `h-16` blank row. Already uses the correct `bg-border` pattern internally.

```tsx
<Spacer />
```

---

## `Heading`

A centred section heading row. Import from `@/components/heading` (not `@/components/ui/heading`).

```tsx
import { Heading } from "@/components/heading";

<Heading
  title="Enterprise-Grade Security"
  description="Optional supporting text." // optional
/>
```

`Heading` renders as a plain `<div>` with no grid structure of its own — it inherits side borders from the outer `GridRow plain` in `layout.tsx`. The title uses `text-4xl lg:text-5xl font-semibold text-balance`.

---

## `PageHeader`

Used in **inner pages** (`services`, `about`, etc.) that render inside `bg-zinc-950/10`. Import from `@/components/ui/page-header`.

```tsx
import { PageHeader } from "@/components/ui/page-header";

<PageHeader
  title="Full Stack Digital Solutions"
  subtitle="What We Offer"       // optional — renders as mono uppercase label
  description="Supporting copy." // optional
/>
```

`PageHeader` wraps content in `bg-zinc-950/10` → `bg-background rounded` and uses `data-grid-content="true"`. Title scale: `text-5xl lg:text-6xl font-semibold tracking-tight`. Subtitle uses `font-mono text-sm uppercase text-muted-foreground`.

---

## `SectionOverview`

A reusable label + body section. Layout: centered 8/10-column grid with decorative gutters. Safe to use in any standalone page context (i.e. inside a `<main>` with `bg-zinc-950/10`).

```tsx
import { SectionOverview } from "@/components/ui/section-overview";

<SectionOverview label="Spend Smarter. Scale Faster.">
  <p className="text-foreground mt-6 text-balance text-xl font-medium lg:text-2xl">
    Body text here.
  </p>
</SectionOverview>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | Yes | Mono muted heading at top |
| `children` | `ReactNode` | Yes | Body content — plain text or rich markup |

---

## `SectionItemsGrid`

A reusable section heading + item grid. Items optionally include a Lucide icon. Layout matches `SectionOverview` (8/10-column centered grid with gutters).

```tsx
import { SectionItemsGrid } from "@/components/ui/section-items-grid";

<SectionItemsGrid
  heading="What's included"
  subheading="Optional supporting line."  // optional
  items={[
    { title: "Paid Media", description: "...", icon: TrendingUp },
    { title: "Creative", description: "..." },  // icon is optional
  ]}
  columns={2}  // optional, defaults to 2
/>
```

| Prop | Type | Required | Description |
|---|---|---|---|
| `heading` | `string` | Yes | Mono muted section label |
| `subheading` | `string` | No | Larger body text below the heading |
| `items` | `{ title, description, icon? }[]` | Yes | Grid items |
| `columns` | `2 \| 3` | No | Column count at `@xl` breakpoint, defaults to `2` |

---

## `CallToAction`

Standalone CTA block, used at the end of pages. Wraps itself in `bg-zinc-950/10` so it manages its own background — do not nest it inside another grid row.

```tsx
import CallToAction from "@/components/call-to-action";

<CallToAction />
```

---

## `data-grid-content` convention

Every visible cell inside a standard row must have `data-grid-content="true"`. The `**:data-grid-content:` selector in the parent applies:

```
bg-card/90   h-full   rounded
```

The 0.5 px padding gap around each cell (`*:p-[0.5px]`) reveals `bg-border`, forming the visible grid lines.

---

## Inner column layouts

Use container-query grid classes on the inner wrapper. The site uses `@container` breakpoints (`@md:`, `@2xl:`, `@4xl:`, `@5xl:`) rather than viewport breakpoints for inner layouts.

```tsx
// Two equal columns above @4xl
<div className="@4xl:grid-cols-2 grid gap-px">
  <div data-grid-content="true" className="p-6">...</div>
  <div data-grid-content="true" className="p-6">...</div>
</div>

// Responsive service grid (1 → 2 → 3 cols)
<div className="@md:grid-cols-2 @2xl:grid-cols-3 grid gap-px">
  {items.map(...)}
</div>

// 10-column layout with side spacers
<div className="@4xl:grid-cols-10 grid-cols-2 grid gap-px">
  <div aria-hidden="true" className="@max-4xl:hidden"><div data-grid-content="true" /></div>
  <div className="@4xl:grid-cols-3 col-span-8 grid gap-px">...</div>
  <div aria-hidden="true" className="@max-4xl:hidden"><div data-grid-content="true" /></div>
</div>
```

`gap-px` is equivalent to `gap-[1px]` — combined with `*:p-[0.5px]` on the parent, this forms the visible grid lines between cells.

---

## Typical section structure

```tsx
import { SideCol, Spacer } from "@/components/ui/grid";
import { Heading } from "@/components/heading";

export default function MySection() {
  return (
    <>
      <Heading title="Section Title" description="Supporting copy." />

      <div className="@container grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] bg-border">
        <SideCol wide />
        <div className="max-w-276 lg:min-w-276 mx-auto w-full">
          <div className="**:data-grid-content:bg-card/90 **:data-grid-content:h-full **:data-grid-content:rounded grid *:p-[0.5px]">
            <div className="@4xl:grid-cols-2 grid gap-px">
              <div data-grid-content="true" className="p-6 lg:p-12">Left</div>
              <div data-grid-content="true" className="p-6 lg:p-12">Right</div>
            </div>
          </div>
        </div>
        <SideCol />
      </div>

      <Spacer />
    </>
  );
}
```

---

## Typography scale

| Element | Classes |
|---|---|
| Page heading (`PageHeader`) | `text-5xl lg:text-6xl font-semibold tracking-tight` |
| Section heading (`Heading`) | `text-4xl lg:text-5xl font-semibold text-balance` |
| Feature card heading | `text-3xl font-semibold` |
| Section label / step | `font-mono text-sm uppercase text-muted-foreground` |
| Body / description | `text-lg text-muted-foreground text-balance` |
| Small body | `text-sm text-muted-foreground` |

---

## Component inventory

| Component | Import path | Purpose |
|---|---|---|
| `SideCol` | `@/components/ui/grid` | Vertical border strip for raw section rows |
| `GridRow` | `@/components/ui/grid` | Convenience wrapper — safe only in standalone pages |
| `Spacer` | `@/components/ui/grid` | 64px blank row with visible borders |
| `Heading` | `@/components/heading` | Centred section heading (no own grid) |
| `PageHeader` | `@/components/ui/page-header` | Inner-page hero header |
| `SectionOverview` | `@/components/ui/section-overview` | Label + body section, 8/10-col centered layout |
| `SectionItemsGrid` | `@/components/ui/section-items-grid` | Heading + optional-icon item grid, 8/10-col centered layout |
| `CallToAction` | `@/components/call-to-action` | CTA block, manages own `bg-zinc-950/10` wrapper |
| `HeroSection` | `@/components/hero-section` | Homepage hero with `@container` columns |
| `FeaturesTwo` | `@/components/features-2` | Two-row feature block (hero card + stat cards) |
| `Content` | `@/components/content-3` | Three-card feature section |
| `ServicesGrid` | `@/components/services-grid` | 1→2→3 col service card grid |
| `FeatureCarousel` | `@/components/feature-carousel` | Embla-based case study carousel |
| `FAQs` | `@/components/faqs` | Two-column FAQ with accordion |

---

## Dark mode

Dark mode is CSS-variable-driven via `[data-theme="dark"]` on `<html>`. The `bg-card/90`, `bg-border`, and `bg-zinc-950/10` tokens adapt automatically. No `dark:` variants are needed for the grid layout itself. Theme value is persisted in `localStorage` under the key `da-theme`.
