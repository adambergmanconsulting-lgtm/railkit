# Adopt receipt (first-host)

**Host:** `examples/first-host` (Demo Catalog)  
**Date:** 2026-09-13  
**Decider:** maintainer (dogfood)  
**Qualification:** Go — named decider, writable tree, active seam (`src/app.js` hotspot), accepts sequence. Learning host (greenfield + planted chaos), not a paid engagement.

## Sequence outcome

| Step | Result |
|------|--------|
| 1 Inventory | Dual homes: README vs DEPLOY deploy how; Slack release tribal |
| 2 Install | `node kit/scripts/install/copy-kit-to-host.js --target examples/first-host` |
| 3 Owners | CANONICAL domain spine → product/overview.md; Fast paths on deciding homes |
| 4 Size ratchet | Baselined on fat `src/app.js`, then tightened after extract |
| 5 Tribal → code | [tribal-inventory.md](tribal-inventory.md) |
| 6 On-contact win | Split catalog/metrics; `npm run test:catalog` (Rank 2 proof) |

## Exit checks

**Foundation / working loop:**

- [x] Intent router (README Start here)
- [x] CANONICAL filled; no dual Open cells
- [x] Doc + architecture checks green; ceilings tightened after extract
- [x] Tribal inventory; deploy queued with date
- [x] Thin `.cursor/` adapter → `agents/skills/`
- [x] On-contact win recorded
- [x] Behavior change has tests

**Ideal (dated queue):**

- [ ] `check:unused-export` — queue owner maintainer — 2026-10-15 (`mode: queued` in `scripts/unused-export/unused-export.json`)
- [ ] UI heuristics pass — UI host light; templates present — queue one `ui-review` — 2026-10-15
- [ ] Vendor assert/apply for Vercel — with hosting contract — 2026-10-15

## Finding shape (fed back to kit)

**must (fixed in the framework):** check scripts broke under the nested scripts folder until `findRepoRoot` walk-up; copy installer missing; host must set architecture `roots` to `src`.

**should:** kit README must not be the host README (monorepo `project/` links); document claim/status moments on ADOPTION exit.

**defer:** Knip, full vendor apply, living design page.
