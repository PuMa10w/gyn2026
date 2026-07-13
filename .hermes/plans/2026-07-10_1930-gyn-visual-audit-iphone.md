# GYN — Грандиозный план визуального аудита и премиум-оптимизации (iPhone 15 Pro / 17)

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Устранить выявленные визуальные/типографические/адаптивные дефекты на iPhone 15 Pro (393×852) и iPhone 17 / 17 Pro Max (440×956), довести типографику до читаемости (≥12px body), посадить модалки в вьюпорт и убрать перекрытия нижним баром — без регрессий пройденных аудитов.

**Architecture:** Вся стилистика — единый источник правды `src/styles/premium-flagship.css` (грузится последним, побеждает legacy `index.css`/`App.css`). Каталог — `CatalogSection.tsx`/карточки `.disease-card`; модалки — `DiseaseModal.tsx` (`.modal-content`), `PharmacologyModal.tsx`, `Questionnaire.tsx`; нижний бар — `MobileBottomBar.tsx` + `.mobile-bottom-bar`. Проверка — через уже готовые Playwright-аудиты + ручной замер шрифтов/overflow (см. "Tests").

**Tech Stack:** React 19 + Vite + TypeScript, CSS custom properties, Playwright (аудиты), Lighthouse CI.

---

## Current state — что показала визуальная инспекция (реальные замеры, iPhone 15 Pro / 17 Pro Max, light+dark)

Инспекция через headless Chromium (viewport 393×852 и 440×956), замеры computed styles:

| Метрика | Замер | Норма | Статус |
|---|---|---|---|
| Мин. шрифт (главная) | 9.6px | ≥12px | ❌ |
| Мин. шрифт (каталог) | 9.6px | ≥12px | ❌ |
| Элементов <12px на каталоге | **419** | 0 | ❌ |
| Мин. шрифт в disease-модалке | 10.24px | ≥12px | ❌ |
| Disease-модалка высота | **852px** | ≤801px (94% vh) | ❌ ВЫШЕ вьюпорта |
| Overlap контента с `.mobile-bottom-bar` | **1 hit** на каталоге | 0 | ❌ |
| Horizontal overflow | 0 | 0 | ✅ |
| Contrast (hero/карточки/табы) | все ≥3.2 | ≥3.2 | ✅ (предыдущие фиксы работают) |
| Dark/Light token-гамма | согласованна, hero contrast 18.47 | — | ✅ |

**Конкретные виновники мелкого шрифта (по классам, замерено на каталоге):**
- `.card-subtitle` — 200 вхождений <12px (подзаголовок карточки болезни)
- `.card-icd-badge` — 200 вхождений <12px (МКБ-10 бейдж)
- `.mobile-bottom-label` — 4 вхождения <12px (лейблы нижнего бара)
- в модалке: `card-subtitle`/`card-icd-badge` те же = 10.24px

**Геометрия каталога:** `grid-template-columns: 351.4px` (1 колонка на 393px). На 440px (17 Pro Max) это всё ещё 1 колонка — можно 2.

**Модалка:** `.modal-content` имеет `height`/min-height, который на iPhone даёт 852px при доступных 801px → нижняя часть (кнопка закрытия/последний блок) недоступна или режется safe-area.

---

# Epic A — Типографика и читаемость (самый критичный дефект)

### Task 1: Поднять базовый размер текста карточек каталога до ≥12px
**Objective:** `.card-subtitle` и `.card-icd-badge` не мельче 12px на мобиле.

**Files:** Modify `src/styles/premium-flagship.css` (секция disease-card / catalog, ~строки 1251-1360) и mobile-брейкпоинты (393/440).

**Step 1:** Найти текущие правила:
```bash
search_files("card-subtitle", "src/styles")
search_files("card-icd-badge", "src/styles")
```

**Step 2:** В блоке `.card-subtitle` / `.card-icd-badge` задать `font-size: var(--text-xs)` минимум 11px, а в `@media (max-width: 440px)` — `font-size: 12px` (или `max(12px, var(--text-xs))`).

**Step 3:** Проверить, что на десктопе (≥768px) размер не раздулся (там было ок).

**Step 4:** Замерить: `node`-инспектор (см. Tests) → `fontsUnder12` на каталоге должен упасть с 419 до <50.

**Step 5:** Commit: `style(typography): enforce ≥12px on catalog card subtitle/icd badge`

### Task 2: Поднять лейблы нижнего бара до ≥11px (минимум 12px на активном)
**Objective:** `.mobile-bottom-label` читаем на iPhone.

**Files:** Modify `src/styles/premium-flagship.css` (`.mobile-bottom-label`, ~строки 1700-1720) + `@media (max-width:440px)`.

**Step 1:** Задать `font-size: 11px` (было меньше), active — `12px`.

**Step 2:** Замерить `mobile-bottom-label` computed font-size на 393px = 11–12px.

**Step 3:** Commit: `style(mobile-bar): readable bottom labels`

### Task 3: Унифицировать минимальный размер body-текста через токен
**Objective:** Гарантировать, что ни один видимый текст не мельче 12px (кроме декоративных eyebrow, которые и так uppercase+tracked).

