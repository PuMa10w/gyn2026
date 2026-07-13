# GYN — Глобальная визуальная оптимизация (премиум full polish)

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Довести весь сайт до премиального уровня визуального дизайна: глобальная цветовая гамма, темы, анимации, тени, интерактивные эффекты, оптимизация GPU-рендеринга, финальная полировка всех секций.

**Architecture:** Все стили должны идти в `premium-flagship.css` (главный файл, грузится последним) + `premium-effects.css` (hero/aura-эффекты). Использовать CSS custom properties, will-change, transform: translateZ(0) для GPU-ускорения.

**Tech Stack:** React 19 + Vite + TypeScript, CSS custom properties, WebGL/GPU hints.

---

## Current state (фактическое)

| Компонент | Статус | Замечания |
|---|---|---|
| Главная страница | Базовая, но без hero-эффектов | Нет аура-параллакса, тени, анимаций |
| Dark/Light theme | Токены согласованы | Нет переходов, плавных изменений |
| Цветовая палитра | Базовые токены | Нет muted-оттенков, no-ui, surface-2 |
| Анимации | Базовые | Нет spring-эффектов, плавных трансформаций |
| GPU-оптимизация | Есть (translateZ(0), will-change) | Нет везде |
| Hover-эффекты | Есть | Нет micro-interactions |
| Border-radius | Частично токенизированы | Нет единообразия |
| Typography | 12px минимум | Нет letter-spacing, line-height оптимизации |

---

## Epic 1 — Глобальная цветовая гамма и темы

### Task 1.1: Добавить полную семантику цветов (no-ui, surface-2, muted)
**Objective:** Расширить палитру для premium UI: `--am-no-ui`, `--am-surface-2`, `--am-muted`, `--am-success-light`, `--am-warning-light`, `--am-danger-light`.

**Files:** Modify `src/styles/premium-flagship.css` `:root` + `[data-theme='dark']`.

**Step 1:** В `:root` добавить:
```css
  --am-no-ui: #F9F7F4;
  --am-surface-2: #F2EEE8;
  --am-muted: #E8E4E0;
  --am-success-light: #7FCE9C;
  --am-warning-light: #E8BE6B;
  --am-danger-light: #EFA890;
```

**Step 2:** В `[data-theme='dark']` добавить:
```css
  --am-no-ui: #181324;
  --am-surface-2: #221B33;
  --am-muted: #423B52;
  --am-success-light: #7FCE9C;
  --am-warning-light: #E8BE6B;
  --am-danger-light: #EFA890;
```

**Step 3:** Commit: `style(palette): add no-ui, surface-2, muted tones`

### Task 1.2: muted-оттенки для второстепенных элементов
**Objective:** `--am-teal-muted` / `--am-amber-muted` для badges, borders, disabled states.

**Files:** `premium-flagship.css` — `:root` + `[data-theme='dark']`.

**Step 1:** Добавить:
```css
:root { --am-teal-muted: #1F9C97CC; --am-amber-muted: #936318CC; }
[data-theme='dark'] { --am-teal-muted: #1F9C9799; --am-amber-muted: #93631899; }
```

**Step 2:** Применить к `.guideline-badge`, `.card-icd-badge` (фон/граница).

**Step 3:** Commit: `style(palette): muted teal/amber accents`

---

## Epic 2 — Глобальная GPU-оптимизация и анимации

### Task 2.1: Добавить will-change и transform для всех интерактивных элементов
**Objective:** Все hoverable/clickable элементы используют `will-change: transform` + `transform: translateZ(0)` для GPU-ускорения.

**Files:** `premium-flagship.css` — добавить в конец (перед финальными media-правками).

**Step 1:** Добавить:
```css
/* GPU acceleration for all interactive elements */
.premium-button, .premium-tool-card, .home-destination-card,
.premium-recent-item, .tab-btn, .category-chip,
.guide-line, .modal-quick-strip, .modal-tabs,
.destination-tag, .card-subtitle, .card-icd-badge {
  will-change: transform;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
}
```

**Step 2:** Commit: `perf: GPU acceleration for interactive elements`

### Task 2.2: Spring-анимации для hover/tap эффектов
**Objective:** Заменить `transition` на spring-анимации для более плавных взаимодействий.

**Files:** `premium-flagship.css` — интерактивные селекторы.

**Step 1:** Для `.premium-button:hover`, `.premium-tool-card:hover` добавить:
```css
  transition: transform var(--duration-fast) cubic-bezier(0.34, 1.56, 0.64, 1);
```

**Step 2:** Commit: `anim: spring easing for hover effects`

