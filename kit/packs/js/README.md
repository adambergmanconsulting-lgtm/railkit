# JS pack

Reference checks for a JS/TS repo (Node 20+). Principles in `docs/` do not require Node. Another stack replaces these scripts and keeps the same ranks.

| Script | Command name |
|--------|----------------|
| `documentation/check-documentation.js` | `check:documentation` |
| `documentation/check-documentation-ownership.js` | `check:documentation:ownership` |
| `architecture/check-architecture.js` | `check:architecture` |
| `architecture/check-architecture-ratchet.js` | `check:architecture:ratchet` |
| `unused-export/check-unused-export.js` | `check:unused-export` (Rank **7**; `queued` or the host tool) |
| `check-umbrella.js` | Host umbrella. `CHECK_FROM=<step>` skips earlier steps |
| `lib/repo-root.js` | Shared root walk (`packs/js/`, `scripts/`, or `scripts/railkit/`) |

Steps for `CHECK_FROM`: `documentation`, `ownership`, `architecture`, `ratchet`.

The foundation umbrella is documentation, ownership, architecture, and the size ratchet. Unused-export stays off that umbrella until Rank **1** and **2** hold.

Deferred checks that are not unused-export: [docs/ops/deferred-checks.md](../../docs/ops/deferred-checks.md).
