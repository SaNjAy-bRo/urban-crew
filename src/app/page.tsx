'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, PhoneCall, Award, ArrowRight, PlayCircle, Ruler, CheckSquare, Plus, Crosshair, HelpCircle, Anchor, Clock, Wrench } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from 'react';
import ReviewsMarquee from '@/components/home/ReviewsMarquee';

const services = [
  {
    id: 'invisible-grills',
    title: 'Invisible Grills',
    description: 'High-tensile 316 stainless steel providing absolute security while preserving your panoramic views.',
    image: '/images/services/invisible-grills.jpeg',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
  },
  {
    id: 'mosquito-nets',
    title: 'Mosquito Doors',
    description: 'Premium mesh sliding systems engineered for seamless integration.',
    image: '/images/services/mosquito_sliding-doors.jpeg',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'sports-nets',
    title: 'Sports Enclosures',
    description: 'Architectural-grade netting for residential and commercial sports facilities.',
    image: '/images/services/sports-cricket-net.jpeg',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Turf',
    description: 'Lush, maintenance-free landscaping solutions for modern terraces.',
    image: '/images/services/artificial_grass_turf.jpeg',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-8',
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
  },
  {
    question: "Will the mosquito mesh block airflow or sunlight?",
    answer: "Our premium mosquito mesh is engineered for maximum breathability. It allows up to 85% of natural airflow and sunlight to pass through while keeping even the smallest insects out."
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col w-full font-montserrat overflow-hidden bg-[#0A192F] text-[#F8F9FA]">
      
      {/* Full-Bleed Cinematic Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Premium Balcony View"
            fill
            priority
            className="object-cover animate-kenburns transform-gpu"
          />
          {/* Heavy cinematic Midnight overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/60 to-[#0A192F] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#0A192F]/30"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-8 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both mt-20">
          
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-[#C87A54]"></span>
            <span className="text-[#C87A54] text-xs font-bold tracking-[0.4em] uppercase">Premium Safety Solutions</span>
            <span className="w-12 h-px bg-[#C87A54]"></span>
          </div>
          
          <h1 className="font-cormorant text-6xl sm:text-8xl md:text-9xl text-white tracking-tight leading-[0.95] mb-8">
            Safety, <br />
            <span className="italic text-gradient-copper">Unseen.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#F8F9FA]/80 leading-relaxed font-light max-w-2xl mx-auto mb-12">
            We build high-strength safety nets and invisible grills that protect your family without ruining the beautiful view from your balcony.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <button className="group relative px-12 py-5 bg-[#C87A54] text-[#0A192F] font-bold text-xs tracking-[0.3em] uppercase overflow-hidden transition-all hover:bg-[#F8F9FA] shadow-[0_0_40px_rgba(200,122,84,0.3)]">
              <span className="relative z-10 flex items-center justify-center">
                Get a Free Quote <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="group flex items-center gap-4 text-[#F8F9FA] font-medium text-xs uppercase tracking-[0.3em] hover:text-[#C87A54] transition-colors py-4">
              <span className="w-14 h-14 flex items-center justify-center border border-[#F8F9FA]/20 rounded-full group-hover:border-[#C87A54] transition-colors">
                <PlayCircle className="w-5 h-5" />
              </span>
              How We Work
            </button>
          </div>
        </div>
      </section>

      {/* NEW: CTA Trust Strip */}
      <div className="bg-[#C87A54] py-4 relative z-20 shadow-xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center text-[#0A192F] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase gap-4 text-center">
            <div className="flex items-center gap-2"><Award className="w-5 h-5" /> Trusted by 10,000+ Indian Homes</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#0A192F]/30"></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> 5-Year Replacement Warranty</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#0A192F]/30"></div>
            <div className="flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Free Site Inspection</div>
          </div>
        </div>
      </div>

      {/* Services Grid Section - Moved Up! */}
      <section id="services" className="py-24 sm:py-32 bg-[#071324] relative">
        <div className="absolute inset-0 bg-net pointer-events-none opacity-40"></div>
        
        <div className="container px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">What We Offer</span>
                <span className="w-16 h-px bg-[#C87A54]/50"></span>
              </div>
              <h2 className="font-cormorant text-5xl sm:text-7xl text-white tracking-tight">
                Our Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {services.map((service, idx) => (
              <div key={service.id} className={`${service.colSpan} group relative h-[450px] sm:h-[600px] overflow-hidden border border-[#F8F9FA]/5 bg-[#0B1A3A]`}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover opacity-60 lg:opacity-50 grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:opacity-100 transition-all duration-[1500ms] lg:group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/70 to-transparent opacity-90 lg:group-hover:opacity-70 transition-opacity duration-[1500ms]"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-14 transform translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-[1000ms] ease-out">
                  <h3 className="font-cormorant text-3xl sm:text-5xl text-white mb-4 sm:mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-[#F8F9FA]/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-[1000ms] delay-200 max-w-md font-light">
                    {service.description}
                  </p>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#C87A54]/50 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-[1000ms] delay-300 bg-[#C87A54]/20 backdrop-blur-sm">
                    <ArrowRight className="text-[#C87A54] w-5 h-5 -rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 sm:py-32 relative bg-[#0A192F]">
        <div className="container px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6 relative h-[500px] sm:h-[700px] w-full order-2 lg:order-1">
              <div className="absolute left-0 top-10 w-[85%] h-[90%] overflow-hidden rounded-sm">
                <Image src="/images/indian_family_balcony.png" alt="Indian Family Safely Enjoying Balcony" fill className="object-cover transition-all duration-[2000ms] ease-in-out" />
                <div className="absolute inset-0 bg-[#0A192F]/20 hover:bg-transparent transition-colors duration-[2000ms]"></div>
              </div>
              <div className="absolute right-0 bottom-0 w-[55%] h-[45%] overflow-hidden border border-[#C87A54]/20 shadow-2xl rounded-sm">
                <Image src="/images/project1.jpeg" alt="Invisible Grill Details" fill className="object-cover" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-12 order-1 lg:order-2">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">Our Story</span>
                  <span className="w-16 h-px bg-[#C87A54]/50"></span>
                </div>
                <h2 className="font-cormorant text-5xl sm:text-7xl text-white leading-[1.05]">
                  Enjoy your balcony safely with your <span className="italic text-gradient-copper">family.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#F8F9FA]/70 leading-relaxed font-light">
                  We believe you shouldn't have to choose between a beautiful view and the safety of your children or pets. By using marine-grade 316 stainless steel, we install barriers that are practically invisible to the eye but incredibly strong against pressure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-[#F8F9FA]/10">
                <div>
                  <div className="font-cormorant text-6xl sm:text-7xl text-white mb-4">15<span className="text-[#C87A54]">+</span></div>
                  <div className="text-[10px] font-bold text-[#F8F9FA]/40 uppercase tracking-[0.3em]">Years Expertise</div>
                </div>
                <div>
                  <div className="font-cormorant text-6xl sm:text-7xl text-white mb-4">10<span className="text-[#C87A54]">k</span></div>
                  <div className="text-[10px] font-bold text-[#F8F9FA]/40 uppercase tracking-[0.3em]">Projects Delivered</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 sm:py-32 relative bg-[#071324]">
        <div className="absolute inset-0 bg-net pointer-events-none opacity-40"></div>
        <div className="container relative z-10 px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="flex justify-center items-center gap-4">
              <span className="w-12 h-px bg-[#C87A54]/50"></span>
              <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">Why Choose Us</span>
              <span className="w-12 h-px bg-[#C87A54]/50"></span>
            </div>
            <h2 className="font-cormorant text-5xl sm:text-6xl text-white tracking-tight">
              Uncompromising <span className="italic text-gradient-copper">Standards.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="midnight-glass p-12 text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#C87A54]/10 border border-[#C87A54]/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Anchor className="w-8 h-8 text-[#C87A54]" />
              </div>
              <h3 className="font-cormorant text-3xl text-white mb-4">Marine Grade Steel</h3>
              <p className="text-[#F8F9FA]/60 font-light leading-relaxed">
                We exclusively use 316-grade stainless steel. It is highly rust-resistant, incredibly durable, and built to last in the Indian climate.
              </p>
            </div>
            <div className="midnight-glass p-12 text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#C87A54]/10 border border-[#C87A54]/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <CheckSquare className="w-8 h-8 text-[#C87A54]" />
              </div>
              <h3 className="font-cormorant text-3xl text-white mb-4">5-Year Warranty</h3>
              <p className="text-[#F8F9FA]/60 font-light leading-relaxed">
                Total peace of mind. Every installation is backed by an unconditional 5-year structural warranty against defects and tension loss.
              </p>
            </div>
            <div className="midnight-glass p-12 text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#C87A54]/10 border border-[#C87A54]/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Crosshair className="w-8 h-8 text-[#C87A54]" />
              </div>
              <h3 className="font-cormorant text-3xl text-white mb-4">Clean Installation</h3>
              <p className="text-[#F8F9FA]/60 font-light leading-relaxed">
                No mess, no damage to your walls. Our technicians use advanced anchoring techniques for a perfectly flush and clean fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Parallax CTA Section */}
      <section className="relative py-32 w-full bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/images/project2.jpeg')" }}>
        {/* Deep overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-[#0A192F]/95 mix-blend-multiply"></div>
        
        <div className="container relative z-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#C87A54]/10 border border-[#C87A54]/30 flex items-center justify-center backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10 text-[#C87A54]" />
            </div>
            
            <h2 className="font-cormorant text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1]">
              Ready to secure your home with <span className="italic text-gradient-copper">absolute confidence?</span>
            </h2>
            
            <p className="text-xl text-[#F8F9FA]/70 font-light max-w-2xl mx-auto leading-relaxed">
              Join thousands of families who have chosen UrbanCrew for premium, invisible, and highly durable safety solutions.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 bg-[#C87A54] text-[#0A192F] font-bold text-xs tracking-[0.3em] uppercase overflow-hidden transition-all hover:bg-[#F8F9FA] shadow-[0_0_30px_rgba(200,122,84,0.3)]">
                <span className="relative z-10 flex items-center justify-center">
                  Book Free Inspection <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <a href="tel:+919900551942" className="group flex items-center gap-3 text-[#F8F9FA] font-medium text-xs uppercase tracking-[0.2em] hover:text-[#C87A54] transition-colors py-4">
                <PhoneCall className="w-5 h-5 text-[#C87A54]" />
                +91 99005 51942
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section (Light Theme) */}
      <section id="process" className="py-24 sm:py-32 relative bg-[#F8F9FA] text-[#0A192F]">
        <div className="container relative z-10 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">How We Work</span>
                <span className="w-16 h-px bg-[#C87A54]/50"></span>
              </div>
              <h2 className="font-cormorant text-5xl sm:text-7xl tracking-tight">
                Installation Process
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Timeline Left */}
            <div className="lg:col-span-7 relative border-l border-[#C87A54]/30 pl-8 md:pl-12 ml-4 md:ml-8 space-y-16">
              <div className="relative">
                <div className="absolute -left-[54px] md:-left-[70px] w-10 h-10 md:w-12 md:h-12 bg-[#F8F9FA] border-2 border-[#C87A54] rounded-full flex items-center justify-center text-[#C87A54] font-bold">1</div>
                <h3 className="font-cormorant text-3xl md:text-4xl mb-4">Free Site Inspection</h3>
                <p className="text-[#0A192F]/70 font-light leading-relaxed max-w-2xl">
                  We start with a free visit to your home. Our experts will understand your safety needs, measure your balcony space perfectly, and provide a transparent quote.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[54px] md:-left-[70px] w-10 h-10 md:w-12 md:h-12 bg-[#F8F9FA] border-2 border-[#C87A54] rounded-full flex items-center justify-center text-[#C87A54] font-bold">2</div>
                <h3 className="font-cormorant text-3xl md:text-4xl mb-4">Custom Measurement & Prep</h3>
                <p className="text-[#0A192F]/70 font-light leading-relaxed max-w-2xl">
                  All materials are customized to your exact balcony size. We use highly durable 316-grade stainless steel cables that are pre-tensioned to ensure maximum safety.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[54px] md:-left-[70px] w-10 h-10 md:w-12 md:h-12 bg-[#C87A54] border-2 border-[#C87A54] rounded-full flex items-center justify-center text-[#F8F9FA] font-bold">3</div>
                <h3 className="font-cormorant text-3xl md:text-4xl mb-4">Quick & Clean Installation</h3>
                <p className="text-[#0A192F]/70 font-light leading-relaxed max-w-2xl">
                  Our professional team arrives and safely installs the system within a few hours. We clean up after ourselves, leaving you with absolute safety and no mess.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-5 relative h-[500px] w-full hidden lg:block border border-[#0A192F]/5 shadow-2xl overflow-hidden group">
              <Image 
                src="/images/process_installation.png" 
                alt="Professional Technicians Installing Grills" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent pointer-events-none mix-blend-multiply"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <div className="bg-[#0A192F] pt-20 border-t border-[#F8F9FA]/5">
        <ReviewsMarquee />
      </div>

      {/* FAQ Section (Light Theme) */}
      <section id="faq" className="py-24 sm:py-32 bg-[#F8F9FA] text-[#0A192F]">
        <div className="container px-4 md:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="flex justify-center items-center gap-4">
              <span className="w-12 h-px bg-[#C87A54]/50"></span>
              <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">Knowledge Base</span>
              <span className="w-12 h-px bg-[#C87A54]/50"></span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-6xl">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#0A192F]/10 bg-white px-6 sm:px-10 py-2 data-[state=open]:border-[#C87A54]/30 shadow-sm transition-colors">
                <AccordionTrigger className="text-left font-cormorant text-2xl hover:text-[#C87A54] hover:no-underline transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0A192F]/70 font-light leading-relaxed pb-8 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-32 sm:py-48 bg-[#0A192F] overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C87A54]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="container relative z-10 px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            
            <div className="lg:w-1/2 space-y-12 text-center lg:text-left">
              <div className="inline-flex items-center gap-4">
                <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">Get In Touch</span>
                <span className="w-16 h-px bg-[#C87A54]/50"></span>
              </div>
              <h2 className="font-cormorant text-6xl sm:text-8xl leading-[1] text-white">
                Secure your <br/> <span className="italic text-gradient-copper">balcony today.</span>
              </h2>
              <p className="text-xl text-[#F8F9FA]/60 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Schedule a free home inspection. Our experts will take exact measurements and provide a completely transparent consultation.
              </p>
              
              <div className="flex items-center gap-8 justify-center lg:justify-start pt-8">
                <div className="w-20 h-20 rounded-full border border-[#C87A54]/20 flex items-center justify-center bg-[#C87A54]/5">
                  <PhoneCall className="text-[#C87A54] w-8 h-8" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-[#F8F9FA]/40 font-bold uppercase tracking-[0.3em] mb-2">Call Us Directly</p>
                  <p className="text-4xl font-cormorant tracking-tight text-white">+91 99005 51942</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-xl mx-auto">
              <div className="midnight-glass-solid p-10 sm:p-16 relative overflow-hidden">
                <h3 className="font-cormorant text-4xl text-white mb-4">Request a Free Quote</h3>
                <p className="text-[#F8F9FA]/40 font-light mb-12 text-sm tracking-wide">Quick, professional, and reliable installation.</p>
                
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-10">
                    <input type="text" placeholder="Full Name" className="w-full border-b border-[#F8F9FA]/20 bg-transparent py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C87A54] transition-colors font-light text-lg" />
                    <input type="tel" placeholder="Contact Number" className="w-full border-b border-[#F8F9FA]/20 bg-transparent py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C87A54] transition-colors font-light text-lg" />
                    <select className="w-full border-b border-[#F8F9FA]/20 bg-transparent py-4 text-[#F8F9FA]/50 focus:outline-none focus:border-[#C87A54] transition-colors font-light appearance-none cursor-pointer text-lg">
                      <option value="" className="bg-[#0A192F]">Select Service</option>
                      <option value="invisible" className="bg-[#0A192F]">Invisible Grills</option>
                      <option value="mosquito" className="bg-[#0A192F]">Mosquito Doors</option>
                      <option value="sports" className="bg-[#0A192F]">Sports Nets</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#C87A54] hover:bg-[#F8F9FA] text-[#0A192F] h-20 transition-all font-bold uppercase tracking-[0.3em] mt-16 flex items-center justify-center group text-xs shadow-2xl">
                    Submit Request <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform" />
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
