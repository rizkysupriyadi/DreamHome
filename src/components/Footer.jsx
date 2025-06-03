import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 py-12 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-20 text-sm text-gray-700">
        {/* Brand - Sendiri */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-orange-500 mb-3">DreamHome</h3>
          <p className="text-gray-600">
            Your trusted real estate partner for finding dream properties across the country.
          </p>
        </div>

        {/* Grouped Sections */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Resources</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <p className="text-gray-600">support@dreamhome.com</p>
            <p className="text-gray-600 mt-1">+1 (800) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} DreamHome. All rights reserved.
      </div>
    </footer>
  );
}
