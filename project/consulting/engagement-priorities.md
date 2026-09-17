# Engagement priorities

**Purpose:** Ranked yardstick for Railkit **business / change-project** decisions (qualify, offer, agents, privacy, claims). Higher rank wins.  
**Owns:** engagement ranks and which consulting docs are **instruments** (checks/tools for a rank).  
**Does not own:** host governing ranks ([../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md)), commercial model lock detail ([../marketing/offer-model.md](../marketing/offer-model.md)), host product UI/fit heuristics.

**Layer:** `project/consulting/` — not `kit/docs/product/heuristics/` (those templates are for the customer’s product after adopt).

## Fast path (read first)

- Conflicts: [Ranked priorities](#ranked-priorities) — higher wins.
- Consulting docs are **instruments** — [Consequences](#consequences-not-peer-goals).
- **Pitch surface:** [Pitch surface Prefer / Avoid](#pitch-surface-prefer--avoid) — fail if sell/buyer/bring/exit are unclear on hubs; pushback = edit Prefer/Avoid (confirm), not silent ignore.
- Host depth still follows kit [governing-priorities.md](../../kit/docs/ops/governing-priorities.md); do not invent a second host yardstick here.
- Skill: `engagement-review`. Yardstick pushback: [DOCUMENTATION-PRINCIPLES.md — Self-improving loop](../../kit/docs/DOCUMENTATION-PRINCIPLES.md#self-improving-loop).

## Why

Qualification, agent scorecards, and privacy notes drift into peer “must lists.” Engagement needs the same shape as the kit: ranks first, checklists as consequences, Rank **7** depth on a **dated queue** (owner + due date) without lying. Pitch and hub docs drift the same way: tool economics crowd out the **priced change project**, and buyers cannot find what they must bring.

## Ranked priorities

| Rank | Principle | Means in one line | Fail if… |
|------|-----------|-------------------|----------|
| **1** | Honest offer fit | Only take hosts that keep the framework and accept the change-project shape; SKU = priced change project (expert + kit), not editor seats | Rules-dump / deck-only / no-CI leverage / AI-seat sale sold as Railkit |
| **2** | Decision rights | Named decider can close **dual homes** (two deciding docs for one thing) on a clock | Infinite stakeholder workshops; foundation never exits |
| **3** | Repo is the artifact | Policy and gates live in their git; thin tool adapters | Value trapped in consultant chat or vendor-only rules |
| **4** | Named egress | Repo vs agent-vendor data paths stated honestly | “AI-safe” / GDPR-by-install claims |
| **5** | Agent setup serves situating | Tooling ranked by framework fit (**situating** = open the one right owner doc); CI gates non-negotiable | Speed/cost wins that break owners or merge bars |
| **6** | Claims match kit | Pitch and proposal only claim shipped instruments | OS slogans; SOC2 theater; another product’s outcomes as Railkit |
| **7** | Fit commercial depth | Queue ideal adopt instruments; phase multi-repo | Fake every gate green day one **or** skip Rank 1–2 to close a deal |

## Consequences (not peer goals)

| Instrument | Serves rank(s) | Owner doc |
|------------|----------------|-----------|
| Go / no-go, customer brings, tokens, reps, archetypes | **1**, **2**, **7** | [change-project-qualification.md](change-project-qualification.md) |
| Hybrid offer lock; You / we / exit; phase timebox | **1**, **3**, **6** | [../marketing/offer-model.md](../marketing/offer-model.md) |
| Positioning / who / 60s pitch | **1**, **6** | [../marketing/positioning.md](../marketing/positioning.md) |
| USP / do-not-claim | **4**, **6** | [../marketing/usp-moat.md](../marketing/usp-moat.md) |
| Agent setup scorecard | **3**, **5**, **7** | [recommended-agent-setups.md](recommended-agent-setups.md) |
| Repo + agent privacy | **4**, **5** | [privacy-and-legality.md](privacy-and-legality.md) |
| Proposal narrative | **1**, **6**, **7** | [railkit-change-project-proposal.md](railkit-change-project-proposal.md) |
| Host adopt / tests / CI | Host Ranks 1–7 | [governing-priorities.md](../../kit/docs/ops/governing-priorities.md) |

## Pitch surface Prefer / Avoid

**Owns:** when commercial docs and hubs are good enough to sell without a manual push. Instruments: positioning, offer-model, qualification, proposal, monorepo + `project/` READMEs. Skill: `engagement-review`.

| Prefer | Avoid |
|--------|--------|
| Name the **SKU** first: priced change project (expert + kit left behind) | Leading with Cursor/tool subscriptions as if that is what we sell |
| State **purpose and value** of the kit vs the change project in plain words for **buyer and seller** before mechanics | Process-only pitch (ratchets, ranks) with no “why pay / why keep” |
| State the **business-owner spend case**: leak is waste/rework; instead of seats / rules dump / staff-aug; kit stays in their git | Eng-only pitch with no fund/sponsor path |
| Default **primary buyer** = eng / platform owner; variants named as variants | Three segments with equal weight and no default |
| **You / we / exit** on the offer owner; **Customer brings** on qualification | Deliverables only on our side; customer obligations buried |
| Engagement **success** = foundation + working-loop exit + proof on behavior moves | Guaranteed productivity % or tool-spend ceiling as the done bar |
| Monorepo `README.md` and `project/README.md` **route** sell / buyer / value / business-owner / pitch / why-pay / customer-brings / you–we–exit / privacy / proposal | Hubs that only list files; pitch answers only in chat |
| Privacy one-liner early: kit in their git; agent egress separate | GDPR-by-install or silence on vendor egress |
| Spoken **60-second pitch** on positioning | Jargon-first open (Knip, Rank 7) before the deal |

**Fail if (must):** commercial hub or offer surface implies we sell AI-editor seats; no route from monorepo or `project/` README to sell / buyer / customer-brings / you–we–exit; claims that violate [usp-moat.md](../marketing/usp-moat.md#do-not-claim).  
**Should:** missing 60s pitch, missing privacy one-liner on positioning, primary buyer not marked default, phases/exit only in ADOPTION with no commercial pointer, missing plain buyer/seller value of kit vs change project, missing business-owner / instead-of stanza.  
**Defer:** fixed catalog price or fixed week counts (per engagement after qualify).

**Pushback:** if a Prefer/Avoid row blocks a coherent commercial job (e.g. a new segment must be primary, or a hub route is wrong), do not paper over it in the pitch. Numbered fork: (1) keep Prefer/Avoid and fix docs, or (2) edit this table / engagement Rank fail-if (confirm) then align docs. Shared loop: [DOCUMENTATION-PRINCIPLES.md — Self-improving loop](../../kit/docs/DOCUMENTATION-PRINCIPLES.md#self-improving-loop).

## Customer adjustment (engagement)

| Pressure | May thin / queue (Rank 7) | Must not drop |
|----------|---------------------------|---------------|
| Budget / timebox | Ideal Knip/e2e wiring in adopt | Rank **1** fit; Rank **2** decider; Rank **3** kit in git |
| Privacy-hard host | Cloud agents (use setup Rank 4) | Rank **4** named egress; Rank **3** artifact |
| Copilot-standard org | Cursor as primary | Rank **5** thin wiring + gates; no rules-dump product |
| Multi-repo estate | Phase 2+ repos | Rank **1**–**2** on the first in-scope repo |

## Related

- Host yardstick: [../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md)
- Skill: [../../kit/agents/skills/engagement-review.md](../../kit/agents/skills/engagement-review.md)
