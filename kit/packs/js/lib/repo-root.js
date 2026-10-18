'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Resolve host/kit repo root whether scripts live at:
 * - <root>/packs/js/<area>/ (kit checkout)
 * - <root>/scripts/<area>/ (host after exit, or --scripts-merge)
 * - <root>/scripts/railkit/<area>/ (host during an engagement)
 * Walks up until docs/CODE-FIRST.md + package.json exist
 * (CODE-FIRST stays after exit; the adopt playbook does not).
 */
function findRepoRoot(startDir) {
  let dir = path.resolve(startDir);
  for (;;) {
    const marker = path.join(dir, 'docs', 'CODE-FIRST.md');
    const pkg = path.join(dir, 'package.json');
    if (fs.existsSync(marker) && fs.existsSync(pkg)) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.resolve(startDir, '../..');
}

module.exports = { findRepoRoot };
