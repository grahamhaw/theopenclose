/** Slug used for /people/[name] and any other name-keyed route. */
export function slugify(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Loose equality for entity strings: "NVIDIA Corporation" vs "nvidia". */
export function normalizeEntity(s: string): string {
  return s
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\b(corporation|corp|incorporated|inc|company|co|plc|ltd|limited|holdings|group|nv|sa|ag)\b/g, '')
    .replace(/[^a-z0-9]+/g, '');
}
