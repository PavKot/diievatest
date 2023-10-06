import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

interface Product {
  collectionName: string;
  image: string;
  imageHover: string;
  name: string;
  price: string;
  link: string;
}

interface GlobalSearchProps {
  productData: Record<string, Product>;
  isSearchOpen: boolean; // Pass isSearchOpen prop
  toggleSearch: () => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({
  productData,
  isSearchOpen,
  toggleSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (isSearchOpen) {
      // Filter products based on the searchQuery
      const filteredProducts = Object.values(productData).filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Update the searchResults state with filtered products
      setSearchResults(filteredProducts);
    }
  }, [searchQuery, isSearchOpen, productData]);

  const closeSearch = () => {
    setSearchQuery(""); // Clear the search query
    setSearchResults([]); // Clear the search results
    toggleSearch(); // Close the search component using the toggleSearch prop
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg">
        <div className="bg-white p-4 rounded-md w-full max-w-2xl max-h-md h-[50%]">
          <button
            onClick={closeSearch}
            className="flex justify-end mt-4 p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md w-full"
          >
            <AiOutlineClose size={24} />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Пошук..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
            />
            <button
              onClick={closeSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              <BsSearch />
            </button>
          </div>
          {searchQuery && searchResults.length > 0 && (
            <div className="mt-4">
              {searchResults.map((product: Product) => (
                <div key={product.name}>
                  <a
                    href={product.link}
                    className="block font-bold font-roboto text-black-500 hover:underline"
                  >
                    {product.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
