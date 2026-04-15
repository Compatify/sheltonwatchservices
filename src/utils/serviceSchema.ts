export function serviceSchema(serviceType: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: { '@type': 'LocalBusiness', name: 'Shelton Watch Services' },
    areaServed: 'Lehigh Valley, PA',
    description,
  };
}
