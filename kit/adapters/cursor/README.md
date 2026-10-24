# Cursor adapter

Merge this folder into the host as `.cursor/` (rules + skills). Canonical skill bodies stay in repo `agents/skills/`; wrappers here only add Cursor frontmatter and a link.

## Merge

1. Copy `rules/*.mdc` → host `.cursor/rules/`.
2. Copy `skills/*/SKILL.md` → host `.cursor/skills/`.
3. Generate host `.cursorrules` from [templates/agent-session-rules.md](../../templates/agent-session-rules.md) (adjust paths if these files live under a subfolder).
4. Keep always-on rules few and short: at most 3 with `alwaysApply: true`, at most 30 non-empty body lines. Check: `node check-always-on-rules.js --rules rules` from this folder, or `check:editor-rules` on a host.
5. Optional: shared-checkout commit guard — [hooks/README.md](hooks/README.md) (`beforeShellExecution` returns **deny**, not `ask`).

## Rules map

| Rule | Owner |
|------|--------|
| `architecture-guardrails` | application-layering + code-quality |
| `code-first` | CODE-FIRST.md |
| `unreferenced-code-deletion` | AGENTS.md / code-quality |
| `development-docs-location` | DOCUMENTATION-PRINCIPLES.md |

## Skills

Each `skills/<name>/SKILL.md` links to `agents/skills/<name>.md`. If the host copies only `.cursor/` without `agents/`, either keep `agents/` at repo root or paste a one-line relative path fix.
