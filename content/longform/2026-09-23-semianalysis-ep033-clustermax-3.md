---
id: 2026-09-23-semianalysis-ep033-clustermax-3
type: longform
date: 2026-09-24T05:20:00-04:00
title: "SemiAnalysis — ClusterMAX 3.0: Nebius platinum, rankings, financing"
summary: >
  Ep.033: 77 providers ranked; Nebius joins CoreWeave platinum; Google gold;
  Azure/AWS down; GPU-hour backwardation; NVDA backstop ~$588bn→$2tn; SLAs.
people: [Jordan Nanos, Sam Harshe, Pratt Bhatt]
entities: [Nebius, CoreWeave, Oracle, Google Cloud, Azure, AWS, Lambda, Fermus, GMI Cloud, TensorWave, Crusoe, Nvidia, OpenAI]
source: https://www.youtube.com/watch?v=gO7oczGh9qE
backfill: false
fidelity: asr
venue: SemiAnalysis Weekly
host: Jordan Nanos
duration: 69m
published: 2026-09-23T18:50:00-04:00
---

## Opening

**ClusterMAX 3.0 — SemiAnalysis's hands-on ranking of managed GPU clusters — puts Nebius into platinum beside CoreWeave, elevates Google Cloud into gold with Oracle, and marks Azure/AWS/Crusoe moving down, while the conversation pivots from NCCL/health-check bugs to why lenders and parametric insurers need actuarial cluster quality for the AI buildout.**
Jordan Nanos with Sam Harshe and Pratt Bhatt (~69m) reviewing the Wed Sep 23 article: methodology after months of testing, tier moves, reliability/networking/storage war stories, agentic-coding stress on ops, and financing (SLAs, Nvidia backstop universe, old-GPU terminal value). YouTube auto-captions `asr` — [Watch](https://www.youtube.com/watch?v=gO7oczGh9qE). Figures marked `(asr)`.

## Key takes

**Headline ranks: Nebius joins CoreWeave in platinum; gold is Oracle + Google Cloud (Google newly up); silver has Azure moving down, Fermus/Lambda stay, GMI up, TensorWave stays; bronze includes AWS and Crusoe moving down.** Scope claim: **77 providers ranked**, market view expanded to **323** in the subscriber Neocloud model, **>200 end-user interviews**. ClusterMAX 4.0 teased after Vera Rubin lands in DCs; TPUs/Trainium deliberately deferred ("too many secrets"). [asr]

**Buyers' top-of-mind is extreme near-term GPU-hour backwardation — pay almost anything for chips in weeks; big discount if willing to wait months — so even broken Kubernetes/storage still clears at good margins if you have GPUs.** Providers that failed to sell early (quality signal historically) are now closing at better margins. Neoclouds expanding up-stack into managed inference / hosted training / endpoints because cluster margins are rich and labs capture cake — Pratt's frame: everything points to **centralization of compute**. [asr]

**Reliability differentiation is health checks that actually work under failure injection — active (preemptable dummy workloads) vs passive (low/zero GPU overhead) — plus timed detect→drain→hot-spare (HGX) or reboot/repair (NVL72) workflows.** Amazon HyperPod Slurm cited as health-check logic that required a healthy node to run remediation that was itself needed to restore the node — "worse than no health checks." Sample SLAs sold as industry standard for downtime definitions / credits. [asr]

**Networking next after reliability: providers should ship a golden NCCL recipe with smooth message-size throughput; Google called out for baking custom networking into NGC containers so NCCL works out of box without Nvidia switch silicon.** EFA/custom scale-out framed as a false economy — saves a few % on fabric but blocks DeepSeek-style collectives / modern recipes; Perplexity blog posts cited as evidence of engineer-hours spent making EFA work. Fermus GB300 example: out-of-box TorchTitan MoE job ~445–455 tok/s/GPU vs ~3500 on better-configured peers (~50% gap) from exposed all-to-all latency — fixed after joint debugging. [asr]

**Financing is why ClusterMAX matters for the ~$7tn buildout narrative: lenders and neoclouds insure against late delivery / failed acceptance and against SLA violations that trigger cancellation rights; parametric insurers (e.g. Parametrics named) need actuarial inputs (redundant power/cooling/uplinks, parts depot, staff, flood/hurricane).** SemiAnalysis circulating example SLAs/contracts; seed startups spending "literally 100% of seed" on neocloud capacity makes provider pick existential. Credit/markets model tease: Nvidia off-balance-sheet backstop universe **>$588bn by end FY27**, forecast **>$2tn by end 2031**; separate supply-chain-only backstop figure **~$827bn FY31** for HBM etc. (ex LPS/DC build). Amazon/Google also putting balance sheets to work. Terminal-value debate: 4y H100 contracts still signing; OpenAI never gave up A100s (2020 → 6+ years); GB300 racks ~140–200 kW vs H100 ~30 kW facilities that cannot host Vera Rubin. [asr]

**Hosted training / RL infra is harder than pre-training clusters — inference + training sync + environments/sandboxes; market "not yet" for pure hosted training; Anthropic paid heavily for environments.** Endpoint teaser (not in ClusterMAX proper): famous unnamed provider ~75% cache-hit vs good providers ~99% on ~800-token replay traces — 75% roughly **doubled** total cost vs 99%. Framework wars: SGLang/vLLM → Miles/PrimeRL etc.; trainer–inference mismatch compounding over long trajectories collapses training. Agentic coding helps debug but blows feet off on orchestration; CMax CLI open-sourced as front-end. [asr]

## Key math

**77 providers ranked; 323 in Neocloud market model; >200 end-user interviews (asr)** — coverage vs prior ClusterMAX. [asr]

**Platinum: Nebius + CoreWeave; Gold: Oracle + Google Cloud (asr)** — tier headline. [asr]

**Near-term GPU price backwardation: pay up for weeks-out chips; large discount for months wait (asr — qualitative)** — why mediocre clusters still clear. [asr]

**Fermus GB300 MoE out-of-box ~445–455 tok/s/GPU vs ~3500 on better peers (~50% gap) (asr)** — networking config as realized performance. [asr]

**Endpoint cache-hit ~75% vs ~99%; ~75% roughly doubles replay cost on ~800-token traces (asr — preliminary, unnamed famous provider)** — inference margin trap. [asr]

**Nvidia off-BS backstops >$588bn end FY27; >$2tn end 2031 forecast (asr — SemiAnalysis credit model / Dan article)** — financing backdrop. [asr]

**Supply-chain-only Nvidia backstop ~$827bn FY31 HBM etc., ex LPS/DC (asr — speaker hedge "may get numbers wrong")** — narrower universe. [asr]

**GB300 racks ~140 kW → ~200 kW peak vs H100 racks ~30 kW / facilities designed 30–40 kW (asr)** — why old H100 halls can't take Vera Rubin without rebuild. [asr]

## Quotes

> "There's a new addition to the platinum tier. We've got Nebius up there joining CoreWeave."
> — Jordan Nanos [asr]

> "The ridiculous backwardation of the price curve at the moment… people are willing to pay just about anything for any chips that they can get in the next few weeks."
> — Sam Harshe [asr]

> "Everything points to centralization of compute."
> — Pratt Bhatt [asr]

> "Nvidia's backstop universe off-balance sheet has grown… to be over $588 billion… forecasts… over 2 trillion by the end of 2031."
> — Jordan Nanos [asr]

> "OpenAI has never given up an A100 GPU that they've gotten."
> — Jordan Nanos [asr]

> "I'd rather not be fighting to get back your… 5% because it was down for three weeks out of the year."
> — Jordan Nanos [asr]

## Variant perception

**Priced in** — Neocloud quality is heterogeneous; CoreWeave as reference premium; Google/Oracle serious GPU cloud competitors; financing/SLA risk on AI buildout; Nvidia ecosystem backstops and offtake circularity already a macro debate; HBM/power as physical constraints.

**What's new** — Nebius into platinum on measured ClusterMAX 3.0; Google into gold; Azure/AWS/Crusoe marked down on hands-on reliability/networking; quantified Fermus out-of-box MoE gap; endpoint cache-hit cost doubling teaser; explicit link from cluster quality → parametric insurance / lender underwriting; SemiAnalysis Nvidia backstop stock/flow figures ($588bn / $2tn / $827bn supply-chain); A100 never-retired + multi-year H100 contracts as terminal-value evidence against steep depreciation narratives; RL/hosted-training harder than pretrain-cluster product.

**Bear case** — Rankings are SemiAnalysis's product (sample SLAs, credit model, consulting) talking book; "77/323" and backstop dollars are model outputs not audited disclosures; tier moves may lag commercial reality (AWS/Azure still default for many enterprises); GPU backwardation could flip fast if supply catches; hosted-training "no market yet" could be wrong within a year; unnamed endpoint shame-test is preliminary.

**Discount** — SemiAnalysis sells ClusterMAX access, sample SLAs, site visits, and a new credit/markets model — the episode is both research and distribution for those products. Nebius/CoreWeave platinum elevates names SemiAnalysis already covers heavily. Financing segment steers listeners to `cluster@semianalysis.com` and the Nvidia Backstop Universe article.

## Positioning

**AI capex durability — STRENGTHENS.** Near-term GPU-hour backwardation, multi-year H100 contracts still clearing, A100s never retired at OpenAI, and expanding Nvidia/hyperscaler backstops all read as demand still outrunning usable supply — with quality/SLA as the binding financing filter rather than a demand cliff.

**HBM supply binds — NEUTRAL.** Supply-chain backstop figure (~$827bn FY31 HBM etc.) and Vera Rubin / GB300 power-density migration reinforce physical-world bottlenecks, but the episode does not add a new HBM wafer/capacity datapoint beyond financing exposure.

**Inference margin inversion — WEAKENS (narrow).** Endpoint cache-hit miss roughly doubling cost and "80% margins on inference" as a joke undercuts the idea that list/serving math alone captures realized inference P&L when routing/cache is broken.
