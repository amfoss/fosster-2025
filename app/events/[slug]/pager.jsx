import { notFound } from 'next/navigation';
import EventClient from './event_client';
import events from '@/data/events.json';

// const events = {
//    'job-fair': {
//       title: 'Job Fair',
//       date: 'Sept 12, 2025',
//       description:
//          'Meet top companies and recruiters at the FOSSter Job Fair. Explore career opportunities, network with industry professionals, and showcase your skills to potential employers.',
//    },
//    'lightning-talks': {
//       title: 'Lightning Talks',
//       date: 'Sept 13, 2025',
//       description:
//          'Fast-paced, 5-10 minute presentations where participants share ideas, projects, or insights on open source topics. Perfect for sparking discussions and learning something new in a short time.',
//    },
//    'open-source-101': {
//       title: 'Open Source 101',
//       date: 'Sept 14, 2025',
//       description:
//          'An introductory session designed for beginners to understand the principles of open source, how to contribute, and the impact of collaborative software development.',
//    },
//    'panel-discussions': {
//       title: 'Panel Discussions',
//       date: 'Sept 15, 2025',
//       description:
//          'Live, moderated conversations featuring thought leaders discussing pivotal topics in open source. Expect interactive dialogue, cross-disciplinary insights, and vibrant debate — a format that moves far beyond solo talks.',
//    },
// };

export default function Event({ params }) {
   const event = events.find((e) => e.slug === params.slug);

   if (!event) return notFound();

   return <EventClient event={event} />;
}
