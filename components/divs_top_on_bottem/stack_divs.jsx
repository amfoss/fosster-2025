'use client';

const Card = ({ number, title, description, color, i }) => {
   return (
      <div
         className="sticky mt-[-5vw] flex"
         style={{ top: `calc(${(i + 1) * 5}vw)` }}
      >
         <div
            className="relative flex h-[40vw] flex-1 rounded-t-[5vw] p-[2.5vw] pb-[5vw]"
            style={{
               backgroundColor: color,
            }}
         >
            <div className="mt-[-0.7vw] flex-shrink-0 text-[2vw] font-bold text-gray-700">
               {number}
            </div>

            <div className="mx-[5vw] h-full border border-gray-600"></div>

            <div className="flex flex-1 flex-col text-[4vw]">
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
         title: 'First Card',
         description: 'This is the first stacked card.',
         color: '#f87171',
      },
      {
         number: '02',
         title: 'Second Card',
         description: 'This is the second stacked card.',
         color: '#60a5fa',
      },
      {
         number: '03',
         title: 'Third Card',
         description: 'This is the third stacked card.',
         color: '#34d399',
      },
      {
         number: '04',
         title: 'Fourth Card',
         description: 'This is the fourth stacked card.',
         color: '#fffc58',
      },
   ];

   return (
      <>
         <div className="m-[0.5vw] max-w-[50vw] p-[2.5vw] text-[2.5vw] tracking-tight">
            Whether you&apos;re making your first Git <i>commit</i> or scaling
            global projects, FOSSter is where <i>contribution</i> meets
            community
         </div>
         <div className="relative m-[0.5vw] pt-[5vw]">
            {cards.map((card, i) => (
               <Card key={i} i={i} {...card} />
            ))}
         </div>
      </>
   );
}
