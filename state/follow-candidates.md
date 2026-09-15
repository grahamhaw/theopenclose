# Follow candidates (buy-side For You curation)

Reviewed via user-X MCP (`get_users_by_username(s)`, `search_users`, `get_users_posts` excl. replies where possible). Judged from **recent posts**, not bios. Excludes everyone in `following-handles.txt`. No follow/unfollow mutations performed.

## Cannot do (API limits)

**CANNOT follow/unfollow via API.**

Full `user-X` tool catalog checked (pattern `follow|unfollow|friendship` + full server list). Available tools are read/search/timeline/bookmarks/webhooks/chat — there is **no** `create_friendship`, `destroy_friendship`, `follow`, or `unfollow` mutation.  
(`create_activity_subscription` can *observe* `follow.follow` / `follow.unfollow` events via webhook; that is not following.)

Parent must follow/unfollow manually in the X client.

## Unfollow now (only saylor unless posts prove otherwise)

| Handle | Name | Why |
|--------|------|-----|
| **@saylor** | Michael Saylor | Agreed. Latest posts (Sep 14) are pure `$MSTR` / `$STRC` / `$BTC` digital-credit & Strategy treasury content — off-theme for AI/semis/hyperscaler desk. No countervailing AI/TMT signal in recent sample. |

Do **not** unfollow: JaredKubin, zerohedge, anchors (SaraEisen, dee_bosa, carlquintanilla, sonalibasak, andrewrsorkin, Kr00ney), jukan05, elonmusk, BillAckman, Tier 1 research.

## Follow recommendations (12)

### High priority

1. **@altcap** — Brad Gerstner (Altimeter)  
   **Why:** Falsifiable public-market AI takes. Recent: Anthropic *will* IPO / markets can price risk; AI safety vs China race balance; live Jensen/Trump All-In context; engages Gavin on third-party evaluators. Fills BG2 / buy-side PM gap (already follow @jaminball but not Brad).  
   **Gap:** sell-side/buy-side PMs who post · podcast host named

2. **@dougclinton** — Doug Clinton (IA Funds / Deepwater)  
   **Why:** Best pure **AI-in-investment-process** account found. Recent: IA 500 “AI-constructed” large-cap benchmark; models acting as investors → alpha→beta thesis; @iafunds earnings-direction benchmarks across Fable/Grok/Kimi/etc. Concrete workflow signal, not vibes.  
   **Gap:** AI-in-investment-process

3. **@TheStalwart** — Joe Weisenthal (Odd Lots)  
   **Why:** Equity-relevant macro/tape + AI debate with facts. Sep 14: “Software stocks outperformed chip stocks today by the greatest margin in history”; AI-safety heuristics vs seek-truth-from-facts; Doctorow/doomer read.  
   **Gap:** macro that moves equities · bulls vs bears framing

4. **@tracyalloway** — Tracy Alloway (Odd Lots)  
   **Why:** Same show, complementary guests. Recent: Odd Lots w/ OpenAI President Greg Brockman on AI slowdown/safety; copper shortage / mining bottlenecks; Bridgewater CIO Greg Jensen on AI extinction risk. Macro that feeds S&P/AI infra.  
   **Gap:** macro that moves equities

5. **@Beth_Kindig** — Beth Kindig  
   **Why:** Dense ticker-tagged primary quotes. Sep 14 sample: Google Cloud price/perf claims ($GOOG/$NVDA/$AMD/$AVGO); CoreWeave “every GPU sold multiple times” ($CRWV/$NVDA); OpenAI Luna −80% price → 10× usage; Finland AI infra + nuclear. Stock-level AI infra tape.  
   **Gap:** sell-side/buy-side who post · semis/hyperscaler stock views

6. **@citrini** — Citrini Research  
   **Why:** Thematic/cross-asset beyond SemiAnalysis supply-chain cluster (note: SemiAnalysis acquired Citrini — still distinct public voice). Recent: lab training-cut → margin implication; Jevons Paradox skepticism for AI stocks; agentic-utility names ($BAND/$TWLO) outside semis complex.  
   **Gap:** semis/AI research beyond SemiAnalysis cluster · positioning

7. **@bgurley** — Bill Gurley  
   **Why:** BG2 co-host; falsifiable regulatory-capture thesis (“incumbents beg for regulation — no idea they would beg this hard” on Dario pacing). Complements @altcap without being a show promo bot.  
   **Gap:** podcast hosts (BG2) · bulls vs bears on AI policy

