import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePill } from '@/app/_contexts/pill';

export default function Pill({ fill }) {
   const { options, handleClick, selected, setSelected, persist, mode } = usePill();
   const [active, setActive] = useState(0);
   const containerRef = useRef(null);
   const highlightRef = useRef(null);
   const RISE_LEVEL = 0.1;
   const newPercent = useRef(0);
   const [open, setOpen] = useState(false);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const timeoutRef = useRef(null); // bad practice
   // Direct DOM mutations (appendChild in handlePillPlacement()) cause the `fill` state to reset without re-render or hooks trigger.
   // Using this ref prevents losing the correct `fill` value. Flex-tape fix
   const fillGaurd = useRef(null);

   const handlePillHighlight = () => {
      if (!containerRef.current || !highlightRef.current) return;

      if (fillGaurd.current) {
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
      if (!contain || !highlightRef.current) return;

      highlightRef.current.style.width = `${contain.offsetWidth}px`;
      highlightRef.current.style.transform = `translateX(0px)`;
   };

   const updateActiveHighlight = () => {
      const activeEl = containerRef.current.children[active + 1];
      if (activeEl) {
         if (!highlightRef.current) return;
         highlightRef.current.style.width = `${activeEl.offsetWidth}px`;
         highlightRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
      }
   };

   const resetHighlight = () => {
      const activeEl = containerRef.current.children[selected + 1];
      if (activeEl) {
         if (!highlightRef.current) return;
         highlightRef.current.style.width = `${activeEl.offsetWidth}px`;
         highlightRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
      }
   };

   useEffect(() => {
      handlePillHighlight();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [active, options]);

   useEffect(() => {
      fillGaurd.current = fill;
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
         const containerRect = containerRef.current.getBoundingClientRect();

         let desiredScale = newPercent.current + 1;
         if (containerRect.width * 2 > window.innerWidth) {
            desiredScale =
               (newPercent.current *
                  (window.innerWidth - containerRect.width)) /
                  containerRect.width +
               1;
         }
         containerRef.current.animate(
            [
               {
                  transform: `translateY(${-newPercent.current * (0.5 * window.innerHeight - 0.015 * window.innerWidth - 0.25 * containerRect.height)}px) 
                              scale(${desiredScale}`,
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
               setIsAtBottom(false);
            } else {
               window.removeEventListener('scroll', onScroll);
               onScroll(); // fallback
               setIsAtBottom(true);
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
      <div
         className={
            mode != 1
               ? `relative inline-flex overflow-hidden rounded-full bg-gray-400/15 backdrop-blur-xl ${fill ? 'space-x-[-5.4vw] px-[1.9vw]' : ''} pointer-events-auto`
               : 'pointer-events-auto relative gap-y-[1vw] rounded-full bg-gray-400/15 backdrop-blur-xl'
         }
         ref={containerRef}
         onMouseLeave={() => {
            if (!fillGaurd.current && persist) {
               resetHighlight();
               setActive(selected);
            }
         }}
      >
         {mode != 1 ? (
            <span
               ref={highlightRef}
               className="backdrop-xl absolute top-0 left-0 h-full rounded-full bg-blue-900/50 transition-all duration-300"
            />
         ) : (
            <button
               onClick={() => setOpen(!open)}
               className="relative z-20 flex items-center justify-center rounded-full px-[3vw] py-[2vw] text-white max-md:px-[6vw] max-md:py-[4vw]"
            >
               <span
                  className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                     open ? 'rotate-45' : '-translate-y-2'
                  }`}
               />
               ff
               <span
                  className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                     open ? 'opacity-0' : ''
                  }`}
               />
               <span
                  className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                     open ? '-rotate-45' : 'translate-y-2'
                  }`}
               />
            </button>
         )}

         {options.map((option, i) => {
            const factor = window.innerWidth > 680 ? 0.065 : 0.14;
            const distance = isAtBottom
               ? (i + 1) * factor * window.innerWidth
               : (Math.floor(i / 2) + 1) * factor * window.innerWidth;

            const translateY = open
               ? !isAtBottom
                  ? i % 2 === 0
                     ? `-${distance}px`
                     : `${distance}px`
                  : `-${distance}px`
               : '0px';
            return option.link != undefined ? (
               <Link
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`z-10 px-[3vw] py-[2vw] duration-300 max-md:px-[6vw] max-md:py-[4vw] ${mode == 1 ? 'absolute left-1/2 -translate-x-1/2 rounded-full bg-amber-950 whitespace-nowrap hover:bg-blue-900/50' : 'relative'}`}
                  href={option.link}
                  style={
                     mode == 1
                        ? {
                             top: '0%',
                             transform: `translate(0%, ${translateY})`,
                             opacity: open ? 1 : 0,
                             pointerEvents: open ? 'auto' : 'none',
                          }
                        : {}
                  }
               >
                  {option.label}
               </Link>
            ) : (
               <button
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  style={
                     mode == 1
                        ? {
                             top: '0%',
                             transform: `translate(0%, ${translateY})`,
                             opacity: open ? 1 : 0,
                             pointerEvents: open ? 'auto' : 'none',
                          }
                        : {}
                  }
                  onClick={() => {
                     setSelected(i);
                     setOpen(false);
                     if (option.value !== undefined) {
                        handleClick(option.value);
                     }
                  }}
                  className={`z-10 px-[3vw] py-[2vw] duration-300 max-md:px-[6vw] max-md:py-[4vw] ${mode == 1 ? 'absolute left-1/2 -translate-x-1/2 rounded-full bg-amber-950 whitespace-nowrap hover:bg-blue-900/50' : 'relative'}`}
               >
                  {option.label}
               </button>
            );
         })}
      </div>
   );
}
