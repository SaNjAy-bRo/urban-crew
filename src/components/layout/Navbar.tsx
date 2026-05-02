'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Determine if header should be solid (scrolled or menu open)
  const isHeaderSolid = scrolled || isOpen;

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 font-montserrat ${isHeaderSolid ? 'bg-[#0A192F] border-b border-[#F8F9FA]/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2 md:py-2' : 'bg-transparent py-6 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 relative z-50">
        <div className="flex h-[70px] items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
              <span className="font-cormorant font-bold text-[32px] md:text-[40px] tracking-tight text-white transition-colors">
                Urban<span className="italic text-[#C87A54] transition-colors">Crew.</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12 text-[11px] lg:text-[12px] uppercase tracking-[0.3em] font-medium text-[#F8F9FA]/80">
            <Link href="/" className="transition-colors hover:text-[#C87A54] relative group py-2">
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C87A54] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#why-us" className="transition-colors hover:text-[#C87A54] relative group py-2">
              Why Us
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C87A54] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#services" className="transition-colors hover:text-[#C87A54] relative group py-2">
              Solutions
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C87A54] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#process" className="transition-colors hover:text-[#C87A54] relative group py-2">
              Process
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C87A54] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="transition-colors hover:text-[#C87A54] relative group py-2">
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C87A54] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-6 lg:gap-8">
            <a href="tel:+919900551942" className="hidden lg:flex items-center gap-4 text-white hover:text-[#C87A54] transition-colors group">
              <div className="flex flex-col text-right">
                <span className="text-[9px] text-[#F8F9FA]/50 font-bold tracking-[0.3em] uppercase mb-0.5">Concierge</span>
                <span className="font-cormorant font-bold text-xl tracking-tight">+91 99005 51942</span>
              </div>
            </a>
            <button className="hidden md:inline-flex bg-[#C87A54] text-[#0A192F] hover:bg-[#F8F9FA] rounded-none px-8 py-4 transition-all font-bold tracking-[0.3em] uppercase text-[10px] shadow-[0_0_20px_rgba(200,122,84,0.2)]">
              Consultation
            </button>
            <button 
              className="md:hidden text-[#F8F9FA] p-2 relative z-50 hover:text-[#C87A54] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[86px] bg-[#0A192F] transition-all duration-500 border-t border-[#F8F9FA]/5 z-40 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-12 overflow-y-auto pb-24">
          <nav className="flex flex-col space-y-6">
            {[
              { href: '/', label: 'Home' },
              { href: '#why-us', label: 'Why Us' },
              { href: '#services', label: 'Solutions' },
              { href: '#process', label: 'Process' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: 'Contact' },
            ].map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`font-cormorant text-4xl font-bold text-white pb-6 border-b border-[#F8F9FA]/10 hover:text-[#C87A54] transition-all duration-500 flex items-end justify-between ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${idx * 80}ms` : '0ms' }}
              >
                {link.label}
                <span className="text-[10px] tracking-[0.3em] font-montserrat text-[#C87A54]/50 font-bold uppercase mb-2">0{idx + 1}</span>
              </Link>
            ))}
          </nav>

          <div className={`mt-auto pt-12 space-y-8 transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
            <a href="tel:+919900551942" className="flex items-center gap-6 text-white group">
              <div className="w-14 h-14 rounded-full border border-[#C87A54]/30 flex items-center justify-center bg-[#C87A54]/5">
                <Phone className="h-6 w-6 text-[#C87A54]" />
              </div>
              <div>
                <p className="text-[10px] text-[#F8F9FA]/50 font-bold tracking-[0.3em] uppercase mb-1">Direct Concierge</p>
                <p className="font-cormorant text-3xl font-bold tracking-tight">+91 99005 51942</p>
              </div>
            </a>
            <button className="w-full bg-[#C87A54] text-[#0A192F] rounded-none py-6 font-bold tracking-[0.3em] uppercase text-[11px] shadow-[0_0_20px_rgba(200,122,84,0.2)]">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
