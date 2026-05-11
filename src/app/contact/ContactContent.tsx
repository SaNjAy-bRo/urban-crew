'use client';

import Link from 'next/link';
import { PhoneCall, Mail, MapPin, Clock, ChevronRight, Send, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: PhoneCall,
    title: 'Call Us',
    detail: '+91 99022 99696',
    sub: 'Available Mon-Sat, 9AM-7PM',
    href: 'tel:+919902299696',
    color: 'bg-blue-100 text-[#3B82F6]',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@urbaninvisiblegrills.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@urbaninvisiblegrills.com',
    color: 'bg-orange-100 text-[#F97316]',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Bangalore, Karnataka',
    sub: 'Serving all areas of Bangalore',
    href: '#',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    detail: 'Mon - Sat: 9AM - 7PM',
    sub: 'Sunday by appointment',
    href: '#',
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function ContactContent() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* Compact Page Header */}
      <section className="relative w-full pt-44 pb-14 md:pt-52 md:pb-16 overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container relative z-20 px-4 md:px-8 mx-auto">
          <div className="flex items-center gap-2 text-xs text-blue-200/60 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F97316]">Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight tracking-tight">
            Get in <span className="text-[#F97316]">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-blue-100/70 font-medium max-w-2xl">
            Ready to secure your home? Contact us for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto -mt-20 md:-mt-16 relative z-30">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.href}
                  className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group block"
                >
                  <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{info.title}</h3>
                  <p className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#3B82F6] transition-colors">{info.detail}</p>
                  <p className="text-sm text-slate-500 font-medium">{info.sub}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Send Us a <span className="text-[#F97316]">Message</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Full Name</label>
                    <input type="text" placeholder="Your name" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all font-medium" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Service Needed</label>
                  <select className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all font-medium appearance-none">
                    <option value="">Select a service</option>
                    <option value="invisible-grills">Invisible Grills</option>
                    <option value="anti-bird-netting">Safety & Anti-Bird Netting</option>
                    <option value="cricket-sports-nets">Cricket & Sports Nets</option>
                    <option value="clothes-hangers">Clothes Hangers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Message</label>
                  <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all font-medium resize-none"></textarea>
                </div>
                <button className="w-full bg-[#F97316] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#EA580C] hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>

            {/* Right Side Info */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Or Reach Us Directly</h3>
                
                {/* Quick Actions */}
                <div className="space-y-4 mb-8">
                  <a href="tel:+919902299696" className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-[#3B82F6] transition-colors">Call Us Now</p>
                      <p className="text-sm text-slate-500 font-medium">+91 99022 99696</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                  </a>
                  
                  <a href="https://wa.me/919902299696" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-[#25D366] transition-colors">WhatsApp Us</p>
                      <p className="text-sm text-slate-500 font-medium">Quick response guaranteed</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                  </a>

                  <a href="mailto:info@urbaninvisiblegrills.com" className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-[#F97316] transition-colors">Email Us</p>
                      <p className="text-sm text-slate-500 font-medium">info@urbaninvisiblegrills.com</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                  </a>
                </div>

                {/* Service Area */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#3B82F6]" />
                    <h4 className="font-bold text-slate-800">Service Area</h4>
                  </div>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    We provide installation services across all areas of Bangalore including Whitefield, Electronic City, Koramangala, HSR Layout, Marathahalli, Sarjapur Road, Hebbal, JP Nagar, Bannerghatta Road, and surrounding areas.
                  </p>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-black mb-2">Prefer a Quick Call?</h2>
              <p className="text-blue-200 text-lg font-medium">Our team is ready to help. No obligations, just honest advice.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+919902299696" className="bg-white text-[#1E3A8A] font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5">
                <PhoneCall className="w-5 h-5 text-[#F97316]" /> +91 99022 99696
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
