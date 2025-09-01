'use client';

import Events from '@/components/events/events';
import ActionCards from '@/components/who_can_attend_fosster/action_cards';
import WhyFosster from '@/components/why_attend_foster/why_attend_foster';
import StackedCards from '@/components/divs_top_on_bottem/stack_divs';
import ContactUs from '@/components/contact_us/contact_us';
import { usePill } from '@/app/_contexts/pill';
import { useEffect } from 'react';
import About from '@/components/about/about';

export default function Home() {
   const { setOptions, setPersist } = usePill();
   useEffect(() => {
      setOptions([
         { label: 'Register', link: '/attend' },
         { label: 'Now', link: '/attend' },
      ]);
      setPersist(false);
   }, [setOptions, setPersist]);
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
