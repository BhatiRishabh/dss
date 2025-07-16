// app/components/Merch.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Merch() {
  return (
    <section className="py-20 px-8 md:py-28 md:px-40">
      <div className="flex flex-col md:flex-row items-center gap-20">
        {/* Text column */}
        <div className="md:w-1/2">
<h1 className="sm:text-6xl md:text-7xl text-5xl pt-10 font-black font-krona text-left">
  <span className="bg-gradient-to-r from-[#D8ECFF] via-[#56C1FF] to-[#EA80FC] bg-clip-text text-transparent">
    DSS 2025
  </span>
  <br />
  Swag. Snacks. Vibes.
</h1>
<p className="mt-4 text-lg md:text-xl">
  Celebrate DSS 2025 with exclusive merchandise and a curated selection of gourmet food, designed for developers, innovators, and visionaries alike.
</p>


          {/* Call-to-action with scale only */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hidden sm:inline-block"
          >
            Reach out
          </motion.button> */}
          <Link href="https://forms.gle/qyqmH4FjPRoHP4iw8" target="_blank">
            <button className="pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3 text-2xl font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100 mt-6">
              Register
            </button>
          </Link>
        </div>

        {/* Image column with scale only */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/Merch.png"
            alt="DSS 2025 merch preview"
            width={800}
            height={600}
            priority
            className="max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
