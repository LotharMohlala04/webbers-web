import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Phone } from "lucide-react";

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("Gauteng");
  const [selectedCity, setSelectedCity] = useState("Alberton");
  const [expandedProvinces, setExpandedProvinces] = useState({
    Gauteng: true,
    "Eastern Cape": false,
    Mpumalanga: false,
  });

  // Store data
  const stores = {
    Gauteng: {
      Alberton: [
        {
          name: "Alberton Mall",
          address:
            "Shop L120, Cnr. Voortrekker & Du Plessis Roads, Alberton, Gauteng 0044 Alberton",
          phone: "068 5065 907",
        },
        {
          name: "Alberton Mall",
          address:
            "Shop L120, Cnr. Voortrekker & Du Plessis Roads, Alberton, Gauteng 0044 Alberton",
          phone: "068 5065 907",
        },
        {
          name: "Alberton Mall",
          address:
            "Shop L120, Cnr. Voortrekker & Du Plessis Roads, Alberton, Gauteng 0044 Alberton",
          phone: "068 5065 907",
        },
        {
          name: "Alberton Mall",
          address:
            "Shop L120, Cnr. Voortrekker & Du Plessis Roads, Alberton, Gauteng 0044 Alberton",
          phone: "068 5065 907",
        },
        {
          name: "Alberton Mall",
          address:
            "Shop L120, Cnr. Voortrekker & Du Plessis Roads, Alberton, Gauteng 0044 Alberton",
          phone: "068 5065 907",
        },
      ],
      Midrand: [
        {
          name: "The Boulders Centre",
          address:
            "Shop 37, 38 & 39, The Boulders SC, Cnr. Old PTA Road & Halfway House, Midrand 0044 Midrand",
          phone: "068 5938 411",
        },
      ],
    },
  };

  const cities = {
    Gauteng: [
      "Alberton",
      "Alexandra",
      "Atteridgeville",
      "Benoni",
      "Cape Town",
      "Daveyton",
      "Evaton",
      "Ga-Rankuwa",
      "Germiston",
      "Hammanskraal",
      "Hebron",
      "Johannesburg",
      "Katlehong",
      "Kempton Park",
      "Mabopane",
      "Mamelodi",
      "Midrand",
      "Orange Farm",
      "Pretoria",
      "Randburg",
      "Roodepoort",
      "Sebokeng",
      "Soshanguve",
      "Soweto",
      "Springs",
      "Tembisa",
      "Tsakane",
      "Vereeniging",
      "Vosloorus",
      "Van Der Bijl Park",
    ],
  };

  const toggleProvince = (province) => {
    setSelectedProvince(province);
    setExpandedProvinces((prev) => ({
      ...prev,
      [province]: !prev[province],
    }));
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const getCurrentStores = () => {
    return stores[selectedProvince]?.[selectedCity] || [];
  };

  const getFilteredResults = () => {
    if (!searchTerm.trim()) return null;

    const results = [];
    const searchLower = searchTerm.toLowerCase();

    // Search through all provinces and cities
    Object.keys(stores).forEach((province) => {
      Object.keys(stores[province]).forEach((city) => {
        // Check if city matches search term
        if (city.toLowerCase().includes(searchLower)) {
          const cityStores = stores[province][city];
          results.push({
            province,
            city,
            stores: cityStores,
          });
        } else {
          // Check if any store name matches search term
          const matchingStores = stores[province][city].filter((store) =>
            store.name.toLowerCase().includes(searchLower)
          );
          if (matchingStores.length > 0) {
            results.push({
              province,
              city,
              stores: matchingStores,
            });
          }
        }
      });
    });

    return results;
  };

  const filteredResults = getFilteredResults();
  const totalMatches = filteredResults
    ? filteredResults.reduce((sum, result) => sum + result.stores.length, 0)
    : 0;

  const renderCityGrid = () => {
    const provinceCities = cities[selectedProvince] || [];
    const rows = [];

    for (let i = 0; i < provinceCities.length; i += 4) {
      const rowCities = provinceCities.slice(i, i + 4);
      const hasSelectedCity = rowCities.includes(selectedCity);

      // Add the city row
      rows.push(
        <div key={i} className="grid grid-cols-4 gap-4 mb-2">
          {rowCities.map((city) => (
            <button
              key={city}
              onClick={() => handleCitySelect(city)}
              className={`flex items-center justify-between p-2 text-left border-none bg-transparent hover:bg-gray-50 ${
                selectedCity === city
                  ? "text-red-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              <span>{city}</span>
              <ChevronDown
                className={`w-4 h-4 ${
                  selectedCity === city
                    ? "text-red-600 rotate-180"
                    : "text-gray-400"
                }`}
              />
            </button>
          ))}
        </div>
      );

      // Add store results directly after the row containing the selected city
      if (hasSelectedCity && currentStores.length > 0) {
        rows.push(
          <div
            key={`stores-${i}`}
            className="col-span-4 mb-4 bg-gray-50 border border-gray-200 p-4"
          >
            <h3 className="text-lg font-medium mb-4 text-gray-800">
              Stores In {selectedCity} ({currentStores.length})
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {currentStores.map((store, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-4 mb-4 group relative"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {store.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {store.address}
                  </p>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-semibold text-gray-800">
                      {store.phone}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-sm font-semibold px-3 py-1 text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                      More Info
                    </button>
                    <button className="text-sm font-semibold px-3 py-1 bg-red-600 text-white hover:bg-red-700 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

    return rows;
  };

  const currentStores = getCurrentStores();

  return (
    <div className=" bg-gray-50">
      <main className="mx-auto max-w-7xl sm:px-6 sm:py-8 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Store Locator
        </h1>

        {/* Search Section */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="Enter a city, town or store"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border bg-white border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
            />
            <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {searchTerm.trim() && filteredResults
              ? `${totalMatches} stores found matching '${searchTerm}'`
              : "96 store locations"}
          </p>
        </div>

        {searchTerm.trim() && filteredResults ? (
          // Search Results View
          <div className="border border-gray-300">
            {filteredResults.map((result, index) => (
              <div key={index}>
                {/* Province Header */}
                <div className="border-b border-gray-300">
                  <div className="p-4 bg-gray-50">
                    <span className="text-lg font-medium text-gray-800">
                      {result.province}
                    </span>
                    <ChevronUp className="w-5 h-5 text-gray-600 float-right" />
                  </div>
                </div>

                {/* City with matching stores */}
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="text-red-600 font-medium">
                      {result.city}
                    </span>
                    <ChevronUp className="w-4 h-4 text-red-600 inline-block ml-2" />
                  </div>

                  {/* Store Results */}
                  <div className="bg-gray-50 border border-gray-200 p-4">
                    <h3 className="text-lg font-medium mb-4 text-gray-800">
                      Stores In {result.city} ({result.stores.length})
                    </h3>

                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                      {currentStores.map((store, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-200 p-4 mb-4 group relative"
                        >
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {store.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                            {store.address}
                          </p>
                          <div className="flex items-center text-sm text-gray-600 mb-4">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="font-semibold text-gray-800">
                              {store.phone}
                            </span>
                          </div>
                          <div className="flex gap-3">
                            <button className="text-sm font-semibold px-3 py-1 text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                              More Info
                            </button>
                            <button className="text-sm font-semibold px-3 py-1 bg-red-600 text-white hover:bg-red-700 transition-colors">
                              Get Directions
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Normal Province/City Grid View
          <div className="border border-gray-300">
            {/* Province Header */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleProvince("Gauteng")}
                className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg font-medium text-gray-800">
                  Gauteng
                </span>
                {expandedProvinces["Gauteng"] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* City Grid */}
            {expandedProvinces["Gauteng"] && (
              <div className="p-4 bg-white">{renderCityGrid()}</div>
            )}

            {/* Other Provinces */}
            <div className="border-t border-gray-300">
              <button
                onClick={() => toggleProvince("Eastern Cape")}
                className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg font-medium text-gray-800">
                  Eastern Cape
                </span>
                {expandedProvinces["Eastern Cape"] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            <div className="border-t border-gray-300">
              <button
                onClick={() => toggleProvince("Mpumalanga")}
                className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg font-medium text-gray-800">
                  Mpumalanga
                </span>
                {expandedProvinces["Mpumalanga"] ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StoreLocator;
