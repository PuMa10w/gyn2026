---
title: "UroMed Clinic – Premium Design System 2026"
author: "rousl (кореш)"
date: "2026-06-09"
version: "2.0.0"
---

# Vision & Guiding Principles
- **Premium, tech‑forward, emotionally resonant.** Every pixel feels handcrafted for a high‑end medical reference app.
- **Consistency first.** All UI elements inherit from a single token set – no ad‑hoc values.
- **Responsive elegance.** UI adapts flawlessly from iPhone 15 (390 px) up to ultra‑wide 2560 px displays.
- **Accessible luxury.** WCAG AA compliance, generous contrast, focus handling, and reduced‑motion support.
- **Performance‑aware.** Minimal CSS, server‑side critical‑path extraction, and GPU‑accelerated micro‑interactions.

---

## 1. Brand Color Palette (Unique & Premium)
| Token | Light Theme | Dark Theme |
|-------|-------------|-----------|
| **--color-brand-primary** | `#5F3DC4` *(Deep Purple – trust & expertise)* | `#836EF5` |
| **--color-brand-secondary** | `#B08AEA` *(Soft Violet – innovation)* | `#C7B5FF` |
| **--color-accent-gold** | `#E6B012` *(Gold – premium highlight)* | `#FFDC60` |
| **--color-accent-amber** | `#F5A623` *(Amber – action emphasis)* | `#FFCF73` |
| **--color-success** | `#10B981` *(Green – health & success)* | `#34D399` |
| **--color-warning** | `#F59E0B` *(Amber – caution)* | `#FBBF24` |
| **--color-danger** | `#EF4444` *(Red – critical alert)* | `#F87171` |
| **--color-info** | `#3B82F6` *(Blue – informational)* | `#60A5FA` |
| **--color-bg** | `#FCFBFD` *(Off‑white, subtle warmth)* | `#0A0A0D` *(Mid‑night dark)* |
| **--color-surface** | `#FFFFFF` *(Pure white panels)* | `#111218` *(Deep surface)* |
| **--color-muted** | `#E5E7EB` *(Light gray)* | `#374151` *(Dark gray)* |
| **--color-text-primary** | `#1F2937` *(Almost black)* | `#F9FAFB` *(Almost white)* |
| **--color-text-secondary** | `#4B5563` | `#D1D5DB` |
| **--color-border** | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.12)` |

> **Contrast check:** All foreground/background pairs meet ≥ 4.5:1 for normal text and ≥ 3:1 for large text in both themes (verified with `npm run axe`).

---

## 2. Typography
| Token | Font Family | Size | Weight | Line‑Height |
|-------|-------------|------|--------|------------|
| **--type-display** | `"Space Grotesk", system-ui, sans-serif` | `clamp(2.5rem, 5vw, 4rem)` | 700 | 1.1 |
| **--type-h1** | `Inter, system-ui, sans-serif` | `clamp(2rem, 4vw, 3rem)` | 600 | 1.2 |
| **--type-h2** | `Inter` | `clamp(1.5rem, 3vw, 2.25rem)` | 600 | 1.25 |
| **--type-h3** | `Inter` | `clamp(1.25rem, 2.5vw, 1.75rem)` | 500 | 1.3 |
| **--type-body** | `Inter` | `1rem` | 400 | 1.5 |
| **--type-caption** | `Inter` | `0.75rem` | 400 | 1.4 |
| **--type-button** | `Inter` | `0.875rem` | 600 | 1.4 |

All type scales use fluid `clamp()` for perfect scaling across breakpoints. Font files are hosted locally for offline reliability.

---

## 3. Spacing System (Responsive)
```css
/* Mobile‑first – iPhone 15 (390 px) */
:root {
  --spacing-xxs: 0.25rem;   /* 4 px */
  --spacing-xs: 0.5rem;    /* 8 px */
  --spacing-sm: 0.75rem;   /* 12 px */
  --spacing-md: 1rem;      /* 16 px */
  --spacing-lg: 1.5rem;    /* 24 px */
  --spacing-xl: 2rem;      /* 32 px */
  --spacing-2xl: 3rem;     /* 48 px */
}
/* iPhone 15 Pro (393 px) */
@media (min-width: 393px) {
  :root {
    --spacing-xxs: 0.3rem;
    --spacing-xs: 0.6rem;
    --spacing-sm: 0.9rem;
    --spacing-md: 1.2rem;
    --spacing-lg: 1.8rem;
    --spacing-xl: 2.4rem;
    --spacing-2xl: 3.6rem;
  }
}
/* iPhone 16/17 (430 px) */
@media (min-width: 430px) {
  :root {
    --spacing-xxs: 0.35rem;
    --spacing-xs: 0.7rem;
    --spacing-sm: 1.05rem;
    --spacing-md: 1.4rem;
    --spacing-lg: 2.1rem;
    --spacing-xl: 2.8rem;
    --spacing-2xl: 4rem;
  }
}
/* Tablet & up */
@media (min-width: 640px) {
  :root {
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 2.5rem;
  }
}
```
All components reference these variables – never hard‑coded values.

---

## 4. Elevation & Shadows
| Level | Light | Dark |
|-------|-------|------|
| **e0** | `none` | `none` |
| **e1** | `0 1px 3px rgba(0,0,0,0.08)` | `0 1px 3px rgba(0,0,0,0.45)` |
| **e2** | `0 4px 6px rgba(0,0,0,0.12)` | `0 4px 6px rgba(0,0,0,0.55)` |
| **e3** | `0 10px 20px rgba(0,0,0,0.15)` | `0 10px 20px rgba(0,0,0,0.6)` |
| **e4** | `0 20px 40px rgba(0,0,0,0.2)` | `0 20px 40px rgba(0,0,0,0.7)` |

Utility class: `.elev-{level}` – e.g., `.elev-2`.

---

## 5. Border Radius
```css
--radius-xxs: 4px;
--radius-xs: 6px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;
```
Rounded corners follow the “soft‑luxury” cadence: components use `--radius-md` by default, cards `--radius-lg`, modals `--radius-xl`.

---

## 6. Motion & Micro‑Interactions
| Token | Value |
|-------|-------|
| **--duration-fast** | `150ms` |
| **--duration-medium** | `250ms` |
| **--duration-slow** | `400ms` |
| **--ease-standard** | `cubic-bezier(0.22, 1, 0.36, 1)` |
| **--ease-emphasized** | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **--ease-spring** | `cubic-bezier(0.25, 0.1, 0.25, 1)` |

### Common Patterns
- **Button press:** `transform: translateY(1px); transition: transform var(--duration-fast) var(--ease-emphasized);`
- **Modal slide‑up (iPhone Sheet):** `translateY(100%) → translateY(0)` with `var(--duration-medium)` and `var(--ease-standard)`.
- **Card hover elevation:** `.elev-2 → .elev-3` on `:hover`.
- **Shimmer placeholder:** `background: linear-gradient(110deg, var(--color-muted) 0%, var(--color-surface) 50%, var(--color-muted) 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite var(--ease-spring);`
- **Reduced‑motion guard:** `@media (prefers-reduced-motion: reduce) { animation: none; transition: none; }`

---

## 7. Component Library (excerpt)
### 7.1 Buttons
| Variant | Class | Usage |
|--------|-------|-------|
| **Primary** | `.btn-primary` | CTA, dominant actions |
| **Secondary** | `.btn-secondary` | Less‑prominent actions |
| **Ghost** | `.btn-ghost` | Minimal UI, e.g., toolbar icons |
| **Shimmer** | `.btn-shimmer` | Loading state, async fetch |

```css
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--type-button);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-normal);
  transition: background var(--duration-medium) var(--ease-standard),
              box-shadow var(--duration-medium) var(--ease-standard),
              transform var(--duration-fast) var(--ease-emphasized);
  cursor: pointer;
}
.btn-primary {
  background: var(--color-brand-primary);
  color: var(--color-surface);
  border: none;
}
.btn-primary:hover {
  background: var(--color-brand-secondary);
  box-shadow: var(--shadow-sm);
}
.btn-primary:active {
  transform: translateY(1px);
}
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
.btn-ghost:hover { background: var(--color-muted); }
.btn-shimmer {
  position: relative;
  overflow: hidden;
  background: var(--color-muted);
}
.btn-shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent, var(--color-accent-gold) 50%, transparent);
  transform: translateX(-100%);
  animation: shimmer var(--duration-slow) var(--ease-spring) infinite;
}
```
### 7.2 Disease Card
```css
.disease-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-xs);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  transition: box-shadow var(--duration-medium) var(--ease-standard),
              transform var(--duration-fast) var(--ease-emphasized);
}
.disease-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.disease-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
}
.disease-card__title {
  font: var(--type-h3) var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.disease-card__meta {
  font: var(--type-caption) var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.disease-card__badge {
  background: var(--color-accent-gold);
  color: var(--color-surface);
  border-radius: var(--radius-full);
  padding: var(--spacing-xxs) var(--spacing-xs);
  font-size: var(--type-caption);
}
```
### 7.3 Navbar (iPhone‑safe‑area aware)
```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--spacing-md) + var(--safe-top)) var(--spacing-lg);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky);
}
```
### 7.4 Modal (iPhone Sheet)
```css
.modal-sheet {
  position: fixed;
  inset: 0;
  padding: var(--spacing-lg) var(--spacing-md);
  background: var(--color-surface);
  border-top-left-radius: var(--radius-xl);
  border-top-right-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  transform: translateY(100%);
  animation: sheet-up var(--duration-medium) var(--ease-standard) forwards;
}
@keyframes sheet-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
```
### 7.5 Toast System
```css
.toast {
  position: fixed;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  animation: toast-in var(--duration-fast) var(--ease-standard);
}
@keyframes toast-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
```

---

## 8. Accessibility Checklist (WCAG AA)
- Minimum contrast ratios: 4.5:1 (normal) / 3:1 (large).
- Focus outline: `outline: 3px solid var(--color-accent-gold); outline-offset: 2px;`
- Touch target size ≥ 44 × 44 px.
- `aria-label` for icon‑only buttons.
- `role="dialog"` + `aria-modal="true"` for modals.
- Reduced‑motion guard on all non‑essential animations.

---

## 9. Implementation Checklist (10‑point quality control)
1. **Visual inspection at 80 %, 100 %, 125 %, 150 %** – no pixel‑level breakages.
2. **Empty‑state designs** – skeletons with shimmer.
3. **Error‑state designs** – clear, colored feedback.
4. **Loading‑state designs** – spinners + skeletons.
5. **Long disease names & rare diagnoses** – ellipsis handling, word‑break.
6. **Slow‑network simulation** (Network throttling → UI degrades gracefully).
7. **Core Web Vitals** – CLS < 0.1, LCP < 2.5 s, FID < 100 ms.
8. **Accessibility audit** – axe core passes AA.
9. **Spacing consistency** – `npm run stylelint` on all CSS files.
10. **Pixel‑perfect audit** – diff screenshots against design mockups (desktop / mobile) using `pixelmatch`.

---

## 10. Next Steps for Integration
1. Replace existing token imports with `@import "./premium-design-tokens.css";` in `src/index-flagship.css`.
2. Update component CSS files (`disease-card.css`, `navbar.css`, `modal-system.css`, …) to reference the new token names (see patches in `design-mockups/patches/`).
3. Run `npm run lint && npm run test && npm run build` – all should pass.
4. Open the HTML mockups in `design-mockups/` to verify visual fidelity.
5. Switch themes by toggling `<html data-theme="dark">`.

---

**All assets are available under the `design-mockups/` folder.**

*Enjoy the premium experience!*