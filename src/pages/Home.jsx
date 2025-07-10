import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    // Extract unique categories from items
    const allCats = ["all", ...new Set(items.map((item) => item.category))];
    setCategories(allCats);
  }, [items]);

  // Filter logic
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 rounded shadow"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Search */}
        <div className="flex items-center gap-2">
          {searchOpen && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded shadow"
            />
          )}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700"
          >
            {searchOpen ? "Close" : "Search"}
          </button>
        </div>
      </div>

      {/* Product Grid */}
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
