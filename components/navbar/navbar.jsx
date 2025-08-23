'use client';

import { useEffect, useState } from 'react';
import { scrollToHash } from '@/app/_utils/helpers';

export default function NavBar() {
   const [open, setOpen] = useState(true);
   useEffect(() => {
      let observer;
      const ref = document.getElementById('end');
      observer = new IntersectionObserver(
         ([entry]) => {
            setOpen(!entry.isIntersecting);
         },
         { root: null, rootMargin: '0px', threshold: 0 }
      );

      if (ref) {
         observer.observe(ref);
      }

      return () => {
         if (ref && observer != undefined) {
            observer.unobserve(ref);
         }
      };
   }, []);
   return (
      <nav
         className={`fixed top-0 z-50 flex w-full text-[1.3vw] ${open ? '' : '-translate-y-full'}`}
      >
         <div className="flex flex-1 justify-start pt-[0.75vw] pl-[0.75vw]">
            <button
               onClick={() => {
                  scrollToHash('hero');
               }}
               className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
            >
               {' '}
               foster
            </button>
         </div>
         <div className="flex flex-1 items-center justify-center pt-[0.75vw]">
            <button
               onClick={() => {
                  scrollToHash('why-attend');
               }}
               className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
            >
               {' '}
               about
            </button>
            <button
               onClick={() => {
                  scrollToHash('hero');
               }}
               className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
            >
               {' '}
               sponsor
            </button>
            <button
               onClick={() => {
                  scrollToHash('hero');
               }}
               className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
            >
               {' '}
               venue
            </button>
         </div>
         <div className="flex flex-1 justify-end pt-[0.75vw] pr-[0.75vw]">
            <button
               onClick={() => {
                  scrollToHash('hero');
               }}
               className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
            >
               {' '}
               foster
            </button>
         </div>
      </nav>
   );
}
