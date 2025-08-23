import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Pill({ fill }) {
   const options = [
      { label: 'Register', link: '/' },
      { label: 'Now', link: '/' },
   ];
   const [active, setActive] = useState(0);
   const containerRef = useRef(null);
   const highlightRef = useRef(null);
   const RISE_LEVEL = 0.1;
   const newPercent = useRef(0);
   const timeoutRef = useRef(null); // bad practice

   const handlePillHighlight = () => {
      if (!containerRef.current || !highlightRef.current) return;

      if (fill) {
         expandHighlight();
      } else {
         updateActiveHighlight();
      }
   };

   const expandHighlight = () => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
         timeoutRef.current = null;
      }
      const contain = document.getElementById('pill-target');
      highlightRef.current.style.width = `${contain.offsetWidth}px`;
      highlightRef.current.style.transform = `translateX(0px)`;
   };

   const updateActiveHighlight = () => {
      const activeEl = containerRef.current.children[active + 1];
      if (activeEl) {
         highlightRef.current.style.width = `${activeEl.offsetWidth}px`;
         highlightRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
      }
   };

   useEffect(() => {
      console.log(fill);
      handlePillHighlight();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [active]);

   useEffect(() => {
      handlePillHighlight();
      if (!fill) {
         timeoutRef.current = setTimeout(() => {
            updateActiveHighlight();
            timeoutRef.current = null;
         }, 300);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fill]);

   useEffect(() => {
      window.addEventListener('resize', handlePillHighlight);
      return () => {
         window.removeEventListener('resize', handlePillHighlight);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      let observer;
      const endRef = document.getElementById('end');
      const onScroll = () => {
         const rect = endRef.getBoundingClientRect();
         const linearPercent =
            rect.top <= 0
               ? 0
               : rect.top >= RISE_LEVEL * window.innerHeight
                 ? rect.top < window.innerHeight
                    ? (window.innerHeight - rect.top) /
                      ((1 - RISE_LEVEL) * window.innerHeight)
                    : 0
                 : 1;

         newPercent.current = linearPercent;
         containerRef.current.animate(
            [
               {
                  transform: `translateY(${-newPercent.current * (0.25 * window.innerHeight - 0.015 * window.innerWidth)}px)`,
                  scale: newPercent.current + 1,
               },
            ],
            {
               duration: 100,
               fill: 'forwards',
            }
         );
      };
      observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               window.addEventListener('scroll', onScroll);
            } else {
               window.removeEventListener('scroll', onScroll);
               onScroll(); // fallback
            }
         },
         { root: null, rootMargin: '0px', threshold: 0 }
      );

      if (endRef) {
         onScroll(); // init pill positioning
         observer.observe(endRef);
      } else {
         observer.unobserve(endRef);
      }

      return () => {
         if (endRef && observer != undefined) {
            observer.unobserve(endRef);
         }
      };
   }, []);

   return (
      <>
         <div
            className={`relative inline-flex overflow-hidden rounded-full bg-gray-400/15 backdrop-blur-xl ${fill ? 'space-x-[-5.4vw] px-[1.9vw]' : ''}`}
            ref={containerRef}
         >
            <span
               ref={highlightRef}
               className="backdrop-xl absolute top-0 left-0 h-full rounded-full bg-blue-900/50 transition-all duration-300"
            />

            {options.map((option, i) => (
               <Link
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`relative z-10 px-[3vw] py-[2vw]`}
                  href={option.link}
               >
                  {option.label}
               </Link>
            ))}
         </div>
      </>
   );
}
