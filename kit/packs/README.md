# Packs

Principles (owners, ranks, skills) live in `docs/` and `agents/`. They do not require a language or an editor.

| Pack | Path | What it is |
|------|------|------------|
| JS / TS reference checks | [js/](js/) | Node 20 line-budget, ownership, file-size, and unused-export scripts. Other stacks replace these with their own commands and keep the same ranks. |
| Cursor | [../adapters/cursor/](../adapters/cursor/) | One editor adapter. Always-on rules: at most 3, at most 30 body lines (`check-always-on-rules.js`). |

A host that is not JS copies `docs/` and `agents/`, then fills the test command and the unused-export command in the host tables. It does not need this folder.
