# Railkit

**Who this page is for:** Railkit **kit owners** and **business** (offer, change projects, consulting).  
**Customer hosts** (people who only keep the framework in their repo) start at [kit/README.md](kit/README.md) after install — not here.

**Problem:** AI coding tools without shared rules of work waste time. People open the wrong docs, copy policy into editor-only dumps, and loosen quality bars under deadline pressure. Wiki playbooks and one-off cleanups do not stick.

**Railkit has two parts:**

1. **Change project** — bring a codebase up to speed in a fixed order: document owners and file-size budgets first, then a working loop, then ideal checks (including unused-export / Knip-class) shipped or deferred with an owner and due date.
2. **Governing framework** — what stays in the customer repo: one start-here table, one deciding doc per task, skills, thin editor adapters, and mechanical checks. Every editor (person or agent) keeps pushing coherence, efficiency, clarity, and quality. Agents do the work without “shall I?”; humans decide Prefer/Avoid forks.

Same rules for humans and agents. The customer keeps the framework after the engagement.

| You get | You do not get |
|---------|----------------|
| A change project with a correct sequence and a clear end state | Every check green on day one, or skipping foundation |
| Document owners + file-size budgets early (so people find the right doc) | Tool dumps with no deciding owner |
| Ideal CI that runs the same doc + size + unused-export checks locally | Raising budgets to unblock; lint-only as the whole bar; deferrals with no owner or date |
| The same path for every editor | Separate “for humans” vs “for agents” rulebooks |

**Who it is for:** eng leaders and platform owners, founder-led product teams, and consultancies that want client repos to keep the framework. Detail: [project/marketing/positioning.md](project/marketing/positioning.md).

**Offer / USP / proposal:** [project/README.md](project/README.md) · [digest](project/digest.md) · [qualify host](project/consulting/change-project-qualification.md) · [proposal](project/consulting/railkit-change-project-proposal.md)

## This repository

| Path | Role | Who uses it |
|------|------|-------------|
| [kit/](kit/) | Governing framework (merged into host repos) | Customers after install → [kit/README.md](kit/README.md); maintainers edit here |
| [project/](project/) | Offer, USP, competition, consulting | Kit owners / sellers only (never copied to hosts) |
| [examples/](examples/) | Practice / dogfood hosts | Kit owners (not installed into customers) |

### Maintainers and business — start here by intent

| Intent | Open |
|--------|------|
| Customer-facing kit hub (what hosts keep) | [kit/README.md](kit/README.md) |
| Edit governing framework (docs, skills, scripts) | [kit/README.md](kit/README.md) → one intent row |
| Offer / USP / marketing / competition / consulting | [project/README.md](project/README.md) |
| Adopt / governing priorities | [kit/docs/ADOPTION.md](kit/docs/ADOPTION.md) · [kit/docs/ops/governing-priorities.md](kit/docs/ops/governing-priorities.md) |
| First dogfood host | [examples/first-host/](examples/first-host/) · [adopt-receipt](examples/first-host/docs/ops/adopt-receipt.md) |
| Run kit gates | `npm run check:railkit` |

**Inspiration:** for any Railkit work, open sibling **TeamResume** first (patterns only; no CV product pitch).

```bash
npm run check:railkit
```
