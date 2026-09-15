import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { loadArchive, byCollection } from '../lib/archive';

/**
 * Briefs only. The brief is the front door and the only document type written
 * on a schedule — a feed carrying every sweep output would be a firehose of
 * things the reader has already seen inside that day's brief.
 */
export async function GET(context: APIContext) {
  const briefs = byCollection(await loadArchive(), 'briefs')
    .filter((d) => !d.backfill)
    .slice(0, 50);

  return rss({
    title: 'The Open/Close — briefs',
    description: 'Pre-market, post-market and weekend briefs from the research desk.',
    site: context.site!,
    items: briefs.map((doc) => ({
      title: doc.title,
      description: doc.summary,
      pubDate: doc.effective,
      link: doc.href,
    })),
    customData: '<language>en-us</language>',
  });
}
