"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="text-5xl font-extrabold mb-6 text-black"
      >
        Get in Touch 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg  mb-10 text-center max-w-xl"
      >
        Have a project in mind or just want to say hi? Drop me a message and
        let's create something amazing together 
      </motion.p>

      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-3"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-black/10 border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-black/10 border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-md bg-black/10 border border-gray-600 focus:outline-none focus:border-blue-500"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-black/20 rounded-md font-semibold shadow-md transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>

     
    </div>
  );
}
