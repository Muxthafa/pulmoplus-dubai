import products from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-5">
  <h1 className="text-4xl font-bold text-[#005b99] flex items-center gap-3">
    {product.name}
    {product.badge && (
      <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-2 py-1 rounded">
        {product.badge}
      </span>
    )}
  </h1>

  <p className="text-gray-700 leading-relaxed">{product.description}</p>

  <hr className="border-t border-gray-200" />

  <div className="flex items-center space-x-2">
    <span className="font-semibold">Category:</span>
    <Link
      href={`/products?category=${encodeURIComponent(product.category)}`}
      className="text-[#3bbfab] font-semibold hover:underline"
    >
      {product.category}
    </Link>
  </div>

  <div className="flex justify-between items-center flex-wrap gap-4">
    <div className="flex items-center gap-4 flex-wrap">
      <div className="text-3xl font-extrabold text-[#0077cb] tracking-tight">
        ₹{product.price}
      </div>

      {product.inStock ? (
        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
          In Stock
        </span>
      ) : (
        <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
          Out of Stock
        </span>
      )}
    </div>

    {/* Buy Now Button */}
    {product.inStock && (
      <button className="h-full bg-[#0077cb] hover:bg-[#005b99] text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-200">
        Buy Now
      </button>
    )}
  </div>
</div>

      </div>

      {/* Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="specs" className="w-full">
          <div className="flex justify-center">
            <TabsList className="bg-[#e6f3fc] p-1 rounded-md w-[75%] justify-center gap-4">
              <TabsTrigger
                value="specs"
                className="data-[state=active]:bg-[#0077cb] data-[state=active]:text-white 
                     rounded-md px-4 py-2 text-[#005b99] text-base md:text-lg font-medium 
                     flex-1"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-[#0077cb] data-[state=active]:text-white 
                     rounded-md px-4 py-2 text-[#005b99] text-base md:text-lg font-medium 
                     flex-1"
              >
                Features
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-6">
            <TabsContent value="specs" className="prose max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: product.specifications }}
              />
            </TabsContent>
            <TabsContent value="features" className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.features }} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
