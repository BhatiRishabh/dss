import { motion } from "framer-motion";
import { useRef, useState } from "react";

type ListOrderItem = "front" | "middle" | "back";

const COLORS = ["bg-indigo-500", "bg-pink-400", "bg-green-300"];

export const ThemeSection = () => {
  const [order, setOrder] = useState<ListOrderItem[]>(["front", "middle", "back"]);
  const [frontColorIndex, setFrontColorIndex] = useState(0); // Tracks color for front card

  const handleShuffle = () => {
    // Rotate the card positions
    const newOrder = [...order];
    newOrder.unshift(newOrder.pop() as ListOrderItem);
    setOrder(newOrder);

    // Cycle the front card color index
    setFrontColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  // Assign front color only to the card with position 'front'
  const getCardColor = (position: ListOrderItem) =>
    position === "front" ? COLORS[frontColorIndex] : "bg-slate-200";

  return (
    <section className="overflow-hidden bg-slate-50 px-8 py-24 text-zinc-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-5xl font-black leading-[1.25] md:text-7xl">
            Our Themes
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <button className="pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3 text-2xl font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100 mt-6">
              Register
            </button>
          </form>
        </div>
        
        {/* Cards container */}
        <div className="relative flex flex-col items-center">
          <div className="relative h-[450px] w-[350px]">
            <Card
              title="Master AR-VR Class"
              testimonial="Learn how to design and develop interactive augmented and virtual reality experiences. This session covers the fundamentals of XR, practical applications, and the latest tools used in the industry."
              author=""
              handleShuffle={handleShuffle}
              position={order[0]}
              bgColor="bg-green-300"
            />
            <Card
              title="Creative Thinking & Character Design"
              testimonial="Unleash your imagination with this creative thinking and character design session. Learn how to develop unique and memorable characters through storytelling, visual exploration, and design techniques."
              author=""
              handleShuffle={handleShuffle}
              position={order[1]}
              bgColor="bg-pink-400"
            />
            <Card
              title="Photography & Videography"
              testimonial="Master the art of visual storytelling in this dynamic photography and videography class. From capturing stunning images to filming high-quality videos, this session covers composition, lighting, and editing techniques."
              author=""
              handleShuffle={handleShuffle}
              position={order[2]}
              bgColor="bg-indigo-500"
            />
          </div>
  
          {/* "Swipe" text below the cards */}
          <p className="mt-4 text-lg font-semibold text-gray-500 flex items-center gap-2 animate-[bounce-horizontal_1.5s_infinite]">
  Swipe <span className="text-2xl">→</span>
</p>

        
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  handleShuffle: Function;
  testimonial: string;
  position: ListOrderItem;
  title: string;
  author: string;
  bgColor: string;
}

const Card = ({
  handleShuffle,
  testimonial,
  position,
  title,
  author,
  bgColor,
}: CardProps) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX;
    if (diff > 150) handleShuffle();
    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";
  const draggable = position === "front";

  return (
    <motion.div
      style={{ zIndex }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl p-6 shadow-xl text-slate-900 ${bgColor} ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <h4 className="text-2xl font-bold text-center">{title}</h4>
      <p className="text-center text-lg italic">&quot;{testimonial}&quot;</p>
      <span className="text-center text-sm font-semibold">{author}</span>
    </motion.div>
  );
};
