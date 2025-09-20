"use client";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} -
          <span className=" font-semibold"> Made by & Designed by Arslan</span> 
        </p>

        {/* Right Side (optional links) */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="https://github.com/arslan433" className="hover:text-blue-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:arslanpc65@gmail.com" className="hover:text-blue-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
