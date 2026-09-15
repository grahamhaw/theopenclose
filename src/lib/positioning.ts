import { THEME_IDS } from './themes';

export type Direction = 'STRENGTHENS' | 'WEAKENS' | 'NEUTRAL';

export interface Routing {
  themeId: string;
  direction: Direction;
  note: string;
}

const HEADING = /^(#{2,4})[ \t]+Positioning read[ \t]*$/im;

/**
 * Pull the "Positioning read" section out of a document body and parse the
 * `theme-id — DIRECTION. why` lines the formats specify.
 *
 * This is the only place the site reads prose rather than frontmatter, and it
 * exists because /themes/[id] cannot be built any other way: the routing lives
 * in the body by design, so that a claim and its theme sit in one place.
 *
 * Unparseable lines are returned as `unrouted` rather than dropped, so a
 * malformed or invented theme id is visible on /themes instead of silently
 * vanishing from the one view that cannot be got from a feed.
 */
export function parsePositioning(body: string): { routings: Routing[]; unrouted: string[] } {
  const routings: Routing[] = [];
  const unrouted: string[] = [];

  const match = HEADING.exec(body);
  if (!match) return { routings, unrouted };

  const level = match[1].length;
  const rest = body.slice(match.index + match[0].length);

  // Stop at the next heading of the same or higher level.
  const stop = new RegExp(`^#{1,${level}}[ \\t]+\\S`, 'm').exec(rest);
  const section = stop ? rest.slice(0, stop.index) : rest;

  for (const raw of section.split(/\n\s*\n/)) {
    const block = raw
      .replace(/^[ \t]*[-*+][ \t]+/, '') // tolerate a list-item form
      .replace(/\s+/g, ' ')
      .trim();
    if (!block) continue;

    const m = /^([a-z0-9][a-z0-9-]*)\s*(?:[—–]|--|-)\s*(STRENGTHENS|WEAKENS|NEUTRAL)\b[.:]?\s*(.*)$/i.exec(block);
    if (!m) {
      unrouted.push(block);
      continue;
    }

    const themeId = m[1].toLowerCase();
    if (!THEME_IDS.has(themeId)) {
      // Never invent a theme. An id that is not in state/themes.json is an
      // error in the document, not a new theme.
      unrouted.push(block);
      continue;
    }

    routings.push({
      themeId,
      direction: m[2].toUpperCase() as Direction,
      note: m[3].trim(),
    });
  }

  return { routings, unrouted };
}
