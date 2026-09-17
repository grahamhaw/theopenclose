---
id: 2026-09-17-ccl-upgrade-vs-cpo-substitution
type: discussion
date: 2026-09-17T07:28:00-04:00
title: Does CPO kill M8/M9 CCL upgrades — or is that scale-out/scale-up confusion?
summary: >
  Market rumor: CPO cuts ultralow-loss CCL demand. Jeff Pu says upgrade stays —
  CPO not on compute board soon; NVSwitch still needs high-spec PTFE CCL.
people: [Jeff Pu]
entities: [NVIDIA]
source: https://x.com/sssjeffpu/status/2100506193102065733
backfill: false
fidelity: top-replies
recurrence: new
prior: []
review_after: 2026-12-15
resolved: false
---

## Opening

**Pu has the better of the *near-term* claim: CPO-as-copper-killer is a rumor ahead of board-level evidence.**
[@freearkshaw](https://x.com/freearkshaw/status/2100485829231775916) relays a market view that CPO on AI servers/switches shifts high-speed signals copper→optical, reducing M8/M9 ultralow-loss CCL demand (even M4 downspecs) and pressuring CCL equities. [@sssjeffpu](https://x.com/sssjeffpu/status/2100506193102065733) replies that the thesis is theoretically neat but practically wrong near-term: CPO will not hit the compute board soon, and next-year NVSwitch NPO/CPO still uses higher-spec CCL (PTFE + M8/9) — PTFE remains the key thesis. Visible Chinese-language replies lean "far worry, not near worry." Deep tail unread (`top-replies`).

## Sides

**FOR — CPO substitution reduces high-end CCL / copper SerDes demand (market rumor)**
- @freearkshaw [pseudo] — relays rumor: CPO near ASIC shortens PCB copper runs; 448G generation accelerates optical-for-copper; M8/M9 demand down, possible M4 downspec; CCL board selloff

**AGAINST — CCL upgrade path intact near-term (named semis research)**
- @sssjeffpu [named] — CPO not on compute board soon; NVSwitch NPO/CPO next year still higher-spec CCL (PTFE + M8/9); PTFE thesis stands
- @hanqing1120 [anon] — market treated scale-out optical substitution as scale-up copper substitution; CPO volumes still small — "远虑不是近忧"

*Room: named Asia semis voice (Pu) vs rumor relay + A-share tape commentary; no OEM BOM primary in the visible thread.*

## Quotes

> 市场传出观点：CPO 逐步导入 AI 服务器、交换机，高速信号由铜转光，会降低对 M8/M9 超低损耗 CCL 需求，主板规格甚至可下修至 M4；该传言引发盘中覆铜板板块卖压。
> — [投研荟 (@freearkshaw)](https://x.com/freearkshaw/status/2100485829231775916)

> Re: CCL Upgrade Debate
> Theoretically right, but practically the CCL upgrade stays.
> 1.  CPO won’t hit the compute board anytime soon
> 2.  NVSwitch NPO/CPO next year still uses higher-spec CCL (PTFE + M8/9). -&gt; Key thesis is still PTFE
> — [Jeff Pu (@sssjeffpu)](https://x.com/sssjeffpu/status/2100506193102065733)

> @freearkshaw 市场把Scale-out的光替代当成了Scale-up的铜替代。CPO出货量还小，对CCL的冲击是远虑不是近忧。
> — [hanqing (@hanqing1120)](https://x.com/hanqing1120/status/2100493755518538216)

## What would settle it

OEM / ODM BOM or SemiAnalysis-style teardown showing compute-board CCL grade (M8/M9/PTFE vs downspec) on next NVSwitch / Rubin-class platforms
Knowable — next public teardowns / supplier commentary — through 2026-12-15

Public CPO attach rates on AI server vs switch (scale-up vs scale-out) with timing that could move CCL mix in 2026–27
Knowable — supplier earnings / industry maps — through 2026-12-15

Whether Taiwan/China CCL equity moves reverse on primary evidence rather than rumor screenshots
Knowable — next 1–2 earnings cycles for major CCL names — through early 2027
