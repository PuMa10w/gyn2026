# GYN Premium Visual + Palette + iPhone 15 Pro/17 Overhaul

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Поднять визуал всех разделов, унифицировать цветовую палитру обеих тем (light/dark) под единую систему Deep Amethyst + Amber Gold + Clinical Teal, редизайнить главную страницу и довести производительность/адаптив до безупречной работы на iPhone 15 Pro и iPhone 17 (Dynamic Island, GPU, touch).

**Architecture:** Вся стилистика — в одном источнике правды `src/styles/premium-flagship.css` (`:root` + `[data-theme='dark']` + секции компонентов + iOS-блок). `index.css`/`App.css` — legacy, перекрываются через `!important`. Темы переключаются хуком `useTheme` (атрибут `data-theme` на `<html>`). Главная — `HomeSection.tsx`. Мобильная навигация — `MobileBottomBar.tsx`. Валидация идёт через готовые audit-скрипты (iPhone, touch-targets, pastel, premium-verify) + Lighthouse (lhci).

**Tech Stack:** React 19 + Vite 6 + TypeScript, framer-motion 12, Bootstrap 5.3 (частично), CSS custom properties, Playwright (аудиты), Lighthouse CI.

---

## Current state (what we found)

- **Tokens**: `premium-flagship.css` строки 11-199 (`:root` light) и 203-286 (`[data-theme='dark']`). Палитра: `--am-brand #5B3E8F` (amethyst), `--am-amber #936318`/`#E0B25A` (gold), `--am-teal #1F9C97` (clinical).
- **Legacy-утечки**: в `:root` заведены alias `--color-turquoise` (=teal), `--color-emerald` (=teal-light), `--accent-rose` (=am-brand), `--ui-rose` (=am-coral). Используются в `ToastSystem.tsx:51,53,95,115` (`var(--color-turquoise)`). Не розовые визуально, но семантически путаные — надо привести к единому именованию.
- **Главная**: `HomeSection.tsx` — `premium-command-hero` (badge + title + lede + CommandSearch + metrics), `home-destination-grid` (2 карточки 01/02), `premium-command-grid` (tool-карточки), `premium-recent-panel`. Hero-эффекты есть в `premium-effects.css`.
- **iPhone**: брейкпоинты только `max-width: 430px`/`428px` (lines 642-653, 2481-2498, 3098). НЕТ: 393px (15 Pro), 402px (17), 440px (17 Pro Max). Safe-area для Dynamic Island задан только для `env(safe-area-inset-top) > 30px`.
- **GPU/perf**: `backdrop-filter: blur(40px) saturate(1.8)` на мобиле тяжёлый; нет `will-change`, нет `translate3d`, нет `-webkit-tap-highlight-color`, нет `content-visibility`.
- **Аудиты готовы**: `npm run audit:iphone`, `audit:visual:iphone`, `audit:touch-targets`, `audit:pastel`, `verify:premium`, `audit:bundle:budget`, `npm run lhci`.

---

# Epic 1 — Унификация палитры обеих тем

### Task 1: Добавить семантические цветовые токены в `:root`

**Objective:** Ввести AA-безопасные semantic tokens (текст на бренде, state-цвета с тонами) в light-тему.

**Files:** Modify `src/styles/premium-flagship.css:31-46` (light surface/text блок)

**Step 1:** После `--am-text-link` (строка 46) добавить блок:
```css
  /* ─ Semantic state colors (AA-safe on both themes) ─ */
  --am-info:        #5B3E8F;
  --am-info-light:  #7C63C4;
  --am-success:     #2E8B57;
  --am-success-light:#5BB981;
  --am-warning:     #B07A18;
  --am-warning-light:#D9A23C;
  --am-danger:      #C0392B;
  --am-danger-light: #E0654F;
  /* Text rendered ON brand gradient / solid brand */
  --am-text-on-brand: #FFFFFF;
  /* Slightly muted secondary tuned for AA on --am-bg-base */
  --am-text-secondary-aa: #364B6B; /* tuned contrast */
```
*Примечание:* `--am-text-secondary` уже `#3C3550` (контраст ~10:1 на `#FAF7F4` — ок). Новый `--am-text-secondary-aa` не обязателен, оставить как есть; добавить только state + on-brand.

**Step 2:** Проверить contrast через `node scripts/pastel-consistency-audit.mjs` — ожидать 0 нарушений пастельности.

**Step 3:** Commit: `git commit -m "feat(theme): add semantic state + on-brand text tokens (light)"`

