import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageMotion from '../components/PageMotion';

export const metadata = {
  metadataBase: new URL('https://pascare.tech'),
  title: { default: 'Pascare | Tecnología que impulsa', template: '%s | Pascare' },
  description: 'Software, infraestructura, redes, ciberseguridad e innovación para organizaciones que quieren crecer con tecnología confiable.',
  openGraph: { title: 'Pascare | Tecnología que impulsa', description: 'Soluciones tecnológicas diseñadas para crecer contigo.', url: 'https://pascare.tech', siteName: 'Pascare', locale: 'es_PE', type: 'website', images: [{ url: '/og.png', width: 1728, height: 909, alt: 'Pascare — Tecnología que impulsa' }] },
  twitter: { card: 'summary_large_image', title: 'Pascare | Tecnología que impulsa', description: 'Software, sistemas, redes e innovación.', images: ['/og.png'] },
  icons: {
    icon: [{ url: '/favicon-pascare-v2.svg?v=20260721-2', type: 'image/svg+xml' }],
    shortcut: '/favicon-pascare-v2.svg?v=20260721-2',
    apple: '/favicon-pascare-v2.svg?v=20260721-2',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pascare',
  url: 'https://pascare.tech',
  logo: 'https://pascare.tech/og.png',
  image: 'https://pascare.tech/og.png',
  email: 'pascare.tech@gmail.com',
  description:
    'Software, infraestructura, redes, ciberseguridad e innovación para organizaciones que quieren crecer con tecnología confiable.',
  areaServed: { '@type': 'Country', name: 'Perú' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+51935162223',
      contactType: 'customer service',
      availableLanguage: ['es'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+51982434097',
      contactType: 'sales',
      availableLanguage: ['es'],
    },
  ],
  // sameAs: pendiente — añadir URLs de LinkedIn, Facebook e Instagram cuando existan.
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon-pascare-v2.svg?v=20260721-2" />
        <link rel="shortcut icon" href="/favicon-pascare-v2.svg?v=20260721-2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        <PageMotion />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
