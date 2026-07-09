# GYN Clinical — Грандиозный план премиум-дизайна для iPhone 16/17 Pro Max

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Создать визуально-идеальный, ультра-современный медицинский справочник с премиум UX на iPhone 14/15/16/17 Pro Max и десктопе, при этом удалить конфликтующие старые планы.

**Architecture:** Модульный подход с фокусом на CSS-оптимизацию, iPhone-first дизайн, Glass 2.0 эффекты и премиальные анимации.

**Tech Stack:** React 19, Framer Motion 12.x, Vite 6, CSS Custom Properties, PWA, Web Speech API

---

## 📋 План удаления старых планов (конфликты устранены)

### Task 1: Удалить конфликтующие планы

**Objective:** Удалить старые планы, которые конфликтуют по интересам, оставив только этот грандиозный план

**Files:**
- Delete: `.hermes/plans/2026-06-18_premium-redesign-plan.md`
- Delete: `.hermes/plans/2026-06-19_grandiose-premium-plan.md`
- Delete: `GYN_IMPROVEMENT_PLAN_PHASE1.md`
- Delete: `GYN_ULTRA_PREMIUM_PLAN.md`

**Step 1: Удалить старые планы**

```bash
rm /c/Users/rousl/Desktop/projects/gyn/.hermes/plans/2026-06-18_premium-redesign-plan.md
rm /c/Users/rousl/Desktop/projects/gyn/.hermes/plans/2026-06-19_grandiose-premium-plan.md
rm /c/Users/rousl/Desktop/projects/gyn/GYN_IMPROVEMENT_PLAN_PHASE1.md
rm /c/Users/rousl/Desktop/projects/gyn/GYN_ULTRA_PREMIUM_PLAN.md
```

**Step 2: Проверить что файлы удалены**

```bash
ls -la /c/Users/rousl/Desktop/projects/gyn/.hermes/plans/
ls /c/Users/rousl/Desktop/projects/gyn/*.md
```

---

## 🎨 ЭТАП 1: CSS Архитектура — Оптимизация до 320KB

### Task 1.1: Аудит CSS размеров и дублей

**Objective:** Понять текущий CSS debt и подготовиться к оптимизации

**Files:**
- Read: `src/App.css` (7949 строк)
- Read: `src/index.css` (881 строк)
- Read: `src/styles/premium-flagship.css` (2890 строк)
- Read: `src/premium-unified.css` (5179 строк)
- Read: `src/styles/design-tokens.css` (96 строк)
- Read: `src/styles/spacing.css` (46 строк)

**Step 1: Подсчитать размеры файлов**

```bash
wc -l /c/Users/rousl/Desktop/projects/gyn/src/App.css
wc -l /c/Users/rousl/Desktop/projects/gyn/src/index.css
wc -l /c/Users/rousl/Desktop/projects/gyn/src/styles/premium-flagship.css
wc -l /c/Users/rousl/Desktop/projects/gyn/src/premium-unified.css
```

**Step 2: Найти дублирующиеся CSS правила**

```bash
grep -r "!important" /c/Users/rousl/Desktop/projects/gyn/src/ --include="*.css" | head -50
```

---

### Task 1.2: Оптимизировать App.css до 1500 строк

**Objective:** Удалить дубли, использовать CSS переменные, убрать !important

**Files:**
- Modify: `src/App.css` (сократить с 7949 до ~1500 строк)

**Step 1: Создать резервную копию**

```bash
cp /c/Users/rousl/Desktop/projects/gyn/src/App.css /c/Users/rousl/Desktop/projects/gyn/src/App.css.backup
```

**Step 2: Удалить устаревшие правила**

```css
/* Удалить все правила с !important которые можно перенести в premium-flagship.css */
/* Удалить дубли классов которые теперь описаны в design-tokens.css */
/* Сократить комментарии, оставить только essential documentation */
```

---

### Task 1.3: Удалить premium-unified.css из импортов

**Objective:** Удалить устаревший CSS файл, который дублирует стили

**Files:**
- Modify: `src/App.tsx` (строки 1-10)

**Step 1: Удалить импорт**

```tsx
// БЫЛО:
import './premium-unified.css';  // <-- УДАЛИТЬ

// ОСТАВИТЬ:
import './styles/premium-flagship.css';  // Master — 100% новый дизайн
```

