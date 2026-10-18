# Host product (replace after install)

**Working agreements installed.** Specialize this file for the host product. Do not keep seller-doc links.

## Start here by intent

| Intent | Open |
|--------|------|
| Install / adopt | [docs/00-QUICK-START.md](docs/00-QUICK-START.md) ; [docs/ADOPTION.md](docs/ADOPTION.md) |
| Implement / fix / refactor | [AGENTS.md](AGENTS.md) → [docs/CANONICAL-SOURCES.md](docs/CANONICAL-SOURCES.md) |
| CI / merge | [docs/ops/ci-flow.md](docs/ops/ci-flow.md) |
| Tests when behavior moves | [docs/ops/testing-bar.md](docs/ops/testing-bar.md) then Preferred harness owner (Host fill-in) |
| Code-first / tribal → code | [docs/CODE-FIRST.md](docs/CODE-FIRST.md) |

**Session start:** pick one row. Name the task; open only that owner Fast path.

## Checks

```bash
npm run check:railkit
```

The engagement umbrella name is `check:railkit`. Exit renames it to `check:quality`. JS pack resume: `CHECK_FROM=documentation|ownership|architecture|ratchet`.
