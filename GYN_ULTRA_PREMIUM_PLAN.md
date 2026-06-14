# GYN Clinical — Ultra Premium Upgrade Plan 2026

## 🎯 Executive Summary

**Текущее состояние:** Базовая PWA готова (30 gynChunks + obsChunks, 200+ препаратов, 50+ шкал, CommandSearch по всему сайту), работает на https://gyn-clinical.pages.dev.

**Цель:** Довести до ультра-премиум уровня с premium UI/UX, AI-диагностикой, 3D-атласом, оффлайн-режимом и production-качеством.

**Последний деплой:** 13 июня 2026, коммит `d155841`, CI зелёный ✅

---

## 📊 Анализ текущего состояния проекта

### ✅ Реализовано
- ✅ CommandSearch с поиском по болезням, препаратам, шкалам (lazy loading)
- ✅ DiseaseModal с 12 вкладками: Кратко, Диагностика, УЗИ, Лечение, Ведение, Пациентке, 3D-атлас, AI-помощник
- ✅ PharmacologyModal с фильтрами по сценариям (8 категорий), поиском, взаимодействиями
- ✅ PremiumButton с shimmer-эффектами
- ✅ 3D-органы на Three.js (Organ3DViewer)
- ✅ VoiceNoteRecorder (Web Speech API)
- ✅ AIClinicalAssistant (шаблоны текста)
- ✅ PWA manifest + service worker
- ✅ Dark/Light theme
- ✅ Автодеплой CI/CD

### ⚠️ Текущие проблемы
- **CSS debt:** 972 строки в `index.css`, множественные файлы стилей с дублированием
- **Node.js 20** — deprecated (end-of-life September 2026)
- **Bundle budget:** CSS превышает бюджет на 42KB (362KB vs 320KB лимит)
- **three-vendor.js:** 518KB (нужно code-splitting)
- **3D-атлас** — есть, но не привязан к конкретным болезням в DiseaseModal
- **Voice Input** — есть в отдельном компоненте, но не интегрирован в поиск
- **AI-ассистент** — только шаблоны, без LLM-генерации
- **Нет push-уведомлений** для кэш-обновлений

---

## 🚀 План улучшений (6+ фаз)

### ФАЗА 1: Design System Completion (1-2 дня)

**Проблема:** Цвета, spacing, elevation описаны в design-system.md, но не привязаны к реальному CSS.

**Задачи:**
- [ ] Создать `src/styles/design-tokens.css` — вынести все цвета из index.css в CSS-переменные
- [ ] Создать `src/styles/spacing.css` — система отступов под iPhone breakpoints
- [ ] Унифицировать градиенты: `--gradient-premium`, `--gradient-turquoise-emerald`
- [ ] Убрать дублирование в `premium-unified.css`, `ultra-premium-v9.css`, `clinical-v1-4-skin.css`, `premium-flagship.css`
- [ ] Склеить в один `src/styles/clinical-premium.css`
- [ ] Добавить CSS Layers для isolation стилей

**Файлы:**
```
src/styles/
  ├─ design-tokens.css (новый)
  ├─ spacing.css (новый)
  ├─ motion.css (существует, улучшить)
  └─ clinical-premium.css (объединить)
```

---

### ФАЗА 2: Buttons Premium + Shimmer (0.5 дня)

**Проблема:** PremiumButton есть, но не везде используется. Нужны shimmer-эффекты на всех CTA.

**Задачи:**
- [ ] Заменить все `<button className="btn-*` на `<PremiumButton>`
- [ ] Добавить shimmer-эффект в `.workbench-command-card` при hover
- [ ] Добавить `.magnetic` анимацию на карточки болезней
- [ ] Улучшить touch target до 44×44px для мобилок

**Компоненты:**
- `src/components/PremiumButton.tsx` — улучшить micro-interactions
- `src/components/DiseaseCard.tsx` — добавить shimmer
- `src/components/SearchBar.tsx` — premium-стили

---

### ФАЗА 3: Animations Premium (Framer Motion) (1 дня)

**Проблема:** Анимации есть, но не системные.

**Задачи:**
- [ ] Создать `src/animations/presets.ts` — layout, fade, slide, scale presets
- [ ] Применить к модалам: spring physics, stagger children
- [ ] Добавить skeleton loading для lazy-данных
- [ ] Анимировать переходы между табами DiseaseModal
- [ ] Добавить swipe-жесты для табов на мобилке (частично есть)

---

### ФАЗА 4: UX Toasts + Feedback (0.5 дня)

**Проблема:** ToastSystem есть, но не используется везде.

**Задачи:**
- [ ] Интегрировать `addToast` в CommandSearch (успех/не найдено)
- [ ] Toast при добавлении в избранное
- [ ] Toast при копировании AI-текста
- [ ] Toast при сохранении голосовых заметок
- [ ] Visually hide toast на мобильном (чтобы не мешал bottom bar)

---

### ФАЗА 5: 3D Atlas Deep Integration (2 дня)

**Проблема:** Organ3DViewer есть, но не связан с конкретными болезням.

