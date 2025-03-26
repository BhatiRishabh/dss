'use client'
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { AuroraText } from "./Text";
import { TextSecondary } from "./TextSecondary";
import { HeroButton } from "./Button";
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
          className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
        >
          {[...Array(size.rows * size.columns)].map((_, i) => (
            <div
              key={i}
              id={`square-${i}`}
              // onMouseLeave={handleMouseLeave}
              // onMouseEnter={handleMouseEnter}
              className="h-auto w-full border-[1px] border-slate-150"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className=" text-2xl italic font-bold">HCD, CDNM, IIITD Presents</div>
          {/* addLogo of HCD CDNM IIITD */}
          <h1 className="text-center text-7xl font-black uppercase text-black sm:text-8xl md:text-9xl ">
             <span className="sm:text-8xl md:text-9xl text-7xl"><AuroraText>Design </AuroraText></span> 
             <span className="sm:text-8xl md:text-9xl text-7xl"> <p>Summer School</p></span>
          </h1>
    
        
        <div className="px-10"></div>
                  <Highlight className="text-black dark:text-white text-2xl mt-4">
                  <TextSecondary words="12th May'25 to 16th May'25" className="font-bold text-white"/>
                 </Highlight>
          
          <TextSecondary words="Transforming creative minds into design professionals through immersive learning experiences" className="p-4"/>
          <button className="pointer-events-auto bg-indigo-400 px-4 py-2 text-4xl font-bold uppercase text-neutral-950 ">
            REGISTER
          </button>
         {/* <HeroButton/> */}
        </div>
      </div>
    );
  };


  