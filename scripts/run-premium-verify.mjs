import { spawn } from 'node:child_process';

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';
const nodeCmd = isWindows ? 'node.exe' : 'node';
const auditBaseUrl = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:4173';

const preServerSteps = [
  ['typecheck', npmCmd, ['run', 'typecheck']],
  ['tests', npmCmd, ['run', 'test:run']],
  ['content strict', npmCmd, ['run', 'audit:content', '--', '--strict']],
  ['ICD strict', npmCmd, ['run', 'audit:icd', '--', '--strict']],
  ['source mojibake', npmCmd, ['run', 'audit:mojibake:source']],
  ['build', npmCmd, ['run', 'build']],
];

const browserSteps = [
  ['iPhone audit', npmCmd, ['run', 'audit:iphone']],
  ['iPhone overlap audit', npmCmd, ['run', 'audit:iphone:overlap']],
  ['pastel audit', npmCmd, ['run', 'audit:pastel']],
  ['accessibility audit', npmCmd, ['run', 'audit:a11y']],
  ['visual iPhone audit', npmCmd, ['run', 'audit:visual:iphone']],
];

function runStep(label, command, args, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`\n[verify:premium] ${label}`);
    const child = spawn(command, args, {
      stdio: options.stdio || 'inherit',
      shell: isWindows,
      env: { ...process.env, AUDIT_BASE_URL: auditBaseUrl, AUDIT_URL: auditBaseUrl, ...options.env },
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${label} failed with exit code ${code}`));
      }
    });
  });
}

async function waitForServer(url, timeoutMs = 15000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (response.ok) return;
    } catch {
      // Keep waiting while the local audit server starts.
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
  throw new Error(`Audit server did not become ready at ${url}`);
}

for (const [label, command, args] of preServerSteps) {
  await runStep(label, command, args);
}

console.log(`\n[verify:premium] starting static audit server at ${auditBaseUrl}`);
const server = spawn(nodeCmd, ['scripts/serve-dist-audit.cjs'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: false,
  env: { ...process.env, HOST: '127.0.0.1', PORT: '4173' },
});

server.stdout.on('data', (chunk) => process.stdout.write(`[audit-server] ${chunk}`));
server.stderr.on('data', (chunk) => process.stderr.write(`[audit-server] ${chunk}`));

try {
  await waitForServer(auditBaseUrl);
  for (const [label, command, args] of browserSteps) {
    await runStep(label, command, args);
  }
} finally {
  server.kill();
}

console.log('\n[verify:premium] all gates passed');
