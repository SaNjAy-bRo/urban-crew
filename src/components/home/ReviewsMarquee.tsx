'use client';
import { Star, Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';

const reviews = [
  { name: "Rahul Sharma", loc: "Whitefield", text: "Urban Invisible Grills did a fantastic job installing in my 12th-floor apartment. The team was highly professional, and the view is completely unobstructed!", rating: 5 },
  { name: "Priya Desai", loc: "Indiranagar", text: "Got their mosquito sliding doors for my villa. The quality is premium and it slides so smoothly. Very happy with the service.", rating: 5 },
  { name: "Karthik N.", loc: "HSR Layout", text: "We installed artificial grass on our terrace. It totally transformed the space into a beautiful lounge area. Highly recommended!", rating: 5 },
  { name: "Ananya R.", loc: "Koramangala", text: "Best safety net installation in Bangalore. They finished in under 4 hours with zero mess. Our balcony looks stunning!", rating: 5 },
  { name: "Vikram M.", loc: "JP Nagar", text: "Exceptional quality sports nets for our cricket practice area. Durable, well-fitted, and great value for money.", rating: 5 },
  { name: "Sneha K.", loc: "Electronic City", text: "The invisible grills gave us complete peace of mind with our toddler. Can't even tell they're there. Truly invisible!", rating: 5 },
];

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group relative shadow-sm">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent pointer-events-none rounded-tr-2xl"></div>
      <Quote className="w-8 h-8 text-blue-200 mb-6 group-hover:text-[#3B82F6] transition-colors" />
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-medium">"{r.text}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#3B82F6] font-bold text-xl bg-blue-50">{r.name[0]}</div>
        <div>
          <div className="font-bold text-slate-900 text-lg">{r.name}</div>
          <div className="text-slate-500 text-[11px] tracking-wide font-semibold mt-0.5">{r.loc}</div>
        </div>
        <div className="ml-auto flex gap-1">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
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
  const speedRef = useRef(1);
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
    <section id="reviews" className="py-24 bg-[#0A192F] overflow-hidden relative border-t border-blue-900/50">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B82F6]/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      <div className="container px-4 md:px-8 mb-16 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">10,000+ Families</span>
        </h2>
        <p className="text-xl text-blue-100/80 font-medium">Hear from our satisfied customers across Bangalore.</p>
      </div>
      <div
        className="relative z-10"
        onMouseEnter={() => { pauseRef.current = true; }}
        onMouseLeave={() => { pauseRef.current = false; }}
        onTouchStart={() => { pauseRef.current = true; }}
        onTouchEnd={() => { pauseRef.current = false; }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-r from-[#0A192F] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-l from-[#0A192F] to-transparent z-20 pointer-events-none" />
        <div ref={scrollRef} className="flex gap-6 sm:gap-8 will-change-transform pb-8 pt-4 px-4">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
