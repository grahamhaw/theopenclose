# Brief

Pre-market, post-market, and weekend are one format. The window is a parameter.

| Edition | Window | Ships |
|---|---|---|
| `premarket` | Since the prior close brief | ~7:00am ET |
| `postmarket` | Since the morning brief | ~5:15pm ET |
| `weekend` | Since Friday's close brief | Sat ~8:30am ET |

## The brief does no research and waits for nothing

Read every document in `content/` whose later of `date` and `updated` falls inside the window, plus market data. Nothing else.

Do not re-read sources, do not re-analyze threads, do not write new verdicts on material that already has one. A document's `summary` and its own read are what the brief renders. Where a discussion already concluded that Baker has the better of the argument, the brief carries that conclusion — it does not re-derive it and must not contradict it. If a document's read now looks wrong in light of something later in the window, that is worth saying, and it is said as a change, naming both.

**Never wait for a job to finish.** If a long-form treatment is still running at ship time, it is not in this brief and it will be in the next one. This is the normal case, not a failure.

**Skip every document with `backfill: true`.** Ingested corpora are archive material, not news.

**Documents entering through `updated`** are rendered as changes — what moved since the reader last saw it — never as new documents.

## Frontmatter

Shared schema from `CLAUDE.md`, plus:

```yaml
edition: premarket
window_start: 2026-09-13T16:30:00-04:00
window_end: 2026-09-14T07:00:00-04:00
sources: [2026-09-14-baker-evaluators, 2026-09-14-oddlots-brockman]
```

`sources` lists every document id the brief drew on. The site uses it to link, and it is how you check later what a brief was built from.

## Sections

### The lead

Two to four paragraphs of prose. The most important thing that happened in the window, with numbers and attribution, then the second thing, then the context that connects them.

This is the only section written as continuous prose and the only one that synthesizes across documents. Write it last, after the rest is assembled.

Open with what changed, not with what is true. "Futures are lower on the AI slowdown call" is a lead. "Markets are focused on AI" is not.

End with the question the window leaves open.

### What to watch

Numbered, three to six. What is scheduled, what is unresolved, what would settle something the window left open.

Each: the thing, when, and why it matters. Pull the observables from the "What would settle it" sections of discussion documents in the window — that is what they are for.

### The delta

Three to six lines. What moved versus where it stood at the previous brief.

```
ES futures     5,842      5,901      -1.0%
10y            4.31%      4.24%      +7bp
NVDA           $184.20    $191.55    -3.8%   (on the Baker thread)
```

Include only what is decision-relevant: index futures, the long end, the policy-path probability, a commodity where something is happening, and any single name that moved on something in this window's documents.

The comparison against the prior brief is the point. A level with no prior is a number; a level with a prior is information.

### Positioning read

Organized by theme from `state/themes.json`, not by ad-hoc heading. For each theme the window touched: a short paragraph on what the window's documents do to it, naming them.

Where the documents in this window disagree with each other, say so and name both. Where a theme's `breaks_if` condition came closer to being met, say that explicitly — it is the most useful sentence in the brief.

Directional only. Never a trade, never a ticker list, never sizing. Themes the window did not touch are not listed.

### Top stories

Three to six items. Each: headline, two or three sentences, the outlet.

Drawn from news documents in the window, plus anything from the tape that mattered without earning its own document. Ordered by significance to the reader, never by time.

### The conversation

Discussion documents in the window. Each: the question, one or two sentences of the state of play, and the document's own read, carried forward verbatim in substance.

Link to the document. Never re-embed posts — the verbatim lives in the discussion document and duplicating it here means the same post exists in two places with no canonical home.

### Long-form

Long-form documents in the window. Each: speaker and venue, the fidelity marker, two or three sentences on what it establishes, and the document's own read.

`metadata-only` and `secondhand` entries get one line and their marker. They are listed so the reader knows they exist, not summarized as though they were heard.

### In their words

Three to six verbatim quotes from across the window, each with speaker, venue, timestamp, and one line on why it matters.

**If there are fewer than three quotes that carry a claim, a number, or a tell, emit no section at all.** Not a header with nothing under it. This section exists when the window produced quotable material and does not exist when it did not.

## Rules

- Never introduce a fact that is not in a source document or in market data. The brief is assembly. If something important is missing, the failure was upstream in triage, and the brief must not paper over it with recalled context.
- Every claim traces to a document in `sources` or to a cited market datum.
- A section with nothing to put in it emits nothing. This applies to every section including the lead — a genuinely empty window produces a short brief saying so, not a full-length brief padded with recycled context.
- Never contradict a source document's read without naming the document and saying what changed.
- The weekend edition covers more ground but is not longer by default. A quiet week is a short brief.
- Ship on time. An incomplete brief that lands at 7:00am is more useful than a complete one at 8:15.
