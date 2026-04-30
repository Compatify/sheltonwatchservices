import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type WatchEntry = CollectionEntry<'watches'>;
export type Watch = WatchEntry['data'];

export async function getWatches(): Promise<Watch[]> {
  const entries = await getCollection('watches');
  return entries.map((e) => e.data);
}

export async function getWatchEntries(): Promise<WatchEntry[]> {
  return await getCollection('watches');
}

export function watchDetailPath(slug: string): string {
  return `/shop/watches/${slug}/`;
}

export async function watchesByBrand(brand: string): Promise<Watch[]> {
  const all = await getWatches();
  return all.filter((w) => w.brand.toLowerCase() === brand.toLowerCase());
}
