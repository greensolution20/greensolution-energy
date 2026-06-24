'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [msgData, setMsgData] = useState({ name: '', email: '', body: '' });

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp par bhejne ke liye message format
    const phone = "918107066447";
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${msgData.name}%0A*Email:* ${msgData.email}%0A*Requirement:* ${msgData.body}`;
    
    // WhatsApp URL create karna
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    // WhatsApp ko naye tab mein open karna
    window.open(whatsappUrl, '_blank');
    
    // Form reset kar dena
    setMsgData({ name: '', email: '', body: '' });
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* HEADER BANNER */}
      <section className="relative w-full bg-[#0f1c2c] text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero.png')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight">
            Connect With <span className="text-[#2fa144]">Our Engineers</span>
          </h1>
          <p className="mt-6 text-gray-400 text-base max-w-xl mx-auto font-medium leading-relaxed">
            We are here to assist with cost estimations and site diagnostic assessments.
          </p>
        </div>
      </section>

      {/* DETAILS & FORM GRID */}
      <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Direct Address */}
        <div className="space-y-12 text-left self-start">
          <div className="pb-8 border-b border-gray-100">
            <h2 className="text-4xl font-black text-[#0f1c2c] tracking-tight">Our Main Office</h2>
            <p className="text-gray-600 text-lg font-medium mt-6 leading-relaxed flex gap-3">
              <span className="text-2xl mt-1">📍</span> 
              23 Subhash Nagar, Chang Chittar Road<br />Beawar, Rajasthan 305901
            </p>
          </div>

          <div className="space-y-8 font-bold text-base text-gray-600">
            <p className="flex items-center gap-4 group">
              <span className="text-2xl bg-gray-50 p-3 rounded-full">📞</span> 
              <span className="text-[#0f1c2c] text-lg">+91 81070 66447, +91 94686 66447</span>
            </p>
            <p className="flex items-center gap-4 group">
              <span className="text-2xl bg-gray-50 p-3 rounded-full">✉️</span> 
              <span className="text-gray-600 text-lg font-medium">greensworkforce@gmail.com</span>
            </p>
            <p className="flex items-center gap-4 group">
              <span className="text-2xl bg-gray-50 p-3 rounded-full">🕒</span> 
              <span className="text-gray-500 font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</span>
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]">
          <h3 className="font-black text-[#0f1c2c] text-2xl mb-8">Drop Us a Message</h3>
          <form onSubmit={onSubmitHandler} className="space-y-6 text-left">
            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-2">Your Name</label>
              <input 
                type="text" 
                value={msgData.name} 
                onChange={(e) => setMsgData({...msgData, name: e.target.value})} 
                placeholder="Enter your full name" 
                className="w-full border border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-[#2fa144] focus:ring-2 focus:ring-[#2fa144]/10 bg-gray-50 transition-all" 
                required 
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-2">Email Address</label>
              <input 
                type="email" 
                value={msgData.email} 
                onChange={(e) => setMsgData({...msgData, email: e.target.value})} 
                placeholder="Enter your email address" 
                className="w-full border border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-[#2fa144] focus:ring-2 focus:ring-[#2fa144]/10 bg-gray-50 transition-all" 
                required 
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 block mb-2">Message Detail</label>
              <textarea 
                rows={4} 
                value={msgData.body} 
                onChange={(e) => setMsgData({...msgData, body: e.target.value})} 
                placeholder="Describe your project requirements..." 
                className="w-full border border-gray-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-[#2fa144] focus:ring-2 focus:ring-[#2fa144]/10 bg-gray-50 resize-none transition-all" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#0f1c2c] text-white font-black py-4 rounded-2xl text-sm transition-all duration-300 hover:bg-[#f26822] active:scale-[0.98] mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}