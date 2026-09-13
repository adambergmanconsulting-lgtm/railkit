# Proposal: Railkit change project + governing framework

**Status:** Active draft  
**Offer lock:** [../marketing/offer-model.md](../marketing/offer-model.md) (hybrid: governing framework + change project)  
**USP / do-not-claim:** [../marketing/usp-moat.md](../marketing/usp-moat.md)  
**Digest:** [../digest.md](../digest.md)

## Fast path (read first)

- Customer keeps [kit/](../../kit/) (governing framework) after the engagement.
- Qualify host first: [change-project-qualification.md](change-project-qualification.md).
- Privacy / agent data flow: [privacy-and-legality.md](privacy-and-legality.md).
- Engagement = change project: install + adopt + on-contact win ([ADOPTION.md](../../kit/docs/ADOPTION.md)).
- Do not promise hands-off SaaS or strategy-deck-only delivery.

## Problem

Teams add AI coding tools faster than they add shared rules of work. Agents and humans browse the wrong docs, duplicate policy in editor folders, and watch quality gates loosen under delivery pressure. Wiki playbooks and rule dumps do not compound into coherence, efficiency, clarity, and quality.

## Approach

Two parts:

1. **Change project** — follow [ADOPTION.md](../../kit/docs/ADOPTION.md#correct-sequence): foundation (inventory, install, document owners, file-size **ratchets** — budgets that only tighten), working loop (tribal inventory, on-contact win), then ideal gates (Knip-or-equivalent, UI, vendor automation) shipped or on a **dated queue** (owner + due date). Agents auto-run must/should; stop on [AGENTS.md stop allowlist](../../kit/AGENTS.md#agent-stop-allowlist).
2. **Governing framework** — what remains in the repository (same rules for humans and agents):

   - Intent routing — one Start-here table; one deciding owner per task
   - Thin adapters — Cursor (or other) wrappers; Prefer/Avoid stay in docs and `agents/skills/`
   - Foundation checks — documentation ownership/budgets + file-size / hotspot ratchet
   - Ideal trend gates — unused-export / dead-module (Knip or language equivalent) on the same local+CI umbrella
   - Code-first — scripts, contracts, workflows, and skills own repeatable how

Reference patterns originate in the sibling TeamResume repo; Railkit generalizes them for any host. Standing rule: for any Railkit work, read TeamResume for structure and Prefer/Avoid — not CV product pitch.

## Deliverables

| Deliverable | Proof |
|-------------|--------|
| Framework merged into host | [00-QUICK-START.md](../../kit/docs/00-QUICK-START.md) + `copy-kit-to-host.js` |
| Document owners (foundation) | [CANONICAL-SOURCES.md](../../kit/docs/CANONICAL-SOURCES.md) + doc checks |
| File-size ratchet (foundation) | `check:architecture*` baselined; ceilings only tighten |
| Working loop | Tribal inventory + on-contact win ([ADOPTION.md](../../kit/docs/ADOPTION.md)) |
| Ideal unused-export gate | `check:unused-export` in local+CI (`knip` or dated `queued`) ([code-quality-and-refactor.md](../../kit/docs/ops/code-quality-and-refactor.md#trend-to-better-mechanical)) |
| Reportable status | [ADOPTION.md — When status is reportable](../../kit/docs/ADOPTION.md#when-status-is-reportable); dogfood [adopt-receipt](../../examples/first-host/docs/ops/adopt-receipt.md) |

## Out of scope (this proposal shape)

- Replacing the customer's IDE, model vendor, or PMO.
- Full automation of every tribal process on day one.
- Pricing figures (set per engagement).

## Next step

Confirm buyer and Primary job ([../marketing/positioning.md](../marketing/positioning.md)), then schedule change-project kickoff against the host's real docs and CI.
