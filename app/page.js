'use client';

import Events from '@/components/sections/events/events';
import ActionCards from '@/components/sections/who_can_attend_fosster/action_cards';
import WhyFosster from '@/components/sections/why_attend_foster/why_attend_foster';
import StackedCards from '@/components/sections/divs_top_on_bottem/stack_divs';
import ContactUs from '@/components/sections/contact_us/contact_us';
import { usePill } from '@/app/_contexts/pill';
import { useEffect } from 'react';
import About from '@/components/sections/about/about';

export default function Home() {
   const { setOptions, setPersist, setMode } = usePill();
   useEffect(() => {
      setOptions([
         { label: 'Register', link: '/pricing' },
         { label: 'Now', link: '/pricing' },
      ]);
      setPersist(false);
      setMode(0);
   }, [setOptions, setPersist, setMode]);
   return (
      <div id="top" className="min-h-screen">
         <About />
         <WhyFosster />
         <Events />
         <ActionCards />
         <StackedCards />
         <ContactUs />
      </div>
   );
}
