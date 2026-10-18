# Quick start (install this working system into a repo)

**Purpose:** Merge these owners, skills, and checks into an existing codebase so people and agents share one situating path (open the one right owner doc before edit) and the same tighten-only quality checks.

**Source:** copy the framework folder only. Do not copy a seller `project/` tree (offer, marketing, competition, consulting).

## Fast path (read first)

1. Run `node kit/scripts/install/copy-kit-to-host.js --target <hostDir>` (or copy per [What to copy](#what-to-copy)). Default packs are `core,ui,fit`.
2. Point the host intent router at these rows. Use [templates/host-readme-stub.md](../templates/host-readme-stub.md). Do not keep the framework folder's own `README.md` (it links seller docs).
3. Confirm `architecture-budgets.json` `roots`. The script sets `["src"]` when `src/` exists, or `["apps","packages"]` when both exist. Otherwise set roots by hand ([code-quality-and-refactor.md](ops/code-quality-and-refactor.md#architecture-roots-examples)).
4. Wire `package.json` check scripts to the installed script paths. Then follow [ADOPTION.md](ADOPTION.md).
5. Rank **7:** wire `check:unused-export` (`queued` with owner+due, or the host's unused-export tool) when Rank **1** and **2** hold. It is not part of the foundation umbrella until you choose.
6. When the engagement ends, from the framework checkout run the same script with `--exit`. That cutover is [ADOPTION.md](ADOPTION.md#exit-cutover).

## What to copy

| Pack | From the framework | Into host |
|------|--------------------|-----------|
| core | `docs/` except `MAP.md` and `ops/rank-chain-example.md` | `docs/` (merge; keep host product specs) |
| core | `agents/` except `skills/engagement-review.md` | `agents/` |
| core | Cursor rules and skills except engagement-review | `.cursor/` |
| core | `adapters/README.md`, `llm.txt`, `AGENTS.md` | same paths |
| core | `templates/agent-session-rules.md` | Host `.cursorrules` |
| core | `templates/host-readme-stub.md` | Host `README.md` if missing |
| core | JS pack `packs/js/` | `scripts/railkit/` or `--scripts-merge` |
| ui (default) | `docs/product/heuristics/ui-*.md`, layout, living-design | same paths |
| fit (default) | `customer-targets.md`, `customer-fit.md` | same paths |
| hosting (opt-in) | `infra/` including the example contract | `infra/` |
| seller (opt-in) | `engagement-review` skill and its editor wrapper | same paths |

Links that point outside the framework are rewritten to the framework repository on copy. Nested script links point at `scripts/railkit/`. Do not copy a seller `project/` tree or the framework `README.md` as the host product hub.

Pull requests: [templates/pr-checks.yml](../templates/pr-checks.yml) (the install script copies it when `.github/workflows/` is empty). It runs `npm test` and `npm run check:railkit` on `pull_request` only. If the default-branch deploy workflow already runs those commands, do not add a second push job.

```bash
node kit/scripts/install/copy-kit-to-host.js --target <hostDir> --packs core,ui,fit,hosting
```

## Scripts layout (JS pack)

Check scripts resolve the repo root by walking up to `docs/CODE-FIRST.md` + `package.json` ([`packs/js/lib/repo-root.js`](../packs/js/lib/repo-root.js)). Both layouts work:

- **Nested (default, during the engagement):** `scripts/railkit/documentation/…` and `scripts/railkit/architecture/…`
- **Merge:** `scripts/documentation/…` and `scripts/architecture/…`
- **After exit:** nested scripts move to the merge paths, and `check:railkit` is renamed to `check:quality`

Example `package.json` scripts for the nested layout. The umbrella honors `CHECK_FROM` (`documentation`, `ownership`, `architecture`, `ratchet`) so a long run can resume from a step that already passed:

```json
{
  "scripts": {
    "check:documentation": "node scripts/railkit/documentation/check-documentation.js",
    "check:documentation:ownership": "node scripts/railkit/documentation/check-documentation-ownership.js",
    "check:architecture": "node scripts/railkit/architecture/check-architecture.js",
    "check:architecture:ratchet": "node scripts/railkit/architecture/check-architecture-ratchet.js",
    "check:unused-export": "node scripts/railkit/unused-export/check-unused-export.js",
    "check:editor-rules": "node scripts/railkit/editor/check-always-on-rules.js",
    "check:railkit": "node scripts/railkit/check-umbrella.js"
  }
}
```

After Rank **1**–**2** hold, add `&& npm run check:unused-export` to the umbrella when `unused-export.json` mode is `knip` (or keep `queued` with a live clock). `check:editor-rules` applies when the Cursor adapter is installed (at most 3 always-on rules, at most 30 body lines).

## Prerequisites

- The JS pack needs Node 20+. Other stacks keep the docs and skills and fill their own check commands.
- An editor or agent that can load markdown skills. A Cursor adapter is included. Others: [adapters/README.md](../adapters/README.md).

## Verify

```bash
npm run check:railkit
```

Then open [ADOPTION.md](ADOPTION.md) and run the bootstrap sequence on the host's real docs.
