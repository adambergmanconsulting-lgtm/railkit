'use strict';

/**
 * Editor pack: always-on Cursor rules stay few and short.
 * Default scan: <repo>/.cursor/rules. Override with --rules <dir>.
 * Caps: 3 always-on files, 30 body lines each.
 */

const fs = require('fs');
const path = require('path');

const MAX_ALWAYS_ON = 3;
const MAX_BODY_LINES = 30;

function parseArgs(argv) {
  let rulesDir = null;
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--rules') rulesDir = argv[++i];
  }
  return { rulesDir };
}

function splitFrontmatter(content) {
  if (!content.startsWith('---')) return { frontmatter: '', body: content };
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return { frontmatter: '', body: content };
  return {
    frontmatter: match[0],
    body: content.slice(match[0].length),
  };
}

function alwaysOn(frontmatter) {
  return /^alwaysApply:\s*true\s*$/m.test(frontmatter);
}

function bodyLines(body) {
  return body.split(/\r?\n/).filter((line) => line.trim().length > 0).length;
}

function main() {
  const args = parseArgs(process.argv);
  const rulesDir = args.rulesDir
    ? path.resolve(process.cwd(), args.rulesDir)
    : path.join(process.cwd(), '.cursor', 'rules');
  if (!fs.existsSync(rulesDir)) {
    console.log(`editor rules: no ${rulesDir} (skip)`);
    return;
  }
  const files = fs
    .readdirSync(rulesDir)
    .filter((name) => name.endsWith('.mdc'))
    .sort();
  const failures = [];
  const always = [];
  for (const name of files) {
    const raw = fs.readFileSync(path.join(rulesDir, name), 'utf8');
    const { frontmatter, body } = splitFrontmatter(raw);
    if (!alwaysOn(frontmatter)) continue;
    always.push(name);
    const lines = bodyLines(body);
    if (lines > MAX_BODY_LINES) {
      failures.push(`${name}: ${lines} body lines (max ${MAX_BODY_LINES})`);
    }
  }
  if (always.length > MAX_ALWAYS_ON) {
    failures.push(
      `${always.length} always-on rules (max ${MAX_ALWAYS_ON}): ${always.join(', ')}`
    );
  }
  if (failures.length) {
    console.error(failures.join('\n'));
    process.exit(1);
  }
  console.log(`editor rules: ${always.length} always-on, cap ${MAX_ALWAYS_ON}`);
}

main();
