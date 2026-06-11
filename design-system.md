---
# UroMed Clinic – Design System 2026

**Version:** 1.0.0  
**Author:** rou​sl (кореш)  
**Date:** 2026‑06‑09

## 1. Vision & Guiding Principles
- **Premium, tech‑forward, emotionally resonant.** Every pixel feels handcrafted for a high‑end medical reference app.
- **Consistency first.** All components inherit from the same token set; no ad‑hoc values.
- **Responsive elegance.** UI adapts flawlessly from the smallest iPhone 15 (width 390 px) up to large desktop monitors.
- **Accessible luxury.** WCAG AA compliance with generous contrast, focus handling and reduced‑motion support.
- **Performance‑aware.** Minimal CSS, server‑side critical‑path extraction, and GPU‑accelerated micro‑interactions.

---
## 2. Color System
| Token | Light Theme | Dark Theme |
|-------|-------------|------------|
| **--color-primary** | `#0E9F9D` *(Teal‑Ocean)* | `#0ACBC5` |
| **--color-accent** | `#D1A250` *(Gold‑Aura)* | `#FFC875` |
| **--color-background** | `#F5F5F5` *(Snow‑Mist)* | `#111111` |
| **--color-surface** | `#FFFFFF` *(Pure‑White)* | `#1A1A1A` |
| **--color-muted** | `#E0E0E0` *(Stone‑Gray)* | `#2C2C2C` |
| **--color-text-primary** | `#212121` *(Deep‑Charcoal)* | `#E0E0E0` |
| **--color-text-secondary** | `#555555` *(Soft‑Gray)* | `#B0B0B0` |
| **--color-success** | `#2E7D32` *(Green‑Boost)* | `#4CAF50` |
| **--color-danger** | `#C62828` *(Red‑Alert)* | `#EF5350` |
| **--color-info** | `#1565C0` *(Blue‑Info)* | `#42A5F5` |

**Usage example:**
```css
.button-primary { background: var(--color-primary); color: var(--color-surface); }
.card { background: var(--color-surface); border: 1px solid var(--color-muted); }
```

---
## 3. Typography
| Token | Font‑Family | Size (rem) | Weight | Line‑Height | Letter‑Spacing |
|-------|------------|------------|--------|------------|----------------|
| **--type-display** | `"Space Grotesk", system-ui, sans-serif` | 4.0 | 700 | 1.1 | -0.02em |
| **--type-h1** | `"Inter", system-ui, sans-serif` | 2.5 | 600 | 1.2 | -0.01em |
| **--type-h2** | `Inter` | 2.0 | 600 | 1.25 | 0em |
| **--type-h3** | `Inter` | 1.75 | 500 | 1.3 | 0em |
| **--type-body** | `Inter` | 1.0 | 400 | 1.5 | 0em |
| **--type-caption** | `Inter` | 0.75 | 400 | 1.4 | 0.02em |
| **--type-button** | `Inter` | 0.875 | 600 | 1.4 | 0.01em |

**Responsive scaling** – using `clamp()` for fluid typography on the main breakpoints (390 / 768 / 1280 px).
```css
h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
```

---
## 4. Spacing System (Responsive)
Spacing variables are defined per iPhone breakpoint and cascade upwards. All component padding, margin and grid gutters reference these tokens.
```css
/* 390 px – iPhone 15 */
:root {
  --spacing-xxs-390: 0.25rem;   /* 4 px */
  --spacing-xs-390: 0.5rem;    /* 8 px */
  --spacing-sm-390: 0.75rem;   /* 12 px */
  --spacing-md-390: 1rem;      /* 16 px */
  --spacing-lg-390: 1.5rem;    /* 24 px */
  --spacing-xl-390: 2rem;      /* 32 px */
}
/* 393 px – iPhone 15 Pro */
@media (min-width: 393px) {
  :root {
    --spacing-xxs-393: 0.3rem;   /* 5 px */
    --spacing-xs-393: 0.6rem;    /* 10 px */
    --spacing-sm-393: 0.9rem;    /* 15 px */
    --spacing-md-393: 1.2rem;    /* 20 px */
    --spacing-lg-393: 1.8rem;    /* 30 px */
    --spacing-xl-393: 2.4rem;    /* 40 px */
  }
}
/* 430 px – iPhone 16/17 */
@media (min-width: 430px) {
  :root {
    --spacing-xxs-430: 0.35rem;   /* 6 px */
    --spacing-xs-430: 0.7rem;    /* 12 px */
    --spacing-sm-430: 1.05rem;   /* 18 px */
    --spacing-md-430: 1.4rem;    /* 24 px */
    --spacing-lg-430: 2.1rem;    /* 36 px */
    --spacing-xl-430: 2.8rem;    /* 48 px */
  }
}
/* Fallback for larger screens */
@media (min-width: 640px) {
  :root {
    --spacing-xs: var(--spacing-xs-430);
    --spacing-sm: var(--spacing-sm-430);
    --spacing-md: var(--spacing-md-430);
    --spacing-lg: var(--spacing-lg-430);
    --spacing-xl: var(--spacing-xl-430);
  }
}
```

---
## 5. Grid & Layout
- **12‑column grid** – gutters use `var(--spacing-md)`.
- **Breakpoints:**
  - `xs` < 640 px (mobile)
  - `sm` ≥ 640 px (tablet)
  - `md` ≥ 1024 px (desktop)
  - `lg` ≥ 1440 px (large‑desktop)
