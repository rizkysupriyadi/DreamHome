import React, { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern Family House in Greenfield",
    details: "4 Beds · 3 Baths · 2,200 sqft",
    price: "Starting from $350,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Downtown Apartment with City View",
    details: "2 Beds · 2 Baths · 1,200 sqft",
    price: "Starting from $280,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    id: 3,
    title: "Cozy Cottage Near the Lake",
    details: "3 Beds · 2 Baths · 1,800 sqft",
    price: "Starting from $310,000",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    id: 4,
    title: "Luxury Villa in Beverly Hills",
    details: "5 Beds · 4 Baths · 4,500 sqft",
    price: "Starting from $1,200,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    id: 5,
    title: "Minimalist House in Suburbs",
    details: "3 Beds · 2 Baths · 1,600 sqft",
    price: "Starting from $290,000",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", // updated: fix Unsplash hotlinking issue
  },
];

export default function FeaturedProperties() {
  const [showAll, setShowAll] = useState(false);
  const visibleProperties = showAll ? properties : properties.slice(0, 3);

  return (
    <section
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          className="text-orange-500 uppercase text-xs md:text-lg font-semibold tracking-wide mb-4"
          data-aos="fade-up"
        >
          Featured Listings
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14" data-aos="fade-up">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {visibleProperties.map((property, index) => (
            <div
              key={property.id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-1">{property.details}</p>
                <p className="text-orange-500 font-semibold mb-4">{property.price}</p>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          data-aos="fade-up"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
}