**Files:** Modify `src/styles/premium-flagship.css` — добавить глобальный страхующий блок:
```css
@media (max-width: 440px) {
  /* Никто не мельче 12px на телефоне (WCAG AA) */
  .card-desc, .card-subtitle, .card-icd-badge,
  .content-card p, .structured-item p, .pubmed-abstract,
  .modal-body p, .guideline-card p { font-size: max(12px, var(--text-sm)); }
}
```

**Step 1:** Добавить блок в конец файла (после iOS-GPU блока).

**Step 2:** Прогнать инспектор → `minFont` на каталоге и в модалке ≥12px.

**Step 3:** Commit: `style(typography): floor all body text at 12px on mobile`

---

# Epic B — Геометрия модалок под iPhone (модалка выше вьюпорта!)

### Task 4: Посадить disease-модалку в доступную высоту
**Objective:** `.modal-content` не превышает `94dvh` и корректно скроллится, кнопка закрытия и последний блок видимы.

**Files:** Modify `src/styles/premium-flagship.css` (`.modal-content`, ~строки 1433 / light-theme 2200) + `DiseaseModal.tsx` (проверить inline max-height).

**Step 1:** Замерить текущее: `modalH=852` при `innerHeight=852` → `max-height` модалки = 100% без учёта safe-area. Задать:
```css
.modal-content {
  max-height: calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 24px);
  /* или */
  max-height: 94dvh;
}
```
и в `.modal-body { overflow-y: auto; }` (уже есть) убедиться, что скролл работает, а не режет.

**Step 2:** Учесть Dynamic Island: на 15 Pro/17 `env(safe-area-inset-top)` ≈ 59px — модалка должна стартовать ниже острова (уже есть блок DI, проверить, что не конфликтует).

**Step 3:** Замерить на 393×852: `modalH ≤ 801`. Открыть модалку, прокрутить до конца, убедиться что кнопка закрытия (`×`) и последний блок достижимы тапом (без перекрытия bottom-bar — модалка перекрывает бар, но внутри неё scroll должен доходить до низа).

**Step 4:** Проверить `iphone-overlap-audit` и `cards-open-audit` — PASS.

**Step 5:** Commit: `fix(modal): bound disease-modal to dvh + safe-area`

### Task 5: То же для PharmacologyModal и Questionnaire
**Objective:** Те же ограничения высоты для `.pharmacology-modal` и `.questionnaire-modal`.

**Files:** Modify `src/styles/premium-flagship.css` (общий селектор `.modal-content, .pharmacology-modal, .questionnaire-modal`).

**Step 1:** Применить `max-height: 94dvh` к общему селектору модалок (уже частично есть — проверить и унифицировать).

**Step 2:** Замерить на 440×956 (17 Pro Max) и 393×852.

**Step 3:** Commit: `fix(modal): unify dvh bound across all modals`

---

# Epic C — Адаптив каталога и перекрытия

### Task 6: Убрать overlap контента с нижним баром
**Objective:** Последняя карточка/кнопка каталога не перекрывается `.mobile-bottom-bar` (высота 72px).

**Files:** Modify `src/styles/premium-flagship.css` — `.catalog-shell` / `.cards-grid` / `.page-content` добавить `padding-bottom: calc(72px + env(safe-area-inset-bottom) + 16px)` в `@media (max-width: 440px)`.

**Step 1:** Добавить padding-bottom на скролл-контейнер каталога.

**Step 2:** Замерить `fixedOverlapHits` на каталоге = 0.

**Step 3:** Commit: `fix(catalog): clear bottom-bar overlap with scroll padding`

### Task 7: 2 колонки каталога на iPhone 17 Pro Max (440px)
**Objective:** На 440px показывать 2 колонки карточек (сейчас 1, `grid-template-columns: 351px`).

**Files:** Modify `src/styles/premium-flagship.css` `@media (max-width: 440px)` (или отдельный `@media (min-width:430px) and (max-width:480px)`).

**Step 1:** Задать `.cards-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-4); }` для 440px.

**Step 2:** Проверить, что на 393px остаётся 1 колонка (не ломать 15 Pro).

**Step 3:** Замерить `gridCols` на 440px = `1fr 1fr`.

**Step 4:** Commit: `feat(catalog): 2-column grid on iPhone 17 Pro Max`

### Task 8: content-visibility уже есть — проверить прыжки скролла
**Objective:** Убедиться, что `content-visibility: auto` на каталоге не даёт "прыжков" (была оговорка в рисках плана).

**Files:** `src/styles/premium-flagship.css` — `.catalog-grid > *` (блок GPU, ~Task 13).

**Step 1:** Прокрутить каталог на 393px, замерить, что карточки не "подпрыгивают" при появлении (визуально + `contain-intrinsic-size` задан корректно, сейчас `320px` — проверить реальную высоту карточки, возможно нужно 168px как в брейкпоинте 2459).

**Step 2:** Если прыжки — выставить `contain-intrinsic-size: 168px`.

**Step 3:** Commit: `perf(catalog): tune content-visibility intrinsic size`

