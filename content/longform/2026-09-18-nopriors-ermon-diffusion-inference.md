---
id: 2026-09-18-nopriors-ermon-diffusion-inference
type: longform
date: 2026-09-19T05:20:00-04:00
title: "No Priors — Ermon/Inception: diffusion wins inference parallelism"
summary: >
  Stefano Ermon on Mercury ≈ Haiku/Flash/mini speed tier, ~10× decode vs AR
  at GPT-2 scale, OpenCall leaving Cerebras for NVDA GPUs, 20–30% latency wedge.
people: [Stefano Ermon, Sarah Guo]
entities: [Inception, Mercury, OpenAI, Cerebras, NVIDIA, OpenCall, OpenRouter, Stanford]
source: https://www.youtube.com/watch?v=N1rjtDs8blY
backfill: false
fidelity: asr
venue: No Priors
host: Sarah Guo
duration: 38m
published: 2026-09-18T06:00:00-04:00
---

## Opening

**Diffusion language models are a bet that inference — not training — is the scarce axis: parallel token generation maps to GPUs the way transformers mapped training off RNNs.**
Stanford professor / diffusion pioneer Stefano Ermon (Inception co-founder & CEO) joins Sarah Guo on No Priors (~38m). Ground covered: 2019 score-based → modern diffusion; 2024 discrete-text breakthrough (~GPT-2 scale, matched AR perplexity, ~10× faster generation); Mercury models claimed on-par with Haiku/Flash/mini-nano while faster; custom serving stack (not vLLM/SGLang); ~50-person / ~2-year company; OpenCall voice agents switching from Cerebras custom silicon to Mercury on NVIDIA GPUs; 20–30% of OpenRouter-style workloads as latency-bound addressable wedge; RSI still human-bottlenecked. YouTube auto-captions (`asr`); [Watch](https://www.youtube.com/watch?v=N1rjtDs8blY).

## Key takes

**Architecture claim: autoregressive decode is still sequential (token N needs 1…N−1) → memory-bound on GPUs; diffusion generates many tokens in parallel → training-like matmul-heavy workload at inference.** Historical rhyme: 2017 RNN→transformer unlocked *training* parallelism; Ermon argues diffusion is the inference-time analogue. Bitter lesson: more parallel wins. Economics = intelligence per watt / per dollar; test-time compute and RL rollouts are both inference-bound, so better inference scaling compounds post-training too. [asr]

**2024 academic proof point: discrete diffusion transformer matched AR perplexity at <1B / GPT-2 scale on same data — and generated text ~10× faster.** That result justified spinning out Inception to scale commercially. Continuous modalities (image/video/music/protein) already diffusion-dominated; discrete text/code was the open bet vs lab AR consensus. [asr]

**Product claim today: Mercury models benchmark-comparable to frontier labs' speed-optimized small models (Haiku / Flash / mini-nano class) while significantly faster; served in production with an in-house engine.** Cannot drop onto vLLM/SGLang — serving IP is part of the moat. Still transformer+attention underneath; scrapes public data/evals; differentiation is speed now, possible intelligence/data-efficiency later (denoising as augmentation). [asr]

**Company snapshot: ~2 years old, ~50 people; bottleneck more compute than headcount; product team serves current Mercury + research trains next (training/RL/inference).** Attracts green-field researchers; uses frontier-lab models to accelerate own R&D but says human idea-pruning still binds — "not there yet" on RSI. [asr]

**Where speed wins now: latency-sensitive apps, especially voice agents.** Named customer OpenCall — previously on Cerebras for required speed; switched to diffusion LLMs to match custom-chip latency on commodity NVIDIA GPUs (availability + cost). Software acceleration multiplicative with future hardware. Controllability: coarse-to-fine generation steerable earlier than AR (academic literature); API kept OpenAI-compatible text-in/text-out so harnesses transfer. [asr]

**Workload split (Ermon estimate): ~20–30% of tasks (OpenRouter taxonomy) are latency-critical enough that highest-quality-within-latency-budget models address them — floor on diffusion TAM near-term.** Frontier intelligence still required for much of the rest; diffusion not yet at that frontier. Adoption friction = immature ecosystem (kernels, serving) built in-house. [asr]

## Key math

**2024 paper: GPT-2-scale (<1B params) discrete diffusion matched AR perplexity; ~10× faster text generation (asr — Ermon)** — founding technical claim. [book]

**Mercury ≈ Haiku / Flash / OpenAI mini-nano quality tier on benchmarks, significantly faster (asr — Ermon; vendor claim)** — commercial positioning. [book]

**Inception ~2 years old; ~50 people (asr)** — scale. [book]

**OpenCall: Cerebras custom silicon → Mercury on NVIDIA GPUs at comparable voice latency (asr — Ermon)** — hardware-substitution datapoint. [book]

**~20–30% of OpenRouter-classified workloads latency-bound / addressable by speed-optimized models (asr — Ermon estimate)** — TAM floor. [book]

**Software × hardware gains claimed multiplicative (asr)** — stacking argument vs custom ASIC only.

## Quotes

> "Autoregressive models are still sequential… You cannot generate the 10th token until you've generated everything that comes before it. That kind of workload… is extremely memory bound."
> — Stefano Ermon [asr]

> "The equivalent at inference time is a diffusion model because a diffusion model is built to… process many tokens at the same time."
> — Stefano Ermon [asr]

> "We were able to generate text like 10x faster compared to the autoregressive model."
> — Stefano Ermon [asr] (GPT-2-scale 2024 result)

> "Our Mercury models are on par with the Haiku models, Flash models, mini nano models from OpenAI… while being significantly faster."
> — Stefano Ermon [asr]

> "They switched over to our diffusion based LLMs because they can essentially get the same speed as… an autoregressive model on custom hardware… on Nvidia GPUs."
> — Stefano Ermon [asr] (OpenCall)

> "Between 20 and 30% where latency is really really important… as a lower bound I think it could be addressable."
> — Stefano Ermon [asr]

> "The bottleneck is more compute than people."
> — Stefano Ermon [asr]

## Variant perception

**Priced in — inference efficiency matters; small/fast model tiers (Haiku/Flash/mini); voice latency as a product constraint; custom inference chips (Cerebras/Groq/etc.) as a speed path.** Markets already trade "inference is the next bottleneck."

**What's new — a principal (diffusion's academic father) shipping production discrete diffusion LLMs with a named custom-silicon→GPU substitution (OpenCall), a quantified ~10× academic speed claim, and an explicit 20–30% latency-wedge TAM.** Reframes the hardware race: software parallelism on NVIDIA may substitute for scarce specialty inference silicon in some voice/agent stacks. Serving-engine moat is underappreciated vs model weights alone.

