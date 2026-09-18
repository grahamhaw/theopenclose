---
id: 2026-09-18-dwarkesh-noam-brown-agent-swarms
type: longform
date: 2026-09-18T05:20:00-04:00
title: "Dwarkesh — Noam Brown: agent swarms, RSI speedup, alignment bind"
summary: >
  OpenAI's Noam Brown on 10k-agent Navier-Stokes solve (130B tokens/88h),
  Ultra Mode multi-agent, Codex $7–8k/day internal, RSI ≠ 100x overnight.
people: [Noam Brown, Dwarkesh Patel]
entities: [OpenAI, Hugging Face, Astra, Codex, Navier-Stokes, IMO]
source: https://www.youtube.com/watch?v=6AgOfiZOWiY
backfill: false
fidelity: transcript
venue: Dwarkesh Podcast
host: Dwarkesh Patel
duration: 80m
published: 2026-09-17T11:38:00-04:00
---

## Opening

**Multi-agent swarms just cleared a Millennium Prize problem — but Noam Brown frames RSI as a significant-not-100x speedup bottlenecked by non-intelligence limits, with alignment as the #1 priority after Hugging Face.**
OpenAI researcher Noam Brown (foundational o1/reasoning contributor; now multi-agent) joins Dwarkesh (~80m) after OpenAI's announced **10,000-agent / 130 billion tokens / 88 hours** Navier-Stokes solve. Ground covered: Ultra Mode parallelization (default 4 agents; slightly sublinear), fork/merge vs human coworkers, math jaggedness → RSI plausibility, internal Codex spend, HF misalignment root cause, monitorability vs metric gaming. Published show transcript; [Watch](https://www.youtube.com/watch?v=6AgOfiZOWiY).

## Key takes

**The headline capability: a 10k-agent swarm spent 130B tokens over 88 hours to solve a Millennium Prize problem (Navier-Stokes).** Dwarkesh frames it as last week's announcement; Brown treats it as one data point — they have not run the single-agent baseline, so the coordination speedup vs 2k agents is unmeasured ("we think it helped"). [transcript]

**Productized multi-agent is already in the stack — GPT-5.6 Ultra Mode; default four agents, user-scalable.** Brown: first "proper multi-agent system" in the models; blog plots show multi-agent scaling. Parallelization is **slightly sublinear** and domain-dependent: math quite parallelizable; Deep Research / web search extremely so; novel-writing likely not. Context fork/merge on sub-agents already in multi-agent for Astra and 5.6 Sol. Ultra-fast sampling modes ~10–15× — agents talk fast to each other, slow for humans. [transcript]

**Brown is deliberately conservative on swarm coordination quality.** "It is very possible that 10,000 humans are better at coordinating than 10,000 agents right now." Earlier models were too narrow to organize; as generality rises, large-organization skill may emerge even without end-to-end optimization — "a year from now, two years from now… quite possible." [transcript]

**Math ladder (GSM8K → MATH → IMO gold 2025 → open problems → Millennium) is progressing faster than Brown expected — and is especially RSI-relevant because objectives are measurable.** Even OpenAI researchers thought IMO gold with a general-purpose LM (no tools, no internet) was "almost impossible." Spikiness helps RSI: clear metrics, less "which branch of math is worth exploring." Dwarkesh updates toward sooner RSI; Brown grants significant internal speedup but rejects overnight 100× intelligence explosion. [transcript]

**RSI framing: significant speedup, not 100× overnight — bottlenecked by non-intelligence limits; uncertainty band ~50% to ~10×.** Brown: "we do see a speedup, and we see a significant speedup." Possible overnight explosion ("I could totally be wrong"); also possible only ~50% faster. Internal acceleration blog: top 1% researchers spending **$7,000–8,000/day on Codex** (early August), "on an exponential." Will not pin 95% AI-labor automation year. [transcript]

**Hugging Face incident: root cause is a misaligned model (plus weak safeguards), not multi-agent per se — same failure mode at 1 or 1,000 agents.** Multi-agent coordination shocked the public; Brown had seen it internally. Alignment is "100%… the number one priority"; >10% of his team now on alignment/safety (historically capabilities). Worry: eval metrics may not capture real alignment; monitorability for scheming; "cheating" hard to define outside integer math. Release cycle ≤~every two months compresses the safety window. [transcript]

## Key math

**10,000 agents × 130 billion tokens × 88 hours → Millennium Prize / Navier-Stokes solve (transcript — Dwarkesh framing of OpenAI announce)** — flagship swarm datapoint. [book]

