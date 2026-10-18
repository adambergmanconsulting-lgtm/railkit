# CI flow

**Purpose:** Mental model for cheap local checks → clean-room CI → release. Commands live in `package.json` and workflows ([CODE-FIRST.md](../CODE-FIRST.md)).

## Fast path (read first)

- **Local:** the host umbrella (JS pack: `check-umbrella.js`). Steps: `documentation`, `ownership`, `architecture`, `ratchet`.
- **CI:** the host workflow runs that same umbrella. Do not add a second remote-only gate.
- **Resume:** `CHECK_FROM=<step>` skips earlier steps that already passed in this session.
- **Skill:** `ci-gate` — what to run when merge fails or before push

## Mental model

| Stage | Role |
|-------|------|
| **Editor / pre-commit (optional)** | Fast lint or staged checks; wire later ([ci/README.md](../../scripts/ci/README.md)) |
| **Local checks** | Doc ownership + file-size ratchets (budgets that only get stricter) first; unused-export via `check:unused-export` as Rank **7** on the same umbrella when ready |
| **CI workflow** | Clean-room confirmation of the same scripts |
| **Release** | Host-defined; skill `release` points here after the host fills the section |

## Host fill-in

Replace this section with branch names, resume flags, and E2E tiers. Keep the rule: CI invokes the same entrypoints as local. Actor-agnostic (same rules for humans and agents): one umbrella for every editor of the repo.

**Trend gates / tests:** instruments (checks/tools that serve a rank) of [governing-priorities.md](governing-priorities.md). Adopt order and customer depth: [ADOPTION.md](./governing-priorities.md), [testing-bar.md](testing-bar.md).

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
