# Discussion

X threads, reply chains, and argument clusters. The document maps a live disagreement: which positions exist, who is behind each, and which side the evidence currently favors.

Unlike long-form, **this format takes a view.** The reader follows these people for their judgment, and refusing to say who has the better of an argument wastes the reason he is reading.

## Fidelity

| Marker | Means |
|---|---|
| `full-thread` | Read the thread including the tail |
| `top-replies` | Read the visible replies only |
| `root-only` | The anchor post, no replies read |

`root-only` is restricted to frontmatter plus state of play. No positions, no read. A disagreement cannot be mapped from one side of it.

`top-replies` states in the state of play that the tail is unread. An argument that only appears at reply depth four is invisible here and the reader needs to know that.

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

`people` carries the participants. `source` carries the anchor post URL.

`review_after` is the earliest date among the observables. It is what lets the monthly review job find this document without parsing the body. Omit it only when the disagreement is unfalsifiable and the document emits no observables.

## Threshold

Before writing, apply the test: **can the disagreement be stated as a question with a knowable answer?**

If yes, write it. If it is agreement with volume, a dunk, or a values dispute with no empirical content, write nothing.

One exception worth writing: a claim with real stakes that goes *unchallenged* by people who would normally challenge it. Note it as such.

## Sections

### The read

Open with it. Two to four sentences: which position the evidence currently favors, why, and what would change your mind.

Be direct. "Baker has the better of this" is a usable sentence. "Both sides make valid points" is not — if that is honestly the state, say what specifically is unresolved and what would resolve it.

The read addresses the argument, never who won the exchange. Rhetorical skill is not evidence.

### State of play

One paragraph, 60–110 words. What is contested, who is contesting it, what turns on the answer. The stakes clause goes last.

Nothing enters this paragraph that is sourced only to an anonymous account with no track record. Unsourced assertions from unknown accounts stay inside their position block.

### The positions

Two to four camps. Never default to two — the most informative position is often the third one saying both camps are asking the wrong question.

Label each camp by its **claim**, as a noun phrase. Banned labels: for, against, bulls, bears, supporters, critics.

```
Distillation dependence still binds.
  @GavinSBaker [named] [book] — 'you cannot distill what the frontier lab
  hasn't shipped, and they stopped shipping in March'
  @dwarkesh_sp [named] — 'every open model in the top ten traces back to
  three closed teachers'

The data equation is already solved.
  @some_lab_eng [pseudo] [principal] — 'synthetic pipelines passed human
  data on quality eighteen months ago, internally'
```

Markers, one or more per voice:

- `[named]` — real name, checkable history
- `[pseudo]` — pseudonymous with a followable record in this domain
- `[anon]` — no track record
- `[principal]` — direct exposure: runs the company, works at the lab, allocates the capital
- `[book]` — exposure to the outcome they argue for

Order camps by weight of support, not by post order and not by whether they agree with the anchor. Partial agreement is its own entry, marked `partial`, never folded into a camp.

### Weight of the room

Two to four sentences on what the composition actually supports. Does any camp contain someone with direct access? Is anyone reversing a position they held publicly?

- Reply volume is not refutation. A ratio'd post is not a disproved post.
- Engagement measures reach, never correctness, and is never cited as evidence for a claim.
- A thread dominated by anonymous accounts is a finding. State it.

### What would settle it

Two to four observables, each with when it becomes knowable.

```
MLPerf inference v6.0 results at the 8-GPU tier
Published — early December 2026

TSMC monthly revenue for November, against the CoWoS ramp implied here
Published — 2026-12-10
```

Admissible: a model card, a benchmark at a stated price point, an earnings line, a filing, a shipment number, a policy text, a spread, a price.

Banned: "time will tell," "watch this space," anything that resolves only in hindsight.

If the disagreement is genuinely unfalsifiable — a motive attribution, a counterfactual about intent — say so in one line, emit no observables, and omit `review_after`. That is the finding. Most "is this regulatory capture" threads land here, and saying so is more useful than manufacturing a test.

**This section is what makes the read worth having.** The monthly review job comes back to it and scores the read against what happened. Write observables you would be willing to be graded on.

### Delta

Only when `prior` is non-empty. What is new: a participant with access who was not there before, a number that was not on the table, a position that moved.

If nothing is new, emit `No movement since {date}` and stop. The document stands as a recurrence marker. A debate running for the ninth time with no new information is worth one line.

### Posts

Three to eight verbatim cards: display name, handle, timestamp ET, full text, engagement, URL.

Byte-faithful. Typos, capitalization, emoji preserved. Never trim mid-post without marking the omission.

Selection: the anchor, the strongest statement of each camp, and any post containing a falsifiable figure. Never a post for color, for agreement volume, or because it is a good dunk.

If the anchor was deleted or edited after capture, say so here.

### Verdict

Written by the `review` job only. Never write this section during a sweep.

## Rules

- Never introduce a fact absent from the posts. The read is a judgment about the material, not an addition to it.
- Mark `[book]` wherever a speaker has exposure to the outcome they argue for. A fund manager arguing his sector and a lab employee arguing his lab are both talking their book, and the reader must see it without inferring it.
- Screenshots, quote-tweets of deleted posts, and claims sourced to a screenshot are marked unverified and never enter the state of play.
- Quote fragments in position blocks stay under about 35 words. Full posts live only in the Posts section.
- Where a tier 1 person is wrong, say so. Tier is a reason to surface someone, never a reason to agree with them.
