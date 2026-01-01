import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webdynamiq.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/maintenance',
    '/pricing',
    '/pricing/how-it-works',
    '/privacy',
    '/process',
    '/services',
    '/terms',
    '/thank-you',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
