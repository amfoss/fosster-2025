import './globals.css';
import localFont from 'next/font/local';
import ReactLenis from 'lenis/react';
import NavBar from '@/components/navigation/navbar';
import { PillProvider } from './_contexts/pill';
import Hero from '@/components/sections/hero/hero';

const satoshi = localFont({
   src: [
      {
         path: '../public/fonts/Satoshi_Complete/Satoshi-Variable.woff2',
         weight: '100 900',
         style: 'normal',
      },
      {
         path: '../public/fonts/Satoshi_Complete/Satoshi-VariableItalic.woff2',
         weight: '100 900',
         style: 'italic',
      },
   ],
   variable: '--font-satoshi',
   display: 'swap',
});

export const metadata = {
   title: 'FOSSter - Code, Collaborate and Create',
   description: 'The Premier Event for Open-Source Contributors',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${satoshi.className} antialiased`}>
            <ReactLenis
               root
               options={{
                  lerp: 0.06,
                  duration: 0.5,
                  smoothTouch: true,
                  smoothWheel: true,
               }}
            >
               <PillProvider>
                  <NavBar />
                  <Hero />
                  {children}
                  <div
                     id="end"
                     className="flex min-h-[90vh] items-end px-[1.5vw] py-[1vw] text-[1.5vw] text-[#555555] max-md:flex-col max-md:items-center max-md:justify-end max-md:p-[10vw] max-md:text-[5vw] md:gap-x-[3vw]"
                  >
                     <div className="md:flex-1">
                        <p>&copy; fosster 2026</p>
                     </div>
                     <div className="flex gap-x-[3vw]">
                        <p className="flex-1">Instagram</p>
                        <p className="flex-1">Twitter</p>
                        <p className="flex-1">Linkedin</p>
                     </div>
                     <p className="whitespace-nowrap">Be expressive</p>
                  </div>
               </PillProvider>
            </ReactLenis>
         </body>
      </html>
   );
}
