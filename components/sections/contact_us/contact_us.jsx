import Link from 'next/link';
import Image from 'next/image';
import ArrowDown from '@/components/svg/arrow';
import { GlobeOutline } from '@/components/svg/globe';
import { contacts, socials } from '@/data/contact.js';
import CircularText from '@/components/ui/circular_text';

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

                     {/* Contact details */}
                     <div className="mt-[1.5vw] flex flex-wrap gap-[1vw] text-[1.5vw] max-md:text-[4vw]">
                        {Object.keys(contacts.phoneNos).map((phone, index) => (
                           <div
                              key={index}
                              className="rounded-full border border-[#fffc58] px-[1.5vw] py-[0.5vw] duration-150 hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:flex max-md:justify-center max-md:px-[3.94vw] max-md:py-[2vw]"
                           >
                              <span className="">
                                 {contacts.phoneNos[phone]}
                              </span>
                           </div>
                        ))}

                        {contacts.mails.map((mail, index) => (
                           <div
                              key={index}
                              className="rounded-full border border-[#fffc58] px-[1.5vw] py-[0.5vw] duration-150 hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:flex max-md:justify-center max-md:px-[4vw] max-md:py-[2vw]"
                           >
                              <span className="">{mail}</span>
                           </div>
                        ))}
                     </div>

                     {/* Socials */}
                     <div className="mt-[1vw] flex flex-wrap gap-[1vw] text-[1.5vw] max-md:text-[4vw] [&>*]:min-w-[10vw] [&>*]:max-md:min-w-[25.6vw]">
                        {socials.map((social, id) => (
                           <Link
                              key={id}
                              href={social.link}
                              target="none"
                              className="flex max-h-[3.5vw] justify-center rounded-full border border-[#fffc58] p-[0.75vw] duration-150 hover:bg-[#fffc58] hover:text-[#1b1b1f] max-md:max-h-[10.5vw] max-md:p-[2vw]"
                           >
                              {social.icon}
                           </Link>
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
               {/* Nav Row */}
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
                  <div className="animate-scroll flex">
                     {[1, 2, 3, 4, 5, 6].map((elem, index) => (
                        <p
                           key={index}
                           className="max-w-full leading-[1vw] font-black whitespace-nowrap text-[#313131]"
                        >
                           ✦ amFOSS&nbsp;✦ <i>WOW</i>&nbsp;
                        </p>
                     ))}
                  </div>
               </div>
            </div>

            <div className="flex w-full items-center justify-center rounded-[5vw] bg-[#fffc58] p-[2.5vw] text-[#1b1b1f] max-md:rounded-full max-md:p-[5vw] sm:w-1/4">
               <div className="flex items-center gap-x-[1vw] text-center">
                  <Image
                     src="/fosster-logo.png"
                     width={1}
                     height={1}
                     alt="Picture of the author"
                     className="size-[8vw] opacity-80 max-md:size-[16vw]"
                     unoptimized
                  />
                  {/* <p className="md:hidden">fosster</p> */}
               </div>
            </div>
         </div>
      </div>
   );
}
