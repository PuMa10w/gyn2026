import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { repairText } from '../src/utils/textRepair.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const findings = [];

function addFinding(rule, detail) {
  findings.push({ rule, detail });
}

async function readRequired(file) {
  try {
    return await fs.readFile(path.join(dist, file), 'utf8');
  } catch {
    addFinding('missing dist file', file);
    return '';
  }
}

const indexHtml = await readRequired('index.html');
const manifestText = await readRequired('manifest.webmanifest');
const swText = await readRequired('sw.js');

let manifest = null;
try {
  manifest = JSON.parse(manifestText);
} catch {
  addFinding('invalid manifest json', 'manifest.webmanifest is not parseable');
}

if (manifest) {
  const metadata = [manifest.name, manifest.short_name, manifest.description].filter(Boolean).join(' ');
  if (repairText(metadata) !== metadata) {
    addFinding('manifest mojibake', metadata);
  }

  if (!/гинеколог|акушер/i.test(manifest.description || '')) {
    addFinding('manifest clinical metadata', JSON.stringify({
      name: manifest.name,
      short_name: manifest.short_name,
      description: manifest.description,
    }));
  }
}

const assetMatches = [...indexHtml.matchAll(/(?:src|href)="([^"]*assets\/[^"]+)"/g)].map((match) => match[1]);

if (!assetMatches.length) {
  addFinding('missing hashed assets', 'index.html does not reference Vite asset chunks');
}

for (const asset of assetMatches) {
  const cleanAsset = asset.replace(/^\//, '');
  try {
    await fs.access(path.join(dist, cleanAsset));
  } catch {
    addFinding('missing referenced asset', cleanAsset);
  }
}

for (const asset of assetMatches) {
  const fileName = path.basename(asset);
  if (!swText.includes(fileName)) {
    addFinding('asset not precached', fileName);
  }
}

if (!/cleanupOutdatedCaches|precacheAndRoute|__WB_MANIFEST|workbox/.test(swText)) {
  addFinding('service worker freshness', 'sw.js does not look like a generated Workbox service worker');
}

const report = {
  ok: findings.length === 0,
  checkedAssets: assetMatches.length,
  findings,
};

await fs.mkdir(path.join(root, 'artifacts'), { recursive: true });
await fs.writeFile(path.join(root, 'artifacts', 'pwa-freshness-audit.json'), `${JSON.stringify(report, null, 2)}\n`);

if (findings.length) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report, null, 2));

