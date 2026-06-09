import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const handleScrollToSection = (event: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111] border-b border-zinc-800" id="hero">
      
      {/* Background Image with Crisp Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Salon Interior"
          className="h-full w-full object-cover object-center opacity-25 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-black/90" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      {/* Styled Grid/Dust Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_75%)] z-0" />

      {/* Hero Content with High Density aesthetics */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-36 pb-20 text-center">
        
        {/* Sparkle Tag */}
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#151515] px-4 py-1.5 mb-8 animate-fade-in rounded-none">
          <Sparkles className="h-3 w-3 text-[#D4AF37]" />
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
            Bespoke Grooming &amp; Wellness Studio • Est. 2012
          </span>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.2em] font-bold mb-4 uppercase animate-fade-in gold-text-glow">
          AURA
        </h1>

        {/* Accent Golden Divider Line */}
        <div className="mx-auto w-24 h-[1px] bg-[#D4AF37] mb-8 shadow-[0_0_8px_#D4AF37]" />

        {/* Tagline */}
        <p className="max-w-xl mx-auto font-serif text-base sm:text-lg lg:text-xl text-zinc-300 tracking-[0.1em] mb-12 italic leading-relaxed">
          "Transform your look with expert styling at the premier destination for masculine grooming."
        </p>

        {/* CTA Buttons - High Density Square Styled */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          {/* Book Appointment Button */}
          <button
            onClick={onOpenBooking}
            className="w-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-[#D4AF37]/90 active:scale-[0.98] transition-all rounded-none"
            id="hero-btn-book"
          >
            Book Appointment
          </button>

          {/* View Styles Button */}
          <button
            onClick={(e) => handleScrollToSection(e, 'styles')}
            className="w-full border border-zinc-700 hover:border-[#D4AF37] hover:bg-zinc-900/40 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3.5 transition-all rounded-none flex items-center justify-center gap-2"
            id="hero-btn-styles"
          >
            <span>Signature Styles</span>
            <ArrowRight className="h-3 w-3 text-[#D4AF37]" />
          </button>

        </div>

        {/* Mini Stats Banner - Flat High Density Grid with Sharp Borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-28 border border-zinc-800 bg-[#151515]/80 max-w-4xl mx-auto divide-x divide-y md:divide-y-0 divide-zinc-800">
          <div className="p-6">
            <span className="block font-serif text-3xl font-bold gold-text-glow">15+</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 mt-2 block font-semibold">Master Artists</span>
          </div>
          <div className="p-6">
            <span className="block font-serif text-3xl font-bold gold-text-glow">4.9★</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 mt-2 block font-semibold">Verified Rating</span>
          </div>
          <div className="p-6">
            <span className="block font-serif text-3xl font-bold gold-text-glow">6k+</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 mt-2 block font-semibold">Precision Cuts</span>
          </div>
          <div className="p-6">
            <span className="block font-serif text-3xl font-bold gold-text-glow">100%</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 mt-2 block font-semibold">Organic Elixirs</span>
          </div>
        </div>

      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <button
          onClick={(e) => handleScrollToSection(e, 'about')}
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-[#D4AF37] transition-colors duration-300"
          id="hero-btn-scroll"
        >
          <span className="text-[8px] tracking-[0.4em] uppercase">Discovery</span>
          <div className="w-5 h-8 border border-zinc-800 flex justify-center p-1 rounded-none">
            <div className="w-1 h-2 bg-[#D4AF37] animate-bounce" />
          </div>
        </button>
      </div>

      {/* Styled inline scaleHero animation */}
      <style>{`
        @keyframes scaleHero {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>

    </div>
  );
}