**Задачи:**
- [ ] Привязать `disease.atlasScene` к Organ3DViewer (логика есть в `getDiseaseScene`)
- [ ] Добавить hotspots в модале (из `disease.atlasHotspots`)
- [ ] Сделать fallback для iOS < WebGL2 (есть `hasWebGL()` функция)
- [ ] Добавить "Показать на 3D" кнопку в DiseaseCard
- [ ] Оптимизировать Three.js — lazy инициализация в модале (уже lazy)
- [ ] Добавить reset camera кнопку

---

### ФАЗА 6: Voice AI Integration (1 дня)

**Проблема:** VoiceNoteRecorder отдельно, не интегрирован с поиском.

**Задачи:**
- [ ] Добавить микрофон-кнопку в CommandSearch (слушать и диктовать)
- [ ] При диктовке "эндометриоз" — сразу искать и открывать
- [ ] Директива в DiseaseModal: "запиши мне памятку пациентке"
- [ ] Voice input в AIClinicalAssistant для генерации текста
- [ ] Fallback на iOS Safari (webkit-версия уже есть)

---

### ФАЗА 7: Offline PWA Enhancement (1 дня)

**Проблема:** Service Worker есть, но UI не информирует об оффлайн-режиме.

**Задачи:**
- [ ] Улучшить offline-banner (уже есть, но можно красивее)
- [ ] Добавить "Скачать для офлайн" кнопку в настройки
- [ ] Cache fallback UI для каждой секции
- [ ] Background sync для избранного/истории
- [ ] Version checker уведомляет о новой версии

---

### ФАЗА 8: AI-диагностика (R&D, 2-3 дня)

**Проблема:** AIClinicalAssistant это шаблоны, а не настоящий AI.

**Задачи:**
- [ ] Добавить локальную LLM (LlamaCPP WASM?) или OpenAI API fallback
- [ ] SymptomChecker компонент — визуальный ввод симптомов → вероятные диагнозы
- [ ] "Что делать дальше?" AI-router в DiseaseModal
- [ ] AI-генерация плана обследования по Возраст/Симптомам

---

### ФАЗА 9: Performance & QA Gates (0.5 дня)

**Задачи:**
- [ ] Node.js 20 → 22 в CI workflow
- [ ] CSS bundle optimization — убрать дублирование
- [ ] Three.js vendor chunk — добавить prefetch
- [ ] Run всех audit-скриптов и исправить warning'и
- [ ] Lighthouse CI integration
- [ ] Add `npm run verify:full` — typecheck + lint + tests + audits

---

## 📋 Текущие технические долги (приоритет)

| Priority | Issue | File | Effort |
|----------|-------|------|--------|
| 🔴 CRITICAL | Node.js 20 deprecated | .github/workflows/*.yml | 15 мин |
| 🔴 CRITICAL | CSS budget exceeded 42KB | src/*.css | 2-3 часа |
| 🟠 HIGH | 3D не привязан к болезням | DiseaseModal.tsx + Organ3DViewer.tsx | 1-2 часа |
| 🟠 HIGH | Bundle three-vendor.js 518KB | Organ3DViewer.tsx lazy load | оптимизировать |
| 🟡 MEDIUM | Voice не интегрирован в поиск | CommandSearch.tsx | 1 час |
| 🟡 MEDIUM | Offline UI может быть лучше | App.tsx | 1 час |
| 🟢 LOW | Push-уведомления о кэше | vite.config.js | 1 час |

---

## 📱 iPhone-first UX Checklist

- [x] Safe area insets (`env(safe-area-*)`)
- [x] Horizontal scroll for tabs
- [x] Modal sheet на мобильном
- [ ] Voice input в поиск
- [ ] Offline banner (улучшить)
- [ ] Haptics feedback (iOS API)

---

## 📊 Аудит результатов (Live)

```
npm run audit:mojibake:source → OK (179 файлов, 0 проблем)
npm run typecheck → OK (0 ошибок)
npm run build → OK
npm run test → OK (72/72 passing)

BUNDLE BUDGET:
- index.css: 362KB (exceeds 320KB limit by 42KB)
- three-vendor.js: 518KB (large, lazy loaded)
- index.js: 336KB (close to 330KB warning)
```

---

## 🎨 Дизайн-система (из design-system.md)

**Colors:**
- Primary: `#0E9F9D` (Teal) → `#0ACBC5` (dark)
- Accent: `#D1A250` (Gold) → `#FFC875` (dark)
- Background: `#F5F5F5` → `#111111`
- Surface: `#FFFFFF` → `#1A1A1A`

**Текущие GYN цвета (из index.css):**
- `--color-turquoise`: `#D89AA7` (rose)
- `--color-emerald`: `#B97886`
- `--color-gold`: `#D8B878`

**Typography:**
- Display: Space Grotesk (4rem)
- H1-H3: Inter
- Body: Inter (1rem)

---

## 🛠️ Next Actions (как начать)

1. **Срочно:** Upgrade Node.js в CI с 20 → 22
2. **CSS debt cleanup:** объединить стили в один файл
3. **3D integration:** добавить atlasScene в DiseaseModal
4. **Voice in search:** микрофон в CommandSearch

---

**End of Plan — Готов к бронированию задач!**