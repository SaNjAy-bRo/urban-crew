'use client';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState, useCallback } from 'react';

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
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] snap-center bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col">
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: r.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>
      <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-8 flex-grow font-medium">"{r.text}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl bg-gradient-to-tr from-[#3B82F6] to-[#F97316] shrink-0 shadow-md">
          {r.name[0]}
        </div>
        <div>
          <div className="font-bold text-slate-900 text-[16px]">{r.name}</div>
          <div className="text-slate-400 text-[12px] font-semibold tracking-wide uppercase mt-0.5">{r.loc}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Scroll by roughly one card width
      const scrollAmount = window.innerWidth < 640 ? 320 : 374; 
      
      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 0) {
          scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    // Auto scroll every 2 seconds (1 second is slightly too fast to read)
    const timer = setInterval(() => {
      scroll('right');
    }, 2000);

    return () => clearInterval(timer);
  }, [scroll, isPaused]);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E3A8A] mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#F97316]">10,000+ Families</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">Don't just take our word for it. Hear from our satisfied customers across Bangalore.</p>
          </div>
          
          <div className="flex gap-3 shrink-0 self-start sm:self-end">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all shadow-sm hover:scale-105 active:scale-95">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all shadow-sm hover:scale-105 active:scale-95">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Container (Interactive Carousel) */}
        <div className="-mx-4 md:-mx-8 px-4 md:px-8">
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              // Add a slight delay before resuming auto-scroll after touch
              setTimeout(() => setIsPaused(false), 2000);
            }}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
