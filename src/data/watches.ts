export type Watch = {
  brand: string;
  model: string;
  reference: string;
  extras: string;
  price: number;
  priceDisplay: string;
  condition: string;
  slug: string;
};

export const watches: Watch[] = [
  {
    brand: 'Rolex',
    model: 'Datejust 41',
    reference: 'Ref. 126334 · Steel & White Gold Fluted Bezel',
    extras: 'Full box & papers · Serviced 2023 · Purchased 2021',
    price: 8450,
    priceDisplay: '$8,450',
    condition: 'Excellent',
    slug: 'rolex-datejust-41-126334',
  },
  {
    brand: 'Omega',
    model: 'Seamaster 300M',
    reference: 'Co-Axial Master Chronometer · Blue Wave Dial',
    extras: 'Box only · Circa 2019 · 42mm',
    price: 3200,
    priceDisplay: '$3,200',
    condition: 'Very Good',
    slug: 'omega-seamaster-300m',
  },
  {
    brand: 'Tudor',
    model: 'Black Bay 58',
    reference: 'Navy Blue Dial · Fabric & Steel Bracelet',
    extras: 'Full set · Unworn with stickers',
    price: 2900,
    priceDisplay: '$2,900',
    condition: 'Mint',
    slug: 'tudor-black-bay-58-navy',
  },
  {
    brand: 'IWC',
    model: 'Portofino Automatic',
    reference: 'Ref. IW356504 · Silver Sunray Dial · 40mm',
    extras: 'Box & papers · Purchased 2021',
    price: 4800,
    priceDisplay: '$4,800',
    condition: 'Excellent',
    slug: 'iwc-portofino-iw356504',
  },
  {
    brand: 'Longines',
    model: 'Master Collection',
    reference: '40mm · Silver Guilloche Dial · Croc Strap',
    extras: 'Box & papers · Recently serviced',
    price: 1650,
    priceDisplay: '$1,650',
    condition: 'Excellent',
    slug: 'longines-master-collection-40',
  },
  {
    brand: 'Seiko',
    model: 'Cocktail Time',
    reference: 'SARB033 · White Textured Dial · 38mm',
    extras: 'No box · Serviced · Original bracelet',
    price: 520,
    priceDisplay: '$520',
    condition: 'Good',
    slug: 'seiko-sarb033-cocktail-time',
  },
];

export function watchesByBrand(brand: string): Watch[] {
  return watches.filter((w) => w.brand.toLowerCase() === brand.toLowerCase());
}
