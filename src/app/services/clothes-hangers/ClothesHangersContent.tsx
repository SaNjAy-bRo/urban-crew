'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, CheckCircle2, ArrowRight, ChevronRight, Shirt, Maximize2, Sparkles, Settings } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Shirt,
    title: 'Ceiling Mounted Design',
    description: 'Sleek ceiling-mounted hangers that keep your clothes elevated and your floor space completely free.',
  },
  {
    icon: Maximize2,
    title: 'Space Maximizer',
    description: 'Dry up to 3x more clothes in the same area compared to traditional floor-standing racks.',
  },
  {
    icon: Sparkles,
    title: 'Premium Finish',
    description: 'Stainless steel rods with powder-coated finish — rust-proof, elegant, and built to last.',
  },
  {
    icon: Settings,
    title: 'Pulley System',
    description: 'Smooth pulley mechanism for easy raising and lowering — no climbing or stretching needed.',
  },
];

const galleryImages = [
  '/images/hanger1.jpeg',
  '/images/hanger2.jpeg',
  '/images/hanger3.jpeg',
  '/images/services/clothing-hanger.jpeg',
  '/images/hanger1.jpeg',
  '/images/hanger2.jpeg',
  '/images/hanger3.jpeg',
  '/images/services/clothing-hanger.jpeg',
];

const processSteps = [
  { step: '01', title: 'Consultation', description: 'We understand your space, drying needs, and preferred hanger configuration.' },
  { step: '02', title: 'Measurement', description: 'Precise ceiling and wall measurements to design the perfect fit for your balcony or utility area.' },
  { step: '03', title: 'Installation', description: 'Professional, clean installation with heavy-duty ceiling anchors — completed in under 2 hours.' },
  { step: '04', title: 'Lifetime Support', description: 'Easy maintenance with replacement parts available. We stand behind our quality.' },
];

const faqs = [
  {
    q: 'How much weight can the ceiling hangers hold?',
    a: 'Our ceiling-mounted hangers can hold up to 30-40kg of wet laundry per unit, depending on the model. The stainless steel rods and heavy-duty ceiling anchors are designed to handle a full family\'s laundry load without any sagging.',
  },
  {
    q: 'Will it damage my ceiling during installation?',
    a: 'No. We use precision drilling with specialized anchors designed for concrete and false ceilings. The installation is clean, mess-free, and our team takes full precautions to protect your ceiling finish.',
  },
  {
    q: 'Can it be installed on a false ceiling?',
    a: 'Yes, we can install on false ceilings by using special through-anchors that secure directly to the concrete slab above. This ensures full weight-bearing capacity regardless of the false ceiling material.',
  },
  {
    q: 'How does the pulley system work?',
    a: 'The pulley mechanism uses a simple rope-and-lock system. Pull the rope to lower the hanger to a comfortable height for loading clothes, then raise it back up to ceiling level. A locking cleat secures it in place at any height.',
  },
];

export default function ClothesHangersContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* Compact Page Header */}
      <section className="relative w-full pt-44 pb-14 md:pt-52 md:pb-16 overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services/clothing-hanger.jpeg" alt="Clothes Hangers" fill priority className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0A192F]/80 z-10"></div>
        </div>
        <div className="container relative z-20 px-4 md:px-8 mx-auto">
          <div className="flex items-center gap-2 text-xs text-blue-200/60 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F97316]">Clothes Hangers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight">
            Ceiling Clothes <span className="text-[#F97316]">Hangers</span>
          </h1>
          <p className="text-base sm:text-lg text-blue-100/70 font-medium max-w-2xl mb-6">
            Space-saving, stylish ceiling-mounted drying racks for modern apartments.
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

      {/* Features */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">Why Choose Our Hangers?</h2>
            <p className="text-lg text-slate-500 font-medium">Smart, stylish, and engineered for Indian apartments.</p>
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

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/hangers.jpeg" alt="Ceiling clothes hanger installation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Premium Quality Finish</p>
                    <p className="text-xs text-slate-500 font-medium">Rust-proof stainless steel rods</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                The <span className="text-[#F97316]">Smartest</span> Way to Dry Clothes
              </h2>
              <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
                Traditional floor-standing racks eat up valuable balcony space and look cluttered. Our ceiling-mounted pulley hangers let you dry a full load of laundry overhead, keeping your floor free and your balcony looking clean and modern.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Ceiling-mounted with smooth pulley mechanism',
                  'Holds 30-40kg of wet laundry per unit',
                  'Stainless steel rods — rust and corrosion proof',
                  'Works on concrete and false ceilings',
                  'Adjustable height with locking cleat',
                  'Installation completed in under 2 hours'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="tel:+919902299696" className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#EA580C] hover:-translate-y-1 transition-all">
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">How It Works</h2>
            <p className="text-lg text-slate-500 font-medium">Quick and professional — from consultation to installation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-[#F97316]/30 hover:shadow-[0_10px_40px_rgba(249,115,22,0.08)] transition-all duration-500 h-full">
                  <div className="text-5xl font-black text-[#3B82F6]/10 mb-4 group-hover:text-[#F97316]/20 transition-colors">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200 -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">Installation Gallery</h2>
            <p className="text-lg text-slate-500 font-medium">See our ceiling hangers in real Bangalore homes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                <Image src={img} alt={`Clothes hanger installation ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-500 font-medium">Common questions about our clothes hanger systems.</p>
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

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F97316]/10 blur-[60px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="text-white flex-1">
              <h2 className="text-3xl md:text-4xl font-black mb-2">Upgrade Your Laundry Setup?</h2>
              <p className="text-blue-200 text-lg font-medium">Get a free estimate for your balcony or utility area today.</p>
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
