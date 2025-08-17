import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
    'Bespaar gemiddeld € 2.000,00 per jaar op uw energierekening met een thuisbatterij. Professionele installatie, 10 jaar garantie en 24/7 support. Gratis adviesgesprek.',
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
      'Bespaar gemiddeld € 2.000,00 per jaar op uw energierekening met een thuisbatterij. Professionele installatie, 10 jaar garantie en 24/7 support.',
    siteName: 'GridBuddy',
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'GridBuddy - Duurzame energieopslag voor uw woning',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'GridBuddy - Bespaar op uw energierekening',
  //   description:
  //     'Bespaar tot €800 per jaar op uw energierekening met een thuisbatterij. Professionele installatie en 10 jaar garantie.',
  //   images: ['/og-image.jpg'],
  // },
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
        <link rel="icon" href="/favicon-32x32.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17483826389"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17483826389');
          `}
        </Script>

        {/* Hotjar Tracking Code */}
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6494949,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hvid;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'GridBuddy',
              description:
                'Thuisbatterij installatie en advies voor optimale energiebesparing',
              url: 'https://gridbuddy.nl',
              telephone: '+31624570564',
              email: 'thuisbatterijen@gmail.com',
              // address: {
              //   '@type': 'PostalAddress',
              //   addressLocality: 'Amsterdam',
              //   addressCountry: 'NL',
              // },
              priceRange: '€€',
              openingHours: 'Mo-Fr 09:00-17:00',
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Thuisbatterij Installatie',
              description:
                'Professionele installatie van thuisbatterijen voor optimale energiebesparing en lagere energiekosten',
              provider: {
                '@type': 'LocalBusiness',
                name: 'GridBuddy',
              },
              areaServed: 'Nederland',
              serviceType: 'Thuisbatterij installatie',
            }),
          }}
        />
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