### Task 2: Зеркалировать semantic tokens в dark-тему

**Objective:** Те же semantic tokens с тонами для `[data-theme='dark']`.

**Files:** Modify `src/styles/premium-flagship.css:211-215` (dark text блок)

**Step 1:** После `--am-text-link: #B49BE0;` (строка 215) добавить:
```css
  --am-info:        #B49BE0;
  --am-info-light:  #C9B6EE;
  --am-success:     #5BB981;
  --am-success-light:#7FCE9C;
  --am-warning:     #D9A23C;
  --am-warning-light:#E8BE6B;
  --am-danger:      #E0654F;
  --am-danger-light: #EFA890;
  --am-text-on-brand: #FFFFFF;
```

**Step 2:** `node scripts/pastel-consistency-audit.mjs` — 0 нарушений.

**Step 3:** Commit: `git commit -m "feat(theme): mirror semantic tokens (dark)"`

### Task 3: Привести legacy-алиасы к единой системе

**Objective:** Убрать путаницу `--color-turquoise`/`--color-emerald`/`--accent-rose`/`--ui-rose`, замепить на amethyst/teal/gold-систему, обновить `ToastSystem.tsx`.

**Files:**
- Modify `src/styles/premium-flagship.css:172-174` (legacy alias блок)
- Modify `src/components/ToastSystem.tsx:51,53,95,115`

**Step 1:** В `:root` заменить:
```css
  --color-turquoise: var(--am-teal);
  --color-emerald: var(--am-teal-light);
  --color-gold: var(--am-amber);
```
на:
```css
  --color-teal: var(--am-teal);
  --color-teal-light: var(--am-teal-light);
  --color-amber: var(--am-amber);
  --color-amber-light: var(--am-amber-light);
```
и в dark (строки 267-269) синхронно.

**Step 2:** В `ToastSystem.tsx` заменить 4 вхождения `var(--color-turquoise)` → `var(--color-teal)` и `var(--color-emerald)` → `var(--color-teal-light)`.

**Step 3:** `npm run typecheck` (ожидать PASS, типы не затронуты) и `npm run test` (PASS).

**Step 4:** Commit: `git commit -m "refactor(theme): consolidate legacy color aliases to amethyst/teal/gold"`

### Task 4: Усилить dark-theme border-glow и contrast

**Objective:** В dark-теме границы `--am-border-medium/strong` чуть ярче для видимости карточек; secondary text контрастнее.

**Files:** Modify `src/styles/premium-flagship.css:217-219` (dark borders)

**Step 1:** Заменить:
```css
    --am-border-soft:   rgba(91, 62, 143, 0.28);
    --am-border-medium: rgba(91, 62, 143, 0.42);
    --am-border-strong: rgba(91, 62, 143, 0.58);
```
на:
```css
    --am-border-soft:   rgba(124, 99, 196, 0.30);
    --am-border-medium: rgba(124, 99, 196, 0.46);
    --am-border-strong: rgba(124, 99, 196, 0.64);
```

**Step 2:** `node scripts/pastel-consistency-audit.mjs` — 0 нарушений; `npm run audit:visual:iphone` baseline.

**Step 3:** Commit: `git commit -m "style(theme): brighten dark borders for card legibility"`

---

# Epic 2 — Унификация визуала по всем разделам

### Task 5: Вынести общий «premium card» примитив и применить везде

**Objective:** Создать единый класс `.am-card` (поверхность + тень + радиус + hover) и использовать в DiseaseCard/PharmacologyModal/PremiumCard.

**Files:** Modify `src/styles/premium-flagship.css` (новый блок после секции GLASS ~строка 451)

**Step 1:** Добавить:
```css
.am-card {
  background: var(--am-bg-card);
  border: 1px solid var(--am-border-soft);
  border-radius: var(--radius-xl);
  box-shadow: var(--am-shadow-sm);
  transition: background var(--duration-md) var(--ease-smooth),
              box-shadow var(--duration-md) var(--ease-smooth),
              border-color var(--duration-md) var(--ease-smooth),
              transform var(--duration-md) var(--ease-fast);
}
.am-card:hover {
  background: var(--am-bg-elevated);
  box-shadow: var(--am-shadow-md);
  border-color: var(--am-border-medium);
}
.am-card:focus-visible {
  outline: 2px solid var(--am-brand);
  outline-offset: 2px;
}
```

