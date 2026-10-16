#!/usr/bin/env node
'use strict';

/**
 * Copy kit/ into a host tree per docs/00-QUICK-START.md.
 * Usage: node scripts/install/copy-kit-to-host.js --target <hostDir>
 * From monorepo: node kit/scripts/install/copy-kit-to-host.js --target examples/first-host
 *
 * Default packs: core, ui, fit.
 * Opt in: --packs hosting (infra contract), --packs seller (engagement-review; monorepo only).
 * After adopt: --trim-adopt drops the install manual from the host deciding homes.
 */

const fs = require('fs');
const path = require('path');

const kitRoot = path.resolve(__dirname, '../..');
const GITHUB = 'https://github.com/adambergmanconsulting-lgtm/railkit';
const DEFAULT_PACKS = ['core', 'ui', 'fit'];
const KIT_ROOTS = ['scripts', 'agents', 'adapters'];

function parseArgs(argv) {
  const out = {
    target: null,
    scriptsLayout: 'railkit',
    packs: new Set(DEFAULT_PACKS),
    trimAdopt: false,
  };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--target') out.target = argv[++i];
    else if (argv[i] === '--scripts-merge') out.scriptsLayout = 'merge';
    else if (argv[i] === '--packs') {
      out.packs = new Set(
        String(argv[++i] || '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      );
      out.packs.add('core');
    } else if (argv[i] === '--trim-adopt') out.trimAdopt = true;
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

function rm(host, rel) {
  const abs = path.join(host, rel);
  fs.rmSync(abs, { recursive: true, force: true });
}

function walkFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkFiles(p, acc);
    else acc.push(p);
  }
  return acc;
}

function hostRelToKitRel(hostRel, scriptsLayout) {
  const n = hostRel.split(path.sep).join('/');
  if (n.startsWith('docs/') || n.startsWith('agents/') || n.startsWith('infra/')) {
    return `kit/${n}`;
  }
  if (n === 'AGENTS.md' || n === 'llm.txt') return `kit/${n}`;
  if (n === 'adapters/README.md') return 'kit/adapters/README.md';
  if (n === '.cursorrules') return 'kit/templates/agent-session-rules.md';
  if (n.startsWith('.cursor/rules/')) {
    return `kit/adapters/cursor/rules/${n.slice('.cursor/rules/'.length)}`;
  }
  if (n.startsWith('.cursor/skills/')) {
    return `kit/adapters/cursor/skills/${n.slice('.cursor/skills/'.length)}`;
  }
  if (scriptsLayout === 'merge' && n.startsWith('scripts/')) {
    return `kit/scripts/${n.slice('scripts/'.length)}`;
  }
  if (n.startsWith('scripts/railkit/')) {
    return `kit/scripts/${n.slice('scripts/railkit/'.length)}`;
  }
  return null;
}

function githubUrl(repoRel) {
  const clean = repoRel.replace(/\\/g, '/').replace(/^\.\//, '');
  const isFile = /\.[a-z0-9]+$/i.test(clean.split('/').pop() || '');
  return `${GITHUB}/${isFile ? 'blob' : 'tree'}/main/${clean}`;
}

function rewriteLinks(text, kitRel, skippedKitRels) {
  return text.replace(/\]\(([^)\s]+)\)/g, (full, href) => {
    if (/^(https?:|mailto:|#)/.test(href)) return full;
    const hashAt = href.indexOf('#');
    const pathPart = hashAt >= 0 ? href.slice(0, hashAt) : href;
    const hash = hashAt >= 0 ? href.slice(hashAt) : '';
    if (!pathPart) return full;
    const resolved = path.posix.normalize(
      path.posix.join(path.posix.dirname(kitRel), pathPart)
    );
    const outsideKit = !resolved.startsWith('kit/');
    if (outsideKit || skippedKitRels.has(resolved)) {
      return `](${githubUrl(resolved)}${hash})`;
    }
    return full;
  });
}

function prunePacks(host, packs) {
  const skipped = new Set([
    'kit/docs/MAP.md',
    'kit/docs/ops/rank-chain-example.md',
  ]);
  rm(host, 'docs/MAP.md');
  rm(host, 'docs/ops/rank-chain-example.md');

  if (!packs.has('seller')) {
    rm(host, 'agents/skills/engagement-review.md');
    rm(host, '.cursor/skills/engagement-review');
    skipped.add('kit/agents/skills/engagement-review.md');
    skipped.add('kit/adapters/cursor/skills/engagement-review/SKILL.md');
    const readme = path.join(host, 'agents/README.md');
    if (fs.existsSync(readme)) {
      const text = fs
        .readFileSync(readme, 'utf8')
        .replace(/\| \[engagement-review\.md\][^\n]*\n/, '');
      fs.writeFileSync(readme, text);
    }
  }
  if (!packs.has('ui')) {
    for (const rel of [
      'docs/product/heuristics/ui-principles.md',
      'docs/product/heuristics/ui-naming.md',
      'docs/product/heuristics/in-page-layout.md',
      'docs/product/heuristics/living-design-surface.md',
      'agents/skills/ui-review.md',
      '.cursor/skills/ui-review',
    ]) {
      rm(host, rel);
      skipped.add(rel.startsWith('.cursor/')
        ? `kit/adapters/cursor/skills/ui-review/SKILL.md`
        : `kit/${rel}`);
    }
  }
  if (!packs.has('fit')) {
    for (const rel of [
      'docs/product/heuristics/customer-targets.md',
      'docs/product/heuristics/customer-fit.md',
      'agents/skills/fit-review.md',
      '.cursor/skills/fit-review',
    ]) {
      rm(host, rel);
    }
    skipped.add('kit/docs/product/heuristics/customer-targets.md');
    skipped.add('kit/docs/product/heuristics/customer-fit.md');
    skipped.add('kit/agents/skills/fit-review.md');
    skipped.add('kit/adapters/cursor/skills/fit-review/SKILL.md');
  }
  if (!packs.has('hosting')) {
    rm(host, 'infra');
    skipped.add('kit/infra/contracts/example-hosting-contract.json');
    skipped.add('kit/infra/README.md');
    skipped.add('kit/infra/contracts/README.md');
    const integrations = path.join(host, 'docs/ops/integrations-as-code.md');
    if (fs.existsSync(integrations)) {
      const text = fs.readFileSync(integrations, 'utf8').replace(
        /## Example\r?\n\r?\nSee \[`example-hosting-contract\.json`\]\([^)]+\)\. Replace with the host's cloud and DNS provider\. Keep the idea: machine-readable desired state \+ code that applies or checks it\./,
        '## Example\n\nNo hosting contract was copied. Record deploy in the CI host fill-in. Re-run install with `--packs hosting` when the host has DNS, edge, or a vendor portal.'
      );
      fs.writeFileSync(integrations, text);
    }
  }
  return skipped;
}

function rewriteTree(host, scriptsLayout, skippedKitRels) {
  for (const abs of walkFiles(host)) {
    if (!abs.endsWith('.md') && !abs.endsWith('.mdc') && !abs.endsWith('llm.txt')) continue;
    const hostRel = path.relative(host, abs);
    const kitRel = hostRelToKitRel(hostRel, scriptsLayout);
    if (!kitRel) continue;
    const text = fs.readFileSync(abs, 'utf8');
    const next = rewriteLinks(text, kitRel, skippedKitRels);
    let patched = next;
    if (hostRel.split(path.sep).join('/') === 'llm.txt') {
      patched = patched.replace(/^- browse docs -> docs\/MAP\.md\r?\n/m, '');
    }
    if (patched !== text) fs.writeFileSync(abs, patched);
  }
}

function patchArchitectureRoots(host, scriptsDest) {
  const budgetsPath = path.join(scriptsDest, 'architecture', 'architecture-budgets.json');
  if (!fs.existsSync(budgetsPath)) return 'unchanged';
  const budgets = JSON.parse(fs.readFileSync(budgetsPath, 'utf8'));
  if (JSON.stringify(budgets.roots) !== JSON.stringify(KIT_ROOTS)) return 'already set';
  if (fs.existsSync(path.join(host, 'src'))) budgets.roots = ['src'];
  else if (
    fs.existsSync(path.join(host, 'apps')) &&
    fs.existsSync(path.join(host, 'packages'))
  ) {
    budgets.roots = ['apps', 'packages'];
  } else {
    return 'kit default (no src, apps, or packages)';
  }
  fs.writeFileSync(budgetsPath, `${JSON.stringify(budgets, null, 2)}\n`);
  return budgets.roots.join(', ');
}

function patchOwnership(host, scriptsDest) {
  const rel =
    path.basename(scriptsDest) === 'railkit'
      ? path.join(scriptsDest, 'documentation', 'documentation-ownership.json')
      : path.join(scriptsDest, 'documentation', 'documentation-ownership.json');
  if (!fs.existsSync(rel)) return;
  const cfg = JSON.parse(fs.readFileSync(rel, 'utf8'));
  cfg.decidingHomes = (cfg.decidingHomes || []).filter((home) =>
    fs.existsSync(path.join(host, home))
  );
  fs.writeFileSync(rel, `${JSON.stringify(cfg, null, 2)}\n`);
}

function trimAdopt(host, scriptsDest) {
  rm(host, 'docs/00-QUICK-START.md');
  patchOwnership(host, scriptsDest);
  const receipt = path.join(host, 'docs/ops/adopt-receipt.md');
  if (!fs.existsSync(receipt)) {
    const template = path.join(kitRoot, 'templates', 'adopt-receipt.md');
    copyFile(template, receipt);
  }
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.target) {
    console.log(`Usage: node copy-kit-to-host.js --target <hostDir> [--scripts-merge] [--packs core,ui,fit,hosting,seller] [--trim-adopt]

Copies the kit skeleton into the host. Does not copy monorepo project/.
Default packs: core, ui, fit. Hosting and seller are opt-in.
Omits docs/MAP.md, the rank-chain teaching story, and monorepo-relative links (rewritten to GitHub).
When the host has src/ (or apps/ and packages/), architecture roots leave the kit default.
--trim-adopt removes docs/00-QUICK-START.md from deciding homes and adds docs/ops/adopt-receipt.md if missing.`);
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
  copyDir(path.join(kitRoot, 'scripts'), scriptsDest, { skip: ['install'] });

  if (args.packs.has('hosting')) {
    copyDir(path.join(kitRoot, 'infra'), path.join(host, 'infra'));
  }

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

  if (!fs.existsSync(path.join(host, 'README.md'))) {
    copyFile(
      path.join(kitRoot, 'templates', 'host-readme-stub.md'),
      path.join(host, 'README.md')
    );
  }

  const skipped = prunePacks(host, args.packs);
  rewriteTree(host, args.scriptsLayout, skipped);
  const roots = patchArchitectureRoots(host, scriptsDest);
  patchOwnership(host, scriptsDest);
  if (args.trimAdopt) trimAdopt(host, scriptsDest);

  console.log(`copy-kit-to-host OK -> ${host}`);
  console.log(`packs: ${[...args.packs].join(', ')}`);
  console.log(
    `scripts layout: ${args.scriptsLayout === 'merge' ? 'scripts/<area>' : 'scripts/railkit/<area>'}`
  );
  console.log(`architecture roots: ${roots}`);
  console.log(
    'Next: wire package.json check scripts; fill host tables; run ADOPTION.md. After adopt, re-run with --trim-adopt.'
  );
}

if (require.main === module) main();
