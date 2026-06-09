import React from 'react';
import { Scissors, Linkedin, Award, CalendarClock, PhoneCall } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';

interface TeamProps {
  onBookStylist: (stylistId: string) => void;
}

export default function Team({ onBookStylist }: TeamProps) {
  return (
    <section className="relative py-24 bg-[#151515] overflow-hidden border-b border-zinc-800" id="team">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/[0.01] blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold block mb-3">
            Master Craftspeople
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-widest uppercase font-bold">
            The Artisans of Aura
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-[#D4AF37]/40 mt-4 mb-6" />
          <p className="max-w-2xl mx-auto text-[11px] text-zinc-400 font-sans leading-relaxed tracking-wider">
            Meet our certified styling directors. Combining editorial vision with classical razor precision, our specialists turn ordinary trims into works of distinction.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((stylist: TeamMember) => (
            <div
              key={stylist.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-none border border-zinc-800 bg-[#111111] hover:border-[#D4AF37]/35 transition-all duration-300 shadow-xl"
            >
              
              <div>
                {/* Photo frame */}
                <div className="relative overflow-hidden aspect-[1/1] w-full border-b border-zinc-850">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="h-full w-full object-cover object-center grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-750"
                  />
                  {/* Overlay shadow on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/10" />

                  {/* Specialty Hover badge */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 rounded-none bg-black/85 border border-zinc-800 px-2 py-1 backdrop-blur-sm pointer-events-none text-[8px] tracking-widest text-[#D4AF37] font-bold uppercase font-sans">
                    <Award className="h-3 w-3" />
                    <span>{stylist.experience} EXP</span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-5 space-y-3">
                  
                  <div>
                    <h3 className="font-serif text-lg text-white font-bold tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">
                      {stylist.name}
                    </h3>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#D4AF37]/80 block mt-0.5 font-sans">
                      {stylist.role}
                    </span>
                  </div>

                  {/* Specialty */}
                  <div className="text-[9px] uppercase tracking-wider text-zinc-300 bg-[#151515] border border-zinc-800/80 py-1 px-2.5 rounded-none font-sans leading-relaxed">
                    <span className="text-[#D4AF37] uppercase font-bold text-[8px] tracking-widest mr-1 block sm:inline">Specialty:</span>
                    {stylist.specialty}
                  </div>

                  {/* Short Bio */}
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-sans mt-2 min-h-[48px]">
                    {stylist.bio}
                  </p>

                </div>
              </div>

              {/* Interaction Call Actions */}
              <div className="p-5 pt-0 mt-4 border-t border-zinc-800/80">
                <button
                  onClick={() => onBookStylist(stylist.id)}
                  className="w-full rounded-none bg-[#151515] border border-zinc-850 hover:border-[#D4AF37]/40 text-zinc-300 hover:text-[#D4AF37] text-[10px] tracking-widest uppercase font-bold py-2.5 transition-all duration-350 flex items-center justify-center gap-1.5"
                  id={`btn-select-stylist-${stylist.id}`}
                >
                  <CalendarClock className="h-3.5 w-3.5" />
                  <span>Book with {stylist.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
