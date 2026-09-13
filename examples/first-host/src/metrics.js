'use strict';

const { listCatalog } = require('./catalog');

function averageScore(rows) {
  if (!rows.length) return 0;
  return rows.reduce((s, r) => s + r.score, 0) / rows.length;
}

function metricsStrip() {
  const rows = listCatalog();
  return {
    count: rows.length,
    average: averageScore(rows),
    highs: rows.filter((r) => r.band === 'high').length,
  };
}

module.exports = { averageScore, metricsStrip };
