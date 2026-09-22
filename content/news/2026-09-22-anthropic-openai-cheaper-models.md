---
id: 2026-09-22-anthropic-openai-cheaper-models
type: news
date: 2026-09-22T15:32:00-04:00
title: "Opus 5.5 and GPT-6 Sol/Luna cut serving prices"
summary: >
  Same-day primaries: Anthropic Opus 5.5 ~40% cheaper vs Opus 5;
  OpenAI Sol/Luna API list −50% vs GPT-5.6 promo.
people: [Dianne Penn]
entities: [Anthropic, OpenAI, METR, Frontier Design]
source: https://www.anthropic.com/claude-opus-5-5
backfill: false
fidelity: primary
outlet: Anthropic
published: 2026-09-22T12:00:00-04:00
---

## Opening

**Anthropic and OpenAI each shipped cheaper mid/high tiers Tuesday — list prices down on the order of 40–50% versus the prior generation, framed as serving-cost pass-through.**
[Anthropic’s Opus 5.5 post](https://www.anthropic.com/claude-opus-5-5) (first model in the Claude 5.5 family) says the model “performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5,” with input/output at **$4 / $20** per million tokens (vs $5 / $25 for Opus 5) and cache reads at **$0.20** (vs $0.50). Anthropic says Opus 5.5 was external-tested before release by Frontier Design and METR, and is its first release since Amodei’s pacing call. Separately, [OpenAI’s Sol/Luna post](https://openai.com/index/introducing-gpt-6-sol-and-luna/) cuts Sol and Luna API prices **50%** versus GPT-5.6 promotional pricing: Sol **$4→$2** input / **$20→$10** output; Luna **$0.20→$0.10** / **$1.20→$0.50** per million tokens. Astra remains the flagship; Sol/Luna available in ChatGPT Work and Codex for paid tiers (Luna also Free/Go desktop); not yet in Chat. [CNBC](https://www.cnbc.com/2026/09/22/anthropic-openai-cheaper-ai-models.html) (CJ Haddad) attributes the Anthropic “~40% less to run” line to Dianne Penn and frames both releases as the first since the recent slowdown debate.

## The numbers

**Opus 5.5 list — $4 / $20 per 1M in/out; cache reads $0.20 — Anthropic primary (vs Opus 5 $5 / $25 / $0.50).**

**Typical-workload claim — ~40% less cost vs Opus 5 at default settings — Anthropic (company test; also cites fewer tokens per task).**

**GPT-6 Sol — $2 / $10 per 1M in/out (50% vs GPT-5.6 Sol promo $4 / $20) — OpenAI primary.**

**GPT-6 Luna — $0.10 / $0.50 per 1M in/out (50% vs GPT-5.6 Luna promo $0.20 / $1.20) — OpenAI primary.**

**Fast mode Opus 5.5 — $8 / $40 per 1M in/out, up to 2.5× speed — Anthropic primary.**

## Why it matters

Both labs are cutting *list* serving prices while claiming higher or matched capability on agentic/coding workloads — the same mechanism the inference-margin theme tracks (cost per token falling at least as fast as price). Anthropic’s external pre-release eval footnote (METR / Frontier Design) sits beside Friday’s Accenture embedded-evaluator structure; it does not replace it. Competitive bench tables in both posts are vendor-selected and should not be treated as independent scorecards.

## Positioning

**Inference margin inversion** — Same-day list cuts on mid/high tiers with company claims that serving compute fell enough to fund them; theme still breaks only on disclosed lab gross-margin compression across cuts, which neither post provides.

## Connects to

**Accenture embedded evaluator** — Opus 5.5 cites METR/Frontier Design pre-release testing; governance design still the contested piece ([news](/news/2026-09-19-anthropic-accenture-embedded-eval)).

**Baker pacing / compute margins** — Price/efficiency drops can reallocate spend rather than destroy it ([discussion](/discussions/2026-09-14-baker-pacing-compute-margins)).
