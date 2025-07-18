"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface EventItem {
  time: string;
  event: string;
}

interface ScheduleItem {
  date: string;
  topic: string;
  details: EventItem[];
}

const scheduleData: ScheduleItem[] = [
  {
    date: "21st July 2025, Monday",
    topic: "Design Thinking Processes",
    details: [
      { time: "08:45 a.m. - 09:15 a.m.", event: "Registration, Merchandise Distribution, and Breakfast" },
      { time: "09:30 a.m. - 11:00 a.m.", event: "Opening ceremony & Keynote by Dr.Srinivasan Venkataraman, Venue B003 R&D " },
      { time: "11:00 a.m. - 11:30 a.m.", event: "Tea" },
      { time: "11:30 a.m. - 01:00 p.m.", event: "Session by Dr.Richa Gupta, Venue B003 R&D" },
      { time: "01:00 p.m. - 02:00 p.m.", event: "Lunch" },
      { time: "02:00 p.m. - 05:00 p.m.", event: "Workshop on Use of AI tools in design thinking by Mr.Arunesh Singh, Venue B003 R&D " },
      { time: "05:00 p.m. - 05:15 p.m.", event: "Tea" },
    ],
  },
  {
    date: "22nd July 2025, Tuesday",
    topic: "Creative Thinking & Character Design",
    details: [
      { time: "09:30 a.m. - 11:00 a.m.", event: "Session on Character sketching by Mr.Manoj Sinha, Venue B003 R&D" },
      { time: "11:00 a.m. - 11:30 a.m.", event: "Tea" },
      { time: "11:30 a.m. - 01:00 p.m.", event: "Session by Mr.Manoj Sinha, Venue B003 R&D" },
      { time: "01:00 p.m. - 02:00 p.m.", event: "Lunch" },
      { time: "02:00 p.m. - 05:00 p.m.", event: "Workshop on design methods of creativity by Dr.Sonal Keshwani, Venue B003 R&D" },
      { time: "05:00 p.m. - 05:15 p.m.", event: "Tea" },
    ],
  },
  {
    date: "23rd July 2025, Wednesday",
    topic: "Sensing & HC AI",
    details: [
      { time: "09:30 a.m. - 11:00 a.m.", event: "Session by Dr.Kalpana Shankhwar, Venue B003 R&D" },
      { time: "11:00 a.m. - 11:30 a.m.", event: "Tea" },
      { time: "11:30 a.m. - 01:00 p.m.", event: "Demonstration and hands-on session on BCI by Dr. Priyanka Jain & team, C-DAC, MeitY, Venue B003 R&D" },
      { time: "01:00 p.m. - 02:00 p.m.", event: "Lunch" },
      { time: "02:00 p.m. - 05:00 p.m.", event: "Workshop on New Media Design with Interactive Arts by Dr. Gowdham Prabhakar, IIT Kanpur, Venue B003 R&D" },
      { time: "05:00 p.m. - 05:15 p.m.", event: "Tea" },    
    ],
  },
  {
    date: "24th July 2025, Thusday",
    topic: "Photography & Videography/Storytelling",
    details: [
      { time: "09:30 a.m. - 11:00 a.m.", event: "Session on Photography by Mr. Bijendra Kumar, Sr. Photographer NGMA & Mr. Anoop Ratn, Venue B105 R&D" },
      { time: "11:00 a.m. - 11:30 a.m.", event: "Tea" },
      { time: "11:30 a.m. - 01:00 p.m.", event: "Session on Photography by Mr. Bijendra Kumar, Sr. Photographer NGMA & Mr. Anoop Ratn, Venue B105 R&D " },
      { time: "01:00 p.m. - 02:00 p.m.", event: "Lunch" },
      { time: "02:00 p.m. - 05:00 p.m.", event: "Workshop on mobile Photography and videography by Mr.Aman Samuel, Venue B105 R&D" },
      { time: "05:00 p.m. - 05:15 p.m.", event: "Tea" },
    ],
  },
  {
    date: "25th July 2025, Friday",
    topic: "XR & AR, VR & MR",
    details: [
      { time: "09:30 a.m. - 11:00 a.m.", event: "Session on Multisensory Interface Technologies: From Design to Evaluation by Dr. Madhan Kumar Vasudevan, Venue B003 R&D" },
      { time: "11:00 a.m. - 11:30 a.m.", event: "Tea" },
      { time: "11:30 a.m. - 01:00 p.m.", event: "Session by Dr.Anmol Srivastava, Venue B003 R&D" },
      { time: "01:00 p.m. - 02:00 p.m.", event: "Lunch" },
      { time: "02:00 p.m. - 03:00 p.m.", event: "Closing Ceremony and Certificate Distribution by Prof. Bose, Venue B003 R&D" },
      { time: "03:00 p.m. - 03:15 p.m.", event: "Tea" },
    ],    
  },
];



const Schedule: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-4 pt-12 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="sm:text-6xl md:text-7xl text-5xl pt-5 font-black font-krona text-center">Schedule</h2>
        {scheduleData.map((item, index) => (
          <Question
            key={index}
            title={`${item.date}: ${item.topic}`}
            defaultOpen={index === 0}
          >
            <ul className="list-disc pl-6 space-y-2">
              {item.details.map((event, i) => (
                <li key={i}>
                  <span className="font-bold text-violet-600">{event.time}</span>
                  <span className="text-black"> : {event.event}</span>
                </li>
              ))}
            </ul>
          </Question>
        ))}
        <p className="mt-10 sm:text-lg font-semibold text-violet-600 text-justify">
    
        *Please Note: To receive a certificate, you must attend at least 75% of the sessions. This ensures that you gain the maximum benefit from the program and can apply what you learn effectively.
    
       
    
      </p>
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
