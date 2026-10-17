'use strict';

const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const script = path.join(__dirname, 'copy-kit-to-host.js');

function freshHost() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'railkit-host-'));
}

function run(host, extra = []) {
  execFileSync(process.execPath, [script, '--target', host, ...extra], {
    stdio: 'pipe',
  });
}

test('default copy keeps governing docs and drops seller, map, rank-chain, and hosting', () => {
  const host = freshHost();
  fs.mkdirSync(path.join(host, 'src'));
  run(host);

  assert.equal(fs.existsSync(path.join(host, 'docs/ADOPTION.md')), true);
  assert.equal(fs.existsSync(path.join(host, 'docs/CANONICAL-SOURCES.md')), true);
  assert.equal(fs.existsSync(path.join(host, 'agents/skills/engagement-review.md')), false);
  assert.equal(fs.existsSync(path.join(host, '.cursor/skills/engagement-review')), false);
  assert.equal(fs.existsSync(path.join(host, 'docs/MAP.md')), false);
  assert.equal(fs.existsSync(path.join(host, 'docs/ops/rank-chain-example.md')), false);
  assert.equal(fs.existsSync(path.join(host, 'infra')), false);

  const agents = fs.readFileSync(path.join(host, 'agents/README.md'), 'utf8');
  assert.equal(agents.includes('engagement-review.md'), false);

  const adoption = fs.readFileSync(path.join(host, 'docs/ADOPTION.md'), 'utf8');
  assert.match(
    adoption,
    /https:\/\/github.com\/adambergmanconsulting-lgtm\/railkit\/tree\/main\/examples\/first-host/
  );
  assert.doesNotMatch(adoption, /\]\(\.\.\/\.\.\/examples\//);

  const targets = fs.readFileSync(
    path.join(host, 'docs/product/heuristics/customer-targets.md'),
    'utf8'
  );
  assert.doesNotMatch(targets, /Free \/ entry/);
  assert.match(targets, /Who uses this/);

  const layer = fs.readFileSync(
    path.join(host, 'docs/engineering/architecture/application-layering.md'),
    'utf8'
  );
  assert.match(layer, /Delete if absent/);

  const budgets = JSON.parse(
    fs.readFileSync(
      path.join(host, 'scripts/railkit/architecture/architecture-budgets.json'),
      'utf8'
    )
  );
  assert.deepEqual(budgets.roots, ['src']);

  const llm = fs.readFileSync(path.join(host, 'llm.txt'), 'utf8');
  assert.equal(llm.includes('docs/MAP.md'), false);

  const integrations = fs.readFileSync(
    path.join(host, 'docs/ops/integrations-as-code.md'),
    'utf8'
  );
  assert.match(integrations, /--packs hosting/);
  assert.doesNotMatch(integrations, /example-hosting-contract\.json/);

  const ciFlow = fs.readFileSync(path.join(host, 'docs/ops/ci-flow.md'), 'utf8');
  assert.match(ciFlow, /scripts\/railkit\/ci\/README\.md/);

  const scriptsReadme = fs.readFileSync(path.join(host, 'scripts/railkit/README.md'), 'utf8');
  assert.equal(scriptsReadme.includes('first-host-checks.yml'), false);

  const docBudgets = JSON.parse(
    fs.readFileSync(
      path.join(host, 'scripts/railkit/documentation/documentation-budgets.json'),
      'utf8'
    )
  );
  const globs = Object.values(docBudgets.areas).flatMap((area) => area.globs);
  assert.equal(globs.includes('docs/MAP.md'), false);

  const prChecks = fs.readFileSync(
    path.join(host, '.github/workflows/pr-checks.yml'),
    'utf8'
  );
  assert.match(prChecks, /pull_request/);
  assert.doesNotMatch(prChecks, /^  push:/m);
});

test('hosting pack copies the example contract', () => {
  const host = freshHost();
  run(host, ['--packs', 'core,hosting']);
  assert.equal(
    fs.existsSync(path.join(host, 'infra/contracts/example-hosting-contract.json')),
    true
  );
  assert.equal(fs.existsSync(path.join(host, 'docs/product/heuristics/ui-principles.md')), false);
});

test('trim-adopt removes the install manual from deciding homes', () => {
  const host = freshHost();
  fs.mkdirSync(path.join(host, 'apps'));
  fs.mkdirSync(path.join(host, 'packages'));
  run(host, ['--trim-adopt']);

  assert.equal(fs.existsSync(path.join(host, 'docs/00-QUICK-START.md')), false);
  assert.equal(fs.existsSync(path.join(host, 'docs/ops/adopt-receipt.md')), true);
  const ownership = JSON.parse(
    fs.readFileSync(
      path.join(host, 'scripts/railkit/documentation/documentation-ownership.json'),
      'utf8'
    )
  );
  assert.equal(ownership.decidingHomes.includes('docs/00-QUICK-START.md'), false);
  assert.equal(ownership.decidingHomes.includes('docs/ADOPTION.md'), true);

  const budgets = JSON.parse(
    fs.readFileSync(
      path.join(host, 'scripts/railkit/architecture/architecture-budgets.json'),
      'utf8'
    )
  );
  assert.deepEqual(budgets.roots, ['apps', 'packages']);
});
