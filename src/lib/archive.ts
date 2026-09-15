import { getCollection, type CollectionEntry } from 'astro:content';
import { parsePositioning, type Routing } from './positioning';
import { normalizeEntity, slugify } from './slug';

export type CollectionName =
  | 'longform' | 'discussions' | 'news' | 'briefs' | 'companies' | 'reviews';

type AnyEntry = CollectionEntry<CollectionName>;

export interface Doc {
  collection: CollectionName;
  /** Filename slug. Also the id briefs use in `sources` and discussions in `prior`. */
  id: string;
  href: string;
  kind: string;
  title: string;
  summary: string;
  date: Date;
  updated?: Date;
  /** Later of date and updated — what every listing and window sorts on. */
  effective: Date;
  /** True when the document is re-entering a listing through `updated`. */
  isChange: boolean;
  people: string[];
  entities: string[];
  source?: string;
  backfill: boolean;
  fidelity?: string;
  resolved: boolean;
  verdict?: string;
  routings: Routing[];
  unrouted: string[];
  data: any;
  entry: AnyEntry;
}

/** Label shown on every listing row and in the reader breadcrumb. */
export const KIND: Record<CollectionName, string> = {
  briefs: 'Brief',
  longform: 'Long-form',
  discussions: 'Discussion',
  news: 'News',
  companies: 'Dossier',
  reviews: 'Review',
};

export const BASE: Record<CollectionName, string> = {
  briefs: '/briefs',
  longform: '/longform',
  discussions: '/discussions',
  news: '/news',
  companies: '/companies',
  reviews: '/reviews',
};

const COLLECTIONS: CollectionName[] = [
  'briefs', 'longform', 'discussions', 'news', 'companies', 'reviews',
];

/**
 * Only these three formats write a positioning read in the directional
 * `theme-id — STRENGTHENS. why` form. A brief organises by theme in prose and a
 * review carries no positioning read at all, so parsing them would flag correct
 * documents as malformed.
 */
const ROUTES_POSITIONING: ReadonlySet<CollectionName> = new Set([
  'longform', 'news', 'companies',
]);

function toDoc(collection: CollectionName, entry: AnyEntry): Doc {
  const d = entry.data as any;
  const date = d.date as Date;
  const updated = d.updated as Date | undefined;
  const body = entry.body ?? '';
  const { routings, unrouted } = ROUTES_POSITIONING.has(collection)
    ? parsePositioning(body)
    : { routings: [], unrouted: [] };

  // CLAUDE.md: `id` matches the filename. When it does not, briefs linking by
  // `sources` and discussions linking by `prior` silently point at nothing, so
  // say it loudly at build time rather than shipping dead links.
  if (d.id && d.id !== entry.id) {
    console.warn(
      `[archive] id mismatch: ${collection}/${entry.id}.md declares id: ${d.id}. ` +
      `Cross-document links resolve on the filename, so this document is unlinkable.`
    );
  }

  return {
    collection,
    id: entry.id,
    href: `${BASE[collection]}/${entry.id}`,
    kind: KIND[collection],
    title: d.title,
    summary: d.summary ?? '',
    date,
    updated,
    effective: updated && updated > date ? updated : date,
    isChange: Boolean(updated && updated > date),
    people: d.people ?? [],
    entities: d.entities ?? [],
    source: d.source,
    backfill: d.backfill ?? false,
    fidelity: d.fidelity,
    resolved: d.resolved ?? false,
    verdict: d.verdict,
    routings,
    unrouted,
    data: d,
    entry,
  };
}

let cache: Doc[] | null = null;

/** Every document in the archive, newest effective date first. */
export async function loadArchive(): Promise<Doc[]> {
  if (cache) return cache;
  const all: Doc[] = [];
  for (const name of COLLECTIONS) {
    const entries = await getCollection(name as any);
    for (const entry of entries as AnyEntry[]) all.push(toDoc(name, entry));
  }
  all.sort((a, b) => b.effective.getTime() - a.effective.getTime());
  cache = all;
  return all;
}

