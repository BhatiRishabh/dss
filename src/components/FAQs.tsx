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
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="Is the program open to beginners, or do I need prior design experience?" defaultOpen>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="What is the registration deadline?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="Can I attend only specific sessions, or is it mandatory to attend the entire program?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
          </p>
        </Question>
        <Question title="What is the Design Summer School, and who is it for">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
            perspiciatis ad vero.
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