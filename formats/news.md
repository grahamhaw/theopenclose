# News

Wire stories, filings, press releases, regulatory actions, data prints. Short documents. Most news does not need one.

Buy-side skim first. Same skim grammar as briefs and discussions: short title/summary, **bold lead-in — essence**, keyword hyperlinks to real URLs / site paths, human theme labels, no trade language.

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

`source` is **required** — the real article / filing / release URL (schema-enforced). Briefs keyword-hyperlink to it. Never invent a URL; if only a secondhand relay exists (e.g. an X post quoting Korean media), use that relay URL and mark fidelity accordingly.

### Title & summary (sidebar thumbnail)

- `title`: short — the fact, not a multi-clause lede (aim ≤ ~90 characters).
- `summary`: ≤ ~160 characters. One tight sentence for the list thumbnail.

## Sections

Order is fixed. Do not revive "What happened" as a section label.

### Opening

```
**Bold fact — essence.**
2–3 sentences of attributed facts (merges the old What happened).
```

No interpretation in the Opening — figures and attribution only.

### The numbers

Optional. Bold lead-in form, same spirit as long-form Key math:

```
**Figure — interpretation.**
```

Omit the section entirely when there is nothing to put in it.

### Why it matters

Optional. One Positioning-style paragraph — what this changes (a constraint tightening, a capacity assumption breaking, a timeline moving). Omit if the significance is fully contained in Opening. Most items do not need it.

### Positioning

Optional. Human theme labels (e.g. **AI capex durability**), never raw theme ids as headers. Bold lead-in + short supporting context, prose like brief Positioning. Omit if none. Never invent a theme.

### Connects to

Only when it does. Link with keywords to archive paths (`/discussions/...`, `/longform/...`, `/news/...`), not bare backtick ids. One short line each on why the connection matters. This is what makes the archive compound rather than accumulate.

```
**Pacing as reallocation, not demand destruction** — Baker's mechanism claim that pacing reallocates compute rather than kills spend ([discussion](/discussions/2026-09-14-baker-pacing-compute-margins)).
```

## Rules

- Attribute every figure to the outlet that reported it. Where two outlets differ, give both and say they differ.
- Never merge a company's framing with the reporter's. A company calling a restructuring charge "one-time" is a claim, not a fact.
- Mark self-serving framing where it appears, including in `primary` documents.
- No ticker inference, no price targets, no trade implications.
- When several outlets cover one event, write one document citing the most primary source, not one per outlet.