---

# Epic D — Гамма и полировка (экспертный взгляд)

### Task 9: Проверить saturated/neon-переборы и приглушить при необходимости
**Objective:** Убедиться, что `--am-teal #1F9C97` и `--am-amber #936318` не "кричат" на glass-поверхностях; при необходимости ввести `--am-teal-muted` / `--am-amber-muted` для второстепенных акцентов.

**Files:** Modify `src/styles/premium-flagship.css` `:root` + `[data-theme='dark']` (добавить muted-варианты), обновить места с яркими акцентами (badges, borders).

**Step 1:** Через браузер визуально оценить teal/amber на hero/destination/tool-карточках. Если перебор — добавить muted-токены и применить к `.guideline-badge`, `.destination-tag`, borders.

**Step 2:** Замерить contrast muted-акцентов (≥3.2 на их фоне).

**Step 3:** Commit: `style(palette): introduce muted teal/amber accents`

### Task 10: Унифицировать радиусы скругления (дизайн-система)
**Objective:** Все карточки/кнопки используют единый набор радиусов (`--radius-*`).

**Files:** Audit через `search_files("--radius-", "src/styles")` — найти хардкод `border-radius: 26px` (App.css:500 `.disease-card`), `999px` и т.п., привести к токенам.

**Step 1:** Найти хардкод радиусов вне токенов.

**Step 2:** Заменить на `var(--radius-xl)` / `var(--radius-full)` где уместно (не ломая специфичные формы).

**Step 3:** Commit: `style: tokenize border-radius across components`

### Task 11: Hero/дestination/tool ритм — финальная визуальная шлифовка
**Objective:** Проверить отступы, hover/tap feedback, тени на главной (уже реализовано в `premium-effects.css`) — выровнять gaps и padding между секциями под единый ритм.

**Files:** `src/styles/premium-effects.css` (HOME HERO / DESTINATION / TOOLS секции).

**Step 1:** Визуально (через браузер, скриншоты 393/440) сверить rhythm секций; подровнять `gap`/`margin-top` к единому шагу (`--space-16` между блоками).

**Step 2:** Прогнать `iphone-visual-audit` (не падает на 3D атлас — уже почищено).

**Step 3:** Commit: `style(home): harmonize section rhythm`

---

# Epic E — Валидация и Lighthouse

### Task 12: Полный прогон аудит-пакета + инспектор типографики
**Objective:** Убедиться, что правки не сломали пройденные аудиты и подняли читаемость.

**Step 1:**
```bash
npm run build
export AUDIT_URL="http://127.0.0.1:4173"   # поднять npx vite preview --port 4173
node scripts/iphone-audit.mjs
node scripts/pastel-consistency-audit.mjs
node scripts/cards-open-audit.mjs
node scripts/touch-targets-audit.mjs
node scripts/iphone-overlap-audit.mjs
node scripts/readability-audit.mjs
```
Ожидать: все PASS, `fontsUnder12` (каталог) < 50, `modalH ≤ 801`, `fixedOverlapHits = 0`.

**Step 2:** Lighthouse: `npm run lhci` (Performance ≥ 0.95 на mobile-emulated iPhone).

**Step 3:** Commit: `chore: typography + modal + catalog fixes, audits green`

---

## Files likely to change
- `src/styles/premium-flagship.css` (основной — типографика, модалки, каталог, гамма, радиусы)
- `src/styles/premium-effects.css` (ритм главной)
- `src/components/DiseaseModal.tsx`, `PharmacologyModal.tsx`, `Questionnaire.tsx` (проверка inline max-height)
- `src/components/MobileBottomBar.tsx` (если нужен padding-bottom контейнера)

## Tests / validation
- **Инспектор типографики** (одноразовый скрипт `scripts/_inspect.mjs`, как использовали при аудите): замеряет `minFont`, `fontsUnder12`, `modalH`, `fixedOverlapHits`, `gridCols` на 393/440px. Критерий успеха: `minFont≥12`, `fontsUnder12<50`, `modalH≤801`, `fixedOverlapHits=0`.
- Vitest: `npm run test` (78 тестов, должны остаться PASS)
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Аудиты: `iphone`, `pastel`, `cards:open`, `touch-targets`, `iphone-overlap`, `readability`
- Lighthouse: `npm run lhci`

## Risks / tradeoffs
- **Поднятие шрифта до 12px** на каталоге (200 карточек) увеличит высоту списка — compensated `content-visibility` (Task 8).
- **2 колонки на 440px** — проверить, что карточки не становятся слишком узкими (<150px); если да — оставить 1 колонку до 480px.
- **max-height модалки через dvh** — на старых iOS (<16) `dvh` не поддерживается; fallback на `vh` уже есть в коде (`min-height: 100dvh` с `100vh` выше).
- **Гамма teal/amber** — менять осторожно, только если визуально "кричит"; лучше muted-варианты, не трогать base-токены.
- Каскад: `premium-flagship.css` грузится последним — новые правила без `!important` перекроют legacy, но НЕ перекроют существующие `!important` (проверять коллизии через `search_files("!important", "src/styles")`).
