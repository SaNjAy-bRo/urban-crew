'use client';

import Link from 'next/link';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
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
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 font-sans shadow-sm ${scrolled ? 'bg-white' : 'bg-white'}`}>
      
      {/* Top Bar */}
      <div className="bg-[#3B82F6] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center text-sm font-medium">
          <div>10+ Years of Experience | Bangalore's Premium Invisible Grill Dealer</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> 10-Year Warranty
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-50">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
              <span className="font-bold text-xl md:text-2xl tracking-tight text-[#1E3A8A]">
                Urban <span className="text-[#3B82F6]">Invisible Grills</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-slate-600">
            <Link href="/" className="transition-colors hover:text-[#3B82F6]">Home</Link>
            <Link href="#about" className="transition-colors hover:text-[#3B82F6]">About</Link>
            <Link href="#services" className="transition-colors hover:text-[#3B82F6]">Products</Link>
            <Link href="#process" className="transition-colors hover:text-[#3B82F6]">Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-[#3B82F6]">Contact</Link>
          </nav>

          {/* Desktop Contact */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="tel:+919902299696" className="hidden lg:flex items-center gap-3 text-slate-800 hover:text-[#3B82F6] transition-colors font-bold text-lg">
              <Phone className="w-5 h-5 text-[#3B82F6]" />
              +91 99022 99696
            </a>
            <button 
              className="md:hidden text-slate-800 p-2 relative z-50 hover:text-[#3B82F6] transition-colors"
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
        className={`md:hidden fixed inset-0 top-[80px] bg-white transition-all duration-300 border-t border-slate-100 z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-8 overflow-y-auto pb-24">
          <nav className="flex flex-col space-y-6">
            {[
              { href: '/', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Products' },
              { href: '#process', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-bold text-2xl text-slate-800 pb-4 border-b border-slate-100 hover:text-[#3B82F6] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 space-y-6">
            <a href="tel:+919902299696" className="flex items-center gap-4 text-slate-800 font-bold text-xl">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 text-[#3B82F6]">
                <Phone className="h-5 w-5" />
              </div>
              +91 99022 99696
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
