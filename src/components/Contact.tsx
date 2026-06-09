import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface ContactProps {
  onFormSubmitSuccess: (message: string) => void;
}

export default function Contact({ onFormSubmitSuccess }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onFormSubmitSuccess(`Thank you, ${formData.name}. Our executive concierge will review your message about "${formData.subject}" and connect within 12 hours.`);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-[#151515] overflow-hidden border-t border-zinc-800" id="contact">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold block mb-3 gold-text-glow">
            Concierge Portal
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            Contact &amp; Location
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37] mt-4 shadow-[0_0_6px_#D4AF37]" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1 (lg:col-span-4): Corporate Details Cards */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="rounded-none border border-zinc-800 bg-[#111111]/80 p-5 flex gap-4 text-left hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] block mb-1">Our Address</span>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed tracking-wide uppercase font-medium">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-none border border-zinc-800 bg-[#111111]/80 p-5 flex gap-4 text-left hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] block mb-1">Phone Inquiry</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-xs text-zinc-300 font-sans hover:text-[#D4AF37] transition-colors font-mono tracking-wider font-bold">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-none border border-zinc-800 bg-[#111111]/80 p-5 flex gap-4 text-left hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] block mb-1">Concierge Email</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs text-zinc-300 font-sans hover:text-[#D4AF37] transition-colors font-semibold uppercase tracking-wider">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Operating Hours Box */}
            <div className="rounded-none border border-zinc-800/80 bg-[#111111]/50 p-6 text-left relative overflow-hidden">
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] font-sans flex items-center gap-1.5 mb-4">
                <Clock className="h-4 w-4" />
                <span>Operating Hours</span>
              </span>

              <div className="space-y-3 font-sans text-[11px] uppercase tracking-wider">
                {CONTACT_INFO.hours.map((line, idx) => (
                  <div key={idx} className="flex justify-between border-b border-zinc-800/60 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-zinc-500 font-medium">{line.days}</span>
                    <span className="text-white font-mono text-right font-bold">{line.times}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2 (lg:col-span-5): Dynamic Contact Form */}
          <div className="lg:col-span-5 rounded-none border border-zinc-800 bg-[#111111] p-6 md:p-8 shadow-xl flex flex-col justify-between text-left">
            
            <div>
              <span className="text-[9px] tracking-widest uppercase text-[#D4AF37] font-bold block mb-1 font-mono">Digital Correspondence</span>
              <h3 className="font-serif text-lg md:text-xl text-white tracking-widest font-bold uppercase mb-6">
                Send Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Bennett Vance"
                      className="w-full rounded-none border border-zinc-800 bg-[#151515] px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 207..."
                      className="w-full rounded-none border border-zinc-800 bg-[#151515] px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="concierge@example.com"
                    className="w-full rounded-none border border-zinc-800 bg-[#151515] px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Subject Inquiry</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="E.g. Group reservation, Wedding services..."
                    className="w-full rounded-none border border-zinc-800 bg-[#151515] px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your bespoke inquiries here..."
                    rows={4}
                    className="w-full rounded-none border border-zinc-800 bg-[#151515] px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full rounded-none border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black py-3 text-[10px] tracking-widest uppercase font-bold transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  id="btn-contact-submit"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 animate-spin text-black" />
                      <span>Sending Portfolio...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 animate-pulse" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

          {/* Column 3 (lg:col-span-3): Embedded Map frame with elegant dark controls */}
          <div className="lg:col-span-3 rounded-none border border-zinc-800 bg-[#111111] overflow-hidden flex flex-col justify-between p-4 shadow-xl text-left">
            
            <div className="space-y-3">
              <span className="text-[9px] tracking-widest uppercase text-[#D4AF37] font-bold block">Geographical Coordinates</span>
              <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider">
                Regent Street Studio
              </h4>
            </div>

            {/* Embedded maps or mock placeholder */}
            <div className="relative h-64 md:h-72 w-full border border-zinc-800 rounded-none overflow-hidden bg-[#151515] my-4">
              
              {/* Dark mode Styled satellite or mock layout maps */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-60 flex items-center justify-center p-4 text-center select-none"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600")' }}
              >
                <div className="absolute inset-0 bg-black/80" />
                
                {/* Marker coordinate detail mock design */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="h-10 w-10 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-none flex items-center justify-center text-[#D4AF37] animate-bounce">
                    <Navigation className="h-4 w-4 transform rotate-45" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                    AURA MARK 159
                  </span>
                  <span className="text-[9px] text-zinc-400 font-sans max-w-[160px] leading-relaxed uppercase tracking-wider font-semibold">
                    Centred near Piccadilly Circus Station, London
                  </span>
                </div>
              </div>

              {/* Float action */}
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="no-referrer noreferrer"
                className="absolute bottom-3 left-3 right-3 rounded-none bg-black/85 hover:bg-[#D4AF37] hover:text-black border border-zinc-800 py-2.5 text-center text-[9px] font-bold tracking-widest uppercase text-[#D4AF37] transition-all z-20"
              >
                Launch Navigation App
              </a>

            </div>

            <div className="text-[10px] leading-relaxed text-zinc-500 font-sans uppercase tracking-wider">
              *Valet parking is complementarily arranged for our patrons for sessions exceeding 60 minutes.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
