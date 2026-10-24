# Cursor hooks (optional host depth)

Copy into the host as `.cursor/hooks/` and wire from `.cursor/hooks.json` when the host needs a shared-checkout commit guard.

## Commit guard (foreign WIP)

**Pattern:** `beforeShellExecution` matcher `git commit` → return **`deny`** (not `ask`) when unstaged paths sit outside the staged set. Cursor hook `ask` forces an approval card and breaks Run Everything; the agent must stop/ask in chat instead.

After the user confirms, retry with a host escape env **inline in the same shell command** (hook process does not inherit Shell `$env:` alone), e.g. `HOST_ALLOW_FOREIGN_COMMIT_WIP=1 git commit …` or PowerShell `$env:HOST_ALLOW_FOREIGN_COMMIT_WIP='1'; git commit …`.

Reference implementations: TeamResume / ScopeEngine `.cursor/hooks/shared-checkout-commit-guard.js`. Prefer/Avoid: [shared-checkout skill](../../../agents/skills/shared-checkout.md), [ci-flow.md](../../../docs/ops/ci-flow.md).
