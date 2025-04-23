import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import DelayedLoader from '@/components/DelayedLoader'
import Nav from '@/components/Nav'
// const inter = Inter({ subsets: ['latin'] })
import localFont from "next/font/local";
import { Suspense } from 'react';
import Loading from './loading';
export const metadata: Metadata = {
  title: 'DSS 2025',
  description: 'Our 5 Day Design Summer School is aimed at Networking, Learning, and Developing design solutions for real-world problems. Learn from the best in the industry.',
}

const Helvetica = localFont({
  src: "/fonts/Helvetica.ttf",
  variable: "--font-helvetica-sans",
  weight: "100 900",
  
});


const KronaOne = localFont({
  src: "/fonts/KronaOne-Regular.ttf",
  variable: "--font-krona-one",

});

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // inject both font-variables here
      className={`${Helvetica.variable} ${KronaOne.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Nav />
        <DelayedLoader>{children}</DelayedLoader>
        <Footer />
      </body>
    </html>
  )
}

