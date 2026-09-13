'use strict';

const catalog = [
  { id: 'a1', name: 'Asset 1', score: 2 },
  { id: 'a2', name: 'Asset 2', score: 3 },
  { id: 'a3', name: 'Asset 3', score: 4 },
  { id: 'a4', name: 'Asset 4', score: 5 },
  { id: 'a5', name: 'Asset 5', score: 6 },
  { id: 'a6', name: 'Asset 6', score: 7 },
  { id: 'a7', name: 'Asset 7', score: 8 },
  { id: 'a8', name: 'Asset 8', score: 9 },
  { id: 'a9', name: 'Asset 9', score: 10 },
  { id: 'a10', name: 'Asset 10', score: 1 },
];

function formatScore(score) {
  if (score >= 8) return 'high';
  if (score >= 5) return 'mid';
  return 'low';
}

function listCatalog() {
  return catalog.map((row) => ({ ...row, band: formatScore(row.score) }));
}

module.exports = { catalog, formatScore, listCatalog };
