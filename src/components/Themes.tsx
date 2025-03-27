import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

type ListOrderItem = "front" | "middle" | "back";

const COLORS = ["bg-indigo-500", "bg-pink-400", "bg-green-300"];

export const ThemeSection = () => {
  const [order, setOrder] = useState<ListOrderItem[]>(["front", "middle", "back"]);
  const [frontColorIndex, setFrontColorIndex] = useState(0);

  const handleShuffle = () => {
    const newOrder = [...order];
    newOrder.unshift(newOrder.pop() as ListOrderItem);
    setOrder(newOrder);

    setFrontColorIndex((prev) => (prev + 1) % COLORS.length);
  };

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
              handleShuffle={handleShuffle}
              position={order[0]}
              bgColor="bg-green-300"
              imgSrc="/img/4.jpg"
            />
            <Card
              title="Creative Thinking & Character Design"
              handleShuffle={handleShuffle}
              position={order[1]}
              bgColor="bg-pink-400"
              imgSrc="/img/3.jpg"
            />
            <Card
              title="Photography & Videography"
              handleShuffle={handleShuffle}
              position={order[2]}
              bgColor="bg-indigo-500"
              imgSrc="/img/1.jpg"
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
  position: ListOrderItem;
  title: string;
  bgColor: string;
  imgSrc: string;
}

const Card = ({
  handleShuffle,
  position,
  title,
  bgColor,
  imgSrc,
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
      <Image
        src={imgSrc}
        alt={title}
        width={128}
        height={128}
        className="mx-auto h-60 w-60 rounded-full border-1 border-slate-700 bg-slate-200 object-cover"
      />
      <h4 className="text-2xl font-bold text-center">{title}</h4>
    </motion.div>
  );
};
