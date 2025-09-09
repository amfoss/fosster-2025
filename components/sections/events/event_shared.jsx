import ArrowDown from '@/components/svg/arrow';

export default function EventPage({ event }) {
   const renderSection = (section, index) => {
      const { type, title, items } = section;

      switch (type) {
         case 'cards':
            return (
               <div
                  key={index}
                  className="grid w-full grid-cols-2 gap-[0.5vw] text-black max-md:grid-cols-1"
               >
                  {items.map((item, i) => (
                     <div
                        key={i}
                        className="flex flex-col rounded-[2.5vw] bg-[#1b1b1f] p-[2.5vw] text-[1.3vw] text-[#ffffff] max-md:rounded-[10vw] max-md:px-[10vw] max-md:py-[5vw] max-md:text-[4vw]"
                     >
                        <p className="font-semibold">{item.title}</p>
                        <p className="">{item.content}</p>
                     </div>
                  ))}
               </div>
            );

         case 'list':
            return (
               <div
                  key={index}
                  className="rounded-[2.5vw] bg-[#f1efef] p-[2.5vw] text-[1.3vw] text-[#00192e] max-md:p-[5vw] max-md:text-[4vw]"
               >
                  <p className="mb-[0.5vw] text-[1vw] font-bold tracking-tight max-md:text-[4vw]">
                     {title}
                  </p>
                  {items.map((item, i) => (
                     <div key={i} className="flex items-center gap-[0.5vw]">
                        <div className="w-[1vw] -rotate-90">
                           <ArrowDown />
                        </div>
                        {item}
                     </div>
                  ))}
               </div>
            );

         case 'simple':
            return (
               <div
                  key={index}
                  className="rounded-[2.5vw] bg-[#1b1b1f] p-[2.5vw] text-[1.3vw] text-[#fff480] max-md:p-[5vw] max-md:text-[4vw]"
               >
                  <p className="mb-[0.5vw] text-[1vw] font-bold tracking-tight max-md:text-[4vw]">
                     {title}
                  </p>
                  {items.map((item, i) => (
                     <div key={i} className="mb-[0.5vw]">
                        {item}
                     </div>
                  ))}
               </div>
            );

         case 'keyValue':
            return (
               <div
                  key={index}
                  className="rounded-[2.5vw] bg-[#1b1b1f] p-[2.5vw] text-[1.3vw] text-[#fff480] max-md:p-[5vw] max-md:text-[4vw]"
               >
                  <p className="mb-[0.5vw] text-[1vw] font-bold tracking-tight max-md:text-[4vw]">
                     {title}
                  </p>
                  {items.map((item, i) => (
                     <div key={i} className="flex items-center gap-[0.5vw]">
                        <div className="w-[1vw] -rotate-90">
                           <ArrowDown />
                        </div>
                        <span>
                           <strong>{item.key}:</strong> {item.value}
                        </span>
                     </div>
                  ))}
               </div>
            );

         default:
            return null;
      }
   };

   return (
      <div className="flex w-screen p-[5vw] max-md:flex-col max-md:gap-y-[2.5vw] md:gap-x-[2.5vw]">
         <div>
            <div className="top-[5vw] flex flex-col gap-y-[1vw] max-md:gap-y-[3vw] md:sticky md:w-[35vw]">
               <p className="text-[5vw] font-bold max-md:text-[10vw] md:leading-[5.5vw]">
                  {event.title}
               </p>
               <p className="text-[1.5vw] max-md:text-[4vw]">
                  {event.description}
               </p>
               <div className="text-[1.3vw] text-gray-400 max-md:text-[4vw]">
                  {event.date && <p>📅 {event.date}</p>}

                  {event.ledBy && (
                     <p>
                        <strong>🎓 Led by:</strong> {event.ledBy}
                     </p>
                  )}

                  {event.proposalCall && (
                     <div className="my-[1vw] rounded-[2.5vw] bg-[#a5a1ff] p-[1.25vw] text-black max-md:my-[2vw] max-md:rounded-[5vw] max-md:p-[3vw]">
                        <strong>📢 Call for Proposals:</strong>{' '}
                        {event.proposalCall}
                     </div>
                  )}

                  {event.contact && (
                     <p>
                        <strong>📧 Contact:</strong> {event.contact}
                     </p>
                  )}

                  {event.schedule && (
                     <p>
                        <strong>🕐 Schedule:</strong> {event.schedule}
                     </p>
                  )}
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-y-[1vw] max-md:gap-y-[2.5vw]">
            {event.sections?.map((section, index) =>
               renderSection(section, index)
            )}
         </div>
      </div>
   );
}
