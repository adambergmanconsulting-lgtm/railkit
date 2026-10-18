# Change-project qualification

**Owns:** ideal hosts; decline / re-scope; **Customer brings**; token heuristics; customer representatives; messy-project archetypes.  
**Does not own:** engagement ranks ([engagement-priorities.md](engagement-priorities.md)), break-even arithmetic ([../marketing/why-railkit.md](../marketing/why-railkit.md)), host mechanism ([../../kit/docs/WHY.md](../../kit/docs/WHY.md)), commercial model / You–we–exit ([../marketing/offer-model.md](../marketing/offer-model.md)), buyer one-pager ([../marketing/positioning.md](../marketing/positioning.md)), adopt sequence mechanics ([../../kit/docs/ADOPTION.md](../../kit/docs/ADOPTION.md)).

**Placement:** consulting **instrument** (check/tool for a rank) of engagement Ranks **1**, **2**, **7**.

## Fast path (read first)

- Engagement yardstick: [engagement-priorities.md](engagement-priorities.md) ; skill `engagement-review`.
- **Go / no-go:** [Hard filters](#hard-filters-go--conditional--no-go).
- **Customer brings:** [Customer brings](#customer-brings).
- **Ideal host:** [Ideal project](#ideal-project).
- **Unsuitable for this offer:** [Cannot take with this offer](#cannot-take-with-this-offer).
- **Who decides incoherence:** [Customer representatives](#customer-representatives).
- Commercial You / we / exit: [../marketing/offer-model.md](../marketing/offer-model.md#you--we--exit).
- Host priority ranks: [../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md).
- Adopt order: [ADOPTION.md](../../kit/docs/ADOPTION.md#correct-sequence).

There is **no hard language/stack exclusion list**. Filters are organizational, access, and offer-fit.

## Customer brings

What the host must staff and accept for a **Go**. Commercial card: [../marketing/offer-model.md](../marketing/offer-model.md#you--we--exit).

| Must bring | Fail if missing |
|------------|-----------------|
| Named decider who can close dual homes on a short clock | Foundation never exits; dual homes stay dual |
| Repo access + CI or merge-policy leverage | Trend gates never bind |
| Active delivery seam this week | On-contact win is theater |
| Accept a native exit (rules stay, product name and install paths go); refuse raising ceilings to unblock | Offer fit fails (sell something else) |
| Eng time on the seam (product when journeys conflict) | Expert invents canon the host will not own |
| Security/compliance when deploy/secrets are tribal (as needed) | Tribal → code blocks without an egress decision |

Roles that close decisions: [Customer representatives](#customer-representatives).

## Ideal project

Strong change-project hosts usually have:

- One (or few) repos that are the real work surface — not “truth only in wiki + forks.”
- A **named decider** for eng/product tradeoffs when docs disagree.
- CI that already runs something (even weak) so **ratchets** (budgets that only tighten) can attach.
- An **active delivery seam this week** so the on-contact win is real.
- Willingness to keep the rules after a native exit and **not raise ceilings** to unblock.
- Mess shaped as **dual homes** (two deciding docs for one thing), tribal how, fat files, tool dumps — not refusal to leave anything in git.

## Cannot take with this offer

“Can’t be saved” here means **unsuitable for this productized change project**, not that the company is doomed. Decline or sell something else when:

| Failure mode | Why it will not stick |
|--------------|------------------------|
| No deciding representative | Dual homes stay dual; incoherence never closes |
| Buyer wants rules dump or deck only | No in-repo governing framework |
| Cannot change CI or merge policy | Trend gates never bind |
| Truth must stay outside the repo | Code-first inventory has nowhere to land |
| Political multi-owner with no escalation | Foundation (one owner per task) never completes |
| Crisis rewrite with no appetite for sequence | Skipping owners/size ratchets → thrash → blame the kit |

## Hard filters (go / conditional / no-go)

| Call | When |
|------|------|
| **Go** | Named decider, repo + CI access, active seam, accepts sequence and in-repo artifact |
| **Conditional go** | Ideal gates (Knip-class, vendor automation) on a **dated queue** (owner + due date); multi-repo phased |
| **No-go** | No decision rights, no CI/merge leverage, or refuses leaving the governing framework |

## Token spending (heuristics)

Causal why (break-even bar, golden-application observation): [../marketing/why-railkit.md](../marketing/why-railkit.md). This section owns **phase** heuristics only.

Tokens are mostly **situating tax** (cost of not opening the one right owner doc) and **rework from wrong owner**. Same tax hits every editor without owners. Size ratchets are **second-order** insurance (cheaper seam-local edits), not a claim that agents cannot edit large files. Kit breakpoints and touch rules: [code-quality-and-refactor.md — Size ratchets](../../kit/docs/ops/code-quality-and-refactor.md#size-ratchets-breakpoints-and-cost).

| Phase | Token shape | What burns budget |
|-------|-------------|-------------------|
| Pre-foundation | High, chaotic | Folder-browse; contradicting docs; no Fast path |
| Foundation (owners + size **baseline**) | High but purposeful | Inventory, promote one owner, wire checks — do once; **do not** mass-split every file over warn |
| Working loop | Medium, seam-local | On-contact extract of hotspots (≥ warn **400** default) stays cheap if CANONICAL is real |
| Ideal gates | Mostly engineering | Knip/CI wiring; dated queues |
| Skipping foundation | Highest long-run | Every session re-discovers the same dual homes |
| Raising size ceilings | Permanent uplift | Rank **4** violation; entropy wins under date pressure |

Sell the sequence as **token insurance**: pay for owners and ratchets early so later agent/human hours do not melt. After foundation, cost per feature should fall; if it does not, owners are fake or the router is unused.

**Density beats LOC early:** dual-home docs and fat hotspots **without a ratchet** dominate spend more than raw repository size.

**Breakpoints (kit defaults, host may specialize then only tighten):** warn **400** lines (touch → extract); max **800** lines (hard fail). Foundation **baselines** the ratchet; working loop **shrinks on contact**.

## Customer representatives

Need people who can **close** dual homes — not only give opinions.

| Role | Must be able to decide | When |
|------|------------------------|------|
| Eng / platform owner (primary) | Which doc wins; CI umbrella; ratchet policy | Kickoff through foundation |
| Product / domain owner | Behavioral canon when journey docs conflict | Inventory hits product truth |
| Security / compliance (as needed) | What may be scripted vs stay tribal | Tribal → code for deploy/secrets |
| Team lead on the active seam | On-contact win scope | Working loop |
| Exec sponsor | Protect “don’t raise ceilings” under date pressure | Delivery politics hit |

### Incoherence protocol (kickoff)

1. Inventory lists dual homes with evidence (two files, both deciding).
2. Facilitator proposes one owner; demote the other to an index.
3. Named decider has a short clock (e.g. same workshop or T+2 business days) to pick A, B, or merge-then-delete.
4. No pick → item stays **blocked**, not “both keep deciding.” Do not mark foundation done.

## Archetypes

| Archetype | Tokens | Who must decide | Fit |
|-----------|--------|-----------------|-----|
| Startup, one repo, AI in use, docs chaos | Medium | Founder / tech lead | Ideal |
| Product host with existing quality culture | Medium-low | Eng lead | Ideal reference |
| Enterprise, strong CI, wiki-heavy process | Medium-high inventory | Platform + compliance | Good if CI writable |
| Agency, many client repos | High per client unless productized | Client eng owner each time | Good for agency offer; client must own |
| Monorepo, many packages, no router | High until umbrella intent table | Architect with mandate | Doable; scope N packages |
| Legacy, few tests, huge files | High on-contact | Eng lead who accepts extract-not-raise | Doable if gradual |
| “AI transformation” with no repo access | Wasted | — | Decline |
| Greenfield empty repo | Low | Founder | Easy install; do not oversell chaos narrative |
| Learning / dogfood greenfield (planted chaos) | Low–medium | Maintainer | Use for first kit proof; see monorepo `examples/first-host` |
| Politically split product vs platform | Extreme until RACI | Exec + both leads | Pause until one deciding path |

## Also price at discovery

- Write access: clone, merge framework PRs, attach gates in CI.
- Shared checkout / many writers on hotspots.
- Editor diversity (thin adapters; no editor lock-in sell). Ranked setups: [recommended-agent-setups.md](recommended-agent-setups.md).
- Stack: unused-export gate must be language-equivalent (Knip is the JS/TS example; matrix in [code-quality-and-refactor.md](../../kit/docs/ops/code-quality-and-refactor.md#language-equivalent-knip-class)).
- Instrument card (foundation vs dated ideal): [digest.md](../digest.md#instrument-card-seller--buyer).
- Regulated / air-gapped: fine if gates run in their CI; framework still lands in git. Repo + agent privacy: [privacy-and-legality.md](privacy-and-legality.md).
- Success metric: foundation exit + one seam win + ceilings did not rise — not “markdown was copied.”
- First dogfood receipt (monorepo): [`examples/first-host/docs/ops/adopt-receipt.md`](../../examples/first-host/docs/ops/adopt-receipt.md). Reportable status moments: [ADOPTION.md — When status is reportable](../../kit/docs/ADOPTION.md#when-status-is-reportable).
- Install path: [00-QUICK-START.md](../../kit/docs/00-QUICK-START.md) (`copy-kit-to-host.js`).

## Related

- Buyer segments: [../marketing/positioning.md](../marketing/positioning.md)
- Offer lock: [../marketing/offer-model.md](../marketing/offer-model.md)
- Proposal: [railkit-change-project-proposal.md](railkit-change-project-proposal.md)
- Adopt sequence / ranks: [../../kit/docs/ADOPTION.md](../../kit/docs/ADOPTION.md#correct-sequence), [../../kit/docs/ops/governing-priorities.md](../../kit/docs/ops/governing-priorities.md)
