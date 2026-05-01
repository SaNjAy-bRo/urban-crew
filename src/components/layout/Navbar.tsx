import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a1b3f]/90 backdrop-blur-2xl transition-all duration-500 shadow-xl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-[90px] items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="font-extrabold text-[28px] md:text-[32px] tracking-tight text-white group-hover:text-[#f57c20] transition-colors">
                Urban<span className="text-[#f57c20] group-hover:text-white transition-colors">Crew</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12 text-[14px] uppercase tracking-widest font-bold text-blue-100/80">
            <Link href="/" className="transition-colors hover:text-white relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f57c20] transition-all group-hover:w-full shadow-[0_0_8px_#f57c20]"></span>
            </Link>
            <Link href="#services" className="transition-colors hover:text-white relative group">
              Services
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f57c20] transition-all group-hover:w-full shadow-[0_0_8px_#f57c20]"></span>
            </Link>
            <Link href="#about" className="transition-colors hover:text-white relative group">
              Philosophy
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f57c20] transition-all group-hover:w-full shadow-[0_0_8px_#f57c20]"></span>
            </Link>
            <Link href="#contact" className="transition-colors hover:text-white relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#f57c20] transition-all group-hover:w-full shadow-[0_0_8px_#f57c20]"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-8">
            <a href="tel:+919900551942" className="hidden lg:flex items-center gap-3 text-white hover:text-[#f57c20] transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#f57c20] group-hover:bg-[#f57c20]/10 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-blue-200/60 font-bold tracking-widest uppercase">Call 24/7</span>
                <span className="font-bold text-base tracking-tight">+91 99005 51942</span>
              </div>
            </a>
            <button className="hidden md:inline-flex bg-gradient-to-r from-[#f57c20] to-[#ff9a50] text-white hover:shadow-[0_0_30px_-5px_#f57c20] rounded-sm px-8 py-4 transition-all font-bold tracking-widest uppercase text-xs">
              Get Quote
            </button>
            <button className="md:hidden text-white p-2">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
