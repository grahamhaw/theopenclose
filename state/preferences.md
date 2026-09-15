# Desk preferences (Graham)

- No company dossiers / no `ingest` for covered companies for now.
- Market delta: S&P 500 always; Nasdaq, 10y, inflation only when relevant.
- Site/Cloudflare build: Claude Code owns this — not this agent.
- Podcasts: prefer YouTube transcripts for processing; use RSS (or Spotify follows once available) only to discover new episodes.
- X: use the connected X API (not brittle browser scraping) for monitoring.
- Politics: skip unless it moves markets or is market-relevant.

- Longform and news follow the same skim grammar as briefs/discussions: bold lead-ins, short title/summary, keyword hyperlinks, human theme labels, no trade language.

## Longform media
- When a podcast/interview is on YouTube, set frontmatter `source` to the YouTube watch URL so the site can render the episode thumbnail at the top of the summary.
- If an official show page must also be cited, keep YouTube as `source` and name the show page in the Opening, or add optional `youtube:` only after content.config.ts allows it.
- **Judgment gate:** daily ~5:00am ET sweep discovers episodes; only high-value ones get queued/treated (principals, falsifiable numbers, theme/mechanism debates, AI-in-investing). Default is SKIP. Do not auto-process every RSS item. Cap full treatments per run (typically 0–2).

## Briefs
- Assemble only from `content/` in-window (skip `backfill`); wires/levels OK with outlet attribution. Section order: Lead (S&P tape line + skim bullets; no Delta) → Positioning (bold human labels, no theme-id jargon/backtick ids) → Top stories → Conversation (Positioning-style items with keyword links to `/discussions/<id>`) → In Their Words (≥3 quotes or omit) → Podcasts & interviews (Positioning-style; keyword links to `/longform/<id>`; stance + fidelity; optional YouTube if `source` is youtube; metadata-only = one line) → What to watch. Title ≤~70 chars; summary ≤~160 chars. Wire keywords hyperlinked to real URLs only (never invent). Premarket ~9:00 / postmarket ~4:30 / weekend Sat ~8:30 ET; ship on time; omit empties.
- **Mix:** AI/semis may be the majority when driving the tape, but briefs must not be AI-only. Give rates/oil/breadth real Lead weight; include broader-market / other-sector items when the window has them (or via wires). Soften concentration without padding filler.

## News sources
- Baseline wires: CNBC, Bloomberg, WSJ.
- Also use judgment: The Information, Reuters, FT, specialist trades (e.g. Seoul Economic Daily for foundry), and other high-signal outlets when they change the tape or the argument.
- Exclude low-signal recycled coverage. Always attribute.