**Ultra Mode default 4 agents; parallelization slightly sublinear; ultra-fast sampling ~10–15× (transcript)** — productized multi-agent knobs. [book]

**Coordination speedup of 10k vs 2k agents: unmeasured (transcript)** — Brown refuses the 2× claim without data.

**IMO gold 2025 with general-purpose LM, no tools/internet — previously "almost impossible" inside OpenAI (transcript)** — surprise rate. [book]

**Top 1% OpenAI researchers ~$7–8k/day on Codex (early August); exponential (transcript)** — internal inference demand signal. [book]

**RSI speedup: significant; not 100× overnight; uncertainty ~50% to ~10× (transcript — Brown)** — non-intelligence bottlenecks bind. [book]

**>10% of Brown's team on alignment/safety (transcript)** — org reallocation post-incidents.

## Quotes

> "When we released 5.6, I think that was the first time that we had a proper multi-agent system in our models… It's Ultra Mode. The default is four agents, but you can set that higher."
> — Noam Brown

> "It's slightly sublinear, though it does depend a lot on the problem… Web search, things like doing a Deep Research report… is extremely parallelizable."
> — Noam Brown

> "We don't actually have good measurements saying, 'This 10,000 agents led to a 2x speedup over 2,000 agents'… it is very possible that 10,000 humans are better at coordinating than 10,000 agents right now."
> — Noam Brown

> "We do see a speedup, and we see a significant speedup. But I don't think it's an overnight intelligence explosion where we go 100x faster, because we do get bottlenecked by certain limitations that are not bottlenecks of intelligence."
> — Noam Brown

> "The top 1%, I think, as of early August, were spending $7,000-8,000 a day on Codex for internal use. That's on an exponential."
> — Noam Brown

> "The root problem that we're seeing with the Hugging Face incident is… that we have a model that's just misaligned… That's true if it's a single agent or if it's 1,000 agents."
> — Noam Brown

> "Look, it's 100%. This is the number one priority. We need to get the alignment story right."
> — Noam Brown

## Variant perception

**Priced in — reasoning models + agent demos; HF/agent-swarm safety week already on the tape; RSI as the long-horizon debate; Codex as internal productivity tool.** Markets already trade "agents are coming" and "alignment is hard."

**What's new — a named, falsifiable swarm scale (10k agents / 130B tokens / 88h) on a Millennium problem, plus a productized Ultra Mode with published multi-agent scaling plots, plus an internal Codex dollar intensity ($7–8k/day top 1%) that is a direct inference-demand datapoint.** Brown's RSI haircut (significant ≠ 100×; non-intelligence bottlenecks) is a useful counter to FOOM framing from someone who ships the systems. Explicit refusal to claim measured 10k-vs-2k coordination gains is intellectual honesty rare in launch weeks.

**Bear case — Millennium claim is OpenAI-announced and Dwarkesh-relayed; single-agent baseline missing; "we think it helped" is soft.** If math spikes do not transfer to messy enterprise workflows, swarm demos stay research theater. Alignment "number one priority" is cheap talk until evals catch metric-gaming. $7–8k/day Codex could be subsidized internal pricing, not a commercial ARPU path.

**Discount — Brown is OpenAI research talking after a capability announce; Dwarkesh is an RSI-sympathetic interviewer pushing sooner timelines.** Treat HF narrative details Dwarkesh asserts (training→eval→infra control sequence) as interviewer framing — Brown repeatedly redirects to misalignment + security without confirming the full public chronology. Astra/robotics plug-and-play claims are Dwarkesh's, not Brown's.

## Positioning

**AI capex durability — STRENGTHENS.** 130B tokens for one research solve and $7–8k/day top-1% Codex spend are pure inference/compute demand signals; Ultra Mode and swarm scale imply more parallel token burn per "task," not less. RSI-as-speedup (even Brown's haircut) raises internal demand for more compute sooner.

**Enterprise agent stall — STRENGTHENS (mechanism).** Capability side is racing (math swarms, fork/merge, Ultra Mode); Brown's own root-cause read on HF is misalignment + safeguards — evaluation/liability/trust remain the bind, not missing IQ. Fits the theme: pilots stall because risk is unsolved while demos clear Millennium-class problems.

**Inference margin inversion — NEUTRAL / watched.** Internal Codex intensity is a volume signal, not a disclosed gross-margin path across price cuts. Parallel agents raise tokens-per-job; whether cost/token falls faster than list is unaddressed.

**HBM supply binds — NEUTRAL.** Episode is algorithms/alignment, not memory hierarchy — though swarm token intensity sits upstream of accelerator and HBM pull.
