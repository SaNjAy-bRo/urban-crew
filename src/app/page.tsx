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
  },
  {
    id: 'mosquito-nets',
    title: 'Mosquito Doors',
    description: 'Premium mesh sliding systems engineered for seamless integration.',
    image: '/images/services/mosquito_sliding-doors.jpeg',
  },
  {
    id: 'sports-nets',
    title: 'Sports Enclosures',
    description: 'Architectural-grade netting for residential and commercial sports facilities.',
    image: '/images/services/sports-cricket-net.jpeg',
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Turf',
    description: 'Lush, maintenance-free landscaping solutions for modern terraces.',
    image: '/images/services/artificial_grass_turf.jpeg',
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
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* SaaS Hero Section with Form */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="City Skyline"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-white">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Invisible Safety, <br />
                Visible Peace of Mind
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200 mb-8 font-medium">
                Best price in Bangalore | 5,000+ satisfied homes
              </p>
              
              {/* Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-lg font-medium">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full p-1"><CheckSquare className="w-4 h-4 text-white" /></div>
                  Same-Day Installation
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full p-1"><CheckSquare className="w-4 h-4 text-white" /></div>
                  5000+ Installations
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full p-1"><CheckSquare className="w-4 h-4 text-white" /></div>
                  Best Price Guarantee
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full p-1"><CheckSquare className="w-4 h-4 text-white" /></div>
                  Premium Quality Materials
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919902299696" className="flex items-center justify-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors shadow-lg text-lg">
                  <PhoneCall className="w-5 h-5" /> Call Now
                </a>
                <a href="https://wa.me/919902299696" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg text-lg">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="w-full lg:w-2/5 max-w-md mx-auto lg:ml-auto">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-center text-[#3B82F6] mb-6">Request a Call Back</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>
                  <button className="w-full bg-[#3B82F6] text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-600 transition-colors shadow-md mt-2">
                    Request Now
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="services" className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">Our Products</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 font-medium">
            Explore our range of premium safety solutions — from invisible grills to anti-bird netting, sports nets, and balcony hangers. Designed for durability, safety, and elegance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-[#3B82F6] font-bold hover:text-blue-700 transition-colors flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/indian_family_balcony.png" alt="Indian Family Safely Enjoying Balcony" fill className="object-cover" />
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#3B82F6] rounded-full font-bold text-sm">
                <ShieldCheck className="w-4 h-4" /> Trusted Safety Experts
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Enjoy your balcony safely with your family.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe you shouldn't have to choose between a beautiful view and the safety of your children or pets. By using marine-grade 316 stainless steel, we install barriers that are practically invisible to the eye but incredibly strong against pressure.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-5xl font-extrabold text-[#3B82F6] mb-2">15+</div>
                  <div className="font-bold text-slate-500 uppercase tracking-wide">Years Expertise</div>
                </div>
                <div>
                  <div className="text-5xl font-extrabold text-[#3B82F6] mb-2">10k</div>
                  <div className="font-bold text-slate-500 uppercase tracking-wide">Projects Delivered</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-[#F8FAFC]">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">Why Choose Us</h2>
            <p className="text-xl text-slate-600 font-medium">Uncompromising standards for your family's safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-[#3B82F6]">
                <Anchor className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Marine Grade Steel</h3>
              <p className="text-slate-600 leading-relaxed">
                We exclusively use 316-grade stainless steel. It is highly rust-resistant, incredibly durable, and built to last.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-[#3B82F6]">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">5-Year Warranty</h3>
              <p className="text-slate-600 leading-relaxed">
                Total peace of mind. Every installation is backed by an unconditional 5-year structural warranty.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-[#3B82F6]">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Clean Installation</h3>
              <p className="text-slate-600 leading-relaxed">
                No mess, no damage to your walls. Our technicians use advanced anchoring techniques for a flush fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">Installation Process</h2>
            <p className="text-xl text-slate-600 font-medium">Quick, professional, and reliable deployment.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Timeline Left */}
            <div className="lg:w-1/2 relative border-l-2 border-blue-100 pl-8 ml-4 md:ml-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold shadow-md ring-4 ring-white">1</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Free Site Inspection</h3>
                <p className="text-slate-600 leading-relaxed">
                  We start with a free visit to your home. Our experts will understand your safety needs, measure your balcony space perfectly, and provide a transparent quote.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold shadow-md ring-4 ring-white">2</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Measurement & Prep</h3>
                <p className="text-slate-600 leading-relaxed">
                  All materials are customized to your exact balcony size. We use highly durable 316-grade stainless steel cables that are pre-tensioned.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold shadow-md ring-4 ring-white">3</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Quick & Clean Installation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our professional team arrives and safely installs the system within a few hours. We clean up after ourselves.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:w-1/2 relative h-[500px] w-full hidden lg:block rounded-2xl shadow-xl overflow-hidden">
              <Image 
                src="/images/process_installation.png" 
                alt="Professional Technicians Installing Grills" 
                fill 
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Mid-Page CTA Section */}
      <section className="bg-[#1E3A8A] py-20 text-white text-center">
        <div className="container px-4 md:px-8 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to secure your home?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of families who have chosen Urban Invisible Grills for premium, invisible, and highly durable safety solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-[#1E3A8A] font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors shadow-lg text-lg">
              Request a Quote
            </button>
            <a href="tel:+919902299696" className="bg-[#3B82F6] text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors shadow-lg text-lg flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <div className="bg-[#F8FAFC] pt-20 pb-10 border-t border-slate-100">
        <ReviewsMarquee />
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about our invisible grills.</p>
          </div>

          <Accordion className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 bg-white px-6 rounded-lg data-[state=open]:border-[#3B82F6] transition-colors shadow-sm">
                <AccordionTrigger className="text-left font-bold text-lg text-slate-800 hover:text-[#3B82F6] hover:no-underline transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer is rendered in layout.tsx */}
    </div>
  );
}
