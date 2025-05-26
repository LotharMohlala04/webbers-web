"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { ChevronUp, Trash2 } from "lucide-react";

// const sortOptions = [
//   { name: "Most Popular", href: "#", current: true },
//   { name: "Best Rating", href: "#", current: false },
//   { name: "Newest", href: "#", current: false },
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ];

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
// const filters = [
//   {
//     id: 'color',
//     name: 'Color',
//     options: [
//       { value: 'white', label: 'White', checked: false },
//       { value: 'beige', label: 'Beige', checked: false },
//       { value: 'blue', label: 'Blue', checked: true },
//       { value: 'brown', label: 'Brown', checked: false },
//       { value: 'green', label: 'Green', checked: false },
//       { value: 'purple', label: 'Purple', checked: false },
//     ],
//   },
//   {
//     id: 'category',
//     name: 'Category',
//     options: [
//       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//       { value: 'sale', label: 'Sale', checked: false },
//       { value: 'travel', label: 'Travel', checked: true },
//       { value: 'organization', label: 'Organization', checked: false },
//       { value: 'accessories', label: 'Accessories', checked: false },
//     ],
//   },
//   {
//     id: 'size',
//     name: 'Size',
//     options: [
//       { value: '2l', label: '2L', checked: false },
//       { value: '6l', label: '6L', checked: false },
//       { value: '12l', label: '12L', checked: false },
//       { value: '18l', label: '18L', checked: false },
//       { value: '20l', label: '20L', checked: false },
//       { value: '40l', label: '40L', checked: true },
//     ],
//   },
// ]

