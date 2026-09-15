# Brief

Pre-market, post-market, and weekend are one format. The window is a parameter.

| Edition | Window | Ships |
|---|---|---|
| `premarket` | Since the prior close brief / weekend brief | ~9:00am ET |
| `postmarket` | Since the morning brief | ~4:30pm ET |
| `weekend` | Since Friday's close brief | Sat ~8:30am ET |

## Audience & skim standard

High-value, easy skim for a buy-side investor morning/evening. Prefer **bold lead-ins** and light bullets over text walls. Bold + bullets when helpful; don't overdo.

## Mix (AI vs broader tape)

AI / semis / hyperscalers can be the **majority** of a brief when that is what is driving the tape — but the brief must not read as an AI-only desk.

- Always give the **index / rates / oil (when relevant) / breadth** story real weight in the Lead, not just as a one-line tape stamp under a stack of chip discussions.
- Aim for **at least one or two non-AI load-bearing items** in Top stories and/or Conversation when the window has them: other sectors (financials, healthcare, energy, industrials), macro/Fed path, credit, politics that moves markets, notable cross-asset moves.
- If the archive window is AI-heavy, **pull broader wire/market context** (CNBC/Bloomberg/WSJ) into Lead and Top stories even without a matching `news.md` — that is the wire exception working as intended.
- Do **not** pad with weak non-AI filler. Soften concentration; do not dilute signal.
- Weekend edition especially should feel like a **market week**, not only a tech week.

## Assembly

Read every document in `content/` whose later of `date` and `updated` falls inside the window. Skip every document with `backfill: true`. Never wait for unfinished jobs — a long-form still running at ship time belongs in the next brief.

**Judgments** (reads, positioning implications, conversation verdicts) come only from documents in `content/` in the window — discussions, longform, news, interviews. Do not re-derive or contradict a document's read without naming the change.

**Wire / market-data exception.** Levels, breadth, futures, yields, commodities, and wire facts may appear in the lead and top stories with outlet attribution even when there is no matching `news.md`. Do not invent numbers. Every figure must come from a cited wire or from market data on hand.

