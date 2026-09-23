import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-barlow' });
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-barlow-condensed' });

export const metadata = {
  title: 'Energy Solutions | Battery and Inverter Store, Jaipur',
  description:
    'Batteries, inverters and solar storage for Jaipur homes and businesses. Supplied, installed and serviced by one team since 2009.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
