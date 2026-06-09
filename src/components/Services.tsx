import React from 'react';
import { Clock, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden border-t border-zinc-800" id="services">
      {/* Aesthetic backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold block mb-3 gold-text-glow">Our Menu Treatments</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            Bespoke Grooming Services
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37] mt-4 shadow-[0_0_6px_#D4AF37]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv: ServiceItem) => (
            <div
              key={srv.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-zinc-800 bg-[#151515] hover:border-[#D4AF37]/35 transition-all duration-300 shadow-xl"
            >
              
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div>
                
                {/* Micro Image Header for visual elegance */}
                <div className="relative h-48 overflow-hidden w-full border-b border-zinc-850">
                  <img
                    src={srv.image}
                    alt={srv.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-750"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-black/30" />
                  
                  {/* Floating Price rectangular badge - High Density Theme */}
                  <div className="absolute bottom-4 right-4 bg-[#111111] border border-[#D4AF37]/40 px-3 py-1.5 shadow-lg font-mono rounded-none">
                    <span className="text-xs font-bold text-[#D4AF37]">{srv.price}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  
                  {/* Title & Metadata row */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold tracking-widest uppercase text-white group-hover:text-[#D4AF37] transition-colors">
                      {srv.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-zinc-400 font-mono">
                      <Clock className="h-3 w-3 text-[#D4AF37]" />
                      <span>{srv.duration}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed tracking-wider min-h-[48px]">
                    {srv.description}
                  </p>

                  {/* Curated treatment indicators */}
                  <div className="pt-4 border-t border-zinc-800/60 space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 tracking-wide font-sans">
                      <CheckCircle2 className="h-3 w-3 text-[#D4AF37]" />
                      <span>Curated botanic double rinse</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 tracking-wide font-sans">
                      <CheckCircle2 className="h-3 w-3 text-[#D4AF37]" />
                      <span>Symmetrical style review</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Booking Action Row */}
              <div className="p-6 pt-0 mt-4">
                <button
                  onClick={() => onSelectService(srv.id)}
                  className="w-full rounded-none bg-[#111111] border border-zinc-800 group-hover:border-[#D4AF37]/45 text-zinc-300 group-hover:text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold py-3 px-4 transition-all duration-300 flex items-center justify-center gap-1"
                  id={`btn-book-service-${srv.id}`}
                >
                  <span>Select &amp; Book Treatment</span>
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Booking Alert Casing */}
        <div className="mt-16 text-center">
          <p className="font-serif text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]/80 font-semibold flex items-center justify-center gap-2">
            <Sparkles className="h-3 w-3" /> Luxury beverage pairing and hot towel rituals included in all packages
          </p>
        </div>

      </div>
    </section>
  );
}
