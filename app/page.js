import Hero from '@/components/hero/hero';
import WhyFosster from '@/components/why_attend_foster/why_attend_foster';
import StackedCards from '@/components/divs_top_on_bottem/stack_divs';
import CircularText from '@/components/ui/circular_text';

export default function Home() {
   return (
      <div id="top" className="min-h-screen">
         <div className="space-y-4 p-8">
            <Hero />
            <p className="text-5xl">Welcome to Fosster 2025, </p>
            <p className="text-5xl font-bold">Testing fonts now (font-bold)</p>

            <p className="bg-red-300 text-[5vw] font-[300] italic">
               This should be light (font-[300]) and italic
            </p>
            <p className="font-[400]">This should be regular (font-[400])</p>
            <p className="font-[700]">This should be bold (font-[700])</p>
            <p className="font-[900]">This should be black (font-[900])</p>

            <p className="font-light">Light with Tailwind class</p>
            <p className="font-normal">Normal with Tailwind class</p>
            <p className="font-bold">Bold with Tailwind class</p>
            <p className="font-black">Black with Tailwind class</p>

            <p
               style={{ fontWeight: 300, fontStyle: 'italic', fontSize: '5vw' }}
            >
               Light with inline style
            </p>
            <p style={{ fontWeight: 700 }}>Bold with inline style</p>
         </div>
         <WhyFosster />

         <div className="min-h-screen bg-[#0a0a0a] p-[0.5vw]">
            <div className="flex flex-col gap-y-[0.5vw]">
               <div className="flex rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg">
                  <div className="flex flex-col gap-y-[3vw] p-[2.5vw]">
                     <p className="max-w-[75vw] text-[6.5vw] leading-[1] font-medium tracking-[-2px]">
                        READY TO START YOUR OPEN SOURCE JOURNEY?
                     </p>
                     <p className="max-w-[50vw] text-[1.2vw]">
                        FOSSter has the tools and community to support you from
                        your first commit to maintaining major projects.
                     </p>

                     <div className="mt-[1.5vw] flex flex-col gap-x-[1vw] sm:flex-row">
                        <div className="mb-2 rounded-full border border-gray-300 px-[1.5vw] py-[0.5vw] sm:mb-0">
                           <span className="text-sm text-gray-500 sm:text-base">
                              +12345566
                           </span>
                        </div>
                        <div className="rounded-full border border-gray-300 px-[1.5vw] py-[0.5vw]">
                           <span className="text-sm text-gray-500 sm:text-base">
                              hair@gmail.com
                           </span>
                        </div>
                     </div>

                     <div className="mt-[1vw] flex gap-x-[1vw]">
                        <div className="rounded-full border border-gray-300 p-[0.5vw]">
                           some icon
                        </div>
                        <div className="rounded-full border border-gray-300 p-[0.5vw]">
                           some icon
                        </div>
                        <div className="rounded-full border border-gray-300 p-[0.5vw]">
                           some icon
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-1 items-end justify-end">
                     <div>
                        <CircularText text={'CONTACT US CONTACT US '} radius={4.3} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-[0.5vw] flex flex-col gap-[0.5vw] sm:flex-row">
               <div className="flex w-full flex-col gap-y-[0.5vw] sm:w-3/4">
                  {/* Buttons Row */}
                  <div className="flex w-full flex-col gap-[0.5vw] sm:flex-row">
                     <button className="flex flex-1 items-center justify-between rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg transition-colors hover:bg-[#a5a1ff]">
                        <span className="text-[2.5vw] font-medium text-white">
                           about
                        </span>
                        <div className="flex h-[2vw] w-[2vw] -rotate-45 transform items-center justify-center rounded-full border border-gray-400"></div>
                     </button>

                     <button className="flex flex-1 items-center justify-between rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg transition-colors hover:bg-[#a5a1ff]">
                        <span className="text-[2.5vw] font-medium text-white">
                           venue
                        </span>
                        <div className="flex h-[2vw] w-[2vw] -rotate-45 transform items-center justify-center rounded-full border border-gray-400"></div>
                     </button>

                     <button className="flex flex-1 items-center justify-between rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg transition-colors hover:bg-[#a5a1ff]">
                        <span className="text-[2.5vw] font-medium text-white">
                           sponsor
                        </span>
                        <div className="flex h-[2vw] w-[2vw] -rotate-45 transform items-center justify-center rounded-full border border-gray-400"></div>
                     </button>
                  </div>

                  <div className="flex w-full rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg">
                     <p className="max-w-full text-[1.2vw] text-gray-400">
                        this is the form area.
                     </p>
                  </div>
               </div>

               <div className="flex w-full items-center justify-center rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] shadow-lg sm:w-1/4">
                  <div className="text-center"> Fosster</div>
               </div>
            </div>
         </div>
         <StackedCards />
      </div>
   );
}
