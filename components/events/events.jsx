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
      <div className="m-[0.5vw]">
         {/* Header */}
         <div className="mx-[2.5vw] flex items-center">
            <h1 className="text-[6.5vw] font-semibold italic">EVENTS</h1>
         </div>

         {/* Grid */}
         <div className="grid h-screen max-h-screen grid-cols-1 gap-[0.5vw] pt-[1vw] sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => (
               <div
                  key={idx}
                  className="flex transform flex-col justify-center overflow-hidden rounded-[5vw] bg-[#1b1b1f] p-[5vw] align-middle shadow-md transition duration-300 hover:scale-[103%] hover:bg-[#a5a1ff] hover:text-black max-md:max-h-[48vh]"
               >
                  <h2 className="flex-1 text-[1.5vw] font-bold">
                     {event.title}
                  </h2>
                  <p className="text-[1.3vw] leading-snug">
                     {event.description}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Events;
