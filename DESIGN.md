# Design System

## Grid Layout

The site uses a three-column grid system that creates consistent side borders on every row of content. The primitives live in a single shared file:

```ts
import { SideCol, GridRow, Spacer } from "@/components/ui/grid";
```

---

### `GridRow`

The core layout wrapper. Renders a three-column grid: two `SideCol` borders flanking a centred content area.

```tsx
<GridRow>
  <div data-grid-content="true" className="p-6 lg:p-12">
    Content goes here
  </div>
</GridRow>
```

**Props**

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `children` | `ReactNode` | — | Content rendered inside the grid |
| `plain` | `boolean` | `false` | Wraps children in a single `bg-card/90` cell rather than a multi-cell grid |
| `ariaHidden` | `boolean` | `false` | Adds `aria-hidden` to the row (for decorative spacer rows) |

**Standard (multi-cell) mode** — use when the row contains multiple `data-grid-content` cells separated by gaps:

```tsx
<GridRow>
  <div className="grid grid-cols-2 gap-px">
    <div data-grid-content="true" className="p-6">Left</div>
    <div data-grid-content="true" className="p-6">Right</div>
  </div>
</GridRow>
```

**Plain mode** — use for single-cell rows: label bars, full-width cards, spacers:

```tsx
<GridRow plain>
  <div className="px-6 py-3">
    <span className="font-mono text-sm uppercase text-muted-foreground">Section label</span>
  </div>
</GridRow>
```

---

### `SideCol`

The vertical border strip. Rarely used directly — `GridRow` composes it internally. Only import it when building a custom row that can't use `GridRow` (e.g. a row that needs non-standard positioning).

```tsx
<SideCol wide />   {/* left border — fills available space */}
<SideCol />        {/* right border — fixed narrow width */}
```

---

### `Spacer`

A fixed-height `h-16` blank row that creates vertical breathing room between sections. Marked `aria-hidden`.

```tsx
<Spacer />
```

---

## `data-grid-content` convention

Every visible cell inside a standard `GridRow` must have `data-grid-content="true"`. The parent div on the grid row applies these styles to every matching child automatically:

```
bg-card/90   h-full   rounded
```

This creates the card-like appearance with a shared border radius and background.

---

## Page background

Pages and sections that use the grid system set the outer background to:

```
bg-zinc-950/10
```

This creates a subtle warm tint that contrasts with the `bg-card/90` cells, making the grid lines visible.

---

## Typical page structure

```tsx
<main className="bg-zinc-950/10">

  {/* Top spacer */}
  <GridRow plain ariaHidden>
    <div className="h-6" />
  </GridRow>

  {/* Section label */}
  <GridRow plain>
    <div className="px-6 py-3">
      <span className="font-mono text-sm uppercase text-muted-foreground">Label</span>
    </div>
  </GridRow>

  {/* Content */}
  <GridRow>
    <div className="@4xl:grid-cols-2 grid gap-px">
      <div data-grid-content="true" className="@4xl:p-12 p-6">...</div>
      <div data-grid-content="true" className="@4xl:p-12 p-6">...</div>
    </div>
  </GridRow>

  <Spacer />

  {/* Another section */}
  <GridRow>...</GridRow>

</main>
```

---

## Typography scale (used in grid sections)

| Element | Classes |
|---|---|
| Page heading | `text-5xl font-semibold tracking-tight` |
| Section heading | `text-4xl font-semibold` |
| Section label | `font-mono text-sm uppercase text-muted-foreground` |
| Body / description | `text-lg text-muted-foreground text-balance` |
| Small body | `text-sm text-muted-foreground` |

---

## Dark mode

Dark mode is CSS-variable-driven via `[data-theme="dark"]` on `<html>`. The `bg-card/90` and `bg-zinc-950/10` tokens automatically adapt. No Tailwind `dark:` variants are needed for the grid layout itself.
