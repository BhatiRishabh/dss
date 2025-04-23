import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ListOrderItem = "front" | "middle" | "back";

const cardData = [
  {
    title: "XR & AR, VR & MR",
    imgSrc: "/img/4.jpg",
    bgColor: "bg-green-300",
  },
  {
    title: "Creative Thinking & Character Design",
    imgSrc: "/img/3.jpg",
    bgColor: "bg-pink-400",
  },
  {
    title: "Photography & Videography/Calligraphy",
    imgSrc: "/img/1.jpg",
    bgColor: "bg-indigo-500",
  },
  {
    title: "Design Thinking Processes",
    imgSrc: "/img/2.jpg",
    bgColor: "bg-yellow-300",
  },
  {
    title: "Sensing & HC AI",
    imgSrc: "/carousel/11.jpg",
    bgColor: "bg-blue-300",
  },
];

const POSITIONS: ListOrderItem[] = ["front", "middle", "back", "back", "back"];

export const ThemeSection = () => {
  const [order, setOrder] = useState<ListOrderItem[]>(POSITIONS);

  const handleShuffle = () => {
    const newOrder = [...order];
    newOrder.unshift(newOrder.pop() as ListOrderItem);
    setOrder(newOrder);
  };

  return (
    <section className="overflow-hidden bg-slate-50 px-8 py-24 text-zinc-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-5xl font-black font-krona   leading-[1.25] md:text-7xl">
            Our Themes
          </h3>
          <Link href="https://forms.gle/qyqmH4FjPRoHP4iw8" target="_blank">
            <button className="pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3 text-2xl font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100 mt-6">
              Register
            </button>
          </Link>
        </div>

        {/* Cards container */}
        <div className="relative flex flex-col items-center">
          <div className="relative h-[450px] w-[350px]">
            {cardData.map((card, idx) => (
              <Card
                key={idx}
                title={card.title}
                handleShuffle={handleShuffle}
                position={order[idx] ?? "back"}
                bgColor={card.bgColor}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>

          {/* "Swipe" text below the cards */}
          <p className="mt-4 text-lg font-semibold text-gray-500 flex items-center gap-2 animate-[bounce-horizontal_1.5s_infinite]">
            Swipe the above cards<span className="text-2xl">→</span>
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

  // Position & style logic
  const x =
    position === "front"
      ? "0%"
      : position === "middle"
      ? "25%"
      : position === "back"
      ? "50%"
      : "0%";

  const rotateZ =
    position === "front"
      ? "-6deg"
      : position === "middle"
      ? "0deg"
      : "6deg";

  const zIndex =
    position === "front"
      ? "4"
      : position === "middle"
      ? "3"
      : "2";

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
        width={400}
        height={400}
        className="mx-auto h-60 w-60 rounded-full border-1 border-slate-700 bg-slate-200 object-cover"
      />
      <h4 className="text-2xl font-bold text-center">{title}</h4>
    </motion.div>
  );
};
