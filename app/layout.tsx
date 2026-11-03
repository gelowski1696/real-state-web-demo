import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';

const dmMono = DM_Mono({ weight: ['400', '500'], subsets: ['latin'], display: 'swap', variable: '--font-mono-face' });
const dmSans = DM_Sans({ weight: ['400', '500', '600'], subsets: ['latin'], display: 'swap', variable: '--font-body-face' });
const fraunces = Fraunces({ weight: ['400', '500'], subsets: ['latin'], display: 'swap', variable: '--font-display-face' });

export const metadata: Metadata = {
  title: { default: 'Aurelia Developments — Three perspectives', template: '%s — Aurelia Developments' },
  description: 'An independent fictional real estate developer showcase exploring three digital directions.',
  icons: { icon: '/mark.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmMono.variable} ${dmSans.variable} ${fraunces.variable}`}>{children}</body></html>;
}
