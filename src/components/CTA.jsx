import React from "react";

export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-5xl mx-auto text-center"
      data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let’s Help You Find Your Perfect Home
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Browse thousands of properties and connect with trusted real estate agents now.
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
