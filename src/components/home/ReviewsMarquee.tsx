'use client';
import { Star, Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';

const reviews = [
  { name: "Rahul Sharma", loc: "Whitefield", text: "Urban Crew did a fantastic job installing invisible grills in my 12th-floor apartment. The team was highly professional, and the view is completely unobstructed!", rating: 5 },
  { name: "Priya Desai", loc: "Indiranagar", text: "Got their mosquito sliding doors for my villa. The quality is premium and it slides so smoothly. Very happy with the service.", rating: 5 },
  { name: "Karthik N.", loc: "HSR Layout", text: "We installed artificial grass on our terrace. It totally transformed the space into a beautiful lounge area. Highly recommended!", rating: 5 },
  { name: "Ananya R.", loc: "Koramangala", text: "Best safety net installation in Bangalore. They finished in under 4 hours with zero mess. Our balcony looks stunning!", rating: 5 },
  { name: "Vikram M.", loc: "JP Nagar", text: "Exceptional quality sports nets for our cricket practice area. Durable, well-fitted, and great value for money.", rating: 5 },
  { name: "Sneha K.", loc: "Electronic City", text: "The invisible grills gave us complete peace of mind with our toddler. Can't even tell they're there. Truly invisible!", rating: 5 },
];

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-none p-8 sm:p-10 border border-[#C87A54]/20 hover:border-[#C87A54] hover:shadow-[0_10px_40px_rgba(200,122,84,0.15)] transition-all duration-500 group relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C87A54]/10 to-transparent pointer-events-none"></div>
      <Quote className="w-8 h-8 text-[#C87A54]/50 mb-6 group-hover:text-[#C87A54] transition-colors" />
      <p className="text-[#0A192F]/80 text-sm sm:text-base leading-relaxed mb-8 font-medium italic">"{r.text}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-[#0A192F]/10">
        <div className="w-12 h-12 rounded-full border border-[#C87A54]/30 flex items-center justify-center text-[#0A192F] font-cormorant text-2xl bg-[#C87A54]/10">{r.name[0]}</div>
        <div>
          <div className="font-cormorant text-[#0A192F] font-bold text-lg">{r.name}</div>
          <div className="text-[#0A192F]/50 text-[10px] tracking-[0.2em] uppercase font-bold mt-1">{r.loc}</div>
        </div>
        <div className="ml-auto flex gap-1">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#C87A54] text-[#C87A54]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const speedRef = useRef(1); // pixels per frame (~60fps = ~60px/s)
  const pauseRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;

    const tick = () => {
      if (!pauseRef.current) {
        posRef.current += speedRef.current;
        if (posRef.current >= half) posRef.current = 0;
        el.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-transparent overflow-hidden font-montserrat relative">
      <div className="container px-4 md:px-8 mb-16 sm:mb-20 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-px bg-[#C87A54]/50"></span>
          <span className="text-[#C87A54] font-bold tracking-[0.3em] uppercase text-[10px]">Client Testimonials</span>
        </div>
        <h2 className="font-cormorant text-4xl sm:text-5xl md:text-7xl text-white tracking-tight">
          Trusted by <span className="italic text-gradient-copper">10,000+</span> Facilities.
        </h2>
      </div>
      <div
        className="relative z-10"
        onMouseEnter={() => { pauseRef.current = true; }}
        onMouseLeave={() => { pauseRef.current = false; }}
        onTouchStart={() => { pauseRef.current = true; }}
        onTouchEnd={() => { pauseRef.current = false; }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-r from-[#0A192F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-l from-[#0A192F] to-transparent z-10 pointer-events-none" />
        <div ref={scrollRef} className="flex gap-6 sm:gap-8 will-change-transform pb-8 pt-4 px-4">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
