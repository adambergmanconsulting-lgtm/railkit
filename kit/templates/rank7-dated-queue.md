# Rank 7 dated queue (template)

**Purpose:** Put a named ideal instrument (check/tool that serves a rank) on a dated queue. Copy into the host ops index (or keep fields in `scripts/**/unused-export.json`). Undated / ownerless rows fail Rank **7**.

## Fast path (read first)

- One row per instrument.
- Owner + due required.
- Slipped dates re-enter the working loop ([ADOPTION.md](../ADOPTION.md#gradual-change)).

| Instrument | Serves ranks | Owner | Due (YYYY-MM-DD) | Status |
|------------|--------------|-------|------------------|--------|
| Unused-export / Knip-class | 4, 6, 7 | _(name)_ | _(date)_ | queued / shipped |
| Host unit+e2e on CI umbrella | 2, 4, 7 | _(name)_ | _(date)_ | queued / shipped |
| UI heuristics + one ui-review | 7 | _(name)_ | _(date)_ | queued / n/a |
| Vendor assert/apply | 5, 7 | _(name)_ | _(date)_ | queued / shipped |

Yardstick: [governing-priorities.md](governing-priorities.md). Mechanical unused-export gate: `npm run check:unused-export`. Worked chain: [rank-chain-example.md](rank-chain-example.md).
