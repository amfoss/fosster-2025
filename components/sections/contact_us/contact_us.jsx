import CircularText from '@/components/ui/circular_text';
import { GlobeOutline } from '@/components/svg/globe';
import ArrowDown from '@/components/svg/arrow';
import Link from 'next/link';

export default function ContactUs() {
   const links = [
      { label: 'events', targetHash: 'events' },
      { label: 'venue', link: '/venue' },
      { label: 'sponsor', link: '/' },
   ];
   return (
      <div id="contact-us" className="bg-[#0a0a0a] p-[0.5vw] text-[#fffc58]">
         <div className="flex flex-col gap-y-[0.5vw]">
            <div className="flex rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg max-md:rounded-[10vw] max-md:p-[5vw]">
               <div className="flex flex-col gap-y-[2vw] p-[2.5vw] max-md:gap-y-[6vw] max-md:p-[5vw]">
                  <p className="font-bold max-md:text-[3vw]">CONTACT US</p>
                  <p className="text-[6.5vw] leading-[1] font-medium tracking-[-2px] max-md:text-[13vw] md:max-w-[65vw]">
                     Ready to <i>start</i> your Open Source journey?
                  </p>
                  <div className="flex flex-col gap-y-[0.5vw] max-md:gap-y-[2vw]">
                     <p className="text-[1.5vw] max-md:text-[4vw] md:max-w-[50vw]">
                        FOSSter has the tools and community to support you from
                        your first commit to maintaining major projects.
                     </p>

                     <div className="mt-[1.5vw] flex gap-x-[1vw] text-[1.5vw] max-md:gap-y-[1vw] max-md:text-[4vw]">
                        <div className="rounded-full border border-[#fffc58] px-[1.5vw] py-[0.5vw] duration-150 hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:flex max-md:justify-center max-md:px-[4vw] max-md:py-[2vw]">
                           <span className="">+12 34556677</span>
                        </div>
                        <div className="rounded-full border border-[#fffc58] px-[1.5vw] py-[0.5vw] duration-150 hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:flex max-md:justify-center max-md:px-[4vw] max-md:py-[2vw]">
                           <span className="">hair@gmail.com</span>
                        </div>
                     </div>

                     <div className="mt-[1vw] flex gap-x-[1vw] text-[1.5vw] max-md:text-[4vw] [&>*]:min-w-[10vw] [&>*]:max-md:min-w-[20vw]">
                        {[1, 2, 3].map((index, id) => (
                           <div
                              key={id}
                              className="flex max-h-[3.5vw] justify-center rounded-full border border-[#fffc58] p-[0.5vw] duration-150 hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:max-h-[10.5vw] max-md:flex-1 max-md:p-[2vw]"
                           >
                              <GlobeOutline />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="flex flex-1 items-end justify-end max-md:hidden">
                  <div>
                     <CircularText text={'CONTACT US CONTACT US '} radius={4.3}>
                        <div className="flex-1 duration-300 hover:rotate-180">
                           <GlobeOutline />
                        </div>
                     </CircularText>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-[0.5vw] flex gap-[0.5vw] max-md:flex-col">
            <div className="flex w-full flex-col gap-y-[0.5vw] text-[2vw] font-medium max-md:text-[6vw] sm:w-3/4">
               {/* Buttons Row */}
               <div className="flex w-full flex-col gap-[0.5vw] sm:flex-row">
                  {links.map((elem, index) => (
                     <Link
                        key={index}
                        href={
                           elem.link === undefined
                              ? `#${elem.targetHash}`
                              : elem.link
                        }
                        className="group flex flex-1 items-center justify-between rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg transition-colors hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:rounded-full max-md:p-[7.5vw]"
                     >
                        <span>{elem.label}</span>
                        <div className="flex size-[2vw] -rotate-135 transform items-center justify-center rounded-full duration-150 group-hover:-rotate-90 max-md:size-[6vw]">
                           <ArrowDown />
                        </div>
                     </Link>
                  ))}
               </div>

               <div className="flex w-full overflow-hidden rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] text-[5vw] max-md:rounded-full max-md:p-[10vw] max-md:text-[15vw]">
                  <p className="ml-[-11vw] max-w-full leading-[1vw] font-black whitespace-nowrap text-[#313131] max-md:ml-[-40vw]">
                     ✦ amFOSS&nbsp;
                  </p>
                  {[1, 2, 3, 4, 5, 6].map((elem, index) => (
                     <p
                        key={index}
                        className="max-w-full leading-[1vw] font-black whitespace-nowrap text-[#313131]"
                     >
                        ✦ amFOSS&nbsp;
                     </p>
                  ))}
               </div>
            </div>

            <div className="flex w-full items-center justify-center rounded-[5vw] bg-[#fffc58] p-[2.5vw] text-[#1b1b1f] max-md:rounded-full max-md:p-[5vw] sm:w-1/4">
               <div className="text-center">
                  Maybe a overflow hidden stacks of carousals
               </div>
            </div>
         </div>
      </div>
   );
}
