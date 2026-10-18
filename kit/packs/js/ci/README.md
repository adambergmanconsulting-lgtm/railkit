# CI hooks (optional)

Optional host wiring (Husky, pre-push). Not required for the foundation umbrella.

## Fast path

- Local and CI call the same scripts.
- Pre-push or CI: the host umbrella (`check-umbrella.js`).
- Resume a long run with `CHECK_FROM=<step>` (`documentation`, `ownership`, `architecture`, `ratchet`).
