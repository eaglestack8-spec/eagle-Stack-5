import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Styles', href: '#styles' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Stylists', href: '#team' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#111111]/95 shadow-lg shadow-black/40 border-b border-[#D4AF37]/30'
          : 'bg-[#111111] py-4 border-b border-zinc-800'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo Brand matching Aurelius luxury layout */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center rotate-45 transition-transform duration-500 group-hover:rotate-225 shadow-[0_0_8px_rgba(212,175,55,0.4)]">
              <span className="-rotate-45 text-[10px] font-bold tracking-tighter gold-text-glow">AS</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-serif tracking-[0.25em] uppercase text-white leading-none">
                Aurelius Salon
              </span>
              <span className="text-[7.5px] tracking-[0.3em] uppercase leading-none mt-1 font-bold gold-text-glow">
                Barber &amp; Grooming Co.
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-[#D4AF37] transition-all duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Call/Book Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+442079460192" 
              className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-zinc-400 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="h-3 w-3 text-[#D4AF37]" />
              <span className="font-mono text-[9px]">+44 20 7946 0192</span>
            </a>
            
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-bold"
              id="nav-btn-book"
            >
              Book Online
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-5 w-5 text-[#D4AF37]" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 border-b border-[#D4AF37]/20' : 'max-h-0 opacity-0 pointer-events-none'
        } bg-[#111111]`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pt-2 pb-6 sm:px-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2.5 text-[10px] tracking-widest uppercase text-zinc-300 hover:bg-zinc-900 hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}
          <div className="border-t border-zinc-800 mt-4 pt-4 flex flex-col gap-3">
            <a 
              href="tel:+442079460192" 
              className="flex items-center gap-2 px-3 text-[10px] text-zinc-300 hover:text-[#D4AF37]"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[10px]">+44 20 7946 0192</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center py-2.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all font-bold"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
