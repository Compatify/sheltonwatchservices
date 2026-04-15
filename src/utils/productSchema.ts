import type { Watch } from '../data/watches';

const site = 'https://sheltonwatchservices.com';

export function productSchemaForWatch(w: Watch) {
  const desc = [w.reference, w.bezel].filter(Boolean).join(' · ');
  const pageUrl = `${site}/shop/watches/${w.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${w.brand} ${w.model}`.trim(),
    description: desc || undefined,
    brand: { '@type': 'Brand', name: w.brand },
    url: pageUrl,
    offers: {
      '@type': 'Offer',
      price: String(w.price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
      seller: { '@type': 'Organization', name: 'Shelton Watch Services' },
    },
  };
}
