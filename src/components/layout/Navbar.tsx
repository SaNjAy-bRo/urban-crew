'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, PhoneCall, Menu, X, ShieldCheck, ChevronRight, ChevronDown, Shield, Bug, Trophy, Shirt } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const serviceLinks = [
  {
    href: '/services/invisible-grills',
    label: 'Invisible Grills',
    desc: 'Safe & stylish balcony protection',
    icon: Shield,
  },
  {
    href: '/services/anti-bird-netting',
    label: 'Safety & Anti-Bird Netting',
    desc: 'Protect from birds & debris',
    icon: Bug,
  },
  {
    href: '/services/cricket-sports-nets',
    label: 'Cricket & Sports Nets',
    desc: 'Durable nets for sports areas',
    icon: Trophy,
  },
  {
    href: '/services/clothes-hangers',
    label: 'Clothes Hangers',
    desc: 'Space-saving hanger systems',
    icon: Shirt,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        {/* Top Banner */}
        <div className={`bg-[#0A192F] text-slate-300 py-3 md:py-5 transition-all duration-500 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
          <div className="container mx-auto px-2 sm:px-4 md:px-8 flex flex-row justify-center md:justify-between items-center text-sm sm:text-base md:text-lg font-semibold tracking-wide gap-3 md:gap-0">
            <div className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
              <span className="text-[#F97316] font-bold">10+ Years</span> of Excellence in Bangalore
            </div>
            <div className="hidden md:flex gap-4 md:gap-8">
              <div className="flex items-center gap-1.5 md:gap-2">
                <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#F97316]" /> 10-Year Unconditional Warranty
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
                    Urban <span className="text-[#F97316]">Crew</span>
                  </span>
                </div>
              </Link>
              
              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center space-x-8 text-[14px] font-bold text-slate-600">
                <Link href="/" className="hover:text-[#3B82F6] transition-colors">Home</Link>
                
                {/* Services Dropdown */}
                <div 
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className="flex items-center gap-1 hover:text-[#3B82F6] transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Panel */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    servicesOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="w-[340px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
                      {/* Dropdown Header */}
                      <div className="px-5 pt-5 pb-3">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em]">Our Services</p>
                      </div>
                      
                      {/* Service Links */}
                      <div className="px-2 pb-3">
                        {serviceLinks.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 group/item"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#3B82F6]/10 flex items-center justify-center shrink-0 group-hover/item:from-[#1E3A8A]/20 group-hover/item:to-[#3B82F6]/20 transition-colors">
                                <Icon className="w-5 h-5 text-[#3B82F6]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-slate-800 group-hover/item:text-[#1E3A8A] transition-colors">{service.label}</div>
                                <div className="text-xs font-medium text-slate-400 mt-0.5">{service.desc}</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover/item:text-[#3B82F6] group-hover/item:translate-x-0.5 transition-all" />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown Footer */}
                      <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-100">
                        <Link href="/#services" className="text-xs font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors flex items-center gap-1" onClick={() => setServicesOpen(false)}>
                          View All Services <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/#work" className="hover:text-[#3B82F6] transition-colors">Our Work</Link>
                <Link href="/contact" className="hover:text-[#3B82F6] transition-colors">Contact</Link>
              </nav>

              {/* Desktop Action Area */}
              <div className="hidden lg:flex items-center gap-5">
                <a href="tel:+919902299696" className="flex items-center gap-2 text-slate-700 hover:text-[#3B82F6] transition-colors font-bold text-sm">
                  <Phone className="w-4 h-4 text-[#3B82F6]" />
                  +91 99022 99696
                </a>
                <div className="w-px h-6 bg-slate-200"></div>
                <a href="tel:+919902299696" className="bg-[#1E3A8A] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#F97316] hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)] transition-all duration-300 flex items-center gap-2 text-sm group">
                  Get a Quote
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mobile Action Area */}
              <div className="flex items-center gap-3 lg:hidden">
                <a href="tel:+919902299696" className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-[#EA580C] to-[#F97316] rounded-full shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform active:scale-95" aria-label="Call Now">
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
        className={`lg:hidden fixed inset-0 top-0 bg-white transition-all duration-300 z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-[140px] pb-10 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {/* Home */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className="font-bold text-3xl tracking-tight text-slate-900 py-4 border-b border-slate-100 hover:text-[#3B82F6] transition-colors flex items-center justify-between"
            >
              Home
              <ChevronRight className="w-6 h-6 text-slate-300" />
            </Link>

            {/* Services (Expandable) */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full font-bold text-3xl tracking-tight text-slate-900 py-4 hover:text-[#3B82F6] transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-6 h-6 text-slate-300 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Animated Sub-menu */}
              <div 
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: mobileServicesOpen ? `${serviceLinks.length * 80}px` : '0px',
                  opacity: mobileServicesOpen ? 1 : 0,
                }}
              >
                <div className="pl-4 pb-4 space-y-1">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-4 h-4 text-[#3B82F6]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-lg font-bold text-slate-700 group-hover:text-[#3B82F6] transition-colors">{service.label}</span>
                          <p className="text-xs text-slate-400 font-medium">{service.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Our Work */}
            <Link
              href="/#work"
              onClick={handleLinkClick}
              className="font-bold text-3xl tracking-tight text-slate-900 py-4 border-b border-slate-100 hover:text-[#3B82F6] transition-colors flex items-center justify-between"
            >
              Our Work
              <ChevronRight className="w-6 h-6 text-slate-300" />
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="font-bold text-3xl tracking-tight text-slate-900 py-4 border-b border-slate-100 hover:text-[#3B82F6] transition-colors flex items-center justify-between"
            >
              Contact
              <ChevronRight className="w-6 h-6 text-slate-300" />
            </Link>
          </nav>

          <div className="mt-12 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Us Directly</p>
            <a href="tel:+919902299696" className="flex items-center gap-4 text-slate-900 font-black text-2xl mb-6 hover:text-[#3B82F6] transition-colors">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 text-[#3B82F6] shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              99022 99696
            </a>
            <a href="tel:+919902299696" className="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 hover:bg-[#F97316] transition-colors text-lg">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
