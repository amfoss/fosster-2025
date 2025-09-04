'use client';

import { usePill } from '@/app/_contexts/pill';
import { useCallback, useEffect } from 'react';
import EventPage from '@/components/events/event_shared';
import { useRouter } from 'next/navigation';

export default function EventClient({ event }) {
   const { setOptions, setPersist, setHandleClick } = usePill();
   const router = useRouter();

   const handleRoutes = useCallback(
      (val) => {
         router.push(val);
      },
      [router]
   );

   useEffect(() => {
      setOptions([
         { label: 'Job Fair', value: '/events/job-fair' },
         { label: 'Lightning Talks', value: '/events/lightning-talks' },
         { label: 'Open Source 101', value: '/events/open-source-101' },
         { label: 'Panel Discussions', value: '/events/panel-discussions' },
         { label: 'Speaker Sessions', value: '/events/speaker-sessions' },
         { label: 'Workshops', value: '/events/workshops' },
      ]);
      setPersist(true);
      setHandleClick(() => handleRoutes);
   }, [setOptions, setPersist, setHandleClick, handleRoutes]);

   return <EventPage event={event} />;
}