---

### Task 1.4: Объединить CSS в три файла

**Objective:** Итоговая структура: flagship.css + worktool.css + spacing.css

**Files:**
- Create: `src/styles/clinical-worktool.css` (1000 строк)
- Modify: `src/styles/premium-flagship.css` (оставить как master)
- Modify: `src/styles/spacing.css` (уже существует, улучшить)

---

## 📱 ЭТАП 2: iPhone 16 Pro Max Premium UX

### Task 2.1: Обновить MobileBottomBar с scroll-aware поведением

**Objective:** Нижняя панель скрывается при скролле вниз, появляется вверх

**Files:**
- Modify: `src/components/MobileBottomBar.tsx`
- Modify: `src/styles/premium-flagship.css` (добавить стили)

**Step 1: Обновить компонент**

```tsx
// MobileBottomBar.tsx — добавить scroll detection
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const updateVisibility = () => {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;
    
    if (delta > 16 && currentY > 100) {
      setIsVisible(false);
    } else if (delta < -16) {
      setIsVisible(true);
    }
    
    setLastScrollY(currentY);
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  return () => window.removeEventListener('scroll', updateVisibility);
}, [lastScrollY]);

return (
  <motion.nav
    initial={{ y: 18, opacity: 0 }}
    animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    className="mobile-bottom-bar"
    aria-label="Нижняя навигация"
  >
```

**Step 2: Добавить CSS стили**

```css
/* В premium-flagship.css */
.mobile-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(100%, 1200px);
  background: var(--am-bg-glass);
  backdrop-filter: blur(32px) saturate(1.2);
  -webkit-backdrop-filter: blur(32px) saturate(1.2);
  border-top: 1px solid var(--am-border-soft);
  box-shadow: var(--am-shadow-md);
  border-radius: 16px 16px 0 0;
  z-index: var(--z-mobile-bar);
  transition: transform var(--duration-md) var(--ease-smooth),
              box-shadow var(--duration-md) var(--ease-smooth);
}

.mobile-bottom-items {
  display: flex;
  justify-content: space-around;
  padding: var(--space-6) 0;
  gap: var(--space-10);
}

.mobile-bottom-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border: none;
  background: transparent;
  border-radius: var(--radius-md);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--am-text-secondary);
  cursor: pointer;
  transition: color var(--duration-fast) var(--ease-smooth),
              background var(--duration-fast) var(--ease-smooth);
}

.mobile-bottom-item:hover {
  background: var(--am-bg-subtle);
  color: var(--am-brand);
}

.mobile-bottom-item.is-active {
  color: var(--am-brand);
  background: var(--am-bg-subtle);
}

.mobile-bottom-active-dot {
  width: 4px;
  height: 4px;
  background: var(--am-brand);
  border-radius: var(--radius-full);
  position: absolute;
  bottom: -4px;
}
```

---

### Task 2.2: Glass 2.0 эффекты для iPhone 16 Pro Max

**Objective:** Применить премиальный эффект стекла с 40px blur + 180% saturate

**Files:**
- Modify: `src/styles/premium-flagship.css`

**Step 1: Обновить Glass эффекты**

```css
/* Glass 2.0 — iPhone 16 Pro Max quality */
.glass {
  background: var(--am-bg-glass);
  backdrop-filter: blur(40px) saturate(1.8) !important;
  -webkit-backdrop-filter: blur(40px) saturate(1.8) !important;
  border: 1px solid var(--am-border-soft);
  box-shadow: var(--am-shadow-lg) !important;
  transition: background var(--duration-md) var(--ease-smooth),
              box-shadow var(--duration-md) var(--ease-smooth),
              border-color var(--duration-md) var(--ease-smooth),
              transform var(--duration-md) var(--ease-fast) !important;
}

.glass:hover {
  background: var(--am-bg-card);
  box-shadow: var(--am-shadow-xl) !important;
  border-color: var(--am-border-medium);
}

/* Glass panel с inset highlight */
.glass-panel {
  background: var(--am-bg-glass);
  backdrop-filter: blur(40px) saturate(1.8) !important;
  -webkit-backdrop-filter: blur(40px) saturate(1.8) !important;
  border: 1px solid var(--am-border-soft);
  box-shadow: 
    inset 0 1px 0 rgba(255,255,255,0.12),
    var(--am-shadow-md) !important;
}
```

