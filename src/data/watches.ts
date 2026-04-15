export type Watch = {
  brand: string;
  model: string;
  /** Short reference, e.g. Ref. 126334 */
  reference: string;
  bezel?: string;
  year: string;
  caseSize: string;
  movement: string;
  condition: string;
  includes: string;
  serialRange?: string;
  price: number;
  priceDisplay: string;
  description: string;
  slug: string;
  /** Owner: replace with real paths under src/assets/watches/ when photos exist */
  photos: string[];
};

export const watches: Watch[] = [
  {
    brand: 'Rolex',
    model: 'Datejust 41',
    reference: 'Ref. 126334',
    bezel: 'Steel & White Gold Fluted Bezel',
    year: '2021',
    caseSize: '41mm',
    movement: 'Automatic, Cal. 3235',
    condition: 'Excellent',
    includes: 'Full box & papers · Serviced 2023 · Purchased 2021',
    price: 8450,
    priceDisplay: '$8,450',
    description:
      '[OWNER: Write 2–3 sentences about this specific watch — its history, what makes it special, why you are proud to sell it.]',
    slug: 'rolex-datejust-41-126334',
    photos: ['[OWNER: photo 1 path]', '[OWNER: photo 2 path]', '[OWNER: photo 3 path]'],
  },
  {
    brand: 'Omega',
    model: 'Seamaster 300M',
    reference: 'Co-Axial Master Chronometer',
    bezel: 'Blue wave dial · Steel',
    year: '2019',
    caseSize: '42mm',
    movement: 'Automatic, Master Chronometer',
    condition: 'Very Good',
    includes: 'Box only · Circa 2019',
    price: 3200,
    priceDisplay: '$3,200',
    description:
      '[OWNER: Write 2–3 sentences about this specific watch — its history, what makes it special, why you are proud to sell it.]',
    slug: 'omega-seamaster-300m',
    photos: ['[OWNER: photo 1 path]', '[OWNER: photo 2 path]', '[OWNER: photo 3 path]'],
  },
  {
    brand: 'Tudor',
    model: 'Black Bay 58',
    reference: 'Navy Blue',
    bezel: 'Fabric & steel bracelet',
    year: '—',
    caseSize: '39mm',
    movement: 'Automatic',
    condition: 'Mint',
    includes: 'Full set · Unworn with stickers',
    price: 2900,
    priceDisplay: '$2,900',
    description:
      '[OWNER: Write 2–3 sentences about this specific watch — its history, what makes it special, why you are proud to sell it.]',
    slug: 'tudor-black-bay-58-navy',
    photos: ['[OWNER: photo 1 path]', '[OWNER: photo 2 path]', '[OWNER: photo 3 path]'],
  },
  {
    brand: 'IWC',
    model: 'Portofino Automatic',
    reference: 'Ref. IW356504',
    bezel: 'Polished steel',
    year: '2021',
    caseSize: '40mm',
    movement: 'Automatic',
    condition: 'Excellent',
    includes: 'Box & papers · Purchased 2021',
    price: 4800,
    priceDisplay: '$4,800',
    description:
      '[OWNER: Write 2–3 sentences about this specific watch — its history, what makes it special, why you are proud to sell it.]',
    slug: 'iwc-portofino-iw356504',
    photos: ['[OWNER: photo 1 path]', '[OWNER: photo 2 path]', '[OWNER: photo 3 path]'],
  },
  {
    brand: 'Longines',
    model: 'Master Collection',
    reference: '40mm dress',
    bezel: 'Silver guilloche dial',
    year: '—',
    caseSize: '40mm',
    movement: 'Automatic',
    condition: 'Excellent',
    includes: 'Box & papers · Recently serviced',
    price: 1650,
    priceDisplay: '$1,650',
    description:
      '[OWNER: Write 2–3 sentences about this specific watch — its history, what makes it special, why you are proud to sell it.]',
    slug: 'longines-master-collection-40',
    photos: ['[OWNER: photo 1 path]', '[OWNER: photo 2 path]', '[OWNER: photo 3 path]'],
  },
  {
    brand: 'Seiko',
    model: 'Cocktail Time',
    reference: 'SARB033',
    bezel: 'White textured dial',
    year: '—',
    caseSize: '38mm',
    movement: 'Automatic',
    condition: 'Good',
    includes: 'No box · Serviced · Original bracelet',
    price: 520,
    priceDisplay: '$520',
    description:
      '[OWNER: Write 2–3 sentences about this specific watch — its history, what makes it special, why you are proud to sell it.]',
    slug: 'seiko-sarb033-cocktail-time',
    photos: ['[OWNER: photo 1 path]', '[OWNER: photo 2 path]', '[OWNER: photo 3 path]'],
  },
];

export function watchDetailPath(slug: string): string {
  return `/shop/watches/${slug}/`;
}

export function watchesByBrand(brand: string): Watch[] {
  return watches.filter((w) => w.brand.toLowerCase() === brand.toLowerCase());
}
