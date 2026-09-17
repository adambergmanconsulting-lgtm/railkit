# Privacy and legality: repo and agents

**Owns:** how to talk about privacy and legality for **git repositories** and **coding agents**.  
**Does not own:** engagement ranks ([engagement-priorities.md](engagement-priorities.md)), end-user product privacy, customer DPAs, or legal advice.

## Fast path (read first)

- Engagement Rank **4** (named egress): [engagement-priorities.md](engagement-priorities.md).
- **Pitch one-liner:** kit stays in the customer’s git; agent/model vendors are a separate egress — name it; do not claim install = compliant ([../marketing/positioning.md](../marketing/positioning.md#privacy-one-line-then-stop)).
- Separate [what stays in the repo vs what agents send out](#what-stays-in-the-repo-vs-what-agents-send-out).
- [Repo controls](#repo-controls) · [Agent controls](#agent-controls).
- [Prefer / Avoid](#prefer--avoid) · [Discovery checklist](#discovery-checklist).
- Setups: [recommended-agent-setups.md](recommended-agent-setups.md) (privacy-tight → setup Rank 4).

## What stays in the repo vs what agents send out

| Path | Where data lives | Typical contents | Legal / privacy note |
|------|------------------|------------------|----------------------|
| **Repo (git + CI)** | Customer’s VCS and CI | Source, docs, `kit/` framework, check scripts, PR diffs | Customer already stores this. Installing Railkit **adds files to their repo**; it does not create a Railkit-hosted copy |
| **Local workspace** | Laptop / runner checkout | Working tree, sometimes unsaved buffers | Agent tools often read from here, not only committed files |
| **Agent / model vendor** | Third-party service (per tool) | Prompts, selected files, sometimes index/embeddings of the repo | **This is the main new egress.** Customer ↔ vendor contract governs training, retention, region |
| **Consultant access** | Same as repo + tickets they are given | Whatever clone + permissions allow | Engagement MSA/NDA + least privilege — still “repo access,” not a product cloud |

Do not conflate: **framework in git** (customer-controlled) vs **agent context upload** (vendor-controlled).

## Repo controls

Actions that reduce what agents *can* see and what must never be committed:

| Control | Why |
|---------|-----|
| Secrets out of git (`.env` untracked; vault/CI secrets) | Agents and clones both inherit whatever is committed |
| Ignore / deny lists (e.g. `.cursorignore`, tool equivalents) | Keep dumps, prod exports, keys, and regulated paths out of default agent context |
| Narrow task + one owner doc ([ADOPTION](../../kit/docs/ADOPTION.md)) | Limits how much of the tree an agent is asked to load |
| Foundation gates in **customer CI** | Quality trends without sending source to a model API |
| LICENSE of installed `kit/` reviewed if required | What they keep in *their* repo after the change project |

**Monorepo / multi-repo:** treat agent scope as an explicit allow-list of packages or repos. Broad “index the org” modes are a privacy decision, not a default.

## Agent controls

| Topic | Prefer | Avoid |
|-------|--------|--------|
| Tool choice | Customer-approved IDEs/CLI agents only ([recommended-agent-setups.md](recommended-agent-setups.md)) | Shadow tools on regulated trees |
| Vendor terms | Written enterprise / no-train / retention / region settings where the customer requires them | Assuming “privacy mode” without checking the current contract |
| Session habit | One intent; open one owner Fast path; minimal file attach | “Index everything” before owners exist (Rank 5 anti-pattern) |
| Cloud / multi-agent | Only after foundation; same merge gates as everyone | Unsupervised swarms over the full remote |
| Air-gapped | Rank 4 (human-led) + local/CI gates; or approved private model endpoints | Public cloud agents on forbidden code |
| PRs | Diff review as for any editor (same rules for humans and agents) | Merging agent output without the same checks |

Agents are **optional accelerators**. The governing framework must still work when agents are off.

## Prefer / Avoid

| Prefer | Avoid |
|--------|--------|
| Saying “the kit stays in your git; agents may send repo excerpts to *your* chosen vendor” | “Railkit keeps your code private in our cloud” |
| Repo ignore lists + CI gates as the baseline | Using “privacy” to skip owners and size **ratchets** (budgets that only tighten) |
| Customer security review of **agent vendors** | Asking kit docs to certify Cursor/Copilot/Claude |
| Least-privilege clone for change-project staff | Org-wide tokens “for the agent” |
| Honest unknown: training defaults are vendor-specific | Promising no training / EU-only without a named setting |

## Discovery checklist (repo + agents)

- [ ] Which agent products may touch this repo (and which paths are no-agent zones)?
- [ ] Ignore lists cover secrets, dumps, and regulated trees?
- [ ] Vendor training / retention / residency settings confirmed for those tools?
- [ ] Is repo-wide indexing / cloud codebase upload allowed?
- [ ] CI runs foundation gates without extra model egress?
- [ ] Change-project accounts: named, time-bounded, repo-scoped?
- [ ] If **no code may leave the boundary**: accept Rank 4 only, or decline agent-heavy scope?

## Claims we do not make

- Installing Railkit makes the customer GDPR / AI-Act “compliant.”
- Any named agent tool meets the customer’s legal bar by default.
- Kit authors are the processor for day-2 developer agent usage of the customer’s repo.
- Air-gapped checkout removes risk if people still paste repo contents into public chats.
- The kit prevents agents from reading a file that is in the workspace and not ignored.

## Related

- Agent setups: [recommended-agent-setups.md](recommended-agent-setups.md)
- Qualification: [change-project-qualification.md](change-project-qualification.md)
- USP do-not-claim: [../marketing/usp-moat.md](../marketing/usp-moat.md#do-not-claim)
- Adapters: [../../kit/adapters/README.md](../../kit/adapters/README.md)
- License: [../../LICENSE](../../LICENSE)
