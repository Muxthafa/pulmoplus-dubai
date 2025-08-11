"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/pages/ProductCard";
import allProducts from "@/data/products";

const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [sort, setSort] = useState("price-asc");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (category) {
      products = products.filter(
        (p) => p?.categorySlug?.toLowerCase() === category.toLowerCase()
      );
    }

    if (inStockOnly) {
      products = products.filter((p) => p.inStock);
    }

    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    products = products.filter((p) => {
      const price = parseFloat(p.price.replace("$", "")); // consistent parsing
      return price >= min && price <= max;
    });

    products = [...products].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      if (sort === "price-asc") return priceA - priceB;
      if (sort === "price-desc") return priceB - priceA;
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      return 0;
    });

    return products;
  }, [category, sort, minPrice, maxPrice, inStockOnly]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-8 text-center h-full overflow-x-hidden w-full">
      <h1 className="text-3xl font-bold text-[#005b99]">All Products</h1>

      {category && (
        <p className="text-lg text-gray-600">
          Showing products in <span className="font-semibold">{category}</span>
        </p>
      )}

      {/* FILTER CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Sort */}
        <div>
          <label className="block text-sm font-semibold text-[#005b99] mb-1">
            Sort
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-semibold text-[#005b99] mb-1">
            Min Price
          </label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="e.g. 100"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-semibold text-[#005b99] mb-1">
            Max Price
          </label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g. 500"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* In Stock Toggle */}
        <div className="flex items-center gap-2">
          <input
            id="inStock"
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="h-5 w-5"
          />
          <label
            htmlFor="inStock"
            className="text-sm font-medium text-[#005b99]"
          >
            In Stock Only
          </label>
        </div>
      </div>

      {/* PRODUCT GRID */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No products match your filters.</p>
      )}
    </main>
  );
}
