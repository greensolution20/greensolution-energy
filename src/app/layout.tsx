'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { AppProvider, useAppContext } from '@/context/AppContext';

// Helper component to render actual popup overlays safely under provider context
function GlobalModalOverlay() {
  const { 
    isQuoteModalOpen, isElectricianModalOpen, preselectedService,
    closeQuoteModal, closeElectricianModal, addQuote, addBooking 
  } = useAppContext();

  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', email: '', service: '', note: '' });
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '' });
  const [success, setSuccess] = useState(false);

  // Sync service preselection whenever the quote opens
  useEffect(() => {
    if (isQuoteModalOpen) {
      setQuoteForm({
        name: '',
        phone: '',
        email: '',
        service: preselectedService || '',
        note: ''
      });
      setSuccess(false);
    }
  }, [isQuoteModalOpen, preselectedService]);

  useEffect(() => {
    if (isElectricianModalOpen) {
      setBookingForm({ name: '', phone: '' });
      setSuccess(false);
    }
  }, [isElectricianModalOpen]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WHATSAPP INTEGRATION LOGIC
    const phone = "918107066447";
    const message = `*New Quote Request*%0A%0A*Name:* ${quoteForm.name}%0A*Phone:* ${quoteForm.phone}%0A*Email:* ${quoteForm.email}%0A*Service:* ${quoteForm.service || 'Solar Installation'}%0A*Details:* ${quoteForm.note || 'No additional details'}`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

    // Add to internal state
    addQuote({
      fullName: quoteForm.name,
      phone: quoteForm.phone,
      email: quoteForm.email,
      serviceType: quoteForm.service || 'Solar Installation',
      message: quoteForm.note || 'Requested a custom quotation'
    });
    
    setSuccess(true);
    setTimeout(() => {
      closeQuoteModal();
    }, 1800);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({
      name: bookingForm.name,
      phone: bookingForm.phone
    });
    setSuccess(true);
    setTimeout(() => {
      closeElectricianModal();
    }, 1800);
  };

  return (
    <>
      {/* 1. GLOBAL QUOTE REQUEST POPUP FORM */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative text-left border border-slate-100">
            <button 
              onClick={closeQuoteModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-black bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

            {success ? (
              <div className="py-12 text-center animate-scaleUp">
                <span className="text-5xl block mb-4">🎉</span>
                <h4 className="text-xl font-black text-[#0f1c2c]">Thank You!</h4>
                <p className="text-xs text-gray-500 font-bold mt-2">Your quotation request has been received securely.</p>
              </div>
            ) : (
              <div>
                <span className="text-emerald-500 font-black text-[10px] tracking-wider uppercase block mb-1">INQUIRY PORTAL</span>
                <h3 className="text-2xl font-black text-[#0f1c2c] mb-6">Request A Free Quote</h3>
                
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Your name"
                      value={quoteForm.name} 
                      onChange={e => setQuoteForm({...quoteForm, name: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Your active contact phone"
                      value={quoteForm.phone} 
                      onChange={e => setQuoteForm({...quoteForm, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="Your email address"
                      value={quoteForm.email} 
                      onChange={e => setQuoteForm({...quoteForm, email: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Desired System</label>
                    <select 
                      value={quoteForm.service} 
                      onChange={e => setQuoteForm({...quoteForm, service: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500 bg-white"
                    >
                      <option value="Solar Installation">Solar Energy System</option>
                      <option value="Wind Generation">Alternative Wind System</option>
                      <option value="Electrical Contractor">Heavy Industrial Cabling</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Additional Details</label>
                    <textarea 
                      rows={3} 
                      placeholder="Describe your load details, location space, etc..."
                      value={quoteForm.note} 
                      onChange={e => setQuoteForm({...quoteForm, note: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2fa144] to-emerald-500 text-white font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:opacity-95 mt-2 transition active:scale-95"
                  >
                    Submit Quotation Form ⚡
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. GLOBAL ELECTRICIAN BOOKING POPUP FORM */}
      {isElectricianModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-sm shadow-2xl relative text-left border border-slate-100">
            <button 
              onClick={closeElectricianModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-black bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

            {success ? (
              <div className="py-12 text-center animate-scaleUp">
                <span className="text-5xl block mb-4">🛠️</span>
                <h4 className="text-xl font-black text-[#0f1c2c]">Booking Complete</h4>
                <p className="text-xs text-gray-500 font-bold mt-2">Our certified engineer will confirm with you within 30 minutes.</p>
              </div>
            ) : (
              <div>
                <span className="text-orange-500 font-black text-[10px] tracking-wider uppercase block mb-1">ON-DEMAND REPAIRS</span>
                <h3 className="text-2xl font-black text-[#0f1c2c] mb-6">Book Electrician</h3>
                
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Full name"
                      value={bookingForm.name} 
                      onChange={e => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-700 block mb-1 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Contact number"
                      value={bookingForm.phone} 
                      onChange={e => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-emerald-500" 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f26822] to-orange-500 text-white font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:opacity-95 mt-2 transition active:scale-95"
                  >
                    Confirm Booking Now 🔌
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppProvider>
          <Navbar />
          <Sidebar/>
          <main>{children}</main>
          <GlobalModalOverlay />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}