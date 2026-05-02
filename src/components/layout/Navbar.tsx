'use client';

import Link from 'next/link';
import { Phone, PhoneCall, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        {/* Top Banner */}
        <div className={`bg-[#0A192F] text-slate-300 py-1.5 md:py-3 transition-all duration-500 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
          <div className="container mx-auto px-2 sm:px-4 md:px-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide gap-1 md:gap-0">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[#3B82F6] font-bold">10+ Years</span> of Excellence in Bangalore
            </div>
            <div className="flex gap-4 md:gap-8">
              <div className="flex items-center gap-1.5 md:gap-2">
                <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#3B82F6]" /> 10-Year Unconditional Warranty
              </div>
            </div>
          </div>
        </div>

        {/* Floating Pill Navigation */}
        <div className={`px-4 md:px-8 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
          <header className={`mx-auto max-w-7xl rounded-full transition-all duration-500 font-sans border ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-white/50 py-2.5 px-6' 
              : 'bg-white shadow-xl shadow-black/5 border-transparent py-4 px-8'
          }`}>
            <div className="flex items-center justify-between">
              
              {/* Premium Logo */}
              <Link href="/" className="flex items-center gap-3 group" onClick={handleLinkClick}>
                <div className="relative w-10 h-10 bg-gradient-to-tr from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tight text-slate-900 leading-none group-hover:text-[#1E3A8A] transition-colors">
                    Urban<span className="text-[#3B82F6]">Grills</span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-1">
                    Premium Safety
                  </span>
                </div>
              </Link>
              
              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center space-x-8 text-[14px] font-bold text-slate-600">
                <Link href="/" className="hover:text-[#3B82F6] transition-colors">Home</Link>
                <Link href="#services" className="hover:text-[#3B82F6] transition-colors">Services</Link>
                <Link href="#work" className="hover:text-[#3B82F6] transition-colors">Our Work</Link>
                <Link href="#reviews" className="hover:text-[#3B82F6] transition-colors">Reviews</Link>
                <Link href="#faq" className="hover:text-[#3B82F6] transition-colors">FAQ</Link>
              </nav>

              {/* Desktop Action Area */}
              <div className="hidden lg:flex items-center gap-5">
                <a href="tel:+919902299696" className="flex items-center gap-2 text-slate-700 hover:text-[#3B82F6] transition-colors font-bold text-sm">
                  <Phone className="w-4 h-4 text-[#3B82F6]" />
                  +91 99022 99696
                </a>
                <div className="w-px h-6 bg-slate-200"></div>
                <a href="#contact" className="bg-[#1E3A8A] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#3B82F6] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center gap-2 text-sm group">
                  Get a Quote
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mobile Action Area */}
              <div className="flex items-center gap-3 lg:hidden">
                <a href="tel:+919902299696" className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-[#2563EB] to-[#3B82F6] rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform active:scale-95" aria-label="Call Now">
                  <PhoneCall className="w-[18px] h-[18px] text-white" />
                </a>
                
                {/* Mobile Menu Toggle */}
                <button 
                  className="text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[80px] bg-white/95 backdrop-blur-xl transition-all duration-300 z-30 border-t border-slate-100 ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-10 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '#services', label: 'Services' },
              { href: '#work', label: 'Our Work' },
              { href: '#reviews', label: 'Reviews' },
              { href: '#faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-bold text-3xl tracking-tight text-slate-900 py-4 border-b border-slate-100 hover:text-[#3B82F6] transition-colors flex items-center justify-between"
              >
                {link.label}
                <ChevronRight className="w-6 h-6 text-slate-300" />
              </Link>
            ))}
          </nav>

          <div className="mt-12 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Us Directly</p>
            <a href="tel:+919902299696" className="flex items-center gap-4 text-slate-900 font-black text-2xl mb-6 hover:text-[#3B82F6] transition-colors">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 text-[#3B82F6] shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              99022 99696
            </a>
            <a href="#contact" onClick={handleLinkClick} className="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 hover:bg-[#3B82F6] transition-colors text-lg">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
