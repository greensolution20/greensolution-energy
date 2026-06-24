'use client';
import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [msgData, setMsgData] = useState({ name: '', email: '', body: '' });

  if (!isOpen) return null;

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "918107066447";
    const message = `*New Quote Request*%0A%0A*Name:* ${msgData.name}%0A*Email:* ${msgData.email}%0A*Details:* ${msgData.body}`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    onClose();
    setMsgData({ name: '', email: '', body: '' });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white p-8 rounded-3xl w-full max-w-md relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">✕</button>
        <h3 className="font-black text-2xl mb-6 text-[#0f1c2c]">Get A Free Quote</h3>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <input type="text" placeholder="Your Name" value={msgData.name} onChange={(e) => setMsgData({...msgData, name: e.target.value})} className="w-full p-4 border rounded-xl bg-gray-50" required />
          <input type="email" placeholder="Email" value={msgData.email} onChange={(e) => setMsgData({...msgData, email: e.target.value})} className="w-full p-4 border rounded-xl bg-gray-50" required />
          <textarea placeholder="Describe requirements..." value={msgData.body} onChange={(e) => setMsgData({...msgData, body: e.target.value})} className="w-full p-4 border rounded-xl bg-gray-50 resize-none h-24" required></textarea>
          <button type="submit" className="w-full bg-[#0f1c2c] text-white py-4 rounded-xl font-black hover:bg-[#f26822] transition-all">Submit Request</button>
        </form>
      </div>
    </div>
  );
}