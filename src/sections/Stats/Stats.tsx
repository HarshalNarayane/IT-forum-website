"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";

export default function Stats() {
  return (
    <section id="stats" className="bg-[#050816] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.4em] text-blue-400">
            OUR IMPACT
          </p>

          <h2 className="text-5xl font-bold">Numbers That Speak</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteData.stats.map((item, index) => (
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
              <h3 className="text-6xl font-black text-blue-400">
                {item.value}
                {item.suffix}
              </h3>

              <p className="mt-4 text-lg text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
