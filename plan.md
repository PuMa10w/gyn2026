# GYN Design & Mobile Overhaul — Master Plan v2

> **Для разработчика:** Этот план покрывает дизайн-рефакторинг + мобильную адаптацию. Реализуй по порядку, не пропуская фазы.

**Цепь:** Превратить текущий «тёмный текст на тёмных карточках» в премиальный клинический интерфейс — с визуальным ритмом, иерархией и iPhone-native ощущением.

**Архитектура:** React + Vite + TypeScript + Framer Motion + CSS. Рефакторим App.css (сократить с 7837 строк до ~3000), переписываем HomeSection с нуля, стабилизируем мобильную вёрстку.

---

## Текущие проблемы (диагноз)

### Главная страница
1. **Нет hero-блока** — CSS для `.home-hero` написан, но HomeSection не рендерит hero
2. **Две тёмные карточки без души** — `.home-destination-card` это просто градиентные блоки с текстом, без иконок, без образов
3. **Пустые панели на первом экране** — «история пока пуста», «избранное пусто» сразу видны
4. **Нет визуального ритма** — всё одинаковые стеклянные блоки, нет «воздуха»
5. **Тема переключается неудобно** — кнопка «Тема» встроена в экшен-бар

### CSS
6. **7837 строк App.css** — половина дублируется в повторяющихся медиа-запросах
7. **Конфликтующие брейкпоинты** — 1200, 1100, 820, 768, 480 переопределяют одни и те же свойства
8. **Два блока `body` в index.css** (строки 107-118 и 173-189) — второй перезаписывает первый

### Мобильная вёрстка
9. **`--header-height` скачет** — 118px → 142px → 148px → 152px → 146px → 144px в зависимости от ширины
10. **Navbar на мобилке слишком высокий** — занимает почти 30% экрана на iPhone
11. **Карточки болезней** — `isMobile` проверяется через `window.innerWidth` вместо CSS медиа-запроса
12. **Нет плавных переходов** между брейкпоинтами

---

## План

### Фаза 0. CSS-генеральная уборка

> Прежде чем делать дизайн — разгребаем фундамент.

#### Задача 0.1: Убрать дублированный body в index.css
**Файл:** `src/index.css`
- Удалить второй блок `body` (строки 173-189), оставив первый
- Перенести `font-size: 16px` из второго в первый
- Проверить: `npm run dev` — не должно быть визуальных изменений

#### Задача 0.2: Объединить брейкпоинты в App.css
**Файл:** `src/App.css`
- Сейчас: `@media (max-width: 1100px)` + `@media (max-width: 1200px)` + `@media (max-width: 820px)` + `@media (max-width: 768px)` + `@media (max-width: 480px)` — и ВСЕ дублируют одни и те же селекторы
- Оставить ТРИ брейкпоинта:
  - `@media (max-width: 1024px)` — планшеты
  - `@media (max-width: 768px)` — мобильные
  - `@media (max-width: 480px)` — iPhone tight
- Каждый селектор должен встречаться ТОЛЬКО в одном брейкпоинте (где он впервые переопределяется)
- **Приоритет: сохранить все значения как есть, только перегруппировать**

#### Задача 0.3: Зафиксировать --header-height
**Файл:** `src/App.css`
- Установить один `--header-height` на точку входа `.App` и ТОЛЬКО в медиа-запросах его менять
- Убрать повторяющиеся `.App { --header-height: ... }` блоки (строки 1-9)
- Итоговые значения:
  - Десктоп: 118px
  - 768px: 152px
  - 480px: 146px

---

### Фаза 1. Пересборка главной страницы

#### Задача 1.1: Новый Hero-блок
**Файлы:** `src/components/HomeSection.tsx`, `src/App.css`

