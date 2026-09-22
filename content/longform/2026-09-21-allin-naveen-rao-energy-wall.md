---
id: 2026-09-21-allin-naveen-rao-energy-wall
type: longform
date: 2026-09-22T05:30:00-04:00
title: "All-In — Naveen Rao: AI energy wall, 4D computing, 1000x efficiency bet"
summary: >
  Unconventional AI CEO: Google-scale token energy already ~12GW; ~50% of
  token cost is power; aims 1000x efficiency in ~3.5y via dynamical chips.
people: [Naveen Rao, Chamath Palihapitiya]
entities: [Unconventional AI, Nervana, Intel, MosaicML, Databricks, Google, NVIDIA]
source: https://www.youtube.com/watch?v=yAsrMA_ADPc
backfill: false
fidelity: asr
venue: All-In Summit
host: Chamath Palihapitiya
duration: ~25m
published: 2026-09-21T17:03:00-04:00
---

## Opening

**Energy — not floor space or GPUs — is the binding DC constraint: Google-class token loads already imply ~12GW at ~10J/token, ~50% of serving cost is power, and Rao's Unconventional AI is pitching a dynamical/"4D" chip stack for ~1000× efficiency within ~3.5 years.**
All-In Summit stage interview with Naveen Rao (Nervana→Intel AI group; MosaicML→Databricks; now Unconventional AI CEO). Ground covered: public energy/token math, biology-vs-GPU bit-movement, first physical dynamical prototype (Jan–Jun tape-out), product path as a rack/tokens-in-tokens-out data-center system (~2 years), porting at model layer not CUDA ops. YouTube auto-captions (`asr` — "Nervana" as "Nirvana," Mosaic/Databricks figures unverified). [Watch](https://www.youtube.com/watch?v=yAsrMA_ADPc).

## Key takes

**DC planning has flipped to energy-first: floor space → networking → GPUs → power contracts, and operators must "monetize every watt."** Rao: US data centers ~40GW today; world under ~100GW; one public Google figure of 3.2 quadrillion tokens/month × ~10J/token (his lower-end assumption) ≈ 12GW for that company's AI services alone — so larger models + rising demand hit an energy wall in "~3 years" on his estimate. [asr]

**About half of token serving cost is energy — so efficiency is the business case, not a side metric.** Frame: gap between exponentially growing AI market (he sketches ~trillion-dollar by 2030) and roughly linear energy supply is the problem Unconventional claims to close by monetizing watts "~1000× better." [asr]

**Root inefficiency is bit movement, not arithmetic: cortex ~16B bits/sec vs high-end GPU ~30T bits in/out of memory per second (plus 10–100× more on-chip).** Biology runs on ~eight milliwatts for a "squirrel brain" class system; synthetic stacks burn energy shuttling state. Thesis: collapse memory/compute into dynamical elements so you stop paying the von Neumann tax. [asr]

**Unconventional's bet is a non–von Neumann "dynamical computer" / "4D computing" (time + 3D die stack) with a claimed first physical prototype taped out Jun 1, built in ~5 months from a Jan start.** Claims: images from the chip at ~500 nanojoules/image vs GPU-class millijoules; sparsity that both cuts n² connections and improves trainability; goal revised from 5y to ~3.5y to hit ~1000× power efficiency / approach 2D-lithography limits; "beat biology" over a decade; eventual shift from gigawatt campuses to many small local DCs + robot forms. [asr]

**Product path: ~2 years to a full data-center rack product (tokens in/out over the network; different guts); existing models work via model-layer port, not op-level CUDA clone — "fair bit of compute" to transition.** Software bridge described as Python libraries for time-varying/stochastic elements, not a CUDA equivalent. Chamath presses ecosystem/fab path; Rao leans on making the efficiency gain large enough that migration pain is worth it. [asr]

**Track record cited as credibility: Nervana sold "way too early" to Intel (ran Intel AI group); MosaicML ~$20M → ~$700–800M revenue scale then Databricks deal; claims Mosaic became "~a quarter of total revenue" at Databricks.** Used to underwrite that he has shipped AI infra before — not proof the dynamical substrate works at scale. [asr]

## Key math

**Google ~3.2 quadrillion tokens/month (asr — Rao citing public Google)** — scale anchor for energy. [asr]

**~10 joules/token (asr — Rao, "lower end") → ~12GW for that Google AI load** — one-company energy claim. [asr]

**US DC energy ~40GW; world DC energy under ~100GW (asr)** — capacity ceiling framing. [asr]

**~50% of token serving cost is energy (asr)** — cost stack. [asr]

**Cortex ~16B bits/sec vs GPU ~30T bits/sec memory traffic (asr; on-chip "10, 100×" more)** — bit-movement gap. [asr]

**Efficiency goal: ~1000× in ~3.5 years (was 5) (asr)** — company target. [asr]

**Prototype: ~500 nJ/image vs GPU-order mJ (asr)** — early efficiency claim. [asr]

**MosaicML ~$20M → ~$700–800M before Databricks; "~quarter" of Databricks revenue (asr)** — prior-company scale. [asr]

## Quotes

> "The US puts about 40 gigawatts of energy into data centers today… 12 gigawatts is going into one company just for AI services."
> — Naveen Rao [asr]

> "About 50% of the cost of serving a token… is energy."
> — Naveen Rao [asr]

> "Today, it's about energy. First, you think about energy."
> — Naveen Rao [asr]

> "We're going to run out of energy pretty fast, in like 3 years or so is my estimate."
> — Naveen Rao [asr]

> "This is actually the first physical dynamical computer ever built."
> — Naveen Rao [asr]

> "If you make something 1/1000 the price, you'll consume more than 1/1000 of it."
> — Naveen Rao [asr]

## Variant perception

**Priced in** — Power is the new DC bottleneck; hyperscaler GW deals dominate the tape; Jevons/efficiency → more demand is a familiar bull frame; NVDA von Neumann GPU stack is the incumbent.

**What's new** — Concrete Google-token → GW arithmetic stated on stage; ~50% energy share of token cost as a cost-stack claim; public claim of a working dynamical prototype with nJ/image figures and a 2-year rack product path; explicit model-layer (not CUDA) port strategy.

**Bear case** — Prototype ≠ production rack at GW scale; 1000× / 3.5y may be fundraising physics; model-layer port friction could strand the product; if energy wall is solved by nuclear/gas interconnects instead, unconventional substrate stays niche; ASR may garble joule and revenue figures.

**Discount** — Founder launching Unconventional AI at All-In Summit — maximum book-talking. Prior exits (Nervana, Mosaic) buy credibility but also a pattern of selling into platforms rather than owning the long substrate cycle. Anti-doomer venue selection bias. No independent third-party validation of the chip results on stage.

## Positioning

**AI capex durability — STRENGTHENS near-term, WEAKENS long-duration if thesis lands.** Near-term: energy-first DC math and "~3 years" wall reinforce continued power/build spend. Long-duration: if ~1000× efficiency arrives, GW-campus intensity and GPU-watt monetization soften — spend shifts from raw megawatts toward new substrate/racks (Jevons still grows token demand).

**Inference margin inversion — STRENGTHENS (soft).** Energy as ~half of token cost means serving GM is power-bound; any real joules-per-token collapse is the cost side of the inversion — without lab GM disclosure.

**HBM supply binds — NEUTRAL / soft WEAKENS if dynamical memory-compute lands.** Thesis attacks von Neumann memory traffic; does not claim HBM relief on today's GPU path — only that a different architecture could unbind bit-movement. No near-term HBM volume evidence.

**Enterprise agent stall — NEUTRAL.** No enterprise deployment evidence; robotics/local-DC vision is forward narrative only.
