'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, PhoneCall, Award, ArrowRight, PlayCircle, Anchor, Wrench, CheckSquare, MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from 'react';
import ReviewsMarquee from '@/components/home/ReviewsMarquee';

const services = [
  {
    id: 'invisible-grills',
    title: 'Invisible Grills',
    subtitle: 'Safe & Stylish',
    description: 'Elegant, durable, and completely safe — perfect for balconies and windows.',
    image: '/images/services/invisible-grills.jpeg',
  },
  {
    id: 'anti-bird-netting',
    title: 'Safety & Anti-Bird Netting',
    subtitle: 'Strong & Durable',
    description: 'Protect your home from birds and debris with invisible, sturdy netting solutions.',
    image: '/images/services/anti-bird-netting.jpeg',
  },
  {
    id: 'cricket-sports-nets',
    title: 'Cricket & Sports Nets',
    subtitle: 'Rust-Proof & Reliable',
    description: 'Durable nets for sports areas — custom installations for schools and apartments.',
    image: '/images/services/sports-cricket-net.jpeg',
  },
  {
    id: 'clothes-hangers',
    title: 'Clothes Hangers',
    subtitle: 'Smart & Space-Saving',
    description: 'Space-saving and stylish retractable hanger systems for balconies.',
    image: '/images/services/clothing-hanger.jpeg',
  }
];

