import { chromium } from 'playwright';
import fs from 'fs';

const BASE = 'http://localhost:3001';
const OUT = 'artifacts/visual-audit';
fs.mkdirSync(OUT, { recursive: true });

const safe = async (label, fn) => {
  try { await fn(); } catch (e) { console.log(`  ! ${label} failed: ${e.message.split('\n')[0]}`); }
};

const run = async () => {
  const browser = await chromium.launch();

  const capture = async (viewport, label) => {
    const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);

    await safe('home', async () => {
      await page.screenshot({ path: `${OUT}/${label}-01-home.png`, fullPage: false });
      await page.screenshot({ path: `${OUT}/${label}-01-home-full.png`, fullPage: true });
    });

    await safe('gyn', async () => {
      const gyn = page.locator('.nav-tab', { hasText: 'Гинекология' });
      await gyn.click();
      await page.waitForTimeout(1100);
      await page.screenshot({ path: `${OUT}/${label}-02-gynecology.png`, fullPage: false });
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/${label}-02-gynecology-full.png`, fullPage: true });
    });

    await safe('modal', async () => {
      const firstCard = page.locator('.disease-card').first();
      const n = await firstCard.count();
      console.log(`[${label}] disease cards:`, n);
      if (n) {
        await firstCard.evaluate((el) => el.click());
        await page.waitForTimeout(1400);
        await page.screenshot({ path: `${OUT}/${label}-03-disease-modal.png`, fullPage: false });
        const modal = page.locator('.disease-modal-body, .modal-content');
        if (await modal.count()) {
          await modal.evaluate((el) => el.scrollTo(0, el.scrollHeight / 2));
          await page.waitForTimeout(400);
          await page.screenshot({ path: `${OUT}/${label}-03b-modal-scroll.png`, fullPage: false });
        }
        const closeBtn = page.getByRole('button', { name: /Закрыть/i });
        if (await closeBtn.count()) { await closeBtn.first().evaluate((el) => el.click()); await page.waitForTimeout(500); }
      }
    });

    await safe('obs', async () => {
      const obs = page.locator('.nav-tab', { hasText: 'Акушерство' });
      await obs.click();
      await page.waitForTimeout(1100);
      await page.screenshot({ path: `${OUT}/${label}-04-obstetrics.png`, fullPage: false });
      await page.screenshot({ path: `${OUT}/${label}-04-obstetrics-full.png`, fullPage: true });
    });

    await safe('questionnaires', async () => {
      const q = page.getByRole('button', { name: 'Открыть опросники' });
      if (await q.count()) { await q.click(); await page.waitForTimeout(1400);
        await page.screenshot({ path: `${OUT}/${label}-05-questionnaires.png`, fullPage: false });
        const closeBtn = page.getByRole('button', { name: /Закрыть/i });
        if (await closeBtn.count()) { await closeBtn.first().evaluate((el) => el.click()); await page.waitForTimeout(500); }
      }
    });

    await safe('pharmacology', async () => {
      const ph = page.getByRole('button', { name: 'Открыть фармакологию' });
      if (await ph.count()) { await ph.click(); await page.waitForTimeout(1400);
        await page.screenshot({ path: `${OUT}/${label}-06-pharmacology.png`, fullPage: false });
        const closeBtn = page.getByRole('button', { name: /Закрыть/i });
        if (await closeBtn.count()) { await closeBtn.first().evaluate((el) => el.click()); await page.waitForTimeout(500); }
      }
    });

    await safe('dark', async () => {
      const theme = page.getByRole('button', { name: 'Переключить тему' });
      if (await theme.count()) { await theme.click(); await page.waitForTimeout(900);
        await page.screenshot({ path: `${OUT}/${label}-07-dark-home.png`, fullPage: false });
      }
    });

    console.log(`[${label}] errors:`, errors.length ? errors.slice(0, 8) : 'none');
    await ctx.close();
  };

  await capture({ width: 1440, height: 900 }, 'desktop');
  await capture({ width: 390, height: 844 }, 'mobile');

  await browser.close();
  console.log('DONE');
};

run().catch((e) => { console.error(e); process.exit(1); });
