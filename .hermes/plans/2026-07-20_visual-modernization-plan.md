# GYN Clinical — Визуальная модернизация и устранение конфликтов стилей (2026-07-20)

> **Цель:** устранить "сбитые стили" — конфликт legacy `App.css` (7959 строк) с `premium-flagship.css`.
> Объективно найдено через Playwright-аудит всех экранов (home/catalog/disease/pharma/questionnaire, light+dark).

## 🔍 Найденные визуальные дефекты (измерено)

| # | Дефект | Причина | Экран |
|---|---|---|---|
| 1 | Карточки "Гинекология"/"Акушерство" имеют **тёмный фон** `rgba(46,33,38,0.98)` на светлой теме | `.home-destination-card.is-gynecology` в `App.css:321` (специфичность 0,2,0) побеждает `.home-destination-card{background:var(--am-bg-card)}` в flagship (0,1,0) | Home |
| 2 | Текст на этих карточках тёмный `rgb(30,23,51)` на тёмном фоне → **низкий контраст** | следствие #1 | Home |
| 3 | `.premium-card` **вообще нет базовых стилей** (ни в flagship, ни в App.css) → карточки прозрачные/без фона | компонент `PremiumCard` рендерит класс, но CSS отсутствует | везде |
| 4 | `.disease-card` border `rgba(255,255,255,0.48)` — почти невидимая белая граница на светлом фоне | `premium-flagship.css` disease-card border | Catalog/Modal |

## 📋 Корень проблемы
`App.css` (legacy, 7959 строк) дублирует стили для ~52 селекторов flagship-компонентов:
- `.disease-card` — 35 правил, `.navbar` — 190, `.catalog-header` — 22, `.category-chip` — 15, `.tab-btn` — 13, `.modal-content` — 20, `.home-destination-card.*` — 8.
Legacy грузится ДО flagship, но при составной специфичности (`.is-gynecology`) побеждает → "сбитые" стили.

## 📊 Результаты (замерено после правок 2026-07-20)

| Дефект | Статус | Решение |
|---|---|---|
| #1 `.home-destination-card.is-gynecology` тёмный фон на светлой теме | ✅ FIXED | CSS cascade layers: legacy < premium |
| #2 Низкий контраст текста на тёмных карточках (light) | ✅ FIXED | следствие #1 |
| #3 `.premium-card` без базовых стилей (transparent) | ✅ FIXED | добавлены базовые стили + тональные варианты |
| #4 `.disease-card` border `rgba(255,255,255,0.48)` невидимый | ✅ FIXED | → `var(--am-border-soft)` light / `var(--am-border-medium)` dark |

**Реализовано:**
- `src/styles/index-layers.css` — `@layer legacy, premium` + `@import` всех CSS в слои. Legacy (index.css, App.css, spacing.css) теперь ВСЕГДА ниже premium независимо от специфичности.
- `src/App.tsx` — импорт заменён на единый `index-layers.css`.
- `premium-flagship.css` — добавлены `.premium-card` (base + `--accent/--warning/--danger/--success`), исправлен border disease-card.

**Проверки:**
- Mobile Lighthouse Perf: **100** (LCP 541ms, TBT 0, CLS 0) — подтверждено 2 повторными замерами
- `npm run verify:premium`: 78 tests pass, 0 errors
- `npm run audit:palette-contrast`: 26/26 pass (0 failures)
- `npm run typecheck` / `npm run lint`: ✅
- `accessibility-smoke`: ok (dialogs labelled, 0 unlabeled)
- Визуальный аудит всех экранов (home/catalog/disease/pharma/questionnaire, light+dark): 0 transparent-карточек, 0 console-ошибок

**Корень решён:** legacy `App.css` (7959 строк, ~52 конфликтующих селектора) больше не перебивает премиум-дизайн — каскадные слои устранили ВСЕ конфликты разом без ручной чистки.
