'use client';

import { scrollToHash } from '@/app/_utils/helpers';
import Pill from './pill';

export default function NavBar() {
   return (
      <>
         <nav
            className={`fixed top-0 z-50 flex w-full text-[1.3vw] ${true ? '' : '-translate-y-full'}`}
         >
            <div className="flex flex-1 justify-start pt-[0.75vw] pl-[0.75vw]">
               <button
                  onClick={() => {
                     scrollToHash('hero');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  {' '}
                  foster
               </button>
            </div>
            <div className="flex flex-1 items-center justify-center pt-[0.75vw]">
               <button
                  onClick={() => {
                     scrollToHash('why-attend');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  {' '}
                  about
               </button>
               <button
                  onClick={() => {
                     scrollToHash('hero');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  {' '}
                  sponsor
               </button>
               <button
                  onClick={() => {
                     scrollToHash('hero');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  {' '}
                  venue
               </button>
            </div>
            <div className="flex flex-1 justify-end pt-[0.75vw] pr-[0.75vw]">
               <button
                  onClick={() => {
                     scrollToHash('hero');
                  }}
                  className="flex items-center justify-center rounded-full bg-gray-500/15 px-[1.75vw] py-[0.6vw] backdrop-blur-xl"
               >
                  {' '}
                  foster
               </button>
            </div>
         </nav>
         <div className={`fixed bottom-0 z-50 flex w-full text-[1.3vw]`}>
            <div className="flex flex-1 justify-center pb-[1.5vw]">
               <Pill />
            </div>
         </div>
      </>
   );
}
