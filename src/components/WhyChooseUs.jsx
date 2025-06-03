import React from "react";

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-orange-50 text-gray-800"
      data-aos="zoom-in"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 uppercase md:text-lg text-xs font-semibold tracking-wide mb-4">
          Our Unique Benefits
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
          {features.map(({ title, description, icon }, index) => (
            <div
              key={title}
              className="group p-6 rounded-2xl shadow-md bg-white hover:bg-orange-500 hover:shadow-lg transition duration-300 cursor-default text-gray-800 hover:text-white"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 transition duration-300 group-hover:text-white text-orange-400">
                {icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 transition duration-300">
                {title}
              </h3>
              <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed transition duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Wide Selection of Homes",
    description:
      "From modern city apartments to cozy countryside houses, we list properties that fit all lifestyles and budgets.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Personalized Support",
    description:
      "Our agents are ready to guide you every step of the way — from browsing to moving in.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 21c-4-4-8-7-8-11a8 8 0 1 1 16 0c0 4-4 7-8 11z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Transparent & Secure",
    description:
      "No hidden fees. No surprises. Just clear, honest real estate services you can trust.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2 .896 2 2-.896 2-2 2" />
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
      </svg>
    ),
  },
];
