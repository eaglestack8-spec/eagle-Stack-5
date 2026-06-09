import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleAutoplay = setInterval(() => {
      setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(handleAutoplay);
  }, []);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden border-t border-zinc-800" id="testimonials">
      {/* Structural backgrounds */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold block mb-3">
            Guest Endorsements
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            The Aura Experience
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37]/40 mt-4" />
        </div>

        {/* Testimonials Slider Box */}
        <div className="relative rounded-none border border-zinc-800 bg-[#151515]/65 p-8 md:p-14 shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-between">
          
          {/* Accent Gold Quote Symbol */}
          <div className="absolute top-6 left-6 text-[#D4AF37]/5 pointer-events-none">
            <Quote className="h-28 w-28" />
          </div>

          {/* Active Testimonial Content with smooth layout fade effect */}
          <div>
            
            {/* Active Stars Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            {/* Quote Block */}
            <blockquote className="text-sm md:text-xl font-serif italic text-zinc-200 leading-relaxed tracking-wider">
              "{TESTIMONIALS[activeIndex].comment}"
            </blockquote>

          </div>

          {/* Profile Row & Control Indicators */}
          <div className="mt-10 pt-8 border-t border-zinc-805/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            
            {/* Person Profile */}
            <div className="text-left">
              <span className="block font-serif text-base text-white tracking-wider font-semibold">
                {TESTIMONIALS[activeIndex].name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mt-0.5 block">
                {TESTIMONIALS[activeIndex].role} — Verified Guest
              </span>
            </div>

            {/* Carousel Interactive Controls */}
            <div className="flex items-center gap-4">
              
              {/* Pagination Dots */}
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 transition-all duration-350 rounded-none ${
                      activeIndex === i ? 'w-5 bg-[#D4AF37]' : 'w-2 bg-zinc-800 hover:bg-[#D4AF37]/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="rounded-none border border-zinc-800 hover:border-[#D4AF37]/30 p-2 text-zinc-400 hover:text-white transition-all bg-[#111111]"
                  id="btn-test-prev"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-none border border-zinc-800 hover:border-[#D4AF37]/30 p-2 text-zinc-400 hover:text-white transition-all bg-[#111111]"
                  id="btn-test-next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Dynamic Reviews Subtitle */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-zinc-500 font-sans">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]/80" />
          <span>Average guest rating of 4.9 across verified listings</span>
        </div>

      </div>
    </section>
  );
}
