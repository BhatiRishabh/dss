'use client'
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const FAQ = () => {
  return (
    <>
    <div className="px-4 py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl">
       <h2 className="sm:text-6xl md:text-7xl text-5xl pt-10 font-black text-center">Frequently asked questions</h2>

        <Question title="Is the program open to beginners, or do I need prior design experience?" defaultOpen>
          <p>
          The Design Summer School is open to everyone whether you&apos;re a beginner or already have some design experience. No prior background is required to attend.
          </p>
        </Question>
        <Question title="What is the registration deadline?">
          <p>
          The registration deadline for DSS&apos;25 is 30th April 2025.
          </p>
        </Question>
        <Question title="Can I attend only specific sessions, or is it mandatory to attend the entire program?">
          <p>
          Registration is required for the entire program, and there is no scope for partial registrations for individual sessions. However, once registered, you are free to attend sessions based on your interest and availability.
          </p>
        </Question>
        <Question title="What is the Design Summer School, and who is it for?">
          <p>
          The Design Summer School is a 5-days event where the attendees get to participate in interesting talks, lectures, and workshops on various aspects of design. DSS is curated for students, industry professionals, designers, artists, and anyone interested in exploring design and its allied fields.
          </p>
        </Question>
        <Question title="What is the minimum attendance requirement to receive a certificate?">
          <p>
          To receive a certificate, you must attend at least 75% of the sessions. This ensures that you gain the maximum benefit from the program and can apply what you learn effectively.
          </p>
        </Question>
      </div>
    </div>
    </>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
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
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;