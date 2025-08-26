'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ActionCards() {
   const sigmas = [
      {
         title: 'Student Sigma',
         description:
            'Jumpstart your open-source journey, gain hands-on experience, and connect with mentors to develop your skills and career.',
         iconPath: '/student-shape.svg',
      },
      {
         title: 'DevOps Sigma',
         description:
            'Discover the latest open-source tools and best practices to streamline workflows and improve infrastructure management.',
         iconPath: '/devops-shape.svg',
      },
      {
         title: 'Community Sigma',
         description:
            'Expand your network, share your knowledge, and help grow a vibrant, inclusive open-source ecosystem.',
         iconPath: '/community-shape.svg',
      },
      {
         title: 'AI Sigma',
         description:
            'Learn how open-source AI frameworks are shaping the future of machine learning and innovation.',
         iconPath: '/ai-shape.svg',
      },
      {
         title: 'Design Sigma',
         description:
            'Bring creativity into open source with design systems, user experiences, and inclusive interfaces.',
         iconPath: '/design-shape.svg',
      },
      {
         title: 'Security Sigma',
         description:
            'Understand best practices, tools, and communities that keep open-source ecosystems secure.',
         iconPath: '/security-shape.svg',
      },
   ];

   const [page, setPage] = useState(0);
   const itemsPerPage = 3;
   const totalPages = Math.ceil(sigmas.length / itemsPerPage);

   const handlePrev = () => {
      setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
   };

   const handleNext = () => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
   };

   return (
      <main className="relative flex flex-col overflow-hidden bg-[#1b1b1f] p-8 text-white md:p-12 lg:p-16">
         {/* Header */}
         <header className="mb-10 flex w-full items-start justify-between">
            <div className="z-10 flex items-start gap-4 md:gap-8">
               <div className="h-[80px] w-[80px] flex-shrink-0 text-gray-500 md:h-[100px] md:w-[100px]">
                  <Image
                     src={'asterisks_symbol.svg'}
                     height={100}
                     width={100}
                     alt="Asterisk"
                  />
               </div>
               <div>
                  <h1 className="text-5xl leading-tight font-bold tracking-tight md:text-6xl">
                     Who Should
                  </h1>
                  <h1 className="text-5xl leading-tight font-bold tracking-tight italic md:text-6xl">
                     attend
                  </h1>
                  <h1 className="text-5xl leading-tight font-bold tracking-tight md:text-6xl">
                     FOSSTER
                  </h1>
               </div>
            </div>
         </header>

         <div className="mt-12 flex h-full w-full flex-grow flex-col items-end justify-center lg:mt-0 lg:flex-row lg:justify-start">
            {/* Desktop Arrows */}
            <div className="hidden h-full w-1/4 flex-col items-baseline justify-end pb-16 lg:flex">
               <div className="mt-4 flex items-baseline gap-10">
                  <button
                     onClick={handlePrev}
                     className="flex h-30 w-30 items-center justify-center rounded-full bg-[#d9d9d9] transition-colors hover:bg-gray-400"
                  >
                     <span className="font-mono text-6xl text-black">←</span>
                  </button>
                  <button
                     onClick={handleNext}
                     className="flex h-30 w-30 items-center justify-center rounded-full bg-[#d9d9d9] transition-colors hover:bg-gray-400"
                  >
                     <span className="font-mono text-6xl text-black">→</span>
                  </button>
               </div>
            </div>

            <div className="relative flex w-full grow flex-col overflow-hidden">
               <div
                  className="flex px-10 transition-transform duration-500 ease-in-out"
                  style={{
                     transform: `translateX(-${page * 50}%)`,
                     width: `${totalPages * 100}%`,
                  }}
               >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                     <div
                        key={pageIndex}
                        className="grid w-full flex-shrink-0 grid-cols-1 gap-6 md:grid-cols-3"
                        style={{ width: `${100 / totalPages}%` }}
                     >
                        {sigmas
                           .slice(
                              pageIndex * itemsPerPage,
                              pageIndex * itemsPerPage + itemsPerPage
                           )
                           .map((item, idx) => (
                              <div
                                 key={idx}
                                 className="flex grow flex-col rounded-3xl bg-[#a5a1ff] p-8 shadow-lg"
                              >
                                 <div className="relative mb-20 w-full">
                                    <div className="h-40 w-40 bg-black"></div>
                                 </div>
                                 <h2 className="mb-4 text-3xl font-bold text-black">
                                    {item.title}
                                 </h2>
                                 <p className="text-xl leading-relaxed text-gray-700">
                                    {item.description}
                                 </p>
                              </div>
                           ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Mobile Arrows */}
         <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
               onClick={handlePrev}
               className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9d9d9] transition-colors hover:bg-gray-400"
            >
               <span className="font-mono text-3xl text-black">←</span>
            </button>
            <button
               onClick={handleNext}
               className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9d9d9] transition-colors hover:bg-gray-400"
            >
               <span className="font-mono text-3xl text-black">→</span>
            </button>
         </div>
      </main>
   );
}