/**
 * What `/` and every "recent" listing show. Backfill is archive material, not
 * news — forty transcripts ingested on a Tuesday must not become Tuesday's feed.
 * Dossiers are living documents and never enter a dated listing either.
 */
export function recent(docs: Doc[]): Doc[] {
  return docs.filter((d) => !d.backfill && d.collection !== 'companies');
}

export function byCollection(docs: Doc[], name: CollectionName): Doc[] {
  return docs.filter((d) => d.collection === name);
}

/** Group a list into day buckets for the list pane's date headers. */
export function groupByDay(docs: Doc[]): { key: string; label: string; items: Doc[] }[] {
  const out: { key: string; label: string; items: Doc[] }[] = [];
  for (const doc of docs) {
    const key = dayKey(doc.effective);
    let bucket = out.find((b) => b.key === key);
    if (!bucket) {
      bucket = { key, label: dayLabel(doc.effective), items: [] };
      out.push(bucket);
    }
    bucket.items.push(doc);
  }
  return out;
}

// Everything in the archive is stamped ET with an offset. Render it in ET too,
// so a document written at 08:30 ET never reads as 12:30 to the one reader.
const ET = 'America/New_York';

export function dayKey(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: ET, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(d);
}

export function dayLabel(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: ET, weekday: 'short', day: '2-digit', month: 'short', year: 'numeric',
  }).format(d);
}

export function timeLabel(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: ET, hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(d) + ' ET';
}

export function stamp(d: Date): string {
  return `${dayLabel(d)} · ${timeLabel(d)}`;
}

export function isoDate(d: Date): string {
  return d.toISOString();
}

/** People index: slug -> display name + the documents naming them. */
export function peopleIndex(docs: Doc[]): Map<string, { name: string; docs: Doc[] }> {
  const map = new Map<string, { name: string; docs: Doc[] }>();
  for (const doc of docs) {
    for (const name of doc.people) {
      const slug = slugify(name);
      if (!slug) continue;
      const hit = map.get(slug);
      if (hit) {
        // First spelling seen wins as the display name; the rest still collect.
        if (!hit.docs.includes(doc)) hit.docs.push(doc);
      } else {
        map.set(slug, { name, docs: [doc] });
      }
    }
  }
  return map;
}

/**
 * Documents belonging to a company dossier. `entities` carries free text, so
 * match the dossier's name, its ticker and its own `entities` loosely rather
 * than requiring the agent to spell one canonical string every time.
 */
export function docsForCompany(docs: Doc[], dossier: Doc): Doc[] {
  const keys = new Set(
    [dossier.data.name, dossier.data.ticker, ...(dossier.entities ?? [])]
      .filter(Boolean)
      .map((s: string) => normalizeEntity(s))
      .filter(Boolean)
  );
  return docs.filter(
    (d) =>
      d.collection !== 'companies' &&
      d.entities.some((e) => keys.has(normalizeEntity(e)))
  );
}

/** Documents whose positioning read routes to a theme, oldest first. */
export function docsForTheme(docs: Doc[], themeId: string): { doc: Doc; routing: Routing }[] {
  const out: { doc: Doc; routing: Routing }[] = [];
  for (const doc of docs) {
    for (const routing of doc.routings) {
      if (routing.themeId === themeId) out.push({ doc, routing });
    }
  }
  out.sort((a, b) => a.doc.effective.getTime() - b.doc.effective.getTime());
  return out;
}

export function entityIndex(docs: Doc[]): Map<string, { name: string; docs: Doc[] }> {
  const map = new Map<string, { name: string; docs: Doc[] }>();
  for (const doc of docs) {
    for (const name of doc.entities) {
      const slug = slugify(name);
      if (!slug) continue;
      const hit = map.get(slug);
      if (hit) hit.docs.push(doc);
      else map.set(slug, { name, docs: [doc] });
    }
  }
  return map;
}
