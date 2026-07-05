"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb20,transparent_70%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-blue-400">
          JD College of Engineering and Management
        </p>

        <h1 className="text-6xl font-extrabold md:text-8xl">PRAGYAN</h1>

        <h2 className="mt-5 text-2xl font-light text-gray-300 md:text-4xl">
          Department of Information Technology
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Innovation. Leadership. Creativity. Technology. Building a community
          where students grow beyond the classroom through events, projects,
          hackathons and collaboration.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">
            Explore Events
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg transition hover:border-blue-500">
            Meet Our Team
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8"
      >
        <ChevronDown size={36} className="text-blue-400" />
      </motion.div>
    </section>
  );
}