**Step 2:** В `DiseaseCard.tsx` и `PharmacologyModal.tsx` заменить инлайн/локальные классы карточек на `am-card` где уместно (проверить поиском `className=` в этих файлах). Не ломать layout.

**Step 3:** `npm run test` (PASS), `npm run audit:cards:open` (PASS — карточки открываются).

**Step 4:** Commit: `git commit -m "style: introduce unified .am-card primitive across sections"`

### Task 6: Унифицировать радиусы/тени модалок обеих тем

**Objective:** DiseaseModal и PharmacologyModal используют единые `--radius-2xl`/`--am-shadow-xl`.

**Files:** Modify `src/styles/premium-flagship.css` (секция modal, найти `.modal-content`/`DiseaseModal`)

**Step 1:** Найти текущие правила модалок (`search_files` паттерн `.modal-content` в flagship.css), привести к:
```css
.modal-content,
.disease-modal,
.pharmacology-modal {
  background: var(--am-modal-bg);
  border: 1px solid var(--am-border-soft);
  border-radius: var(--radius-2xl);
  box-shadow: var(--am-shadow-xl);
  backdrop-filter: blur(40px) saturate(1.6);
  -webkit-backdrop-filter: blur(40px) saturate(1.6);
}
```

**Step 2:** `npm run audit:visual:iphone` (модалки без перекрытий), `npm run test`.

**Step 3:** Commit: `git commit -m "style: unify modal radius/shadow for both themes"`

### Task 7: Привести Navbar и MobileBottomBar к palette-токенам

**Objective:** Нижний бар использует хардкод `rgba(245,245,247,0.68)` и `rgba(28,28,30,0.7)` — заменить на токены.

**Files:** Modify `src/styles/premium-flagship.css:528-601` (`mobile-bottom-bar`)

**Step 1:** Заменить:
```css
  background: rgba(28, 28, 30, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
```
на:
```css
  background: var(--am-bg-glass);
  border-top: 1px solid var(--am-border-soft);
```
и в `.mobile-bottom-item` `color: rgba(245,245,247,0.68);` → `color: var(--am-text-tertiary);`, `.is-active { color: var(--am-brand); }` (было `var(--color-turquoise)`), `.mobile-bottom-active-dot { background: var(--am-brand); }`.

**Step 2:** `npm run audit:touch-targets` (PASS, тач-таргеты ≥44px), `npm run test`.

**Step 3:** Commit: `git commit -m "style: retheme mobile bottom bar to palette tokens"`

---

# Epic 3 — Редизайн главной страницы (HomeSection)

### Task 8: Усилить hero-секцию (premium-command-hero)

**Objective:** Визуальная иерархия hero: градиентный фон-карточка, крупнее title, аккуратнее lede, metrics в едином ритме.

**Files:**
- Modify `src/styles/premium-flagship.css` (новый блок `HOME HERO`)
- Modify `src/components/HomeSection.tsx:61-93` (разметка hero)

**Step 1:** Добавить CSS:
```css
.premium-command-hero {
  position: relative;
  display: grid;
  gap: var(--space-12);
  padding: var(--space-20) var(--space-16);
  border-radius: var(--radius-2xl);
  background:
    radial-gradient(120% 120% at 0% 0%, rgba(124,99,196,0.10), transparent 55%),
    radial-gradient(120% 120% at 100% 0%, rgba(224,178,90,0.10), transparent 55%),
    var(--am-bg-card);
  border: 1px solid var(--am-border-soft);
  box-shadow: var(--am-shadow-lg);
  overflow: hidden;
}
.hero-eyebrow-row { display:flex; align-items:center; gap:var(--space-4); margin-bottom: var(--space-6); }
.hero-status-dot { width:8px; height:8px; border-radius:999px; background: var(--am-success); box-shadow: 0 0 0 4px rgba(46,139,87,0.18); }
.hero-title { font-size: var(--text-4xl); line-height: var(--leading-tight); margin-bottom: var(--space-6); }
.hero-lede { font-size: var(--text-md); color: var(--am-text-secondary); max-width: 60ch; }
.premium-command-metrics { display:grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); margin-top: var(--space-8); }
.premium-command-metric { display:flex; flex-direction:column; gap: var(--space-2); padding: var(--space-6); border-radius: var(--radius-lg); background: var(--am-bg-subtle); border:1px solid var(--am-border-soft); }
.premium-command-metric strong { font-size: var(--text-2xl); color: var(--am-text-primary); }
```

