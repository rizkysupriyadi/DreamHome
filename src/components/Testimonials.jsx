import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    quote:
      "Finding my dream home was so easy with this platform. The support team was super helpful and the listings were just what I needed!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    position: "Investor",
    quote:
      "Very transparent and trustworthy! I’ve bought two properties through this platform and I couldn’t be happier.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Brown",
    position: "First-Time Buyer",
    quote:
      "I was nervous about buying my first house, but this site made the process smooth and stress-free!",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-orange-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 uppercase text-xs md:text-lg font-semibold tracking-wide mb-4">
          What Our Clients Say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
