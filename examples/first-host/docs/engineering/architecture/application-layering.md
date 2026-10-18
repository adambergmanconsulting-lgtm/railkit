# Application layering

**Purpose:** Stack-neutral layer boundaries so locks, caching, security, and agent edits stay consistent.

## Fast path (read first)

- **Thin shells:** HTTP handlers / UI route files parse input, call domain, map response. No raw persistence in the shell.
- **Domain owns writes:** one coordinator per concern for persistence ordering and side effects.
- **Hot paths first:** high-frequency probes and list/shell APIs stay cheap; thorough checks stay rare or cached.
- **Single source of truth:** shared access / identity / photo-or-asset resolution lives in one helper; surfaces call it.
- **Quality detail:** [code-quality-and-refactor.md](../../ops/code-quality-and-refactor.md).

## Boundary table (adapt names to host stack)

| Layer | Responsibility |
|-------|----------------|
| **UI / page / route shell** | Orchestration, loading, wiring hooks |
| **HTTP API handler** | Parse, auth gate, call domain, status + JSON |
| **Domain service / store** | Persistence, transactions, invalidation |
| **Shared contracts** | Access decisions, identity keys, cross-surface resolution |
| **Infra adapters** | Cloud SDKs, email, payments (behind narrow ports) |

## Delete if absent

Remove a boundary row when this host has no such layer. A static site deletes the HTTP API handler and infra adapters. Delete the admin-versus-end-user Prefer row when there is one surface. Host fill-in lists only folders that exist.

## Prefer / Avoid

| Prefer | Avoid |
|--------|--------|
| New persistence only in domain modules | New DB handles in generic `lib/` or UI trees |
| One write path per entity concern | Parallel `v2` write path without a removal plan |
| Batch reads on list endpoints | N+1 queries on hot paths |
| Fail-fast when not ready | Spin-wait on every probe |
| **Minor domain splits** (e.g. admin vs end-user) as separate Prefer/Avoid or CANONICAL rows when surfaces differ for good reason | Treating admin vs user as a dual home of the *same* deciding concept; or one blob Prefer/Avoid that fights both surfaces |

## Host fill-in

| Host layer | Folder |
|------------|--------|
| _(name)_ | _(path)_ |

Name both shells when admin and end-user diverge. They are minor domains, not two owners for one rule.
