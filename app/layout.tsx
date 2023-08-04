import Navbar from '@/components/global/Navbar';
import './globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const bergen = localFont({
  src: [
    {
      path: '../fonts/BergenSans-Regular.otf',
      weight: 'normal',
    },
  ],
  variable: '--font-bergen',
});

const redtone = localFont({
  src: [
    {
      path: '../fonts/Redtone-Regular.woff2',
      weight: 'normal',
    },
  ],
  variable: '--font-redtone',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Brett Yang',
    default: 'Brett Yang', // a default is required when creating a template
  },
  description:
    'Web development services Northern Beaches, Sydney. Elevate your online presence together and create visually captivating, high-performing websites!',
  keywords: [
    'Web development',
    'Web design',
    'Northern Beaches',
    'e-commerce website',
    'Next.js',
    'React',
  ],
  creator: 'Brett Yang',

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#FAFAFA' },
  ],

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  openGraph: {
    title: 'Brett Yang',
    description: '',
    url: 'Web development services Northern Beaches, Sydney. Elevate your online presence together and create visually captivating, high-performing websites!',
    siteName: 'Brett Yang',
    locale: 'en_AU',
    type: 'website',
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='snap-mandatory lg:snap-y lg:scroll-py-8'>
      <body
        className={`${raleway.className} ${raleway.variable} ${bergen.variable} ${redtone.variable}`}
      >
        <nav>
          <Navbar breakpoint={1024} />
        </nav>
        <main className='px-6 pb-12 md:px-10 lg:px-16 lg:py-[4.5rem] '>
          {children}
        </main>
      </body>
    </html>
  );
}
