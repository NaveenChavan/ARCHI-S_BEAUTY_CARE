export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// assetPath is intentionally a passthrough.
// next.config.ts sets basePath="/ARCHI-S_BEAUTY_CARE", which Next.js
// automatically prepends to all asset URLs at build time.
// Adding the prefix here would double it, causing 404s everywhere.
export function assetPath(path: string): string {
  return path;
}
