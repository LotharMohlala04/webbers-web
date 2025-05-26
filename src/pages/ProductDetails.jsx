"use client";

import { Fragment } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Share, ChevronRight } from "lucide-react";
import RelatedProduct from "../components/RelatedProduct";

// const product = {
//   name: "Zip Tote Basket",
//   price: "$140",
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: "Angled view",
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg",
//       alt: "Angled front view with bag zipped and handles upright.",
//     },
//     // More images...
//   ],
//   colors: [
//     {
//       name: "Washed Black",
//       bgColor: "bg-gray-700",
//       selectedColor: "ring-gray-700",
//     },
//     { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
//     {
//       name: "Washed Gray",
//       bgColor: "bg-gray-500",
//       selectedColor: "ring-gray-500",
//     },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: "Features",
//       items: [
//         "Multiple strap configurations",
//         "Spacious interior with top zip",
//         "Leather handle and tabs",
//         "Interior dividers",
//         "Stainless strap loops",
//         "Double stitched construction",
//         "Water-resistant",
//       ],
//     },
//     // More sections...
//   ],
//   breadcrumbs: [
//     { id: 1, name: "Travel", href: "#" },
//     { id: 2, name: "Bags", href: "#" },
//   ],
// };

const product = {
  Plu: "01848",
  sku: "01848",
  productName: "Mens Chino",
  price: 199.9,
  description: "Fixed waistband and belt loops. Machine washable.",
  brandId: 1,
  brandDescription: "Master",
  colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
  sizes: ["S", "M", "L", "XL"],
  groupId: 1,
  groupDescription: "Mens",
  categoryId: 1,
  categoryDescription: "Pants",
  styleId: 5,
  styleDescription: "Chinos",
  productPageImage:
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg",
  productPageImage2:
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-product-01.jpg",
  productListImage:
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-01.jpg",
  productListImage2:
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-product-01.jpg",
  galleryImages: [
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-03.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-04.jpg",
  ],
  newArrival: "false",
  newArrivalHomePage: "false",
  newArrivalGroupPage: "false",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
};

const relatedProducts = [
  {
    Plu: "01848",
    sku: "01848",
    productName: "Mens Chino",
    price: 199.9,
    description: "Fixed waistband and belt loops. Machine washable.",
    brandId: 1,
    brandDescription: "Master",
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    sizes: ["S", "M", "L", "XL"],
    groupId: 1,
    groupDescription: "Mens",
    categoryId: 1,
    categoryDescription: "Pants",
    styleId: 5,
    styleDescription: "Chinos",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-02.jpg",
    productPageImage2:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-product-01.jpg",
    productListImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-01.jpg",
    productListImage2:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-product-01.jpg",
    galleryImages: [
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-product-01.jpg",
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-product-01.jpg",
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-product-01.jpg",
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-01.jpg",
    ],
    newArrival: "false",
    newArrivalHomePage: "false",
    newArrivalGroupPage: "false",
    breadcrumbs: [
      { id: 1, name: "Travel", href: "#" },
      { id: 2, name: "Bags", href: "#" },
    ],
  },
  // More products...
];

export default function ProductDetails() {
  return (
    <div className="bg-gray-100">
      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol role="list" className="flex items-center space-x-2">
            <li key={product.groupDescription}>
              <div className="flex items-center text-sm">
                <a
                  href={product.groupDescription}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {product.groupDescription}
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="ml-2 size-5 shrink-0 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </div>
            </li>
            <li key={product.categoryDescription}>
              <div className="flex items-center text-sm">
                <a
                  href={product.categoryDescription}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {product.categoryDescription}
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="ml-2 size-5 shrink-0 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </div>
            </li>
            <li key={product.styleDescription}>
              <div className="flex items-center text-sm">
                <a
                  href={product.styleDescription}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {product.styleDescription}
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <TabGroup className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                  {product.galleryImages.map((image, index) => (
                    <Tab
                      key={index}
                      className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-red-500/50 focus:ring-offset-4 focus:outline-hidden"
                    >
                      <span className="sr-only">{image}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          alt=""
                          src={image}
                          className="size-full object-cover"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-red-500"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels>
                {product.galleryImages.map((image, index) => (
                  <TabPanel key={index}>
                    <img
                      alt={""}
                      src={image}
                      className="aspect-square w-full object-cover sm:rounded-lg"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-4 mb-4">
                <p className="text-2xl font-bold">{product.productName}</p>
              </div>

              <div className="mt-2 text-gray-500">
                <p>SKU: {product.sku}</p>
              </div>

              <div className="mt-4 mb-8">
                <p className="text-2xl font-bold">R{product.price}</p>
              </div>

              <hr className="h-px w-full bg-gray-200 border-0 my-6" />

              <a
                className="bg-red-500 text-white w-full py-3 px-4 flex items-center justify-between rounded"
                href="/storelocator"
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                  <span className="text-lg">Find in Store</span>
                </div>
                <ChevronRight size={20} />
              </a>

              <div className="mt-8">
                <div className="mb-2">Share it:</div>
                <div className="flex gap-2">
                  <button className="border border-gray-300 p-3 flex items-center justify-center w-12 h-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="border border-gray-300 p-3 flex items-center justify-center w-12 h-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>
                  <button className="border border-gray-300 p-3 flex items-center justify-center w-12 h-12">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M22 7l-10 7L2 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <RelatedProduct
                  key={product.Plu}
                  description={product.description}
                  image={product.productPageImage}
                  name={product.productName}
                  price={product.price}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
