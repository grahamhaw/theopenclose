# Long-form

Podcasts, founder interviews, TV hits, conference talks, fireside chats, earnings calls. Anything where someone talked at length and the content is worth more than the headline.

One spec for all of them. Only the source metadata differs.

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

**`metadata-only`** is restricted to frontmatter plus abstract. No theses, no key math, no quotes, no positioning read.

**`secondhand`** is restricted to frontmatter plus abstract, and the abstract must name who is reporting it. Never quote from a secondhand source — the words are someone else's paraphrase and quoting them launders a summary into a quotation.

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

## Sections

### Abstract

One paragraph, 60–120 words. Who is speaking and what they run, stated as the company's function rather than its marketing. Then the ground the conversation covers — concrete topics, compressed. No bullets. Do not repeat the title.

### The theses

As many as the material earns, typically 3–8. Each is a couplet: the claim, then the evidence.

```
Inference cost per token is falling faster than list prices, so gross margin
widens even as the headline price drops.
Amodei: four price cuts in eighteen months with margin up over the same period.

Coreweave's backlog is concentrated enough that one customer non-renewal
resets the growth rate.
Two customers named as 'most of' 2027 contracted revenue.
```

- The claim is a position, not a topic. "Conversational agents are the fastest-growing revenue line, led by fintech" — not "the guest discussed revenue."
- The evidence contains something falsifiable: a name, a number, an entity, a date, or a short verbatim fragment.
- Where `people` holds more than one speaker, name whose claim it is.
- Order by importance to a reader deciding where to spend attention, not by order of appearance.
- No claim restates another at a different altitude.
- Verbatim fragments in evidence lines run under ten words, single quotes, never two in one line.
- Thin material produces fewer theses. Never pad to a number.

### Key math

Up to eight, driven by density. Beyond eight the document is a table and nobody reads it — keep the eight that carry the most interpretive weight.

```
~$8bn of FY27 capex already committed across two sites
Capex lock-in — spending is contracted before the demand that justifies it is proven.

Eleven people on the inference team, down from forty
Org signal — the work moved to the compiler group, which was not announced.
```

- Preserve the speaker's units and framing. Mark approximates with `~`.
- Include quantified structure, not only dollars: org layers, headcount per team, product line counts, months to ship.
- Never compute a figure the speaker did not state.
- Skip numbers carrying no interpretive weight, unless the number itself is the argument.

### Quotes

Three to six verbatim, each attributed. Under about thirty words, byte-faithful including hedges and emphasis.

Load-bearing only: it carries a claim, carries a number, or reveals the speaker's hand — conviction, bias, a tell. Never color, never banter. Fewer than three quotable lines means fewer quotes.

### Variant perception

Four labeled blocks, separated by blank lines.

**Priced in** — what consensus already holds and this merely confirms.

**What's new** — the genuinely variant datapoints, and what they change about how the reader should see the world. If nothing here is variant, say what the source is instead — a positioning read, a methodology, a private-company story — rather than straining for a payoff.

**The bear case** — the strongest counter-reading of the source's own claims, stated fairly.

**Discount** — source bias. Who is talking their book, what the arithmetic assumes away, what the speaker gains if the audience believes him.

### Positioning read

Route to `state/themes.json`. For each theme the material bears on: strengthens, weakens, or neutral, and one line on why.

```
ai-capex-durability — STRENGTHENS. Two sites contracted through FY27 at a
scale that does not unwind on a single quarter of softer demand.

hbm-supply-binds — WEAKENS. Second source qualified at volume in June,
earlier than the theme assumed.
```

Never invent a theme. Themes the material does not bear on are not listed — "not addressed" entries are banned and silence is the default. Directional only. If the material bears on nothing in the file, emit nothing.

### Frameworks

Separate block, only when present. A mental model or analytical frame worth keeping, stated crisply with the date and source. Frameworks are not investment signal. Never force one.

## Rules

- A TV hit and a two-hour podcast get the same structure at different lengths. Do not stretch a six-minute CNBC segment into eight theses.
- Earnings calls: prepared remarks and Q&A are different in kind. Weight the Q&A, where the analysts push. Prepared remarks are drafted by IR and every word is chosen.
- Where a speaker is promoting something — a raise, a product, an IPO, a book — the Discount block says so explicitly.
- Multiple appearances by the same person in one window get one document, not three, with the venues listed and any contradictions between them surfaced as a finding.
- Backfill documents follow this spec unchanged. Age does not lower the standard.
