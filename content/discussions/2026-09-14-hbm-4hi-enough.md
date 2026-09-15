---
id: 2026-09-14-hbm-4hi-enough
type: discussion
date: 2026-09-14T08:36:00-04:00
title: Is datacenter HBM stuck above 4-Hi, or is shorter stack the inference optimum?
summary: >
  jukan05 cites TrendForce that 4-Hi HBM is not enough and doubts suppliers
  would make it anyway; Jeff Pu concurs that datacenter de-spec to 4-Hi is
  unlikely. SemiAnalysis the same day argues 4-Hi maximizes tokens per HBM
  wafer for inference — a live supply-vs-architecture split.
people: [Jukan, Jeff Pu, Jake Ayes, Tiago Marques]
entities: [NVIDIA, TrendForce, SemiAnalysis]
source: https://x.com/jukan05/status/2099477271182717429
backfill: false
fidelity: top-replies
recurrence: new
prior: []
review_after: 2026-12-10
resolved: false
---

## The read

On *shipping reality for datacenter AI near-term*, Jeff Pu / TrendForce / jukan have the better of it: the visible supply-chain claim is that mainstream production is 8-Hi and 12-Hi, per-stack capacity at ~16GB for 4-Hi forces more chips and networking, and base-die logic stays tight. On *inference economics*, SemiAnalysis's same-window thesis that 4-Hi can win on $/bandwidth and tokens-per-wafer is a serious opposing frame — but it is a design-target argument, not yet a confirmed SKU mix. Do not collapse "optimal for decode TCO" into "will ship as the datacenter standard tomorrow."

## State of play

jukan05 posts that TrendForce explains why 4-Hi HBM is not enough, adding that memory makers would not produce 4-Hi even if it were. Jeff Pu's note (RTed into the feed) shares TrendForce's low odds of a datacenter de-spec to 4-Hi and flags capacity, base-die, and flow-cost reasons. Replies stress incentives and order-taking: server DRAM profitability as an alternate pull; suppliers cannot satisfy every firm. Same calendar day, SemiAnalysis Weekly argues Rubin Ultra ships less HBM per package and that 4-Hi can be the right inference call. Stakes: whether HBM remains the binding constraint via tall stacks, or wafer economics push the industry shorter.

Fidelity note: `top-replies` — conversation search rate-limited; named replies and Jeff Pu note captured; deep tail unread.

## The positions

Datacenter HBM will not de-spec to 4-Hi.
  @jukan05 [pseudo] — TrendForce: '4-Hi HBM isn’t enough'; 'wouldn’t produce 4-Hi HBM even if it were enough'
  @sssjeffpu [named] — 'chance of de-spec to 4-Hi is low'; '~16GB' too small; 'mainstream production is focused on 8-Hi & 12-Hi'

Shorter stacks are the inference TCO / wafer optimum.
  SemiAnalysis (Myron Xie / Jordan Nanos) [named] — show notes: Rubin Ultra ships 192GB vs 1TB preview; 'reason is supply and not performance'; 'shipping less memory per chip might be the right call' (see longform `2026-09-14-semianalysis-4hi-hbm`)

Suppliers are incentive- and order-bound, not 'enough'-bound.
  @jake_ayes [pseudo] — 'these guys are order takers… if everyone wants it you’re kinda SOL'
  @evrsr [pseudo] — 'server DRAM been more profitable than HBM' as the incentive to watch

## Weight of the room

Jeff Pu is the only named sell-side memory voice in the captured posts with a structured note. jukan05 is a high-reach semis aggregator citing TrendForce. SemiAnalysis is principal research on the opposing economics claim. Anonymous/low-follower incentive color is useful framing, not proof. Engagement not cited as evidence.

## What would settle it

NVIDIA / major ASIC customer SKU disclosures for Rubin Ultra and peer parts: HBM stack height and GB per package in shipping configs
Knowable — product briefs / earnings / SemiAnalysis or vendor confirmations — through Q4 2026

Memory-supplier commentary (Samsung, SK Hynix, Micron) on 4-Hi vs 8-Hi/12-Hi mix for datacenter HBM4/HBM4E
Knowable — next earnings cycles — by ~2026-12-10

Evidence that a hyperscaler ASIC program designed around 4-Hi HBM4+ is in volume qualification
Knowable — supply-chain reporting — 1H 2027

## Posts

**Jukan** (@jukan05) — Sep 14, 2026, 8:36am ET  
TrendForce explains why 4-Hi HBM isn’t enough.
(Personally, I think memory makers wouldn’t produce 4-Hi HBM even if it were enough.)  
157 likes · 9 RTs · 14 replies · 44 bookmarks  
https://x.com/jukan05/status/2099477271182717429

**Jeff Pu** (@sssjeffpu) — Sep 14, 2026, 1:55am ET  
Memory: Datacenter HBM unlikely to move to 4-Hi 

🔑 We share TrendForce’s view that the chance of de-spec to 4-Hi is low, vs worries over 4-Hi which could deliver same bandwidth with fewer dies, cut inference costs & stretch limited DRAM supply
• Two key reasons 4-Hi unlikely fly in datacenter AI:
– Per-stack capacity is too small (~16GB for HBM5/HBM4E) → hyperscalers would need more chips, racks & scale-up networking
– Higher volume still increases base-die demand on tight advanced logic nodes (esp. N2 for HBM5) → little to no supply relief
• Supply-chain feasibility low: mainstream production is focused on 8-Hi & 12-Hi, vs development cost and low-volume 4-Hi flows
• Cost per Gb is higher on 4-Hi vs 8-Hi, with similar total cube cost based on current price quote.
• Nvidia’s Rubin Ultra dropping to 8-Hi is well expected (our note on Aug 6)
• For Rubin Ultra we expect parallel development of HBM4 8-Hi 192GB / HBM4E 8-Hi 256GB / HBM4E 12-Hi 384GB, with higher chance of HBM4 8-Hi first, then HBM4E 8-Hi as the mainstream SKU  
149 likes · 23 RTs · 0 replies · 69 bookmarks  
https://x.com/sssjeffpu/status/2099376403762585752

**Jake Ayes** (@jake_ayes) — Sep 14, 2026, 11:30am ET  
@jukan05 At the end of the day these guys are order takers… they can only sell to so many firms and if everyone wants it you’re kinda SOL  
0 likes · 0 RTs · 0 replies  
https://x.com/jake_ayes/status/2099521081455346123

**Tiago Marques** (@evrsr) — Sep 14, 2026, 5:50pm ET  
@jukan05 Hasn't server DRAM been more profitable than HBM for a good while now? If that is the case, that would be the incentive you are looking for.  
0 likes · 0 RTs · 0 replies  
https://x.com/evrsr/status/2099616791043461370
