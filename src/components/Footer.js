"use client";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-gray-300 py-6 mt-22">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} -
          <span className=" font-semibold"> Made by & Designed by Arslan</span> 
        </p>
      </div>
    </footer>
  );
}
