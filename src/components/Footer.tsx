import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, ShieldCheck, ChevronUp } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    { icon: <Instagram className="h-4 w-4" />, href: 'https://instagram.com/aura.salon', label: 'Instagram' },
    { icon: <Facebook className="h-4 w-4" />, href: 'https://facebook.com/aura.salon.london', label: 'Facebook' },
    { icon: <Twitter className="h-4 w-4" />, href: 'https://twitter.com/aurasalonlondon', label: 'Twitter' },
  ];

  const quickLinks = [
    { label: 'Studio Heritage', href: '#about' },
    { label: 'Bespoke Lookbook', href: '#styles' },
    { label: 'Exquisite Treatments', href: '#services' },
    { label: 'Symmetry Gallery', href: '#gallery' },
    { label: 'Prestige Packages', href: '#pricing' },
    { label: 'Concierge Portal', href: '#contact' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="relative bg-[#111111] border-t border-zinc-800 py-16 text-center text-zinc-400 overflow-hidden">
      
      {/* Decorative center radial gold point */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#D4AF37]/[0.01] blur-3xl rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Brand / Back to top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-800/80 pb-10">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-none border border-zinc-800 bg-[#151515]">
              <Scissors className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div className="text-left">
              <span className="font-serif text-lg font-bold tracking-widest text-white block leading-none">
                AURA
              </span>
              <span className="text-[8px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold leading-none mt-1 block">
                SALON &amp; BARBER
              </span>
            </div>
          </div>

          {/* Social Icons links */}
          <div className="flex items-center gap-3">
            {socialIcons.map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="no-referrer noreferrer"
                className="rounded-none border border-zinc-800 bg-[#151515] p-2.5 text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/35 hover:-translate-y-0.5 transition-all"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Core Scroll Back Button */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 rounded-none border border-zinc-800 hover:border-[#D4AF37]/35 bg-[#151515] px-4 py-2.5 text-xs text-zinc-350 hover:text-white transition-all font-sans uppercase tracking-widest font-bold"
            id="btn-scroll-top"
          >
            <span>Heritage Crest</span>
            <ChevronUp className="h-4 w-4 text-[#D4AF37] group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Middle Quick links column listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold tracking-widest uppercase">
              Brand Legacy
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm tracking-wide uppercase font-medium">
              We cultivate a serene, luxury-focused space in Regent Street, London. Merging timeless Italian, British, and Japanese grooming methods, Aura is dedicated to absolute prestige.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold tracking-widest uppercase">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] tracking-widest uppercase font-bold">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#D4AF37] text-zinc-300 transition-colors py-1 block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold tracking-widest uppercase">
              Newsletter
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans tracking-wide uppercase font-medium">
              Sign up for elite lookbook updates, seasonal wellness offers, and masterclass features.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Guest email profile"
                className="min-w-0 flex-1 rounded-none border border-zinc-800 bg-[#151515] px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none uppercase tracking-wider font-semibold placeholder:lowercase font-mono text-[10px]"
              />
              <button 
                className="rounded-none border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-[10px] font-bold tracking-widest uppercase px-4 py-2"
                id="btn-newsletter-subscribe"
              >
                Join
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#D4AF37] font-bold tracking-widest uppercase">
              Prestige Trust
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-zinc-400">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="font-sans leading-relaxed uppercase tracking-wider font-semibold text-[10px] text-zinc-500">
                Registered under standard London Luxury Grooming Council directives. Certified fully organic ingredients, sustainable packaging, and medical-grade sanitized instruments.
              </p>
            </div>
          </div>

        </div>

        {/* Lower copyright brand and policy links */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] tracking-[0.3em] text-zinc-500 font-sans uppercase font-bold">
          
          <div>
            &copy; {new Date().getFullYear()} AURA LUXURY STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Charter</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Concierge Guidelines</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Terms of Service</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
