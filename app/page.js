import WhyFosster from '@/components/why_attend_foster/why_attend_foster';

export default function Home() {
   return (
      <div id="hero" className="min-h-screen">
         <div className="space-y-4 p-8">
            <p className="text-5xl">Welcome to Fosster 2025, </p>
            <p className="text-5xl font-bold">Testing fonts now (font-bold)</p>

            <p className="bg-red-300 text-[5vw] font-[300] italic">
               This should be light (font-[300]) and italic
            </p>
            <p className="font-[400]">This should be regular (font-[400])</p>
            <p className="font-[700]">This should be bold (font-[700])</p>
            <p className="font-[900]">This should be black (font-[900])</p>

            <p className="font-light">Light with Tailwind class</p>
            <p className="font-normal">Normal with Tailwind class</p>
            <p className="font-bold">Bold with Tailwind class</p>
            <p className="font-black">Black with Tailwind class</p>

            <p
               style={{ fontWeight: 300, fontStyle: 'italic', fontSize: '5vw' }}
            >
               Light with inline style
            </p>
            <p style={{ fontWeight: 700 }}>Bold with inline style</p>
         </div>
         <WhyFosster />
      </div>
   );
}
