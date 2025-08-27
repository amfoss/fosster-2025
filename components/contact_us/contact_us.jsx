import CircularText from '@/components/ui/circular_text';
import Globe from '../svg/globe';
import ArrowDown from '../svg/arrow';
import Link from 'next/link';

export default function ContactUs() {
   const links = [
      { label: 'about', targetHash: 'why-attend' },
      { label: 'venue', link: '/' },
      { label: 'sponsor', link: '/' },
   ];
   return (
      <div id="contact-us" className="bg-[#0a0a0a] p-[0.5vw] text-[#fffc58]">
         <div className="flex flex-col gap-y-[0.5vw]">
            <div className="flex rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg">
               <div className="flex flex-col gap-y-[2vw] p-[2.5vw]">
                  <p className="max-w-[65vw] text-[6.5vw] leading-[1] font-medium tracking-[-2px]">
                     Ready to <i>start</i> your Open Source journey?
                  </p>
                  <div className="flex flex-col gap-y-[0.5vw]">
                     <p className="max-w-[50vw] text-[1.5vw]">
                        FOSSter has the tools and community to support you from
                        your first commit to maintaining major projects.
                     </p>

                     <div className="mt-[1.5vw] flex flex-col gap-x-[1vw] text-[1.5vw] sm:flex-row">
                        <div className="mb-2 rounded-full border border-[#fffc58] px-[1.5vw] py-[0.5vw] sm:mb-0">
                           <span className="">+12345566</span>
                        </div>
                        <div className="rounded-full border border-[#fffc58] px-[1.5vw] py-[0.5vw]">
                           <span className="">hair@gmail.com</span>
                        </div>
                     </div>

                     <div className="mt-[1vw] flex gap-x-[1vw] text-[1.5vw] [&>*]:min-w-[10vw]">
                        {[1, 2, 3].map((index, id) => (
                           <div
                              key={id}
                              className="flex max-h-[3.5vw] justify-center rounded-full border border-[#fffc58] p-[0.5vw]"
                           >
                              <Globe />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="flex flex-1 items-end justify-end">
                  <div>
                     <CircularText text={'CONTACT US CONTACT US '} radius={4.3}>
                        <div className="flex-1 duration-300 hover:rotate-180">
                           <Globe />
                        </div>
                     </CircularText>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-[0.5vw] flex flex-col gap-[0.5vw] sm:flex-row">
            <div className="flex w-full flex-col gap-y-[0.5vw] text-[2vw] font-medium sm:w-3/4">
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
                        className="flex flex-1 items-center justify-between rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg transition-colors hover:bg-[#fffc58] hover:text-[#1b1b1f]"
                     >
                        <span>{elem.label}</span>
                        <div className="flex h-[2vw] w-[2vw] -rotate-135 transform items-center justify-center rounded-full">
                           <ArrowDown />
                        </div>
                     </Link>
                  ))}
               </div>

               <div className="flex w-full rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg">
                  <p className="max-w-full text-[1.2vw] text-gray-400">
                     Could be a carousal area
                  </p>
               </div>
            </div>

            <div className="flex w-full items-center justify-center rounded-[5vw] bg-[#fffc58] p-[2.5vw] text-[#1b1b1f] sm:w-1/4">
               <div className="text-center">
                  Maybe a overflow hidden stacks of carousals
               </div>
            </div>
         </div>
      </div>
   );
}
