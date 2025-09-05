'use client';

import Globe from '@/components/svg/globe';
import { usePill } from '../_contexts/pill';
import { useEffect } from 'react';
import { Passes as passes } from '@/data/jsonData';
export default function Attend() {
   const { setOptions } = usePill();
   const colors = [
      'bg-amber-200 text-black',
      'bg-blue-800',
      'bg-black',
      'bg-purple-300 text-black',
   ];

   const addOns = [
      { heading: 'General Workshop Access', value: '₹699 per workshop' },
      {
         heading: 'Workshop Access for Elite Pass holders',
         value: '₹699 per workshop',
      },
      {
         heading: 'Workshop Access for Standard Pass holders',
         value: '₹699 per workshop',
      },
      {
         heading: 'Requires a valid base ticket',
         value: '(Standard, Elite, or Premium)',
      },
   ];

   useEffect(() => {
      setOptions([{ label: 'Join Us @ FOsster', link: '#' }]);
   }, [setOptions]);
   return (
      <div className="flex min-h-screen w-full flex-col gap-y-[1vw] bg-[#1b1b1f] p-[5vw] pt-[4vw] text-white max-md:gap-y-[5vw] max-md:pt-[20vw]">
         <div className="flex flex-col items-center">
            <h2 className="text-center text-[4vw] font-semibold tracking-tight max-md:text-[8vw]">
               Join us @ FOSSter
            </h2>
            <p className="text-center text-[1.2vw] max-md:text-[4vw] md:max-w-[60vw]">
               Ready for two days of groundbreaking discussions, hands-on
               learning, and unparalleled networking? Secure your spot now and
               be part of an event that will shape the next decade of
               collaboration and innovation.
            </p>
         </div>
         <div className="flex flex-1 gap-[1vw] max-md:flex-col max-md:gap-y-[5vw]">
            {passes.map((elem, index) => (
               <div
                  key={index}
                  className={`flex flex-1 flex-col gap-y-[1vw] rounded-[2.5vw] max-md:gap-y-[2vw] ${colors[index]} transform p-[2.5vw] text-[1.5vw] duration-150 hover:scale-[1.05] max-md:rounded-[5vw] max-md:p-[5vw] max-md:text-[4vw]`}
               >
                  <div>
                     <p className="font-semibold">{elem.pass}</p>
                     <p className="text-[1.2vw] max-md:text-[4vw]">
                        {elem.desc}
                     </p>
                  </div>
                  <div>
                     <p className="font-semibold">₹{elem.cost}</p>
                  </div>
                  <div className="flex-1">
                     {elem.benifits.map((elem, index) => (
                        <div key={index} className="mt-2 flex items-center">
                           <div className="flex min-w-[2vw] max-md:min-w-[4vw]">
                              <Globe />
                           </div>{' '}
                           <p className="text-lg">{elem}</p>
                        </div>
                     ))}
                  </div>
                  <button className="rounded-full bg-amber-600 p-[1vw] max-md:p-[2vw]">
                     <p>{elem.pass}</p>
                  </button>
               </div>
            ))}
         </div>
         <div className="mt-[2vw] flex flex-col items-center">
            <h2 className="text-center text-[4vw] font-semibold tracking-tight max-md:text-[8vw]">
               Adddtional Add Ons
            </h2>
            <p className="text-center text-[1.2vw] max-md:text-[4vw] md:max-w-[60vw]">
               Enhance your FOSSter 2025 experience with hands-on learning!
               Purchase access to individual workshops to dive deeper into
               specific topics.
            </p>
         </div>
         <div className="flex flex-1 justify-center gap-[1vw]">
            {[1].map((elem, index) => (
               <div
                  key={index}
                  className={`flex flex-1 flex-col gap-y-[1vw] rounded-[2.5vw] max-md:rounded-[5vw] ${colors[index]} transform p-[2.5vw] text-[1.5vw] duration-150 hover:scale-[1.05] max-md:p-[5vw] max-md:text-[4vw] md:max-w-[40vw]`}
               >
                  <div className="flex flex-1 flex-col gap-y-[1vw] text-[1.2vw] max-md:text-[4vw]">
                     {addOns.map((elem, index) => (
                        <div key={index} className="flex">
                           <div className="mr-[1vw] flex min-w-[1.8vw] max-md:min-w-[4vw]">
                              <Globe />
                           </div>
                           <p>
                              <span className="mr-[0.5vw] font-semibold">
                                 {elem.heading} :
                              </span>
                              {elem.value}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
