# Gyn & Obs

Клинический справочник по гинекологии и акушерству на `React + Vite + TypeScript`.

Приложение включает:
- каталог нозологий по гинекологии и акушерству
- поиск по диагнозам, симптомам и МКБ
- избранное и историю просмотров
- модуль опросников
- фармакологический раздел с препаратами, взаимодействиями и схемами
- PWA-сборку через `vite-plugin-pwa`

## Запуск

1. Установить зависимости:

```bash
npm install
```

2. Запустить dev-сервер:

```bash
npm run dev
```

По умолчанию приложение доступно на `http://localhost:3000`.

## Скрипты

- `npm run dev` - локальный Vite dev server
- `npm run build` - production-сборка в `dist`
- `npm run preview` - локальный preview production-сборки
- `npm run typecheck` - проверка TypeScript без генерации файлов
- `npm run lint` - проверка ESLint по `src`
- `npm run test:run` - запуск Vitest в non-watch режиме
- `npm run test:ui` - UI-режим Vitest

## Стек

- React 19
- Vite 6
- TypeScript
- Framer Motion
- Vitest + Testing Library
- ESLint
- vite-plugin-pwa

## Архитектура

- `src/App.tsx` - корневая композиция приложения и навигационные состояния
- `src/components` - UI-компоненты, карточки, модалки, секции
- `src/hooks` - пользовательские хуки (`theme`, `favorites`, `history`, `catalog`, `modal`)
- `src/data` - справочники нозологий, опросники и фармакология
- `src/utils` - категоризация, enrich логика и вспомогательные функции
- `src/types` - основные типы домена

## Важные модули

- `useCatalogData` - загрузка и фильтрация каталогов
- `useModalBehavior` - единое поведение модалок: focus trap, escape, scroll lock
- `diseaseCatalog.ts` - категоризация нозологий и поиск
- `pharmacology.js` - препараты, взаимодействия и схемы

## Проверка качества

Перед изменениями и перед коммитом рекомендуется запускать:

```bash
npm run typecheck
npm run lint
npm run test:run
npm run build
```

На текущий момент проект покрыт unit/integration тестами для:
- хуков состояния
- каталога и поиска
- карточек и фильтров
- фармакологии
- опросников
- базовых пользовательских сценариев в `App`

## PWA и кеш

Проект использует `vite-plugin-pwa`.

Если после обновления сборки в браузере появляется устаревший интерфейс или ошибка загрузки чанков:
1. сделать hard refresh
2. очистить service worker / site data в DevTools
3. открыть production preview заново

Ручная регистрация старого service worker удалена, используется только PWA-механизм Vite.

## Структура данных

### Нозологии
- лежат в `src/data/gynChunks/*` и `src/data/obsChunks/*`
- после загрузки проходят через enrich-слой

### Фармакология
- `medications` содержит только препараты
- `commonRegimens` содержит только схемы
- дубли по `id` отфильтровываются на уровне источника данных

### Опросники
- лежат в `src/data/questionnaires.js`
- история сохраняется в `localStorage`

## Контент-стандарты

- `docs/content-blueprint.md` - единая спецификация полей и редакционный стандарт для нозологий, препаратов, опросников и ultrasound-блоков
- `docs/content-roadmap.md` - приоритеты, спринты и порядок углубления контента по guideline-first модели

## Текущее состояние

Стабилизированы:
- загрузка чанков и PWA-поведение
- error/retry для каталогов
- навигационные переходы между разделами
- фармакология и взаимодействия
- общий modal hook
- история и UX опросников
- категоризация части спорных диагнозов через explicit overrides

## Следующие шаги

- расширить explicit categorization overrides по всему каталогу
- при необходимости вынести крупные справочники в более легкий формат доставки
- добавить e2e smoke tests для production preview
