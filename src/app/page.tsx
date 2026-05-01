'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, PhoneCall, Award, Users, Timer, ArrowRight, ChevronRight, Star, PlayCircle, MapPin, Mail, Quote, Ruler, Wrench, CheckSquare, Plus } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from 'react';

const services = [
  {
    id: 'invisible-grills',
    title: 'Invisible Grills',
    description: 'High-tensile 316 stainless steel grills offering maximum security without compromising your panoramic view. Ideal for high-rise apartments and modern villas.',
    image: '/images/services/invisible-grills.jpeg',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
  },
  {
    id: 'mosquito-nets',
    title: 'Mosquito Doors',
    description: 'Premium mesh sliding doors keeping pests out while letting fresh air in.',
    image: '/images/services/mosquito_sliding-doors.jpeg',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'sports-nets',
    title: 'Sports Nets',
    description: 'Heavy-duty netting solutions for sports facilities and residential practice areas.',
    image: '/images/services/sports-cricket-net.jpeg',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Grass',
    description: 'Lush, green, and maintenance-free artificial turf for balconies, terraces, and lawns. Natural feel year-round.',
    image: '/images/services/artificial_grass_turf.jpeg',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Whitefield, Bangalore",
    text: "Urban Crew did a fantastic job installing invisible grills in my 12th-floor apartment. The team was highly professional, and the view is completely unobstructed!",
    rating: 5,
  },
  {
    name: "Priya Desai",
    location: "Indiranagar, Bangalore",
    text: "Got their mosquito sliding doors for my villa. The quality is premium and it slides so smoothly. Very happy with the premium service.",
    rating: 5,
  },
  {
    name: "Karthik N.",
    location: "HSR Layout, Bangalore",
    text: "We installed the artificial grass on our terrace. It totally transformed the space into a beautiful lounge area. Highly recommended!",
    rating: 5,
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden bg-[#fafafa]">
      
      {/* Improved Premium Blue Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-[#0a1b3f] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Premium Balcony View"
            fill
            priority
            className="object-cover opacity-60 scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
          />
          {/* Deep premium blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b3f] via-[#0a1b3f]/80 to-transparent w-full lg:w-[75%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3f] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-8 mt-12 lg:mt-0">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200 fill-mode-both">
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-[#4a84ff]/30 backdrop-blur-md shadow-[0_0_20px_rgba(74,132,255,0.1)]">
              <span className="w-2.5 h-2.5 bg-[#f57c20] rounded-full animate-pulse shadow-[0_0_10px_#f57c20]"></span>
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Premium Netting Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Uncompromising Safety. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f57c20] to-[#ffb070]">Flawless Aesthetics.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed font-light max-w-2xl border-l-4 border-[#4a84ff] pl-6 shadow-sm">
              Architecturally designed invisible grills and netting systems for modern high-rises. Preserving your view while securing your loved ones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-8 items-start sm:items-center">
              <button className="group relative px-8 py-5 bg-gradient-to-r from-[#f57c20] to-[#ff9a50] text-white font-bold text-sm tracking-widest uppercase overflow-hidden rounded-md transition-all shadow-[0_10px_30px_-10px_rgba(245,124,32,0.8)] hover:shadow-[0_10px_40px_-5px_rgba(245,124,32,1)] hover:-translate-y-1">
                <span className="relative z-10 flex items-center">
                  Request Free Quote <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>
              
              <button className="group flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest hover:text-[#4a84ff] transition-colors px-6 py-4">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#4a84ff] transition-colors bg-white/5 backdrop-blur-md shadow-lg group-hover:shadow-[#4a84ff]/20 group-hover:scale-105">
                  <PlayCircle className="w-6 h-6 ml-1" />
                </div>
                See How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Improved USP Strip with subtle blue accents */}
        <div className="absolute bottom-0 left-0 right-0 border-y border-[#4a84ff]/20 bg-[#0a1b3f]/80 backdrop-blur-3xl z-20 hidden lg:block shadow-[0_-10px_40px_rgba(10,27,63,0.5)]">
          <div className="container px-4 md:px-8">
            <div className="flex items-center justify-between py-6 divide-x divide-[#4a84ff]/20">
              {[
                { title: "20-Year Warranty", desc: "Marine Grade 316 Steel", icon: ShieldCheck },
                { title: "Expert Installation", desc: "Zero architectural damage", icon: Wrench },
                { title: "24h Turnaround", desc: "Rapid Bangalore service", icon: Timer }
              ].map((usp, idx) => (
                <div key={idx} className="flex-1 px-8 first:pl-0 last:pr-0 flex items-center gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#122754] to-[#0a1b3f] flex items-center justify-center shrink-0 border border-[#4a84ff]/20 group-hover:border-[#f57c20] transition-colors shadow-inner">
                    <usp.icon className="w-6 h-6 text-[#4a84ff] group-hover:text-[#f57c20] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase">{usp.title}</h4>
                    <p className="text-blue-200/60 text-sm mt-1 font-light">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-[#4a84ff]/30"></span>
                  <span className="text-[#f57c20] font-bold tracking-[0.2em] uppercase text-xs">Our Philosophy</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0a1b3f] leading-[1.1] tracking-tight">
                  Security Should Never Feel Like A Cage.
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed font-light">
                  We bridge the gap between absolute safety and modern aesthetics. Using advanced tension-based installation and marine-grade materials, we create barriers that are practically invisible to the eye but impenetrable to force.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2 relative before:absolute before:-left-4 before:top-2 before:bottom-2 before:w-1 before:bg-[#4a84ff]/20 pl-4">
                  <div className="text-4xl font-black text-[#0a1b3f]">15+</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Years Exp.</div>
                </div>
                <div className="space-y-2 relative before:absolute before:-left-4 before:top-2 before:bottom-2 before:w-1 before:bg-[#4a84ff]/20 pl-4">
                  <div className="text-4xl font-black text-[#0a1b3f]">10k</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Homes Secured</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[600px] w-full">
              <div className="absolute right-0 top-0 w-3/4 h-[80%] rounded-xl overflow-hidden group shadow-2xl">
                <Image src="/images/gallery1.jpeg" alt="Invisible Grill Detail" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0a1b3f]/10"></div>
              </div>
              <div className="absolute left-0 bottom-0 w-1/2 h-[60%] rounded-xl overflow-hidden shadow-2xl border-[6px] border-white group z-10">
                <Image src="/images/project1.jpeg" alt="Balcony View" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute right-[20%] -bottom-6 bg-[#0a1b3f] text-white p-6 rounded-xl shadow-2xl z-20 max-w-[220px] border border-[#4a84ff]/20">
                <ShieldCheck className="w-10 h-10 text-[#f57c20] mb-4" />
                <div className="font-bold text-lg leading-tight">ISO Certified Materials</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upgraded Premium Blue Process Section */}
      <section className="py-24 relative overflow-hidden bg-[#06112a]">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-[0.03] bg-cover bg-fixed mix-blend-screen"></div>
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4a84ff]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
             <div className="flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-[#4a84ff]/50"></span>
                <span className="text-[#f57c20] font-bold tracking-[0.2em] uppercase text-xs">How It Works</span>
                <span className="w-8 h-px bg-[#4a84ff]/50"></span>
              </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Flawless Execution.
            </h2>
            <p className="text-blue-100/70 font-light text-lg">Our streamlined process ensures rapid, zero-damage installation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Elegant connecting line */}
            <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#4a84ff]/50 to-transparent"></div>

            {[
              { step: "01", icon: PhoneCall, title: "Consultation", desc: "Free site visit to understand your architectural requirements." },
              { step: "02", icon: Ruler, title: "Precision Measurement", desc: "Exact laser mapping to ensure a perfect, custom-fit system." },
              { step: "03", icon: CheckSquare, title: "Zero-Damage Install", desc: "Tension-based fitting by certified experts without structural harm." }
            ].map((process, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {/* Upgraded Step Icon Card */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-b from-[#0f2759] to-[#0a1b3f] border border-[#4a84ff]/20 flex items-center justify-center relative z-10 group-hover:border-[#f57c20] transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-8 overflow-hidden">
                   <div className="absolute inset-0 bg-[#4a84ff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <process.icon className="w-10 h-10 text-[#4a84ff] group-hover:text-white transition-colors relative z-10" />
                   
                   {/* Floating step number */}
                   <div className="absolute top-2 right-2 text-white/5 font-black text-4xl">
                     {process.step}
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{process.title}</h3>
                <p className="text-blue-100/60 font-light leading-relaxed px-2 text-base">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bento Box Grid */}
      <section id="services" className="py-24 bg-[#f0f4f8]">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#4a84ff]/30"></span>
                <span className="text-[#f57c20] font-bold tracking-[0.2em] uppercase text-xs">Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1b3f] tracking-tight">
                Architectural Systems
              </h2>
            </div>
            <button className="text-[#0a1b3f] font-bold border-b-2 border-[#0a1b3f] pb-1 hover:text-[#f57c20] hover:border-[#f57c20] transition-colors uppercase tracking-widest text-xs flex items-center">
              View Entire Catalog <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {services.map((service, idx) => (
              <div key={service.id} className={`${service.colSpan} group relative h-[400px] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(10,27,63,0.1)] transition-all duration-500`}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3f]/90 via-[#0a1b3f]/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{service.title}</h3>
                  <p className="text-blue-100/90 text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 font-light">
                    {service.description}
                  </p>
                  <Link href={`#${service.id}`} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#0a1b3f] group-hover:bg-[#f57c20] group-hover:text-white transition-colors shadow-lg">
                    <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgraded Split-Layout FAQ Section */}
      <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-32 top-0 w-96 h-96 bg-[#f0f4f8] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -right-32 bottom-0 w-96 h-96 bg-[#4a84ff]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 sticky top-32 space-y-8">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#4a84ff]/30"></span>
                <span className="text-[#f57c20] font-bold tracking-[0.2em] uppercase text-xs">Clarity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1b3f] tracking-tight leading-[1.1]">
                Have Questions? <br/> We Have Answers.
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Everything you need to know about our premium safety systems, installation process, and warranty terms.
              </p>
              <div className="pt-4">
                <button className="bg-[#0a1b3f] text-white px-8 py-4 rounded-md font-bold tracking-widest text-xs uppercase hover:bg-[#f57c20] transition-colors shadow-lg">
                  Ask a Custom Question
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <Accordion className="w-full space-y-6">
                {[
                  { q: "Are invisible grills completely safe for children and pets?", a: "Absolutely. Our invisible grills are made from high-tensile 316 marine-grade stainless steel. They can withstand up to 400kg of impact, ensuring absolute safety while maintaining an open view." },
                  { q: "How long does the installation process take?", a: "Most standard balcony installations are completed within 4 to 6 hours by our expert team. We use advanced drilling techniques to ensure zero architectural damage and no mess." },
                  { q: "Do you offer a warranty on your products?", a: "Yes, we provide up to a 20-year warranty against rust for our premium 316 stainless steel materials, ensuring long-term peace of mind." },
                  { q: "Will the installation damage my walls or flooring?", a: "No. Our technicians are highly trained to perform clean installations. We use precise measuring and drilling tools that protect your existing architecture and paintwork." }
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-gray-200 rounded-xl px-8 shadow-sm data-[state=open]:border-[#4a84ff]/50 data-[state=open]:shadow-md transition-all">
                    <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-[#0a1b3f] hover:text-[#f57c20] py-6 hover:no-underline transition-colors [&[data-state=open]>svg]:rotate-45">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-base leading-relaxed pb-8 pr-12 font-light">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
          </div>
        </div>
      </section>

      {/* Upgraded Image Background CTA Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.png"
            alt="Luxury Balcony"
            fill
            className="object-cover"
          />
          {/* Rich premium blue overlay */}
          <div className="absolute inset-0 bg-[#0a1b3f]/80 backdrop-blur-[3px]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-[#4a84ff]/30 backdrop-blur-md">
                <span className="text-[#f57c20] text-xs font-bold tracking-[0.2em] uppercase">Free Consultation</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Secure Your <br/> <span className="text-[#f57c20]">Peace of Mind.</span>
              </h2>
              <p className="text-xl text-blue-100/80 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Schedule a complimentary site visit today. Our experts provide exact measurements and transparent pricing instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[#f57c20] group-hover:bg-[#f57c20] transition-all backdrop-blur-sm shadow-xl">
                    <PhoneCall className="text-white w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-blue-200/60 font-bold uppercase tracking-widest mb-1">Call 24/7</p>
                    <p className="text-2xl font-bold text-white tracking-tight group-hover:text-[#f57c20] transition-colors">+91 99005 51942</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#f57c20]/20 rounded-bl-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4a84ff]/20 rounded-tr-full blur-3xl"></div>
                
                <h3 className="text-3xl font-black text-white tracking-tight mb-2 relative z-10">Request Estimate</h3>
                <p className="text-blue-100/70 font-light mb-8 relative z-10">Fast response. No hidden charges.</p>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-5">
                    <input type="text" placeholder="Your Full Name" className="w-full border-b border-white/30 bg-white/5 px-4 py-4 text-white placeholder:text-blue-100/50 focus:outline-none focus:border-[#f57c20] focus:bg-white/10 transition-all rounded-t-md" />
                    <input type="tel" placeholder="Phone Number" className="w-full border-b border-white/30 bg-white/5 px-4 py-4 text-white placeholder:text-blue-100/50 focus:outline-none focus:border-[#f57c20] focus:bg-white/10 transition-all rounded-t-md" />
                    <select className="w-full border-b border-white/30 bg-white/5 px-4 py-4 text-white focus:outline-none focus:border-[#f57c20] focus:bg-white/10 transition-all rounded-t-md appearance-none cursor-pointer">
                      <option value="" className="text-[#0a1b3f]">Select Product of Interest</option>
                      <option value="invisible" className="text-[#0a1b3f]">Invisible Grills</option>
                      <option value="mosquito" className="text-[#0a1b3f]">Mosquito Doors</option>
                      <option value="sports" className="text-[#0a1b3f]">Sports Nets</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#f57c20] hover:bg-[#ff9a50] text-white text-sm h-16 shadow-[0_10px_20px_rgba(245,124,32,0.3)] transition-all font-bold uppercase tracking-widest mt-8 flex items-center justify-center group rounded-md">
                    Submit Request <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