Что добавить В НАЧАЛО главной:
```tsx
<section className="home-hero-grid" aria-label="Обзор">
  <div className="home-hero home-hero-main">
    <span className="home-eyebrow">Клинический справочник</span>
    <h1 className="home-hero-title">
      Гинекология <span className="text-gradient">&amp;</span> Акушерство
    </h1>
    <p className="home-hero-description">
      Нозологии, диагностика, протоколы и фармакология — в едином спокойном, 
      быстром и адаптированном под iPhone интерфейсе.
    </p>
    <div className="home-hero-metrics">
      <div className="home-metric-card">
        <span className="home-metric-value">48</span>
        <span className="home-metric-label">Нозологий в базе</span>
      </div>
      <div className="home-metric-card">
        <span className="home-metric-value">2</span>
        <span className="home-metric-label">Раздела</span>
      </div>
      <div className="home-metric-card">
        <span className="home-metric-value">PWA</span>
        <span className="home-metric-label">Офлайн-доступ</span>
      </div>
    </div>
  </div>

  <div className="home-hero-rail">
    <button className="hero-rail-card" onClick={() => setActiveTab('gynecology')}>
      <span className="hero-panel-label">Раздел</span>
      <strong>Гинекология →</strong>
      <p>Нозологии, диагностика, лечение</p>
    </button>
    <button className="hero-rail-card" onClick={() => setActiveTab('obstetrics')}>
      <span className="hero-panel-label">Раздел</span>
      <strong>Акушерство →</strong>
      <p>Беременность, осложнения, протоколы</p>
    </button>
    <button className="hero-rail-card" onClick={onFavoritesOpen}>
      <span className="hero-panel-label">Быстрый доступ</span>
      <strong>Избранное ♥</strong>
      <p>{favoriteCount > 0 ? `${favoriteCount} сохранено` : 'Добавляйте важные нозологии'}</p>
    </button>
  </div>
</section>
```

**CSS-корректировки:**
- `.home-hero` — увеличить `padding: 2rem` (было 1.65rem)
- `.home-hero-title` — сделать градиент текста через `.text-gradient` для `&`
- `.home-hero-rail` — `gap: 0.75rem`
- `.hero-rail-card` — добавить `transition: transform 0.2s, background 0.2s`
- На мобилке `.home-hero-grid` → `grid-template-columns: 1fr` (уже есть, проверить)
- На мобилке `.home-hero-rail` → `grid-template-columns: 1fr`

#### Задача 1.2: Прокачать destination-карточки
**Файлы:** `src/components/HomeSection.tsx`, `src/App.css`

Текущие карточки — просто тёмные кнопки. Добавляем:
1. **Номера вместо индексов** — «01» / «02» (уже есть, ок)
2. **Preview-список** (уже есть `.destination-preview`, не рендерится!) — добавить:

```tsx
<div className="destination-preview">
  {tags.map((tag) => (
    <span key={tag} className="destination-preview-item">{tag}</span>
  ))}
</div>
```

3. **Стрелку →** — заменить на SVG-иконку стрелки или более стильный символ «↗»
4. **Hover-эффект** — добавить `box-shadow` при наведении, увеличить border glow

#### Задача 1.3: Умные empty-состояния
**Файл:** `src/components/HomeSection.tsx`

Сейчас: «история пока пуста» — грустно. Заменяем:
- **Если история пуста** → показываем 3 карточки-заглушки:
  ```
  [Пример] Миома матки — D25
  [Пример] Эндометриоз — N80
  [Пример] Преэклампсия — O14
  ```
  С подписью «Примеры нозологий — откройте каталог»
- **Если избранное пусто** → показываем CTA «Добавьте первую нозологию» с кнопкой перехода в каталог

#### Задача 1.4: Quick-actions панель — сделать полезной
**Файл:** `src/components/HomeSection.tsx`

Вместо двух кнопок «Избранное» и «История» (которые дублируют hero-rail) — делаем:
- **Поиск по сайту** (инпут прямо на главной, ведёт в каталог)
- **Фармакология** (быстрый переход)
- **Опросники** (быстрый переход)

Эти три элемента в ряд (на мобилке — сетка 2×2).

---

### Фаза 2. Навигация — пересборка

#### Задача 2.1: Theme toggle — вынести
**Файлы:** `src/components/Navbar.tsx`, `src/App.css`

Сейчас кнопка «Тема» встроена в `.navbar-topline`. Проблемы:
- На мобилке она в сетке 2×2 среди экшенов
- Неочевидно что это переключатель темы

**Решение:** Вынести theme toggle в правый верхний угол — отдельная иконка ☀️/🌙.
```tsx
<button className="theme-toggle-icon" onClick={toggleTheme} aria-label="Тема">
  {theme === 'dark' ? '☀️' : '🌙'}
</button>
```

CSS:
```css
.theme-toggle-icon {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border-soft);
  background: var(--bg-elevated);
  font-size: 1.1rem;
  cursor: pointer;
}
```

#### Задача 2.2: Мобильный navbar — упростить
**Файлы:** `src/App.css`

