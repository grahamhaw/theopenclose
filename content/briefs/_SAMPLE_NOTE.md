# Sample postmarket brief — deliverable note

For Graham Hawes review. Rewritten 2026-09-15 early UTC under the revised `formats/brief.md`.

## What changed in the framework

`formats/brief.md` was rewritten to match learnings from the live theopenclose.com post brief (approved review):

- Ship times **9:00am / 4:30pm ET** (was 7:00 / 5:15).
- Required section order: Lead → Delta → Positioning → Top stories → Conversation → In Their Words → Podcasts & interviews → What to watch.
- Wire/market-data exception (attributed levels/breadth/yields OK without `news.md`).
- Edition-specific leads; postmarket = path/breadth/concentration + morning-question resolution + sell-side split.
- Positioning: prose paragraphs to `themes.json`; **no** trades / own-rent / baskets / sizing.
- Long-form section renamed **Podcasts & interviews** with stance + fidelity; metadata-only = one line.
- In Their Words only if ≥3 load-bearing quotes; omit empties; ship on time.

## Brief path

`content/briefs/2026-09-14-postmarket.md`  
- `date`: **2026-09-14T16:30:00-04:00** (4:30 ship)  
- Window: **09:00–20:00 ET** — post-ship sample extends past close so evening podcast drops stay in-window for review completeness.

## Sample rewritten under new rules

- Lead is news-first tape (WSJ/MarketWatch/Investopedia/Barron's) then conversation implication; closes with a levels line.
- Delta: no prior desk brief on disk — session moves only (stated).
- Positioning: prose on `ai-capex-durability`, `hbm-supply-binds`, `inference-margin-inversion`; no trade language.
- Podcasts: stance + `metadata-only` one-liners (honest; not summarized as heard).
- In Their Words: kept (4 quotes from discussion docs).
- What to watch: last; mixes Fed calendar with discussion observables.

## Residual gaps

- **No morning / prior brief in `content/briefs/`** — cannot true-delta vs a desk premarket; live site has a pre brief the archive does not.
- **Long-form in window is metadata-only** — live site has richer `[partial]` takes; desk sample stays one-line until transcripts land.
- **Live-site discussions not in archive** (e.g. China open-models pacing, silicon spark spread) — sample uses only desk `content/discussions/`.
- **Deep dive** on lab compute purchase obligations exists on the live site; not in desk `content/` — not linked.
- **HBM discussion** — X conversation search rate-limited earlier; fidelity `top-replies`; deep tail unread.
- **CLAUDE.md job table** still lists old 7:00 / 5:15 brief times — format spec is source of truth until that file is updated.
- **Absolute index levels** (e.g. SPX 7,619.98 from prior AP pass) dropped in favor of attributed % / breadth from the reviewed live post brief.

## Discussions / podcasts in sample

Discussions: baker-pacing-compute-margins, hbm-4hi-enough, openrouter-spend-vs-tokens.  
Podcasts (metadata-only): SemiAnalysis 030, TBPN AI Slowdown, All-In Jensen, Latent Space Socher, Eisman Big Short reunion.
