import themesFile from '../../state/themes.json';

export interface Theme {
  id: string;
  statement: string;
  breaks_if: string;
}

/**
 * state/themes.json is his file — read, never written, and the only curated
 * vocabulary in the archive. Every positioning read routes against this list
 * and nothing else.
 */
export const THEMES: Theme[] = (themesFile.themes ?? []) as Theme[];

export const THEME_IDS: ReadonlySet<string> = new Set(THEMES.map((t) => t.id));

export function getTheme(id: string): Theme | undefined {
  return THEMES.find((t) => t.id === id);
}
