"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b  px-6 py-16">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="text-5xl font-extrabold  mb-6"
      >
        About This Project
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg  text-center max-w-3xl leading-relaxed mb-10"
      >
        This website is a <span className=" font-semibold">NYTimes</span> project
        that I created to showcase my skills in modern web development.
        It fetches and displays data from the{" "}
        <span className="font-semibold">New York Times API</span>,
        styled with <span className=" font-semibold">TailwindCSS</span>,
        animated using <span className=" font-semibold">Framer Motion</span>,
        and built on top of <span className=" font-semibold">Next.js App Router</span>.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl"
      >
        {[
          { name: "Next.js", color: "text-yelow-400" },
          { name: "TailwindCSS", color: "text-ble-400" },
          { name: "Framer Motion", color: "text-pik-400" },
          { name: "NYTimes API", color: "text-gren-400" },
        ].map((tech) => (
          <div
            key={tech.name}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center shadow-md hover:bg-white/20 transition"
          >
            <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
          </div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 text-gray-400 text-sm"
      >
        Build by <span className="font-semibold">Arslan</span>
      </motion.p>
    </div>
  );
}
