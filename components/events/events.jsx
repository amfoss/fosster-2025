import Link from 'next/link';
import { events } from '../../data/jsonData';
const Events = () => {
   return (
      <div className="m-[0.5vw]">
         {/* Header */}
         <div className="mx-[2.5vw] flex items-center">
            <h1 className="text-[6.5vw] font-semibold italic max-md:text-[13vw]">
               EVENTS
            </h1>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 gap-[0.5vw] pt-[1vw] sm:grid-cols-2 md:h-screen md:max-h-screen lg:grid-cols-3">
            {events.map((event, idx) => (
               <Link
                  href={'/events/' + event.link}
                  key={idx}
                  className="flex transform flex-col justify-center overflow-hidden rounded-[5vw] bg-[#1b1b1f] p-[5vw] align-middle shadow-md transition duration-300 hover:scale-[97%] hover:bg-[#a5a1ff] hover:text-black max-md:max-h-[48vh] max-md:rounded-[10vw] max-md:p-[10vw]"
               >
                  <h2 className="flex-1 text-[1.5vw] font-bold max-md:text-[4vw]">
                     {event.title}
                  </h2>
                  <p className="text-[1.3vw] leading-snug max-md:mt-[5vw] max-md:text-[4vw]">
                     {event.description}
                  </p>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Events;