---

### Task 2.3: Dynamic Island compensation

**Objective:** Адаптировать интерфейс под Dynamic Island на iPhone 16 Pro Max

**Files:**
- Modify: `src/styles/premium-flagship.css`

**Step 1: Добавить CSS переменные**

```css
:root {
  /* Dynamic Island support */
  --di-top: max(env(safe-area-inset-top, 0px), 48px);
  --di-height: max(env(safe-area-inset-top, 0px), 0px);
}

/* Navbar с Dynamic Island offset */
.navbar {
  top: var(--di-top) !important;
  padding-top: calc(var(--di-height) + var(--space-5)) !important;
}
```

---

## 🎭 ЭТАП 3: Анимации премиум-класса

### Task 3.1: Обновить Framer Motion presets

**Objective:** Создать иерографичные анимации с iPhone sheet стилем

**Files:**
- Modify: `src/animations/presets.ts`

**Step 1: Добавить iPhone sheet анимации**

```typescript
// Мобильный sheet стиль
export const sheetVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: '100%'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springPhysics,
      damping: 25,
      stiffness: 280
    }
  },
  exit: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Tab переключения с iOS стилем
export const tabTransitionVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0
  })
};

// Shimmer эффект для загрузки
export const shimmerKeyframe = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;
```

---

### Task 3.2: Добавить micro-interactions

**Objective:** Magnetic hover, shimmer, haptic-like tap эффекты

**Files:**
- Modify: `src/styles/premium-flagship.css`

**Step 1: Добавить micro-interaction классы**

```css
/* Magnetic hover эффект */
.magnetic-hover {
  position: relative;
  overflow: hidden;
  transition: transform var(--duration-fast) var(--ease-fast);
}

.magnetic-hover::after {
  content: '';
  position: absolute;
  inset: -4px;
  background: radial-gradient(circle, rgba(107, 92, 156, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-fast);
  border-radius: inherit;
}

.magnetic-hover:hover::after {
  opacity: 1;
}

/* Shimmer загрузка */
.shimmer {
  background: linear-gradient(90deg, var(--am-bg-subtle) 25%, var(--am-bg-elevated) 50%, var(--am-bg-subtle) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite var(--ease-spring);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Haptic-like tap эффект */
.btn-premium {
  transition: transform var(--duration-fast) var(--ease-emphasized),
              box-shadow var(--duration-fast) var(--ease-emphasized);
}

.btn-premium:active {
  transform: translateY(1px);
  box-shadow: var(--am-shadow-lg);
}
```

---

## 🔍 ЭТАП 4: Accessibility и WCAG AA

### Task 4.1: Целостный WCAG AA аудит

**Objective:** Обеспечить 100% соответствие WCAG AA

**Files:**
- Read: `src/components/*.tsx` (для aria-label проверки)
- Modify: `src/styles/premium-flagship.css`

**Step 1: Проверить контраст**

```bash
npm run audit:a11y
```

**Step 2: Добавить focus rings**

```css
/* Focus rings с 2px solid */
*:focus-visible {
  outline: 2px solid var(--am-brand);
  outline-offset: 2px;
}

/* Skip link улучшенный */
.skip-link {
  position: fixed;
  top: -100%;
  left: var(--space-8);
  z-index: var(--z-tooltip);
  padding: var(--space-4) var(--space-8);
  background: var(--am-bg-elevated);
  border: 1px solid var(--am-border-medium);
  border-radius: var(--radius-md);
  color: var(--am-text-primary);
  font-weight: var(--weight-semibold);
  font-size: var(--text-sm);
  transition: top var(--duration-fast) var(--ease-smooth);
}

.skip-link:focus {
  top: var(--space-8);
  outline: 2px solid var(--am-brand);
  outline-offset: 2px;
}
```

---

## ⚡ ЭТАП 5: Performance оптимизация

### Task 5.1: CSS Bundle оптимизация до 320KB

**Objective:** Сократить CSS bundle с 373KB до < 320KB

**Files:**
- Modify: `vite.config.js` (добавить CSS оптимизацию)
- Modify: `src/styles/premium-flagship.css`