const faqs = [
  {
    question: "Are invisible grills truly safe for children and pets?",
    answer: "Absolutely. Our invisible grills are constructed from high-tensile 316 marine-grade stainless steel. They can withstand extreme pressure (up to 400kg of impact), ensuring absolute safety for both children and large pets without compromising your view."
  },
  {
    question: "Do the grills rust or degrade over time?",
    answer: "No. We specifically use 316-grade stainless steel encased in a specialized nylon/teflon coating. This combination makes them highly resistant to rust, corrosion, and UV degradation, even in harsh Indian weather conditions."
  },
  {
    question: "How long does the installation process take?",
    answer: "A standard balcony installation is typically completed within 4 to 6 hours. Our expert technicians ensure a swift, mess-free setup with precision measurement."
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Optimize video playback: only play videos when they are in the viewport to prevent lagging
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0 }
    );

    // Give the DOM a tiny tick to render the videos before querying
    const timer = setTimeout(() => {
      const videos = document.querySelectorAll('.optimized-video');
      videos.forEach((vid) => observer.observe(vid));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* Ultra-Premium SaaS Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-32 flex items-center overflow-hidden bg-[#0A192F]">
        {/* Background Image & Advanced Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background (Wide) */}
          <Image
            src="/images/hero-bg-day.png"
            alt="City Skyline"
            fill
            priority
            className="object-cover scale-105 hidden md:block"
          />
          {/* Mobile Background (Portrait/Vertical focused) */}
          <Image
            src="/images/mobile-hero-bg.png"
            alt="Mobile Hero Balcony"
            fill
            priority
            className="object-cover scale-105 block md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent z-10 md:bg-gradient-to-r md:from-[#0A192F] md:via-[#0A192F]/80 md:to-transparent bg-gradient-to-t from-[#0A192F] via-[#0A192F]/90 to-[#0A192F]/40"></div>
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
        </div>

        {/* Ambient Glow behind Form */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#F97316]/20 blur-[120px] rounded-full z-10 pointer-events-none hidden lg:block"></div>

        <div className="container relative z-20 px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-white flex flex-col justify-center min-h-[calc(100svh-128px)] lg:min-h-0 lg:block lg:-mt-6">

              <h1 className="text-[min(10vw,10rem)] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 sm:mb-6 leading-[1.05] sm:leading-[1.1] whitespace-nowrap">
                Secure Your Home.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FB923C] block mt-1">Preserve Your View.</span>
              </h1>
              
              <p className="text-[20px] sm:text-xl md:text-2xl text-blue-50 mb-10 sm:mb-10 font-medium max-w-2xl leading-snug">
                Premium invisible grills & balcony netting in Bangalore. Absolute safety without ruining your aesthetics.
              </p>
              
              {/* Modern Bullet Points - Optimized 2-column grid for mobile */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-3 sm:gap-x-8 mb-12 sm:mb-10 text-[18px] sm:text-xl md:text-2xl font-bold text-white">
                {[
                  { text: 'Same-Day Install', icon: '⚡' },
                  { text: '5,000+ Homes', icon: '🏆' },
                  { text: 'Best Price', icon: '💰' },
                  { text: '10-Year Warranty', icon: '🛡️' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-[#F97316]/25 transition-colors">
                      {item.icon}
                    </div>
                    <span className="leading-tight text-white/95">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons - Stacked vertically on mobile as requested */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
                <a href="tel:+919902299696" className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-white text-[#0A192F] font-black px-4 py-4 sm:px-8 sm:py-4 rounded-xl hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.15)] text-[17px] sm:text-lg border border-transparent">
                  <PhoneCall className="w-5 h-5 text-[#3B82F6]" /> +91 99022 99696
                </a>
                <a href="https://wa.me/919902299696" target="_blank" rel="noreferrer" className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#25D366]/10 text-white font-bold px-4 py-4 sm:px-8 sm:py-4 rounded-xl hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all duration-300 text-[17px] sm:text-lg backdrop-blur-sm group hover:scale-[1.02]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Form Area (Glassmorphism) */}
            <div className="w-full lg:w-2/5 max-w-md mx-auto lg:ml-auto mt-12 sm:mt-16 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-[#FB923C]"></div>
                <h3 className="text-3xl font-black text-white mb-8 text-center">Request Call Back</h3>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:bg-white/10 transition-all font-medium" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Your Phone Number" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:bg-white/10 transition-all font-medium" />
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-black text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:scale-[1.02] transition-all duration-300 mt-4 border border-orange-400/50">
                    Get a Call Back
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-16 md:py-20 bg-[#F8FAFC] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#F97316]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-4 md:mb-6">Our Services</h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium">Premium safety and netting solutions tailored for modern homes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="group relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                {/* Background Image */}
                <Image src={service.image} alt={service.title} fill className="object-cover md:group-hover:scale-110 transition-transform duration-700" />
                
                {/* Overlay Gradient - Darker on mobile, dynamic on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent opacity-95 md:opacity-80 md:group-hover:opacity-95 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="translate-y-0 md:translate-y-20 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-black text-white mb-1">{service.title}</h3>
                    <p className="text-[#F97316] text-sm font-bold mb-3">{service.subtitle}</p>
                    <p className="text-blue-100/90 text-[15px] font-medium leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 mb-6">
                      {service.description}
                    </p>
                    <button className="flex items-center justify-between w-full text-white font-bold text-sm bg-white/10 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/20 md:hover:bg-[#F97316] md:hover:text-white transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Slim CTA */}
      <section className="bg-[#1E3A8A] py-10 md:py-12 relative overflow-hidden">
        {/* Decorative glowing orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F97316]/10 blur-[60px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to Secure Your Home?</h2>
              <p className="text-blue-200 text-lg font-medium">Get a free site inspection and measurement today. No hidden costs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+919902299696" className="bg-white text-[#1E3A8A] font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5">
                <PhoneCall className="w-5 h-5 text-[#F97316]" /> Call +91 99022 99696
              </a>
              <a href="#contact" className="bg-[#F97316] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#EA580C] transition-all duration-300 flex items-center justify-center shadow-md hover:-translate-y-0.5">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Action (Video Section) */}
      <section id="work" className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">Our Work in Action</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium">
            See how we transform balconies into safe, beautiful spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Real Video Player 1 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <video 
                src="/videos/invisible-grill-1.mp4" 
                muted
                loop
                playsInline
                className="optimized-video w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10 pointer-events-none md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-shadow-md leading-tight">High-Rise Balcony Grill Installation</h3>
                <p className="font-medium text-slate-300 text-shadow-sm text-sm mt-1">Watch our team secure this open space.</p>
              </div>
            </div>

            {/* Real Video Player 2 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <video 
                src="/videos/invisible-grill-2.mp4" 
                muted
                loop
                playsInline
                className="optimized-video w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10 pointer-events-none md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-shadow-md leading-tight">Safety Bird Netting Setup</h3>
                <p className="font-medium text-slate-300 text-shadow-sm text-sm mt-1">Perfect fit for apartment complexes.</p>
              </div>
            </div>

            {/* Real Video Player 3 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <video 
                src="/videos/invisible-grill-3.mp4" 
                muted
                loop
                playsInline
                className="optimized-video w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10 pointer-events-none md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-shadow-md leading-tight">Premium Safety Deployment</h3>
                <p className="font-medium text-slate-300 text-shadow-sm text-sm mt-1">Seamless, invisible, and durable.</p>
              </div>
            </div>

            {/* Real Video Player 4 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <video 
                src="/videos/urban-invisible-grills-bg.mp4" 
                muted
                loop
                playsInline
                className="optimized-video w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10 pointer-events-none md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-shadow-md leading-tight">Artificial Grass Integration</h3>
                <p className="font-medium text-slate-300 text-shadow-sm text-sm mt-1">Transforming an empty terrace.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Why Choose Us (Redesigned with Image & Stats) */}
      <section id="why-us" className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Subtle Background Pattern & Glow */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative z-10 px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Left: Image Box */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/why-choose-us.png" 
                  alt="Beautiful safe balcony with invisible grills" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent"></div>
                
                {/* Floating Satisfaction Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {Array(5).fill(0).map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                    </div>
                    <p className="font-bold text-slate-800 text-sm">100% Customer Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative background element behind image */}
              <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-blue-50 rounded-[2rem] -z-10"></div>
            </div>

            {/* Right: Content & Stats */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight">
                Why <span className="text-[#F97316]">Urban Crew?</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-6 leading-snug">
                Engineered for Safety, Designed for Style.
              </h3>
              <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                We don't just install grills; we secure your peace of mind. Our premium marine-grade stainless steel solutions provide absolute protection without sacrificing your beautiful views.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-10">
                <div className="border-l-4 border-[#3B82F6] pl-4">
                  <div className="text-3xl md:text-4xl font-black text-[#1E3A8A] mb-1">5,000+</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Installations</div>
                </div>
                <div className="border-l-4 border-[#F97316] pl-4">
                  <div className="text-3xl md:text-4xl font-black text-[#1E3A8A] mb-1">10+</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Years Exp.</div>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-4 mb-10">
                {[
                  { title: 'Unmatched Strength', desc: 'Endures up to 400kg of impact.' },
                  { title: '10-Year Warranty', desc: 'Iron-clad structural guarantee.' },
                  { title: 'Clean Setup', desc: 'Seamless, mess-free installation.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-100 rounded-full p-1 text-[#2563EB] shrink-0 flex items-center justify-center">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#EA580C] hover:-translate-y-1 transition-all">
                Request Free Callback <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <div className="bg-slate-50 relative">
        <ReviewsMarquee />
      </div>

      {/* FAQ Section (Premium Styling) */}
      <section id="faq" className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* FAQ Header */}
            <div className="w-full lg:w-1/3 text-center lg:text-left shrink-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 text-[#3B82F6] font-bold text-xs tracking-wider uppercase mb-6 shadow-sm border border-blue-200">
                Got Questions?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-4 sm:mb-6 leading-[1.15]">
                Frequently <br className="hidden lg:block" /> Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-10 lg:mb-8">
                Everything you need to know about our safety installations, warranties, and process.
              </p>
              
              {/* Support CTA Block (Visible on all devices now) */}
              <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
                  <h4 className="font-bold text-[#1E3A8A] mb-2 text-lg">Still have questions?</h4>
                  <p className="text-sm text-slate-500 font-medium mb-6">Our team is ready to help you with a custom quote.</p>
                  <a href="tel:+919902299696" className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold px-5 py-3.5 rounded-xl shadow-[0_4px_14px_rgba(249,115,22,0.4)] hover:bg-[#EA580C] hover:-translate-y-0.5 transition-all text-sm w-full">
                    <PhoneCall className="w-4 h-4" /> +91 99022 99696
                  </a>
                </div>
              </div>
            </div>

            {/* Accordion List */}
            <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
              <Accordion className="space-y-4 md:space-y-5">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200/80 bg-white px-5 sm:px-8 rounded-[1.5rem] data-[state=open]:border-[#3B82F6]/40 data-[state=open]:shadow-[0_10px_40px_rgba(59,130,246,0.08)] data-[state=open]:bg-blue-50/10 transition-all duration-300">
                    <AccordionTrigger className="text-left font-bold text-[16px] sm:text-[18px] text-slate-800 hover:text-[#2563EB] hover:no-underline py-5 sm:py-7">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 sm:pb-8 text-[15px] sm:text-base font-medium">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section (Minimalist Strip) */}
      <section className="py-8 md:py-12 bg-blue-50/50 border-t border-blue-100 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-[#3B82F6]/5 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-black text-[#1E3A8A] mb-2">Ready to secure your home?</h2>
              <p className="text-slate-500 font-medium text-sm md:text-base">Get a free measurement and personalized quote today. No obligations.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
              <a href="tel:+919902299696" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F97316] text-white px-6 py-3.5 rounded-xl font-bold shadow-md hover:bg-[#EA580C] hover:-translate-y-0.5 transition-all text-sm md:text-base">
                <PhoneCall className="w-4 h-4" />
                +91 99022 99696
              </a>
              <a href="https://wa.me/919902299696" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#10B981] border-2 border-[#10B981]/20 px-6 py-3.5 rounded-xl font-bold shadow-sm hover:border-[#10B981] hover:bg-emerald-50 hover:-translate-y-0.5 transition-all text-sm md:text-base">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
