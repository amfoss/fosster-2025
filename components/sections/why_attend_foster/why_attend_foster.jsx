import Blocks from '@/components/svg/blocks';
import Compass from '@/components/svg/compass';
import Eye from '@/components/svg/eye';
import { GlobeSolid } from '@/components/svg/globe';
import UserGroup from '@/components/svg/user_group';
import CircularText from '@/components/ui/circular_text';
import SlidingCards from '@/components/sections/why_attend_foster/sliding_cards';
import { reasons } from '@/data/jsonData';

export default function WhyFosster() {
   const icons = {
      globe: <GlobeSolid />,
      userGroup: <UserGroup />,
      eye: <Eye />,
      compass: <Compass />,
      blocks: <Blocks />,
   };
   return (
      <div
         id="why-attend"
         className="m-[0.5vw] flex flex-col gap-y-[0.5vw] text-[#a5a1ff]"
      >
         <div className="flex rounded-[5vw] bg-[#1b1b1f] p-[2.5vw] max-md:rounded-[10vw]">
            <div className="flex flex-col gap-y-[3vw] p-[2.5vw] max-md:p-[7.5vw]">
               <p className="font-bold max-md:text-[3vw]">WHY ATTEND FOSSTER</p>
               <p className="max-w-[75vw] text-[6.5vw] leading-[1] font-medium tracking-[-2px] max-md:text-[11.5vw]">
                  FOSSter offers an unparalleled <i>experience</i> designed to
                  empower the <i>FOSS</i> community.
               </p>
            </div>
            <div className="flex flex-1 items-end justify-end max-md:hidden">
               <CircularText text={'SEE EVENTS SEE EVENTS '} radius={4.3} />
            </div>
         </div>

         <div className="flex flex-col gap-y-[0.5vw] max-md:max-w-[100vw] max-md:overflow-hidden">
            {reasons.map((id, index) => (
               <div key={index}>
                  <SlidingCards reason={reasons[index]} icons={icons} />
               </div>
            ))}
         </div>
      </div>
   );
}
