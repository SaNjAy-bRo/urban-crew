import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  title: 'Urban Crew | Architectural Safety Solutions',
  description: 'Premium safety and netting solutions for homes, apartments, and commercial spaces in Bangalore. Specializing in invisible grills and mosquito nets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans min-h-screen flex flex-col bg-[#0a0a0a] text-[#F5F5F0] selection:bg-[#D4AF37]/30`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
