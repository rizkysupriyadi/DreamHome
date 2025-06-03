import React from "react";
import gambar1 from "../assets/download.jpg";

export default function Hero() {
  return (
    <section className="mt-24 flex flex-col-reverse lg:flex-row items-start justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[400px] py-8 sm:py-20 gap-y-4 lg:gap-x-40 mb-6">
      
      {/* Kolom Teks */}
      <div className="w-full lg:w-[600px] text-center lg:text-left" data-aos="fade-right">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-normal mb-6 max-w-2xl mx-auto lg:mx-0">
          Find Your Dream Home With Ease
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
          Browse our handpicked selection of beautiful, affordable homes. Whether you're buying your first house or your forever home — we’ve got the perfect place for you.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4">
          <button className="bg-orange-500 text-white px-6 py-4 rounded-lg shadow hover:bg-orange-400 transition text-sm">
            Explore Properties
          </button>
          <button className="text-black-300 font-regular hover:text-orange-600 text-sm">
            Schedule a Free Consultation
          </button>
        </div>
      </div>

      {/* Kolom Gambar */}
      <div
        className="w-full lg:w-[48%] flex justify-center"
        data-aos="fade-left"
      >
        <img
          src={gambar1}
          alt="Hero"
          className="w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96 max-w-xs h-auto rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
