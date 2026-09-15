---
id: 2026-08-31-baker-a16z-ai-demand-outrunning-compute
type: longform
date: 2026-09-14T20:30:00-04:00
title: "Gavin Baker — Why AI Demand Is Outrunning Compute Supply (a16z Show)"
summary: >
  Atreides CIO Gavin Baker tells David George that AI fundamentals accelerated
  through July–August while related equities drew down; argues sub-one-year
  compute paybacks and thin heavy-user penetration make undersupply through 2028
  the base case, with NVIDIA’s financeable stack and hybrid open-source routers
  as the durable structure.
people: [Gavin Baker, David George]
entities: [NVIDIA, OpenAI, Anthropic, SpaceX, Microsoft, Meta, Google, Nebius, CoreWeave, Blackstone, KKR, Apollo, Fireworks, Cursor, Harvey, Kimi]
source: https://www.youtube.com/watch?v=FGC4ofTcg2k
backfill: false
fidelity: asr
venue: The a16z Show
host: David George
duration: 74m
published: 2026-08-31T10:01:07-04:00
---

## Abstract

Gavin Baker, Managing Partner and CIO of Atreides Management, joins a16z Growth GP David George on *The a16z Show* for a ~74-minute conversation (YouTube: [Why AI Demand Is Outrunning Compute Supply](https://www.youtube.com/watch?v=FGC4ofTcg2k)). Ground covered: whether AI is a zero-sum stack fight or a positive-sum buildout; lab training-vs-inference allocation and public-market revenue volatility; neocloud / SpaceX compute paybacks and project finance; demand still concentrated in a small heavy-user set against ~1.5bn knowledge workers; data-center politics and US reindustrialization; orbital compute economics vs terrestrial power/cooling inflation; hybrid open-weight + frontier routers as the enterprise abstraction layer; and NVIDIA’s vertically integrated, horizontally open, financeable position in a supply-constrained chain.

## Theses

AI demand accelerated in July–August across OpenAI, open source, and Grok even as AI-linked public names sat in significant drawdowns.
Baker: standard summer ask to AI operators for ‘one quantitative data point… getting worse’ returned none; Anthropic’s quiet period is the main caveat he flags.

The stack is an ‘and’ market — frontier labs, open source, applications, clouds, neoclouds, and NVIDIA can all capture value — not a winner-take-all or.
Baker, citing a prior Patrick O’Shaughnessy podcast guest (name ASR-garbled): ‘maybe everyone wins’; David George frames LPs’ default as ‘how’s this all going to go wrong.’

Lab revenue is a controllable allocation between training and inference, so public markets will see step-downs when labs reweight toward research.
Baker’s worked example: 10 GW total, 8 GW inference monetized at ~$60bn/GW/year → ~$480bn revenue; flipping to 8 GW training drops that to ~$120bn. [book]

Compute equity paybacks are already inside a year for disclosed neocloud builds, and faster still on spot / SpaceX clusters — rare deployable scale at that ROI.
Baker: Nebius math from disclosures ≈9–10 month payback on a ~$50bn/GW build with 50–60% customer prepaid; ‘sub one-year paybacks’ on tens-to-hundreds of billions of deployable capital. [book]

Heavy paying AI usage is still a thin tip of the funnel, so the binding near-term risk is undersupply through 2028, not overbuild.
George: ~$80bn of monetization on ~30m heavy users (Baker takes the under, possibly sub-10m) vs ~1.5bn knowledge workers; Baker: ‘no capacity available’ through the ‘28 forecast builds.

Orbital compute is framed as swing capacity once Starship reusability collapses launch cost vs inflationary terrestrial shell (power, cooling, labor).
Baker: ~$50bn/GW with ~$35bn IT and ~$15bn shell; shell is Earth-inflationary; reusable Starship launch ‘under a billion’; Elon+Jensen co-designed rack targeted for 4Q27 (he allows +2 quarters). [book]

Enterprise intelligence settles on a hybrid router — owned open-weight model post-trained on private data, plus one or two frontier models — which is Microsoft-friendly versus a two-lab monopoly.
Baker: Fireworks Nexus as early broad instantiation; Grokbot as multi-model behind a router; abstraction-layer fight spans Microsoft, Databricks, Palantir, Harvey, Cursor, Salesforce/Workday.

NVIDIA’s edge is financeability and supply-chain lock, not only silicon: residual-value guarantees plus PE credit make Nvidia racks the cheapest equity check, and Jensen has locked fab/DRAM/NAND/laser/capacitor capacity.
Baker rule of thumb: every 1% accelerator share ≈$100bn today; Nvidia DC ≈$50bn with ~$15bn equity / ~$35bn financed; ‘70, 80%’ of supply locked. [book]

## Key math

~$60bn revenue per gigawatt of inference (stated as what ‘people seem to think’ Anthropic/OpenAI monetize); worked example 8 GW → ~$480bn/yr revenue payback ~1 year on revenue, not gross profit (asr)
Allocation control — same fleet can print ~$120bn if reweighted to training.

~9–10 month payback on Nebius from Baker’s read of Nebius/CoreWeave disclosures; ~$50bn to bring on a gig; 50–60% prepaid → ~$25–30bn equity outlay before spot monetization (asr)
Neocloud unit economics — equity payback ‘way inside of a year’ once financed.

Atreides internal token consumption up 100x March→August; Grokbot Enterprise with two users looking like another 10–20x in a month (asr) [book]
Firm-level demand pulse — Baker’s own shop as the datapoint.

a16z portfolio: AI-native cos spending high-single-digits to 10%+ of human compensation on tokens; ‘old economy’ doing well around ~1% (asr)
George on portfolio spend — diffusion still early inside accounts.

~$50bn/GW orbital vs terrestrial: ~$35bn IT (same), ~$15bn shell (Earth-inflationary); Starship reusability → launch ‘under a billion’ flips economics (asr) [book]
Orbital as swing capacity — training stays terrestrial (latency / speed-of-light).

Nvidia data center: ~$50bn total, ~$15bn equity check, ~$35bn financed (Blackstone/KKR/Apollo named as underwriters); every 1% accelerator share ≈$100bn (asr) [book]
Cost-of-capital moat — TPU path said to need roughly double the equity check and higher rates on the rest.

Natural gas ~$2–3 in US vs ~$20–25 in Europe/Asia (asr)
Power-cost input to electricity and manufacturing — reindustrialization claim.

Kirkland & Ellis: ~$500m to build legal AI themselves (asr)
Category-size tell — continuous base-model refresh, not a one-time build.

## Quotes

> "Can you tell me one quantitative data point in your business that's getting worse. Just one."
> — Gavin Baker [asr]

> "In my career as an investor there haven't been that many opportunities where you have companies that could deploy tens hundreds of billions of dollars and get sub one-year paybacks."
> — Gavin Baker [asr]

> "We're nowhere on the demand side and we're massively supply constrained."
> — Gavin Baker [asr]

> "My rule of thumb for accelerators: every 1% share today is probably worth a hundred billion."
> — Gavin Baker [asr]

> "He's the Federal Reserve of AI."
> — David George, on Jensen / NVIDIA (citing Dylan Patel’s ‘bank of AI’ framing) [asr]

> "Thank you Jensen… How can we work with you?"
> — Gavin Baker, advice to semiconductor CEOs [asr]

## Variant perception

**Priced in**
AI capex and GPU scarcity as the central debate; NVIDIA as default infrastructure winner; open source as a margin/pressure story on labs; ‘is it a bubble’ as the LP opening line.

**What's new**
The load-bearing frame is *undersupply through 2028* driven by thin heavy-user penetration (~tens of millions vs ~1.5bn knowledge workers) plus political delay on builds — not overbuild. Payback math is stated in $/GW and equity-check terms (prepaid + PE finance + RVGs), with SpaceX/orbital as swing capacity once launch is deflationary and terrestrial shell is inflationary. Enterprise endgame is explicitly hybrid/router/owned-weights, which reframes Microsoft and open-weight post-training as structural rather than consolation prizes. Token prices are allowed to *rise* under shortage (Dwarkesh’s ~10x thought experiment cited), opposite the usual deflation narrative.

**The bear case**
From the conversation’s own material: labs can voluntarily crush reported revenue by reallocating watts to training; Anthropic/OpenAI IPOs import volatility into employee and narrative channels; debt-funded overbuild still historically ends badly even if today’s mix is mostly opex; diffusion into the ‘messy’ 1.5bn knowledge-worker set can disappoint; orbital timelines slip; ASIC niches (named competitors garbled in ASR) plus lab custom silicon chip away at edges; circularity optics persist even if Baker trusts the PE underwriters.

**Discount**
Baker is CIO of Atreides with a disclosed private semi portfolio and clear long exposure to the AI infrastructure complex — NVIDIA, SpaceX/xAI stack, neoclouds. Claims on paybacks, locked supply share, and ‘everyone wins’ are [book]. George is an a16z GP hosting on an a16z show; portfolio anecdotes (token spend, Fireworks, Town) are house-colored. Orbital and asteroid-mining passages are forward scenarios, not operating results.

## Positioning read

ai-capex-durability — STRENGTHENS. Undersupply through 2028, sub-one-year paybacks, and prepaid/financed GW builds are argued as the base case rather than a 2026–27 digests-the-build cycle.

hbm-supply-binds — STRENGTHENS. Baker ties NVIDIA’s position to locked fab plus DRAM/NAND and broader BOM capacity, and treats wafer/memory supply as a binding constraint on the buildout.

inference-margin-inversion — WEAKENS. Shortage frame explicitly allows token prices to rise (~10x thought experiment via Dwarkesh) rather than list falling faster than cost; monetization discussed as $/GW rising with model quality, not as GM expansion via repeated price cuts.

