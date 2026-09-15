# Cloudflare setup — hand this to an agent

One-time. Puts the archive on Cloudflare Workers at `theopenclose.com` and
makes every push to `main` rebuild and publish it.

**This runbook deletes two Cloudflare Pages projects and may delete a DNS
record.** Every destructive step is gated on a check. If a check does not
return what it says it should, stop and report — do not improvise around it.

---

## What the human does first

**Do not give the agent the Cloudflare account password.** It does not need one,
and an agent holding a password plus 2FA has far more access than this task
needs. Create a scoped API token instead:

1. Cloudflare dashboard → **My Profile** → **API Tokens** → **Create Token**
2. Start from the **Edit Cloudflare Workers** template
3. Add one permission the template lacks: **Account → Cloudflare Pages → Edit**
   (needed to retire the old Pages projects)
4. Scope **Account Resources** to your account and **Zone Resources** to
   `theopenclose.com`
5. Create, and copy the token — it is shown once

Confirm the final token has all of:

| Scope | Why |
|---|---|
| Account → Workers Scripts → Edit | deploy the Worker |
| Account → Cloudflare Pages → Edit | delete the old Pages projects |
| Account → Account Settings → Read | resolve the account id |
| Zone → Workers Routes → Edit | attach the custom domain |
| Zone → DNS → Edit | the custom domain writes a DNS record |
| Zone → Zone → Read | resolve the zone id |

Also copy the **Account ID** from the Workers & Pages overview page.

Hand the agent the token and account id as environment variables, not in a file
that gets committed. Revoke the token when the setup is done — none of the
ongoing deploys use it.

---

## Prerequisite: the site has to be on `main`

Workers Builds watches `main`. The site layer currently lives on the branch
`claude/adoring-galileo-m6rutu`. Merge it first — open a PR and merge, or:

```bash
git checkout main && git pull
git merge --no-ff claude/adoring-galileo-m6rutu
git push origin main
```

Nothing below works until `wrangler.jsonc`, `package.json` and `src/` are on
`main`.

---

## Agent instructions

You are setting up hosting for a static site. Work from the repo root. Run the
phases in order and report the result of each before starting the next.

```bash
export CLOUDFLARE_API_TOKEN='...'    # from the human, above
export CLOUDFLARE_ACCOUNT_ID='...'
export CF_API='https://api.cloudflare.com/client/v4'
```

The curl steps pipe through `jq`. If it is not installed, read the raw JSON
instead — do not skip the check.

Wrangler reads both variables automatically. Do not run `wrangler login`, and do
not open a browser until Phase 4.

### Phase 0 — verify the credential and take stock

```bash
npx wrangler whoami
npx wrangler pages project list
```

Then record the zone id and what currently holds the domain:

```bash
curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "$CF_API/zones?name=theopenclose.com" | jq -r '.result[] | .id, .status'

curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "$CF_API/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/theopenclose/domains" \
  | jq -r '.result[].name'
```

**Expected:** `whoami` succeeds; the Pages list contains `theopenclose` and
`theopenclose-staging`; the zone is `active`; the domains call lists
`theopenclose.com`.

**Stop and report if** the token fails, the zone is not `active`, or
`theopenclose.com` is attached to some project other than `theopenclose` — the
rest of this runbook assumes that layout.

### Phase 1 — deploy to workers.dev first, domain untouched

The old site keeps serving `theopenclose.com` throughout this phase. Nothing a
visitor sees changes until Phase 3.

Comment out the `routes` block in `wrangler.jsonc` (it is marked with a
`FIRST DEPLOY:` note saying exactly this), then:

```bash
npm ci
npm run build
npx wrangler deploy
```

