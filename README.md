# Research desk

A buy-side research archive written by an agent and published as a static site.

`CLAUDE.md` is the agent's operating manual. `formats/` holds one spec per document type. `state/` holds the three files that steer it. Everything else is generated.

## Before anything runs

Three decisions only you can make. The agent cannot infer any of them and will produce nothing useful until they exist.

1. **`state/themes.json`** — your bets. Five to ten. The `breaks_if` field is what the agent checks material against, so write it as something observable, not as a mood.
2. **`state/people.json`** — tiers, plus the URLs of the X Lists to scroll. Tier 1 and tier 2 go in the Lists. Tier 3 does not: they are context-only and surface when quoted inside someone else's thread, so scrolling them is time spent for nothing.
3. **`state/feeds.json`** — RSS URLs for the outlets you follow. Every feed you add is a site the agent does not have to browse.
4. **Which companies get dossiers** — needed only when you run `ingest`.

## Access the agent needs

| Need | Used by | Notes |
|---|---|---|
| A logged-in browser | `capture` | Your X session and any paywalled subscriptions. No API keys, no per-post cost. |
| RSS feeds | `capture` | `state/feeds.json`. Checked before any browsing — most items never need a page load. |
| Transcript source | `longform` | Published transcripts are `fidelity: transcript`. Machine transcription is `asr` and carries weaker rules. |
| Market data | `brief` | **Unspecified — you pick.** See below. |
| Git push | all | The push triggers the build. |

### Browsing is the fragile part

Scrolling is free but it breaks: sessions expire, layouts change, bot checks fire. Three things in the design absorb that.

**`capture` is separate from `sweep`.** Capture scrolls and dumps raw text to `sources/`. Sweep reads that dump and writes documents. So a scroll that dies halfway still leaves usable text, the writing step can be re-run and debugged without scrolling again, and a bad document is fixable without another hour of browsing.

**Every capture writes a `manifest.json`** with per-source item counts. Sweep reads it first.

**A thin capture is reported, never absorbed.** A quiet day and a broken scraper produce identical output — zero documents — and only the manifest distinguishes them. Without it you would spend three weeks reading empty briefs and concluding the market was quiet.

Two things worth knowing going in: automating a logged-in X account is against X's terms and the practical risk is the account, not a lawsuit. And expect to re-authenticate by hand every few weeks — no agent can get through a login challenge for you.

### Market data is the one open input

`formats/brief.md` says the brief reads "market data" and does not say from where, because the right answer depends on what you already pay for. Before the first brief runs, add `state/market.json` listing the instruments the delta should carry, and give the agent one way to fetch them. Anything that returns a last price for a handful of symbols works; the brief needs a level and a prior, nothing more.

Until that exists, the brief will emit every section except the delta, which is a degraded but valid brief.

## Running it

`CLAUDE.md` is the system prompt. It is read fresh on every run, so changes to it and to `formats/` take effect on the next run with no redeploy.

The per-run prompt is one line. If you find yourself writing more than that, the spec is missing something — fix the spec rather than the prompt, or the fix lives in one run and disappears.

```
Run the capture job.
Run the sweep job.
Run the brief job, premarket edition.
Run the brief job, postmarket edition.
Run the brief job, weekend edition.
Run the monthly review.
Ingest the transcripts in sources/nvda/ for NVIDIA, ticker NVDA.
```

### Schedule

| Job | When |
|---|---|
| `capture` | 5:20am, 11:20am, 3:55pm ET weekdays; Sat 6:50am |
| `sweep` | 10 minutes after each capture |
| `longform` | Continuously, or every 20 minutes — it no-ops on an empty queue |
| `brief` | 7:00am, 5:15pm ET weekdays; Sat 8:30am |
| `review` | First Saturday of the month |
| `ingest` | On request |

Nothing waits for anything. A brief ships with whatever finished.

### Runtime rules

These are about the runtime, not the content, which is why they are here and not in `CLAUDE.md`:

- Re-read `CLAUDE.md` and the relevant `formats/` spec at the start of every run. Never work from memory of them.
- On a source failure — X unreachable, a feed down — write what was collected, note the gap in the commit message, and exit cleanly. Never skip the commit, and never substitute recalled context for a source that did not load.
- On a failed build, fix the document and push again in the same run. A red build means the archive is not rendering.
- Never modify `formats/`, `CLAUDE.md`, or `state/themes.json`. Those are the contract.
- Never modify a `state/people.json` entry with `"locked": true`.

## Order of work

The format specs have never been run. Prove them before building anything around them.

1. **Fill in `state/themes.json`.** Nothing works without it.
2. **Run one `ingest`** against transcripts you already have. It is the only job with no external dependency — no X credits, no feeds, no market data, no site. It is the cheapest end-to-end test of whether the documents are worth reading.
3. **Read what comes out. Edit the specs. Run it again.** Two or three passes. This is the whole game, and it is where the quality is decided.
4. **Then wire capture and the schedule.** Run it manually for a week before putting it on a timer.
5. **Then build the site**, once there is enough in the archive that browsing it is better than scrolling a folder.

Building the site first feels productive and proves nothing. If step 3 produces documents you would not read, everything downstream was wasted.

## The site

Built. Astro, rendered to static HTML, deployed to Cloudflare Workers at
[theopenclose.com](https://theopenclose.com). `DEPLOY.md` has the setup; the
short version is that a push to `main` rebuilds and publishes, and nothing else
is required of the agent.

`src/content.config.ts` is the enforcement layer for the frontmatter spec in
`CLAUDE.md` — a document that does not match fails the build rather than
rendering wrong. So `npm run build` is the schema check, and it is worth running
at the end of a job before the push.

The layout is a three-pane reader: views and themes on the left, the documents
in the window in the middle, the open document on the right. Fidelity is on
every listing row and every document, in three visual weights, so a
`secondhand` document and a `transcript` never look alike at a glance.
`/themes/[id]` is the page the folder cannot give you — each bet, its
`breaks_if`, and every document that routed to it in date order with
strengthens / weakens / neutral.

```
npm ci
npm run build      # renders content/ into dist/, fails on a schema violation
npm run preview    # serves dist/ on :4321
```

## You do not need the site to start

The agent writes plain markdown files into a GitHub repo. **GitHub displays markdown.** From the first commit you can read every document in your browser, on your phone, in the GitHub app, or in any markdown editor pointed at a local clone.

The site adds three things the raw folder cannot: theme pages that collect every document bearing on one of your bets in date order, full-text search, and a readable index. All three matter more at 200 documents than at 12 — so the archive being thin is not a reason to think the site is not working.
