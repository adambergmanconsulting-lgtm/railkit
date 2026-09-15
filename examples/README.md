# Examples

Monorepo practice hosts that dogfood the kit. **Not** part of the installable `kit/` tree. Never copy `examples/` into a customer host.

## first-host (Demo Catalog)

| Field | Value |
|-------|--------|
| Qualification | **Go** — named decider (maintainer), writable tree, CI workflow, active change area |
| Shape | Greenfield JS single-package + planted dual homes (two docs both deciding) / large hotspot file |
| Why a dedicated first-host | Keeps install/adopt proof separate from any prior product repo |
| Why not MiniDataMesh | No git / CI you can change at qualify time (no-go / re-scope until merge leverage exists) |
| Receipt | [first-host/docs/ops/adopt-receipt.md](first-host/docs/ops/adopt-receipt.md) |
| Checks | `npm --prefix examples/first-host run check:railkit` |

Improve the kit by feeding must/should findings from this host into kit owners ([ADOPTION.md](../kit/docs/ADOPTION.md#improve-the-kit-after-a-host-apply)).

## Rank chain (teaching)

Seven governing links on a well-shaped composite host: [../kit/docs/ops/rank-chain-example.md](../kit/docs/ops/rank-chain-example.md).
