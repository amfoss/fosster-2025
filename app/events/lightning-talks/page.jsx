export default function LightningTalks() {
   const event = {
      title: 'Lightning Talks',
      description: 'Spark Ideas, Share Your Passion!',
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
            </div>
         </div>
      </div>
   );
}
