import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1b3f] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f57c20]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#06112a] to-transparent pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 space-y-8 lg:pr-12">
            <Link href="/" className="inline-block group">
              <span className="font-extrabold text-[32px] tracking-tight text-white group-hover:text-[#f57c20] transition-colors">
                Urban<span className="text-[#f57c20] group-hover:text-white transition-colors">Crew</span>
              </span>
            </Link>
            <p className="text-blue-100/70 text-base leading-relaxed font-light">
              Elevating urban living with premium, aesthetically pleasing, and highly durable safety netting solutions. Your safety, our priority.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-xs">Explore</h3>
            <ul className="space-y-4 text-base text-blue-100/70 font-light">
              <li><Link href="/" className="hover:text-[#f57c20] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-transparent hover:bg-[#f57c20]"></span>Home</Link></li>
              <li><Link href="#about" className="hover:text-[#f57c20] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-transparent hover:bg-[#f57c20]"></span>About Us</Link></li>
              <li><Link href="#services" className="hover:text-[#f57c20] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-transparent hover:bg-[#f57c20]"></span>Services</Link></li>
              <li><Link href="#contact" className="hover:text-[#f57c20] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-transparent hover:bg-[#f57c20]"></span>Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-xs">Solutions</h3>
            <ul className="space-y-4 text-base text-blue-100/70 font-light">
              <li><Link href="#invisible-grills" className="hover:text-white transition-colors">Invisible Grills</Link></li>
              <li><Link href="#mosquito-nets" className="hover:text-white transition-colors">Mosquito Doors</Link></li>
              <li><Link href="#sports-nets" className="hover:text-white transition-colors">Sports Nets</Link></li>
              <li><Link href="#artificial-grass" className="hover:text-white transition-colors">Artificial Grass</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-8 text-white uppercase tracking-widest text-xs">Direct Contact</h3>
            <ul className="space-y-6 text-base text-blue-100/70 font-light">
              <li className="flex gap-4 items-start group">
                <MapPin className="h-5 w-5 text-[#f57c20] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">123 Safe Home Blvd, <br/>Bangalore 560001</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Phone className="h-5 w-5 text-[#f57c20] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-white text-lg">+91 99005 51942</span>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail className="h-5 w-5 text-[#f57c20] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hover:text-white transition-colors cursor-pointer">info@urbancrew.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-blue-100/50 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#f57c20]" />
            &copy; {new Date().getFullYear()} Urban Crew Netting Solutions. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-light text-blue-100/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
