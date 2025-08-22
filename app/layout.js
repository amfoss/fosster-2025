import localFont from 'next/font/local';
import './globals.css';

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

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${satoshi.className} antialiased`}>{children}</body>
      </html>
   );
}