### Task 2.3: Аура-эффекты для hero-секции
**Objective:** Добавить аура (glow) для `.premium-command-hero` и `.home-destination-card`.

**Files:** `premium-effects.css` (или flagship).

**Step 1:** Добавить:
```css
.premium-command-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius-2xl);
  padding: 1px;
  background: linear-gradient(45deg, transparent, rgba(107,92,156,0.15), transparent);
  animation: aura-pulse 4s ease-in-out infinite alternate;
}
@keyframes aura-pulse {
  0% { opacity: 0.6; filter: blur(20px); }
  100% { opacity: 0.9; filter: blur(30px); }
}
```

**Step 2:** Commit: `style: aura glow for hero section`

---

## Epic 3 — Глобальная типографика

### Task 3.1: Оптимизация letter-spacing и line-height
**Objective:** Добавить optical kerning для заголовков, улучшить читаемость.

**Files:** `premium-flagship.css` — заголовки, body text.

**Step 1:** Для h1-h4:
```css
h1, h2, h3, h4 {
  letter-spacing: -0.02em;
  text-rendering: optimizeLegibility;
}
```

**Step 2:** Для body text:
```css
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: subpixel-antialiased;
}
```

**Step 3:** Commit: `style(typography): optical kerning, optimizeLegibility`

### Task 3.2: Responsive font sizes с clamp() для всех текстов
**Objective:** Все тексты используют clamp() для адаптивности.

**Files:** `premium-flagship.css` — все текстовые селекторы.

**Step 1:** Применить clamp к `.hero-title`, `.home-card-title`, `.catalog-title` и т.д.

**Step 2:** Commit: `style(typography): responsive clamp() for all text`

---

## Epic 4 — Финальная полировка интерфейса

### Task 4.1: Унифицировать border-radius
**Objective:** Все скругления через токены `--radius-*`.

**Files:** `premium-flagship.css` — поиск хардкодов.

**Step 1:** Найти все `border-radius: [число]px` вне токенов.

**Step 2:** Заменить на `var(--radius-xl)`, `var(--radius-2xl)` и т.д.

**Step 3:** Commit: `style: unify border-radius tokens`

### Task 4.2: Тени и depth-система
**Objective:** Единая система теней (`--am-shadow-*`) для всех уровней глубины.

**Files:** `premium-flagship.css` — проверка shadow-использования.

**Step 1:** Убедиться, что все shadow используют токены.

**Step 2:** Добавить `--am-shadow-glow` если не хватает.

**Step 3:** Commit: `style: unified shadow depth system`

### Task 4.3: Micro-interactions
**Objective:** Добавить micro-interactions для лучшего UX.

**Files:** `premium-flagship.css`.

**Step 1:** Для `.premium-button` добавить ripple-эффект через `::after`.

**Step 2:** Для `.favorite-btn` добавить анимацию сердца.

**Step 3:** Commit: `style: micro-interactions for buttons`

---

## Epic 5 — Валидация и финальная проверка

### Task 5.1: Полный аудит
**Objective:** Прогнать все аудиты после каждой Epic.

**Step 1:**
```bash
npm run build
npx vite preview --port 4209
export AUDIT_URL="http://127.0.0.1:4209"
node scripts/iphone-audit.mjs
node scripts/readability-audit.mjs
node scripts/iphone-overlap-audit.mjs
npm run lhci
```

**Step 2:** Убедиться, что все PASS.

**Step 3:** Commit: `chore: final visual polish, all audits pass`

---

## Files likely to change
- `src/styles/premium-flagship.css` (главный файл стилей)
- `src/styles/premium-effects.css` (hero/aura эффекты)
- `src/styles/App.css` (legacy, некоторые правки могут понадобиться)

## Tests / validation
- Vitest: `npm run test` (78 tests)
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Аудиты: `node scripts/iphone-audit.mjs`, `readability-audit.mjs`, `iphone-overlap-audit.mjs`
- Lighthouse: `npm run lhci`

## Risks / tradeoffs
- Слишком яркие ауры могут утомлять глаза — использовать `opacity` ≤ 0.9
- Шоколадные (amber) оттенки в dark theme могут быть слишком яркими — добавить muted-версии
- Много `!important` усложняет отладку, но необходим для override legacy CSS

---

## Execution order (рекомендуется)

1. **Epic 1** (цвета) → 2. **Epic 2** (GPU/анимации) → 3. **Epic 3** (типографика) → 4. **Epic 4** (полировка) → 5. **Epic 5** (валидация)

Каждый Epic = несколько коммитов. Главное — не сломать текущие аудиты.
