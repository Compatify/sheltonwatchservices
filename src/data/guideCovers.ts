import type { ImageMetadata } from 'astro';
import coverHowOften from '../assets/watches/photo-1610006329898-2a4f12019450.jpeg';
import coverWorthRepairing from '../assets/watches/premium_photo-1682125779534-76c5debea767.jpeg';
import coverRolexCost from '../assets/watches/photo-1606744188285-d0a49e58f538.jpeg';
import coverStopped from '../assets/watches/photo-1611243705491-71487c2ed137.jpeg';
import coverLosingTime from '../assets/watches/photo-1600003014755-ba31aa59c4b6.jpeg';
import coverAtHome from '../assets/watches/photo-1556453007-ee036169934b.jpeg';

/** Guide hub card + article banner cover — keyed by canonical href */
export const guideCoverByHref: Record<string, ImageMetadata> = {
  '/guide/how-often-service-rolex/': coverHowOften,
  '/guide/is-my-watch-worth-repairing/': coverWorthRepairing,
  '/guide/rolex-service-cost/': coverRolexCost,
  '/guide/watch-stopped-working/': coverStopped,
  '/guide/why-is-my-watch-losing-time/': coverLosingTime,
  '/guide/how-to-service-watch-at-home/': coverAtHome,
};

export function getGuideCover(href: string): ImageMetadata {
  const img = guideCoverByHref[href];
  if (!img) throw new Error(`Missing guide cover for ${href}`);
  return img;
}
