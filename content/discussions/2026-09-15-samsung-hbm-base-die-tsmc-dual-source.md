---
id: 2026-09-15-samsung-hbm-base-die-tsmc-dual-source
type: discussion
date: 2026-09-15T04:02:00-04:00
title: Does Samsung dual-sourcing HBM base dies with TSMC ease the HBM bind — or just meet customers?
summary: >
  jukan05 and ZDNet Korea report Samsung will use both Samsung Foundry and
  TSMC for custom HBM base dies by customer request, with Memory Division
  owning design when TSMC fabs the die. Replies frame it as avoiding turnkey
  isolation; wafer-capex allocation to TSMC remains the open bind.
people: [Jukan]
entities: [Samsung, TSMC, NVIDIA, Amazon]
source: https://x.com/jukan05/status/2099770851516428455
backfill: false
fidelity: top-replies
recurrence: new
prior: [2026-09-14-hbm-4hi-enough]
review_after: 2026-12-10
resolved: false
---

## The read

Dual-sourcing custom HBM base dies is better read as *customer-chain access* than as proof the HBM constraint is broken. ZDNet Korea (Sep 15) and jukan's summary agree on the structure: Samsung Foundry *and* TSMC base dies under Samsung HBM stacks when customers ask; Memory Division designs for the TSMC path; System LSI stays on internal foundry. That can raise Samsung's odds of staying in Nvidia/CSP programs (NVHBM-class custom). It does not automatically add HBM stack capacity — and replies correctly flag TSMC advanced-logic wafer scarcity as the possible new bottleneck. Versus yesterday's 4-Hi debate: this is a different axis (who fabs the base die), not stack height.

## State of play

@jukan05 relays Korean reporting that Samsung will collaborate with TSMC as well as its own foundry on custom HBM base dies depending on customer requirements. When TSMC fabs the base die for Samsung HBM, design/optimization sits with Samsung Memory; System LSI designs only for Samsung Foundry. ZDNet Korea's same-day piece frames the move as avoiding supply-chain isolation in a custom-HBM era (NVHBM cited; Amazon/Annapurna Trainium4 mentioned as a first NVHBM customer in the article). Replies stress customer choice, qualification risk across dual sources, and whether TSMC wafer capacity allocated to three memory makers becomes the bind. Stakes: whether HBM remains binding via stacks/base-die logic, or architecture/customer preference reallocates who captures the scarce node.

Fidelity note: `top-replies`. ZDNet Korea used as attributed primary wire behind the X summary; deep Korean reply tail partially captured.

## The positions

Dual-source base dies keep Samsung HBM inside customer supply chains.
  @jukan05 [pseudo] — Samsung Foundry + TSMC 'depending on customer requirements'; Memory designs when TSMC fabs
  ZDNet Korea (Jang Kyung-yoon) [named wire] — '투트랙' (two-track) for cHBM base dies; avoid turnkey isolation; NVHBM context
  @fixer82601 [pseudo] — 'Even Samsung knows the customer chooses the supply chain'
  @kingli560043 [pseudo] — 'What\'s scarce is the HBM stack IP plus customer quals — not whose foundry logo is on the die'

TSMC wafer capacity / quals may become the new bottleneck.
  @jukan05 [pseudo] — reply: curious how much wafer capa each of the three memory makers gets; 'TSMC wafer capa already extremely tight'
  @treeapple33 [pseudo] — customers may not want dual path 'unless base die supply is insufficient'
  @kel_ruael [pseudo] — dual sourcing helps only if die/packaging/controller stay interoperable without resetting the yield curve

## Weight of the room

ZDNet Korea is the attributable wire; jukan is the distribution layer. Korean reply accounts include people who sound close to the rumor mill (customer-request framing) but are not named principals. No Samsung or TSMC IR confirmation in the captured set. Engagement not evidence.

## What would settle it

Samsung or TSMC confirmation of custom HBM / NVHBM-class base-die dual sourcing in production volumes
Knowable — earnings Q&A / supply-chain confirmations — by ~2026-12-10

SKU-level evidence (Nvidia NVHBM, Amazon Trainium4, or peer) shipping with Samsung HBM cores + TSMC base dies
Knowable — product briefs / teardown-class reporting — through 1H 2027

Memory-supplier mix commentary on base-die foundry allocation (Samsung Foundry vs TSMC) for HBM4/HBM4E
Knowable — next Samsung / SK Hynix / Micron earnings — fall–winter 2026

## Delta

Builds on `2026-09-14-hbm-4hi-enough` (stack height / inference TCO). New information: base-die foundry dual-source path and NVHBM/custom framing from ZDNet Korea — not a resolution of 4-Hi vs 8-Hi/12-Hi.

## Posts

**Jukan** (@jukan05) — Sep 15, 2026, 4:02am ET  
According to Korean media reports, Samsung is collaborating not only with Samsung Foundry but also with TSMC on custom HBM base dies, depending on customer requirements.

When TSMC manufactures the base die for Samsung Electronics' HBM, the related chip design and optimization support is understood to be handled by Samsung Electronics' Memory Business Division. The in house System LSI Business Division will design products only for Samsung Electronics' foundry.

Meanwhile, Korean media explained that Samsung Electronics' dual sourcing of custom HBM base dies is interpreted as a strategy to avoid isolation from a supply chain perspective. TSMC has currently built a solid supply chain with Nvidia and other global big tech companies through its own foundry and packaging processes, and customer preference for it is high in terms of stability and performance. Under these circumstances, if Samsung Electronics insists solely on its own foundry turnkey (end to end production) model, the likelihood of failing to meet customers' diverse customized demands grows.  
106 likes · 6 RTs · 7 replies · 16 bookmarks  
https://x.com/jukan05/status/2099770851516428455

**Jukan** (@jukan05) — Sep 15, 2026, 4:09am ET  
@treeapple33 궁금한건 이러면 웨이퍼 케파는 메모리 3사 각각 얼마나 할당받을지 궁금하네요. TSMC 웨이퍼 케파 안그래도 엄청 부족한데 🧐  
1 like · 0 RTs · 2 replies · 1 bookmark  
https://x.com/jukan05/status/2099772474401706270

**火箭手Neo** (@fixer82601) — Sep 15, 2026, 4:22am ET  
@jukan05 Samsung using TSMC to sell Samsung HBM is peak semiconductor globalization.

Even Samsung knows the customer chooses the supply chain.  
1 like · 0 RTs · 0 replies  
https://x.com/fixer82601/status/2099775942294151195

**WW** (@kingli560043) — Sep 15, 2026, 6:44am ET  
@jukan05 Even if TSMC fabs the base die, design and stack optimization stay with Samsung Memory. What’s scarce is the HBM stack IP plus customer quals — not whose foundry logo is on the die. Dual-source is how you stay in Nvidia/customers’ chain without forcing a turnkey Foundry sell.  
0 likes · 0 RTs · 0 replies  
https://x.com/kingli560043/status/2099811494208663662

**Oviezibe Jack** (@kel_ruael) — Sep 15, 2026, 4:40am ET  
@jukan05 Custom base dies make HBM less like a commodity stack and more like a negotiated platform. The risk is qualification: dual sourcing helps only if die, packaging and controller tuning stay interoperable enough to switch suppliers without resetting the yield curve.  
1 like · 0 RTs · 0 replies  
https://x.com/kel_ruael/status/2099780445202416023
