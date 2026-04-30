export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'WatchRepairService'],
  name: 'Shelton Watch Services',
  description:
    'Independent watch specialist offering buying, selling, and servicing of fine timepieces in the Lehigh Valley, PA.',
  url: 'https://sheltonwatchservices.com',
  telephone: '+14842914029',
  email: 'info@sheltonwatchservices.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bethlehem',
    addressRegion: 'PA',
    postalCode: '18017',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      description: 'Available by appointment; reach out anytime, response within 24 hours.',
    },
  ],
  hoursAvailable: 'By appointment',
  priceRange: '$$',
  areaServed: ['Bethlehem PA', 'Allentown PA', 'Lehigh Valley PA', 'Easton PA'],
};
