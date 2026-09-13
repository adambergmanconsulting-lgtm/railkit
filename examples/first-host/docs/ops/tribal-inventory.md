# Tribal → code inventory

**Purpose:** Adopt step 5 inventory for Demo Catalog (first-host). Dated queues are Rank **7** OK.

## Fast path (read first)

- Inventory exists (adopt exit).
- Prefer script / contract / workflow; else owner + date.

## Inventory

| Process (was tribal) | Status | Owner / path |
|----------------------|--------|----------------|
| Deploy / Vercel token steps (README vs DEPLOY dual home) | Queued | Hosting contract under `infra/contracts/` — owner eng lead — target 2026-10-15 |
| "Ask Slack for release" | Queued | Replace with CI umbrella note in [ci-flow.md](ci-flow.md) — 2026-10-15 |
| Catalog quality bands | Moved to code | `src/catalog.js` + `npm run test:catalog` |

## Dual homes closed

| Concept | Winner | Demoted |
|---------|--------|---------|
| Deploy how | This inventory + future contract | [DEPLOY.md](../../DEPLOY.md) index only; README points here |
| Product spine | [overview.md](../product/overview.md) | README product blurb indexes only |
