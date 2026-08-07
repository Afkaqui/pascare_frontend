export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/intranet',
    },
    sitemap: 'https://pascare.tech/sitemap.xml',
    host: 'https://pascare.tech',
  };
}