//const currency = "R";
const products = [
  {
    sku: "01848",
    productName: "Nomad Pouch",
    href: "#",
    price: 50,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Dino Salvatori",
    availability: "White and Black",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-01.jpg",
    description:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
    dateAdded: new Date("2024-11-03"),
  },
  {
    sku: "01849",
    productName: "Zip Tote Basket",
    href: "#",
    price: 140,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Dino Salvatori",
    availability: "Washed Black",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg",
    description:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    dateAdded: new Date("2024-10-03"),
  },
  {
    sku: "01850",
    productName: "Canvas Backpack",
    href: "#",
    price: 250,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Dino Salvatori",
    availability: "Olive Green",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-03.jpg",
    description: "Canvas backpack in olive green with leather trim.",
    dateAdded: new Date("2024-05-03"),
  },
  {
    sku: "01851",
    productName: "Leather Wallet",
    href: "#",
    price: 120,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Nike",
    availability: "Brown",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-04.jpg",
    description: "Brown leather wallet with multiple card slots.",
    dateAdded: new Date("2025-11-03"),
  },
  {
    sku: "01852",
    productName: "Duffel Bag",
    href: "#",
    price: 280,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Nike",
    availability: "Navy Blue",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-05.jpg",
    description: "Navy blue duffel bag with side pockets.",
    dateAdded: new Date("2025-10-03"),
  },
  {
    sku: "01853",
    productName: "Crossbody Bag",
    href: "#",
    price: 180,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Dino Salvatori",
    availability: "Black",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-06.jpg",
    description: "Black crossbody bag with adjustable strap.",
    dateAdded: new Date("2023-11-03"),
  },
  {
    sku: "01854",
    productName: "Belt",
    href: "#",
    price: 80,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Dino Salvatori",
    availability: "Black",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-07.jpg",
    description: "Black leather belt with silver buckle.",
    dateAdded: new Date("2023-12-13"),
  },
  {
    sku: "01855",
    productName: "Card Holder",
    href: "#",
    price: 35,
    colours: ["Beige", "Petrol Blue", "Camel", "Tan"],
    brandDescription: "Lucci",
    availability: "Tan",
    productPageImage:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-08.jpg",
    description: "Tan leather card holder with multiple slots.",
    dateAdded: new Date("2024-01-03"),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Catalogue() {
  const { group, category, style } = useParams();

  const priceRanges = [
    {
      id: "price-0",
      min: 0,
      max: 99.99,
      label: "R 0 - R 99.99",
      count: 0,
    },
    {
      id: "price-1",
      min: 100,
      max: 199.99,
      label: "R 100.00 - R 199.99",
      count: 0,
    },
    {
      id: "price-2",
      min: 200,
      max: 299.99,
      label: "R 200.00 - R 299.99",
      count: 0,
    },
  ];

  // Define brands
  const brands = [
    { id: "brand-0", name: "Dino Salvatori", count: 0 },
    { id: "brand-1", name: "Nike", count: 0 },
    { id: "brand-2", name: "Lucci", count: 0 },
  ];

  // State for filters
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Most Popular");

  const applyFilters = () => {
    let filtered = [...products];

    // Apply price filters
    if (selectedPrices.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedPrices.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return product.price >= range.min && product.price <= range.max;
        });
      });
    }

    // Apply brand filters
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedBrands.some((brandId) => {
          const brand = brands.find((b) => b.id === brandId);
          return product.brandDescription === brand.name;
        });
      });
    }

    setFilteredProducts(filtered);

    // Update active filters
    const newActiveFilters = [];

    if (selectedPrices.length > 0) {
      newActiveFilters.push({
        type: "Price",
        value: `R ${
          priceRanges.find((r) => r.id === selectedPrices[0]).min
        } - R ${
          priceRanges.find(
            (r) => r.id === selectedPrices[selectedPrices.length - 1]
          ).max
        }`,
      });
    }

    if (selectedBrands.length > 0) {
      selectedBrands.forEach((brandId) => {
        const brand = brands.find((b) => b.id === brandId);
        newActiveFilters.push({
          type: "Brand",
          value: brand.name,
        });
      });
    }

    setActiveFilters(newActiveFilters);
  };

  // Function to handle price filter changes
  const handlePriceChange = (priceId) => {
    setSelectedPrices((prev) => {
      if (prev.includes(priceId)) {
        return prev.filter((id) => id !== priceId);
      } else {
        return [...prev, priceId];
      }
    });
  };

  // Function to handle brand filter changes
  const handleBrandChange = (brandId) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brandId)) {
        return prev.filter((id) => id !== brandId);
      } else {
        return [...prev, brandId];
      }
    });
  };

  // Function to clear all filters
  const clearAllFilters = () => {
    setSelectedPrices([]);
    setSelectedBrands([]);
    setActiveFilters([]);
    setFilteredProducts(products);
  };

  // Function to remove a specific filter
  const removeFilter = (filterType) => {
    if (filterType === "Price") {
      setSelectedPrices([]);
    } else if (filterType === "Brand") {
      setSelectedBrands([]);
    }
  };

  // Sort options matching the image
  const sortOptions = [
    { name: "Newest", function: sortByNewest },
    { name: "Price: Low to High", function: sortByPriceLowToHigh },
    { name: "Price: High to Low", function: sortByPriceHighToLow },
    { name: "Product Name", function: sortByName },
  ];

  // Sorting functions
  function sortByName(a, b) {
    return a.productName.localeCompare(b.productName);
  }

  function sortByNewest(a, b) {
    return b.dateAdded - a.dateAdded;
  }

  function sortByPriceLowToHigh(a, b) {
    return a.price - b.price;
  }

  function sortByPriceHighToLow(a, b) {
    return b.price - a.price;
  }

  // Calculate counts for each filter
  useEffect(() => {
    // Count products in each price range
    priceRanges.forEach((range) => {
      range.count = products.filter(
        (product) => product.price >= range.min && product.price <= range.max
      ).length;
    });

    // Count products for each brand
    brands.forEach((brand) => {
      brand.count = products.filter(
        (product) => product.brandDescription === brand.name
      ).length;
    });

    // Apply filters
    applyFilters();
  }, [selectedPrices, selectedBrands]);

  useEffect(() => {
    const selectedSortFunction =
      sortOptions.find((option) => option.name === sortOption)?.function ||
      sortOptions[0].function;
    const sortedProducts = [...filteredProducts].sort(selectedSortFunction);
    setFilteredProducts(sortedProducts);
  }, [sortOption]);

  const handleSortSelection = (option) => {
    setSortOption(option);
  };

  return (
    <div className="bg-gray-100">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <p className="px-4 text-sm py-1 font-medium text-gray-900">
                  {filteredProducts.length} Items
                </p>
                <hr className="h-px w-full bg-gray-200 border-0 my-4" />
                {activeFilters.length > 0 && (
                  <div className="mb-6 px-4">
                    <h2 className="font-medium mb-2">
                      Now Shopping By ({activeFilters.length})
                    </h2>

                    {activeFilters.map((filter, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <div>
                          <span className="font-medium">{filter.type}: </span>
                          <span className="text-gray-500">{filter.value}</span>
                        </div>
                        <button
                          onClick={() => removeFilter(filter.type)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={clearAllFilters}
                      className="border border-gray-300 w-full py-2 px-4 mt-2 hover:bg-gray-50"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}

                {style && (
                  <>
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <Disclosure
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-gray-100 px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        Price{" "}
                        {selectedPrices.length > 0 &&
                          `(${selectedPrices.length})`}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-5 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>

                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {priceRanges.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                id={`filter-mobile-${option.id}-${optionIdx}`}
                                type="checkbox"
                                checked={selectedPrices.includes(option.id)}
                                onChange={() => handlePriceChange(option.id)}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-mobile-${0}-${0}`}
                            className="min-w-0 flex-1 text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-gray-100 px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        Brand{" "}
                        {selectedBrands.length > 0 &&
                          `(${selectedBrands.length})`}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-5 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>

                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {brands.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                id={`filter-mobile-${option.id}-${optionIdx}`}
                                type="checkbox"
                                checked={selectedBrands.includes(option.id)}
                                onChange={() => handleBrandChange(option.id)}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-mobile-${0}-${0}`}
                            className="min-w-0 flex-1 text-gray-500"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <section aria-labelledby="slideshow" className="flex">
        <div className="min-w-full relative flex-shrink-0 h-3/4">
          <img
            src="https://www.shutterstock.com/image-vector/brush-sale-banner-promotion-ribbon-260nw-1182942766.jpg"
            alt="image-holder-1"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-16 pb-6">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol role="list" className="flex items-center space-x-2">
                <li key={"breadcrumb1"}>
                  <div className="flex items-center text-sm">
                    {group}

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

                <li key={"breadcrumb2"}>
                  <div className="flex items-center text-sm">
                    <a
                      href={`${category}`}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {category}
                    </a>

                    {style && (
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="ml-2 size-5 shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    )}
                  </div>
                </li>

                {style && (
                  <li key={"breadcrumb3"}>
                    <div className="flex items-center text-sm">{style}</div>
                  </li>
                )}
              </ol>
            </nav>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          onClick={() => handleSortSelection(option.name)}
                          className={classNames(
                            sortOption === option.name
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <p className="text-sm py-1 font-medium text-gray-900 mb-5">
                  {filteredProducts.length} Items
                </p>
                {!style && (
                  <hr className="h-px w-full bg-gray-200 border-0 mb-4" />
                )}
                {activeFilters.length > 0 && (
                  <div className="mb-6 px-4">
                    <h2 className="font-medium mb-2">
                      Now Shopping By ({activeFilters.length})
                    </h2>

                    {activeFilters.map((filter, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <div>
                          <span className="font-medium">{filter.type}: </span>
                          <span className="text-gray-500">{filter.value}</span>
                        </div>
                        <button
                          onClick={() => removeFilter(filter.type)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={clearAllFilters}
                      className="border border-gray-300 w-full py-2 px-4 mt-2 hover:bg-gray-50"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
                <h3 className="sr-only">Categories</h3>
                {!style && (
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>
                )}

                <Disclosure
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-gray-100 px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        Price{" "}
                        {selectedPrices.length > 0 &&
                          `(${selectedPrices.length})`}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-5 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>

                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {priceRanges.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                id={`filter-mobile-${option.id}-${optionIdx}`}
                                type="checkbox"
                                checked={selectedPrices.includes(option.id)}
                                onChange={() => handlePriceChange(option.id)}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-mobile-${0}-${0}`}
                            className="min-w-0 flex-1 text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-gray-100 px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        Brand{" "}
                        {selectedBrands.length > 0 &&
                          `(${selectedBrands.length})`}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="size-5 group-data-open:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>

                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {brands.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                id={`filter-mobile-${option.id}-${optionIdx}`}
                                type="checkbox"
                                checked={selectedBrands.includes(option.id)}
                                onChange={() => handleBrandChange(option.id)}
                                //defaultValue={option.value}
                                //defaultChecked={option.checked}
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-mobile-${0}-${0}`}
                            className="min-w-0 flex-1 text-gray-500"
                          >
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
