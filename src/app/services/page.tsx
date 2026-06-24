'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

function ServicesContent() {
  const searchParams = useSearchParams();
  const { openQuoteModal, openElectricianModal, openHVACModal } = useAppContext();
  const [activeTab, setActiveTab] = useState<'solar' | 'electrical'>('solar');

  useEffect(() => {
    const type = searchParams?.get('type');
    if (type === 'electrical') setActiveTab('electrical');
    else if (type === 'solar') setActiveTab('solar');
  }, [searchParams]);

  const solarServices = [
    { title: 'Residential Solar Setup', desc: 'High-efficiency rooftop solar installations integrated with smart net-metering systems.', icon: '🏡' },
    { title: 'Commercial Power Grids', desc: 'Large-scale solar power solutions engineered for commercial complexes and industries.', icon: '🏭' },
    { title: 'Solar Water Pumping', desc: 'Off-grid, solar-powered water pumping systems for reliable farm irrigation.', icon: '🌾' }
  ];

  const electricalServices = [
    { title: 'Heavy Industrial Wiring', desc: 'Industrial-grade electrical wiring, robust panel boards installation, and safety testing.', icon: '🔌' },
    { title: 'Emergency Repair', desc: 'On-demand troubleshooting, circuit fault diagnostics, and 24/7 rapid response.', icon: '⚡' },
    { title: 'Energy Optimization', desc: 'Professional energy auditing using precision analysis tools to identify power leakage.', icon: '📊' },
    { title: 'HVAC System Solutions', desc: 'Comprehensive HVAC installation, ducting, and maintenance services.', icon: '❄️' }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      
      {/* HEADER BANNER */}
      <section className="relative w-full bg-[#0f1c2c] text-white py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-black mb-4">
          Our Premium <span className="text-[#2fa144]">Engineering Services</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-base max-w-xl mx-auto font-medium">
          Smart solar architectures and reliable electrical setups tailor-made for guaranteed savings.
        </p>
      </section>

      {/* NAVIGATION TABS - Mobile friendly gap */}
      <section className="max-w-4xl mx-auto pt-8 pb-4 px-4 flex flex-wrap justify-center gap-2">
        <button onClick={() => setActiveTab('solar')} className={`px-6 py-3 rounded-full text-[10px] sm:text-sm font-black uppercase tracking-wider transition-all ${activeTab === 'solar' ? 'bg-[#2fa144] text-white' : 'bg-gray-100 text-gray-600'}`}>
          ☀️ Solar Services
        </button>
        <button onClick={() => setActiveTab('electrical')} className={`px-6 py-3 rounded-full text-[10px] sm:text-sm font-black uppercase tracking-wider transition-all ${activeTab === 'electrical' ? 'bg-[#f26822] text-white' : 'bg-gray-100 text-gray-600'}`}>
          ⚡ Electrical Services
        </button>
      </section>

      {/* SERVICES CONTENT */}
      <section className="max-w-7xl mx-auto py-8 px-4">
        {activeTab === 'solar' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {solarServices.map((srv, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
                <span className="text-3xl mb-4">{srv.icon}</span>
                <h3 className="font-black text-lg text-[#0f1c2c] mb-2">{srv.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{srv.desc}</p>
                <button onClick={() => openQuoteModal(srv.title)} className="mt-auto bg-[#2fa144] text-white font-extrabold px-6 py-2 rounded-full text-[10px] uppercase">Inquire Now</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'electrical' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {electricalServices.map((srv, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
                <span className="text-3xl mb-4">{srv.icon}</span>
                <h3 className="font-black text-lg text-[#0f1c2c] mb-2">{srv.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{srv.desc}</p>
                <div className="mt-auto flex gap-2">
                  <button onClick={() => openQuoteModal(srv.title)} className="bg-[#f26822] text-white font-extrabold px-4 py-2 rounded-full text-[10px] uppercase">Inquire</button>
                  {srv.title === 'HVAC System Solutions' && (
                    <Link href="/hvac-details" className="bg-gray-100 text-gray-700 font-extrabold px-4 py-2 rounded-full text-[10px] uppercase">Details</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PROMO BOX */}
        {activeTab === 'electrical' && (
          <div className="mt-12 bg-[#0f1c2c] rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black">Need a Certified Professional Electrician?</h3>
              <p className="text-xs text-gray-400 mt-2">Verified expert electricians available 24/7.</p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/918107066447?text=Hello, I need a professional electrician.', '_blank')}
              className="bg-[#f26822] text-white font-black px-6 py-3 rounded-full text-xs uppercase tracking-widest active:scale-95"
            >
              Book Electrician Now 🛠️
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold">Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}