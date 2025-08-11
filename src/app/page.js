import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CategoryProducts from "@/components/pages/CategoryProducts";
import FeaturedProducts from "@/components/pages/FeaturedProducts";
import VideoSection from "@/components/pages/VideoSection";

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
        <div className="relative max-w-7xl text-center mx-auto px-4 h-full flex items-center justify-center overflow-x-hidden w-full">
          <div className="text-white">
            <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-wider">
              <span className="text-white">Pulmo</span>
              <span className="text-[var(--accent-light)]">Plus</span>
            </h1>
            <p className="text-2xl md:text-4xl mb-8">
              Empowering Dubai to Breathe Better and Live Stronger.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:flex-nowrap sm:space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-[var(--accent-light)] border-4 text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition duration-300 px-2 py-6 rounded-md text-2xl font-medium"
              >
                <Link href="/products">View Products</Link>
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
      <FeaturedProducts />
      <VideoSection />
      <CategoryProducts />
    </div>
  );
}
