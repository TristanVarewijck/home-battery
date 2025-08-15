import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default:
      'GridBuddy - Bespaar op uw energierekening met duurzame energieopslag',
    template: '%s | GridBuddy',
  },
  description:
    'Bespaar tot €800 per jaar op uw energierekening met een thuisbatterij. Professionele installatie, 10 jaar garantie en 24/7 support. Gratis adviesgesprek.',
  keywords: [
    'thuisbatterij',
    'energieopslag',
    'zonnepanelen',
    'duurzame energie',
    'energiebesparing',
    'batterij opslag',
    'groene energie',
    'energierekening besparen',
    'thuisbatterij installatie',
    'batterij systeem',
  ],
  authors: [{ name: 'GridBuddy' }],
  creator: 'GridBuddy',
  publisher: 'GridBuddy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gridbuddy.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://gridbuddy.nl',
    title:
      'GridBuddy - Bespaar op uw energierekening met duurzame energieopslag',
    description:
      'Bespaar tot €800 per jaar op uw energierekening met een thuisbatterij. Professionele installatie, 10 jaar garantie en 24/7 support.',
    siteName: 'GridBuddy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GridBuddy - Duurzame energieopslag voor uw woning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GridBuddy - Bespaar op uw energierekening',
    description:
      'Bespaar tot €800 per jaar op uw energierekening met een thuisbatterij. Professionele installatie en 10 jaar garantie.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
