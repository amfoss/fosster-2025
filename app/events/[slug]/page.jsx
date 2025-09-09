import { notFound } from 'next/navigation';
import EventPage from '@/components/sections/events/event_shared';
import events from '@/data/events.json';

export default function Event({ params }) {
   const slug = params?.slug;
   const event = events[slug];

   if (!event) return notFound();

   return <EventPage event={event} />;
}
