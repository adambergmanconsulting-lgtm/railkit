# Railkit digest

**Purpose:** Shareable overview for consulting scoping and proposals. Not an implementation guide. Kit code work: [kit/AGENTS.md](../kit/AGENTS.md) → [kit/docs/CANONICAL-SOURCES.md](../kit/docs/CANONICAL-SOURCES.md).

## Locked offer (one-liner)

**Governing framework + change project:** fixed adopt sequence. Put document owners and file-size **ratchets** (budgets that only tighten) first. Ship ideal Knip-class gates or put them on a **dated queue** (named owner + due date). Agents auto-run must/should and stop only on heuristic forks / approach conflicts. Customer keeps `kit/`. Decide: [marketing/offer-model.md](marketing/offer-model.md). USP/moat: [marketing/usp-moat.md](marketing/usp-moat.md). Sequence: [kit/docs/ADOPTION.md](../kit/docs/ADOPTION.md#correct-sequence).

## One paragraph

Railkit installs a governing framework into a host repo. That includes intent routing, one deciding owner per task, thin editor adapters, tighten-only checks, layering Prefer/Avoid, UI and fit heuristic templates, skills, and code-first scripts and contracts. Delivery is a change project with a **correct sequence**: foundation (owners + size ratchets), working loop (tribal inventory + on-contact win), then ideal gates shipped or **dated-queued** (not soft-skipped). Agents auto-run the loop. Humans decide Prefer/Avoid forks and unsolvable approach conflicts. The same path applies to every editor of the repo.

## Parts

| Part | Meaning |
|------|---------|
| Governing framework | `kit/` left in the repo |
| Change project | Paid install + adopt + on-contact win |
| Authority | Kit README intent table; CANONICAL task → one doc; code/tests win |
| Adapters | Thin Cursor (or other) wrappers; policy in docs + agents/skills |
| Checks | Documentation and architecture budgets; ceilings only tighten |
| Agent loop | Auto must/should; stop allowlist in [AGENTS.md](../kit/AGENTS.md#agent-stop-allowlist) |
| Code-first | [CODE-FIRST.md](../kit/docs/CODE-FIRST.md) |
| Rank 7 depth | Dated queue (owner + date), not a skippable nudge |

## Instrument card (seller / buyer)

An **instrument** here is a check or tool that serves a priority rank. Yardstick detail: [governing-priorities.md](../kit/docs/ops/governing-priorities.md). Mechanical order: [code-quality-and-refactor.md](../kit/docs/ops/code-quality-and-refactor.md#trend-to-better-mechanical).

| Wave | Instrument | Kit ships | Host wires |
|------|------------|-----------|------------|
| Foundation | Intent router + CANONICAL + Fast paths | Templates | Fill owners |
| Foundation | `check:documentation*` | Yes | Local + CI |
| Foundation | `check:architecture*` (size ratchet) | Yes | **Baseline** ceilings (warn 400 / max 800 defaults); shrink on contact — [size/cost reasoning](../kit/docs/ops/code-quality-and-refactor.md#size-ratchets-breakpoints-and-cost) |
| Foundation | `check:railkit` umbrella = local CI | Yes | Same entrypoints |
| Foundation | Thin adapters + skills; agent auto-loop | Yes | Session rules load AGENTS stop allowlist |
| Working loop | Tribal inventory; on-contact win + Rank 2 proof | Playbook | Real seam |
| Ideal (clock) | `check:unused-export` (Knip-class or dated queue) | Stub + JSON clock | `mode: knip` or refresh `owner`/`due` |
| Ideal (clock) | Host unit/e2e on umbrella; UI rails; vendor apply | Templates / example contract | Per [ADOPTION.md](../kit/docs/ADOPTION.md) |

**Never** treat Knip-class as day-one peer to document owners. **Never** leave an ideal instrument without a due date.

Seven-link walkthrough (TeamResume-shaped): [kit/docs/ops/rank-chain-example.md](../kit/docs/ops/rank-chain-example.md). Host governing ranks are **not** the same as doc-structure ranks or engagement ranks.

## Engagement

Qualification (ideal / decline / tokens / reps): [consulting/change-project-qualification.md](consulting/change-project-qualification.md).  
Engagement ranks: [consulting/engagement-priorities.md](consulting/engagement-priorities.md).  
Agent setups: [consulting/recommended-agent-setups.md](consulting/recommended-agent-setups.md).  
Privacy / legality (repo + agents): [consulting/privacy-and-legality.md](consulting/privacy-and-legality.md).  
Proposal: [consulting/railkit-change-project-proposal.md](consulting/railkit-change-project-proposal.md).  
Landscape: [competition/landscape.md](competition/landscape.md).  
Dogfood host (install + adopt exit): [../examples/first-host/docs/ops/adopt-receipt.md](../examples/first-host/docs/ops/adopt-receipt.md).