**Step 2:** В `HomeSection.tsx` обернуть metrics в `<div className="premium-command-metrics">` (уже есть) — проверить, что класс совпадает. Добавить `hero-status-dot` уже есть.

**Step 3:** `npm run test`, `npm run audit:visual:iphone`.

**Step 4:** Commit: `git commit -m "style(home): elevate hero with layered gradient + metrics grid"`

### Task 9: Улучшить destination-карточки (01/02)

**Objective:** Больше воздуха, чёткий индекс, hover/tap feedback, brand-accent для гинекологии.

**Files:** Modify `src/styles/premium-flagship.css` (блок `HOME DESTINATION`)

**Step 1:** Добавить:
```css
.home-destination-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-8); margin-top: var(--space-16); }
.home-destination-card {
  text-align:left; cursor:pointer; padding: var(--space-12);
  border-radius: var(--radius-xl); border:1px solid var(--am-border-soft);
  background: var(--am-bg-card); box-shadow: var(--am-shadow-sm);
  display:flex; flex-direction:column; gap: var(--space-8); min-height: 200px;
  transition: transform var(--duration-md) var(--ease-spring), box-shadow var(--duration-md) var(--ease-smooth), border-color var(--duration-md);
}
.home-destination-card.is-gynecology { border-color: rgba(91,62,143,0.30); }
.home-destination-card.is-obstetrics { border-color: rgba(224,178,90,0.34); }
.home-destination-card:hover { transform: translateY(-4px); box-shadow: var(--am-shadow-lg); }
.home-destination-card:active { transform: translateY(-1px) scale(0.995); }
.destination-head { display:flex; justify-content:space-between; align-items:center; }
.destination-index { font-size: var(--text-xl); font-weight: var(--weight-heavy); color: var(--am-brand); opacity:0.55; }
.home-destination-title { font-size: var(--text-2xl); margin-bottom: var(--space-4); }
.home-destination-description { color: var(--am-text-secondary); font-size: var(--text-sm); }
.destination-footer { display:flex; justify-content:space-between; align-items:center; margin-top:auto; }
.destination-tags { display:flex; gap: var(--space-3); flex-wrap:wrap; }
.destination-tag { font-size: var(--text-xs); padding: var(--space-2) var(--space-4); border-radius: var(--radius-full); background: var(--am-bg-subtle); border:1px solid var(--am-border-soft); color: var(--am-text-tertiary); }
.destination-arrow { font-size: var(--text-xl); color: var(--am-brand); transition: transform var(--duration-md) var(--ease-spring); }
.home-destination-card:hover .destination-arrow { transform: translateX(4px); }
```

**Step 2:** `npm run test`, `npm run audit:cards:open`.

**Step 3:** Commit: `git commit -m "style(home): redesign destination cards with brand accents"`

### Task 10: Улучшить tool-grid и recent-panel

**Objective:** Единый ритм карточек инструментов, аккуратная recent-панель.

**Files:** Modify `src/styles/premium-flagship.css` (блок `HOME TOOLS`)

**Step 1:** Добавить:
```css
.premium-command-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-8); margin-top: var(--space-16); }
.premium-tool-card { padding: var(--space-12); border-radius: var(--radius-xl); background: var(--am-bg-card); border:1px solid var(--am-border-soft); box-shadow: var(--am-shadow-sm); display:flex; flex-direction:column; gap: var(--space-4); }
.premium-tool-card h3 { font-size: var(--text-lg); }
.premium-tool-card p { font-size: var(--text-sm); color: var(--am-text-secondary); }
.premium-inline-action { align-self:flex-start; margin-top: var(--space-2); padding: var(--space-3) var(--space-6); border-radius: var(--radius-full); border:1px solid var(--am-border-medium); background: var(--am-bg-subtle); color: var(--am-text-primary); font-weight: var(--weight-semibold); cursor:pointer; transition: background var(--duration-fast), border-color var(--duration-fast); }
.premium-inline-action:hover { background: var(--am-brand); color: var(--am-text-on-brand); border-color: var(--am-brand); }
.premium-recent-panel { margin-top: var(--space-16); padding: var(--space-12); border-radius: var(--radius-xl); background: var(--am-bg-subtle); border:1px solid var(--am-border-soft); }
.premium-section-head { display:flex; align-items:center; gap: var(--space-4); margin-bottom: var(--space-6); }
.premium-recent-list { display:grid; gap: var(--space-3); }
.premium-recent-item { display:flex; flex-direction:column; gap:2px; padding: var(--space-4) var(--space-6); border-radius: var(--radius-md); background: var(--am-bg-card); border:1px solid var(--am-border-soft); text-align:left; cursor:pointer; }
.premium-recent-item small { color: var(--am-text-tertiary); }
```

