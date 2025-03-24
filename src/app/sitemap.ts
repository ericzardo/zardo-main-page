import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zardo.dev'

  const routes = [
    '',
    '/cases',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const cases = [
    {
      slug: 'chatt-on',
      lastModified: new Date('2024-03-24'),
    },
    {
      slug: 'ebook-lp',
      lastModified: new Date('2024-03-24'),
    },
  ].map((case_) => ({
    url: `${baseUrl}/cases/${case_.slug}`,
    lastModified: case_.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...cases]
} 