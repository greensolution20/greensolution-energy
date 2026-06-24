import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#162537] text-gray-400 pt-16 pb-8 border-t border-gray-700 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
        
        {/* Column 1: Brand Identity */}
        <div className="flex flex-col items-start text-left">
          <div className="mb-5 block relative">
            <Image 
              src="/images/logo-transparent.png" 
              alt="Green Solution Logo" 
              width={180}       
              height={50}       
              className="object-contain" 
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400 font-medium max-w-sm">
            Powering a Greener Future with Expert Solar & Electrical Services.
          </p>
          
          {/* Social Media Icons with Real Links */}
          <div className="mt-6 flex items-center gap-3">
            {/* Instagram */}
            <a href="https://www.instagram.com/greensolutionindia?utm_source=qr&igsh=MTFlemd0YTV3ZjVuYQ==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-600 hover:border-[#f26822] hover:text-[#f26822] flex items-center justify-center text-gray-300 transition-all duration-300" title="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com/@greensolutionindia?si=JxmrHr5EdUyNcg5F" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-600 hover:border-[#f26822] hover:text-[#f26822] flex items-center justify-center text-gray-300 transition-all duration-300" title="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-600 hover:border-[#f26822] hover:text-[#f26822] flex items-center justify-center text-gray-300 transition-all duration-300" title="LinkedIn">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3V10h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 10.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3V10h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start text-left md:pl-8">
          <h3 className="text-white font-black text-sm tracking-widest uppercase mb-6 relative">
            Quick Links
            <span className="w-6 h-[2px] bg-[#2fa144] absolute left-0 -bottom-2 rounded-full"></span>
          </h3>
          <ul className="space-y-3 text-sm font-semibold">
            <li><a href="/" className="hover:text-[#f26822] transition-colors block">Home</a></li>
            <li><a href="/services" className="hover:text-[#f26822] transition-colors block">Our Services</a></li>
            <li><a href="/branches" className="hover:text-[#f26822] transition-colors block">Branches</a></li>
            <li><a href="/projects" className="hover:text-[#f26822] transition-colors block">Projects</a></li>
            <li><a href="/about" className="hover:text-[#f26822] transition-colors block">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#f26822] transition-colors block">Contact US</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-white font-black text-sm tracking-widest uppercase mb-6 relative">
            Contact Info
            <span className="w-6 h-[2px] bg-[#2fa144] absolute left-0 -bottom-2 rounded-full"></span>
          </h3>
          <ul className="space-y-4 text-sm font-medium text-gray-300">
            <li className="flex items-start gap-3 group">
              <span className="text-[#f26822] text-base mt-0.5 shrink-0">📍</span>
              <span className="leading-relaxed text-gray-400 font-semibold">
                23 Subhash Nagar <br />
                Chang Chittar Road Beawar 305901
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f26822] text-base shrink-0">📞</span>
              <span className="flex flex-col text-gray-400 font-bold tracking-wide">
                <span>+91 8107066447</span>
                <span>+91 9413650200</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f26822] text-base shrink-0">✉️</span>
              <a href="mailto:greensworkforce@gmail.com" className="text-gray-400 hover:text-[#f26822] transition-colors font-bold break-all">
                greensworkforce@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-6 border-t border-gray-700/60 text-center text-xs text-gray-500 font-medium">
        <p>© 2026 Green Solution. All Rights Reserved. </p>
      </div>
    </footer>
  );
}