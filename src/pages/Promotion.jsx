// src/App.jsx
import React from "react";
import PromoCard from "../components/PromoCard";

function Promotion() {
  const promotions = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/47/95/67/4795676ad5e2e4184c85d7eab64880db.jpg",
      label: "2 FOR R500",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/47/95/67/4795676ad5e2e4184c85d7eab64880db.jpg",
      label: "2 FOR R180",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/47/95/67/4795676ad5e2e4184c85d7eab64880db.jpg",
      label: "2 FOR R200",
    },
  ];

  return (
    <div className="bg-gray-100">
      <section aria-labelledby="slideshow" className="flex">
        <div className="min-w-full relative flex-shrink-0 h-3/4">
          <img
            src="https://www.shutterstock.com/image-vector/brush-sale-banner-promotion-ribbon-260nw-1182942766.jpg"
            alt="image-holder-1"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <div className="space-y-6 w-3/5 mx-auto p-6">
        {promotions.map((promo) => (
          <PromoCard key={promo.id} img={promo.img} label={promo.label} />
        ))}
      </div>
    </div>
  );
}

export default Promotion;
