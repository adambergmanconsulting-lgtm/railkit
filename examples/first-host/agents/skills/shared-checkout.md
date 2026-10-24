# Skill: shared-checkout

**Owner:** [ci-flow.md](../../docs/ops/ci-flow.md) (shared checkout section; host fills)

Occupancy on a shared working tree. Assume concurrent writers unless an isolated worktree.

## Loop

1. If exclusive command running (CI local, e2e, release): wait or stop; do not clobber (overwrite their work or lock). **Authorized commit / push / release:** stop a running `dev` / app server in this checkout first (do not ask); then continue.
2. `git status` before stage/commit.
3. `git diff -- path` before editing a dirty file; skip foreign hunks (lines others wrote).
4. No stash / reset --hard / revert of others' work.
5. Do not switch branches or start exclusive workflows unless that is the task.

## Prefer / Avoid

| Prefer | Avoid |
|--------|--------|
| Skip extraction on a foreign-dirty hotspot (file with others' uncommitted edits) | Fighting another writer for the same file |
| Isolated worktree for exclusive work | Assuming the tree is yours alone |
| Stop/ask **in chat** when a commit would ride foreign unstaged paths | Relying on a Cursor hook `permission: "ask"` for that gate (forces an approval card and breaks Run Everything) |
| If the host ships a `beforeShellExecution` commit guard: return **deny** + chat ask; after confirm, retry with a host escape env **inline in the same shell command** (hook process does not inherit Shell `$env:`) | Hook `ask`; stash/reset foreigners; skip pre-commit to unblock |