**Step 2:** `npm run audit:visual:iphone`, `npm run test`.

**Step 3:** Commit: `git commit -m "style(home): unify tool grid + recent panel rhythm"`

---

# Epic 4 — iPhone 15 Pro / 17 оптимизация

### Task 11: Добавить брейкпоинты 393 / 402 / 440px

**Objective:** Покрыть iPhone 15 Pro (393), iPhone 17 (402), 17 Pro Max (440).

**Files:** Modify `src/styles/premium-flagship.css` (в конец файла, после iOS-блока ~строка 653)

**Step 1:** Добавить:
```css
/* ══ iPhone 15 Pro (393×852) ══ */
@media (max-width: 393px) {
  .page-content { padding: 0 var(--space-6); }
  .premium-command-hero { padding: var(--space-12) var(--space-8); }
  .home-destination-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: var(--text-3xl); }
  .premium-command-metrics { grid-template-columns: 1fr; }
}

/* ══ iPhone 17 (402×874) ══ */
@media (max-width: 402px) {
  .home-destination-title { font-size: var(--text-xl); }
  .premium-tool-card { padding: var(--space-8); }
}

/* ══ iPhone 17 Pro Max (440×956) ══ */
@media (max-width: 440px) {
  .home-destination-grid { grid-template-columns: 1fr; }
  .premium-command-grid { grid-template-columns: 1fr; }
}
```

**Step 2:** `node scripts/iphone-audit.mjs` — прогнать профили 15 Pro / 17; ожидать 0 overflow.

**Step 3:** Commit: `git commit -m "feat(iphone): add 393/402/440px breakpoints"`

### Task 12: Dynamic Island + safe-area top/bottom

**Objective:** Navbar и hero корректно учитывают Dynamic Island на 15 Pro/17.

**Files:** Modify `src/styles/premium-flagship.css:642-653` (DI блок)

**Step 1:** Расширить блок — добавить 393/402:
```css
  @media (max-width: 440px) {
    @supports (padding: env(safe-area-inset-top)) and (env(safe-area-inset-top) > 24px) {
      .navbar { top: calc(env(safe-area-inset-top) + 12px) !important; }
      .page-content { padding-top: calc(env(safe-area-inset-top) + 4px) !important; }
      .premium-command-hero { margin-top: calc(env(safe-area-inset-top) * 0.25); }
    }
  }
```

**Step 2:** `node scripts/iphone-audit.mjs` (DI профиль) — navbar не перекрывает контент.

**Step 3:** Commit: `git commit -m "feat(iphone): robust Dynamic Island safe-area handling"`

### Task 13: GPU-оптимизация (backdrop-filter, will-change, tap)

**Objective:** Снизить нагрузку на GPU айфона, убрать tap-highlight, включить translate3d.

**Files:** Modify `src/styles/premium-flagship.css` (конец файла)

**Step 1:** Добавить:
```css
/* ══ iOS GPU & touch optimizations ══ */
* { -webkit-tap-highlight-color: transparent; }
button, a, [role="button"] { touch-action: manipulation; }

@media (max-width: 440px) {
  /* Lighter blur on mobile GPU */
  .glass, .glass-panel, .premium-command-hero, .modal-content,
  .disease-modal, .pharmacology-modal, .mobile-bottom-bar {
    backdrop-filter: blur(24px) saturate(1.4) !important;
    -webkit-backdrop-filter: blur(24px) saturate(1.4) !important;
  }
  /* Promote animated layers to GPU */
  .home-destination-card, .premium-tool-card, .glass,
  .mobile-bottom-bar, .navbar {
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .home-destination-card, .premium-tool-card, .premium-recent-item {
    will-change: transform;
  }
}

/* Long lists: skip rendering offscreen */
@media (max-width: 440px) {
  .catalog-grid > * { content-visibility: auto; contain-intrinsic-size: 320px; }
}
```

**Step 2:** `npm run audit:visual:iphone` (без регрессий блюра), `npm run bundle-budget-audit` (PASS).

**Step 3:** Commit: `git commit -m "perf(iphone): GPU/touch optimizations (blur, tap, will-change)"`

