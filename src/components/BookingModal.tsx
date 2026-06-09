import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Sparkles, Check, Phone, Mail, FileText } from 'lucide-react';
import { SERVICES, TEAM_MEMBERS } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: '',
    stylistId: '',
    date: '',
    time: '',
    notes: '',
    agreeToTerms: true
  });
  const [bookingRef, setBookingRef] = useState('');

  // Auto-set selected service if provided
  useEffect(() => {
    if (selectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId, isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const getSelectedService = () => {
    return SERVICES.find(s => s.id === formData.serviceId);
  };

  const getSelectedStylist = () => {
    return TEAM_MEMBERS.find(t => t.id === formData.stylistId);
  };

  const generateBookingReference = () => {
    const letters = 'AURA';
    const num = Math.floor(1000 + Math.random() * 9000);
    return `${letters}-${num}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      // Final submission
      setBookingRef(generateBookingReference());
      setStep(4);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-none border border-zinc-800 bg-[#111111] text-white shadow-2xl transition-all duration-300">
        {/* Border Accent Line */}
        <div className="h-[2px] w-full bg-[#D4AF37]" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-[#D4AF37] transition-colors duration-200"
          id="btn-close-booking-modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {step < 4 && (
            <div className="mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="font-serif text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">
                Reserve Luxury Experience
              </span>
            </div>
          )}

          {step < 4 && (
            /* Progress Steps Indicator */
            <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <span className={`flex h-6 w-6 items-center justify-center rounded-none text-[10px] font-bold ${step >= 1 ? 'bg-[#D4AF37] text-black' : 'bg-zinc-800 text-zinc-400'}`}>1</span>
                <span className="text-[10px] tracking-widest uppercase text-zinc-300 hidden sm:inline">Select Services</span>
              </div>
              <div className="h-[1px] flex-1 bg-zinc-800 mx-4" />
              <div className="flex items-center gap-3">
                <span className={`flex h-6 w-6 items-center justify-center rounded-none text-[10px] font-bold ${step >= 2 ? 'bg-[#D4AF37] text-black' : 'bg-zinc-800 text-zinc-400'}`}>2</span>
                <span className="text-[10px] tracking-widest uppercase text-zinc-300 hidden sm:inline">Date &amp; Time</span>
              </div>
              <div className="h-[1px] flex-1 bg-zinc-800 mx-4" />
              <div className="flex items-center gap-3">
                <span className={`flex h-6 w-6 items-center justify-center rounded-none text-[10px] font-bold ${step >= 3 ? 'bg-[#D4AF37] text-black' : 'bg-zinc-800 text-zinc-400'}`}>3</span>
                <span className="text-[10px] tracking-widest uppercase text-zinc-300 hidden sm:inline font-sans">Details</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* STEP 1: SERVICE & STYLIST SELECT */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Select Service</label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  >
                    <option value="">-- Choose an Exclusive Treatment --</option>
                    {SERVICES.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} — {service.price} ({service.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Select Stylist</label>
                  <select
                    name="stylistId"
                    value={formData.stylistId}
                    onChange={handleInputChange}
                    className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="">No Preference (Our first available specialist)</option>
                    {TEAM_MEMBERS.map(member => (
                      <option key={member.id} value={member.id}>
                        {member.name} — {member.role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-[#151515]/50 rounded-none p-4 border border-zinc-800 text-[10px] leading-relaxed text-zinc-400 tracking-wide font-sans">
                  <p className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-[2px] font-bold">★</span>
                    Each appointment begins with our curated signature treatment menu: a professional consultation, deep refreshing double scalp cleanse, and premium botanical elixir care. Complimentary single-origin coffee or fine spirits are served throughout your stay.
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-3 text-[10px] tracking-widest uppercase font-bold transition-all rounded-none"
                    id="btn-step1-next"
                  >
                    Continue to Schedule
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DATE & TIME SELECT */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Select Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={handleInputChange}
                        className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 pl-10 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                        required
                      />
                      <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Preferred Time Slot</label>
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 pl-10 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                        required
                      >
                        <option value="">-- Choose Slot --</option>
                        <option value="09:00 AM">09:00 AM (Morning Elixir)</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="12:00 PM">12:00 PM (Noon Refresh)</option>
                        <option value="01:30 PM">01:30 PM</option>
                        <option value="03:00 PM">03:00 PM (Afternoon Tonic)</option>
                        <option value="04:30 PM">04:30 PM</option>
                        <option value="06:00 PM">06:00 PM (Sunset Hour)</option>
                        <option value="07:30 PM">07:30 PM (Evening Lounge)</option>
                      </select>
                      <Clock className="absolute left-3 top-3.5 h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-none bg-[#151515] border border-zinc-800 p-4">
                  <span className="text-[9px] tracking-widest uppercase text-[#D4AF37] font-bold mb-2 block">Selected Treatment Profile</span>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-300 font-bold tracking-wide">{getSelectedService()?.name || 'Exclusive Service'}</span>
                    <span className="text-[#D4AF37] font-bold font-mono">{getSelectedService()?.price || '₹0'}</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-1.5 flex items-center gap-1 font-sans tracking-wider">
                    <User className="h-3 w-3 text-[#D4AF37]" />
                    Stylist: {getSelectedStylist()?.name || 'First Available Specialist'}
                  </div>
                </div>

                <div className="flex justify-between mt-8 pt-4 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border border-zinc-800 hover:bg-zinc-800 px-6 py-3 text-[10px] tracking-widest uppercase font-bold text-zinc-300 transition-all rounded-none"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-3 text-[10px] tracking-widest uppercase font-bold transition-all rounded-none"
                    id="btn-step2-next"
                  >
                    Continue to Details
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT DETAILS */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Bespoke Guest Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sterling Bennett"
                        className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 pl-10 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                        required
                      />
                      <User className="absolute left-3 top-3.5 h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 7946 0192"
                        className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 pl-10 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                        required
                      />
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="concierge@example.com"
                      className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-3 pl-10 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      required
                    />
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-[#D4AF37]" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[9px] tracking-widest uppercase text-zinc-400 font-bold">Alternative Preferences (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="E.g. strict temperature, style preferences, dietary requirements, silence request..."
                    rows={3}
                    className="w-full rounded-none border border-zinc-800 bg-[#151515] px-4 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded-none border-zinc-800 bg-[#151515] text-[#D4AF37] accent-[#D4AF37]"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-[10px] text-zinc-400 uppercase tracking-widest">
                    I acknowledge Aura’s strict 24-hour rescheduling policy.
                  </label>
                </div>

                <div className="flex justify-between mt-8 pt-4 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="border border-zinc-800 hover:bg-zinc-800 px-6 py-3 text-[10px] tracking-widest uppercase font-bold text-zinc-300 transition-all rounded-none"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-3 text-[10px] tracking-widest uppercase font-bold transition-all rounded-none"
                    id="btn-step3-submit"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS RECEIPT */}
            {step === 4 && (
              <div className="text-center py-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                  <Check className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif text-xl tracking-widest text-[#D4AF37] uppercase font-bold mb-2">
                  Reservation Confirmed
                </h3>
                <p className="max-w-md mx-auto text-[10px] text-zinc-400 mb-6 leading-relaxed uppercase tracking-wider">
                  Your luxury treatment has been registered in our concierge registry systems. A premium confirmation passport code has been shared to your email.
                </p>

                {/* VOUCHER RECEIPT */}
                <div className="mx-auto max-w-sm rounded-none border border-[#D4AF37]/15 bg-[#151515] p-5 text-left font-serif relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 text-[9px] tracking-widest text-[#D4AF37]/50 uppercase font-mono">
                    Ref: {bookingRef}
                  </div>
                  
                  <span className="text-[9px] tracking-widest text-[#D4AF37] font-sans uppercase font-bold block border-b border-zinc-800 pb-2 mb-3">
                    AURA APPOINTMENT VOUCHER
                  </span>

                  <div className="space-y-2 font-sans text-[11px] text-zinc-305">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Guest:</span>
                      <span className="font-bold text-white uppercase tracking-wider">{formData.name}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Service:</span>
                      <span className="font-bold text-white uppercase tracking-wider">{getSelectedService()?.name || 'Exclusive Treatment'}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Specialist:</span>
                      <span className="font-bold text-white uppercase tracking-wider">{getSelectedStylist()?.name || 'Master Barber'}</span>
                    </div>

                    <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
                      <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Price:</span>
                      <span className="font-bold text-[#D4AF37] font-mono">{getSelectedService()?.price || '₹0'}</span>
                    </div>

                    <div className="flex justify-between text-[10px] font-bold text-white">
                      <span className="flex items-center gap-1 uppercase tracking-wider">
                        <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {formData.date}
                      </span>
                      <span className="flex items-center gap-1 uppercase tracking-wider">
                        <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {formData.time}
                      </span>
                    </div>
                  </div>

                  {/* Cut Line effect */}
                  <div className="absolute left-0 right-0 bottom-12 border-t border-dashed border-zinc-800" />
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      // Reset step
                      setStep(1);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceId: '',
                        stylistId: '',
                        date: '',
                        time: '',
                        notes: '',
                        agreeToTerms: true
                      });
                    }}
                    className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-3 text-[10px] tracking-widest uppercase font-bold transition-all rounded-none shrink-0"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
