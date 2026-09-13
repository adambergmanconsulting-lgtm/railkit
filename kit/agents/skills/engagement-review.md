# Skill: engagement-review

**Owner:** [engagement-priorities.md](../../../project/consulting/engagement-priorities.md)  
**Edit-time:** when offer, qualification, agent setup, privacy, or claims conflict

Default bias: name the deciding engagement rank; demote instruments (checks or practices that serve a rank) that jumped the queue. Confirm before editing rank table.

Path note: skill body lives under `kit/agents/skills/`; owner doc lives under monorepo `project/consulting/` (not installed into hosts).

## Efficient pass

One subject sentence (`engagement:` / `claim:` / `setup:`). One review skill per turn. Open engagement-priorities Fast path first. Same-turn must/should fixes.

## Loop

1. Name the tension (e.g. close deal vs no decider; Cursor upsell vs Copilot org; privacy vs cloud agents).
2. Map to [engagement ranks](../../../project/consulting/engagement-priorities.md#ranked-priorities).
3. Higher wins; point the instrument owner (qualification, agent setups, privacy, offer, USP).
4. If the conflict is **inside the host repo** (owners, tests, CI), switch to skill `priorities-review` — do not resolve host Rank 1–2 here.
5. Do not paste Prefer/Avoid into this skill body.

## Finding shape

**rank · conflict · fail-if · fix · severity**  
**must** = Rank 1–2 inverted (bad fit or no decision rights); claims that violate do-not-claim; rules-dump sold as Railkit.  
**should** = agent setup optimized for speed over framework fit; privacy story conflates kit-in-git with vendor egress (data leaving to a vendor).  
**defer** = trim duplicate pitch wording.
