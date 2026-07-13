# GYN — План реализации визуального аудита (iPhone 15 Pro / 17) + проверка перед деплоем

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Довести типографику до читаемости (≥12px), посадить мобильные модалки в вьюпорт со safe-area, убрать overlap нижнего бара с каталогом, выровнять гамму/радиусы — и перед деплоем прогнать полный аудит-пакет + Lighthouse без регрессий.

**Architecture:** Единый источник правды `src/styles/premium-flagship.css` (грузится последним, побеждает legacy `index.css`/`App.css`). Каталог — `CatalogSection.tsx`/карточки `.disease-card`; модалки — `DiseaseModal.tsx` (`.modal-content` + `.mobile-sheet`), `PharmacologyModal.tsx`, `Questionnaire.tsx`; бар — `.mobile-bottom-bar`. Валидация — готовые Playwright-аудиты + Lighthouse CI.

**Tech Stack:** React 19 + Vite + TypeScript, CSS custom properties, Playwright, Lighthouse CI.

---

## Текущий статус (на момент плана)
- **Epic A (типографика) — УЖЕ ПРИМЕНЕНО** к `src/styles/premium-flagship.css`, но **НЕ закоммичено**:
  - `.card-subtitle` / `.card-icd-badge` → `font-size: max(12px, var(--text-xs))` в `@media (max-width:440px)`.
  - `.mobile-bottom-label` → `11px` (+ `12px` в `@media (max-width:440px)`).
  - Глобальный floor в iOS-GPU блоке: `.card-desc,.card-subtitle,.card-icd-badge,.content-card p,.structured-item p,.pubmed-abstract,.modal-body p,.guideline-card p,.quick-summary-eyebrow { font-size: max(12px, var(--text-sm)) }`.
  - ⚠️ Нужно пересобрать + замерить, что `fontsUnder12` на каталоге упал с 419 до <50, и `modalMinFont ≥ 12`.

## Реальные замеры (из визуальной инспекции, iPhone 15 Pro / 17 Pro Max)
| Метрика | Замер | Норма |
|---|---|---|
| Мин. шрифт (каталог/модалка) | 9.6 / 10.24px | ≥12px |
| Элементов <12px на каталоге | **419** | 0 |
| Disease-модалка высота | **852px** (mobile-sheet = `max-height:100dvh`) | ≤ `100dvh − safe-area` |
| Overlap с `.mobile-bottom-bar` | **1 hit** на каталоге | 0 |
| gridCols (393px / 440px) | `351px` (1 кол.) / уже есть `repeat(2,1fr)` где-то | 2 кол. на 440px |
| Horizontal overflow | 0 | 0 ✅ |
| Contrast hero/карточки/табы | все ≥3.2 ✅ | — |

**Ключевые места (точно):**
- `.mobile-sheet` — `src/styles/premium-flagship.css:2573` → `max-height: 100dvh` (ВОТ причина 852px). Править здесь.
- `.modal-content` desktop — `:1453` (`max-height: min(90dvh,920px)` — ок).
- `.cards-grid` 2 кол. — `:2629` (уже есть, проверить под какой breakpoint, возможно ≥430px).
- `.mobile-bottom-label` — `:3166`.
- iOS-GPU блок (content-visibility) — `:3394`.

---

# Epic B — Геометрия мобильных модалок (ВЫШЕ вьюпорта!)

### Task 4: Посадить `.mobile-sheet` в доступную высоту + safe-area
**Objective:** Модалка на iPhone не превышает `100dvh` за вычетом safe-area, контент скроллится до конца, кнопка закрытия достижима.

**Files:** Modify `src/styles/premium-flagship.css:2573` (`.modal-content` внутри mobile breakpoint).

**Step 1:** Заменить:
```css
.modal-content {
  width: 100vw;
  max-height: 100dvh;
  border-radius: 0;
  border: none;
}
```
на:
```css
.modal-content {
  width: 100vw;
  max-height: calc(100dvh - env(safe-area-inset-bottom, 0px));
  border-radius: 0;
  border: none;
  /* компенсируем высоту .mobile-bottom-bar (72px) + safe-area,
     чтобы последний блок/кнопка закрытия не уходили под бар */
  padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
}
```
И убедиться, что `.modal-body { overflow-y: auto }` (уже есть, :1572) даёт внутренний скролл.

