# USP and moat

**Owns:** category, we-are / we-are-not, USP pillars, do-not-claim for Railkit commercial claims.  
**Does not own:** offer model ([offer-model.md](offer-model.md)), competitor matrix ([../competition/landscape.md](../competition/landscape.md)).

Pattern source: sibling TeamResume (positioning Category + do-not-claim, and any related ops/docs patterns). Claims must match shipped behavior under `kit/`. Do not paste TeamResume product pitch.

## Fast path (read first)

- Category and we-are / we-are-not.
- Pillars only if proven in `kit/`.
- [Do not claim](#do-not-claim).
- Offer: [offer-model.md](offer-model.md).

## Category

**Governing framework for a codebase** — installed in the repo so agents and developers keep pushing coherence, efficiency, clarity, and quality — delivered through a **change project** that brings the host up to speed.

| We are | We are not |
|--------|------------|
| Intent router + one deciding owner per task | An "AI operating system" slogan or vertical SaaS |
| Thin editor adapters; policy in docs + skills | Cursor-only / Copilot-only rule dumps |
| Mechanical trend gates (doc → size → unused-export ideal) on one local+CI path | One-off cleanup that raises ceilings; Prefer/Avoid with no merge gates |
| Code-first: scripts, contracts, workflows, skills own how | Wiki/chat as the only how for a recurring process |
| Review skills toward named yardsticks | Generic "AI coding best practices" essay pack |
| Same situating and gates for humans and agents | Parallel human vs agent rulebooks |
| Agents auto-run must/should; humans decide heuristic forks | Soft skippable nudges; “shall I?” loops; eternal undated queues |

## USP pillars

1. **Situating** — open the one right owner doc: one Start-here table; name the task; open one owner Fast path ([kit/README.md](../../kit/README.md), [DOCUMENTATION-PRINCIPLES.md](../../kit/docs/DOCUMENTATION-PRINCIPLES.md)).
2. **Always trending better** — **instruments** (checks/tools for a rank) of [governing-priorities.md](../../kit/docs/ops/governing-priorities.md): Rank **1** situating, Rank **2** verified behavior (tests), Ranks **4**/**6** structure that does not loosen; Rank **7** = **dated** depth-fit (owner + due date), not soft skip ([ADOPTION.md](../../kit/docs/ADOPTION.md#correct-sequence), [testing-bar.md](../../kit/docs/ops/testing-bar.md)).
3. **Editor-portable policy** — canonical skills in `agents/`; adapters stay thin ([adapters/README.md](../../kit/adapters/README.md)).
4. **Change project** — fixed sequence; ideal end state named; foundation before later gates ([ADOPTION.md](../../kit/docs/ADOPTION.md)).
5. **Code-first** — repeatable how in repo ([CODE-FIRST.md](../../kit/docs/CODE-FIRST.md)).
6. **Agent auto-loop** — when an agent edits, run must/should without permission nudges; stop only on [AGENTS.md stop allowlist](../../kit/AGENTS.md#agent-stop-allowlist) (heuristic forks, approach conflicts, **dual homes** — two deciding docs for one thing — missing secrets).

## Moat (honest)

| Durable | Not the moat |
|---------|----------------|
| Sequenced trend gates + change-project loop + Prefer/Avoid that compounds when you touch real product work | Skills or markdown without doc/size foundation |
| Leaving the governing framework in the customer's repo | Value trapped only in consultancy hours |
| Reference implementation pressure (TeamResume sibling patterns, including Knip hygiene) + first install dogfood ([examples/first-host](../../examples/first-host/)) | Generic prompt libraries or always-on 400-line dumps |

**Services edge:** guided change project and first on-contact fix. Still leaves `kit/` in-repo so the framework is not trapped in the consultancy ([offer-model.md](offer-model.md)).

## Do not claim

- Best AI coding model, IDE, or agent runtime.
- Drop-in replacement for the customer's entire SDLC or PMO.
- Zero effort after copy-paste; no CANONICAL fill or tribal inventory.
- Editor lock-in as a feature.
- Raising **ratchet** (budget that only tightens) or unused-export ceilings to "unblock" as a supported practice.
- That Prefer/Avoid or skills alone guarantee “always trending better” without mechanical gates.
- That every ideal gate must be green on day one of the change project (foundation first; ideal may be on a **dated queue**, not soft-skipped).
- Zero human decisions forever / hands-off agents with no heuristic forks (stop allowlist still pauses for Prefer/Avoid conflicts and dual homes).
- SOC 2 / market leadership / customer counts (unset).
- TeamResume product outcomes (CV/PDF/Matchability) as Railkit outcomes.
- That the framework is an "operating system" in the OS sense.
- That installing Railkit makes the customer GDPR/AI-Act “compliant.”
- That Cursor/Copilot/Claude (or any named tool) meet the customer’s legal bar by default.
- Detail on repo + agents: [../consulting/privacy-and-legality.md](../consulting/privacy-and-legality.md).
