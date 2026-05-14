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

---

## `Spacer`

A fixed-height `h-16` blank row. Already uses the correct `bg-border` pattern internally.

```tsx
<Spacer />
```

---

## `Heading`

A centred section heading row. Import from `@/components/ui/heading`.

```tsx
import { Heading } from "@/components/ui/heading";

<Heading
  title="Enterprise-Grade Security"
  description="Optional supporting text." // optional
/>
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

Use container-query grid classes on the inner wrapper:

```tsx
// Two equal columns above @4xl
<div className="@4xl:grid-cols-2 grid gap-px">
  <div data-grid-content="true" className="p-6">...</div>
  <div data-grid-content="true" className="p-6">...</div>
</div>

// 10-column layout with side spacers
<div className="@4xl:grid-cols-10 grid-cols-2 grid gap-px">
  <div aria-hidden="true" className="@max-4xl:hidden"><div data-grid-content="true" /></div>
  <div className="@4xl:grid-cols-3 col-span-8 grid gap-px">...</div>
  <div aria-hidden="true" className="@max-4xl:hidden"><div data-grid-content="true" /></div>
</div>
```

---

## Typical section structure

```tsx
import { SideCol, Spacer } from "@/components/ui/grid";
import { Heading } from "@/components/ui/heading";

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
| Page heading | `text-5xl font-semibold tracking-tight` |
| Section heading | `text-4xl font-semibold` |
| Feature card heading | `text-3xl font-semibold` |
| Section label / step | `font-mono text-sm uppercase text-muted-foreground` |
| Body / description | `text-lg text-muted-foreground text-balance` |
| Small body | `text-sm text-muted-foreground` |

---

## Dark mode

Dark mode is CSS-variable-driven via `[data-theme="dark"]` on `<html>`. The `bg-card/90`, `bg-border`, and `bg-zinc-950/10` tokens adapt automatically. No `dark:` variants are needed for the grid layout itself.
