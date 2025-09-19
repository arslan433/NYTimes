"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-6 pt-15">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="text-5xl font-extrabold mb-6 text-blue-400"
      >
        Get in Touch 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-300 mb-10 text-center max-w-xl"
      >
        Have a project in mind or just want to say hi? Drop me a message and
        let's create something amazing together 
      </motion.p>

      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-5"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-black/40 border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-black/40 border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-md bg-black/40 border border-gray-600 focus:outline-none focus:border-blue-500"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-blue-600 rounded-md font-semibold text-white shadow-md transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex gap-6 mt-10 text-2xl"
      >
        <a href="mailto:your@email.com" className="hover:text-blue-400">
          
        </a>
        <a href="https://github.com/yourprofile" className="hover:text-blue-400">
          
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-400">
          
        </a>
      </motion.div>
    </div>
  );
}
