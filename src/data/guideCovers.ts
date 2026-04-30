import type { ImageMetadata } from 'astro';
import coverHowOften from '../assets/watches/photo-1610006329898-2a4f12019450.jpeg';
import coverWorthRepairing from '../assets/watches/premium_photo-1682125779534-76c5debea767.jpeg';
import coverRolexCost from '../assets/watches/photo-1606744188285-d0a49e58f538.jpeg';
import coverStopped from '../assets/watches/photo-1611243705491-71487c2ed137.jpeg';
import coverLosingTime from '../assets/watches/photo-1600003014755-ba31aa59c4b6.jpeg';
import coverAtHome from '../assets/watches/photo-1556453007-ee036169934b.jpeg';

/** Legacy fallback covers, keyed by journal-entry slug. New CMS-managed entries
 * carry their own `coverPhoto` URL string in frontmatter. */
export const guideCoverBySlug: Record<string, ImageMetadata> = {
  'how-often-service-rolex': coverHowOften,
  'is-my-watch-worth-repairing': coverWorthRepairing,
  'rolex-service-cost': coverRolexCost,
  'watch-stopped-working': coverStopped,
  'why-is-my-watch-losing-time': coverLosingTime,
  'how-to-service-watch-at-home': coverAtHome,
};

export function getGuideCoverBySlug(slug: string): ImageMetadata | undefined {
  return guideCoverBySlug[slug];
}
