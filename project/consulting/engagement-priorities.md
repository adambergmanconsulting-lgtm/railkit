# Engagement priorities

**Purpose:** Ranked yardstick for Railkit **business / change-project** decisions (qualify, offer, agents, privacy, claims). Higher rank wins.  
**Owns:** engagement ranks and which consulting docs are **instruments** (checks/tools for a rank).  
**Does not own:** host governing ranks ([../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md)), commercial model lock detail ([../marketing/offer-model.md](../marketing/offer-model.md)), host product UI/fit heuristics.

**Layer:** `project/consulting/` — not `kit/docs/product/heuristics/` (those templates are for the customer’s product after adopt).

## Fast path (read first)

- Conflicts: [Ranked priorities](#ranked-priorities) — higher wins.
- Consulting docs are **instruments** — [Consequences](#consequences-not-peer-goals).
- Host depth still follows kit [governing-priorities.md](../../kit/docs/ops/governing-priorities.md); do not invent a second host yardstick here.
- Skill: `engagement-review`.

## Why

Qualification, agent scorecards, and privacy notes drift into peer “must lists.” Engagement needs the same shape as the kit: ranks first, checklists as consequences, Rank **7** depth on a **dated queue** (owner + due date) without lying.

## Ranked priorities

| Rank | Principle | Means in one line | Fail if… |
|------|-----------|-------------------|----------|
| **1** | Honest offer fit | Only take hosts that keep the framework and accept the change-project shape | Rules-dump / deck-only / no-CI leverage sold as Railkit |
| **2** | Decision rights | Named decider can close **dual homes** (two deciding docs for one thing) on a clock | Infinite stakeholder workshops; foundation never exits |
| **3** | Repo is the artifact | Policy and gates live in their git; thin tool adapters | Value trapped in consultant chat or vendor-only rules |
| **4** | Named egress | Repo vs agent-vendor data paths stated honestly | “AI-safe” / GDPR-by-install claims |
| **5** | Agent setup serves situating | Tooling ranked by framework fit (**situating** = open the one right owner doc); CI gates non-negotiable | Speed/cost wins that break owners or merge bars |
| **6** | Claims match kit | Pitch and proposal only claim shipped instruments | OS slogans; SOC2 theater; TeamResume product outcomes as Railkit |
| **7** | Fit commercial depth | Queue ideal adopt instruments; phase multi-repo | Fake every gate green day one **or** skip Rank 1–2 to close a deal |

## Consequences (not peer goals)

| Instrument | Serves rank(s) | Owner doc |
|------------|----------------|-----------|
| Go / no-go, tokens, reps, archetypes | **1**, **2**, **7** | [change-project-qualification.md](change-project-qualification.md) |
| Hybrid offer lock | **1**, **3**, **6** | [../marketing/offer-model.md](../marketing/offer-model.md) |
| Positioning / who | **1**, **6** | [../marketing/positioning.md](../marketing/positioning.md) |
| USP / do-not-claim | **4**, **6** | [../marketing/usp-moat.md](../marketing/usp-moat.md) |
| Agent setup scorecard | **3**, **5**, **7** | [recommended-agent-setups.md](recommended-agent-setups.md) |
| Repo + agent privacy | **4**, **5** | [privacy-and-legality.md](privacy-and-legality.md) |
| Proposal narrative | **1**, **6**, **7** | [railkit-change-project-proposal.md](railkit-change-project-proposal.md) |
| Host adopt / tests / CI | Host Ranks 1–7 | [governing-priorities.md](../../kit/docs/ops/governing-priorities.md) |

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
