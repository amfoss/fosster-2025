import { useRef, useState, useEffect } from 'react';

export default function PillTabs({ fill, options, onTabChange }) {
   const [active, setActive] = useState(0);
   const containerRef = useRef(null);
   const highlightRef = useRef(null);
   const RISE_LEVEL = 0.1;
   const newPercent = useRef(0);
   const timeoutRef = useRef(null);
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
      if (!contain) return;

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
      handlePillHighlight();
   }, [active]);

   useEffect(() => {
      fillGaurd.current = fill;
      handlePillHighlight();
      if (!fill) {
         timeoutRef.current = setTimeout(() => {
            updateActiveHighlight();
            timeoutRef.current = null;
         }, 300);
      }
   }, [fill]);

   useEffect(() => {
      window.addEventListener('resize', handlePillHighlight);
      return () => {
         window.removeEventListener('resize', handlePillHighlight);
      };
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
               onScroll();
            }
         },
         { root: null, rootMargin: '0px', threshold: 0 }
      );

      const endEl = document.getElementById('end');
      if (endEl) {
         onScroll();
         observer.observe(endEl);
      }

      return () => {
         if (endEl && observer != undefined) {
            observer.unobserve(endEl);
         }
      };
   }, []);

   return (
      <div
         className={`relative inline-flex overflow-hidden rounded-full bg-gray-400/15 backdrop-blur-xl ${fill ? 'space-x-[-5.4vw] px-[1.9vw]' : ''}`}
         ref={containerRef}
      >
         <span
            ref={highlightRef}
            className="backdrop-xl absolute top-0 left-0 h-full rounded-full bg-[#a5a1ff] transition-all duration-300"
         />

         {options.map((option, i) => (
            <button
               key={i}
               onMouseEnter={() => setActive(i)}
               onClick={() => {
                  setActive(i);
                  onTabChange(option.value);
               }}
               className={`relative z-10 px-[3vw] py-[1vw] text-lg font-semibold text-white`}
            >
               {option.label}
            </button>
         ))}
      </div>
   );
}
