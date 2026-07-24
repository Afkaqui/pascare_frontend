export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pascare.tech/sitemap.xml',
    host: 'https://pascare.tech',
  };
}
