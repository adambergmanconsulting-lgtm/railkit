#!/usr/bin/env node
'use strict';

/**
 * Copy kit/ into a host tree per docs/00-QUICK-START.md.
 * Usage: node scripts/install/copy-kit-to-host.js --target <hostDir>
 * From monorepo: node kit/scripts/install/copy-kit-to-host.js --target examples/first-host
 */

const fs = require('fs');
const path = require('path');

const kitRoot = path.resolve(__dirname, '../..');

function parseArgs(argv) {
  const out = { target: null, scriptsLayout: 'railkit' };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--target') out.target = argv[++i];
    else if (argv[i] === '--scripts-merge') out.scriptsLayout = 'merge';
    else if (argv[i] === '--help' || argv[i] === '-h') out.help = true;
  }
  return out;
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest, { skip = [] } = {}) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    if (skip.includes(name)) continue;
    const from = path.join(src, name);
    const to = path.join(dest, name);
    const st = fs.statSync(from);
    if (st.isDirectory()) copyDir(from, to, { skip });
    else copyFile(from, to);
  }
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.target) {
    console.log(`Usage: node copy-kit-to-host.js --target <hostDir> [--scripts-merge]

Copies kit skeleton into the host. Does not copy monorepo project/.
Default scripts layout: host/scripts/railkit/ (use --scripts-merge for host/scripts/{area}/).`);
    process.exit(args.help ? 0 : 1);
  }

  const host = path.resolve(process.cwd(), args.target);
  fs.mkdirSync(host, { recursive: true });

  copyDir(path.join(kitRoot, 'docs'), path.join(host, 'docs'));
  copyDir(path.join(kitRoot, 'agents'), path.join(host, 'agents'));
  copyDir(path.join(kitRoot, 'adapters', 'cursor', 'rules'), path.join(host, '.cursor', 'rules'));
  copyDir(path.join(kitRoot, 'adapters', 'cursor', 'skills'), path.join(host, '.cursor', 'skills'));

  const scriptsDest =
    args.scriptsLayout === 'merge'
      ? path.join(host, 'scripts')
      : path.join(host, 'scripts', 'railkit');
  copyDir(path.join(kitRoot, 'scripts'), scriptsDest, {
    skip: ['install'],
  });

  copyDir(path.join(kitRoot, 'infra'), path.join(host, 'infra'));

  copyFile(path.join(kitRoot, 'AGENTS.md'), path.join(host, 'AGENTS.md'));
  copyFile(path.join(kitRoot, 'llm.txt'), path.join(host, 'llm.txt'));
  copyFile(
    path.join(kitRoot, 'templates', 'agent-session-rules.md'),
    path.join(host, '.cursorrules')
  );
  copyFile(
    path.join(kitRoot, 'adapters', 'README.md'),
    path.join(host, 'adapters', 'README.md')
  );
  copyFile(
    path.join(kitRoot, 'templates', 'rank7-dated-queue.md'),
    path.join(host, 'docs', 'ops', 'rank7-dated-queue.md')
  );

  // Never install kit README (monorepo project/ links). Host stub or keep existing.
  if (!fs.existsSync(path.join(host, 'README.md'))) {
    copyFile(
      path.join(kitRoot, 'templates', 'host-readme-stub.md'),
      path.join(host, 'README.md')
    );
  }

  console.log(`copy-kit-to-host OK -> ${host}`);
  console.log(
    `scripts layout: ${args.scriptsLayout === 'merge' ? 'scripts/<area>' : 'scripts/railkit/<area>'}`
  );
  console.log(
    'Next: wire package.json check scripts; set architecture-budgets roots to host src (not kit scripts); run ADOPTION.md; Rank 7: npm run check:unused-export (queued or knip)'
  );
}

main();
