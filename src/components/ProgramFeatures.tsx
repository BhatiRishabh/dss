import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";
import {
    FiUsers,
    FiGift,
    FiAward,
    FiHome,
    FiShare2,
    FiTrendingUp,
  } from "react-icons/fi";

export const ProgramFeatures = () => {
    const [position, setPosition] = useState(0);
  
    const shiftLeft = () => {
      if (position > 0) {
        setPosition((pv) => pv - 1);
      }
    };
  
    const shiftRight = () => {
      if (position < features.length - 1) {
        setPosition((pv) => pv + 1);
      }
    };
  
    return (
      <section className="overflow-hidden bg-slate-150 px-4 py-12 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex justify-between gap-4">
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl text-indigo-500">
              Were good. <span className="text-neutral-400">Heres why.</span>
            </h2>
            <div className="flex gap-2">
              <button
                className="h-fit bg-indigo-500 p-4 text-2xl text-white transition-colors hover:bg-indigo-400"
                onClick={shiftLeft}
              >
                <FiChevronLeft />
              </button>
              <button
                className="h-fit bg-indigo-500 p-4 text-2xl text-white transition-colors hover:bg-indigo-400"
                onClick={shiftRight}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            {features.map((feat, index) => (
              <Feature {...feat} key={index} position={position} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  interface FeatureProps {
    position: number;
    index: number;
    title: string;
    description: string;
    Icon: IconType;
  }
  
  const Feature = ({
    position,
    index,
    title,
    description,
    Icon,
  }: FeatureProps) => {
    const translateAmt =
      position >= index ? index * 100 : index * 100 - 100 * (index - position);
  
    return (
      <motion.div
        animate={{ x: `${-translateAmt}%` }}
        transition={{
          ease: "easeInOut",
          duration: 0.35,
        }}
        className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
          index % 2 ? "bg-indigo-500 text-white" : " bg-white text-indigo-500"
        }`}
      >
        <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
        <h3 className="mb-8 text-3xl font-bold">{title}</h3>
        <p>{description}</p>
      </motion.div>
    );
  };
  
  
  
  
  
  const features = [
    {
      title: "1:1 Mentorship",
      Icon: FiUsers,
      description:
        "Personal mentorship from experts at IIIT-Delhi — India’s leading institute for Human-Computer Interaction (HCI).",
    },
    {
      title: "Exclusive Merchandise",
      Icon: FiGift,
      description:
        "Get access to premium, program-only merchandise you’ll actually want to wear and flaunt.",
    },
    {
      title: "Certificate of Completion",
      Icon: FiAward,
      description:
        "Official certification from IIIT-Delhi after successful participation and completion of the program.",
    },
    {
      title: "Hands-on Workshops",
      Icon: FiTool,
      description:
        "Get practical experience through interactive, expert-led workshops designed to boost your skills.",
    },
    {
      title: "Shared Accommodation",
      Icon: FiHome,
      description:
        "Need a place to stay? Shared living spaces are available for participants at an additional cost.",
    },
    {
      title: "Professional Networking",
      Icon: FiShare2,
      description:
        "Build your network with fellow learners and industry professionals through social and professional events.",
    },
    {
      title: "Future Opportunities",
      Icon: FiTrendingUp,
      description:
        "Top performers may be considered for future opportunities and projects at IIIT-Delhi.",
    },
  ];
  