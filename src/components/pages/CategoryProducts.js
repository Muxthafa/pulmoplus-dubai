import ProductCard from "./ProductCard"
import categories from "@/data/categories"

export default function CategoryProducts() {
  return (
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#005b99] mb-4">
            Category Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our top-rated respiratory care solutions designed to
            improve your quality of life.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {categories.map((product, idx) => (
            <div
              key={idx}
              className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] max-w-xs flex-shrink-0"
            >
              <ProductCard {...product} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}