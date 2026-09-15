# Discussion

X threads, reply chains, and argument clusters. The document maps a live disagreement: which positions exist, who is behind each, and which side the evidence currently favors.

Unlike long-form, **this format takes a view.** The reader follows these people for their judgment, and refusing to say who has the better of an argument wastes the reason he is reading.

Full discussion pages should skim in this order: **Opening → Sides → Quotes → What would settle it** (+ Delta when prior exists). Briefs still link via an in-sentence keyword to `/discussions/<id>` — the brief Conversation section stays a short Positioning-style teaser, not this full structure.

## Fidelity

| Marker | Means |
|---|---|
| `full-thread` | Read the thread including the tail |
| `top-replies` | Read the visible replies only |
| `root-only` | The anchor post, no replies read |

`root-only` is restricted to frontmatter plus Opening. No Sides, no Quotes stack. A disagreement cannot be mapped from one side of it.

`top-replies` states in the Opening that the tail is unread. An argument that only appears at reply depth four is invisible here and the reader needs to know that.

## Frontmatter

Shared schema from `CLAUDE.md`, plus:

```yaml
fidelity: full-thread
recurrence: new                 # new | recurring
prior: []                       # ids of earlier documents on the same question
review_after: 2026-12-15        # earliest date in "What would settle it"
resolved: false
verdict:                        # set by the review job: held | broke | unresolved
```

`people` carries the participants. `source` is **required** — the clickable anchor post URL (schema-enforced). Never invent a URL; if the anchor is gone, say so in the body and do not fabricate one.

### Title & summary (sidebar thumbnail)

- `title`: ≤ ~90 characters. A clear question the disagreement answers (not a topic label).
- `summary`: ≤ ~160 characters. One tight sentence for the list thumbnail — no multi-clause dump.

Briefs link via an in-sentence keyword to `/discussions/<id>` (e.g. [discussion](/discussions/<id>)) — not via `### [title](...)` headers or title-as-link-text. Keep titles short enough to skim as a bold lead-in.

`review_after` is the earliest date among the observables. It is what lets the monthly review job find this document without parsing the body. Omit it only when the disagreement is unfalsifiable and the document emits no observables.

## Threshold

Before writing, apply the test: **can the disagreement be stated as a question with a knowable answer?**

If yes, write it. If it is agreement with volume, a dunk, or a values dispute with no empirical content, write nothing.

One exception worth writing: a claim with real stakes that goes *unchallenged* by people who would normally challenge it. Note it as such.

## Sections

Order is fixed. Write only the sections below; do not revive "The read," "State of play," "The positions," "Weight of the room," or "Posts" as separate headings.

### Opening

Bold lead-in stating the essence, then 1–2 sentences of context. Merges the old read and state of play into one tight open — still take a view on who has the better of it.

```
**Operator multi-year AI revenue guidance has the better of overnight cycle-end takes.**
Hock Tan reaffirmed ~$115B FY27 / ~$230B FY28 AI semiconductor revenue; visible replies weight that over weekly slowdown essays. Delivery vs demand (and whether Monday's tape was rates/oil) remains open; deep tail unread (`top-replies`).
```

Be direct. "Baker has the better of this" is a usable sentence. "Both sides make valid points" is not — if that is honestly the state, say what specifically is unresolved and what would resolve it.

The Opening addresses the argument, never who won the exchange. Rhetorical skill is not evidence.

Nothing enters the Opening that is sourced only to an anonymous account with no track record. Unsourced assertions from unknown accounts stay inside Sides / Quotes.

### Sides

Almost like bullet points: what people arguing **FOR** the claim are saying vs **AGAINST** (or Camp A / Camp B if for/against is awkward — prefer clear claim labels still readable as sides). Graham overrides the old ban on literal for/against labels; prefer skimmable sides over jargon camp nouns when both would work.

Keep markers `[named]` `[pseudo]` `[book]` `[principal]` lightly. Drop the old dense nested indent format if it fights skim.

