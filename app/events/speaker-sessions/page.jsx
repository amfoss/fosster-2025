'use client';

import { useEffect } from 'react';
import ArrowDown from '@/components/svg/arrow';
import events from '@/data/events.json';

export default function EventPage() {
   const event = events['speaker-sessions'];
   useEffect(() => {
      console.log(event);
   }, [event]);

   return (
      <div className="flex w-screen gap-x-[2.5vw] p-[5vw]">
         <div>
            <div className="sticky top-[5vw] w-[35vw]">
               <p className="text-[5vw] font-bold">{event.title}</p>
               <p className="text-[1.5vw]">{event.description}</p>
            </div>
         </div>

         <div className="flex flex-col gap-y-[1vw]">
            {event.highlights && (
               <div className="grid w-full grid-cols-2 gap-[0.5vw] text-black">
                  {event.highlights.map((h, i) => (
                     <div
                        key={i}
                        className="flex flex-col rounded-[2.5vw] bg-yellow-200 p-[2.5vw]"
                     >
                        <p className="text-[1.3vw] font-semibold">{h.title}</p>
                        <p className="text-[1.3vw]">{h.description}</p>
                     </div>
                  ))}
               </div>
            )}

            {event.lineup && (
               <div className="rounded-[2.5vw] bg-amber-200 p-[2.5vw] text-[1.3vw] text-black">
                  <p className="mb-[0.5vw] text-[1vw] font-bold tracking-tight">
                     Themes & Focus Areas
                  </p>
                  {Object.keys(event.lineup).map((theme, i) => (
                     <div key={i} className="flex items-center gap-[0.5vw]">
                        <div className="w-[1vw] -rotate-90">
                           <ArrowDown />
                        </div>
                        {theme} : {event.lineup[theme]}
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}
