"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface ScheduleItem {
  date: string;
  topic: string;
}

const scheduleData: ScheduleItem[] = [
  { date: "12th May 2025", topic: "Design Thinking Processes" },
  { date: "13th May 2025", topic: "Creative Thinking & Character Design" },
  { date: "14th May 2025", topic: "Sensing & HC AI" },
  { date: "15th May 2025", topic: "Photography & Videography" },
  { date: "16th May 2025", topic: "XR & AR, VR & MR" },
];

const Schedule: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-4 py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        
        <h2 className="sm:text-6xl md:text-7xl text-5xl pt-5 font-black text-center">Schedule</h2>
        {scheduleData.map((item, index) => (
          <Question
            key={index}
            title={`${item.date}: ${item.topic}`}
            defaultOpen={index === 0}
          >
            <p>Detailed information about {item.topic} will be provided soon.</p>
          </Question>
        ))}
      </div>
    </div>
  );
};

interface QuestionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Question: React.FC<QuestionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: { color: "rgba(3, 6, 23, 0)" },
            closed: { color: "rgba(3, 6, 23, 1)" },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: { rotate: "180deg", color: "rgb(124 58 237)" },
            closed: { rotate: "0deg", color: "#030617" },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Schedule;
