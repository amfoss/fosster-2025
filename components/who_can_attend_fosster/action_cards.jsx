'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowDown from '../svg/arrow';
import { whoCanAttendData } from '../../data/jsonData';

export default function ActionCards() {
   const [page, setPage] = useState(0);
   const [itemsPerPage, setItemsPerPage] = useState(3);

   // responsive items per page
   useEffect(() => {
      const updateItemsPerPage = () => {
         setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
      };
      updateItemsPerPage();
      window.addEventListener('resize', updateItemsPerPage);
      return () => window.removeEventListener('resize', updateItemsPerPage);
   }, []);

   const totalPages = Math.ceil(whoCanAttendData.length / itemsPerPage);

   const handlePrev = () => {
      setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
   };

   const handleNext = () => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
   };

   return (
      <div className="relative m-[0.5vw] flex flex-col overflow-hidden rounded-[5vw] bg-[#1b1b1f] p-8 text-white max-md:min-h-[90vh] max-md:rounded-[10vw] md:min-h-screen md:p-12 lg:p-16">
         <div className="mb-10 flex w-full">
            <div className="z-10 flex w-full gap-[2.5vw]">
               <div className="size-[80px] flex-shrink-0 text-gray-500 md:h-[100px] md:w-[100px]">
                  <Image
                     src={'asterisks_symbol.svg'}
                     height={100}
                     width={100}
                     alt="Asterisk"
                  />
               </div>
               <div className="flex flex-1 max-md:flex-col">
                  <h1 className="flex-1 text-[5vw] leading-tight font-bold tracking-tight max-md:text-[10vw]">
                     Who Should <br />
                     <i>attend</i> FOSSTER
                  </h1>
                  <p className="text-[1.5vw] max-md:text-[4vw] md:max-w-[30vw]">
                     Anyone can attend honestly, I just want the monaayyy ;{')'}
                  </p>
               </div>
            </div>
         </div>

         <div className="flex flex-1 gap-x-[2.5vw] max-md:flex-col-reverse max-md:gap-y-[6vw]">
            {/* Arrows */}
            <div className="flex flex-col justify-end max-md:items-center">
               <div className="flex gap-x-[1vw]">
                  <button
                     onClick={handlePrev}
                     className="flex size-[6.7vw] rotate-90 items-center justify-center rounded-full bg-[#d9d9d9] p-[2vw] text-black transition-colors hover:bg-gray-400 max-md:size-[20vw] max-md:p-[4vw]"
                  >
                     <ArrowDown />
                  </button>
                  <button
                     onClick={handleNext}
                     className="flex size-[6.7vw] -rotate-90 items-center justify-center rounded-full bg-[#d9d9d9] p-[2vw] text-black transition-colors hover:bg-gray-400 max-md:size-[20vw] max-md:p-[4vw]"
                  >
                     <ArrowDown />
                  </button>
               </div>
            </div>

            <div className="relative flex w-full grow flex-col overflow-hidden rounded-[2.5vw]">
               <div
                  className="flex flex-1 gap-x-[0.5vw] px-[0.5vw] transition-transform duration-500 ease-in-out"
                  style={{
                     transform: `translateX(-${page * (100 / totalPages)}%)`,
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
                                 className="flex flex-1 grow cursor-pointer flex-col overflow-hidden rounded-[2.5vw] bg-[#a5a1ff] p-[2.5vw] max-md:rounded-[5vw] max-md:p-[5vw]"
                                 onClick={handleNext}
                              >
                                 <h2 className="text-[1.7vw] font-bold text-black max-md:text-[4vw]">
                                    {item.title}
                                 </h2>
                                 <div className="m-[2.5vw] flex justify-center">
                                    <div className="h-40 w-40 bg-black"></div>
                                 </div>
                                 <p className="flex-1 text-xl leading-relaxed text-gray-700 max-md:text-[4vw]">
                                    {item.description}
                                 </p>
                              </div>
                           ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
