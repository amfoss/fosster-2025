'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToHash } from '@/app/_utils/helpers';
import Pill from './pill';
import Link from 'next/link';

export default function NavBar() {
   const [fill, setFill] = useState(false);
   const pillRef = useRef(null);
   const navTargetRef = useRef(null);
   const pathname = usePathname();
   const navLinks = [
      { label: 'about', link: '/#about' },
      { label: 'venue', link: '/venue' },
      { label: 'contact', link: '/#contact-us' },
   ];
   const [scrollDir, setScrollDir] = useState('scrolling up');

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
      const threshold = 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;

      const updateScrollDir = () => {
         const scrollY = window.pageYOffset;

         if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
         }
         setScrollDir(
            scrollY > lastScrollY
               ? scrollY > window.innerHeight
                  ? 'scrolling down'
                  : 'scrolling up'
               : 'scrolling up'
         );
         lastScrollY = scrollY > 0 ? scrollY : 0;
         ticking = false;
      };

      const onScroll = () => {
         if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
         }
      };

      window.addEventListener('scroll', onScroll);
      console.log(scrollDir);

      return () => window.removeEventListener('scroll', onScroll);
   }, [scrollDir]);

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
   }, [pathname]);

   return (
      <>
         <nav
            className={`fixed top-0 z-50 flex w-full text-[1.3vw] max-md:text-[4vw] ${scrollDir == 'scrolling up' ? '' : '-translate-y-full'} transform duration-150`}
         >
            <div className="flex flex-1 justify-start pt-[0.75vw] pl-[0.75vw] max-md:pt-[3vw] max-md:pl-[3vw]">
               <Link
                  href={'/#hero'}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl max-md:px-[4vw] max-md:py-[2vw]"
               >
                  fosster
               </Link>
            </div>
            <div className="flex flex-1 items-center justify-center pt-[0.75vw] max-md:pt-[3vw] max-md:pr-[3vw]">
               {navLinks.map((elem, index) =>
                  elem.link === undefined ? (
                     <button
                        key={index}
                        onClick={() => {
                           elem.targetHash != undefined
                              ? scrollToHash(elem.targetHash)
                              : null;
                        }}
                        className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl max-md:px-[4vw] max-md:py-[2vw]"
                     >
                        {elem.label}
                     </button>
                  ) : (
                     <Link
                        className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl max-md:px-[4vw] max-md:py-[2vw]"
                        key={index}
                        href={elem.link}
                     >
                        {elem.label}
                     </Link>
                  )
               )}
            </div>
         </nav>

         <div
            ref={navTargetRef}
            className={`${'fixed bottom-0 z-50'} pointer-events-none flex w-full flex-1 justify-center pb-[1.5vw] text-[1.3vw] max-md:pb-[6vw] max-md:text-[3.5vw]`}
         >
            <div ref={pillRef}>
               <Pill fill={fill} />
            </div>
         </div>
      </>
   );
}
