// "use client";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import {
//   motion,
//   useMotionTemplate,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { SiSpacex } from "react-icons/si";
// import { FiArrowRight, FiMapPin } from "react-icons/fi";
// import { useRef } from "react";

// /**
//  * Main containing component that does not interfere with other siblings.
//  * We wrap everything in a single <section> so it's "self-contained."
//  * Removed absolute positioning on nav and gradient background.
//  */
// export const Gallery = () => {
//   return (
//     <section className="bg-slate-50 overflow-hidden">
//       <ReactLenis
//         root
//         options={{
//           // Configure as you like:
//           lerp: 0.05,
//         }}
//       >
//         {/* <Nav /> */}
//         <Hero />
//         <Schedule />
//       </ReactLenis>
//     </section>
//   );
// };

// const Nav = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-3 text-zinc-950">
//       <SiSpacex className="text-3xl mix-blend-difference" />
//       <button
//         onClick={() => {
//           document.getElementById("launch-schedule")?.scrollIntoView({
//             behavior: "smooth",
//           });
//         }}
//         className="flex items-center gap-1 text-xs text-zinc-400"
//       >
//         LAUNCH SCHEDULE <FiArrowRight />
//       </button>
//     </nav>
//   );
// };

// const SECTION_HEIGHT = 1500;

// const Hero = () => {
//   return (
//     <div
//       style={{ minHeight: `calc(${SECTION_HEIGHT}px + 100vh)` }}
//       className="relative w-full bg-slate-50"
//     >
//       <CenterImage />
//       <ParallaxImages />
//       {/* Normal block gradient instead of absolute */}
//       <div className="mt-8 h-96 w-full bg-gradient-to-b from-zinc-50/0 to-zinc-50" />
//     </div>
//   );
// };

// /**
//  * This component uses 'sticky' + transforms for the parallax effect.
//  * If you need to remove sticky, simply delete "sticky top-0 h-screen"
//  * and switch to a standard block layout (e.g., remove sticky logic).
//  */
// const CenterImage = () => {
//   const { scrollY } = useScroll();

//   const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
//   const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

//   const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

//   const backgroundSize = useTransform(
//     scrollY,
//     [0, SECTION_HEIGHT + 500],
//     ["170%", "100%"]
//   );
//   const opacity = useTransform(
//     scrollY,
//     [SECTION_HEIGHT, SECTION_HEIGHT + 500],
//     [1, 0]
//   );

//   return (
//     <motion.div
//       className="sticky top-0 h-screen w-full"
//       style={{
//         clipPath,
//         backgroundSize,
//         opacity,
//         backgroundImage: `url("/img/Copy of Design summer school_49.JPG")`, 
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
      
//     />
//   );
// };

// const ParallaxImages = () => {
//   return (
//     <div className="mx-auto max-w-5xl px-4 pt-[200px]">
//       <ParallaxImg
//         src="/img/Copy of DSS_Aman__3.JPG"
//         alt="And example of a space launch"
//         start={-200}
//         end={200}
//         className="w-1/3"
//       />
//       <ParallaxImg
//         src="/img/Copy of DSS_JPG Group.jpg"
//         alt="An example of a space launch"
//         start={200}
//         end={-250}
//         className="mx-auto w-2/3"
//       />
//       <ParallaxImg
//         src="/img/Copy of DSS_Aman__71.JPG"
//         alt="Orbiting satellite"
//         start={-200}
//         end={200}
//         className="ml-auto w-1/3"
//       />
//       <ParallaxImg
//         src="/img/Copy of Design summer school_87.JPG"
//         alt="Orbiting satellite"
//         start={0}
//         end={-500}
//         className="ml-24 w-5/12"
//       />
//     </div>
//   );
// };

// const ParallaxImg = ({
//   className,
//   alt,
//   src,
//   start,
//   end,
// }: {
//   className?: string;
//   alt: string;
//   src: string;
//   start: number;
//   end: number;
// }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     // Tweak your offset to line up how you like:
//     offset: [`${start}px end`, `end ${end * -1}px`],
//   });

