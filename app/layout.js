import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'Energy Solutions | Battery and Inverter Store, Jaipur',
  description:
    'Batteries, inverters and solar storage for Jaipur homes and businesses. Supplied, installed and serviced by one team since 2009.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
