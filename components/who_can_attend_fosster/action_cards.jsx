'use client';
import { useState } from 'react';
import Image from 'next/image';
import ArrowDown from '../svg/arrow';
import { whoCanAttendData } from '../jsonData';
export default function ActionCards() {
   const [page, setPage] = useState(0);
   const itemsPerPage = 3;
   const totalPages = Math.ceil(whoCanAttendData.length / itemsPerPage);

   const handlePrev = () => {
      setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
   };

   const handleNext = () => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
   };

   return (
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#1b1b1f] p-8 text-white md:p-12 lg:p-16">
         {/* Header */}
         <header className="mb-10 flex w-full">
            <div className="z-10 flex w-full gap-[2.5vw]">
               <div className="h-[80px] w-[80px] flex-shrink-0 text-gray-500 md:h-[100px] md:w-[100px]">
                  <Image
                     src={'asterisks_symbol.svg'}
                     height={100}
                     width={100}
                     alt="Asterisk"
                  />
               </div>
               <div className="flex flex-1">
                  <h1 className="flex-1 text-[5vw] leading-tight font-bold tracking-tight">
                     Who Should <br />
                     <i>attend</i> FOSSTER
                  </h1>
                  <p className="max-w-[30vw] text-[1.5vw]">
                     Anyone can attend honestly, I just want the monaayyy ;{')'}
                  </p>
               </div>
            </div>
         </header>

         <div className="flex flex-1 gap-x-[2.5vw]">
            {/* Desktop Arrows */}
            <div className="flex flex-col justify-end">
               <div className="flex gap-x-[1vw]">
                  <button
                     onClick={handlePrev}
                     className="flex size-[6.7vw] rotate-90 items-center justify-center rounded-full bg-[#d9d9d9] p-[2vw] text-black transition-colors hover:bg-gray-400"
                  >
                     <ArrowDown />
                  </button>
                  <button
                     onClick={handleNext}
                     className="flex size-[6.7vw] -rotate-90 items-center justify-center rounded-full bg-[#d9d9d9] p-[2vw] text-black transition-colors hover:bg-gray-400"
                  >
                     <ArrowDown />
                  </button>
               </div>
            </div>

            <div className="relative flex w-full grow flex-col overflow-hidden rounded-[2.5vw]">
               <div
                  className="flex flex-1 gap-x-[0.5vw] px-[0.5vw] transition-transform duration-500 ease-in-out"
                  style={{
                     transform: `translateX(-${page * 50}%)`,
                     width: `${totalPages * 100}%`,
                  }}
               >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                     <div
                        key={pageIndex}
                        className="flex w-full flex-shrink-0 gap-x-[0.5vw]"
                        style={{ width: `${100 / totalPages}%` }}
                     >
                        {whoCanAttendData
                           .slice(
                              pageIndex * itemsPerPage,
                              pageIndex * itemsPerPage + itemsPerPage
                           )
                           .map((item, idx) => (
                              <div
                                 key={idx}
                                 className="flex flex-1 grow flex-col overflow-hidden rounded-[2.5vw] bg-[#a5a1ff] p-[2.5vw]"
                              >
                                 <h2 className="text-[1.7vw] font-bold text-black">
                                    {item.title}
                                 </h2>
                                 <div className="m-[2.5vw] flex justify-center">
                                    <div className="h-40 w-40 bg-black"></div>
                                 </div>
                                 <p className="flex-1 text-xl leading-relaxed text-gray-700">
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
      </div>
   );
}
