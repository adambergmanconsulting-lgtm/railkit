# Railkit

**Who this page is for:** Railkit **kit owners** and **business** (offer, change projects, consulting).  
**Customer hosts** (people who only keep the framework in their repo) start at [kit/README.md](kit/README.md) after install — not here.

**Problem:** AI coding tools without shared rules of work waste time. People open the wrong docs, copy policy into editor-only dumps, and loosen quality bars under deadline pressure. Wiki playbooks and one-off cleanups do not stick.

**What we sell:** a **priced change project** — human expert with broad domain expertise, paired with the installable kit left in the host. **Not** Cursor, Copilot, or model seats.

## Pitch questions → open

Index only. Business surface detail: [project/README.md](project/README.md).

| Question | Open |
|----------|------|
| What are we selling / not selling? | [project/marketing/positioning.md](project/marketing/positioning.md) (then [offer-model](project/marketing/offer-model.md) · [usp-moat](project/marketing/usp-moat.md#category)) |
| What value / purpose (buyer and seller)? | [project/marketing/positioning.md](project/marketing/positioning.md#value-and-purpose) |
| Why should a business owner fund this? | [project/marketing/positioning.md](project/marketing/positioning.md#for-the-business-owner) |
| Why not more seats / rules dump / staff-aug? | [project/marketing/positioning.md](project/marketing/positioning.md#for-the-business-owner) · [project/competition/landscape.md](project/competition/landscape.md) |
| Who is the customer (primary buyer)? | [project/marketing/positioning.md](project/marketing/positioning.md#who--job) |
| 60-second pitch | [project/marketing/positioning.md](project/marketing/positioning.md#60-second-pitch) |
| Why pay (not more tooling)? | [project/marketing/why-railkit.md](project/marketing/why-railkit.md) → mechanism [kit/docs/WHY.md](kit/docs/WHY.md) |
| What must the customer bring / deliver? | [project/consulting/change-project-qualification.md](project/consulting/change-project-qualification.md#customer-brings) |
| You / we / exit / success / phases | [project/marketing/offer-model.md](project/marketing/offer-model.md#you--we--exit) |
| Privacy (kit in git vs agent egress) | [project/marketing/positioning.md](project/marketing/positioning.md#privacy-one-line-then-stop) · [project/consulting/privacy-and-legality.md](project/consulting/privacy-and-legality.md) |
| Proposal / SOW skeleton | [project/consulting/railkit-change-project-proposal.md](project/consulting/railkit-change-project-proposal.md) |
| Shareable overview (cache) | [project/digest.md](project/digest.md) |
| Go / no-go this host? | [project/consulting/change-project-qualification.md](project/consulting/change-project-qualification.md) |
| Claims we must not make | [project/marketing/usp-moat.md](project/marketing/usp-moat.md#do-not-claim) |

**Stack:** No hard language lock-in ([qualification](project/consulting/change-project-qualification.md)). Shipped kit scripts and dogfood default to **JS/TS (npm)**; ideal unused-export depth uses Knip or a language equivalent.

**Two parts (pointers only):** priced change project + governing framework applied to the host, then ended. Exit leaves the specialized rules as the host's own docs and checks, without the Railkit name. [offer-model You / we / exit](project/marketing/offer-model.md#you--we--exit) · method: [kit/README.md](kit/README.md).

**Full business hub:** [project/README.md](project/README.md).

## This repository

| Path | Role | Who uses it |
|------|------|-------------|
| [kit/](kit/) | Governing framework (installed, then cut over with `--exit`) | Maintainers edit here. Hosts keep the result, not this brand |
| [project/](project/) | Offer, USP, competition, consulting | Kit owners / sellers only (never copied to hosts) |
| [examples/](examples/) | Practice / dogfood hosts | Kit owners (not installed into customers) |

### Maintainers and business — start here by intent

| Intent | Open |
|--------|------|
| Pitch questions (table above) | This page · [project/README.md](project/README.md) |
| Why pay / break-even numbers | [project/marketing/why-railkit.md](project/marketing/why-railkit.md) |
| Customer-facing kit hub (what hosts keep) | [kit/README.md](kit/README.md) |
| Edit governing framework (docs, skills, scripts) | [kit/README.md](kit/README.md) → one intent row |
| Offer / USP / marketing / competition / consulting | [project/README.md](project/README.md) |
| Adopt / governing priorities | [kit/docs/ADOPTION.md](kit/docs/ADOPTION.md) · [kit/docs/ops/governing-priorities.md](kit/docs/ops/governing-priorities.md) |
| First dogfood host | [examples/first-host/](examples/first-host/) · [adopt-receipt](examples/first-host/docs/ops/adopt-receipt.md) |
| Run kit gates | `npm run check:railkit` |
