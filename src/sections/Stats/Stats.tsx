"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#0b0f19] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 uppercase tracking-[0.4em] text-blue-400">
          OUR IMPACT
        </p>

        <h2 className="mb-16 text-5xl font-bold">Numbers That Speak</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="mb-3 text-5xl font-extrabold text-blue-400">
                {item.value}
                {item.suffix}
              </h3>

              <p className="text-lg text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
