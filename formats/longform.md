# Long-form

Podcasts, founder interviews, TV hits, conference talks, fireside chats, earnings calls. Anything where someone talked at length and the content is worth more than the headline.

One spec for all of them. Only the source metadata differs.

Buy-side skim first. Same skim grammar as briefs and discussions: short title/summary, **bold lead-in — essence**, keyword hyperlinks to real URLs / site paths, human theme labels, no trade language.

## Fidelity

| Marker | Means |
|---|---|
| `transcript` | Full verbatim text, published or human-made |
| `asr` | Machine transcription — auto-captions, Whisper, or similar |
| `partial` | Clip, excerpt, or a transcript with gaps |
| `metadata-only` | Description, show notes, or published summary |
| `secondhand` | Known only through someone else's account of it |

**`asr`** is a full transcript that cannot be trusted at the word. Machine transcription fails hardest on proper nouns and numbers — the exact content this document exists to carry. Under `asr`:

- Every figure in Key math carries `(asr)` unless confirmed against a second source, in which case cite that source instead and drop the marker.
- Quotes are permitted but marked `[asr]` after the attribution. They are not byte-faithful and must not be presented as though they were.
- A figure that is load-bearing and unconfirmed is stated with the uncertainty visible: `~$50bn (asr — may be $15bn, unconfirmed)`.

**`metadata-only`** is restricted to frontmatter plus Opening. No Key takes, no Key math, no Quotes, no Positioning.

**`secondhand`** is restricted to frontmatter plus Opening, and the Opening must name who is reporting it. Never quote from a secondhand source — the words are someone else's paraphrase and quoting them launders a summary into a quotation.

## Frontmatter

Shared schema from `CLAUDE.md`, plus:

```yaml
fidelity: transcript
venue: BG2                      # show, program, conference, or "Q3 FY26 earnings call"
host: Brad Gerstner             # omit where there isn't one
duration: 92m                   # omit when unknown
published: 2026-09-13T16:00:00-04:00
```

`people` carries the speakers. `entities` carries the companies discussed.

`source`: when a YouTube watch URL exists, put it in `source` (site thumbnail + brief Watch link). Prefer YouTube over a show-page URL. Never invent a URL. Required for `metadata-only` / `secondhand` (schema); strongly preferred for `asr` / `transcript` / `partial` when the media is public.

### Title & summary (sidebar thumbnail)

- `title`: ≤ ~90 characters. Show + guest/hook, skim-friendly (not a multi-clause dump).
- `summary`: ≤ ~160 characters. One tight sentence for the list thumbnail.

Briefs link via an in-sentence keyword to `/longform/<id>` (e.g. [Recap](/longform/<id>)), with an optional second `[Watch](youtube)` when `source` is a YouTube URL — not via `### [title](...)` headers or title-as-link-text.

## Sections

Order is fixed. Do not revive Abstract / Theses as section labels.

### Opening

Replace the old Abstract wall. Shape:

```
**Bold takeaway — essence.**
Then 2–4 short sentences: who/venue, ground covered, one line on fidelity if asr.
```

Link [Watch](youtube) in-sentence when `source` is a YouTube URL. Do not repeat the title. No bullets.

### Key takes

Replace couplet "Theses." Each item is one paragraph:

```
**Claim — so what.** Evidence in the same paragraph (name, number, short quote).
```

- 3–8 items; importance order; thin material → fewer. Never pad.
- The claim is a position, not a topic.
- Evidence is falsifiable: a name, a number, an entity, a date, or a short verbatim fragment (<10 words, single quotes).
- Where `people` holds more than one speaker, name whose claim it is.
- No claim restates another at a different altitude.

### Key math

Up to eight, driven by density. Each as one line/paragraph:

```
**Figure — interpretation.**
```

- Preserve the speaker's units and framing. Mark approximates with `~`.
- Include quantified structure, not only dollars: org layers, headcount, product counts, months to ship.
- Never compute a figure the speaker did not state.
- Skip numbers with no interpretive weight unless the number itself is the argument.
- Under `asr`, mark unconfirmed figures `(asr)` per the Fidelity rules.

### Quotes

Three to six load-bearing only. Prefer blockquotes with attribution. Mark `[asr]` when needed.

Load-bearing = carries a claim, a number, or a tell (conviction, bias). Never color, never banter. Fewer than three quotable lines → fewer quotes. Under ~30 words, byte-faithful including hedges.

### Variant perception

Four labeled blocks, separated by blank lines. Each opens with a **bold lead-in sentence**, then short supporting context — not essays.

**Priced in** — what consensus already holds and this merely confirms.

**What's new** — the genuinely variant datapoints, and what they change. If nothing is variant, say what the source is instead (positioning read, methodology, private-company story) rather than straining for a payoff.

**Bear case** — the strongest counter-reading of the source's own claims, stated fairly.

**Discount** — source bias. Who is talking their book, what the arithmetic assumes away, what the speaker gains if the audience believes him.

### Positioning

Theme-routed; human labels (e.g. **AI capex durability**), never raw theme ids as headers. Prose like brief Positioning: bold lead-in, then supporting context. `STRENGTHENS` / `WEAKENS` / `NEUTRAL` may appear inline once. Omit untouched themes. Never invent a theme. If nothing bears on a live theme, emit nothing.

```
**AI capex durability — STRENGTHENS.** Two sites contracted through FY27 at a scale that does not unwind on a single quarter of softer demand.

**HBM supply binds — WEAKENS.** Second source qualified at volume in June, earlier than the theme assumed.
```

### Frameworks

Optional, unchanged intent. Separate block, only when present. A mental model or analytical frame worth keeping, stated crisply with the date and source. Frameworks are not investment signal. Never force one.

## Rules

- A TV hit and a two-hour podcast get the same structure at different lengths. Do not stretch a six-minute CNBC segment into eight Key takes.
- Earnings calls: prepared remarks and Q&A are different in kind. Weight the Q&A, where the analysts push. Prepared remarks are drafted by IR and every word is chosen.
- Where a speaker is promoting something — a raise, a product, an IPO, a book — the Discount block says so explicitly.
- Multiple appearances by the same person in one window get one document, not three, with the venues listed and any contradictions between them surfaced as a finding.
- Backfill documents follow this spec unchanged. Age does not lower the standard.
