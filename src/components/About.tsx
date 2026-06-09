import React, { useState, useEffect } from 'react';
import { Award, UserCheck, Shield, Sparkles } from 'lucide-react';

export default function About() {
  // Counters for statistics
  const [years, setYears] = useState(0);
  const [stylists, setStylists] = useState(0);
  const [guests, setGuests] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    // Basic clean incrementers
    const interval = setInterval(() => {
      setYears(prev => {
        if (prev >= 15) return 15;
        return prev + 1;
      });
      setStylists(prev => {
        if (prev >= 4) return 4;
        return prev + 1;
      });
      setGuests(prev => {
        if (prev >= 6200) return 6200;
        return prev + 155;
      });
      setAwards(prev => {
        if (prev >= 12) return 12;
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: <UserCheck className="h-6 w-6 text-[#D4AF37]" />,
      title: 'Professional Stylists',
      description: 'Our team consists of certified world-class master barbers and color specialists trained in Milan, London, and Tokyo.'
    },
    {
      icon: <Shield className="h-6 w-6 text-[#D4AF37]" />,
      title: 'Premium Products',
      description: 'We use exclusively organic, cruelty-free, bio-stabilized scalp elixirs and custom styling clays designed for prestige hair health.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#D4AF37]" />,
      title: 'Personalized Grooming',
      description: 'Every session starts with an architectural face-shape analysis and personal lifestyle mapping to co-create a bespoke silhouette.'
    }
  ];

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden border-t border-zinc-800" id="about">
      {/* Visual background details */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold block mb-3 gold-text-glow">Our Legacy & Mission</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            The Golden Standard of Bespoke Grooming
          </h2>
          <div className="mx-auto w-12 h-[1px] bg-[#D4AF37] mt-4 shadow-[0_0_6px_#D4AF37]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Beautiful Frame with Image and Gold Corner Overlays */}
          <div className="lg:col-span-5 relative group">
            
            {/* Elegant corner highlights simulating pure gold casing */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] rounded-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] rounded-none" />
            <div className="absolute -top-3 -right-3 w-4 h-4 border-t border-r border-[#D4AF37]/40" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b border-l border-[#D4AF37]/40" />

            <div className="relative overflow-hidden rounded-none border border-zinc-800 shadow-2xl bg-[#151515] aspect-[4/5] object-cover">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
                alt="Styling session inside Aura Salon"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-4 bg-[#111111] border border-zinc-800 rounded-none p-4 shadow-xl flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-[#D4AF37]/10 rounded-none border border-[#D4AF37]/20 text-[#D4AF37]">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left font-sans">
                <span className="block text-[8px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">Established</span>
                <span className="text-xs font-semibold text-white tracking-widest uppercase block mt-1">Aura Studio, London</span>
              </div>
            </div>

          </div>

          {/* Right: Intro text & feature highlights */}
          <div className="lg:col-span-7 text-left space-y-10">
            
            <div className="space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl text-[#D4AF37] italic font-light">
                "Where precision meets pure indulgence."
              </h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed tracking-wider">
                At Aura, we believe that grooming is far more than a routine task; it is an intimate ceremony of transformation. We have meticulously built a sanctuary for modern connoisseurs of elegance, where master artisans fuse traditional expertise with avant-garde styling philosophies. Under our golden-trimmed chandeliers, every look is tailored, every touch is measured, and every visitor is a celebrated guest.
              </p>
            </div>

            {/* Highlights Lists */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-none bg-[#151515]/40 border border-zinc-800 hover:border-[#D4AF37]/40 transition-all duration-300">
                  <div className="flex h-11 w-11 mt-1 shrink-0 items-center justify-center rounded-none bg-[#111111] border border-zinc-850">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-white font-bold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Statistical Animated Counters Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-24 border border-zinc-800 bg-[#151515]/80 divide-x divide-y md:divide-y-0 divide-zinc-800 max-w-5xl mx-auto text-center font-serif">
          <div className="p-8">
            <span className="block text-4xl lg:text-5xl font-bold tracking-wider gold-text-glow">
              {years}+
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 font-sans mt-2 block font-semibold">
              Years of Prestige Masterclass
            </span>
          </div>

          <div className="p-8">
            <span className="block text-4xl lg:text-5xl font-bold tracking-wider gold-text-glow">
              {stylists}
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 font-sans mt-2 block font-semibold">
              Certified Master Artisans
            </span>
          </div>

          <div className="p-8">
            <span className="block text-4xl lg:text-5xl font-bold tracking-wider gold-text-glow">
              {guests.toLocaleString()}+
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 font-sans mt-2 block font-semibold">
              Satisfied Luxury Guests
            </span>
          </div>

          <div className="p-8">
            <span className="block text-4xl lg:text-5xl font-bold tracking-wider gold-text-glow">
              {awards}
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-500 font-sans mt-2 block font-semibold">
              Styling &amp; Editorial Awards
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
