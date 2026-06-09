import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';
import { PricingPackage } from '../types';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden border-t border-zinc-800" id="pricing">
      {/* Background radial details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.012] blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold block mb-3 gold-text-glow">
            Elite Packages
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            Curated Styling Programs
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37] mt-4 mb-6 shadow-[0_0_6px_#D4AF37]" />
          <p className="max-w-2xl mx-auto text-[11px] text-zinc-400 font-sans leading-relaxed tracking-wider">
            Choose from our pre-arranged signature combinations for deep, complete, and thoroughly relaxing hair and skincare rejuvenation cycles.
          </p>
        </div>

        {/* Pricing Cards Grid - Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg: PricingPackage) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-none border p-6 md:p-8 transition-all duration-500 shadow-xl ${
                pkg.popular
                  ? 'border-[#D4AF37] bg-[#151515] lg:scale-105 z-10'
                  : 'border-zinc-800 bg-[#151515]/50 hover:border-[#D4AF37]/30'
              }`}
            >
              
              {/* Popularity Visual banner */}
              {pkg.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] rounded-none px-4 py-1 text-[8px] tracking-[0.25em] font-sans font-bold uppercase text-black flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  <span>MOST SELECTIVE</span>
                </div>
              )}

              {/* Upper segment */}
              <div>
                
                {/* Header info */}
                <div className="text-left mb-6">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37] font-sans">
                    Signature Ritual
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wider font-bold uppercase mt-1">
                    {pkg.name}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed mt-2 min-h-[36px] tracking-wide">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-6 text-left border-y border-zinc-800/80 py-4">
                  <span className="font-serif text-4xl sm:text-5xl font-medium tracking-wide gold-text-glow">
                    {pkg.price}
                  </span>
                  <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-bold font-sans">
                    / SESSION
                  </span>
                </div>

                {/* Features list */}
                <ul className="space-y-3.5 my-8 text-left text-[11px] text-zinc-300 tracking-wider">
                  {pkg.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="font-sans text-zinc-300">{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Booking Trigger button */}
              <div className="pt-6 border-t border-zinc-800/85">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full rounded-none py-3.5 text-[10px] tracking-widest uppercase font-bold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#D4AF37] text-black hover:opacity-95'
                      : 'bg-[#111111] border border-zinc-800 text-zinc-300 hover:border-[#D4AF37]/45 hover:text-[#D4AF37]'
                  }`}
                  id={`btn-select-package-${pkg.id}`}
                >
                  Book Program
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