- **Container widths:** 100 % on mobile, max‑width 1200 px on desktop, centered.

```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-lg); }
.row { display: flex; flex‑wrap: wrap; margin: calc(-1 * var(--spacing-sm)) 0 0 calc(-1 * var(--spacing-sm)); }
.col { flex: 1 0 0; padding: var(--spacing-sm); }
```

---
## 6. Elevation & Shadows (Premium Depth)
| Level | Light Theme Shadow | Dark Theme Shadow |
|-------|--------------------|-------------------|
| **e0** | `none` | `none` |
| **e1** | `0 1px 3px rgba(0,0,0,0.08)` | `0 1px 3px rgba(0,0,0,0.45)` |
| **e2** | `0 4px 6px rgba(0,0,0,0.12)` | `0 4px 6px rgba(0,0,0,0.55)` |
| **e3** | `0 10px 20px rgba(0,0,0,0.15)` | `0 10px 20px rgba(0,0,0,0.6)` |
| **e4** | `0 20px 40px rgba(0,0,0,0.2)` | `0 20px 40px rgba(0,0,0,0.7)` |

**Utility class:** `.elev-{level}` – e.g., `.elev-2`.

---
## 7. Motion & Micro‑Interactions
| Token | Value |
|-------|-------|
| **--ease-standard** | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **--ease-accelerate** | `cubic-bezier(0.4, 0, 1, 1)` |
| **--ease-decelerate** | `cubic-bezier(0, 0, 0.2, 1)` |
| **--duration-short** | `150ms` |
| **--duration-medium** | `250ms` |
| **--duration-long** | `350ms` |

**Common patterns:**
- **Button press:** `transform: translateY(1px); transition: transform var(--duration-short) var(--ease-decelerate);`
- **Modal slide‑up (iPhone Sheets):** `transform: translateY(100%); → translateY(0);` with `var(--duration-medium)` and `var(--ease-standard)`.
- **Card hover elevation:** `elev-2 → elev-3` on `:hover`.
- **Reduced‑motion guard:** `@media (prefers-reduced-motion: reduce) { transition: none; }`

---
## 8. Iconography
- **Style:** Linear, 24 × 24 px, stroke width 2 px, rounded caps.
- **Source:** Heroicons (outline) – bundled as SVG sprites.
- **Color usage:** `var(--color-text-primary)` for default, `var(--color-primary)` for interactive states.

---
## 9. Accessibility Checklist (WCAG AA)
- Minimum contrast ratios: 4.5:1 for body text, 3:1 for large text.
- Focus visible: `outline: 3px solid var(--color-accent); outline-offset: 2px;`
- Touch target size ≥ 44 × 44 px.
- `aria-label` for icon‑only buttons.
- `role="dialog"` + `aria‑modal="true"` for modals.
- `prefers‑reduced‑motion` guard on all non‑essential animations.

---
## 10. Component Library (excerpt)
| Component | Usage | Key Tokens |
|-----------|-------|------------|
| **Button** | Primary, secondary, ghost | `--color-primary`, `--spacing-sm`, `--type-button`, `--ease-standard` |
| **Card** (DiseaseCard) | Grid of disease cards | `--spacing-md`, `--elev-2`, `--type-body` |
| **Navbar** | Fixed top, safe‑area aware | `--spacing-md-390`, `--color-surface`, `--elev-1` |
| **Modal (iPhone Sheet)** | Full‑screen on mobile, centered on desktop | `--spacing-lg`, `--radius-lg`, `--elev-4` |
| **Toast** | Transient feedback | `--duration-short`, `--ease-decelerate` |

---
## 11. Branding Assets
- **Logo (SVG)** – placed in `public/logo.svg`.
- **Favicon** – `public/favicon.ico` (32 × 32 px, transparent background).
- **Illustrations** – optional subtle vector backgrounds; use low‑opacity teal gradients.

---
## 12. Implementation Tips for the Codebase
1. **Import the design tokens** – add `@import "./spacing.css";` and `@import "./design-tokens.css";` at the top of `src/index-flagship.css`.
2. **Use CSS custom properties** – never hard‑code colors, spacing or shadows.
3. **Component‑level BEM naming** – ` .disease-card {}` → ` .disease-card__header {}` etc.
4. **Dark‑mode toggle** – add `data-theme="dark"` attribute on `<html>`; CSS already contains dark overrides.
5. **Responsive breakpoints** – rely on `@media (min-width: 640px)` for tablet and above, while the iPhone‑specific variables guarantee perfect spacing on 390/393/430 px.
6. **Motion library** – create a tiny `motion.css` exposing the easing/ duration tokens; import wherever `transition` is used.
7. **Testing** – run `npm run lint && npm run typecheck && npm run test` after any token changes.

---
## 13. Future‑Proofing
- **Design Tokens JSON** – keep a `tokens.json` source that can be consumed by Figma, Storybook and the build pipeline.
- **Versioning** – bump the `--design-system-version` in `package.json` on any token change.
- **Theming** – concept for “Medical‑Blue” or “Night‑Gold” skins can be added by extending `:root[data-skin="blue"] { … }`.

---
**End of Design System**
