'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CircularText from '@/components/ui/circular_text';

export default function Hero() {
   const pathname = usePathname();
   const [isHidden, setIsHidden] = useState(false);
   const [radius, setRadius] = useState(4.3);

   useEffect(() => {
      const updateSpacing = () => {
         setRadius(window.innerWidth > 680 ? 4.3 : 13);
      };
      updateSpacing();
      window.addEventListener('resize', updateSpacing);
      return () => window.removeEventListener('resize', updateSpacing);
   }, []);

   useEffect(() => {
      if (pathname != '/') {
         setIsHidden(true);
      } else {
         setIsHidden(false);
      }
   }, [pathname]);
   return (
      <div
         id="hero"
         className={`${isHidden ? 'hidden' : ''} flex min-h-screen items-center justify-center`}
      >
         <div className="text-[4.5vw] font-bold tracking-tight max-md:text-[8vw]">
            <p className="md:leading-[2vw]">CODE-COLLABORATE</p>
            <div className="flex max-md:flex-col">
               <div className="flex items-start md:mr-[0.5vw] md:flex-col">
                  <p className="flex-1 max-md:leading-[6vw]">
                     CREATE <span className="">❤️</span>
                  </p>
                  <div
                     id="pill-target"
                     className="flex min-h-[7.3vw] items-center justify-center rounded-full text-[2.3vw] font-normal tracking-normal max-md:min-h-[14.6vw] max-md:text-[4.6vw] md:mt-[-0.5vw] md:min-w-full md:flex-1"
                  ></div>
               </div>
               <div className="text-[7vw] font-black max-md:text-[14vw]">
                  <p className="leading-[8.4vw] max-md:leading-[16.8vw]">
                     FOSSTER
                  </p>
                  <p className="leading-[4vw] max-md:leading-[8vw]">2025</p>
               </div>
            </div>
         </div>
         <div className="absolute right-0 bottom-0 m-[2.5vw] size-[10vw] overflow-hidden max-md:m-[5vw] max-md:size-[30vw]">
            <CircularText text="SEE MORE SEE MORE " radius={radius} />
         </div>
      </div>
   );
}
