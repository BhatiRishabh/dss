// app/components/PreReq.tsx
import { motion } from "framer-motion";
import { IdCard, Laptop, Droplet } from "lucide-react";

export default function PreReq() {
  const items = [
    { icon: <IdCard className="h-8 w-8" />, text: "A valid Government-issued Photo ID" },
    { icon: <Laptop className="h-8 w-8" />, text: "A laptop with its charger" },
    { icon: <Droplet className="h-8 w-8" />, text: "Your Own Water bottle" },
  ];

  return (
    <section className="bg-slate-50 px-8 py-20 md:px-40">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Text column */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-krona leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8ECFF] via-[#56C1FF] to-[#EA80FC]">
              DSS 2025
            </span>
            <br />
            What to Bring
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Stay ready for the 5-day DSS event and secure entry to IIIT Delhi with these essentials.
          </p>
        </div>

        {/* Stylish list column */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="md:w-1/2 grid grid-cols-1 gap-6"
        >
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 rounded-2xl bg-white shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-indigo-500">{item.icon}</div>
              <span className="text-base md:text-lg font-medium text-gray-800">
                {item.text}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
