import React from "react";

const categories = [
  { name: "COTTAGE", image: "/house-images/cottage.jpg" },
  { name: "Bungalow", image: "/house-images/bunglow.jpg" },
  { name: "Duplex", image: "/house-images/duplex.jpg" },
  { name: "Condo Unit", image: "/house-images/condo.jpg" },
  { name: "Farmhouse", image: "/house-images/farmhouse.jpg" },
  { name: "2BHK", image: "/house-images/2BHK.jpg" },
];

function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-8">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-xl font-bold">{cat.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;

