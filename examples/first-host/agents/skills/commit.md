# Skill: commit

**Owner:** host commit policy; index [ci-flow.md](../../docs/ops/ci-flow.md)

Use only when the user asks to commit or plan commits. Preview the batch plan; stage explicit paths; conventional messages. If they also ask to push, push after commit (host push command).

## Loop

1. `git status` / `git diff` / recent log (shared-checkout awareness — other writers may own hunks).
2. Group by outcome; prefer one user-visible outcome per feat/fix/perf if the host uses that bar.
3. Before the first `git commit`: stop `dev` / app server in this checkout if running (do not ask; shared-checkout).
4. Stage explicit paths (not blind `git add -A` on a dirty shared tree).
5. Commit; never skip hooks unless the user explicitly asks. Foreign unstaged paths: stop/ask in chat (host commit-guard hook should **deny**, not `ask` — see shared-checkout).
6. If the user also asked to push: push with the host's push command; do not re-ask whether to push.

## Prefer / Avoid

| Prefer | Avoid |
|--------|--------|
| Explicit path staging | Committing foreign hunks (changes you did not make) |
| Message matches host convention | Rewriting pushed history |
| Execute commit (+ push when asked) after the batch plan when the user already authorized it | A second "shall I commit/push?" after they said commit and push |
| Chat confirm for foreign WIP; then escape env inline in the retry command | Cursor hook `permission: "ask"` (approval card breaks Run Everything) |
