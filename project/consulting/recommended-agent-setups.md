# Recommended agent setups

**Owns:** ranked tooling setups for Railkit change projects and day-2 work on a host that already has the governing framework.  
**Does not own:** engagement ranks ([engagement-priorities.md](engagement-priorities.md)), editor adapter contract ([../../kit/adapters/README.md](../../kit/adapters/README.md)), offer lock, host qualification ([change-project-qualification.md](change-project-qualification.md)).

**Same rules for humans and agents:** merge gates and owners bind every editor. Agent choice is an **instrument** (check/tool for a rank) of engagement Rank 5 — see [engagement-priorities.md](engagement-priorities.md).

## Fast path (read first)

- Engagement yardstick: [engagement-priorities.md](engagement-priorities.md) (Rank **5**).
- Host gate conflicts: [governing-priorities.md](../../kit/docs/ops/governing-priorities.md) ; skill `priorities-review`.
- **Default recommend:** [Rank 1 — Cursor + shipped adapter](#rank-1--cursor--shipped-adapter-default).
- **Criteria:** [Scorecard](#scorecard).
- **Do not:** fat always-on rule dumps; cloud agents before owners exist; selling one vendor as the product.
- **Observability:** session rules + skills should load [AGENTS.md stop allowlist](../../kit/AGENTS.md#agent-stop-allowlist); agents auto-run must/should — prefer transcripts that show skill/`check:railkit` use over “shall I?” prompts.
- Privacy / vendor data flow (repo + agents): [privacy-and-legality.md](privacy-and-legality.md).

Railkit does **not** claim the best model or IDE ([usp-moat.md](../marketing/usp-moat.md#do-not-claim)). Scorecard optimizes **framework fit** first; never trade away CI gates.

## Scorecard

Scores are relative (1–5, higher is better for that criterion on a Railkit-shaped engagement).

| Setup | Framework fit | Agent quality (multi-file / opening the right owner doc) | Speed to first useful edit | Cost control | CI / automation fit | Setup friction |
|-------|---------------|----------------------------------------------------------|----------------------------|--------------|---------------------|----------------|
| 1. Cursor + `adapters/cursor` + `agents/skills` | 5 | 5 | 4 | 3 | 4 | 4 |
| 2. Claude Code (or similar CLI) + `llm.txt` / skills | 4 | 5 | 4 | 3 | 5 | 3 |
| 3. Copilot (chat / coding agent) + thin custom instructions → skills | 3 | 3 | 4 | 4 | 3 | 4 |
| 4. Any IDE + human-led + `llm.txt` + strong CI gates only | 5 | 2 | 2 | 5 | 5 | 5 |
| 5. Cloud / multi-agent swarms before foundation | 1 | 2 | 2 | 1 | 2 | 2 |

**How to read:** framework fit and **situating** (open the one right owner doc) quality first (engagement Rank **5**); cost control after owners exist. Never trade away CI gates for a fancier agent.

## Ranked recommendations

### Rank 1 — Cursor + shipped adapter (default)

**What:** Merge [adapters/cursor](../../kit/adapters/cursor/README.md) into `.cursor/`; keep canonical skills in `agents/skills/`; short `.cursorrules` / session rules from [templates/agent-session-rules.md](../../kit/templates/agent-session-rules.md). One intent per session; open one owner Fast path.

| Criterion | Notes |
|-----------|--------|
| Framework fit | First-class Railkit adapter; skills map 1:1 |
| Quality | Strong for CANONICAL fill, doc-review, on-contact refactors with repo context |
| Speed | Fast once router + Fast paths exist |
| Cost | Seat + model usage; control by **model tier by task** (below) |
| CI | Local `check:railkit` / host umbrella still required |

**Best for:** change-project facilitation and ongoing product hosts already using Cursor.

### Rank 2 — CLI coding agent (e.g. Claude Code) + markdown entry

**What:** Point project/session instructions at `llm.txt` (or host root README intent table) and `@`-include / symlink `agents/skills/<name>.md`. No second policy tree in the tool.

| Criterion | Notes |
|-----------|--------|
| Framework fit | Excellent if discipline holds; no shipped thin wrapper yet (v1) |
| Quality | Often excellent for terminal-native refactors and script/CI work |
| Speed | High for scripted loops; situating depends on loading the right skill |
| Cost | Similar class to Cursor (usage-heavy); batch with clear task sentences |
| CI | Natural fit next to local check scripts |

**Best for:** platform-heavy hosts, CI/gate wiring (Knip-class), engineers who live in the terminal.

### Rank 3 — Copilot (or similar IDE assistant) + thin instructions

**What:** Short custom instructions: pick intent from README; open one owner; link to `agents/skills/`. Prefer invoking named skills over pasting Prefer/Avoid into Copilot config.

| Criterion | Notes |
|-----------|--------|
| Framework fit | Easy to regress into a **rules dump** (landscape anti-pattern) |
| Quality | Fine for small edits; weaker long situating / **dual-home** (two deciding docs for one thing) resolution |
| Speed | Low friction where Copilot is already standard |
| Cost | Often cheaper per seat; watch silent low-quality thrash |
| CI | Still mandatory; do not treat Copilot as the quality bar |

**Best for:** orgs standardized on GitHub Copilot that accept thin wiring and CI ownership.

### Rank 4 — Human-led + `llm.txt` + gates (agent optional)

**What:** Governing framework + CI only. Humans (or occasional paste into any chat) follow the intent router. No always-on agent.

| Criterion | Notes |
|-----------|--------|
| Framework fit | Perfect same-rules-for-everyone story |
| Quality | Depends on people; gates carry the trend bar |
| Speed | Slower inventory and adopt |
| Cost | Lowest agent spend |
| CI | Highest relative importance |

**Best for:** air-gapped / regulated hosts, or post-foundation maintenance when agent spend must drop.

### Rank 5 — Avoid early: unsupervised cloud / multi-agent swarms

**What:** Many agents, broad repo access, weak intent routing.

| Criterion | Notes |
|-----------|--------|
| Framework fit | Fights the “one owner” rule |
| Quality | High variance; duplicates dual homes |
| Speed | Feels fast; rework dominates |
| Cost | Worst token burn before foundation |
| CI | Often bypassed or greenwashed |

**Use only after** foundation is green, with a **named task + one owner doc**, and the same merge gates as everyone else.

## Model tiering (within Rank 1–2)

Use a **stronger / slower / costlier** model for:

- Inventory of dual homes
- CANONICAL promotion decisions
- `doc-review` / `layering-review` on hot seams

Use a **cheaper / faster** model for:

- Mechanical renames after owners exist
- Filling Fast path stubs from a decided table
- Wiring check scripts when the pattern is already known

Wrong-tier use (cheap model inventing owners; expensive model on typo PRs) wastes either quality or money.

## Composition we recommend selling

1. **Always:** `kit/` in repo + local/CI foundation gates (non-negotiable).
2. **Primary agent path:** Rank 1 if the host can run Cursor; else Rank 2 or 3 with thin markdown wiring.
3. **Secondary:** Rank 4 habits (router + gates) so the framework survives when agents are off.
4. **Never:** agent setup as a substitute for [change-project-qualification.md](change-project-qualification.md) go/no-go or for skipping ADOPTION foundation.

## Related

- Adapters: [../../kit/adapters/README.md](../../kit/adapters/README.md)
- Qualification / tokens: [change-project-qualification.md](change-project-qualification.md)
- Competition (rules packs): [../competition/landscape.md](../competition/landscape.md)
