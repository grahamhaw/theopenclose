---
id: 2026-09-18-a16z-ghodsi-databricks-ai-pacing
type: longform
date: 2026-09-19T05:20:00-04:00
title: "a16z — Ali Ghodsi: enterprise stall is context, not IQ"
summary: >
  Databricks CEO on pacing PR vs cyber risk, four-test RSI bar,
  ontology/Genie as the adoption bind, Uni Gateway cost control + GLM shift.
people: [Ali Ghodsi, Martin Casado, Sarah Wang]
entities: [Databricks, OpenAI, Hugging Face, GLM, Genie, Neon, Lakebase, Nova Nordisk, a16z]
source: https://www.youtube.com/watch?v=GzEtpAKYRvE
backfill: false
fidelity: asr
venue: The a16z Show
host: Martin Casado, Sarah Wang
duration: 67m
published: 2026-09-18T17:37:54-04:00
---

## Opening

**Frontier models are already "good enough" for most enterprise work — the bind is institutional context (ontology), and the real near-term risk is AI-speed cyber, not doomer pacing theater.**
Databricks co-founder/CEO Ali Ghodsi joins a16z GPs Martin Casado and Sarah Wang (~67m) in the week of Dario/pacing discourse. Ground covered: why "pacing" is bad PR vs security controls; a four-condition RSI litmus; existential risk ~near zero vs CVE→exploit collapsing to minutes; Genie/ontology as Google-index-for-the-firm; Uni Gateway budget caps + harness multiplexing (~2× cost swing); board anecdote of a scaled eng org moving frontier→GLM; Neon/Lakebase agent-first DB (>90% DBs agent-created). YouTube auto-captions (`asr` — proper nouns/numbers marked); [Watch](https://www.youtube.com/watch?v=GzEtpAKYRvE).

## Key takes

**Ghodsi's strongest disagreement with lab doomer messaging: do not blast "10% wipeout" risk to millions — it stresses non-specialists and is not required to get serious about real risks.** Leaders should not freak everyone out; technical nuance belongs among researchers, not as TV/Twitter extinction theater. [asr]

**"Pacing" is a PR misstep — orthogonal to safety/security; you can slowly build a weapon.** Casado: industries self-regulating on security/safety is sensible; couching it as pacing satisfies neither pause-camp nor engineers. Ghodsi grants the tragedy-of-the-commons race (IPOs, competition — no one stops unilaterally) but redirects Hugging Face / OpenAI incident read from "should have paced" to "secure your thing / monitor tokens during RL," not after-the-fact. Security sitting on every GPU-hour of agent sandbox work *would* slow runs — that is the trade labs want externalized. [asr]

**RSI litmus (Ghodsi): four conditions must hold *simultaneously* — less time, fewer resources, rising intelligence, and the cycle repeatable.** Any one missing (e.g. constant GPU stock) self-paces. He frames today's frontier runs as the *opposite*: more resources, more humans, more brittle, few runs per year, botched runs already exist. Autocatalytic AI-for-kernels/data-cleaning ≠ true self-training RSI; Casado's sampling of lab spinouts: ~90% of "RSI" talk is autocatalytic. [asr]

**Near-term risk priority is cyber, not superintelligence — CVE-to-weaponize window from years→minutes in ~3–4 years; existential risk "close to zero" / P(doom) <10%.** Swarm scale changes the attacker surface: turn on a button for 10k–100k sandbox agents doing "$100M salary" equivalent work. Data+AI and cyber markets "collapsing" because internal agents leave orders-of-magnitude more logs/trails to analyze. Engineering problem, not pause problem. [asr]

**Enterprise thesis: you do not need smarter models for most org productivity — you need context the models lack (meetings, decision paths, the two people who know how work actually gets done).** Ontology = offline index (PageRank analogy) so agents do not crawl MCP servers one-by-one for 10 minutes like a broken Google. Genie anecdote: Fortune 500 penetration question bounced sales ops→CFO→screenshot of Genie; everyone queries the same ontology. Nova Nordisk trial / gene-regulatory network use cases named as surprising deployments. [asr]

**Internal cost control is already live: token burn up, $ cost flat via Uni Gateway budgets, smart routers to cheaper models, and harness multiplexing (~2× cost for same model/version).** Q4'25 Ghodsi committing production code → org leaderboards → Feb/Mar token-maxing panic. Sarah: first time a scaled company said in a board meeting it is moving from frontier models to GLM; by dollar open source ~5%, by token >60% (product side higher). Pattern: Fable/Astra for architecture/audit, cheap model for implementation. [asr]

**Agent-native infra: Neon/Lakebase obsess over agents as the buyer — >90% of databases created are agent-created, not human.** Pricing that does not punish experimental agent spin-up. Persona shift from DBA/app-dev to agent. [asr]

## Key math

**Frontier training cost framing: was ~$100M-scale; now ~$5–10B per frontier run (asr — Casado/Sarah/Ali exchange; treat as order-of-magnitude)** — RSI-opposite cost curve. [book]

**Replicate a frontier model ~6 months later ≈ 1/20th the cost (asr — Sarah)** — imitation cheaper than frontier. [book]

**~90%+ of Databricks software written by AI already (asr — Ali)** — autocatalytic baseline, not FOOM. [book]

**Four simultaneous RSI conditions required (asr — Ali)** — definitional bar. [book]

**Same model, different harness ≈ 2× cost difference (asr — Ali)** — harness > model for spend control. [book]

**Open source: ~5% of $ spend, >60% of tokens; external product use up to ~90% OS at some startups (asr — Sarah/Ali board sampling)** — dollar vs token wedge. [book]

**Neon/Lakebase: >90% of DBs created by agents (asr — Ali)** — agent-as-buyer proof. [book]

**CVE→weaponize: years → minutes over ~3–4 years (asr — Ali)** — cyber clock. [book]

## Quotes

> "I don't think that's like helpful for a lot of people… causes a lot of harm for a lot of folks who get stressed out and actually are not in the nuances."
> — Ali Ghodsi [asr]

> "Pacing… is orthogonal to safety and security. Like you can slowly build a weapon."
> — Martin Casado [asr]

> "If all four are happening… then you might get a speed up where the next model… takes half amount of time and half the resources and it is more intelligent."
> — Ali Ghodsi [asr]

> "For that, we actually don't need smarter models… just go from 60 to 70%… none of that is needed."
> — Ali Ghodsi [asr] (on fusing institutional context into today's frontier)

> "If you use the same model but different harnesses, there's almost 2x different cost difference."
> — Ali Ghodsi [asr]

> "For the first time ever, a company at scale last week said that they're moving from the frontier models to GLM."
> — Sarah Wang [asr]

> "Over 90% of their… databases that are created on Neon and Lakebase are actually created by agents."
> — Ali Ghodsi [asr]

## Variant perception

**Priced in — pacing/doomer week already on the tape; enterprise AI "needs data/context"; token cost anxiety; open-weight/cheap-model routing.** Markets already debate pause vs race and whether AI spend is wasteful.

**What's new — a falsifiable four-condition RSI bar from a scaled AI-infra CEO who says today's frontier runs fail that bar; ontology-as-index as the concrete enterprise product thesis; quantified harness (~2×) and $/token vs token-mix (5%/$ vs 60%+ tokens OS) cost-control stack; board-level GLM substitution anecdote; agent-created DB share >90%.** Softens "need smarter models" narrative without denying cyber urgency.

**Bear case — ASR numbers on train cost / 1/20th replicate / OS mix are board-anecdote grade, not disclosed financials.** Ontology pitch is Databricks Genie talking its book. GLM migration could be one-off. "Existential risk near zero" may age poorly if RSI criteria start clearing. Cyber "minutes" claim needs CVE dataset confirmation.

**Discount — Ghodsi sells Databricks (Genie, Uni Gateway, Neon/Lakebase); Casado/Wang are a16z with Databricks exposure.** Episode is partly a product demo wrapped in the week's pacing discourse. Treat doomer-critique as sincere *and* convenient for a vendor that wants enterprises shipping agents on its stack.

## Positioning

**Enterprise agent stall — STRENGTHENS.** Explicit thesis: capability is ahead of institutional context/ontology; agents without the offline index thrash MCP-by-MCP. Liability/security (cyber merging with data+AI) is the other bind — matches theme that evaluation/trust, not IQ, stalls production.

**AI capex durability — NEUTRAL / mixed.** Frontier runs still gigantic and brittle (supports continued build); but cost-control + GLM/open-weight routing and "don't need smarter models for org gains" soften the pure training-capex story. Inference/token volume still rising even as $ cost flat at Databricks.

**Inference margin inversion — WATCHED / mild STRENGTHEN.** Tokens up, $ flat via routers/harness/cheaper models is exactly the cost-per-useful-output falling faster than list dynamic — at least inside one large consumer of tokens. Harness 2× gap is a new lever beyond model price cuts.

**HBM supply binds — NEUTRAL.** Episode is software/enterprise/cyber, not memory hierarchy — though agent log volume and sandbox swarm scale sit upstream of accelerator pull.
