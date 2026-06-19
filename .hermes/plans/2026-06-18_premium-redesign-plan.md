# GYN Clinical Premium Redesign Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Создать максимально современный, стильный, ультрапремиум медицинский справочник с идеальным UX на iPhone и десктопе

**Architecture:** 6 фаз последовательного улучшения (Phase 1-6), каждый коммит + пуш перед следующей фазой

**Tech Stack:** Vite 6, React 19, Framer Motion, CSS Variables, PWA, Web Speech API

---

## 1. Executive Design Review

🔴 **High Priority:**
- 6 CSS файлов конфликтуют друг с другом (470KB)
- Нет SVG иконок (unicode/emoji не кроссплатформенно)
- Glass эффект прост, без blur/saturate
- Мобильный bottom bar не scroll-aware

🟡 **Medium Priority:**
- Цвета не выделяются в медицинском стиле
- Табы без плавных анимаций
- Voice AI поиск не реализован

🟢 **Low Priority:**
- Нет skeleton loading в карточках
- Тема не имеет theme-color media queries

---

## 2. Strategic Redesign Vision

**Концепт:** "Gyneo — Modern Clinical Reference"

**Визуальный язык:** Amber-Teal-Violet палитра, glassmorphism, мягкие тени, плавные анимации. Минимализм + мягкие градиенты.

---

## 3. UX Improvements

- **Search Overlay:** ⌘K, glass panel, live suggestions с иконками
- **Modal Sheets:** iPhone sheet style для мобильных
- **Bottom Bar:** Scroll-aware hide/show, safe-area padding, FAB
- **Touch Targets:** Все 44px+, spacing system

---

## 4. Visual Transformation

### CSS Architecture (Cascade Override)
```tsx
// App.tsx — импорт в ПРАВИЛЬНОМ порядке
import './styles/design-tokens.css';  // переменные
import './index.css';
import './App.css';
import './premium-unified.css';
import './styles/ultra-premium-v9.css';
import './styles/clinical-worktool.css';
import './styles/clinical-v1-4-skin.css';
import './styles/premium-flagship.css';  // ПОСЛЕДНИЙ — переопределяет всё
import './styles/spacing.css';
```

### Цветовая палитра (Amber-Teal-Violet)
```css
/* Light Theme */
--color-primary: #14b8a6;     /* teal-500 */
--color-secondary: #f59e0b;   /* amber-500 */
--color-accent: #8b5cf6;     /* violet-500 */
--color-danger: #e11d48;     /* rose-700 */

/* Dark Theme */
--color-primary: #2dd4bf;     /* teal-400 */
--color-secondary: #fbbf24;   /* amber-400 */
--color-accent: #a78bfa;      /* violet-400 */
--color-danger: #fb7185;      /* rose-400 */
```

---

## 5. Design System Specification

### Z-Index Layer System
```css
--z-mobile-bar: 100;
--z-navbar: 50;
--z-modal: 200;
--z-toast: 1100;
--z-tooltip: 1300;
```

### Spacing Scale (4px base)
```css
--space-2xs: 4px;
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 20px;
--space-xl: 24px;
--space-2xl: 32px;
--touch-min: 44px; /* iPhone accessibility */
```

### Glass 2.0
```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
}
```

---

## 6. Motion System

- **Page transitions:** fade + translate (240ms)
- **Modal transitions:** spring physics (stiffness: 300, damping: 20)
- **Tab transitions:** AnimatePresence + stagger
- **Micro-interactions:** magnetic hover, shimmer, scale on tap
- **Reduced motion guard:** `@media (prefers-reduced-motion: reduce)`

---

## 7. Mobile Experience

- **Bottom Navigation:** 5 tabs (Home, Catalog, Search, Favorites, Profile)
- **Safe Area Padding:** `--safe-top`, `--safe-bottom`
- **Gestures:** swipe to close modal, pull to refresh
- **Viewport Detection:** `matchMedia('(hover: none) and (pointer: coarse)')`

---

## 8. Accessibility Improvements (WCAG AA)

- [ ] aria-label на всех интерактивных элементах
- [ ] role="dialog" + aria-modal на модалах
- [ ] Tab navigation + skip-link
- [ ] Reduced motion support
- [ ] Color contrast ≥ 4.5:1
- [ ] Focus rings: 2px solid var(--color-primary)

---

## 9. Performance Optimization

- **Bundle target:** <320KB CSS gzipped
- **JS chunks:** lazy load для модалов >100KB
- **PWA cache:** 86 entries, 6.6MB precache
- **Lighthouse target:** >90 score

---

## 10. Risk Analysis

| Change | Risk | Mitigation |
|--------|------|------------|
| SVG icons | App break if not imported | Import check + build verify |
| CSS cascade override | Wrong order breaks styles | Import premium-flagship LAST |
| Voice AI | Browser compatibility | Check webkitSpeechRecognition |
| Offline fallback | Cache conflicts | Version hash in service worker |

---

## 11. Zero Regression Validation

| Metric | Before | After | Status |
|--------|--------|-------|--------|
| Tests | 72/72 | 72/72 | ✅ |
| TypeScript | 0 errors | 0 errors | ✅ |
| Build | 494KB | <320KB | ⏳ |
| Mobile UX | OK | Лучше | ⏳ |

---

## 12. Premium Quality Checklist

### Phase 1: SVG Icons ✅
- [x] icons.jsx с Heroicons-style SVGs
- [x] replace unicode в Navbar
- [x] replace emoji в HomeSection

### Phase 2: CSS Architecture ✅
- [x] design-tokens.css
- [x] spacing.css
- [x] animations/presets.ts

### Phase 3: Glass 2.0 + Premium Components ✅
- [x] shimmer на workbench-command-card
- [x] magnetic на DiseaseCard
- [x] offline fallback

### Phase 4: Motion System ✅
- [x] tab transitions с AnimatePresence

### Phase 5: Voice AI в поиск ⏳
### Phase 6: CSS Optimization ⏳

---

## 6-Phase Execution Plan

### Phase 5: Voice AI в поиск
1. Web Speech API integration в CommandSearch
2. Speech-to-text для поиска
3. Text-to-speech для результатов
4. Голосовые команды ("найти эндометриоз")

### Phase 6: CSS Optimization
1. Аудит дублей (470KB → 320KB)
2. Удалить неиспользуемые стили
3. Объединить в premium-flagship.css
4. LCP < 2.5s

---

**Ready to execute. Each phase = отдельный коммит.**