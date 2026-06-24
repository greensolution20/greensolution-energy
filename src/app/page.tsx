'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>('All');

  const projects = [
    { id: 1, title: 'School Solar Project', location: 'Lahore', power: '50 KW', img: '/images/project1.png' },
    { id: 2, title: 'Hospital Project', location: 'Karachi', power: '100 KW', img: '/images/project2.png' },
    { id: 3, title: 'Community Project', location: 'Faisalabad', power: '75 KW', img: '/images/project3.png' },
    { id: 4, title: 'Solar Irrigation', location: 'Bahawalpur', power: '30 KW', img: '/images/project4.png' }
  ];

  const galleryItems = [
    { id: 1, category: 'Solar', img: '/gallery/1.png', title: 'Solar Field' },
    { id: 2, category: 'Installation', img: '/gallery/2.png', title: 'On-site Engineer' },
    { id: 3, category: 'Wind', img: '/gallery/3.png', title: 'Wind Turbines' },
    { id: 4, category: 'Solar', img: '/gallery/4.png', title: 'Rooftop Panels' },
    { id: 5, category: 'Installation', img: '/gallery/5.png', title: 'Structure Setup' },
    { id: 6, category: 'Solar', img: '/gallery/6.png', title: 'Sunset Solar Farm' },
    { id: 7, category: 'Wind', img: '/gallery/7.webp', title: 'Alternative Grid' },
    { id: 8, category: 'Installation', img: '/gallery/8.png', title: 'Power Transmission' }
  ];
  
  const filteredGallery = activeGalleryTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGalleryTab);

  return (
    <div className="bg-white text-gray-800 font-sans relative w-full overflow-hidden">
      
      {/* 3. HERO BANNER SECTION */}
      <section className="relative w-full h-[500px] sm:h-[620px] flex flex-col justify-center py-10">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="Solar Panels Background"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/20 sm:hidden"></div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="max-w-xl text-left">
            <span className="inline-flex items-center gap-1.5 text-[#f26822] font-black text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-4">
              POWERING A BRIGHTER TOMORROW ⚙️
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0f1c2c] leading-[1.1] mb-4">
              Smart Solar <br className="hidden sm:block" />
              Solutions for a <span className="text-[#f26822]">Better Future</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base max-w-lg font-medium leading-relaxed">
              We provide high-quality solar installation, electrician services and energy solutions.
            </p>
            
            {/* UPDATED COMPACT BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-2 w-full max-w-[300px] sm:max-w-none">
              <button className="bg-gradient-to-r from-[#f26822] to-orange-500 text-white font-black px-4 py-2.5 rounded-lg text-[10px] uppercase tracking-wider active:scale-[0.98] w-full sm:w-auto">
                Solar Services ⚡
              </button>
              <button className="bg-gradient-to-r from-[#2fa144] to-emerald-500 text-white font-black px-4 py-2.5 rounded-lg text-[10px] uppercase tracking-wider active:scale-[0.98] w-full sm:w-auto">
                Electrical Services 🔌
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: '🍃', title: 'Save The Nature', desc: 'Reduce carbon emissions and protect environment.' },
            { icon: '🛡️', title: 'Cost Effectiveness', desc: 'Reduce electricity bills with solar solutions.' },
            { icon: '⚙️', title: 'Expert Engineer', desc: 'Quality service and reliable installations.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-[#2fa144] rounded-full flex items-center justify-center text-white mb-4 text-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#0f1c2c] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALLERY SECTION */}
      <section className="w-full py-12 px-4">
        <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-[#0f1c2c] uppercase">
              OUR <span className="text-[#2fa144]">GALLERY</span>
            </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'Solar', 'Wind', 'Installation'].map((tab) => (
              <button key={tab} onClick={() => setActiveGalleryTab(tab)} 
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase ${activeGalleryTab === tab ? 'bg-[#f26822] text-white' : 'bg-gray-100'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div key={item.id} className="relative aspect-video sm:aspect-square rounded-xl overflow-hidden border">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}