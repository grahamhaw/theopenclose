# Company dossier

**Parked** — Graham not covering company dossiers for now; do not write new dossiers. Spec below kept intact for future.

One living document per covered company, at `content/companies/<slug>.md`. Rebuilt whenever new material for that company enters the archive.

This format exists because the value of forty earnings calls is not forty summaries. It is the trajectory: what management claimed, whether it held, what quietly changed, and what they keep declining to answer. That is the thing a reader cannot do himself, because it requires holding the whole corpus at once.

## Inputs

Read every document in `content/` whose `entities` includes this company. Long-form carries the weight; news and discussions supply checks against what management said.

**Read documents, never raw transcripts.** If a claim is not in a document, it does not belong in the dossier. Where a document is `metadata-only` or `secondhand`, it contributes to coverage but never to the claim ledger.

## Frontmatter

```yaml
id: nvda
type: company
title: NVIDIA Corporation
summary: >
  Accelerator and networking supplier to the hyperscalers. Twenty-eight
  quarters of coverage; the claim ledger runs from the FY20 supply comments.
name: NVIDIA Corporation
ticker: NVDA
date: 2026-02-14T00:00:00-05:00
updated: 2026-09-14T11:20:00-04:00
entities: [NVIDIA]
coverage_start: 2019-05-16
coverage_end: 2026-08-27
sources: [2019-05-16-nvda-q1-fy20, 2019-08-15-nvda-q2-fy20]
```

`title` and `summary` come from the shared schema in `CLAUDE.md` and are
required here as they are everywhere else. `title` is the company name;
`summary` is what the dossier currently says, rewritten whenever it is rebuilt.
`name` is separate because the dossier renders it as the company's legal name
while `title` is what appears in a listing row.

`ticker` is supplied by him in the ingest request, or already present in the file. Never infer it. The hard rule against ticker inference holds here — this field exists because he named the company, not because you recognized it.

## Sections

### Standing

One paragraph, 80–140 words. What the company does, stated as its function rather than its marketing. The shape of the business as management currently describes it, and how many quarters of coverage this dossier rests on. No thesis, no view — the claim ledger carries the evidence and the reader draws the view.

### Claim ledger

The core of the document. Every dated, falsifiable claim management made, with what happened.

```
Supply constrained on HBM through at least H1 FY26.
Said — Q3 FY25 call, 2024-11-20, Colette Kress, prepared remarks
Status — HELD. Q1 FY26 call reiterated constraint; Q2 FY26 guided supply
normalizing, three quarters later than the original window implied.
```

Status is one of:

- **HELD** — the claim was borne out. Name what showed it.
- **BROKE** — it was not. Name what showed it.
- **OPEN** — not yet knowable. Name when it becomes knowable.
- **DROPPED** — management stopped making the claim without ever addressing it. State the quarter it last appeared. This is the most interesting status and the easiest to miss.

Ordered by materiality, not chronology. Only claims with a date, a number, or a defined outcome — "we feel great about the opportunity" is not a claim. Cap at twenty; if there are more, keep the twenty whose status is most load-bearing — a BROKE or a DROPPED before an OPEN, a quantified claim before a directional one.

### Trajectory

Two to five threads, each tracking how the story on one subject moved across the coverage window. Each is a short labeled block: the subject, then three to six dated waypoints, then one sentence on the direction.

Only for subjects where the story actually moved. A subject management has described identically for twelve quarters produces no thread, and stability itself is worth one line in Standing rather than a thread here.

### Standing questions

What analysts keep asking and management keeps not answering. Each: the question, how many calls it has been raised on, and the form the non-answer takes.

Admissible only when the question recurs across three or more calls. A single deflection is not a pattern. If nothing qualifies, emit nothing.

### Language drift

Only when the evidence is strong. A phrase that appeared in three or more consecutive calls and then stopped, or entered and persisted. Each: the phrase verbatim, the quarters it spans, and one sentence on what the change coincided with.

This section is prone to false positives. When in doubt, omit it. A phrase disappearing once is noise.

## Rules

- Prepared remarks and Q&A are different in kind. The claim ledger draws mostly from Q&A, where analysts force specificity. Language drift draws mostly from prepared remarks, where the wording is chosen.
- Attribute every claim to a named speaker, a call, and a date. An unattributed claim in a ledger is useless six quarters later.
- Management framing is a claim, never a fact. A company calling a segment "strategic" is describing its hopes.
- Never compute a growth rate, a margin, or a sequential change management did not state.
- The dossier never carries a price, a valuation, or a target.
- When rebuilt, `updated` moves and `date` does not. The dossier does not enter briefs.
