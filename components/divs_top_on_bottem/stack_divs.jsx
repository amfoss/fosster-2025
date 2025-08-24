"use client";

const Card = ({ number, title, description, color, i }) => {
  return (
    <div className="h-screen flex items-center sticky top-0">
      <div
        className="relative flex items-start m-3 gap-8 h-[300px] w-full rounded-[5vw] p-12"
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`, 
        }}
      >

        <div className="w-20 text-gray-700 text-4xl font-bold flex-shrink-0">
          {number}
        </div>


        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-2 text-base text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function StackingCards() {
  const cards = [
    {
      number: "01",
      title: "First Card",
      description: "This is the first stacked card.",
      color: "#f87171",
    },
    {
      number: "02",
      title: "Second Card",
      description: "This is the second stacked card.",
      color: "#60a5fa",
    },
    {
      number: "03",
      title: "Third Card",
      description: "This is the third stacked card.",
      color: "#34d399",
    },
    {
      number: "04",
      title: "Fourth Card",
      description: "This is the fourth stacked card.",
      color: "#facc15",
    },
  ];

  return (
    <div className="relative">
      {cards.map((card, i) => (
        <Card key={i} i={i} {...card} />
      ))}
    </div>
  );
}
