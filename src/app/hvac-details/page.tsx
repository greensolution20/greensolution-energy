'use client';
import { useState } from 'react';

export default function HVACDetails() {
  const [showForm, setShowForm] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  // WhatsApp logic added
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "918107066447";
    const msg = `*HVAC Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    setShowForm(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white">
      {/* Hero Section */}
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-5xl font-black text-[#0f1c2c] mb-6">HVAC System Solutions</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          We provide high-performance climate control solutions, blending advanced engineering with energy-efficient technology for residential and commercial excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Core Expertise */}
        <section>
          <h3 className="font-black text-[#f26822] uppercase text-sm tracking-widest mb-6">Our Expertise</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-black text-[#0f1c2c] mb-2">Custom HVAC Installation</h4>
              <p className="text-sm text-gray-600">Tailored climate systems designed to match the unique structural and thermal requirements of your space.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="font-black text-[#0f1c2c] mb-2">Precision Ductwork Design</h4>
              <p className="text-sm text-gray-600">Optimized airflow planning to ensure maximum distribution efficiency and minimal energy loss.</p>
            </div>
          </div>
        </section>

        {/* Maintenance & Why Choose Us */}
        <section>
          <h3 className="font-black text-[#2fa144] uppercase text-sm tracking-widest mb-6">24/7 Reliability</h3>
          <p className="text-gray-600 mb-6 text-sm">
            Our certified technicians provide round-the-clock maintenance, ensuring your systems operate at peak performance throughout the year.
          </p>
          
          <div className="bg-[#0f1c2c] p-8 rounded-3xl text-white">
            <h4 className="font-black mb-4">Why Partner With Us?</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Energy-Efficient Configurations</li>
              <li>• Certified Engineering Standards</li>
              <li>• Rapid Response Maintenance</li>
              <li>• Long-term System Warranty Support</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center bg-gray-50 p-10 rounded-3xl">
        <h3 className="font-black text-2xl text-[#0f1c2c] mb-4">Ready to optimize your climate control?</h3>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-[#f26822] text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition"
        >
          Inquire Now
        </button>
      </div>

      {/* MODAL FORM - Updated with onSubmit handler */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full relative shadow-2xl">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-400 font-black text-xl">✕</button>
            <h2 className="text-2xl font-black mb-6">Inquiry Form</h2>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border rounded-xl" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-3 border rounded-xl" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Your Message" 
                className="w-full p-3 border rounded-xl h-24"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[#2fa144] text-white font-bold py-3 rounded-xl hover:bg-green-700 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}