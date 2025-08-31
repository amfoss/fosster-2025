import './globals.css';
import localFont from 'next/font/local';
import ReactLenis from 'lenis/react';
import NavBar from '@/components/navbar/navbar';
import { PillProvider } from './_contexts/pill';
import Hero from '@/components/hero/hero';

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
                  <div id="end" className="min-h-[90vh]"></div>
               </PillProvider>
            </ReactLenis>
         </body>
      </html>
   );
}