The deploy prints a `*.workers.dev` URL. Fetch it and confirm real HTML comes
back:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' https://theopenclose.<subdomain>.workers.dev/
curl -sS https://theopenclose.<subdomain>.workers.dev/ | grep -c 'OPEN/CLOSE'
```

**Expected:** `200`, and at least one match for the wordmark.

**If `wrangler deploy` fails with a name conflict** — the Pages project of the
same name is blocking it. Skip to Phase 2, then return here.

**If `npm run build` fails**, that is a schema error in a document under
`content/`, not a Cloudflare problem. Report the error and stop; the site is
not deployable until the document is fixed.

### Phase 2 — retire the old Pages projects

Only after Phase 1 has served a working site on `workers.dev`.

**First, preserve the old site.** It was direct-upload with no Git connection,
so the deployed assets are the only copy that exists. Ask the human whether
they want anything off it. If yes, save it before deleting — once the project is
gone it is gone.

Release the domain, then delete both projects:

```bash
curl -sS -X DELETE -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "$CF_API/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/theopenclose/domains/theopenclose.com" \
  | jq '.success'

npx wrangler pages project delete theopenclose -y
npx wrangler pages project delete theopenclose-staging -y
npx wrangler pages project list
```

**Expected:** `true` from the domain delete, and a project list with neither
name in it.

Then check for a DNS record left behind:

```bash
ZONE_ID=$(curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "$CF_API/zones?name=theopenclose.com" | jq -r '.result[0].id')

curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "$CF_API/zones/$ZONE_ID/dns_records?name=theopenclose.com" \
  | jq -r '.result[] | "\(.id)  \(.type)  \(.content)"'
```

If a record remains pointing at `theopenclose.pages.dev`, delete it — otherwise
the Worker's custom domain will collide with it:

```bash
curl -sS -X DELETE -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "$CF_API/zones/$ZONE_ID/dns_records/<record-id>" | jq '.success'
```

**Do not delete** MX, TXT, or any record for a different hostname. Only the
apex record pointing at the old Pages project.

### Phase 3 — attach the domain

Restore the `routes` block in `wrangler.jsonc` exactly as it was, then:

```bash
npx wrangler deploy
```

Wrangler creates the DNS record and attaches the hostname. Certificate issuance
takes a few minutes; a 525 or a TLS error in the first few minutes is expected
and resolves itself.

```bash
curl -sS -o /dev/null -w '%{http_code}\n' https://theopenclose.com/
curl -sS https://theopenclose.com/feed.xml | head -5
```

**Expected:** `200`, and the feed returns XML.

**If wrangler prompts** about an existing DNS record, a record survived Phase 2.
Answer no, go back and remove it, then redeploy.

### Phase 4 — connect Workers Builds so pushes deploy themselves

This is the only step that needs the dashboard — connecting a repo runs the
Cloudflare GitHub App authorization, which has no API equivalent. Either do it
in the logged-in browser or hand it back to the human.

1. Cloudflare dashboard → **Workers & Pages** (labelled **Compute** in some
   accounts) → open the `theopenclose` Worker
2. **Settings** → **Build** → **Connect** to a Git repository
3. Authorize the Cloudflare GitHub App for `grahamhaw/theopenclose` if asked
4. Set:
   - **Branch** — `main`
   - **Build command** — `npm run build`
   - **Deploy command** — `npx wrangler deploy`
   - **Root directory** — `/`
5. Add a build **environment variable**: `SITE_URL` = `https://theopenclose.com`
6. Save

Then prove it end to end: push a trivial commit to `main` and confirm a build
starts in the Worker's Builds tab and finishes green.

**Do not** add `CLOUDFLARE_API_TOKEN` to the GitHub repo secrets. The workflow
at `.github/workflows/deploy.yml` checks for it and would start deploying too —
every push would then deploy twice. Left alone, that workflow just builds on
each push, which catches a schema error in GitHub as well as in Cloudflare.

---

## Report back

- The `workers.dev` URL and the response code from Phase 1
- Whether anything was saved off the old Pages projects before deleting
- Whether a leftover DNS record had to be removed
- The response code for `https://theopenclose.com/` from Phase 3
- Whether the Phase 4 test push produced a green build
- Anything that did not match an **Expected** line

Remind the human to revoke the API token — the ongoing deploys run on Workers
Builds and do not use it.