**Step 2:** Замерить на 393×852: `modalH ≤ innerHeight` (т.е. ≤852, но с safe-area-низом контент доходит до верха бара). Открыть модалку, скроллить до конца — кнопка `×` и последний блок тапаемы.

**Step 3:** Прогнать `node scripts/iphone-overlap-audit.mjs` и `node scripts/cards-open-audit.mjs` — PASS.

**Step 4:** Commit: `fix(modal): bound mobile-sheet to dvh + safe-area, clear bottom-bar`

### Task 5: Унифицировать высоту Pharmacology/Questionnaire модалок
**Objective:** Те же ограничения для `.pharmacology-modal` / `.questionnaire-modal` (они тоже `.modal-content` + `.mobile-sheet` → правка Task 4 покрывает автоматически, но проверить).

**Step 1:** Открыть PharmacologyModal и Questionnaire на 393px, замерить `modalH ≤ innerHeight`.

**Step 2:** Если отличаются — добавить общий селектор `.pharmacology-modal, .questionnaire-modal` с тем же `max-height`/`padding-bottom`.

**Step 3:** Commit: `fix(modal): align pharma/questionnaire sheet height`

---

# Epic C — Адаптив каталога и перекрытия

### Task 6: Убрать overlap контента с нижним баром
**Objective:** Последняя карточка/кнопка каталога не перекрывается `.mobile-bottom-bar` (72px).

**Files:** Modify `src/styles/premium-flagship.css` — `.catalog-shell` / `.page-content` / `.cards-grid` добавить `padding-bottom` в `@media (max-width:440px)`.

**Step 1:** Найти скролл-контейнер каталога (`search_files("catalog-shell", "src/styles")`) и добавить:
```css
@media (max-width: 440px) {
  .catalog-shell, .cards-grid { padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px) + 16px); }
}
```

**Step 2:** Замерить `fixedOverlapHits` на каталоге = 0.

**Step 3:** Commit: `fix(catalog): clear bottom-bar overlap`

### Task 7: Проверить/довести 2 колонки на 440px
**Objective:** На 440px (17 Pro Max) каталог = 2 колонки; на 393px (15 Pro) = 1 колонка.

**Files:** `src/styles/premium-flagship.css:2629` (уже `repeat(2,1fr)`) — проверить, под какой `@media` он стоит.

**Step 1:** Прочитать контекст 2620–2640. Если 2 кол. уже включаются при ≤440px — ок. Если при ≤480px — сузить до 440px (чтобы 15 Pro оставался 1 кол.).

**Step 2:** Замерить `gridCols` на 440px = `1fr 1fr`, на 393px = `351px` (1 кол.).

**Step 3:** Commit: `feat(catalog): 2-col on 17 Pro Max, 1-col on 15 Pro`

### Task 8: content-visibility — убрать прыжки скролла
**Objective:** `contain-intrinsic-size: 320px` соответствует реальной высоте карточки (на мобиле `.disease-card min-height:168px`).

**Files:** `src/styles/premium-flagship.css:3394`.

**Step 1:** Заменить `contain-intrinsic-size: 320px` → `contain-intrinsic-size: 168px` (реальная высота карточки на 393px).

**Step 2:** Прокрутить каталог на 393px — карточки не "подпрыгивают" при появлении.

**Step 3:** Commit: `perf(catalog): tune intrinsic size to card height`

---

# Epic D — Гамма и полировка

### Task 9: Muted teal/amber для второстепенных акцентов
**Objective:** Убедиться, что `--am-teal #1F9C97` / `--am-amber #936318` не "кричат" на glass; при необходимости ввести muted-варианты для badges/borders.

**Files:** `src/styles/premium-flagship.css` `:root` + `[data-theme='dark']` + места использования (`.guideline-badge`, `.destination-tag`, `.card-icd-badge`).

**Step 1:** Визуально (браузер, скриншоты 393/440) оценить teal/amber на hero/destination/tool. Если перебор — добавить `--am-teal-muted` / `--am-amber-muted` и применить к второстепенным.

**Step 2:** Замерить contrast muted-акцентов ≥3.2 на фоне.

**Step 3:** Commit: `style(palette): introduce muted teal/amber accents`

