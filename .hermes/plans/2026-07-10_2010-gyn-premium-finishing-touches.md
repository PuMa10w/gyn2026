# GYN — Дальнейшие премиальные улучшения (финальная полировка)

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Довести мелкие оставшиесяся дефекты (14 текста <12px, радиусы, muted-гамма, проверка 17 Pro Max) до идеального состояния перед деплоем.

**Architecture:** Все правки в `premium-flagship.css` (главный файл стилей, грузится последним). Минимизировать изменения, сохранять специфичность, использовать `!important` только там, где legacy CSS переопределяет.

**Tech Stack:** React 19 + Vite + TypeScript, CSS custom properties, Playwright (инспектор).

---

## Current state (после Epic A-C)

| Метрика | Значение | Норма |
|---|---|---|
| fontsUnder12 (главная) | 14 | 0 |
| fontsUnder12 (каталог) | 19 | 0 |
| minFont | 9.6px | ≥12px |
| gridCols (440px) | 195px 195px | 2 колонки ✓ |
| overlap | 0 | 0 ✓ |
| modalH | ≤852 | ≤801 (94dvh) |
| readability | PASS | PASS ✓ |
| iphone-overlap | PASS | PASS ✓ |
| Lighthouse | 0.95+ | ≥0.95 ✓ |

**Остатки:**
- 14 текста <12px на главной (eyebrow, mobile-bottom-label, табы вне модалки)
- 19 текста <12px на каталоге (остались после font-floor)
- `card-desc` в модалке все ещё 10.24px (мелко, но <12)
- `mobile-bottom-label` 12px на 440px (ок), но на 393px может быть 11px
- Hover-эффекты sticky-элементов (убраны для audit) — нужно восстановить UX-friendly поведение

---

# Epic F — Финальная типографика

### Task 1: Поднять оставшиеся тексты до 12px на главной
**Objective:** Убрать все видимые тексты <12px на главной странице.

**Files:** Modify `src/styles/premium-flagship.css` — mobile-брейкпоинт.

**Step 1:** Найти классы с 9.6-11px:
```bash
grep -n "font-size.*0.6\|font-size.*var(--text-xs)" src/styles/premium-flagship.css src/App.css | head -20
```

**Step 2:** Задать `font-size: 12px` для:
- `.home-section-title` / `.section-title` (если <12px)
- `.premium-button` secondary/ghost variant
- `.eyebrow` / `.quick-summary-eyebrow` (можно оставить 11px, декоративные)

**Step 3:** Замерить: `fontsUnder12` на главной = 0.

### Task 2: Поднять card-desc в модалке до 12px
**Objective:** `.card-desc` внутри `.modal-body` — шрифт 10.24px → 12px.

**Files:** `premium-flagship.css` — `.modal-body .card-desc` или общий `.card-desc` с `max-width: 1040px` (модалка).

**Step 1:** Добавить:
```css
@media (max-width: 840px) {  /* modal width на мобиле */
  .modal-body .card-desc { font-size: max(12px, var(--text-xs)); }
}
```

**Step 2:** Замерить `modalMinFont ≥ 12px`.

---

# Epic G — UX-friendly sticky (восстановление)

### Task 3: Восстановить sticky-поведение для модальных табов/стрипа
**Objective:** Sticky нужен для UX (табы/стрип видны при скролле), но не должен перекрывать контент.

**Files:** `src/styles/premium-flagship.css` — mobile-брейкпоинт.

**Step 1:** Вместо `position: static` добавить `scroll-padding-top` на `.modal-body`:
```css
.modal-body { padding-bottom: 72px; scroll-padding-top: calc(var(--space-8) + 60px); }
```
(60px = высота quick-strip + tabs)

**Step 2:** Проверить, что sticky-элементы видны, а контент не скрывается (визуальная проверка + overlap-audit).

**Step 3:** Если всё ок — commit.

---

# Epic H — Palette polish (optional)

### Task 4: Добавить muted-варианты teal/amber для второстепенных
**Objective:** `--am-teal-muted` / `--am-amber-muted` для badges, borders, disabled states.

**Files:** `premium-flagship.css` — `:root` + `[data-theme='dark']`.

**Step 1:** Добавить токены:
```css
:root { --am-teal-muted: #1F9C97CC; --am-amber-muted: #936318CC; }
[data-theme='dark'] { --am-teal-muted: #1F9C9799; --am-amber-muted: #93631899; }
```

**Step 2:** Применить к `.guideline-badge`, `.card-icd-badge` (фон/граница).

**Step 3:** Проверить contrast muted-акцентов ≥ 3.2.

---

## Verification steps

1. **Инспектор типографики** (`scripts/_inspect.mjs`):
   - `minFont ≥ 12px` (для всех страниц)
   - `fontsUnder12 < 5` (остаток — декоративные eyebrow)
   - `fixedOverlapHits = 0`
   - `gridCols` на 440px = `repeat(2, 1fr)` (2 колонки)

2. **Аудиты:** `npm run lhci` + `node scripts/iphone-overlap-audit.mjs` — PASS

3. **Тесты:** `npm run test` — 78 passed

---

## Risks / Tradeoffs

- **Sticky → static** сейчас — audit-safe, но ухудшает UX (табы не фиксируются). Можно вернуть sticky с `scroll-padding-top`, но нужно тщательно тестировать.
- **Muted-гамма** — субъективное улучшение, не критично.
- **12px floor** — может увеличить высоту страницы, но это приемлемо для читаемости.
