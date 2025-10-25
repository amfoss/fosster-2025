'use client';

import { usePill } from '@/app/_contexts/pill';
import { useEffect } from 'react';
import { Passes as passes } from '@/data/jsonData';
import Check from '@/components/svg/check';

export default function Pricing() {
   const { setOptions } = usePill();
   const colors = [
      {
         background: 'bg-amber-200',
         color: 'black',
         highlight: 'white',
      },
      {
         background: 'bg-blue-800',
         color: 'white',
         highlight: 'black',
      },
      {
         background: 'bg-black',
         color: 'white',
         highlight: 'black',
      },
      {
         background: 'bg-purple-300',
         color: 'black',
         highlight: 'white',
      },
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

   const gradientClasses =
      'bg-[radial-gradient(at_88%_40%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_49%_30%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_14%_26%,hsla(240,15%,9%,1)_0px,transparent_85%),radial-gradient(at_0%_64%,hsla(263,93%,56%,1)_0px,transparent_85%),radial-gradient(at_41%_94%,hsla(284,100%,84%,1)_0px,transparent_85%),radial-gradient(at_100%_99%,hsla(306,100%,57%,1)_0px,transparent_85%)] bg-black w-full border border-[#514366]';

   useEffect(() => {
      setOptions([{ label: 'Join Us @ FOSSter', link: '#' }]);
   }, [setOptions]);
   return (
      <div className="flex min-h-screen w-full flex-col gap-y-[1vw] rounded-b-[5vw] bg-[#1b1b1f] p-[5vw] text-white max-md:gap-y-[5vw] max-md:rounded-b-[10vw] max-md:pt-[20vw]">
         <div className="flex flex-col items-center">
            <h2 className="text-center text-[4vw] font-semibold tracking-tight max-md:text-[12vw]">
               Pricing
            </h2>
         </div>
         <div className="flex flex-1 gap-[1vw] max-md:flex-col max-md:gap-y-[5vw]">
            {passes.map((elem, index) => (
               <div
                  key={index}
                  className={`flex flex-1 flex-col gap-y-[1vw] rounded-[2.5vw] max-md:gap-y-[2vw] ${elem.pass != 'Premium Pass' ? colors[index].background : gradientClasses} ${'text-' + colors[index].color} transform p-[2.5vw] text-[1.5vw] duration-150 hover:scale-[0.95] max-md:rounded-[5vw] max-md:p-[5vw] max-md:text-[4vw]`}
               >
                  <div>
                     <p className="font-semibold">{elem.pass}</p>
                  </div>
                  <div>
                     <p className="text-[3vw] font-black max-md:text-[9vw]">
                        ₹{elem.cost}{' '}
                        <span className="ml-[-0.5vw] text-[1.2vw] font-bold max-md:ml-[-1.5vw] max-md:text-[4vw]">
                           {elem.subText != undefined ? elem.subText : ''}
                        </span>
                     </p>
                  </div>
                  <p className="text-[1.2vw] max-md:text-[4vw]">{elem.desc}</p>
                  <div className="flex-1">
                     {elem.benifits.map((elem, idx) => (
                        <div
                           key={idx}
                           className="mt-2 flex items-center gap-x-[0.5vw] max-md:gap-x-[2vw]"
                        >
                           <div
                              className={`flex min-w-[1.25vw] rounded-full bg-black p-[0.25vw] max-md:min-w-[4vw] ${'text-' + colors[index].highlight} ${'bg-' + colors[index].color}`}
                           >
                              <Check />
                           </div>{' '}
                           <p className="text-[1vw] max-md:text-[4vw]">
                              {elem}
                           </p>
                        </div>
                     ))}
                  </div>
                  <button
                     className={`mt-[2vw] rounded-full ${'bg-' + colors[index].color} ${'text-' + colors[index].highlight} p-[1vw] max-md:p-[2vw]`}
                  >
                     <p>{elem.pass}</p>
                  </button>
               </div>
            ))}
         </div>
         <div className="flex gap-x-[2vw] rounded-[2.5vw] bg-[#252529] max-md:m-[-5vw] max-md:mt-[2.5vw] max-md:flex-col max-md:gap-y-[4vw] max-md:rounded-[10vw] max-md:p-[5vw] md:p-[2.5vw]">
            <div className="mt-[2vw] flex flex-col max-md:items-center max-md:gap-y-[2vw] max-md:text-center md:max-w-[40vw]">
               <h2 className="text-[4vw] font-semibold tracking-tight max-md:text-[8vw]">
                  Adddtional Add Ons
               </h2>
               <p className="text-[1.2vw] max-md:text-[4vw] md:max-w-[60vw]">
                  Enhance your FOSSter 2026 experience with hands-on learning!
                  Purchase access to individual workshops to dive deeper into
                  specific topics.
               </p>
            </div>
            <div className="flex flex-1 justify-center gap-[1vw]">
               {[1].map((elem, index) => (
                  <div
                     key={index}
                     className={`flex flex-1 transform flex-col gap-y-[1vw] rounded-[2.5vw] bg-[#a5a1ff] p-[2.5vw] text-[1.5vw] text-black duration-150 hover:scale-[0.95] max-md:rounded-[5vw] max-md:p-[5vw] max-md:text-[4vw]`}
                  >
                     <div className="flex flex-1 flex-col gap-y-[1vw] text-[1.2vw] max-md:text-[4vw]">
                        {addOns.map((elem, index) => (
                           <div
                              key={index}
                              className="flex items-start max-md:gap-x-[2vw]"
                           >
                              <div className="m-[0.4vw] flex min-w-[1.25vw] items-center rounded-full bg-black p-[0.25vw] text-white max-md:mt-[1.5vw] max-md:min-w-[4vw]">
                                 <Check />
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
      </div>
   );
}
