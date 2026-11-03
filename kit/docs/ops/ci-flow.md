# CI flow

**Purpose:** Mental model for cheap local checks → clean-room CI → release. Commands live in `package.json` and workflows ([CODE-FIRST.md](../CODE-FIRST.md)).

## Fast path (read first)

- **Local:** the host umbrella (JS pack: `check-umbrella.js`). Steps: `documentation`, `ownership`, `architecture`, `ratchet`.
- **CI:** the host workflow runs that same umbrella. Do not add a second remote-only gate.
- **Resume:** `CHECK_FROM=<step>` skips earlier steps that already passed in this session.
- **Release:** when the host ships, each cut burns one named debt unit ([Debt pressure](#debt-pressure-rank-4--5)).
- **Skill:** `ci-gate` — what to run when merge fails or before push; `release` — ship loop

## Mental model

| Stage | Role |
|-------|------|
| **Editor / pre-commit (optional)** | Fast lint or staged checks; wire later ([ci/README.md](../../packs/js/ci/README.md)) |
| **Local checks** | Doc ownership + file-size ratchets (budgets that only get stricter) first; unused-export via `check:unused-export` as Rank **7** on the same umbrella when ready |
| **CI workflow** | Clean-room confirmation of the same scripts |
| **Release** | Host script/workflow + [Debt pressure](#debt-pressure-rank-4--5); skill `release` |

## Host fill-in

Replace this section with branch names, resume flags, and E2E tiers. Keep the rule: CI invokes the same entrypoints as local. Actor-agnostic (same rules for humans and agents): one umbrella for every editor of the repo.

**Trend gates / tests:** instruments (checks/tools that serve a rank) of [governing-priorities.md](governing-priorities.md). Adopt order and customer depth: [ADOPTION.md](../ADOPTION.md#correct-sequence), [testing-bar.md](testing-bar.md).

## Prefer / Avoid

| Prefer | Avoid |
|--------|--------|
| One host umbrella that matches laptop commands | Divergent CI and laptop commands |
| Pull-request workflow for that umbrella; a deploy workflow may run the same commands before publish | A second push workflow that repeats those commands |
| Rank **1**–**2** held before chasing Rank **7** instruments | Skipping owners to wire Knip or showy e2e jobs first |
| CI as how Rank **3**/**4** bind every editor | Treating CI jobs as goals above situating (opening the one right owner doc before edit) |
| Unit + e2e as Rank **2** proof vehicles | Merging behavior changes with red or skipped tests |
| Path-triggered heavy jobs when the host grows | Running the universe on every docs typo |
| Resume from a named gate after a green prefix | Re-running hours of green work without a resume story |
| Authorized commit / push: stop `dev` first; foreign-WIP commit guards return **deny** + chat ask (Cursor hook `ask` breaks Run Everything) | Stacking commit beside next-dev; hook `permission: "ask"` for routine foreign-WIP gates |

Occupancy detail: skill `shared-checkout`. Commit batching: skill `commit`.

## Debt pressure (Rank 4 + 5)

**Owns:** Prefer/Avoid for each ship/tag/deploy cut once the host has a release loop.  
**Does not own:** which ratchet classes exist or how ceilings tighten on a code change ([code-quality-and-refactor.md](code-quality-and-refactor.md#debt-pressure-and-exception-clocks)).

**Debt pressure** = each normal cut burns **one** named quality unit so entropy cannot wait forever under date pressure. Host scripts enforce it ([CODE-FIRST.md](../CODE-FIRST.md)); this section decides the bar.

| Prefer | Avoid |
|--------|--------|
| Snapshot exceptions and ratchet observed-vs-ceiling before ship | Shipping with silent allowlists and soft ceilings |
| One burn this cut: clear an exception row, tighten a ratchet that already improved, or open a deliberate upgrade/major PR | Growing exception lists without a named next clear |
| Record a named action for the cut (`cleared-allowlist` / `tightened-ratchet` / `opened-major-pr` / `skipped:<reason>`) | Chat-only “we will tighten later” |
| Refuse `skipped:` while any exception list is non-empty or any ratchet has **slack** (observed count under its ceiling) | Escape hatches as the everyday path |
| Break-glass flags only for true emergency ships | Using emergency to dodge routine debt |

**Fail if:** a host claims Rank **4** while every cut soft-skips with allowlist rows or ratchet slack still open.

**Clock timing:** wire debt pressure when the host already ships on a repeatable script (adopt working loop or later). Do not invent a release doctor before Rank **1**–**2** hold.