```
**FOR — operator targets outweigh cycle-end narrative**
- @jpinsights [named] — Hock Tan reaffirmed ~$115B FY27 / ~$230B FY28; Anthropic on track as largest custom silicon customer in 2027
- @tonytonggg [named] — reaffirmed multi-year target from the operator is harder evidence than cycle-timing with nothing at stake

**AGAINST — founders/operators can mislead; wait for firmer signals**
- @Sean_Li0525 [anon] — almost all founders will lie
- @TheWaitingGameX [pseudo] — start doubting when Jensen turns negative

*Room: named semis voice citing a principal CEO outlook; anon founder-skepticism is stance, not evidence.*
```

Markers, one or more per voice:

- `[named]` — real name, checkable history
- `[pseudo]` — pseudonymous with a followable record in this domain
- `[anon]` — no track record
- `[principal]` — direct exposure: runs the company, works at the lab, allocates the capital
- `[book]` — exposure to the outcome they argue for

Two to four sides. Never default to two — the most informative position is often a third saying both camps are asking the wrong question (label it clearly, e.g. **THIRD — wrong question**). Order sides by weight of support, not by post order. Partial agreement is its own bullet cluster, marked `partial`, never folded into a side.

**Weight of the room** is optional and soft: at most one short italic line under the sides if composition matters (principal access, book-talking, anon-dominated thread). Do not require a heavy section. Reply volume and engagement are never evidence.

### Quotes

Below Sides, a verbatim quote stack — not a separate Posts dump that looks like a database. Three to eight load-bearing quotes. Each quote attributed and **hyperlinked to the tweet URL**.

```
> Listen more to experts actually running these businesses… Hock Tan just reaffirmed Broadcom's ~$115B… / ~$230B…
> — [JP Insights (@jpinsights)](https://x.com/jpinsights/status/…)

> A reaffirmed multi-year revenue target from the person running the company is a harder data point than a cycle-timing prediction…
> — [Tony Tong (@tonytonggg)](https://x.com/tonytonggg/status/…)
```

Byte-faithful. Typos, capitalization, emoji preserved. Never trim mid-post without marking the omission. Never invent a URL.

Selection: the anchor, the strongest statement of each side, and any post containing a falsifiable figure. Never a post for color, for agreement volume, or because it is a good dunk.

If the anchor was deleted or edited after capture, say so here.

### What would settle it

Two to four observables, each with when it becomes knowable.

```
Broadcom fiscal reporting that AI semiconductor revenue is tracking toward ~$115B in FY27 (or an explicit cut to that path)
Knowable — Broadcom FY27 quarterly prints / guidance updates — through 2026-12-15 earliest checkpoint

TSMC monthly revenue for November, against the CoWoS ramp implied here
Published — 2026-12-10
```

Admissible: a model card, a benchmark at a stated price point, an earnings line, a filing, a shipment number, a policy text, a spread, a price.

Banned: "time will tell," "watch this space," anything that resolves only in hindsight.

If the disagreement is genuinely unfalsifiable — a motive attribution, a counterfactual about intent — say so in one line, emit no observables, and omit `review_after`. That is the finding. Most "is this regulatory capture" threads land here, and saying so is more useful than manufacturing a test.

**This section is what makes the read worth having.** The monthly review job comes back to it and scores the Opening against what happened. Write observables you would be willing to be graded on.

### Delta

Only when `prior` is non-empty. What is new: a participant with access who was not there before, a number that was not on the table, a position that moved.

If nothing is new, emit `No movement since {date}` and stop. The document stands as a recurrence marker. A debate running for the ninth time with no new information is worth one line.

### Verdict

Written by the `review` job only. Never write this section during a sweep.

## Rules

- Never introduce a fact absent from the posts. The Opening is a judgment about the material, not an addition to it.
- Mark `[book]` wherever a speaker has exposure to the outcome they argue for. A fund manager arguing his sector and a lab employee arguing his lab are both talking their book, and the reader must see it without inferring it.
- Screenshots, quote-tweets of deleted posts, and claims sourced to a screenshot are marked unverified and never enter the Opening.
- Side bullets stay short (claim + who); full verbatim text lives in Quotes, each linked to its tweet URL.
- Where a tier 1 person is wrong, say so. Tier is a reason to surface someone, never a reason to agree with them.
