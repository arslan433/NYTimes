"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center  overflow-hidden">
            <motion.h1
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="text-[8rem] font-extrabold text-blue-500 drop-shadow-lg"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl mb-6"
            >
                Oops! Page not found
            </motion.p>

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mb-8"
            >
                <span className="text-5xl"></span>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href="/"
                    className="px-6 py-3 bg-black/70 rounded-md font-semibold hover:bg-black/90 transition-colors dark:text-white"
                >
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
}
