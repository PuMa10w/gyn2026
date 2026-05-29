import { spawnSync } from 'node:child_process';
import fs from 'node:fs';

const TARGET_PROJECT = 'gyn-premium';
const BLOCKED_PROJECTS = new Set(['gyn', 'gynecology']);

const wranglerConfig = fs.existsSync('wrangler.toml') ? fs.readFileSync('wrangler.toml', 'utf8') : '';
const configuredName = wranglerConfig.match(/^\s*name\s*=\s*"([^"]+)"/m)?.[1] || '';

if (configuredName && configuredName !== TARGET_PROJECT) {
  console.error(`[deploy:production] wrangler.toml points to "${configuredName}", expected "${TARGET_PROJECT}".`);
  process.exit(1);
}

if (BLOCKED_PROJECTS.has(configuredName)) {
  console.error(`[deploy:production] Refusing to deploy to legacy project "${configuredName}".`);
  process.exit(1);
}

if (!fs.existsSync('dist/index.html')) {
  console.error('[deploy:production] dist/index.html is missing. Run npm.cmd run build first.');
  process.exit(1);
}

console.log(`[deploy:production] Deploying fresh dist to Cloudflare Pages project "${TARGET_PROJECT}"...`);

const result = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['wrangler', 'pages', 'deploy', 'dist', '--project-name', TARGET_PROJECT],
  { stdio: 'inherit', shell: true },
);

process.exit(result.status ?? 1);
