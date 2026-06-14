# GYN Clinical — Ultra Premium Upgrade Plan 2026

## 🎯 Executive Summary

**Текущее состояние:** PWA готова (30 gynChunks + obsChunks, 200+ препаратов, 50+ шкал, CommandSearch по всему сайту), работает на https://gyn-clinical.pages.dev.

**Цель:** Довести до ультра-премиум уровня с premium UI/UX, AI-диагностикой (без 3D), оффлайн-режимом и production-качеством.

**Последний деплой:** 14 июня 2026, коммит `2e0a66d`, CI в процессе 🔄

---

## 📊 Анализ текущего состояния проекта

### ✅ Реализовано
- ✅ CommandSearch с поиском по болезням, препаратам, шкалам (lazy loading)
- ✅ DiseaseModal с 10 вкладками: Кратко, Диагностика, УЗИ, Лечение, Ведение, Пациентке, AI-помощник, PubMed
- ✅ PharmacologyModal с фильтрами по сценариям (8 категорий), поиском, взаимодействиями
- ✅ PremiumButton с shimmer-эффектами
- ✅ VoiceNoteRecorder (Web Speech API)
- ✅ AIClinicalAssistant (шаблоны текста)
- ✅ PWA manifest + service worker
- ✅ Dark/Light theme
- ✅ Автодеплой CI/CD

### ⚠️ Текущие проблемы
- **CSS debt:** 972 строки в `index.css`, множественные файлы стилей с дублированием
- **Node.js 20** — deprecated (end-of-life September 2026)
- **Bundle budget:** CSS превышает бюджет на 42KB (теперь 356KB после очистки)
- **Voice Input** — есть в отдельном компоненте, но не интегрирован в поиск
- **AI-ассистент** — только шаблоны, без LLM-генерации
- **Нет push-уведомлений** для кэш-обновлений

---

## 🚀 План улучшений (5+ фаз)

### ФАЗА 1: Design System Completion (в процессе)

**Проблема:** Цвета, spacing, elevation описаны в design-system.md, но не привязаны к реальному CSS.

**Задачи:**
- [x] Создать `src/styles/spacing.css` — система отступов под iPhone breakpoints
- [ ] Создать `src/styles/design-tokens.css` — вынести все цвета в CSS-переменные
- [ ] Унифицировать градиенты: `--gradient-premium`, `--gradient-turquoise-emerald`
- [ ] Убрать дублирование в CSS файлах (сейчас 468KB total)
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

---

### ФАЗА 3: Animations Premium (Framer Motion) (1 дня)

**Задачи:**
- [ ] Создать `src/animations/presets.ts` — layout, fade, slide, scale presets
- [ ] Применить к модалам: spring physics, stagger children
- [ ] Добавить skeleton loading для lazy-данных
- [ ] Анимировать переходы между табами DiseaseModal

---

### ФАЗА 4: UX Toasts + Feedback (0.5 дня)

**Задачи:**
- [ ] Интегрировать `addToast` в CommandSearch (успех/не найдено)
- [ ] Toast при добавлении в избранное
- [ ] Toast при копировании AI-текста
- [ ] Toast при сохранении голосовых заметок

---

### ФАЗА 5: Voice AI Integration (1 дня)

**Задачи:**
- [ ] Добавить микрофон-кнопку в CommandSearch (слушать и диктовать)
- [ ] При диктовке "эндометриоз" — сразу искать и открывать
- [ ] Voice input в AIClinicalAssistant для генерации текста
- [ ] Fallback на iOS Safari (webkit-версия уже есть)

---

### ФАЗА 6: Offline PWA Enhancement (1 дня)

**Задачи:**
- [ ] Улучшить offline-banner (уже есть, но можно красивее)
- [ ] Добавить "Скачать для офлайн" кнопку в настройки
- [ ] Cache fallback UI для каждой секции
- [ ] Background sync для избранного/истории

---

### ФАЗА 7: Performance & QA Gates (0.5 дня)

**Задачи:**
- [ ] Node.js 20 → 22 в CI workflow
- [ ] CSS bundle optimization — убрать дублирование
- [ ] Run всех audit-скриптов и исправить warning'и
- [ ] Lighthouse CI integration
- [ ] Add `npm run verify:full`

---

## 📋 Текущие технические долги (приоритет)

| Priority | Issue | File | Effort |
|----------|-------|------|--------|
| 🔴 CRITICAL | Node.js 20 deprecated | .github/workflows/*.yml | 15 мин |
| 🔴 CRITICAL | CSS budget exceeded | src/*.css | 2-3 часа |
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

BUNDLE BUDGET (после удаления атласа):
- index.css: ~356KB (exceeds 320KB limit by ~36KB)
- three-vendor.js: 494KB (optimized)
- index.js: 336KB (stable)
```

---

**End of Plan — Готов к бронированию задач!**