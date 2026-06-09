import React, { useState } from 'react';
import { Sparkles, Scissors, Coins } from 'lucide-react';
import { HAIRCUT_STYLES } from '../data';
import { StyleItem } from '../types';

interface HaircutStylesProps {
  onBookStyle: (serviceName: string) => void;
}

export default function HaircutStyles({ onBookStyle }: HaircutStylesProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract categories
  const categories = ['All', 'Classic & Professional', 'Modern Precision', 'Edgy & Modern', 'Minimalist & Low-Maintenance'];

  const filteredStyles = selectedCategory === 'All' 
    ? HAIRCUT_STYLES 
    : HAIRCUT_STYLES.filter(s => s.category.includes(selectedCategory) || s.category === selectedCategory);

  return (
    <section className="relative py-24 bg-[#151515] overflow-hidden border-b border-zinc-800" id="styles">
      {/* Structural backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.01] blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold block mb-3 gold-text-glow">
            Bespoke Lookbook
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            Signature Haircut Styles
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37] mt-4 mb-6 shadow-[0_0_6px_#D4AF37]" />
          <p className="max-w-2xl mx-auto text-[11px] text-zinc-400 font-sans leading-relaxed tracking-wider">
            Browse our curated collections of premium haircuts. Each design is meticulously measured, cut, blended, and styled by our master barbers based on your direct styling aspirations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-[10px] tracking-widest uppercase font-semibold transition-all duration-300 border rounded-none ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'bg-[#111111]/45 text-zinc-400 border-zinc-800 hover:border-[#D4AF37]/35 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Masterpieces' : cat.split(' & ')[0]}
            </button>
          ))}
        </div>

        {/* Styles Grid - Responsive Bento Casing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStyles.map((style: StyleItem) => (
            <div
              key={style.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-zinc-800 bg-[#111111] hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl"
            >
              
              {/* Card Image and price badge */}
              <div className="relative overflow-hidden aspect-[4/5] w-full border-b border-zinc-850">
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />

                {/* Main image */}
                <img
                  src={style.image}
                  alt={style.name}
                  className="h-full w-full object-cover object-center scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Starting Price badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 rounded-none bg-black/85 border border-zinc-800 px-2.5 py-1 backdrop-blur-sm">
                  <span className="text-[8px] tracking-wider text-zinc-400 uppercase font-sans">Starting</span>
                  <span className="text-xs font-semibold text-[#D4AF37] font-mono">{style.price}</span>
                </div>

                {/* Category small floating tag */}
                <span className="absolute bottom-4 left-4 z-20 text-[8px] tracking-widest text-[#D4AF37]/80 font-bold uppercase bg-[#111111]/80 px-2 py-0.5 rounded-none border border-zinc-800 font-sans">
                  {style.category}
                </span>

              </div>

              {/* Card content text */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-[#111111]/40">
                
                <div>
                  <h3 className="font-serif text-lg text-white font-bold tracking-widest uppercase group-hover:text-[#D4AF37] transition-colors">
                    {style.name}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#D4AF37]/30 my-2.5" />
                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed tracking-wider min-h-[36px]">
                    {style.description}
                  </p>
                </div>

                {/* Quick actions inside lookbook */}
                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-medium">
                    <Scissors className="h-3 w-3 text-[#D4AF37]" />
                    <span className="text-[9px] uppercase tracking-wider">Includes Consult</span>
                  </div>
                  
                  <button
                    onClick={() => onBookStyle(style.name)}
                    className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1.5"
                    id={`btn-book-style-${style.id}`}
                  >
                    <span>Reserve</span>
                    <Sparkles className="h-2.5 w-2.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Styles Lookbook Footer Banner */}
        <div className="mt-16 rounded-none border border-zinc-800 bg-[#111111]/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="text-left font-sans">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Bespoke Custom Silhouette?</span>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-2xl font-sans tracking-wider">
              Don’t see your desired scissor alignment listed? Our master stylists excel in bespoke tailored creations based on your custom editorial reference photos. Simply bring your imagery inside the studio.
            </p>
          </div>
          <button
            onClick={() => onBookStyle('Bespoke Hairstyle Cuts')}
            className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 transition-all rounded-none shrink-0"
          >
            Schedule Free Consult
          </button>
        </div>

      </div>
    </section>
  );
}
