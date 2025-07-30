import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import featuredProducts from "@/data/featuredProducts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/pulmo-bg-2.jpg"
            alt="Heavy construction equipment working on a road project at sunset"
            fill
            objectFit="cover"
            className="max-md:object-left"
          />

          <div className="absolute inset-0 bg-[var(--secondary)] opacity-70"></div>
        </div>
        {/* Background Video */}
        {/* <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/road-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          // overlay
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div> */}
        <div className="relative max-w-7xl text-center mx-auto px-4 h-full flex items-center justify-center overflow-x-hidden w-full">
          <div className="text-white">
            <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-wider">
              <span className="text-white">Pulmo</span>
              <span className="text-[var(--accent-light)]">Plus</span>
            </h1>
            <p className="text-2xl md:text-4xl mb-8">
              Breathe Better, Live Stronger.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:flex-nowrap sm:space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-[var(--accent-light)] border-4 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition duration-300 px-2 py-6 rounded-md text-2xl font-medium"
              >
                <Link href="/contact">View Products</Link>
              </Button>
              <Button
                asChild
                variant="default"
                className="bg-[var(--accent)] border-[var(--accent-light)] border-4 text-white hover:bg-transparent transition duration-300 px-6 py-6 rounded-md text-2xl font-medium"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#005b99] mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our top-rated respiratory care solutions designed to
              improve your quality of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card
          key={index}
          className="relative p-0 overflow-hidden flex flex-col justify-between border-[1.5px] border-[#005b99] rounded-xl shadow-md"
        >
          {/* Badge */}
          <Badge
            className={`absolute top-3 left-3 z-10 text-white ${
              product.inStock ? "bg-[#3bbfab]" : "bg-gray-400"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>

          {/* Image */}
          <div className="relative w-full h-56">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-grow">
            <CardContent className="pt-4 px-4">
              <h3 className="text-lg font-semibold text-[#005b99]">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-3 min-h-[60px]">
                {product.description}
              </p>
              <p className="text-2xl font-semibold text-[#0077cb] mt-4">
                {product.price}
              </p>
            </CardContent>

            <CardFooter className="px-4 p-4">
              <Button
                className={`w-full text-white ${
                  product.inStock
                    ? "bg-[#0077cb] hover:bg-[#005b99]"
                    : "border border-[#0077cb] text-[#0077cb] bg-white"
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? "Add to Cart" : "Unavailable"}
              </Button>
            </CardFooter>
          </div>
        </Card>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-[#0077cb] hover:bg-[#005b99] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              View More Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
