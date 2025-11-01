import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Bootcamp IA Interactivo - Aprende Inteligencia Artificial Gratis',
    template: '%s | Bootcamp IA Interactivo'
  },
  description: 'Bootcamp interactivo de Inteligencia Artificial basado en Talento Tech. Aprende Python, Machine Learning y IA con ejercicios prácticos, proyectos reales y gamificación. Totalmente gratis.',
  keywords: [
    'inteligencia artificial',
    'machine learning',
    'bootcamp IA',
    'python para IA',
    'aprender IA gratis',
    'curso inteligencia artificial',
    'machine learning español',
    'bootcamp Talento Tech',
    'educación IA',
    'aprendizaje automático',
    'redes neuronales',
    'ciencia de datos',
    'python machine learning',
    'curso IA interactivo'
  ],
  authors: [{ name: 'Bootcamp IA Interactivo' }],
  creator: 'Bootcamp IA Interactivo',
  publisher: 'Bootcamp IA Interactivo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-usuario.github.io/bootcamp-ia-interactivo'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-usuario.github.io/bootcamp-ia-interactivo',
    title: 'Bootcamp IA Interactivo - Aprende Inteligencia Artificial Gratis',
    description: 'Bootcamp interactivo de Inteligencia Artificial basado en Talento Tech. Aprende Python, Machine Learning y IA con ejercicios prácticos y proyectos reales.',
    siteName: 'Bootcamp IA Interactivo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bootcamp IA Interactivo - Aprende Inteligencia Artificial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bootcamp IA Interactivo - Aprende Inteligencia Artificial Gratis',
    description: 'Bootcamp interactivo de Inteligencia Artificial basado en Talento Tech. Aprende Python, Machine Learning y IA con ejercicios prácticos.',
    images: ['/og-image.png'],
    creator: '@tu_usuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
    yandex: 'tu-yandex-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
}