# Proposal: Railkit change project + governing framework

**Status:** Active draft  
**Offer lock:** [../marketing/offer-model.md](../marketing/offer-model.md) (hybrid: priced change project + governing framework)  
**USP / do-not-claim:** [../marketing/usp-moat.md](../marketing/usp-moat.md)  
**Digest:** [../digest.md](../digest.md)

## Fast path (read first)

- **SKU:** priced **change project** (human expert + kit). Not an AI-editor sale.
- **Buyer:** eng / platform owner by default ([../marketing/positioning.md](../marketing/positioning.md)).
- **You / we / exit:** [../marketing/offer-model.md](../marketing/offer-model.md#you--we--exit).
- Qualify first: [change-project-qualification.md](change-project-qualification.md#customer-brings).
- Privacy one-liner: kit in **your** git; agent/vendor egress is separate ([privacy-and-legality.md](privacy-and-legality.md)).
- Spoken pitch: [../marketing/positioning.md](../marketing/positioning.md#60-second-pitch). Business owner: [../marketing/positioning.md](../marketing/positioning.md#for-the-business-owner).
- Do not promise hands-off SaaS, strategy-deck-only, or a guaranteed productivity %.

## Problem

Teams add AI coding tools faster than they add shared rules of work. Sessions burn on the wrong docs; quality bars loosen under delivery pressure; wiki playbooks and rule dumps do not stick. Buying another editor seat does not fix that.

## What we are selling

A **priced transformation**: a human expert with broad domain expertise, paired with an installable governing framework, brings one (or few) host repos up to speed in a fixed order and **leaves the framework in your repository**. You keep your tools. Price is set per engagement after qualification.

**Buyer value:** judgment on your mess now; rules that stay in your git after we leave. **Seller value:** productized engagement with a transferable artifact and a clear exit. Full table: [../marketing/positioning.md](../marketing/positioning.md#value-and-purpose).

**Not selling:** Cursor / Copilot / model seats; a rules dump; staff-aug with no in-repo artifact; an “AI operating system.” ([usp-moat.md](../marketing/usp-moat.md#category))

## Approach

Hybrid: priced change project + governing framework left in git ([../marketing/offer-model.md](../marketing/offer-model.md)). Adopt order (foundation → working loop → ideal on a dated queue): [ADOPTION.md](../../kit/docs/ADOPTION.md#correct-sequence). Why pay: [../marketing/why-railkit.md](../marketing/why-railkit.md). Mechanism: [../../kit/docs/WHY.md](../../kit/docs/WHY.md).

## You bring / we bring / done when

Summary — full card: [../marketing/offer-model.md](../marketing/offer-model.md#you--we--exit). Detail: [change-project-qualification.md](change-project-qualification.md#customer-brings).

| You | We | Done when |
|-----|-----|-----------|
| Named decider; repo + CI leverage; live seam; keep `kit/`; do not raise ceilings to unblock | Expert + kit: owners, baselined checks, tribal inventory, on-contact win with proof if behavior moves | Foundation + working loop exit checks hold; ideal items shipped **or** dated-queued ([ADOPTION.md](../../kit/docs/ADOPTION.md#exit-checks)) |

**Success language:** fewer wrong-doc sessions; proof on behavior changes; merge bar that does not loosen; kit still in git after we leave. **Not** a promised 2–4×.

## Phases (duration set per engagement)

| Phase | Bound |
|-------|--------|
| Qualify | Before kickoff |
| Foundation | First delivery slice |
| Working loop | Engagement exit when foundation + this hold |
| Ideal (clock) | Ship or dated queue; may continue after exit |

## Deliverables

| Deliverable | Proof |
|-------------|--------|
| Framework merged into host | [00-QUICK-START.md](../../kit/docs/00-QUICK-START.md) + `copy-kit-to-host.js` |
| Document owners (foundation) | [CANONICAL-SOURCES.md](../../kit/docs/CANONICAL-SOURCES.md) + doc checks |
| File-size ratchet (foundation) | `check:architecture*` baselined; ceilings only tighten |
| Working loop | Tribal inventory + on-contact win ([ADOPTION.md](../../kit/docs/ADOPTION.md)) |
| Ideal unused-export gate | `check:unused-export` in local+CI (`knip` or dated `queued`) |
| Reportable status | [ADOPTION.md — When status is reportable](../../kit/docs/ADOPTION.md#when-status-is-reportable); dogfood [adopt-receipt](../../examples/first-host/docs/ops/adopt-receipt.md) |

## Privacy

Kit files live in **your** VCS. Agent/model vendors may receive prompts and selected files — that egress is a customer ↔ vendor decision, named at kickoff, not “solved by install.” [privacy-and-legality.md](privacy-and-legality.md).

## Out of scope (this proposal shape)

- Replacing the customer's IDE, model vendor, or PMO.
- Selling or bundling AI-editor seats as the product.
- Full automation of every tribal process on day one.
- Fixed catalog pricing (set per engagement after qualify).

## Next step

Confirm primary buyer ([../marketing/positioning.md](../marketing/positioning.md)), complete go/no-go ([change-project-qualification.md](change-project-qualification.md)), then schedule kickoff against the host's real docs and CI.
