"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion"; // Correct import for framer-motion

import { cn } from "@/lib/utils"; // Utility function for className merging

export function GalleryText(): JSX.Element {
  return (
    <WordRotate
      className="text-4xl font-heveltica font-bold text-indigo-500 text-center p-4 "
      words={["GALLERY", "MEMORIES"]}
    />
  );
}

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
