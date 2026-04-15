import type { Watch } from '../data/watches';

export function productSchemaForWatch(w: Watch) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${w.brand} ${w.model} ${w.reference.split('·')[0]?.trim() ?? ''}`.trim(),
    brand: { '@type': 'Brand', name: w.brand },
    offers: {
      '@type': 'Offer',
      price: String(w.price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Shelton Watch Services' },
    },
  };
}
