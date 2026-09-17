# Offer model

**Owns:** consultancy vs package vs hybrid commercial model; You / we / exit; engagement success metric; illustrative phase timebox.  
**Does not own:** USP wording ([usp-moat.md](usp-moat.md)), competitor rows ([../competition/landscape.md](../competition/landscape.md)), host-product fit templates under `kit/docs/product/`, host qualification detail ([../consulting/change-project-qualification.md](../consulting/change-project-qualification.md)), engagement ranks ([../consulting/engagement-priorities.md](../consulting/engagement-priorities.md)), spoken pitch ([positioning.md](positioning.md)).

## Fast path (read first)

1. Buyer / Primary job: [positioning.md](positioning.md).
2. Engagement ranks (higher wins): [../consulting/engagement-priorities.md](../consulting/engagement-priorities.md) ; skill `engagement-review`.
3. Host go / no-go, what they bring: [../consulting/change-project-qualification.md](../consulting/change-project-qualification.md#customer-brings).
4. Host governing ranks: [../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md).
5. **Locked model: hybrid** — governing framework + **priced** change project; purpose of each part below.
6. Buyer/seller value: [positioning.md — Value and purpose](positioning.md#value-and-purpose).
7. [You / we / exit](#you--we--exit) — customer obligations and engagement done-bar.
8. Customer keeps installable tree from [kit/](../../kit/) after the change project.
9. Every claim needs proof in `kit/` (script, skill, or owner doc). Landscape: [../competition/landscape.md](../competition/landscape.md).

## Locked model

**Governing framework + change project (hybrid).** Not consultancy-only. Not self-serve package-only. **SKU = priced change project** (expert + kit left behind). Not an AI-editor subscription.

| Part | Purpose (plain) |
|------|-----------------|
| **Change project** | Paid expert judgment + kit applied to *this* host until foundation and a real working-loop win hold |
| **Governing framework (`kit/`)** | What remains in the customer’s git so every editor keeps the same path after the engagement |

Buyer and seller value in one table: [positioning.md — Value and purpose](positioning.md#value-and-purpose).

| Model | Fit to shipped kit | Reject if… |
|-------|--------------------|------------|
| Consultancy only | Leaves `kit/` as internal IP; hosts never own the framework | We already ship install/adopt/copy paths and host ratchets (budgets that only tighten) |
| Package only (no services) | Matches copy-merge + checks | Messy hosts fail without a guided change project (fill CANONICAL owners; inventory tribal how) |
| **Hybrid (locked)** | `kit/` is the transferable governing framework; the change project installs it and lands wins on real product work | Claims "hands-off SaaS" or "strategy deck only" |

## Terms

| Term | Meaning |
|------|---------|
| **Governing framework** | Installable `kit/`: owners, skills, adapters. **Instruments** (checks and tools that serve a rank) serve [governing-priorities.md](../../kit/docs/ops/governing-priorities.md). Same path for every editor. |
| **Change project** | **Priced** engagement: a human expert with broad domain expertise, paired with the kit, adopts under those ranks. Rank **7** = deeper fit on a **dated queue** (named owner + due date), not skippable nudges. Agents auto-run must/should ([AGENTS.md](../../kit/AGENTS.md#agent-stop-allowlist)). Price set per engagement after qualification. |

## You / we / exit

Commercial card for the deal. Host go/no-go and role detail: [../consulting/change-project-qualification.md](../consulting/change-project-qualification.md#customer-brings). Adopt exit checks: [ADOPTION.md](../../kit/docs/ADOPTION.md#exit-checks).

| Side | Brings / does |
|------|----------------|
| **You (customer)** | Named decider who can close **dual homes** (two docs both deciding the same thing) on a clock; repo + CI/merge leverage; an active delivery seam this week; accept leaving `kit/` and not raising size/quality ceilings to unblock; staff time from eng (and product when journeys conflict); security/compliance when deploy/secrets stay tribal |
| **We (engagement)** | Human expert + kit: inventory dual homes and tribal how; install skeleton; fill CANONICAL owners and Fast paths; baseline file-size ratchet (budget that only tightens); wire local=CI checks; tribal → code or dated queue; one on-contact win on a real seam with proof when behavior moves (governing Rank **2**); leave `kit/` in your repo |
| **Exit (engagement done)** | Foundation + working loop exit checks hold ([ADOPTION.md](../../kit/docs/ADOPTION.md#exit-checks)). Ideal gates (unused-export / Knip-class, full e2e on CI, UI rails, vendor apply) are **shipped or on a dated queue** (owner + due date) — never fake green, never undated soft-skip |
| **Not the exit metric** | A promised productivity % or “stay under ~USD 200/mo tool spend” ([why-railkit.md](why-railkit.md); [usp-moat.md](usp-moat.md#do-not-claim)) |

### Engagement success (say this)

Fewer wrong-doc sessions; behavior changes leave proof; merge checks that do not loosen; governing framework still in git after we leave. Report progress only against in-repo evidence ([ADOPTION.md — When status is reportable](../../kit/docs/ADOPTION.md#when-status-is-reportable)).

### Phase timebox (illustrative)

Duration is **set per engagement** after inventory — not a fixed catalog price or week count. Shape for procurement:

| Phase | What happens | Bound |
|-------|--------------|-------|
| Qualify | Go / no-go; name decider, CI access, seam | Before kickoff |
| Foundation | Inventory, install, owners, baselined size + doc checks on local+CI | First delivery slice; exit before chasing Knip |
| Working loop | Tribal inventory; on-contact win + proof on the live seam | Second slice; engagement exit when foundation + this hold |
| Ideal (clock) | Unused-export / e2e / UI / vendor depth | Ship **or** dated queue; may continue after engagement exit |

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
- Sale of Cursor / Copilot / model seats, or that the engagement fee is the customer’s tool subscription.
