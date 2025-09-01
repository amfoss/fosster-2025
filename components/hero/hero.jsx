'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CircularText from '../ui/circular_text';

export default function Hero() {
   const pathname = usePathname();
   const [isHidden, setIsHidden] = useState(false);
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
         <div className="text-[4.5vw] font-bold tracking-tight">
            <p className="leading-[2vw]">CODE-COLLABORATE</p>
            <div className="flex">
               <div className="mr-[0.5vw] flex flex-col items-start">
                  <p>CREATE ❤️</p>
                  <div
                     id="pill-target"
                     className="mt-[-0.5vw] flex min-h-[7.3vw] min-w-full flex-1 items-center justify-center rounded-full text-[2.3vw] font-normal tracking-normal"
                  ></div>
               </div>
               <div className="text-[7vw] font-black">
                  <p className="leading-[8.4vw]">FOSSTER</p>
                  <p className="leading-[4vw]">2025</p>
               </div>
            </div>
         </div>
         <div className="absolute right-0 bottom-0 m-[2.5vw] size-[10vw]">
            <CircularText text="SEE MORE SEE MORE " />
         </div>
      </div>
   );
}
