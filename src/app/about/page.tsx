'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* HEADER BANNER SECTION */}
      <section className="relative w-full bg-[#0f1c2c] text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero.png')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            About <span className="text-[#2fa144]">Green Solution</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            We are leading the transition towards clean, reliable, and cost-effective renewable energy setups.
          </p>
        </div>
      </section>

      {/* CORE VISION & CONTENT SECTION */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <div className="text-left space-y-6">
            <span className="text-[#2fa144] font-extrabold text-xs uppercase tracking-wider block">
              OUR MISSION
            </span>
            <h2 className="text-3xl font-black text-[#0f1c2c] tracking-tight leading-tight">
              Empowering Homes & Businesses <br />
              With <span className="text-[#f26822]">Smart Energy</span> Solutions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              At Green Solution, we specialize in high-efficiency solar grid installations, heavy electrical maintenance, and modern alternative power transmission. Our experienced engineering wing is dedicated to customizing solutions that lower bills and protect the environment.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-[#2fa144] pl-4">
                <h4 className="font-black text-[#0f1c2c] text-lg">100% Eco-Friendly</h4>
                <p className="text-xs text-gray-500 font-semibold mt-1">Zero emissions production</p>
              </div>
              <div className="border-l-4 border-[#f26822] pl-4">
                <h4 className="font-black text-[#0f1c2c] text-lg">Expert Engineering</h4>
                <p className="text-xs text-gray-500 font-semibold mt-1">Certified field operations</p>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Image block */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-slate-100 group">
            <Image 
              src="/images/gallery2.png" // Ensure file exists in public/images/
              alt="Engineers working on Solar Panels"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Decorative Overlay Card */}
            
          </div>

        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="w-full bg-gray-50 border-t border-b border-gray-100 py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black text-[#0f1c2c] uppercase tracking-wide mb-12">
            Why Partner With <span className="text-[#2fa144]">Us</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200/50 shadow-sm flex flex-col items-center">
              <span className="text-3xl mb-3">🛡️</span>
              <h4 className="font-black text-[#0f1c2c] text-base">Tested Reliability</h4>
              <p className="text-xs text-gray-500 font-medium text-center mt-2 leading-relaxed">Every installation undergoes rigorous safety grids checklist protocols before going live.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200/50 shadow-sm flex flex-col items-center">
              <span className="text-3xl mb-3">📈</span>
              <h4 className="font-black text-[#0f1c2c] text-base">Assured Savings</h4>
              <p className="text-xs text-gray-500 font-medium text-center mt-2 leading-relaxed">Cut down overhead conventional grids consumption charges drastically from month one.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200/50 shadow-sm flex flex-col items-center">
              <span className="text-3xl mb-3">🎧</span>
              <h4 className="font-black text-[#0f1c2c] text-base">24/7 Operations</h4>
              <p className="text-xs text-gray-500 font-medium text-center mt-2 leading-relaxed">On-demand support ready to assist you anytime with diagnostic support panels.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}