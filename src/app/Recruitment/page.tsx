'use client';
import { useState } from 'react';

export default function WorkRequirementPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', phone: '', exp: '', specialization: '', docId: '', projects: '' 
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "9413650200";
    // Aadhaar reference is redacted for privacy
    const msg = `*New Recruitment Application*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Experience:* ${formData.exp}%0A*Specialization:* ${formData.specialization}%0A*Doc/ID Reference:* [Aadhaar Redacted]%0A*Projects:* ${formData.projects}`;
    
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <div className="text-center mb-8 px-2">
          <h2 className="text-sm font-black text-[#2fa144] uppercase tracking-widest mb-3">
            JOIN OUR WORKFORCE
          </h2>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f1c2c] mb-4">
            Are you a Skilled Electrician?
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-lg mx-auto leading-relaxed">
            We are looking for passionate technicians to join our growing solar and electrical energy family.
          </p>
        </div>

        {/* QR Code Section (Added at the top) */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full max-w-xl justify-center">
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <img src="/requirement-qr.png" alt="Requirement QR" className="w-24 h-24 mb-2" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">Requirement Form</span>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <img src="/recruitment-qr.png" alt="Recruitment QR" className="w-24 h-24 mb-2" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">Recruitment Form</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-xl bg-white border border-gray-100 p-6 sm:p-10 rounded-3xl shadow-lg">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-black text-[#0f1c2c]">Application Received!</h3>
              <p className="text-sm text-gray-500 mt-2">Our team will review your profile soon.</p>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 border rounded-xl focus:border-[#2fa144] outline-none" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border rounded-xl focus:border-[#2fa144] outline-none" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input type="text" placeholder="Years of Experience" className="w-full p-4 bg-gray-50 border rounded-xl focus:border-[#2fa144] outline-none" required value={formData.exp} onChange={(e) => setFormData({...formData, exp: e.target.value})} />
                
                <input type="text" placeholder="Aadhar/ID Reference Number" className="w-full p-4 bg-gray-50 border rounded-xl focus:border-[#2fa144] outline-none" required value={formData.docId} onChange={(e) => setFormData({...formData, docId: e.target.value})} />
                
                <select className="w-full p-4 bg-gray-50 border rounded-xl text-gray-500 focus:border-[#2fa144] outline-none" value={formData.specialization} onChange={(e) => setFormData({...formData, specialization: e.target.value})} required>
                  <option value="">Specialization (Solar/Electric/Wind)</option>
                  <option value="Solar Installation">Solar Installation</option>
                  <option value="Electrical Maintenance">Electrical Maintenance</option>
                  <option value="General Technician">General Technician</option>
                </select>

                <textarea placeholder="Tell us about your previous projects..." className="w-full p-4 bg-gray-50 border rounded-xl focus:border-[#2fa144] outline-none" rows={4} value={formData.projects} onChange={(e) => setFormData({...formData, projects: e.target.value})}></textarea>
              </div>

              <button type="submit" className="w-full bg-[#2fa144] hover:bg-green-700 text-white py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.98]">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}