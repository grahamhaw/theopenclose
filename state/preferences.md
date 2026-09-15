# Desk preferences (Graham)

- No company dossiers / no `ingest` for covered companies for now.
- Market delta: S&P 500 always; Nasdaq, 10y, inflation only when relevant.
- Site/Cloudflare build: Claude Code owns this — not this agent.
- Podcasts: prefer YouTube transcripts for processing; use RSS (or Spotify follows once available) only to discover new episodes.
- X: use the connected X API (not brittle browser scraping) for monitoring.
- Politics: skip unless it moves markets or is market-relevant.

## Longform media
- When a podcast/interview is on YouTube, set frontmatter `source` to the YouTube watch URL so the site can render the episode thumbnail at the top of the summary.
- If an official show page must also be cited, keep YouTube as `source` and name the show page in the abstract, or add optional `youtube:` only after content.config.ts allows it.
