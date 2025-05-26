"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/webbers.png";

// const groups = [{"id":1,"description":"Mens","bannerImage":"url_here"},
//     {"id":2,"description":"Ladies","bannerImage":"url_here"},
//     {"id":3,"description":"Boys","bannerImage":"url_here"},
//     {"id":4,"description":"Girls","bannerImage":"url_here"}];

// const categories = [{"id":1,"description":"Pants",
//     "groupId":1,"groupDescription":"Mens","sortKey":10},
//     {"id":2,"description":"Shoes"
//     ,"groupId":1,"groupDescription":"Mens","sortKey":28},
//     {"id":3,"description":"Shirts",
//     "groupId":1,"groupDescription":"Mens","sortKey":9}];

// const groupStyles = [{"id":1,"description":"Long Sleeve",
//     "categoryId":3,"categoryDescription":"Shirts",
//     "groupId":1,"groupDescription":"Mens"},
//     {"id":3,"description":"Hi Top",
//     "categoryId":2,"categoryDescription":"Shoes",
//     "groupId":1,"groupDescription":"Mens"}];

const navigation = {
  categories: [
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "chino",
          name: "Chino",
          items: [
            { name: "Slim", href: "#" },
            { name: "Skinny", href: "#" },
          ],
        },
        {
          id: "sweaters",
          name: "Sweaters",
          items: [{ name: "Sweaters", href: "#" }],
        },
        {
          id: "footwear",
          name: "Footwear",
          items: [
            { name: "Boots", href: "#" },
            { name: "Casual", href: "#" },
            { name: "Formal", href: "#" },
          ],
        },
        {
          id: "sweaters",
          name: "Sweaters",
          items: [{ name: "Sweaters", href: "#" }],
        },
        {
          id: "footwear",
          name: "Footwear",
          items: [
            { name: "Boots", href: "#" },
            { name: "Casual", href: "#" },
            { name: "Formal", href: "#" },
          ],
        },
        {
          id: "denim",
          name: "Denim",
          items: [
            { name: "Slim", href: "#" },
            { name: "Skinny", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
      ],
    },
    {
      id: "boys",
      name: "Boys",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "chino",
          name: "Chino",
          items: [
            { name: "Slim", href: "#" },
            { name: "Skinny", href: "#" },
          ],
        },
        {
          id: "sweaters",
          name: "Sweaters",
          items: [{ name: "Sweaters", href: "#" }],
        },
        {
          id: "footwear",
          name: "Footwear",
          items: [
            { name: "Boots", href: "#" },
            { name: "Casual", href: "#" },
            { name: "Formal", href: "#" },
          ],
        },
        {
          id: "sweaters",
          name: "Sweaters",
          items: [{ name: "Sweaters", href: "#" }],
        },
        {
          id: "footwear",
          name: "Footwear",
          items: [
            { name: "Boots", href: "#" },
            { name: "Casual", href: "#" },
            { name: "Formal", href: "#" },
          ],
        },
        {
          id: "denim",
          name: "Denim",
          items: [
            { name: "Slim", href: "#" },
            { name: "Skinny", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
      ],
    },
    {
      id: "ladies",
      name: "Ladies",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "girls",
      name: "Girls",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Promotions", href: "/promotion" },
    { name: "New Arrivals", href: "/newarrivals" },
    { name: "Sale", href: "/sale" },
  ],
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // Implement search functionality here
  };

  return (
    <div className="border-b border-gray-200">
      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pt-10 pb-8"
                  >
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page, index) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className={`-m-2 block p-2 font-medium ${
                      index === navigation.pages.length - 1
                        ? "text-red-600"
                        : "text-gray-900"
                    }`}
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <div className="flex h-14 items-center justify-end bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:mr-8">
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-6">
              <a
                href="/storelocator"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Find a Store
              </a>
              <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Lay-Byes
              </a>
              <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
              <a
                href="/contact"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="/">
                <span className="sr-only">Webbers</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
            </div>

            {/* Flyout menus */}
            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    <div className="relative flex">
                      <PopoverButton className="relative z-10 -mb-px flex items-center hover:border-b-3 hover:border-red-600 pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-red-600 data-open:border-b-4 data-open:border-red-600 data-open:text-red-600">
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      transition
                      className="absolute inset-x-0 top-full z-20 text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 top-1/2 bg-white shadow-sm"
                      />

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-base sm:text-sm"
                                >
                                  <img
                                    alt={item.imageAlt}
                                    src={item.imageSrc}
                                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                  />
                                  <a
                                    href={item.href}
                                    className="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 z-10"
                                    />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>
                            <div className="row-start-1 columns-3 gap-x-8 text-sm">
                              {category.sections.map((section) => (
                                <div
                                  key={section.name}
                                  className="break-inside-avoid mb-10"
                                >
                                  <p
                                    id={`${section.name}-heading`}
                                    className="font-medium text-gray-900"
                                  >
                                    <a
                                      href={`/catalogue/${category.name}/${section.name}`}
                                      className="hover:text-gray-800"
                                    >
                                      {section.name}
                                    </a>
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={`/catalogue/${category.name}/${section.name}/${item.name}`}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                ))}

                {navigation.pages.map((page, index) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className={`flex items-center text-sm font-medium ${
                      index === navigation.pages.length - 1
                        ? "text-red-500 hover:text-red-800"
                        : "text-gray-700 hover:text-gray-800"
                    }`}
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </PopoverGroup>

            <div className="ml-auto flex items-center">
              <div className="flex">
                <div className="max-w-xl mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search entire store here..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full p-2 pl-4 pr-12 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder-gray-500 text-sm"
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button
                      onClick={handleSearch}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label="Search"
                    >
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-6"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
