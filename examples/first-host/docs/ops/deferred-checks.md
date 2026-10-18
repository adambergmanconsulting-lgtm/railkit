# Deferred checks

**Purpose:** A named ideal check that is not wired yet. Each row has an owner and a due date. An undated or ownerless row is a skip, not a plan.

## Fast path (read first)

- One row per check.
- Owner + due required.
- A slipped date comes back into the working loop ([governing-priorities.md](governing-priorities.md) Rank **7**).

| Check | Serves ranks | Owner | Due (YYYY-MM-DD) | Status |
|-------|--------------|-------|------------------|--------|
| Unused-export (Knip-class or the host's equivalent tool) | 4, 6, 7 | _(name)_ | _(date)_ | queued / shipped |
| Host unit and e2e on the same umbrella as local | 2, 4, 7 | _(name)_ | _(date)_ | queued / shipped |
| UI heuristics + one ui-review | 7 | _(name)_ | _(date)_ | queued / n/a |
| Vendor assert/apply | 5, 7 | _(name)_ | _(date)_ | queued / shipped |

Yardstick: [governing-priorities.md](governing-priorities.md). JS pack unused-export command: `check:unused-export`.
