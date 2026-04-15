import type { ImageMetadata } from 'astro';
import rolexDatejust from '../assets/watches/photo-1610006329898-2a4f12019450.jpeg';
import omegaSeamaster from '../assets/watches/photo-1773755060442-6d128b70dd20.jpeg';
import tudorBlackBay from '../assets/watches/photo-1767009951352-a271b6155eeb.jpeg';
import iwcPortofino from '../assets/watches/premium_photo-1723561230205-3a8f566f8ba9.jpeg';
import longinesMaster from '../assets/watches/hunters-race-MQwdj_ZyJAk-unsplash.jpeg';
import seikoCocktail from '../assets/watches/premium_photo-1728249572934-f56a637a92a4.jpeg';

/** Cover image per shop watch slug — used on cards and detail primary photo */
export const watchCoverBySlug: Record<string, ImageMetadata> = {
  'rolex-datejust-41-126334': rolexDatejust,
  'omega-seamaster-300m': omegaSeamaster,
  'tudor-black-bay-58-navy': tudorBlackBay,
  'iwc-portofino-iw356504': iwcPortofino,
  'longines-master-collection-40': longinesMaster,
  'seiko-sarb033-cocktail-time': seikoCocktail,
};

export function getWatchCoverImage(slug: string): ImageMetadata | undefined {
  return watchCoverBySlug[slug];
}
