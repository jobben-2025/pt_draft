/**
 * Prefixed einen Pfad mit dem Astro base path (für GitHub Pages Subpath-Deploys).
 * Lokal/Custom-Domain: base = "/" → Pfad bleibt unverändert.
 * GitHub Pages: base = "/pt_draft" → "/ueber-uns/" wird "/pt_draft/ueber-uns/"
 */
export function basePath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // base ist "/" (default) oder "/pt_draft" (GitHub Pages)
  if (!base || base === '/') return path;
  // Doppelte Slashes vermeiden
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
