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
