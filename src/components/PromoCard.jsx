// src/components/PromoCard.jsx
import React from "react";

const PromoCard = ({ img, label }) => {
  return (
    <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/3">
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{label}</h2>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
          Shop Promotion
        </button>
      </div>
    </div>
  );
};

export default PromoCard;