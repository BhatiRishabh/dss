import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 480;
const CARD_HEIGHT = 270; // Exactly 16:9 aspect ratio
const MARGIN = 30;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/carousel/3.jpg",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/carousel/8.jpg",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/carousel/8.jpg",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];

const Features = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => CAN_SHIFT_LEFT && setOffset((pv) => pv + CARD_SIZE);
  const shiftRight = () => CAN_SHIFT_RIGHT && setOffset((pv) => pv - CARD_SIZE);

  return (
    <section className="bg-slate-50 py-10" ref={ref}>
      <div className="relative overflow-hidden p-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-5xl">The Team Blog</h2>
            <div className="flex items-center gap-3">
              <button
                className={`rounded-xl border-[1px] border-neutral-400 bg-white p-2 text-3xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-xl border-[1px] border-neutral-400 bg-white p-2 text-3xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          <motion.div
            animate={{ x: offset }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="flex"
          >
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type PostProps = PostType;

const Post = ({ imgUrl, author, title, description }: PostProps) => (
  <div
    className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-2"
    style={{ width: CARD_WIDTH, marginRight: MARGIN }}
  >
    <img
      src={imgUrl}
      className={`mb-4 h-[${CARD_HEIGHT}px] w-full rounded-lg object-cover`}
      alt={`An image for a blog post titled ${title}`}
    />
    <span className="rounded-md border-[1px] border-neutral-500 px-2 py-1 text-sm uppercase text-neutral-500">
      {author}
    </span>
    <p className="mt-2 text-xl font-semibold">{title}</p>
    <p className="text-base text-neutral-600">{description}</p>
  </div>
);

export default Features;
