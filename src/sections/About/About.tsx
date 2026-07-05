"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-[#0B1120] py-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-semibold uppercase tracking-[0.4em] text-blue-400">
            {siteData.about.badge}
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            {siteData.about.title}
          </h2>

          <p className="mb-10 text-lg leading-8 text-gray-400">
            {siteData.about.description}
          </p>

          <div className="grid gap-5">
            {siteData.about.features.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <CheckCircle2 className="text-blue-500" />

                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="flex h-[500px] w-full max-w-md items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 text-center">
            <div>
              <p className="text-lg text-gray-400">Future College Image</p>

              <p className="mt-2 text-sm text-gray-500">
                Replace with your department photo later
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
