# Review

Monthly. This is the job that tells him whether any of this is working.

Every discussion document commits to a read and lists dated observables that would settle it. Without this job those commitments are never checked, the archive is a log rather than a track record, and there is no way to find out whether the desk's judgment is any good.

## What to read

Every document in `content/discussions/` where `resolved: false` and `review_after` has passed.

For each, check the observables in "What would settle it" against what actually happened. Research is permitted here — this is the one job that goes back to the world, because the whole point is comparing a past read to a present fact.

## Per document

Append a `## Verdict` section to the document itself:

```
## Verdict

Read on 2026-06-14: Baker has the better of this — distillation dependence
still binds and the open-weight leaderboard traces to three closed teachers.

Observable: MLPerf inference v6.0 at the 8-GPU tier, published 2026-12-04.
What happened: two open-weight entrants placed within 4% of the closed
frontier at a third of the cost per token.

HELD in part. The performance gap closed faster than the read allowed for,
but both entrants distilled from closed teachers, which is the claim the
read actually rested on. The cost argument in the third camp aged better
than either principal camp.
```

Then set frontmatter: `resolved: true` and `verdict: held | broke | unresolved`.

- **held** — the read was right on the thing it claimed.
- **broke** — it was wrong. Say so plainly. A review that never returns `broke` is not being run honestly.
- **unresolved** — the observable did not produce a clean answer. Say why, set a new `review_after`, and leave `resolved: false`. Never manufacture a verdict to close a document.

## The monthly document

One file at `content/reviews/YYYY-MM-review.md`.

### Scoreboard

How many reads came due, how many held, how many broke, how many stayed unresolved. Plain counts, and the running total since the archive began.

### Where the desk was wrong

The broken reads, each in two or three sentences: what was claimed, what happened, and what in the reasoning produced the error. Group them where they share a cause.

This section is the reason the document exists. Write it first.

### Theme check

For each theme in `state/themes.json`, what the month's resolved documents did to it, and whether its `breaks_if` condition is closer or further away.

### People check

Any tier 1 or tier 2 person whose positions have not held across three or more resolved documents. Name them, cite the documents, and propose a demotion in `state/people.json` with the reason in the entry.

This is the only evidence-based input to tiering. Everything else is inference from who quotes whom.

## Rules

- Grade the read as written, not as it could be charitably reconstructed. If the read said a thing and the thing did not happen, it broke.
- Rhetorical caveats in the original do not convert a broken read into a held one.
- Never edit the original read. The verdict is appended; the record stands.
- Where an observable turned out to be the wrong test, say so — that is a finding about the archive's method, and it belongs in "Where the desk was wrong."
- Reviews carry no positioning read and never enter briefs.
