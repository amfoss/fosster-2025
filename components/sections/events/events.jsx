'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { events } from '@/data/jsonData';
import ArrowDown from '@/components/svg/arrow';
const Events = () => {
   const [activeIndex, setActiveIndex] = useState(null);
   const cardsRef = useRef([]);

   // this is temp placeholder for lock mechanism and material shapes morphs
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               const index = Number(entry.target.getAttribute('data-index'));
               if (entry.isIntersecting) {
                  setActiveIndex(index);
               }
            });
         },
         {
            root: null,
            threshold: 0.1,
            rootMargin: '-40% 0px -40% 0px',
         }
      );

      cardsRef.current.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
   }, []);
   return (
      <div id="events" className="m-[0.5vw]">
         {/* Header */}
         <div className="mx-[2.5vw] flex items-center">
            <h1 className="text-[6.5vw] font-semibold italic max-md:text-[13vw]">
               EVENTS
            </h1>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 gap-[0.5vw] pt-[1vw] md:h-screen md:max-h-screen md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => {
               const isActive = idx === activeIndex;
               return (
                  <Link
                     href={'/events/' + event.link}
                     key={idx}
                     data-index={idx}
                     ref={(el) => {
                        if (el) cardsRef.current[idx] = el;
                     }}
                     className={`flex transform flex-col justify-center overflow-hidden rounded-[5vw] bg-[#1b1b1f] p-[5vw] align-middle shadow-md transition-all duration-300 hover:scale-[97%] hover:bg-[#a5a1ff] hover:text-black ${isActive ? 'max-md:rounded-[25vw] max-md:bg-[#a5a1ff] max-md:p-[20vw] max-md:text-black' : 'max-md:rounded-[10vw] max-md:p-[10vw]'}`}
                  >
                     <div className="flex flex-1 items-start">
                        <h2 className="flex-1 text-[1.5vw] font-bold max-md:text-[4vw]">
                           {event.title}
                        </h2>
                        <div className="min-w-[2vw] -rotate-135 max-md:min-w-[6vw]">
                           <ArrowDown />
                        </div>
                     </div>
                     <p className="text-[1.3vw] leading-snug max-md:mt-[5vw] max-md:text-[4vw]">
                        {event.description}
                     </p>
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Events;