//   const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

//   const y = useTransform(scrollYProgress, [0, 1], [start, end]);
//   const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

//   return (
//     <motion.img
//       ref={ref}
//       src={src}
//       alt={alt}
//       className={className}
//       style={{ transform, opacity }}
//     />
//   );
// };

// const Schedule = () => {
//   return (
//     <section
//       id="launch-schedule"
//       className="mx-auto max-w-5xl px-4 py-48 text-zinc-950"
//     >
//       <motion.h1
//         initial={{ y: 48, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ ease: "easeInOut", duration: 0.75 }}
//         className="mb-20 text-4xl font-black uppercase text-zinc-950"
//       >
//         Summer School Schedule
//       </motion.h1>

//       <ScheduleItem title="DAY 01" date="April 9th" location="LHC C102" />
//       <ScheduleItem title="DAY 02" date="April 20th" location="RnD B007" />
//       <ScheduleItem title="DAY 03" date="May 10th" location="RnD 415" />
//       <ScheduleItem title="DAY 04" date="May 22nd" location="RnD A007" />
//       <ScheduleItem title="DAY 05" date="May 31st" location="LHC C101" />
//       <ScheduleItem title="DAY 06" date="June 8th" location="LHC C102" />
//       <ScheduleItem title="DAY 07" date="June 9th" location="RnD A006" />
//     </section>
//   );
// };

// const ScheduleItem = ({
//   title,
//   date,
//   location,
// }: {
//   title: string;
//   date: string;
//   location: string;
// }) => {
//   return (
//     <motion.div
//       initial={{ y: 48, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ ease: "easeInOut", duration: 0.75 }}
//       className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
//     >
//       <div>
//         <p className="mb-1.5 text-xl text-zinc-950">{title}</p>
//         <p className="text-sm uppercase text-zinc-500">{date}</p>
//       </div>
//       <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
//         <p>{location}</p>
//         <FiMapPin />
//       </div>
//     </motion.div>
//   );
// };


"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GalleryText } from "./GalleryText";

export function Gallery() {
  return (
    <div className="h-screen p-20 w-full">
      
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-black-900">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};

// const cards = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/img/Copy of DSS_JPG Group.jpg",
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "/img/Copy of DSS_Aman__169.JPG",
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "/img/Copy of DSS_Aman__3.JPG",
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/img/Copy of Design summer school_49.JPG",
//   },
//   {
//     id: 5,
//     content: <SkeletonFive/>,
//     className: "md:col-span-2",
//     thumbnail:
//       "/img/Copy of Design summer school_87.JPG",
//   },
//   {
//     id: 6,
//     content: <SkeletonSix />,
//     className: "col-span-1",
//     thumbnail:
//       "/img/Copy of DSS_4__42.JPG",
//   },
// ];
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/img/Copy of DSS_JPG Group.jpg",
    position: "top" as const,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/img/Copy of DSS_Aman__169.JPG",
    position: "center" as const,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/img/Copy of DSS_Aman__3.JPG",
    position: "bottom" as const,
  },
  {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
          "/img/Copy of Design summer school_49.JPG",
          position: "center" as const,
  },
  {
    id: 5,
    content: <SkeletonFive/>,
    className: "md:col-span-2",
    thumbnail:
      "/img/Copy of DSS_4__42.JPG",
      position: "center" as const,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "/img/Copy of Design summer school_87.JPG",
      position: "center" as const,
  },
];

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  position: "top" | "center" | "bottom";
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-5 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  const objectPositionClass =
    card.position === "top"
      ? "object-top"
      : card.position === "bottom"
      ? "object-bottom"
      : "object-center"; // Default

  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover absolute inset-0 h-full w-full transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl hover:z-20",
        objectPositionClass
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
