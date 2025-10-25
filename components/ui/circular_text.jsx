'use client';

import React, { useEffect, useRef } from 'react';
import ArrowDown from '@/components/svg/arrow';

export default function CircularText({
   text = 'NO TEXT NO TEXT ',
   radius = 4.3,
   children = <ArrowDown />,
}) {
   const letters = text.split('');
   const angleStep = 360 / letters.length;
   const ref = useRef(null);
   const arrowRef = useRef(null);
   const linearPercent = useRef(0);
   const ROTATE_STEP = 2400;

   useEffect(() => {
      const onScroll = () => {
         linearPercent.current = (scrollY % ROTATE_STEP) / ROTATE_STEP;
         if (ref.current == null) return;
         ref.current.animate(
            [
               {
                  transform: `rotate(${linearPercent.current * 360}deg)`,
               },
            ],
            {
               duration: 100,
               fill: 'forwards',
            }
         );
         arrowRef.current.animate(
            [
               {
                  transform: `rotate(${-linearPercent.current * 360}deg)`,
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
         className={`relative flex size-[${10.2}vw] items-center justify-center overflow-hidden text-[1.3vw] font-bold max-md:text-[4vw]`}
      >
         {/* <div className="absolute bg-yellow-300 text-black">
            {linearPercent.current}
         </div> */}
         <div
            ref={arrowRef}
            className="flex min-h-[10vw] min-w-[10vw] flex-1 p-[4vw] max-md:p-[11vw]"
         >
            {children}
         </div>
         {letters.map((letter, i) => (
            <span
               key={i}
               className="absolute mr-[-1vw] max-md:mr-[-2.5vw]"
               style={{
                  transform: `
              rotate(${i * angleStep}deg)
              translateY(-${radius}vw)
            `,
                  transformOrigin: '0 50%',
               }}
            >
               {letter}
            </span>
         ))}
      </div>
   );
}
