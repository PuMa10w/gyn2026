# GYN

Клинический iPhone-first PWA-справочник по гинекологии и акушерству на React, Vite и TypeScript.

## Production

Основной production-домен после миграции: `https://gyn-premium.pages.dev`.

Старые адреса `https://gynecology.pages.dev` и `https://gyn-76a.pages.dev` больше не считаются основным production target. Они могут показывать старый bundle из-за отдельного Cloudflare Pages project или PWA/service-worker cache.

## Локальный запуск

```bash
npm install
npm run dev
```

По умолчанию dev-сервер доступен на `http://localhost:3000`.

## Проверки качества

Перед production deploy обязательно запускать:

```bash
npm.cmd run typecheck
npm.cmd run test:run
npm.cmd run audit:content -- --strict
npm.cmd run audit:icd -- --strict
npm.cmd run audit:mojibake:source
npm.cmd run audit:source:utf8-ui
npm.cmd run build
npm.cmd run verify:premium
```

Дополнительные production/PWA проверки:

```bash
npm.cmd run audit:pwa:freshness
npm.cmd run audit:production:freshness
```

## Production deploy

Deploy выполняется только в Cloudflare Pages project `gyn-premium`:

```bash
npm.cmd run build
npm.cmd run deploy:production
```

`deploy:production` содержит guard и откажется деплоить, если `wrangler.toml` указывает на legacy project `gyn` или другой неправильный target.

После deploy проверить:

```bash
npx.cmd wrangler pages deployment list --project-name gyn-premium
npm.cmd run audit:production:freshness
```

## PWA обновление на iPhone

В приложении PWA-панель показывает реальную сборку `version + commit`. Кнопка `Обновить базу` обновляет service worker, очищает PWA-кэш, добавляет `cacheReset=1` и перезагружает приложение, чтобы iPhone получил свежий bundle.

Cloudflare headers настроены так:

- `/`, `/index.html`, `/sw.js`, `/registerSW.js`, `/manifest.webmanifest` не кэшируются агрессивно.
- `/assets/*` кэшируются как hashed immutable assets.

## Архитектура

- `src/App.tsx` - корневая композиция приложения и маршрутизация разделов.
- `src/components` - UI-компоненты, карточки, модальные окна и клинические инструменты.
- `src/hooks` - состояние темы, избранного, истории, каталога и модалок.
- `src/data` - нозологии, опросники и фармакология.
- `src/utils` - категоризация, enrichment, repair legacy text и вспомогательная логика.
- `scripts` - QA-аудиты, iPhone-проверки, PWA freshness и deploy guard.

## Рабочее правило

Не коммитить browser artifacts, временные профили Chrome, screenshots, логи и generated audit reports. Перед commit stage делать только для намеренно изменённых source/config/script файлов.
