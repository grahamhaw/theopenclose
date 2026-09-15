// Astro content collections. This file is the enforcement layer for the
// frontmatter spec in CLAUDE.md: a document that does not match fails the
// build instead of rendering wrong and quietly rotting the archive.
//
// When you change the schema in CLAUDE.md, change it here in the same commit.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A file whose name starts with `_` is not a document. The agent keeps working
// notes next to the documents it writes — fidelity notes, source-hunting
// scratch — and those have no frontmatter, so without this the build fails on
// them. Underscore is the usual convention for exactly this, and it keeps the
// notes in git rather than forcing them out of the repo.
const docs = (dir: string) =>
  glob({ pattern: ['**/*.md', '!**/_*.md'], base: `./content/${dir}` });

// Shared by every document type.
const base = {
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  people: z.array(z.string()).default([]),
  entities: z.array(z.string()).default([]),
  source: z.string().url().optional(),
  backfill: z.boolean().default(false),
};

const longform = defineCollection({
  loader: docs('longform'),
  schema: z.object({
    ...base,
    type: z.literal('longform'),
    fidelity: z.enum(['transcript', 'asr', 'partial', 'metadata-only', 'secondhand']),
    venue: z.string(),
    host: z.string().optional(),
    duration: z.string().optional(),
    published: z.coerce.date(),
  }).refine(
    (d) => !['metadata-only', 'secondhand'].includes(d.fidelity) || d.source !== undefined,
    { message: 'metadata-only and secondhand documents must name a source URL' }
  ),
});

const discussions = defineCollection({
  loader: docs('discussions'),
  schema: z.object({
    ...base,
    type: z.literal('discussion'),
    fidelity: z.enum(['full-thread', 'top-replies', 'root-only']),
    recurrence: z.enum(['new', 'recurring']).default('new'),
    prior: z.array(z.string()).default([]),
    review_after: z.coerce.date().optional(),
    resolved: z.boolean().default(false),
    verdict: z.enum(['held', 'broke', 'unresolved']).optional(),
    source: z.string().url(), // the anchor post. Required here.
  }).refine(
    (d) => !d.resolved || d.verdict !== undefined,
    { message: 'a resolved discussion must carry a verdict' }
  ).refine(
    (d) => d.recurrence !== 'recurring' || d.prior.length > 0,
    { message: 'recurring discussions must list at least one prior document' }
  ),
});

const news = defineCollection({
  loader: docs('news'),
  schema: z.object({
    ...base,
    type: z.literal('news'),
    fidelity: z.enum(['primary', 'reported', 'secondhand']),
    outlet: z.string(),
    published: z.coerce.date(),
    source: z.string().url(),
  }),
});

const briefs = defineCollection({
  loader: docs('briefs'),
  schema: z.object({
    ...base,
    type: z.literal('brief'),
    edition: z.enum(['premarket', 'postmarket', 'weekend']),
    window_start: z.coerce.date(),
    window_end: z.coerce.date(),
    sources: z.array(z.string()).default([]),
  }),
});

const companies = defineCollection({
  loader: docs('companies'),
  schema: z.object({
    ...base,
    type: z.literal('company'),
    name: z.string(),
    ticker: z.string(),
    coverage_start: z.coerce.date(),
    coverage_end: z.coerce.date(),
    sources: z.array(z.string()).default([]),
  }),
});

const reviews = defineCollection({
  loader: docs('reviews'),
  schema: z.object({
    ...base,
    type: z.literal('review'),
    window_start: z.coerce.date(),
    window_end: z.coerce.date(),
  }),
});

export const collections = { longform, discussions, news, briefs, companies, reviews };