На ≤768px:
- **Бренд** — только «GYN» (без «Clinical Desk» и подписи)
- **Действия** — свернуть в 2 ряда по 2: [Шкалы] [Фарма] / [Избр.] [Истор.]
- **Основные вкладки** — три кнопки: Главная, Гинекология, Акушерство (уже есть, норм)
- Общая высота navbar на мобилке: **не более 110px**

---

### Фаза 3. Мобильная адаптация

#### Задача 3.1: iPhone safe-area
**Файлы:** `src/index.css`

Уже есть базовые safe-area. Добавить:
```css
@supports (padding: max(0px)) {
  .navbar {
    padding-top: max(0.45rem, env(safe-area-inset-top));
  }
  .page-content {
    padding-bottom: max(1rem, env(safe-area-inset-bottom));
  }
}
```

#### Задача 3.2: Touch-targets — минимум 44px
**Файл:** `src/App.css`

Проверить ВСЕ кликабельные элементы на ≤768px:
- `.nav-item` → `min-height: 44px` ✅ (уже есть)
- `.favorite-btn` → `width: 44px; height: 44px` ✅
- `.category-chip` → `min-height: 42px` — увеличить до 44px
- `.destination-arrow` → `width: 44px; height: 44px`
- `.search-clear-btn` → ок

#### Задача 3.3: Карточки болезней — мобильный режим
**Файл:** `src/components/CatalogSection.tsx`

Убрать `const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;`
Переделать на CSS-класс:
```tsx
// Вместо isMobile
const animDuration = 0.22;
```
Анимации пусть сами разруливаются через CSS `@media (prefers-reduced-motion)`.

---

### Фаза 4. Визуальный polish

#### Задача 4.1: Типографика
- Заголовки: `Cormorant Garamond` ✅ (хороший выбор)
- Тело: `Manrope` ✅
- **Добавить** letter-spacing для мелкого текста (0.02em)
- **Добавить** font-feature-settings 'kern' для заголовков

#### Задача 4.2: Цветовые акценты
- Hero-блок: добавить `::after` с золотистым градиентом (champagne)
- Destination-карточки: добавить `::before` с цветным свечением (rose для гинекологии, champagne для акушерства)
- Navbar: уменьшить opacity фона с 0.92 до 0.85 (меньше давит)

#### Задача 4.3: Тени — унифицировать
- Карточки: `0 4px 24px rgba(0,0,0,0.12)` (вместо разных значений)
- Navbar: `0 8px 32px rgba(0,0,0,0.18)`
- Hero: `0 12px 48px rgba(0,0,0,0.2)`

---

### Фаза 5. Финальная проверка

#### 5.1. Тесты должны проходить
```bash
npm run test:run
npm run typecheck
npm run build
```

#### 5.2. QA чеклист
- [ ] Главная на десктопе (1440px)
- [ ] Главная на планшете (768px)
- [ ] Главная на iPhone (390px)
- [ ] Главная на iPhone Pro Max (430px)
- [ ] Navbar не перекрывает контент
- [ ] Нет горизонтального скролла
- [ ] Hero виден полностью (не под navbar)
- [ ] Пустые состояния симпатичные
- [ ] Переключение темы работает
- [ ] Каталоги открываются
- [ ] Карточки кликаются
- [ ] Модалки открываются

---

## Порядок выполнения

1. **CSS-уборка** (0.1, 0.2, 0.3) — навести порядок
2. **Hero + главная** (1.1, 1.2, 1.3, 1.4) — новая главная
3. **Navbar** (2.1, 2.2) — пересборка навигации
4. **Мобилка** (3.1, 3.2, 3.3) — iPhone адаптация
5. **Polish** (4.1, 4.2, 4.3) — доводка
6. **QA** (5.1, 5.2) — проверка

---

## Ключевые файлы (приоритет)

| Приоритет | Файл | Что делаем |
|-----------|------|------------|
| 🔴 P0 | `src/App.css` | Генеральная уборка, объединение брейкпоинтов |
| 🔴 P0 | `src/components/HomeSection.tsx` | Новая главная с hero'ем |
| 🟡 P1 | `src/components/Navbar.tsx` | Theme toggle, мобильная оптимизация |
| 🟡 P1 | `src/index.css` | Убрать дубли, safe-area |
| 🟢 P2 | `src/components/CatalogSection.tsx` | Убрать `isMobile` |
| 🟢 P2 | `src/config/appContent.ts` | Контент для hero |

---

> **Готов к реализации.** Первый шаг — CSS-уборка. Если готов — погнали! 🚀