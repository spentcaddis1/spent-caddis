"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <a href="/">
          <Image
            src="/logo.png"
            alt="Spent Caddis"
            width={180}
            height={90}
            className="h-auto"
            priority
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 uppercase tracking-wide text-white font-semibold text-sm">

          <a href="/" className="hover:text-green-300 transition">
            Home
          </a>

          <a href="/shop" className="hover:text-green-300 transition">
            Shop
          </a>

          <a href="/videos" className="hover:text-green-300 transition">
            Videos
          </a>

          <a href="/shipping" className="hover:text-green-300 transition">
            Shipping
          </a>

          <a href="/about" className="hover:text-green-300 transition">
            About Us
          </a>

          <a href="/contact" className="hover:text-green-300 transition">
            Contact
          </a>

        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-white text-2xl">

          <button className="hover:text-green-300 transition">
            🔍
          </button>

          <button className="hover:text-green-300 transition">
            👤
          </button>

          <button className="relative hover:text-green-300 transition">
            🛒

            <span className="absolute -top-2 -right-2 bg-green-700 rounded-full w-5 h-5 text-xs flex items-center justify-center">
              0
            </span>

          </button>

        </div>

      </nav>
    </header>
  );
}