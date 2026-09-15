// @ts-check
import { defineConfig } from 'astro/config';

// The canonical origin. Only /feed.xml and canonical link tags need it, but RSS
// requires absolute URLs, so it has to be right in production. Set SITE_URL in
// the build environment (Cloudflare build variable, or the GitHub Actions env)
// once the Worker's hostname is known.
const site = process.env.SITE_URL ?? 'https://theopenclose.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    // Off deliberately. CLAUDE.md requires verbatim quotes to be byte-faithful,
    // and smartypants rewrites straight quotes, dashes and ellipses at render
    // time. A quote the agent captured as typed must not be silently cleaned up
    // on its way to the page.
    smartypants: false,
    syntaxHighlight: false,
  },
  devToolbar: { enabled: false },
});
