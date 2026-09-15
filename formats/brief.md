# Brief

Pre-market, post-market, and weekend are one format. The window is a parameter.

| Edition | Window | Ships |
|---|---|---|
| `premarket` | Since the prior close brief / weekend brief | ~9:00am ET |
| `postmarket` | Since the morning brief | ~4:30pm ET |
| `weekend` | Since Friday's close brief | Sat ~8:30am ET |

## Assembly

Read every document in `content/` whose later of `date` and `updated` falls inside the window. Skip every document with `backfill: true`. Never wait for unfinished jobs — a long-form still running at ship time belongs in the next brief.

**Judgments** (reads, what a document says something implies, conversation verdicts) come only from documents in `content/` in the window — discussions, longform, news, interviews. Do not re-derive or contradict a document's read without naming the change.

**Wire / market-data exception.** Levels, breadth, futures, yields, commodities, and wire facts may appear in the lead, the delta, and top stories with outlet attribution (WSJ, Reuters, Barron's, AP, MarketWatch, Investopedia, etc.) even when there is no matching `news.md`. Do not invent numbers. Every figure must come from a cited wire or from market data on hand.

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

## Edition-specific leads

- **Premarket** — overnight / weekend wires plus the open question the cash session must answer. Connect to weekend discussions when those are in window.
- **Postmarket** — what the session actually did (path, breadth, concentration), what resolved versus what remains from the morning question, and the sell-side / tape split if present.
- **Weekend** — wider ground, not longer by default. A quiet week is a short brief.

## Section order (required)

Emit sections in this order. Skip any section that would be empty.

### 1. The lead

News-first tape, then the conversation implication. Two to four paragraphs of prose. This is the only section written as continuous synthesis across documents and wires. Write it last, after the rest is assembled.

Open with what changed, not with what is true. End with the open question the window leaves. Close the lead with a one-line levels line (SPX / Nasdaq / 10y / etc.).

### 2. The delta

Compact. Versus the prior brief when one exists; otherwise session moves only — say so explicitly. Include only what is decision-relevant: indices, the long end, a commodity where something is happening, names that moved on something in this window's documents or on attributed wires.

### 3. What changed

Short directional **prose paragraphs** on what the window's documents establish that the last brief did not have. Name the documents. Where something happened that a document had named as the thing that would settle it, say so — that is the most useful sentence in the brief. A window that changed nothing emits no section.

**Never** trades, leans, "own/rent," baskets, or sizing. Prefer prose over STRENGTHENS / WEAKENS labels; those may appear inline once, not as a table of jargon.

### 4. Top stories

Three to six. Each: headline, two or three sentences, outlet. Drawn from news documents in the window, plus attributed wires that mattered without earning their own document. Ordered by significance, never by time.

### 5. The conversation

Each discussion in the window: the question, two to four sentences of state of play plus the carried read, and a link. No re-embedded posts — verbatim lives in the discussion document.

### 6. In their words

Only if there are **≥3 load-bearing quotes** (a claim, a number, or a tell) from across the window. Each: quote, speaker, venue, timestamp, one line on why it matters. Fewer than three → omit the section entirely.

### 7. Podcasts & interviews

One card per longform / interview doc in the window:

- Show / episode
- Stance: `BULLISH` / `BEARISH` / `NEUTRAL` relative to consensus **in the material** — not a trade
- Fidelity marker
- Two to four sentence takeaway when fidelity supports it

`metadata-only` and `secondhand` entries get **one line + marker**. Do not summarize them as though they were heard.

### 8. What to watch

Three to six. Pull observables from discussion docs' "What would settle it" sections. Calendar items (FOMC, earnings, etc.) are fine. Each: the thing, when, why it matters.

## Rules

- No trade recommendations. Directional prose only.
- Never introduce a fact that is not in a source document, an attributed wire, or market data on hand. The brief is assembly.
- Every claim traces to a document in `sources` or to a cited wire / market datum.
- A section with nothing to put in it emits nothing — including In Their Words.
- Never contradict a source document's read without naming the document and saying what changed.
- The weekend edition covers more ground but is not longer by default.
- Ship on time at 9:00am / 4:30pm ET.
