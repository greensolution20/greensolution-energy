'use client';
import React from 'react';
import { Phone, MessageCircle, MapPin, ClipboardList } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const Sidebar = () => {
  // Yahan se 'openQuoteModal' nikalna hai, addQuote nahi
  const { openQuoteModal } = useAppContext(); 

  const actions = [
    { name: 'WhatsApp', icon: <MessageCircle size={22} />, color: 'text-green-500', link: 'https://wa.me/918107066447', isExternal: true },
    { name: 'Call Now', icon: <Phone size={22} />, color: 'text-blue-500', link: 'tel:+918107066447', isExternal: false },
    { name: 'Branches', icon: <MapPin size={22} />, color: 'text-red-500', link: '/branches', isExternal: false },
  ];

  return (
    <div className="fixed right-4 top-[75%] -translate-y-1/2 z-[100] bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-xl flex flex-col gap-4">
      {actions.map((item) => (
        <a 
          key={item.name} 
          href={item.link} 
          target={item.isExternal ? "_blank" : "_self"} 
          rel={item.isExternal ? "noopener noreferrer" : ""}
          className="flex items-center justify-center p-2 rounded-full bg-white/50 hover:bg-white transition-all"
        >
          <span className={item.color}>{item.icon}</span>
        </a>
      ))}
      
      {/* Yahan 'openQuoteModal()' call karo */}
      <button 
        onClick={() => openQuoteModal()} 
        className="flex items-center justify-center p-2 rounded-full bg-white/50 hover:bg-white transition-all text-emerald-600" 
        title="Get Quote"
      >
        <ClipboardList size={22} />
      </button>
    </div>
  );
};

export default Sidebar;