'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SubsidyCalculator() {
  const [bill, setBill] = useState(1000);

  const getSystemDetails = (billAmount: number) => {
    const kw = Math.min(Math.ceil(billAmount / 1000), 10);
    let subsidy = 0;
    if (kw === 1) subsidy = 30000;
    else if (kw === 2) subsidy = 60000;
    else subsidy = 78000;

    const projectCost = kw * 55000;
    return { size: `${kw} KW`, subsidy, projectCost };
  };

  const { size, subsidy, projectCost } = getSystemDetails(bill);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      
      {/* HIGHLIGHT HEADER SECTION */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-[#2fa144] font-black text-[10px] sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
          Instant Estimation
        </h2>
        <h1 className="text-2xl sm:text-4xl font-black text-[#0f1c2c] mb-3">
          Subsidy Calculator & <span className="text-[#f26822]">Breakdown</span>
        </h1>
        <p className="text-gray-600 font-medium text-xs sm:text-sm max-w-lg mx-auto">
          Adjust the slider to estimate your rooftop solar setup and net cost.
        </p>
      </div>

      {/* GRID LAYOUT: Mobile par ek ke niche ek ayega */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left side: Calculator */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
          <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase">Your Avg Monthly Bill</label>
          <div className="text-2xl sm:text-3xl font-black text-[#f26822] mb-4">₹{bill.toLocaleString()}</div>
          
          <input 
            type="range" min="1000" max="10000" step="1000" value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-[#2fa144]"
          />
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Recommended Size</p>
            <h3 className="text-xl sm:text-2xl font-black text-[#0f1c2c]">{size}</h3>
          </div>
        </div>

        {/* Right side: Breakdown */}
        <div className="flex flex-col">
          <div className="bg-[#0f1c2c] p-6 sm:p-8 rounded-3xl text-white flex-grow">
            <h2 className="text-base sm:text-lg font-black mb-6">Project Breakdown</h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span>Cost:</span>
                <span>₹{projectCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-4">
                <span>Subsidy:</span>
                <span className="font-black text-[#2fa144]">- ₹{subsidy.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg sm:text-xl font-black pt-2">
                <span>Net Cost:</span>
                <span>₹{(projectCost - subsidy).toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <p className="text-[10px] font-black text-red-600 italic text-center mt-4">
            Note: State subsidy varies according to policy.
          </p>
        </div>
      </div>

      {/* LINKS SECTION */}
      <div className="flex flex-col items-center sm:items-start pl-0 sm:pl-8 gap-3 mt-8">
        <Link href="/subsidy/surya-ghar" className="font-black text-[#0f1c2c] hover:text-[#2fa144] transition text-xs uppercase tracking-wide">
          • PM Surya Ghar Yojana
        </Link>
        <Link href="/subsidy/kusum" className="font-black text-[#0f1c2c] hover:text-[#2fa144] transition text-xs uppercase tracking-wide">
          • PM KUSUM Yojana
        </Link>
      </div>
    </div>
  );
}