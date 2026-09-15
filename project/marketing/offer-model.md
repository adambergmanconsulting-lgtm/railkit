# Offer model

**Owns:** consultancy vs package vs hybrid commercial model for Railkit.  
**Does not own:** USP wording ([usp-moat.md](usp-moat.md)), competitor rows ([../competition/landscape.md](../competition/landscape.md)), host-product fit templates under `kit/docs/product/`, host qualification ([../consulting/change-project-qualification.md](../consulting/change-project-qualification.md)), engagement ranks ([../consulting/engagement-priorities.md](../consulting/engagement-priorities.md)).

## Fast path (read first)

1. Buyer / Primary job: [positioning.md](positioning.md).
2. Engagement ranks (higher wins): [../consulting/engagement-priorities.md](../consulting/engagement-priorities.md) ; skill `engagement-review`.
3. Host go / no-go, tokens, reps: [../consulting/change-project-qualification.md](../consulting/change-project-qualification.md).
4. Host governing ranks: [../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md).
5. **Locked model: hybrid** — governing framework + change project (see below).
6. Customer keeps installable tree from [kit/](../../kit/) after the change project.
7. Every claim needs proof in `kit/` (script, skill, or owner doc). Landscape: [../competition/landscape.md](../competition/landscape.md).

## Locked model

**Governing framework + change project (hybrid).** Not consultancy-only. Not self-serve package-only.

| Model | Fit to shipped kit | Reject if… |
|-------|--------------------|------------|
| Consultancy only | Leaves `kit/` as internal IP; hosts never own the framework | We already ship install/adopt/copy paths and host ratchets (budgets that only tighten) |
| Package only (no services) | Matches copy-merge + checks | Messy hosts fail without a guided change project (fill CANONICAL owners; inventory tribal how) |
| **Hybrid (locked)** | `kit/` is the transferable governing framework; the change project installs it and lands wins on real product work | Claims "hands-off SaaS" or "strategy deck only" |

## Terms

| Term | Meaning |
|------|---------|
| **Governing framework** | Installable `kit/`: owners, skills, adapters. **Instruments** (checks and tools that serve a rank) serve [governing-priorities.md](../../kit/docs/ops/governing-priorities.md). Same path for every editor. |
| **Change project** | Paid engagement: adopt under those ranks. Rank **7** = deeper fit on a **dated queue** (named owner + due date), not skippable nudges. Agents auto-run must/should ([AGENTS.md](../../kit/AGENTS.md#agent-stop-allowlist)). |

## What the customer keeps

- Contents of `kit/` merged into the host (docs hubs, agents, adapters, scripts, infra contracts, templates).
- Green or intentionally baselined `npm run check:railkit` (or host merge).
- Filled CANONICAL owners and an adopt inventory (tribal how → code queue).

## What the change project delivers

1. Install skeleton ([00-QUICK-START.md](../../kit/docs/00-QUICK-START.md); `copy-kit-to-host.js`).
2. Adopt sequence ([ADOPTION.md](../../kit/docs/ADOPTION.md)): inventory, CANONICAL, ratchets (budgets that only tighten), tribal how → code, UI heuristics when UI host (or dated TODO), on-contact win (fix a real product seam when you open it).
3. Proposal narrative: [../consulting/railkit-change-project-proposal.md](../consulting/railkit-change-project-proposal.md).
4. Dogfood proof (monorepo): [../../examples/first-host/docs/ops/adopt-receipt.md](../../examples/first-host/docs/ops/adopt-receipt.md).

## Do not claim (offer)

- Hands-off SaaS with no change-project work.
- Strategy or training with no in-repo governing framework left behind.
- Instant full automation of every tribal process on day one (inventory + dated queue is the bar).
- Soft skippable nudges or undated eternal queues as “done enough.”
- Zero human decisions (**dual homes** — two deciding docs for one thing — and heuristic forks still stop the agent).
