# News

Wire stories, filings, press releases, regulatory actions, data prints. Short documents. Most news does not need one.

## Threshold

A news item earns a document only when it carries information the reader could act on and would not otherwise see:

- A number that changes a model: capex, backlog, capacity, guidance, headcount, a price.
- A commitment with a date attached.
- A filing disclosure that was not in the press release.
- A policy or regulatory change with a defined mechanism.

**Do not write documents for:** price action without a cause, analyst rating changes, recycled coverage of something already in the archive, anything where the headline is the whole content.

Price action, rating changes, and the general tape belong in briefs, which pull market data directly. If the only thing worth saying fits in a brief's Top stories line, put it there and write no document.

## Fidelity

| Marker | Means |
|---|---|
| `primary` | Read from the filing, the company release, or the agency document |
| `reported` | Read from an outlet's account of it |
| `secondhand` | An account of someone else's account |

A wire story about a filing is `reported`, not `primary`. A press release read directly is `primary` and still carries the company's spin — the marker describes distance from the source, never reliability.

## Frontmatter

Shared schema from `CLAUDE.md`, plus:

```yaml
fidelity: primary
outlet: Reuters                 # or the filer, for primary documents
published: 2026-09-14T06:12:00-04:00
```

`entities` carries the companies named — it is what puts this document on their dossiers.

## Sections

### What happened

Two to four sentences. The facts, with figures, attributed. No interpretation.

### The numbers

Only when there are figures worth isolating. Same two-line form as long-form key math:

```
$4.2bn of the $6bn raise allocated to a single Arizona site
Concentration — one site now carries most of the announced build.
```

Omit the section entirely when there is nothing to put in it.

### Why it matters

One paragraph, and only when it is not obvious. What this changes — a constraint tightening, a capacity assumption breaking, a timeline moving.

If the significance is fully contained in "what happened," omit this section. Most items do not need it.

### Connects to

Only when it does. Documents already in the archive that this bears on, by id, with one line each. A TSMC capacity number connects to whatever discussion argued about supply constraint. This is what makes the archive compound rather than accumulate.

## Rules

- Attribute every figure to the outlet that reported it. Where two outlets differ, give both and say they differ.
- Never merge a company's framing with the reporter's. A company calling a restructuring charge "one-time" is a claim, not a fact.
- Mark self-serving framing where it appears, including in `primary` documents.
- No ticker inference, no price targets, no trade implications.
- When several outlets cover one event, write one document citing the most primary source, not one per outlet.
