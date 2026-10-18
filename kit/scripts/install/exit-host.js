'use strict';

/**
 * Engagement end: move nested scripts, rename the umbrella, drop the
 * install manual and adopt playbook, then fail if the brand remains.
 */

const fs = require('fs');
const path = require('path');

function moveNestedScripts(host) {
  const nested = path.join(host, 'scripts', 'railkit');
  if (!fs.existsSync(nested)) return;
  const destRoot = path.join(host, 'scripts');
  for (const name of fs.readdirSync(nested)) {
    const from = path.join(nested, name);
    const to = path.join(destRoot, name);
    fs.rmSync(to, { recursive: true, force: true });
    fs.renameSync(from, to);
  }
  fs.rmSync(nested, { recursive: true, force: true });
}

function governingLink(fromFile, host) {
  const gov = path.join(host, 'docs', 'ops', 'governing-priorities.md');
  let rel = path.relative(path.dirname(fromFile), gov).split(path.sep).join('/');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

function rewriteNativeText(host, walkFiles, umbrellaName) {
  for (const abs of walkFiles(host)) {
    let text;
    try {
      text = fs.readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    if (text.includes('\0')) continue;
    const gov = governingLink(abs, host);
    const next = text
      .replaceAll('scripts/railkit/', 'scripts/')
      .replaceAll('check:railkit', umbrellaName)
      .replace(
        /\[[^\]]+\]\([^)]*(?:ADOPTION|00-QUICK-START)\.md[^)]*\)/g,
        `[priority ranks](${gov})`
      );
    if (next !== text) fs.writeFileSync(abs, next);
  }
}

function stripEngagementLines(abs) {
  if (!fs.existsSync(abs)) return;
  const text = fs.readFileSync(abs, 'utf8');
  const next = text
    .split(/\r?\n/)
    .filter(
      (line) =>
        !line.includes('00-QUICK-START.md') &&
        !line.includes('ADOPTION.md') &&
        !line.includes('skills/adopt')
    )
    .join('\n');
  if (!next.endsWith('\n')) fs.writeFileSync(abs, `${next}\n`);
  else fs.writeFileSync(abs, next);
}

function assertNative(host, walkFiles) {
  const banned = [/Railkit/, /check:railkit/, /scripts\/railkit/];
  const hits = [];
  for (const abs of walkFiles(host)) {
    let text;
    try {
      text = fs.readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    if (text.includes('\0')) continue;
    const rel = path.relative(host, abs).split(path.sep).join('/');
    if (rel.startsWith('node_modules/')) continue;
    for (const re of banned) {
      if (re.test(text)) hits.push(`${rel} matches ${re}`);
    }
  }
  if (hits.length) {
    console.error(`exit: brand or engagement paths remain:\n${hits.join('\n')}`);
    process.exit(1);
  }
}

function exitHost(host, deps) {
  const { walkFiles, rm, patchOwnership, patchDocumentationBudgets, umbrellaName } = deps;
  moveNestedScripts(host);
  const legacy = path.join(host, 'docs', 'ops', 'rank7-dated-queue.md');
  const deferred = path.join(host, 'docs', 'ops', 'deferred-checks.md');
  if (fs.existsSync(legacy)) {
    if (!fs.existsSync(deferred)) fs.renameSync(legacy, deferred);
    else fs.rmSync(legacy);
  }
  rewriteNativeText(host, walkFiles, umbrellaName);
  rm(host, 'docs/00-QUICK-START.md');
  rm(host, 'docs/ADOPTION.md');
  rm(host, 'agents/skills/adopt.md');
  rm(host, '.cursor/skills/adopt');
  stripEngagementLines(path.join(host, 'llm.txt'));
  stripEngagementLines(path.join(host, '.cursorrules'));
  stripEngagementLines(path.join(host, 'README.md'));
  stripEngagementLines(path.join(host, 'docs', 'CANONICAL-SOURCES.md'));
  stripEngagementLines(path.join(host, 'agents', 'README.md'));
  const scriptsRoot = fs.existsSync(path.join(host, 'scripts', 'documentation'))
    ? path.join(host, 'scripts')
    : path.join(host, 'scripts', 'railkit');
  patchOwnership(host, scriptsRoot);
  if (patchDocumentationBudgets) patchDocumentationBudgets(host, scriptsRoot);
  assertNative(host, walkFiles);
}

module.exports = { exitHost };
