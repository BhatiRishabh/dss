'use client'
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

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
  
    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
      // @ts-ignore
      const id = `#${e.target.id}`;
      animate(id, { background: "rgba(129, 140, 248, 0)" }, { duration: 1.5 });
    };
  
    const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
      // @ts-ignore
      const id = `#${e.target.id}`;
      animate(id, { background: "rgba(129, 140, 248, 1)" }, { duration: 0.15 });
    };
  
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
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="h-full w-full border-[1px] border-slate-150"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
          <h1 className="text-center text-7xl font-black uppercase text-black sm:text-8xl md:text-9xl">
            Design Summer School
          </h1>
          <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-zinc-950 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            quisquam nemo excepturi officia necessitatibus veritatis enim ipsam!
            Laudantium, reiciendis officia!
          </p>
          <button className="pointer-events-auto bg-indigo-400 px-4 py-2 text-xl font-bold uppercase text-neutral-950 ">
            Join waitlist
          </button>
        </div>
      </div>
    );
  };
  