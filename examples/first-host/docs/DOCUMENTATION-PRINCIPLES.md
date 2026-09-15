# Documentation principles

**Meta** — Keep docs small, stable, and cheap to load in sessions.

**Owns:** placement, structure ranks, session situating, why vs how, **plain-language Prefer/Avoid**.  
**Does not own:** product jobs, pitch substance, stack-specific layering detail, UI microcopy ([product/heuristics/ui-naming.md](product/heuristics/ui-naming.md)).

**Read path:** Structure → [Documentation structure](#documentation-structure). Prose → [Plain language](#plain-language). Situating → [Session discipline](#session-discipline). Code-first how → [CODE-FIRST.md](CODE-FIRST.md).

## Fast path (read first)

- **One deciding owner** per definition or contract; indexes only point.
- **Why vs how:** procedures in scripts / CI / infra / skills; docs keep why.
- **Plain language:** short direct sentences; everyday words; define kit terms once — see [Plain language](#plain-language).
- **Fast path** on deciding homes (≤ ~25 non-empty lines under `## Fast path` or hub Read order).
- **Extend gates:** same structural fail twice → add a narrow mechanical check.

## Placement (new content)

| Content | Location |
|---------|----------|
| Product / UX heuristics (host fill-in) | `docs/product/` |
| Architecture | `docs/engineering/architecture/` |
| Ops guides + governing priority ranks | `docs/ops/` |
| How we write docs | This file |
| Code-first principle | [CODE-FIRST.md](CODE-FIRST.md) |
| CI / script inputs (JSON) | Next to consumer under `scripts/` or `infra/` — not under `docs/` |
| Railkit offer / marketing / competition / consulting / engagement qualification | Sibling monorepo `project/` (not installed into hosts) |

## Authority when docs disagree

1. Code and tests (execution truth)
2. Behavioral canon (host journey docs)
3. Domain specs / heuristics
4. Story / AC ledgers (test IDs only)
5. Indexes (MAP, this file) — navigation only

## Documentation structure

| Rank | Principle | Fail if… |
|------|-----------|----------|
| **1** | One deciding owner | Two files both decide the same contract |
| **2** | Indexes point | Paraphrase or second copy of a deciding table |
| **3** | One job per section | Removable section with no loss; second definition under a new heading |
| **4** | Layer honesty | Decide ≠ index ≠ claim ≠ journey |
| **5** | Why vs how | Long how that duplicates a script |
| **6** | Thin adapters | Second policy tree in an editor folder |
| **7** | Single intent router | Parallel Start Here tables outside the active root README (host root after install; monorepo root vs `kit/README` / `project/README` is intentional) |

## Plain language

**Owns:** how kit (and host) docs should read. Commercial `project/` docs follow this Prefer/Avoid via pointer — they do not keep a second prose rulebook.

| Prefer | Avoid |
|--------|--------|
| Short, direct sentences; one idea per sentence when it stays clear | Stacked abstractions and nested clauses that hide the point |
| Everyday words; say what to do | Unexplained jargon, buzzwords, or kit slang without a first-use definition |
| Name the thing (file, command, rank) once in plain words, then use the short name | Acronyms or rank nicknames as the only explanation |
| Tables and fail-if that a new editor can apply | Prose that assumes the reader already lives in Railkit vocabulary |
| Define a kit term on first use (or link the owner Fast path) | “Instrument,” “situating,” “ratchet,” etc. with no gloss for a first-time host reader |

**Words we use (short glossary):**

| Term | Plain meaning |
|------|----------------|
| Situating | Open the one right owner doc before you edit |
| Dual home | Two docs that both decide the same thing |
| Instrument | A check, test, or tool that serves a priority rank |
| Ratchet | A size or quality budget that may only get stricter |
| On contact | When you open a file for real product work |
| Dated / clocked queue | Deferred work with a named owner and due date |
| Actor-agnostic | Same rules for humans and agents |

**Fail if:** a deciding doc cannot be followed by a competent eng lead who has not seen Railkit before, without a glossary hunt.

UI product strings are a different yardstick ([ui-naming.md](product/heuristics/ui-naming.md)).

## Session discipline

Pick one intent from [README.md](../README.md#start-here-by-intent). Name the task in one sentence. Open only that owner Fast path before first edit. Re-situate when blocked, ambiguous, or the seam shifts.

### Review situating (token bar)

Shared Prefer/Avoid for review skills (`doc-review`, `layering-review`, `stability-review`, `ui-review`, `fit-review`, `priorities-review`, `engagement-review`):

| Prefer | Avoid |
|--------|--------|
| One subject sentence first | Folder-browse `docs/` or attach several review skills in one turn |
| One review skill per turn | Dump owner essays before a fail-if |
| Same-turn must/should fixes when the skill is the task | "Shall I fix?" when already running the review |
| Numbered decision forks when two or more valid paths | Soft "options exist" without forks |

### Self-improving loop

Fix toward the yardstick in the same turn. Same structural fail twice → propose a narrow mechanical gate or one owner lock (confirm before editing the yardstick).

## Mechanical gates

| Gate | Command |
|------|---------|
| Line budgets | `npm run check:documentation` |
| Fast path + one owner per Open cell | `npm run check:documentation:ownership` |

Budgets: [`scripts/documentation/documentation-budgets.json`](../scripts/documentation/documentation-budgets.json).
