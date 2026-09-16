---
id: 2026-09-16-amd-mi355x-vs-gb300-inference-tco
type: discussion
date: 2026-09-16T07:20:00-04:00
title: Is AMD MI355X closing agentic-inference TCO vs GB300 — or only on some stacks?
summary: >
  SemiAnalysis says MI355X is quickly closing perf/TCO vs GB300 in agentic
  inference via SGLang/MoRI/UMBP; replies split on InferenceX $/M-token
  snapshots and software vs silicon.
people: []
entities: [AMD, NVIDIA, SemiAnalysis]
source: https://x.com/SemiAnalysis_/status/2100027188393189711
backfill: false
fidelity: top-replies
recurrence: new
prior: []
review_after: 2026-12-15
resolved: false
---

## Opening

**SemiAnalysis has the better of the *direction* claim — MI355X TCO is moving — but the room correctly refuses a single apples-to-apples close.**
[@SemiAnalysis_](https://x.com/SemiAnalysis_/status/2100027188393189711) says AMD MI355X is "quickly closing the perf/TCO gap in agentic inference" versus GB300, attributing gains to AMD's SGLang work, MoRI, and UMBP KV offload versus HiCache's host-side copy path. Visible replies cite InferenceX figures that still favor GB300 on some models/SLOs and argue the delta is stack maturity (portable software) rather than permanent silicon share. Deep tail unread (`top-replies`).

## Sides

**FOR — gap closing on agentic inference TCO (software+silicon path)**
- @SemiAnalysis_ [named] — MI355X closing perf/TCO vs GB300 apples-to-apples; SGLang + MoRI + UMBP remove HiCache copy/stall
- @ComputCapital [anon] — InferenceX Kimi at 98 tok/s/user: MI355X ~$0.25/M tok vs GB300 ~$0.35; high-interactivity where AMD lands first

**AGAINST — not closed on other stacks / not a buy vs training-capable NVIDIA**
- @KennyChinaTech [pseudo] — InferenceX: GB300 $0.06/M tokens vs MI355X $0.46 on GLM5.1 at 30 tok/s/user
- @trungnt13 [anon] — why buy MI355X for equivalent inference when NVIDIA still has reliable training
- @bytecrafter_1 [pseudo] — if delta is SGLang/MoRI/KV offload, software lands on both vendors; ask mean throughput vs latency SLO
- @DavidYordan777 [anon] — ~15 months to parity reads as slow for customers; "Speed = moats"

*Room: tier-1 research anchor with charts; opposing $/M-token cites are screenshot/relay-style — treat as unverified vs SemiAnalysis primary charts until InferenceX primary is opened.*

## Quotes

> BREAKING: AMD MI355X is quickly closing the perf/TCO gap in agentic inference, when compared to GB300 apples-to-apples. (1/3)🧵
> — [SemiAnalysis (@SemiAnalysis_)](https://x.com/SemiAnalysis_/status/2100027188393189711)

> These rapid improvement can be attributed to both AMD's amazing SGLang team as well as their incredibly based, first-principles MoRI (Modular RDMA Interface) library. These particular improvements also reflect UMBPs integration in SGLang as a KV offloading backend. (2/3)
> — [SemiAnalysis (@SemiAnalysis_)](https://x.com/SemiAnalysis_/status/2100027190205095977)

> The gap is closing on some stacks, but this isn’t the default comparison: InferenceX puts GB300 at $0.06/M tokens versus $0.46 for MI355X on GLM5.1 at 30 tok/s/user.
> — [Kenny Chen (@KennyChinaTech)](https://x.com/KennyChinaTech/status/2100031426175598914)

> InferenceX Kimi at 98 tok/s/user: MI355X ~$0.25/M tok, GB300 ~$0.35. High-interactivity is where AMD's TCO close lands first.
> — [ComputeCapital (@ComputCapital)](https://x.com/ComputCapital/status/2100029947968426132)

## What would settle it

Published InferenceX (or SemiAnalysis) TCO tables for the same model, concurrency, and latency SLO on MI355X vs GB300 across at least two agentic workloads
Knowable — next SemiAnalysis / InferenceX refresh — through 2026-12-15

Hyperscaler or neocloud disclosure of MI355X share of new inference capacity vs NVIDIA
Knowable — next major cloud earnings Q&A — fall 2026–early 2027

Whether UMBP/SGLang improvements appear with similar magnitude on GB300 stacks (software portability test)
Knowable — follow-on SemiAnalysis notes — through Q4 2026
