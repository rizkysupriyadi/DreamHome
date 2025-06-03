import React, { useState } from "react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow bg-white fixed top-0 left-0 z-50 gap-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-9 h-8" />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-10 text-gray-900 absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out shadow-md md:shadow-none ${isOpen ? "top-16" : "-top-[500px]"}`}>
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Properties</a></li>
          <li><a href="#" className="hover:text-orange-500">About us</a></li>
          <li><a href="#" className="hover:text-orange-500">Testimonials</a></li>
          <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          <li className="md:hidden">
            <button className="bg-orange-500 text-white w-full py-2.5 rounded-lg font-medium shadow hover:bg-orange-400 transition">Sign in</button>
          </li>
        </ul>

        {/* Desktop Sign in */}
        <div className="hidden md:block">
          <button className="bg-orange-500 text-white px-8 py-2.5 rounded-lg font-medium shadow hover:bg-orange-400 transition">Sign in</button>
        </div>
      </div>
    </nav>
  );
}