### Task 10: Токенизировать хардкод радиусов
**Objective:** Все `border-radius` — через `--radius-*` (найти хардкод вне токенов).

**Files:** `search_files("--radius-", "src/styles")` + `search_files("border-radius: [0-9]", "src/styles")`.

**Step 1:** Найти хардкод (напр. App.css:500 `.disease-card border-radius:26px`).

**Step 2:** Заменить на `var(--radius-xl)` где уместно (не ломая специфичные формы).

**Step 3:** Commit: `style: tokenize border-radius`

### Task 11: Ритм главной (HOME HERO/DESTINATION/TOOLS)
**Objective:** Выровнять gaps/padding секций под единый шаг (`--space-16`).

**Files:** `src/styles/premium-effects.css` (HOME HERO/DESTINATION/TOOLS).

**Step 1:** Визуально сверить rhythm на 393/440; подровнять `margin-top` между блоками.

**Step 2:** `node scripts/iphone-visual-audit.mjs` — не падает.

**Step 3:** Commit: `style(home): harmonize section rhythm`

---

# Epic E — Проверка перед деплоем (ОБЯЗАТЕЛЬНО)

### Task 12: Полный аудит-пакет + инспектор типографики
**Objective:** Подтвердить, что всё зелёное и метрики улучшились.

**Step 1:** Собрать + поднять preview:
```bash
npm run build
npx vite preview --port 4173 --host 127.0.0.1 &
export AUDIT_URL="http://127.0.0.1:4173"
```
**Step 2:** Прогнать (ожидать PASS / улучшение метрик):
```bash
node scripts/iphone-audit.mjs
node scripts/pastel-consistency-audit.mjs
node scripts/cards-open-audit.mjs
node scripts/touch-targets-audit.mjs
node scripts/iphone-overlap-audit.mjs
node scripts/readability-audit.mjs
```
Критерии успеха инспектора: `minFont≥12`, `fontsUnder12(catalog)<50`, `modalH≤innerHeight`, `fixedOverlapHits=0`.

**Step 3:** Typecheck + test + build:
```bash
npm run typecheck   # PASS
npm run test        # 78 passed
npm run build       # PASS
```

### Task 13: Lighthouse (Performance ≥ 0.95)
**Step 1:** `npm run lhci` — 3 прогона, median uploaded, healthcheck passed.

**Step 2:** Если Performance < 0.95 — вернуться к Task 8 (content-visibility) / снизить blur на мобиле.

### Task 14: Финальный коммит всех правок
**Step 1:** `git add -A && git commit -m "premium: typography floor 12px, modal dvh+safe-area, catalog overlap/grid, palette polish"`

---

## Files likely to change
- `src/styles/premium-flagship.css` (типографика ✅применено/не закоммичено, модалки, каталог, гамма, радиусы)
- `src/styles/premium-effects.css` (ритм главной)
- (возможно) `src/components/DiseaseModal.tsx`, `PharmacologyModal.tsx`, `Questionnaire.tsx` — только если понадобится inline max-height (скорее нет, правка CSS покрывает)

## Tests / validation
- **Инспектор типографики** (`scripts/_inspect.mjs`, одноразовый): замер `minFont`, `fontsUnder12`, `modalH`, `fixedOverlapHits`, `gridCols` на 393/440px. Критерий: `minFont≥12`, `fontsUnder12<50`, `modalH≤innerHeight`, `fixedOverlapHits=0`.
- Vitest: `npm run test` (78)
- Typecheck / Build
- Аудиты: iphone, pastel, cards:open, touch-targets, iphone-overlap, readability
- Lighthouse: `npm run lhci`

## Risks / tradeoffs
- **Поднятие шрифта до 12px** на 200 карточках увеличит высоту списка — компенсировано `content-visibility` (Task 8, `contain-intrinsic-size:168px`).
- **2 колонки на 440px** — проверить, что карточки не уже ~150px; если да — оставить 1 кол. до 480px.
- **max-height модалки через dvh** — на iOS <16 `dvh` нет, есть `vh` (fallback в коде `100vh` выше `100dvh`).
- **Гамма teal/amber** — менять осторожно, только muted-варианты, не трогать base-токены.
- Каскад: `premium-flagship.css` последний — новые правила без `!important` побеждают legacy, но НЕ перекрывают существующие `!important` (проверять `search_files("!important","src/styles")`).
