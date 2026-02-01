import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar, Footer, SmoothScroll } from '@/components/layout';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Cole Ortiz | Finance, Ventures & Creative',
    template: '%s | Cole Ortiz',
  },
  description:
    'Cole Ortiz is a UGA Finance graduate, Associate at Zitro Capital and OrbioCloud, and a creative professional in music, film, and acting.',
  keywords: [
    'Cole Ortiz',
    'Zitro Capital',
    'OrbioCloud',
    'UGA Finance',
    'Venture Capital',
    'Music Producer',
    'Filmmaker',
    'Actor',
  ],
  authors: [{ name: 'Cole Ortiz' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Cole Ortiz',
    title: 'Cole Ortiz | Finance, Ventures & Creative',
    description:
      'Finance professional, entrepreneur, and creative. Bridging venture capital, technology, and the arts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cole Ortiz | Finance, Ventures & Creative',
    description:
      'Finance professional, entrepreneur, and creative. Bridging venture capital, technology, and the arts.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
