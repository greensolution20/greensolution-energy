'use client';

import Image from 'next/image';

export default function ProjectsPage() {
  // Completed project data grid list
  const allProjects = [
    { title: 'Project 1', img: '/images/project1.webp' },
    { title: 'Project 2', img: '/images/project2.webp' },
    { title: 'Project 3', img: '/images/project3.webp' },
    { title: 'Project 4', img: '/images/project4.webp' },
    { title: 'Project 5', img: '/images/project5.webp' },
    { title: 'Project 6', img: '/images/project6.webp' }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* HEADER BANNER */}
      <section className="relative w-full bg-[#0f1c2c] text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero.png')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black">
            Successful <span className="text-[#2fa144]">Case Studies</span>
          </h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Explore our real-world execution maps proving sustainability and efficiency in action.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((p, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-100">
                  <Image 
                    src={p.img} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  
                </div>
                <div className="mt-5 px-1 text-left">
                  <h3 className="font-black text-[#0f1c2c] text-lg leading-snug">{p.title}</h3>
                </div>
              </div>


            </div>
          ))}
        </div>
      </section>
    </div>
  );
}