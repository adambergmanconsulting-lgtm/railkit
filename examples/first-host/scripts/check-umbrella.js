'use strict';

/**
 * JS-pack umbrella. Steps: documentation, ownership, architecture, ratchet.
 * CHECK_FROM=<step> skips earlier steps that already passed in this session.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const STEPS = [
  ['documentation', 'documentation/check-documentation.js'],
  ['ownership', 'documentation/check-documentation-ownership.js'],
  ['architecture', 'architecture/check-architecture.js'],
  ['ratchet', 'architecture/check-architecture-ratchet.js'],
];

function main() {
  const from = process.env.CHECK_FROM || '';
  let skip = Boolean(from);
  for (const [name, rel] of STEPS) {
    if (skip) {
      if (name !== from) continue;
      skip = false;
    }
    const result = spawnSync(process.execPath, [path.join(__dirname, rel)], {
      stdio: 'inherit',
    });
    if (result.status !== 0) process.exit(result.status == null ? 1 : result.status);
  }
  if (skip) {
    const names = STEPS.map((step) => step[0]).join(', ');
    console.error(`CHECK_FROM=${from} is not a step. Steps: ${names}`);
    process.exit(1);
  }
}

main();