### Medium priority

8. **@levie** — Aaron Levie (Box)  
   **Why:** Enterprise AI *demand* signal from the field. Recent: agent security/governance as 100× usage challenge; nuanced take on Dario “pacing”; “tales from the road” with banking/media/insurance leaders on agents + cyber. Useful for AI spend realism vs chip hype.  
   **Gap:** AI adoption / investment process adjacent · TMT

9. **@JackFarley96** — Jack Farley (Monetary Matters)  
   **Why:** Macro podcast that moves asset framing. Recent: food-supply / El Niño interview; RTs Bessent Treasury-rate-cap history; engages Gavin AI-evaluator summary. Less AI-core than Odd Lots but strong equity-macro.  
   **Gap:** macro that moves equities · podcast hosts

10. **@charliebilello** — Charlie Bilello  
    **Why:** Clean S&P-driver charts. Recent: Fed cuts 175bps while 10y >5% (highest since 2007); housing regional % below highs; rate-hike/recession framing. Noise-light macro tape.  
    **Gap:** S&P drivers · market-moving macro

11. **@jordanschneider** — Jordan Schneider (ChinaTalk)  
    **Why:** China tech / AI governance lens. Recent: China’s TC260 AI Safety Governance Framework v3.0; CCP Overton window; AI treaty/China race discourse. Relevant when China models or export controls move semis.  
    **Gap:** China tech

12. **@excessreturnpod** — Excess Returns  
    **Why:** Named podcast; posts clip-level market views. Recent: Jim Paulsen on AI profit boom masking weak economy / tech risk; Liz Ann Sonders on household equity exposure at ATHs; equity implied vol lifting. Process/allocation adjacent.  
    **Gap:** podcast hosts (Excess Returns) · bulls vs bears

## Maybe later

| Handle | Name | Note |
|--------|------|------|
| **@BG2Pod** | Bg2 Pod | Mostly emoji-quotes of @altcap / Invest America. Redundant if following Brad. |
| **@dylan522p** | Dylan Patel | Already follow @SemiAnalysis_. Recent personal timeline is meme-heavy; occasional high-signal (TPU InferenceX $/token vs B200/B300). Add only if you want faster/opinionated Dylan voice. |
| **@emollick** | Ethan Mollick | Excellent AI *capability/workflow* demos (multi-model research, enterprise fine-tune vs frontier). Light on tickers/positioning — follow if AI-process gap remains after @dougclinton. |
| **@maxwiethe** | Max Wiethe | Named host (@OPMpod). Recent = episode promo + RTs (Muddy Waters metals). Thin original market takes. |
| **@Ritholtz** | Barry Ritholtz | Named host. Recent = Barron’s RIA list, Monday reads, cars — low AI/semis desk density. |
| **@practicalquant** / **@JJCarbonneau** | Excess Returns hosts | Prefer @excessreturnpod hub first; hosts are thinner individually. |
| **@sama** | Sam Altman | Primary OpenAI voice; already follow @OpenAI + @DarioAmodei. Add if you want Altman-specific pacing/policy. |
| **@satyanadella** / **@LisaSu** | Hyperscaler/semi CEOs | Sparse corporate posts; useful occasionally, low cadence. |
| **@highyieldYT** | High Yield | AI & power deep-dives with SemiAnalysis — YouTube-first; optional. |
| **@TechEmails** | Internal Tech Emails | Primary-doc FOIA drip; high intrigue, uneven desk relevance. |
| **@teortaxesTex** | Teortaxes | DeepSeek/China AI hawk; high signal but noisy culture-war volume. |
| **@MacroAlf** | Alf | Strong institutional macro historically — **stopped posting ~Aug 2025**; skip until active again. |

## Coverage checklist

| Gap | Covered by |
|-----|------------|
| AI-in-investment-process | @dougclinton (primary), @emollick maybe later |
| Buy-side/sell-side PMs who post | @altcap, @Beth_Kindig, @bgurley, @citrini |
| Semis beyond SemiAnalysis cluster | @citrini (thematic), @Beth_Kindig (stock quotes); @dylan522p maybe later |
| Macro that moves equities | @TheStalwart, @tracyalloway, @charliebilello, @JackFarley96 |
| China tech | @jordanschneider |
| Podcast hosts named | @altcap/@bgurley (BG2), @excessreturnpod; @maxwiethe/@Ritholtz maybe later |

*Generated 2026-09-14. No API mutations.*
