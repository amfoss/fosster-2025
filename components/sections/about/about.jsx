import { GlobeOutline } from '@/components/svg/globe';
import Smiley from '@/components/svg/smiley';
import Heart from '@/components/svg/heart';
import Image from 'next/image';

export default function About() {
   return (
      <div
         id="about"
         className="m-[0.5vw] flex flex-col gap-y-[1vw] rounded-[5vw] bg-[#1c1c1c] p-[5vw] pt-[2.5vw] max-md:gap-y-[2vw] max-md:rounded-[10vw] max-md:p-[10vw]"
      >
         <div className="flex items-center">
            <h1 className="flex items-center gap-x-[1vw] text-[6.5vw] font-semibold italic max-md:text-[13vw]">
               ABO
               {/* <span className="min-w-[6.5vw]">
                  <Globe />
               </span> */}
               UT
               <Image
                  src={'asterisks_symbol.svg'}
                  height={10}
                  width={10}
                  alt="Asterisk"
                  className="size-[5vw] max-md:size-[10vw]"
               />
            </h1>
         </div>
         <div className="flex gap-[5vw]">
            <div className="flex flex-1 gap-x-[2.5vw] max-md:flex-col max-md:gap-y-[5vw]">
               <p className="pl-[2.5vw] text-[4vw] leading-[1] tracking-tighter max-md:text-[8vw]">
                  <span className="font-bold text-amber-200">FOSSter</span> was
                  created with a simple but powerful idea — to make open source
                  more{' '}
                  <span className="font-semibold text-[#f88cfc] italic">
                     accessible, inclusive, and collaborative.
                  </span>
                  <br />
               </p>
               <div className="flex min-w-[39vw] flex-1 justify-end">
                  <div className="text-[1.5vw] text-gray-300 max-md:text-[4vw]">
                     <p>
                        Born out of the amFOSS community at Amrita Vishwa
                        Vidyapeetham, FOSSter builds on over a decade of
                        experience nurturing open-source talent and organizing
                        tech events with real, lasting impact.
                        <br />
                        In a time when open-source technologies drive everything
                        from AI to global infrastructure, FOSSter offers a
                        focused and collaborative space for contributors — from
                        absolute beginners to industry veterans — to come
                        together, learn, contribute, innovate, and grow together
                        as a vibrant, inclusive community.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-[5vw] flex max-h-[10vw] justify-center md:hidden">
            <div className="flex h-full min-w-[25vw] space-x-[-2.5vw]">
               <Smiley />
               <Heart />
               <GlobeOutline />
            </div>
         </div>
      </div>
   );
}
