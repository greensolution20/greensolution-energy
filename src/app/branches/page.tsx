'use client';

import { useState } from 'react';

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<string>('beawar');

  const branches = [
    {
      id: 'beawar',
      name: 'Beawar Branch',
      address: 'Church Road, Chang Gate, Beawar, Rajasthan 305901',
      phone: '+91 81070 66447',
      altPhone: '+91 94686 66447',
      email: 'greensworkforce@gmail.com',
      isHead: true,
      mapLink: 'https://maps.google.com/maps?q=23%20Subhash%20Nagar%20Beawar&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'ajmer',
      name: 'Ajmer Branch',
      address: 'Opposite Madar Junction, Ajmer, Rajasthan 305001',
      phone: '+91 81070 66447',
      altPhone: '+91 94686 66447',
      email: 'ajmer.greens@gmail.com',
      isHead: false,
      mapLink: 'https://maps.google.com/maps?q=Mansarovar%20Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'sikar',
      name: 'Sikar Branch',
      address: 'Near Khijoor Wale Balaji, ringus, Sikar, Rajasthan 332404',
      phone: '+91 81070 66447',
      altPhone: '+91 94686 66447',
      email: 'sikar.greens@gmail.com',
      isHead: false,
      mapLink: 'https://maps.google.com/maps?q=Vaishali%20Nagar%20Ajmer&t=&z=13&ie=UTF8&iwloc=&output=embed'
    }
  ];

  const activeBranch = branches.find((b) => b.id === selectedBranch) || branches[0];

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      
      {/* HEADER BANNER */}
      <section className="relative w-full bg-[#0f1c2c] text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero.png')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#f26822] font-black text-xs uppercase tracking-widest block mb-3">
            OUR LOCATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">
            Find Our Nearest <span className="text-[#2fa144]">Branch Office</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Visit our physical experience centers to see real-time testing and live demonstrations of tier-1 solar technology.
          </p>
        </div>
      </section>

      {/* BRANCH LOCATOR GRID */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Branch Cards List */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-black text-[#0f1c2c] text-left border-b-2 border-gray-100 pb-4">
              Select Branch
            </h2>
            <div className="space-y-4">
              {branches.map((branch) => {
                const isCurrent = branch.id === selectedBranch;
                return (
                  <div
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch.id)}
                    className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 select-none
                      ${isCurrent
                        ? 'bg-gray-50/90 border-[#2fa144] translate-y-0.5 shadow-[inset_0_4px_12px_rgba(0,0,0,0.05)] scale-[0.99]'
                        : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-1'
                      }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-black text-lg text-[#0f1c2c]">{branch.name}</h3>
                      {branch.isHead && (
                        <span className="bg-gradient-to-r from-[#2fa144] to-emerald-500 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Main Office
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 font-semibold mt-2 leading-relaxed">
                      {branch.address}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-gray-700 border-t border-gray-50 pt-3">
                      <span className="text-[#f26822]">{branch.phone}</span>
                      <span className="text-gray-400">View Map →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Map & Details */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div className="text-left mb-6">
              <span className="text-[#2fa144] font-black text-xs uppercase tracking-widest block mb-1">
                CURRENT SELECTION
              </span>
              <h3 className="text-2xl font-black text-[#0f1c2c]">{activeBranch.name}</h3>
              <p className="text-sm text-gray-500 font-medium mt-2 leading-relaxed">
                {activeBranch.address}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-200/60 pt-6 text-sm">
                <div>
                  <span className="text-gray-400 font-bold block text-[11px] uppercase tracking-wider">CALL FOR QUOTATIONS</span>
                  <span className="font-black text-[#0f1c2c] block mt-1">{activeBranch.phone}</span>
                  <span className="font-black text-[#0f1c2c] block">{activeBranch.altPhone}</span>
                </div>
                <div>
                  <span className="text-gray-400 font-bold block text-[11px] uppercase tracking-wider">OFFICIAL MAIL ID</span>
                  <span className="font-semibold text-gray-600 block mt-1 break-all">{activeBranch.email}</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-slate-200 border border-gray-200 shadow-inner mt-2">
              <iframe
                src={activeBranch.mapLink}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${activeBranch.phone}`}
                className="bg-gradient-to-r from-[#f26822] to-orange-500 text-white font-extrabold px-8 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all text-center active:scale-[0.98]"
              >
                Call Office Now 📞
              </a>
              <a
                href="https://wa.me/918107066447"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#2fa144] to-emerald-500 text-white font-extrabold px-8 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all text-center active:scale-[0.98]"
              >
                Chat on WhatsApp 💬
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}