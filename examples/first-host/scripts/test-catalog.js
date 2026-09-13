'use strict';

const assert = require('assert');
const { formatScore, listCatalog } = require('../src/catalog');
const { metricsStrip, averageScore } = require('../src/metrics');

assert.strictEqual(formatScore(9), 'high');
assert.strictEqual(formatScore(5), 'mid');
assert.strictEqual(formatScore(2), 'low');

const rows = listCatalog();
assert.ok(rows.length >= 1);
assert.ok(rows.every((r) => r.band));

const avg = averageScore(rows);
assert.ok(typeof avg === 'number');

const strip = metricsStrip();
assert.strictEqual(strip.count, rows.length);
assert.ok(strip.highs >= 0);

console.log('test:catalog OK');
