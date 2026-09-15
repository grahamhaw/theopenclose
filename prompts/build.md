# One-time build prompt

Paste this to a coding agent with the repo in its working directory. It runs once.

---

This repo is a research archive written by an agent and published as a static site. Build the site layer. Do not write any research content.

**Read first:** `CLAUDE.md`, then every file in `formats/`, then `src/content.config.ts`.

**Treat as contract, do not modify:** `CLAUDE.md`, `formats/*`, `state/themes.json`. If the Astro schema and `CLAUDE.md` disagree about a field, stop and say so rather than picking one.

## Build

Astro, deployed to Cloudflare Workers with static assets. Not Pages — Cloudflare's docs direct new projects to Workers.

`src/content.config.ts` already defines the collections and is authoritative for frontmatter. Wire it up; extend it only if a route needs a field that the specs in `formats/` already require.

### Routes

- `/` — reverse-chronological index of everything except backfill, with type, date, title, summary, and fidelity marker.
- `/briefs/`, `/briefs/[id]` — briefs are the front door. The most recent brief should be reachable in one click from `/`.
- `/longform/[id]`, `/discussions/[id]`, `/news/[id]`, `/reviews/[id]`
- `/companies/[id]` — the dossier, plus a list of every document whose `entities` includes that company, oldest first.
- `/themes/[id]` — read `state/themes.json`. For each theme: the statement, the `breaks_if`, and every document whose positioning read routes to it, in date order, showing strengthens/weakens/neutral. **This is the most important page on the site.** It is the one view that cannot be got from a feed.
- `/people/[name]` — every document whose `people` includes them.
- `/archive` — everything, backfill included, filterable by type.

### Requirements

- **Pagefind** for search, indexed at build, reachable from every page.
- **Every collection must render when empty.** The archive starts empty and stays partly empty for weeks. An empty collection is a normal state, not a 500.
- **Fidelity marker visible on every document and every listing row.** A `secondhand` document and a `transcript` must never look alike at a glance. This is a content rule from `CLAUDE.md` and the site has to honor it.
- **Backfill documents are excluded from `/` and from any "recent" listing.** They appear on `/archive`, `/companies/*`, `/themes/*`, and in search.
- Documents with `resolved: true` show their verdict in listing rows.
- RSS at `/feed.xml` covering briefs only.

### Do not

- Do not design. Readable serif body, generous measure, no JS beyond Pagefind. This is a reading surface for one person.
- Do not add a CMS, an admin route, or any write path. The repo is the database and the agent is the only author.
- Do not add analytics.

## Verify before you finish

1. Generate 3 fixture documents per collection, covering every `fidelity` value and at least one `resolved: true` discussion and one `backfill: true` longform. Build. Confirm every route renders and the theme pages correctly aggregate positioning reads.
2. Write one fixture that violates the schema — a discussion with `resolved: true` and no verdict. Confirm the build **fails**. If it does not, the schema is not being enforced and that is the one thing this layer exists to do.
3. Delete all fixtures. Build again with empty collections. Confirm every route still renders.
4. Report the deploy URL and what a first push should trigger.
