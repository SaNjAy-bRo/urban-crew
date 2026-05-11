'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, Shield, CheckCircle2, ArrowRight, ChevronRight, Zap, Eye, Lock, Wrench } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Shield,
    title: '316 Marine-Grade Steel',
    description: 'Built with the highest grade stainless steel that resists rust, corrosion, and UV degradation even in extreme weather.',
  },
  {
    icon: Eye,
    title: 'Crystal Clear View',
    description: 'Nearly invisible from inside and outside — preserve your panoramic city views without any visual obstruction.',
  },
  {
    icon: Lock,
    title: '400kg Impact Strength',
    description: 'Each cable can withstand up to 400kg of force, ensuring absolute safety for children and pets.',
  },
  {
    icon: Zap,
    title: 'Same-Day Installation',
    description: 'Our expert team completes most balcony installations in just 4-6 hours with zero mess.',
  },
];

const galleryImages = [
  '/images/gallery1.jpeg',
  '/images/gallery2.jpeg',
  '/images/gallery3.jpeg',
  '/images/gallery4.jpeg',
  '/images/gallery5.jpeg',
  '/images/gallery6.jpeg',
  '/images/gallery7.jpeg',
  '/images/gallery8.jpeg',
];

const process = [
  { step: '01', title: 'Free Inspection', description: 'Our team visits your home for a thorough site assessment and measurement.' },
  { step: '02', title: 'Custom Design', description: 'We design a solution tailored perfectly to your balcony dimensions and aesthetics.' },
  { step: '03', title: 'Expert Installation', description: 'Professional, mess-free installation completed in just one visit.' },
  { step: '04', title: '10-Year Warranty', description: 'Backed by our industry-leading unconditional structural warranty.' },
];

const faqs = [
  {
    q: 'Are invisible grills truly safe for children and pets?',
    a: 'Absolutely. Our invisible grills are constructed from high-tensile 316 marine-grade stainless steel. They can withstand extreme pressure (up to 400kg of impact), ensuring absolute safety for both children and large pets without compromising your view.',
  },
  {
    q: 'Do the grills rust or degrade over time?',
    a: 'No. We specifically use 316-grade stainless steel encased in a specialized nylon/teflon coating. This combination makes them highly resistant to rust, corrosion, and UV degradation, even in harsh Indian weather conditions.',
  },
  {
    q: 'How long does the installation process take?',
    a: 'A standard balcony installation is typically completed within 4 to 6 hours. Our expert technicians ensure a swift, mess-free setup with precision measurement.',
  },
  {
    q: 'Will invisible grills affect my property\'s aesthetics?',
    a: 'Not at all. Invisible grills are designed to be virtually unnoticeable. They maintain your balcony\'s open, airy feel while providing complete safety — perfect for modern apartments.',
  },
];

export default function InvisibleGrillsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* Compact Page Header */}
      <section className="relative w-full pt-44 pb-14 md:pt-52 md:pb-16 overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/invisible-grills.jpeg" alt="Invisible Grills" fill priority className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0A192F]/80 z-10"></div>
        </div>
        <div className="container relative z-20 px-4 md:px-8 mx-auto">
          <div className="flex items-center gap-2 text-xs text-blue-200/60 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F97316]">Invisible Grills</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight">
            Invisible <span className="text-[#F97316]">Grills</span>
          </h1>
          <p className="text-base sm:text-lg text-blue-100/70 font-medium max-w-2xl mb-6">
            Elegant, durable, and completely safe — the perfect solution for modern balconies and windows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919902299696" className="flex items-center gap-2 bg-[#F97316] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#EA580C] transition-all text-sm">
              <PhoneCall className="w-4 h-4" /> Get Free Quote
            </a>
            <a href="https://wa.me/919902299696" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">Why Choose Our Invisible Grills?</h2>
            <p className="text-lg text-slate-500 font-medium">Engineered to deliver uncompromising safety without sacrificing aesthetics.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-[#3B82F6]/30 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#3B82F6]/10 flex items-center justify-center mb-5 group-hover:from-[#1E3A8A]/20 group-hover:to-[#3B82F6]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Overview Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/invisible-grills.jpeg" alt="Premium invisible grills on balcony" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">5,000+ Successful Installations</p>
                    <p className="text-xs text-slate-500 font-medium">Across Bangalore apartments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                The <span className="text-[#F97316]">Smartest</span> Way to Secure Your Balcony
              </h2>
              <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
                Our invisible grills use high-tensile 316 marine-grade stainless steel cables, spaced precisely to prevent any person or pet from slipping through. The cables are virtually invisible from both inside and outside, maintaining the beauty of your living space while providing ironclad security.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'High-tensile 316 marine-grade stainless steel',
                  'Withstands up to 400kg impact force',
                  'UV and weather resistant nylon coating',
                  'Custom-fit to any balcony or window shape',
                  'Child-safe gap spacing (max 25mm)',
                  'Zero maintenance required'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="tel:+919902299696" className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#EA580C] hover:-translate-y-1 transition-all">
                Request Free Inspection <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">How It Works</h2>
            <p className="text-lg text-slate-500 font-medium">A seamless, hassle-free process from consultation to completion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-[#F97316]/30 hover:shadow-[0_10px_40px_rgba(249,115,22,0.08)] transition-all duration-500 h-full">
                  <div className="text-5xl font-black text-[#3B82F6]/10 mb-4 group-hover:text-[#F97316]/20 transition-colors">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                </div>
                {/* Connector */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200 -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">Our Work Gallery</h2>
            <p className="text-lg text-slate-500 font-medium">Real installations from homes across Bangalore.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                <Image src={img} alt={`Invisible grill installation ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-500 font-medium">Everything you need to know about invisible grills.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    openFaq === idx
                      ? 'border-[#3B82F6]/40 shadow-[0_10px_40px_rgba(59,130,246,0.08)] bg-blue-50/30'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-800 pr-4">{faq.q}</span>
                    <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === idx ? '200px' : '0px', opacity: openFaq === idx ? 1 : 0 }}
                  >
                    <p className="px-6 sm:px-8 pb-6 text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1E3A8A] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F97316]/10 blur-[60px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="text-white flex-1">
              <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Secure Your Balcony?</h2>
              <p className="text-blue-200 text-lg font-medium">Get a free site inspection and measurement today. No hidden costs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+919902299696" className="bg-white text-[#1E3A8A] font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5">
                <PhoneCall className="w-5 h-5 text-[#F97316]" /> Call Now
              </a>
              <a href="https://wa.me/919902299696" target="_blank" rel="noreferrer" className="bg-[#F97316] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#EA580C] transition-all duration-300 flex items-center justify-center shadow-md hover:-translate-y-0.5">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
