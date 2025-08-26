'use client';

import { useEffect, useRef, useState } from 'react';
import { scrollToHash } from '@/app/_utils/helpers';
import Pill from './pill';
import Link from 'next/link';

export default function NavBar() {
   const [fill, setFill] = useState(false);
   const pillRef = useRef(null);
   const navTargetRef = useRef(null);
   const navLinks = [
      { label: 'about', targetHash: 'why-attend' },
      { label: 'venue', link: '/' },
      { label: 'contact', targetHash: 'contact-us' },
   ];

   const handlePillPlacement = () => {
      if (!pillRef.current || !navTargetRef.current) return;
      const targetRef = document.getElementById('pill-target');
      if (!targetRef) return;

      const firstRect = pillRef.current.getBoundingClientRect();

      let destination = fill ? targetRef : navTargetRef.current;

      const firstFontSize = window.getComputedStyle(pillRef.current).fontSize;
      const targetFontSize = window.getComputedStyle(destination).fontSize;
      destination.appendChild(pillRef.current);
      const lastRect = pillRef.current.getBoundingClientRect();

      const dx = firstRect.left - lastRect.left;
      const dy = firstRect.top - lastRect.top;

      pillRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      const anim = pillRef.current.animate(
         [
            {
               transform: `translate(${dx}px, ${dy}px)`,
               fontSize: `${(firstFontSize * 100) / window.innerWidth}vw`, // to preserve unit across screen zooms
            },
            {
               transform: 'translate(0,0)',
               fontSize: `${(targetFontSize * 100) / window.innerWidth}vw`,
            },
         ],
         {
            duration: 400,
            easing: 'cubic-bezier(0.05, 0.95, 0.48, 0.95)',
            fill: 'forwards',
         }
      );

      anim.onfinish = () => {
         // this is for letting container’s CSS take over
         pillRef.current.style.transform = '';
         pillRef.current.style.fontSize = '';
      };
   };

   useEffect(() => {
      handlePillPlacement();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fill]);

   useEffect(() => {
      const heroRef = document.getElementById('hero');
      if (!heroRef) return;

      handlePillPlacement();

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.intersectionRatio <= 0.5) {
                  setFill(false);
               } else {
                  setFill(true);
               }
            });
         },
         {
            threshold: 0.5,
         }
      );

      observer.observe(heroRef);

      return () => observer.disconnect();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <nav
            className={`fixed top-0 z-50 flex w-full text-[1.3vw] ${true ? '' : '-translate-y-full'}`}
         >
            <div className="flex flex-1 justify-start pt-[0.75vw] pl-[0.75vw]">
               <button
                  onClick={() => {
                     scrollToHash('hero');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  fosster
               </button>
            </div>
            <div className="flex flex-1 items-center justify-center pt-[0.75vw]">
               {navLinks.map((elem, index) =>
                  elem.link === undefined ? (
                     <button
                        key={index}
                        onClick={() => {
                           elem.targetHash != undefined
                              ? scrollToHash(elem.targetHash)
                              : null;
                        }}
                        className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
                     >
                        {elem.label}
                     </button>
                  ) : (
                     <Link
                        className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
                        key={index}
                        href={elem.link}
                     >
                        {elem.label}
                     </Link>
                  )
               )}
            </div>
            <div className="flex flex-1 justify-end pt-[0.75vw] pr-[0.75vw]">
               <button
                  onClick={() => {
                     scrollToHash('hero');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  fosster
               </button>
               <button
                  onClick={() => {
                     setFill(!fill);
                  }}
               >
                  Click me
               </button>
            </div>
         </nav>

         <div
            ref={navTargetRef}
            className={`${'fixed bottom-0 z-50'} flex w-full flex-1 justify-center pb-[1.5vw] text-[1.3vw]`}
         >
            <div ref={pillRef}>
               <Pill fill={fill} />
            </div>
         </div>
      </>
   );
}
