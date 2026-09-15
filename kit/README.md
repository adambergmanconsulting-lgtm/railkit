# Railkit (governing framework)

**Who this page is for:** people editing **this repo** after install (humans and agents). This folder is the installable framework only. Offer and sales docs live in the Railkit monorepo `project/` tree and are **not** copied here.

**What you have:** shared rules of work so every editor (human or agent) can:

- Open the one right owner doc before editing
- Keep repeatable how in scripts and skills
- Refuse checks that quietly loosen
- Improve structure when touching real product work

Toward coherence, efficiency, clarity, and quality. Why this shape: [docs/WHY.md](docs/WHY.md). Not a product clone. Not locked to one editor.

Plain-language rules: [docs/DOCUMENTATION-PRINCIPLES.md — Plain language](docs/DOCUMENTATION-PRINCIPLES.md#plain-language).

## Start here by intent

| Intent | Open |
|--------|------|
| Why this framework | [docs/WHY.md](docs/WHY.md) |
| Install / merge this framework into a repo | [docs/00-QUICK-START.md](docs/00-QUICK-START.md) |
| Bootstrap / adopt (fill owners, size budgets, working loop) | [docs/ADOPTION.md](docs/ADOPTION.md) + skill `adopt` |
| Implement / fix / refactor | [AGENTS.md](AGENTS.md) → [docs/CANONICAL-SOURCES.md](docs/CANONICAL-SOURCES.md) (one row) |
| Code-first (repeatable how → code) | [docs/CODE-FIRST.md](docs/CODE-FIRST.md) |
| Doc structure / plain language | [docs/DOCUMENTATION-PRINCIPLES.md](docs/DOCUMENTATION-PRINCIPLES.md) ; skill `doc-review` |
| CI / what to run / merge | [docs/ops/ci-flow.md](docs/ops/ci-flow.md) ; skill `ci-gate` |
| Layering / placement | [docs/engineering/architecture/application-layering.md](docs/engineering/architecture/application-layering.md) + [docs/ops/code-quality-and-refactor.md](docs/ops/code-quality-and-refactor.md) ; skill `layering-review` |
| Priority / check conflicts | [docs/ops/governing-priorities.md](docs/ops/governing-priorities.md) ; skill `priorities-review` |
| Rank chain example (teaching) | [docs/ops/rank-chain-example.md](docs/ops/rank-chain-example.md) |
| Stability / shared-contract leftovers | [docs/ops/ongoing-engineering-bar.md](docs/ops/ongoing-engineering-bar.md) ; skill `stability-review` |
| UI review / design pass | [docs/product/heuristics/ui-principles.md](docs/product/heuristics/ui-principles.md) ; skill `ui-review` |
| Fit / who we serve (product templates) | [docs/product/heuristics/customer-targets.md](docs/product/heuristics/customer-targets.md) then [customer-fit.md](docs/product/heuristics/customer-fit.md) ; skill `fit-review` |
| Browse docs | [docs/MAP.md](docs/MAP.md) |
| Agent skills (any editor) | [agents/README.md](agents/README.md) |
| Editor adapters | [adapters/README.md](adapters/README.md) |

**Before first edit:** name the task in one sentence. Pick **one** intent row above; open only that owner’s Fast path or named section. Do not assume the job is code work. If you are blocked or the seam shifts, return here and open the right row.

## Layers

1. **Authority and routing** — one start-here table; one deciding owner per task.
2. **Thin editor adapters** — short must-dos and links; policy stays in `docs/` and `agents/skills/`.
3. **Mechanical budgets** — limits that only get stricter; never raise ceilings to unblock.
4. **Layering** — thin shells; domain owns persistence and side effects.
5. **Review skills** — structure, layering, stability, UI, fit against named yardsticks.
6. **Code-first** — checks, CI, contracts, and agent procedures live in the repo.

## Checks

```bash
npm run check:railkit
```

Wire the same script in CI ([docs/ops/ci-flow.md](docs/ops/ci-flow.md)). Ideal depth (governing Rank **7** — dated unused-export / Knip-class when ready): `npm run check:unused-export` when configured. Rank order: [docs/ops/governing-priorities.md](docs/ops/governing-priorities.md).
