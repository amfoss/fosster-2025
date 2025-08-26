import React from 'react';

const events = [
   {
      title: 'Event Sigma',
      description:
         'Sigma balls are very clever, i kinda like em tbh. But is that the end goal? Where does it lead me to? We might never know until we are closer....or do we? Lots of questions, lots of time. But none to spare',
   },
   {
      title: 'Event Sigma',
      description:
         'Sigma balls are very clever, i kinda like em tbh. But is that the end goal? Where does it lead me to? We might never know until we are closer....or do we? Lots of questions, lots of time. But none to spare',
   },
   {
      title: 'Event Sigma',
      description:
         'Sigma balls are very clever, i kinda like em tbh. But is that the end goal? Where does it lead me to? We might never know until we are closer....or do we? Lots of questions, lots of time. But none to spare',
   },
   {
      title: 'Event Sigma',
      description:
         'Sigma balls are very clever, i kinda like em tbh. But is that the end goal? Where does it lead me to? We might never know until we are closer....or do we? Lots of questions, lots of time. But none to spare',
   },
   {
      title: 'Event Sigma',
      description:
         'Sigma balls are very clever, i kinda like em tbh. But is that the end goal? Where does it lead me to? We might never know until we are closer....or do we? Lots of questions, lots of time. But none to spare',
   },
   {
      title: 'Event Sigma',
      description:
         'Sigma balls are very clever, i kinda like em tbh. But is that the end goal? Where does it lead me to? We might never know until we are closer....or do we? Lots of questions, lots of time. But none to spare',
   },
];

const Events = () => {
   return (
      <div className="my-8 p-8">
         {/* Header */}
         <div className="mb-6 flex items-center gap-3">
            <h1 className="text-6xl font-semibold italic">EVENTS</h1>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => (
               <div
                  key={idx}
                  className="flex aspect-square transform flex-col justify-center overflow-hidden rounded-4xl bg-[#1b1b1f] p-12 align-middle shadow-md transition duration-300 hover:scale-105 hover:bg-[#a5a1ff] hover:text-black"
               >
                  <h2 className="mb-3 text-xl font-bold">{event.title}</h2>
                  <p className="line-clamp-6 text-lg leading-snug">
                     {event.description}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Events;
