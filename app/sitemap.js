const base = 'https://pascare.tech';

const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/nosotros', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/proyectos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/precios', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/cotizacion', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contacto', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap() {
  const now = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
