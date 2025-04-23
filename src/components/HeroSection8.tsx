'use client'
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { AuroraText } from "./Text";
import { TextSecondary } from "./TextSecondary";
import { HeroButton } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { HeroHighlight } from "./Quote";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import { Highlight } from "./Quote";

export const HeroSection = () => {
    const [scope, animate] = useAnimate();
  
    const [size, setSize] = useState({ columns: 0, rows: 0 });
  
    useEffect(() => {
      generateGridCount();
      window.addEventListener("resize", generateGridCount);
  
      return () => window.removeEventListener("resize", generateGridCount);
    }, []);
  
    const generateGridCount = () => {
      const columns = Math.floor(document.body.clientWidth / 75);
      const rows = Math.floor(document.body.clientHeight / 75);
  
      setSize({
        columns,
        rows,
      });
    };
  
    // const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    //   // @ts-ignore
    //   const id = `#${e.target.id}`;
    //   animate(id, { background: "rgba(129, 140, 248, 0)" }, { duration: 1.5 });
    // };
  
    // const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    //   // @ts-ignore
    //   const id = `#${e.target.id}`;
    //   animate(id, { background: "rgba(129, 140, 248, 1)" }, { duration: 0.15 });
    // };
  
    return (
      <div className="bg-slate-50">
        <div
          ref={scope}
          className="grid h-[110vh]  w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"

        >
          {[...Array(size.rows * size.columns)].map((_, i) => (
            <div
              key={i}
              id={`square-${i}`}
              // onMouseLeave={handleMouseLeave}
              // onMouseEnter={handleMouseEnter}
              className="h-auto w-full border-[1px]  border-slate-150"
            />
          ))}
        </div>
        <div className=" pt-[20vh] sm:pt-[5vh] pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <Image alt="hcd"src="/logos/Logo.png" width="600"height="600"/>
          {/* <div className="flex sm:flex-row flex-col"><Image alt="hcd"src="/logos/3.svg" width="300"height="300"/>
          <Image alt="hcd"src="/logos/1.svg" width="150"height="150"/>
          <Image alt="hcd"src="/logos/2.svg" width="200"height="200"/></div> */}
          <div className="text-3xl italic font-bold pb-3">Present</div>
          {/* addLogo of HCD CDNM IIITD */}
          <h1 className="text-center sm:text-7xl md:text-8xl font-krona   text-6xl font-black uppercase text-black pb-2  ">
          <span className="text-6xl sm:text-7xl  md:text-8xl bg-gradient-to-r from-[#D8ECFF] via-[#56C1FF] to-[#EA80FC] bg-clip-text text-transparent font-bold tracking-tight">
  DESIGN
</span>
   <span className="sm:text-7xl md:text-8xl text-6xl"> <p>Summer School</p></span>
          </h1>
    
        
        <div className="px-10"></div>
                  <TextSecondary words="12th May'25 to 16th May'25" className="font-bold text-black  pb-3 "/>
                 
          
          <TextSecondary words="Transforming creative minds into design professionals through immersive learning experiences" className=" pb-6"/>
          <Link href="https://forms.gle/qyqmH4FjPRoHP4iw8" target="_blank">
          <button className="pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3 text-3xl font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100">
  Register
</button>
</Link>

         {/* <HeroButton/> */}
        </div>
      </div>
    );
  };


  