**Step 1: Добавить PurgeCSS конфигурацию**

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: {
            standard: ['active', 'show', 'hide', 'is-active'],
            deep: [/^mobile-/],
            greedy: [/^am-/]
          }
        })
      ]
    }
  }
});
```

---

### Task 5.2: Lighthouse CI интеграция

**Objective:** Автоматическая проверка качества перед деплоем

**Files:**
- Create: `.hermit/scripts/lighthouse-check.sh`

**Step 1: Создать скрипт проверки**

```bash
#!/bin/bash
# lighthouse-check.sh

echo "🚀 Running Lighthouse CI checks..."

# Build
npm run build

# Run Lighthouse
npx lhci autorun

# Check scores
SCORE=$(cat .lhci/score.json | jq '.categories.performance.score')

if (( $(echo "$SCORE < 0.9" | bc -l) )); then
  echo "❌ Performance score below 90: $SCORE"
  exit 1
fi

echo "✅ All Lighthouse checks passed!"
```

---

## 📱 iPhone 16 Pro Max Специфичные улучшения

### Task 6.1: Адаптация под новые размеры экрана

**Objective:** Идеальная адаптация под iPhone 16 Pro Max (420x956px)

**Files:**
- Modify: `src/styles/premium-flagship.css`

```css
/* iPhone 16 Pro Max (420px ширина) */
@media (min-width: 393px) and (max-height: 900px) {
  :root {
    --mobile-bottom-bar-height: 88px;
    --mobile-nav-padding: var(--space-7);
  }
}

@media (min-width: 420px) {
  :root {
    --mobile-bottom-bar-height: 92px;
    --mobile-nav-padding: var(--space-8);
  }
  
  .mobile-bottom-bar {
    border-radius: 20px 20px 0 0;
  }
}

/* Ultra-wide iPhone (landscape) */
@media (orientation: landscape) and (max-height: 540px) {
  .page-content {
    padding: var(--space-6);
  }
  
  .navbar {
    border-radius: 12px;
  }
}
```

---

## 🧪 Верификация и тестирование

### Task 7.1: Запуск полного теста

**Objective:** Убедиться, что ничего не сломалось

**Commands:**

```bash
# TypeScript проверка
npm run typecheck

# Линтинг
npm run lint

# Все тесты
npm run test:run

# Сборка
npm run build

# Lighthouse проверка
npx lhci autorun
```

**Expected Results:**
- ✅ TypeScript: 0 errors
- ✅ Lint: 0 warnings
- ✅ Tests: 72/72 passing
- ✅ Build: успешный
- ✅ Lighthouse: > 90 score

---

## 📊 Итоговая метрика премиум-дизайна

| Метрика | Текущее | Целевое | Статус |
|---------|---------|---------|--------|
| CSS Bundle | 373KB | < 320KB | ⏳ |
| Lighthouse Performance | 85 | > 90 | ⏳ |
| Lighthouse Accessibility | 92 | 100 | ⏳ |
| Mobile UX (iPhone 16 Pro Max) | OK | Perfect | ⏳ |
| Touch Targets | 44×44px | 44×44px | ✅ |
| Glass 2.0 blur | 24px | 40px | ⏳ |
| Scroll-aware bottom bar | Нет | Да | ⏳ |
| WCAG AA compliance | 85% | 100% | ⏳ |

---

## 🚀 Коммиты после каждой фазы

```bash
# После этапа 1
git add .
git commit -m "feat(css): optimize bundle to 320KB, remove premium-unified.css"

# После этапа 2
git commit -m "feat(mobile): add scroll-aware bottom bar for iPhone 16 Pro Max"

# После этапа 3
git commit -m "feat(animation): premium micro-interactions and iPhone sheet style"

# После этапа 4
git commit -m "fix(a11y): full WCAG AA compliance for premium experience"

# После этапа 5
git commit -m "perf: Lighthouse CI integration, 90+ score target"
```

---

## 🎯 Критерии приемки

- [ ] CSS bundle < 320KB (gzip)
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility = 100
- [ ] Нижняя панель скрывается при скролле
- [ ] Glass 2.0 эффекты (40px blur, 180% saturate)
- [ ] Все touch targets 44×44px+
- [ ] Dynamic Island поддержка
- [ ] 72/72 тестов проходят
- [ ] Production сборка успешна

---

**Готов к исполнению! Каждая задача — отдельный коммит с полной верификацией.**