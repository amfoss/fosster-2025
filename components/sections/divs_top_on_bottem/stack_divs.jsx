'use client';

import { useEffect, useState } from 'react';

const Card = ({ number, title, description, color, i, cardSpacing }) => {
   return (
      <div
         className="sticky mt-[-10vw] flex max-md:mt-[-15vw]"
         style={{
            top: `calc(${(i + 1) * cardSpacing}vw)`,
         }}
      >
         <div
            className="relative flex h-[40vw] flex-1 rounded-[5vw] p-[2.5vw] pb-[5vw] max-md:h-[80vw] max-md:p-[5vw] max-md:pb-[10vw]"
            style={{
               backgroundColor: color,
            }}
         >
            <div className="mt-[-0.7vw] flex-shrink-0 text-[2vw] font-bold text-gray-700 max-md:text-[4vw]">
               {number}
            </div>

            <div className="mx-[5vw] h-full border border-gray-600"></div>

            <div className="flex flex-1 flex-col text-[4vw] max-md:text-[8vw]">
               <h2 className="mt-[-1.4vw] font-semibold text-gray-900">
                  {title}
               </h2>
               <p className="text-base text-gray-800">{description}</p>
            </div>
         </div>
      </div>
   );
};

export default function StackingCards() {
   const cards = [
      {
         number: '01',
         title: 'Coming Soon',
         description: '9:00 AM – 11:00 PM',
         color: '#a5a1ff',
      },
      {
         number: '02',
         title: 'Coming Soon',
         description: '11:00 AM – 12:30 PM',
         color: '#c3bfc7',
      },
      {
         number: '03',
         title: 'Coming Soon',
         description: '1:00 PM – 3:00 PM',
         color: '#e1ed90',
      },
      {
         number: '04',
         title: 'Coming Soon',
         description: '3:00 PM – 5:00 PM',
         color: '#fffc58',
      },
   ];

   const [cardSpacing, setCardSpacing] = useState(5);

   useEffect(() => {
      const updateSpacing = () => {
         setCardSpacing(window.innerWidth > 680 ? 5 : 15);
      };
      updateSpacing();
      window.addEventListener('resize', updateSpacing);
      return () => window.removeEventListener('resize', updateSpacing);
   }, []);

   return (
      <>
         <div className="m-[0.5vw] max-w-[50vw] p-[2.5vw] text-[2.5vw] tracking-tight max-md:max-w-[80vw] max-md:text-[5vw]">
            Whether you&apos;re making your first Git <i>commit</i> or scaling
            global projects, FOSSter is where <i>contribution</i> meets
            community
         </div>
         <div className="relative m-[0.5vw] mb-0 pt-[10vw] max-md:pt-[15vw]">
            {cards.map((card, i) => (
               <Card key={i} i={i} {...card} cardSpacing={cardSpacing} />
            ))}
         </div>
      </>
   );
}
