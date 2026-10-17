# Quick start (install Railkit into a host)

**Purpose:** Merge this governing framework into an existing codebase so agents and humans share one situating path (open the one right owner doc before edit) and the same tighten-only quality checks.

**Source:** copy from the Railkit monorepo `kit/` folder only. Never copy `project/` (offer, marketing, competition, consulting).

## Fast path (read first)

1. Run `node kit/scripts/install/copy-kit-to-host.js --target <hostDir>` (or copy per [What to copy](#what-to-copy)). Default packs are `core,ui,fit`.
2. Point the host intent router at Railkit rows — use [templates/host-readme-stub.md](../templates/host-readme-stub.md); **do not** keep kit `README.md` (it links monorepo `project/`).
3. Confirm `architecture-budgets.json` `roots`. The script sets `["src"]` when `src/` exists, or `["apps","packages"]` when both exist. Otherwise set roots by hand ([code-quality-and-refactor.md](ops/code-quality-and-refactor.md#architecture-roots-examples)).
4. Wire `package.json` check scripts to the installed script paths; run [ADOPTION.md](ADOPTION.md).
5. Rank **7:** wire `check:unused-export` (`queued` with owner+due, or `knip`) — not part of foundation `check:railkit` until you choose.
6. After adopt, re-run with `--trim-adopt` so the install manual leaves the host deciding homes. Keep [templates/adopt-receipt.md](../templates/adopt-receipt.md).

## What to copy

| Pack | From `kit/` | Into host |
|------|-------------|-----------|
| core | `docs/` except `MAP.md` and `ops/rank-chain-example.md` | `docs/` (merge; keep host product specs) |
| core | `agents/` except `skills/engagement-review.md` | `agents/` |
| core | `adapters/cursor/` except engagement-review | `.cursor/` after [adapters/cursor/README.md](../adapters/cursor/README.md) |
| core | `adapters/README.md`, `llm.txt`, `AGENTS.md` | same paths |
| core | `templates/agent-session-rules.md` | Host `.cursorrules` |
| core | `templates/host-readme-stub.md` | Host `README.md` if missing |
| core | `templates/rank7-dated-queue.md` | `docs/ops/rank7-dated-queue.md` |
| core | `scripts/` except `install/` | `scripts/railkit/` or `--scripts-merge` |
| ui (default) | `docs/product/heuristics/ui-*.md`, layout, living-design | same paths |
| fit (default) | `customer-targets.md`, `customer-fit.md` | same paths |
| hosting (opt-in) | `infra/` including the example contract | `infra/` |
| seller (opt-in) | `engagement-review` skill and Cursor adapter | same paths |

Monorepo links (`project/`, `examples/first-host/`) are rewritten to GitHub on copy. Nested script links point at `scripts/railkit/`. Do not copy monorepo `project/` or kit `README.md` as the host product hub.

Pull requests: [templates/pr-checks.yml](../templates/pr-checks.yml) (the install script copies it when `.github/workflows/` is empty). It runs `npm test` and `npm run check:railkit` on `pull_request` only. If the default-branch deploy workflow already runs those commands, do not add a second push job. The kit repo's own `railkit-checks.yml` stays on push and pull request because that repo has no deploy workflow.

```bash
node kit/scripts/install/copy-kit-to-host.js --target <hostDir> --packs core,ui,fit,hosting
```

## Scripts layout

Check scripts resolve the repo root by walking up to `docs/ADOPTION.md` + `package.json` ([`scripts/lib/repo-root.js`](../scripts/lib/repo-root.js)). Both layouts work:

- **Nested (default):** `scripts/railkit/documentation/…` and `scripts/railkit/architecture/…`
- **Merge:** `scripts/documentation/…` and `scripts/architecture/…`

Example `package.json` scripts for nested layout:

```json
{
  "scripts": {
    "check:documentation": "node scripts/railkit/documentation/check-documentation.js",
    "check:documentation:ownership": "node scripts/railkit/documentation/check-documentation-ownership.js",
    "check:architecture": "node scripts/railkit/architecture/check-architecture.js",
    "check:architecture:ratchet": "node scripts/railkit/architecture/check-architecture-ratchet.js",
    "check:unused-export": "node scripts/railkit/unused-export/check-unused-export.js",
    "check:railkit": "npm run check:documentation && npm run check:documentation:ownership && npm run check:architecture && npm run check:architecture:ratchet"
  }
}
```

After Rank **1**–**2** hold, add `&& npm run check:unused-export` to the umbrella when `unused-export.json` mode is `knip` (or keep `queued` with a live clock).

## Prerequisites

- Node 20+ if using the check scripts.
- An editor or agent that can load markdown skills (Cursor adapter included; others: [adapters/README.md](../adapters/README.md)).

## Verify

```bash
npm run check:railkit
```

Then open [ADOPTION.md](ADOPTION.md) and run the bootstrap sequence on the host's real docs. Dogfood reference: monorepo [`examples/first-host/`](../../examples/first-host/) + [adopt-receipt.md](../../examples/first-host/docs/ops/adopt-receipt.md).
