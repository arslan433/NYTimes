"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-md mb-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-white">
          NYT<span className="text-blue-500"> Books</span>
        </Link>

        <div className="hidden md:flex space-x-6 relative">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href);

            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="text-white font-medium px-2 py-1 relative"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 rounded"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

  {open && (
  <div className="md:hidden bg-black/90 px-4 py-3 space-y-3">
    {links.map((link) => {
      // ✅ Home ke liye exact match, baaki ke liye startsWith
      const isActive =
        link.href === "/"
          ? pathname === "/"
          : pathname.startsWith(link.href);

      return (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className={`block text-white font-medium px-2 py-1 rounded-md ${
            isActive ? "bg-blue-600" : "hover:bg-white/10"
          }`}
        >
          {link.label}
        </Link>
      );
    })}
  </div>
)}
    </nav>
  );
}