### Task 14: 100dvh + overscroll + scroll-производительность

**Objective:** Корректная высота вьюпорта, отключение bounce, плавный скролл.

**Files:** Modify `src/styles/premium-flagship.css` (body, строки 311-324) и `index.css`

**Step 1:** В `body` flagship.css убедиться `min-height: 100dvh;` (уже есть, строка 312). Добавить в `html`:
```css
html { -webkit-overflow-scrolling: touch; overscroll-behavior-y: none; }
```
и в `.App` добавить `min-height: 100dvh;` (уже есть).

**Step 2:** В `MobileBottomBar.tsx` scroll-обработчик уже `{ passive: true }` — ок. Добавить throttle через `requestAnimationFrame` внутри `updateVisibility` (обернуть `setIsVisible` вызов в `requestAnimationFrame`).

**Step 3:** `npm run test`, `npm run audit:touch-targets`.

**Step 4:** Commit: `git commit -m "perf: dvh + overscroll + rAF scroll throttle"`

---

# Epic 5 — Валидация, a11y, Lighthouse

### Task 15: Прогнать полный аудит-пакет

**Objective:** Убедиться, что все изменения не сломали аудиты.

**Step 1:** Запустить:
```bash
npm run audit:iphone
npm run audit:visual:iphone
npm run audit:touch-targets
npm run audit:pastel
npm run audit:cards:open
node scripts/iphone-overlap-audit.mjs
```
Ожидать: 0 errors / 0 warnings во всех.

**Step 2:** Зафиксировать результаты в комментарии к коммиту.

**Step 3:** Commit: `git commit -m "chore: audit pass after premium + iphone overhaul"` (если чисто) — иначе исправить найденное и повторить.

### Task 16: Typecheck + test + build + Lighthouse

**Objective:** Финальная гарантия сборки и производительности.

**Step 1:**
```bash
npm run typecheck   # PASS
npm run test        # PASS
npm run build       # PASS, бандл в норме
npm run lhci        # Lighthouse: Performance ≥ 0.95 на mobile-emulated iPhone
```

**Step 2:** Если Lighthouse Performance < 0.95 — вернуться к Task 13 (ещё снизить blur / убрать тяжёлые анимации на мобиле).

**Step 3:** Commit: `git commit -m "chore: green typecheck/test/build/lighthouse"` (при успехе).

---

## Files likely to change
- `src/styles/premium-flagship.css` (основной — токены + компоненты + iPhone)
- `src/styles/index.css` (legacy, минимально)
- `src/components/HomeSection.tsx` (разметка hero/metrics)
- `src/components/ToastSystem.tsx` (алиасы цветов)
- `src/components/MobileBottomBar.tsx` (rAF throttle)
- `src/components/DiseaseCard.tsx`, `src/components/PharmacologyModal.tsx` (am-card)

## Tests / validation
- Vitest: `npm run test`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- iPhone-аудиты: `audit:iphone`, `audit:visual:iphone`, `audit:touch-targets`, `iphone-overlap-audit`
- Палитра: `audit:pastel`
- Lighthouse: `npm run lhci`

## Risks / tradeoffs
- **backdrop-filter на мобиле** снижаем до 24px — визуально чуть менее "стеклянно", но критично для FPS на iPhone 15/17.
- **content-visibility** на каталоге может вызвать "прыжки" скролла при первом появлении — компенсируем `contain-intrinsic-size`.
- **Legacy-алиасы** (`--color-turquoise`) используются вне ToastSystem? — перед Task 3 прогнать `search_files` по всему `src` на `--color-turquoise|--color-emerald|--accent-rose` и обновить ВСЕ вхождения, иначе сломается.
- **Dynamic Island** `env(safe-area-inset-top)` > 24px — на 15 Pro/17 остров даёт ~59px; порог 24px покрывает и чёлку старых моделей.
- Каскад: `premium-flagship.css` грузится последним (App.tsx:7) — новые правила без `!important` перекроют legacy `index.css`, но НЕ перекроют существующие `!important` в flagship. Проверять коллизии.

## Open questions
- iPhone 17 точные CSS-размеры ещё официально не анонсированы (план исходит из 402×874 / 440×956 по утечкам) — брейкпоинты 402/440 выбраны с запасом; при выходе реальных спек скорректировать.
- Нужен ли отдельный `home-tablet` брейкпоинт (768–1024)? Вне scope этого задания (фокус на iPhone 15 Pro/17), но можно добавить отдельной задачей.
