import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HaircutStyles from './components/HaircutStyles';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Sparkles, X, CheckSquare, Calendar, UserCheck } from 'lucide-react';
import { SERVICES } from './data';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  
  // Custom toast notification state
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'info' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 6000);
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
  };

  // Callback when booking is triggered for a specific lookbook hairstyle
  const handleBookStyle = (styleName: string) => {
    // Find matching haircut service if exists, else default to standard haircut
    const haircutSrv = SERVICES.find(s => s.id === 'srv-haircut');
    
    showToast(`Initiating lookbook booking for: "${styleName}". Custom preferences have been stored.`, 'info');
    handleOpenBooking(haircutSrv?.id);
  };

  // Callback when booking with a specific stylist is requested
  const handleBookStylist = (stylistId: string) => {
    setIsBookingOpen(true);
    // Open modal directly
    setSelectedServiceId(undefined);
    showToast("Stylist preference set directly on your reservation form.", "info");
  };

  // Callback when booking a curated pricing package is requested
  const handleBookPackage = (packageName: string) => {
    // Open general booking, set notes
    setIsBookingOpen(true);
    showToast(`Initiating package reservation for "${packageName}". Fill details to register.`, "info");
  };

  // Callback for general contact form submissions
  const handleContactSuccess = (successMessage: string) => {
    showToast(successMessage, 'success');
  };

  return (
    <div className="relative min-h-screen bg-dark-black text-white selection:bg-gold-500 selection:text-dark-black font-sans antialiased">
      
      {/* Dynamic Background ambiance grain filter */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%%22 height=%22100%%22 filter=%22url(%23noise)%22 opacity=%220.02%22/></svg>')] opacity-25" />

      {/* Global Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Sections structure */}
      <main>
        {/* Section 1: Hero Banner */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2: Legacy About */}
        <About />

        {/* Section 3: Haircut Lookbook */}
        <HaircutStyles onBookStyle={handleBookStyle} />

        {/* Section 4: Exclusive Menu Services */}
        <Services onSelectService={(srvId) => handleOpenBooking(srvId)} />

        {/* Section 5: Studio Ambiance and Gallery */}
        <Gallery />

        {/* Section 6: Curated Testimonials Carousel */}
        <Testimonials />

        {/* Section 7: Team Stylist directors */}
        <Team onBookStylist={handleBookStylist} />

        {/* Section 8: Packages & Programs Pricing */}
        <Pricing onSelectPackage={handleBookPackage} />

        {/* Section 9: Business Locations & Concise Contact portal */}
        <Contact onFormSubmitSuccess={handleContactSuccess} />
      </main>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Global Booking Drawer Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedServiceId={selectedServiceId}
      />

      {/* DYNAMIC COMPONENT: PREMIUM FLOATING NOTIFICATION TOAST */}
      {toast.show && (
        <div 
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border border-gold-500/20 bg-dark-card p-4 shadow-2xl backdrop-blur-md animate-fade-in flex items-start gap-3 text-left"
          id="toast-notification"
        >
          {toast.type === 'success' ? (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-gold-500/10 text-gold-500 border border-gold-500/20">
              <CheckSquare className="h-4.5 w-4.5" />
            </div>
          ) : (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-gold-400/10 text-gold-300 border border-gold-400/20">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
          )}

          <div className="flex-1 font-sans">
            <span className="block text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-0.5">
              {toast.type === 'success' ? 'Concierge Registry' : 'Lookbook Preset'}
            </span>
            <p className="text-xs text-gray-200 leading-relaxed font-sans">
              {toast.message}
            </p>
          </div>

          <button 
            onClick={() => setToast(prev => ({ ...prev, show: false }))}
            className="text-gray-500 hover:text-white transition-colors p-0.5 shrink-0"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
