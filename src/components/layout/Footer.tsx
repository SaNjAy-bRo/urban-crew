import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#F8F9FA] pt-24 pb-12 relative overflow-hidden font-montserrat border-t border-[#F8F9FA]/5">
      {/* Subtle luxury gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C87A54]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 space-y-8 lg:pr-12">
            <Link href="/" className="inline-block group">
              <span className="font-cormorant font-bold text-[40px] tracking-tight text-white transition-colors">
                Urban<span className="italic text-[#C87A54] transition-colors">Crew.</span>
              </span>
            </Link>
            <p className="text-[#F8F9FA]/50 text-base leading-relaxed font-light">
              Elevating architectural integrity with premium, seamlessly integrated safety and netting solutions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-[10px] mb-8 text-[#C87A54] uppercase tracking-[0.3em]">Explore</h3>
            <ul className="space-y-4 text-sm text-[#F8F9FA]/60 font-light">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2">Home</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors flex items-center gap-2">Why Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2">Catalog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors flex items-center gap-2">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-[10px] mb-8 text-[#C87A54] uppercase tracking-[0.3em]">Systems</h3>
            <ul className="space-y-4 text-sm text-[#F8F9FA]/60 font-light">
              <li><Link href="#invisible-grills" className="hover:text-white transition-colors">Invisible Grills</Link></li>
              <li><Link href="#mosquito-nets" className="hover:text-white transition-colors">Mosquito Doors</Link></li>
              <li><Link href="#sports-nets" className="hover:text-white transition-colors">Sports Enclosures</Link></li>
              <li><Link href="#artificial-grass" className="hover:text-white transition-colors">Artificial Turf</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-[10px] mb-8 text-[#C87A54] uppercase tracking-[0.3em]">Concierge</h3>
            <ul className="space-y-6 text-sm text-[#F8F9FA]/60 font-light">
              <li className="flex gap-4 items-start group">
                <MapPin className="h-5 w-5 text-[#C87A54] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">123 Corporate Blvd, <br/>Bangalore 560001</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone className="h-5 w-5 text-[#C87A54] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-white text-2xl font-bold tracking-tight">+91 99005 51942</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail className="h-5 w-5 text-[#C87A54] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors cursor-pointer">concierge@urbancrew.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#F8F9FA]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[#F8F9FA]/30 text-[10px] uppercase tracking-widest font-bold">
            <ShieldCheck className="w-4 h-4 text-[#C87A54]" />
            &copy; {new Date().getFullYear()} Urban Crew Netting Solutions.
          </div>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-[#F8F9FA]/30">
            <Link href="#" className="hover:text-[#F8F9FA] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#F8F9FA] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
