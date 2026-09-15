# Deploying the archive

The site is a static build. `astro build` renders every document in `content/`
into `dist/`, `pagefind` indexes `dist/` in place, and the whole directory ships
to Cloudflare as a Worker that serves assets and nothing else. There is no
server, no database and no write path — the repo is the database.

**The build is the schema gate.** `src/content.config.ts` rejects a document
that does not match the frontmatter spec in `CLAUDE.md`, so a malformed document
fails the deploy instead of rendering wrong. A red build means the archive is
not rendering and the fix is the document, not the site.

Run it locally before pushing:

```
npm ci
npm run build      # fails on any schema violation
npm run preview    # serves dist/ on :4321
```

Astro 5 caches parsed content in `node_modules/.astro`, so a document you
deleted or renamed can survive into a local build. `rm -rf node_modules/.astro`
clears it. CI never hits this — `npm ci` starts from an empty `node_modules`.

## Auto-deploy: pick one path

Both paths do the same thing — rebuild and deploy on every push to `main`. Set
up one. `.github/workflows/deploy.yml` is written so they do not collide: it
always builds (which validates the schema) and only deploys when
`CLOUDFLARE_API_TOKEN` is present.

### Path A — Cloudflare Workers Builds (recommended)

Cloudflare watches the repo itself. No secrets in GitHub, one place to look when
a deploy fails.

1. Cloudflare dashboard → **Compute (Workers)** → **Create** → **Import a
   repository**. Authorise the GitHub app for `grahamhaw/theopenclose` if asked.
2. Pick the repo. Set:
   - **Branch** — `main`
   - **Build command** — `npm run build`
   - **Deploy command** — `npx wrangler deploy`
   - **Root directory** — `/`
3. Add a build **environment variable**: `SITE_URL` = `https://theopenclose.com`.
   Only `/feed.xml` and the canonical tags need it, but RSS requires absolute
   URLs so it has to be right.
4. Save and deploy.

Leave `CLOUDFLARE_API_TOKEN` unset in GitHub. The Actions workflow then runs as
a pure validation check on each push and never deploys.

### Path B — GitHub Actions

Build logs sit next to the commits the agent is pushing.

1. Cloudflare dashboard → **My Profile** → **API Tokens** → **Create Token** →
   use the **Edit Cloudflare Workers** template, scoped to the
   `theopenclose.com` zone. If attaching the custom domain fails, add
   **Zone → DNS → Edit** to the token.
2. Copy your **Account ID** from the Workers & Pages overview.
3. GitHub → repo **Settings** → **Secrets and variables** → **Actions**, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push. The deploy step activates as soon as the token exists.

Do **not** also connect Workers Builds, or every push deploys twice.

## Migrating off the old Pages project

The account already has a **Pages** project called `theopenclose`
(`theopenclose.pages.dev` + one other domain, no Git connection) and a
`theopenclose-staging` alongside it. Both were direct-upload — no repo behind
them — so the deployed assets are the only copy of whatever they served. Two
things collide with this deploy:

1. **`theopenclose.com` is attached to the old Pages project.** A hostname can
   belong to one Pages project or one Worker, never both, so the Worker cannot
   claim it until Pages lets go.
2. **The names collide.** Workers and Pages projects share a namespace in the
   unified dashboard, so a Worker named `theopenclose` will be refused while the
   Pages project of that name exists.

Do this in order:

1. **Keep anything you want from the old site first.** Pages → `theopenclose` →
   Deployments → the live one → download, or just save the pages you care
   about. Nothing in this repo reproduces it.
2. **Deploy the new Worker to `workers.dev` first.** Comment out the `routes`
   block in `wrangler.jsonc`, deploy, and check the site on
   `theopenclose.<your-subdomain>.workers.dev`. Nothing about the live domain
   changes yet, so there is no window where `theopenclose.com` is down.
3. **Release the domain.** Pages → `theopenclose` → Custom domains → remove
   `theopenclose.com`. This deletes the DNS record Pages created.
4. **Delete both Pages projects** — `theopenclose` and `theopenclose-staging`.
   That frees the name.
5. **Restore the `routes` block and redeploy.** The Worker creates the DNS
   record and takes the domain. Expect a few minutes for the certificate.

`workspace` and `mobile` are separate Workers and are not affected.

If you would rather not touch the old projects yet, give the Worker a different
`name` in `wrangler.jsonc` and leave `routes` out. It then lives on
`workers.dev` indefinitely alongside the old site.

## The domain

`wrangler.jsonc` declares the custom domain:

```jsonc
"routes": [{ "pattern": "theopenclose.com", "custom_domain": true }]
```

The zone is already in the account, so the first deploy creates and maintains
the DNS record itself — nothing to add by hand. To serve `www` as well, add a
second entry with `"pattern": "www.theopenclose.com"`. To go back to the
`workers.dev` subdomain, delete the `routes` block.

## What the agent has to do

Nothing beyond what it already does. Each job ends in `git push`, the push
triggers a build, the build publishes. The one thing worth adding to a run is
`npm run build` before the push, so a schema error surfaces in the run that
caused it rather than as a red deploy minutes later.

## Search index

Pagefind runs after `astro build` and writes `dist/pagefind/`. It is the only
JavaScript the site ships, and it only loads on `/search`. Every other page is
HTML and CSS, so the archive reads with scripts disabled.

Retrieval otherwise runs on `people` and `entities` — `/people/[name]` and
`/companies/[id]`. There is no tag or theme vocabulary to keep in sync.

## Indexing

Every page carries `<meta name="robots" content="noindex, nofollow">`. The site
is public — anyone with the URL can read it — but it is not offered to search
engines, which suits an archive that quotes other people's material. Remove the
tag in `src/layouts/Shell.astro` to reverse that.