**Wire links.** Hyperlink a keyword in the sentence to the real webpage (e.g. [10-year](https://…)). Never bare `(Bloomberg)` paren stubs as the only attribution when a URL exists. If no real URL is on hand, attribute in plain text and omit the link — **never invent URLs**.

Omit empty sections entirely (especially In Their Words). Deep dives link from Conversation / What to Watch; do not paste the dive into the brief.

Ship on time at 9:00 / 4:30. An incomplete brief that lands on time beats a complete one that slips.

Documents that re-enter the window through `updated` render as changes — what moved since the reader last saw them — never as new documents.

## Frontmatter

Shared schema from `CLAUDE.md`, plus:

```yaml
edition: premarket
window_start: 2026-09-13T16:30:00-04:00
window_end: 2026-09-14T09:00:00-04:00
sources: [2026-09-14-baker-evaluators, 2026-09-14-oddlots-brockman]
```

`sources` lists every document id the brief drew on. The site uses it to link, and it is how you check later what a brief was built from.

### Title & summary (sidebar thumbnail)

- `title`: ≤ ~70 characters. Edition + date + one hook (e.g. `Premarket Sep 15: oil, 5% 10y, Fed`).
- `summary`: ≤ ~160 characters. One tight sentence for the list thumbnail — no multi-clause dump.

Keep these short. Long titles/summaries blow up the sidebar thumbnail.

## Edition-specific leads

- **Premarket** — overnight wires that move the US open, plus the open question the cash session must answer. Connect to weekend discussions when those are in window. Skip Asia/Europe unless they move the US tape.
- **Postmarket** — what the session actually did (path, breadth, concentration), what resolved versus what remains from the morning question, and the sell-side / tape split if present.
- **Weekend** — wider ground, not longer by default. A quiet week is a short brief.

## Section order (required)

Emit sections in this order. Skip any section that would be empty. **There is no Delta section** — put one S&P tape line in the Lead instead.

### 1. The lead

Skimmable. No text walls.

1. Start with an **S&P tape line** (bold):
   - Premarket: futures vs prior close (e.g. **S&P futures ~flat** — ES detail)
   - Postmarket: session %
   - Weekend: week performance
2. Then 3–6 short bullets or bold-lead sentences covering the overnight/session story (rates, oil, key operator wires, Fed path). International markets only if notable.
3. End with **Open question:** one line.

Write the lead last, after the rest is assembled. Hyperlink wire keywords to real URLs when known.

### 2. Positioning

Cleaner directional prose routed to themes the window touched. Use human labels as lead-ins (e.g. **AI capex durability**), never theme-id jargon as headers (`ai-capex-durability`).

Shape: **Bold lead-in** (essence) then supporting context. Hyperlink keywords to archive pages (`/discussions/...`, `/news/...`, `/longform/...`) or wires. No backtick doc ids in the body.

Never trades, leans, "own/rent," baskets, or sizing. Themes not touched are omitted. Flag `breaks_if` proximity in plain language when it came closer.

Example:

> **AI capex durability — operators still defending the multi-year path.** Tan [reaffirmed](https://…) Broadcom’s FY27/28 AI semi targets… [discussion](/discussions/…).

### 3. Top stories

Three to six. **Same item shape as Positioning:** one paragraph each — `**Bold lead-in — essence.** Supporting context with keyword hyperlinks in-sentence.` Drawn from news documents in the window, plus attributed wires that mattered without earning their own document. Ordered by significance, never by time. No backtick doc ids. Plain outlet names if no URL.

Example:

> **10y ~5.02% into Fed — oil still three-digit.** Bloomberg print highest since 2007; Reuters oil on East-West/Houthi risk; FedWatch ~92–93% hike.

### 4. The conversation

Plain `## The conversation` section header only — **never** hyperlinked markdown headers (`### [Title](/discussions/...)`). Each discussion in the window is one Positioning-shaped paragraph: `**Bold lead-in — essence.** Supporting context with keyword hyperlinks in-sentence`, including a keyword link to `/discussions/<id>` (e.g. [discussion](/discussions/...)). Carried read in plain language. No backtick doc ids.

Example:

> **Anthropic 1/5/10 GW path — financeability still open.** Tanay’s schedule matches Broadcom call language; thin replies challenge cash. Carried read: roadmap load-bearing if supply holds; pay-for-it unresolved ([discussion](/discussions/2026-09-15-anthropic-broadcom-gw-financeability)).

### 5. In their words

Only if there are **≥3 load-bearing quotes** (a claim, a number, or a tell) from across the window. Each: quote, speaker, venue, timestamp, one line on why it matters. Fewer than three → omit the section entirely.

### 6. Podcasts & interviews

Plain `## Podcasts & interviews` section header only — **never** hyperlinked markdown headers (`### [Title](/longform/...)`). One Positioning-shaped paragraph per longform / interview doc in the window: `**Bold lead-in — essence / stance.** Supporting takeaway with keyword hyperlinks in-sentence` — e.g. [Recap](/longform/<id>) · [Watch](youtube) when `source` is a YouTube URL. Include stance + fidelity in the lead-in or next clause.

Example:

> **All-In — Jensen (Doomer Hoax) — BULLISH / asr.** Rejects extinction framing; ~$400bn AI-native VC ~80% open models. [Recap](/longform/2026-09-14-allin-jensen-doomer-hoax) · [Watch](https://www.youtube.com/watch?v=S7CrlFLAmEA)

Stance: `BULLISH` / `BEARISH` / `NEUTRAL` relative to consensus **in the material** — not a trade.

`metadata-only` and `secondhand` entries get **one line + marker**. Do not summarize them as though they were heard.

### 7. What to watch

Three to six. Prefer the same Positioning item shape when natural: `**Bold lead-in — essence.** Supporting when/why with keyword hyperlinks in-sentence` to discussions/news. Pull observables from discussion docs' "What would settle it" sections. Calendar items (FOMC, earnings, etc.) are fine. No backtick doc ids.

## Rules

- No trade recommendations. Directional theme prose only.
- Never introduce a fact that is not in a source document, an attributed wire, or market data on hand. The brief is assembly.
- Every claim traces to a document in `sources` or to a cited wire / market datum.
- A section with nothing to put in it emits nothing — including In Their Words.
- Never contradict a source document's read without naming the document and saying what changed.
- Never invent URLs. Internal links use site paths: `/discussions/...`, `/longform/...`, `/news/...`.
- No "The Delta" section. S&P line lives in the Lead.
- The weekend edition covers more ground but is not longer by default.
- Ship on time at 9:00am / 4:30pm ET.
