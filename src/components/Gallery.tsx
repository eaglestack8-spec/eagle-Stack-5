import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === 0) return GALLERY_IMAGES.length - 1;
        return (prev ?? 0) - 1;
      });
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === GALLERY_IMAGES.length - 1) return 0;
        return (prev ?? 0) + 1;
      });
    }
  };

  return (
    <section className="relative py-24 bg-[#151515] overflow-hidden border-b border-zinc-800" id="gallery">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold block mb-3">
            In-House Ambiance
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            The Studio Gallery
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37]/40 mt-4 mb-6" />
          <p className="max-w-2xl mx-auto text-[11px] text-zinc-400 font-sans leading-relaxed tracking-wider">
            Explore the bespoke luxury aesthetic of our London workspace. Every corner is designed to inspire tranquility, prestige, and timelessness.
          </p>
        </div>

        {/* Masonry-Style Grid of Cards */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => {
            // Give layout sizes different heights on desktop to create simulated elegant vertical offsets
            const cardHeightTheme = index % 3 === 0 
              ? 'aspect-[4/5]' 
              : index % 3 === 1 
                ? 'aspect-[1/1]' 
                : 'aspect-[4/3]';

            return (
              <div
                key={img.id}
                onClick={() => openLightbox(index)}
                className={`break-inside-avoid relative overflow-hidden rounded-none border border-zinc-800 bg-[#111111] group cursor-pointer shadow-lg hover:border-[#D4AF37]/35 transition-all duration-500 ${cardHeightTheme}`}
              >
                
                {/* Image */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                />

                {/* Dark Hover overlay screen */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                  <div className="self-end rounded-none bg-[#111111] border border-[#D4AF37]/40 p-2 text-[#D4AF37]">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                  
                  <div className="text-left">
                    <span className="text-[8px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold font-sans">AURA STUDIO</span>
                    <h4 className="font-serif text-base text-white font-medium tracking-wide mt-1">
                      {img.title}
                    </h4>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Decorative Grid Footer Badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-4">
          <ImageIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span>Click any image to trigger luxury studio lightbox</span>
        </div>

      </div>

      {/* STUNNING LIGHTBOX PREVIEW MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop Close Click area */}
          <div className="absolute inset-0" onClick={closeLightbox} />

          {/* Close Header button */}
          <div className="absolute top-6 right-6 z-55 flex items-center gap-4 text-white">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37]">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </span>
            <button 
              onClick={closeLightbox}
              className="rounded-none bg-[#111111] border border-zinc-850 p-2.5 text-zinc-400 hover:text-white transition-colors"
              id="btn-close-lightbox"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Main Display container */}
          <div className="relative z-10 max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
            
            {/* Prev Navigation Trigger */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:-left-16 z-20 rounded-none bg-black/80 border border-zinc-805 p-3 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all"
              id="btn-lightbox-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Lightbox Main Image */}
            <div className="relative rounded-none border border-zinc-800 overflow-hidden bg-black max-h-[75vh]">
              <img
                src={GALLERY_IMAGES[lightboxIndex].url}
                alt={GALLERY_IMAGES[lightboxIndex].title}
                className="max-h-[75vh] object-contain mx-auto"
              />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-left font-sans">
                <span className="text-[8px] tracking-[0.3em] text-[#D4AF37] font-bold uppercase block">
                  Aura Curated Ambiance
                </span>
                <p className="font-serif text-base text-white mt-1 tracking-wider font-light">
                  {GALLERY_IMAGES[lightboxIndex].title}
                </p>
              </div>
            </div>

            {/* Next Navigation Trigger */}
            <button
              onClick={showNext}
              className="absolute right-4 sm:-right-16 z-20 rounded-none bg-black/80 border border-zinc-805 p-3 text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all"
              id="btn-lightbox-next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

          {/* Accessibility Keyboard hints */}
          <div className="absolute bottom-6 z-10 hidden sm:block">
            <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              Click background to close lightbox preview
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
