export default function Hero() {
   return (
      <div id="hero" className="flex min-h-screen items-center justify-center">
         <div className="text-[4.5vw] font-bold tracking-tight">
            <p className="leading-[2vw]">CODE-COLLABORATE</p>
            <div className="flex">
               <div className="mr-[0.5vw] flex flex-col items-start">
                  <p>CREATE ❤️</p>
                  <div
                     id="pill-target"
                     className="mt-[-0.5vw] flex min-h-[7.3vw] min-w-full flex-1 items-center justify-center rounded-full text-[2.3vw] font-normal tracking-normal"
                  ></div>
               </div>
               <div className="text-[7vw] font-black">
                  <p className="leading-[8.4vw]">FOSSTER</p>
                  <p className="leading-[4vw]">2025</p>
               </div>
            </div>
         </div>
      </div>
   );
}
