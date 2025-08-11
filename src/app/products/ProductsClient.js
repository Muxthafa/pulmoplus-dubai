"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/pages/ProductCard";
import allProducts from "@/data/products";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (category) {
      products = products.filter(
        (p) => p?.categorySlug?.toLowerCase() === category.toLowerCase()
      );
    }

    return products;
  }, [ category]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-8 text-center h-full overflow-x-hidden w-full">
      <h1 className="text-3xl font-bold text-[#005b99]">All Products</h1>

      {category && (
        <p className="text-lg text-gray-600">
          Showing products in <span className="font-semibold">{category}</span>
        </p>
      )}

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
