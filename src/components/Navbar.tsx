'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solar Services', href: '/services?type=solar' },
    { name: 'Electrical & Other', href: '/services?type=electrical' },
    { name: 'Requirement', href: '/requirements' },
    { name: 'Subsidy Guide', href: '/subsidy' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="w-full px-4 lg:px-12 h-20 xl:h-24 flex items-center">
        
        {/* Logo - Path updated to /images/logo.png */}
        <Link href="/" className="shrink-0 sm:ml-4">
          <Image 
          src="/images/logo-transparent.png" // Ye file use kar
          alt="Green Solution Logo" 
          width={260} 
          height={70} 
          className="h-10 xl:h-16 w-auto object-contain" 
          priority
        />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex flex-1 justify-center items-end h-full pb-6 gap-6 font-black text-[12px] uppercase text-slate-800 tracking-wide">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#f26822] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="xl:hidden ml-auto p-2 text-2xl z-[60]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg p-6 flex flex-col gap-4 font-black uppercase text-xs text-slate-800">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="py-2 border-b border-slate-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}