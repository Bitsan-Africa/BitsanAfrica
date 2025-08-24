import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Bitsan - Comfort, connectivity, and property solutions',
  description: 'Find hostels, hotels, strong home internet, or the perfect property — curated and trusted for seamless living.',
  keywords: 'accommodation, hostels, hotels, wifi, internet, real estate, property, bitsan',
  authors: [{ name: 'Bitsan' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Bitsan - Comfort, connectivity, and property solutions',
    description: 'Find hostels, hotels, strong home internet, or the perfect property — curated and trusted for seamless living.',
    url: 'https://bitsan.com',
    siteName: 'Bitsan',
    type: 'website',
    images: [
      {
        url: '/images/hero-lifestyle.jpg', // TODO: Replace with actual hero image
        width: 1200,
        height: 630,
        alt: 'Bitsan - Comfort and connectivity solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitsan - Comfort, connectivity, and property solutions',
    description: 'Find hostels, hotels, strong home internet, or the perfect property — curated and trusted for seamless living.',
    images: ['/images/hero-lifestyle.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}