**Bear case — Mercury quality claims are vendor-benchmark; not independently audited here.** 10× is GPT-2-scale research, not frontier Mercury vs frontier AR. Diffusion may lose on hard reasoning even if it wins latency. Labs can add speculative decoding / other AR speedups and close the gap without architectural switch. 20–30% is Ermon's OpenRouter eyeball, not revenue mix.

**Discount — Ermon is CEO of Inception raising/selling Mercury; Sarah Guo (Conviction) is a friendly AI-infra interviewer.** Episode is a category-creation pitch. Treat "will win inference" as thesis, not settled fact — but the GPU-mapping argument and customer silicon-substitution are concrete enough to track.

## Positioning

**Inference margin inversion — STRENGTHENS (mechanism).** Parallel decode + software speed on commodity GPUs is a direct path for cost/latency per token to fall without waiting for a new chip cycle; voice agents paying for speed today validate willingness-to-pay for the fast tier. If diffusion (or AR speedups it forces) works, serving gross margins can widen even as list prices drop.

**AI capex durability — MIXED / watched.** Better tokens-per-watt could *reduce* accelerator intensity per query — but also unlocks more real-time agent/voice usage (volume up). Ermon's own bottleneck ("more compute than people") and RL-rollout inference hunger still pull demand. Net: supports continued GPU scarcity even if architecture mix shifts.

**Enterprise agent stall — NEUTRAL / mild help.** Faster, more controllable generation helps voice/tool agents feel production-ready, but does not solve eval/liability. OpenAI-compatible API eases harness swap — adoption friction is stack maturity, not just model IQ.

**HBM supply binds — NEUTRAL / slight weaken if true.** Memory-bound AR decode is partly an HBM/bandwidth story; compute-heavy parallel diffusion reframes the binding constraint toward FLOPs vs bandwidth for some workloads — watch, do not reprice yet.
