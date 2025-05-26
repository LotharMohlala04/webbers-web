import React from "react";

export default function RelatedProduct({
  key,
  description,
  image,
  name,
  price,
}) {
  return (
    <>
      <div key={key}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img
              alt={description}
              src={image}
              className="size-full object-cover"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black opacity-50"
            />
            <p className="relative text-lg font-semibold text-white">
              R{price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
