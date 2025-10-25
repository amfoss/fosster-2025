'use client';

import { useEffect, useRef } from 'react';

export default function SlidingCards({ reason, icons }) {
   const ref = useRef(null);
   const RISE_LEVEL = 0.5;
   const cardDesc = useRef(null);
   const cardMain = useRef(null);
   const newPercent = useRef(0);

   useEffect(() => {
      const onScroll = () => {
         if (ref.current == null) return;
         const rect = ref.current.getBoundingClientRect();
         const linearPercent =
            rect.top <= 0
               ? 0
               : rect.top >= RISE_LEVEL * window.innerHeight - rect.height / 2
                 ? rect.top < window.innerHeight
                    ? 1 -
                      (window.innerHeight - rect.top) /
                         (RISE_LEVEL * window.innerHeight + rect.height / 2)
                    : 1
                 : 0;

         newPercent.current = linearPercent;
         cardDesc.current.animate(
            [
               {
                  transform: `translateX(${newPercent.current * 50}%)`,
               },
            ],
            {
               duration: 100,
               fill: 'forwards',
            }
         );
         cardMain.current.animate(
            [
               {
                  transform: `translateX(${-newPercent.current * 50}%)`,
               },
            ],
            {
               duration: 100,
               fill: 'forwards',
            }
         );
      };
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               window.addEventListener('scroll', onScroll);
            } else {
               window.removeEventListener('scroll', onScroll);
            }
         },
         { root: null, rootMargin: '0px', threshold: 0 }
      );

      const elem_ref = ref.current;
      onScroll(); // to init positions
      if (elem_ref) {
         observer.observe(elem_ref);
      }

      return () => {
         if (elem_ref) {
            observer.unobserve(elem_ref);
         }
      };
   }, []);
   return (
      <div
         ref={ref}
         className="flex min-h-[17vw] flex-1 justify-center rounded-[5vw] max-md:rounded-[10vw]"
      >
         {/* <div className="absolute z-10 bg-amber-300 text-black">
            {newPercent.current}
         </div> */}
         <div
            ref={cardDesc}
            className="flex min-w-[49.5vw] transform rounded-[5vw] bg-[#1b1b1f] p-[3.8vw] pr-[5vw] duration-100 will-change-transform max-md:rounded-[10vw] max-md:p-[10vw]"
         >
            <div className="mr-[3.8vw] flex min-w-[3vw] items-center max-md:mr-[10vw] max-md:min-w-[9vw]">
               {reason.icon in icons ? icons[reason.icon] : 'Icon'}
            </div>
            <div className="flex flex-1 flex-col text-[1.2vw] max-md:text-[4vw]">
               <p className="flex-1 font-semibold max-md:mb-[3vw]">
                  {reason.reason.heading}
               </p>
               <p className=" ">{reason.reason.desc}</p>
            </div>
         </div>
         <div className="mx-[-5vw] min-w-[10vw] bg-[#1b1b1f] max-md:hidden"></div>
         <div
            ref={cardMain}
            className="flex min-w-[49.5vw] transform rounded-[5vw] bg-[#a5a1ff] duration-100 will-change-transform max-md:hidden"
         >
            <div className="flex flex-1 flex-col items-center justify-center space-y-[-0.25vw] text-black">
               <p className="text-[1.2vw] font-semibold">
                  {reason.reason.highlight.small}
               </p>
               <p className="text-[3.5vw] font-black italic">
                  {reason.reason.highlight.bold}
               </p>
            </div>
         </div>
      </div>
   );
}
