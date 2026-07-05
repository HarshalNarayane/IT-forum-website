"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const links = [
  "Home",
  "About",
  "Committees",
  "Events",
  "Projects",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide text-blue-500 transition duration-300 hover:text-blue-400"
        >
          {siteConfig.forumName}
        </a>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-sm font-medium text-gray-300 transition duration-300 hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Button */}
        <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:scale-105 hover:bg-blue-500">
          Join Us
        </button>
      </div>
    </motion.nav>
  );
}
