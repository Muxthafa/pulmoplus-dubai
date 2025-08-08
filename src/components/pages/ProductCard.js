"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ id, name, image, description, price, inStock }) => {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = encodeURIComponent(`Hi, I'm interested in booking "${name}"`);
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md relative flex flex-col justify-between p-0 border-[1.5px] border-[#005b99]">
      {/* Badge */}
      <Badge
        variant={inStock ? "default" : "outline"}
        className={`absolute top-3 left-3 z-10 text-xs px-2 py-1 ${
          inStock
            ? "bg-[var(--primary)] text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </Badge>

      {/* Image */}
      <div className="w-full h-48 relative">
        <Link href={id ? `/product/${id}` : "#"} passHref>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-t-2xl cursor-pointer"
          />
        </Link>
      </div>

      {/* Content */}
      <CardContent className="px-4 pt-2">
        <Link href={id ? `/product/${id}` : "#"}>
          <h3 className="text-xl font-semibold mb-1 text-[#005b99] hover:underline">
            {name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        {price && (
          <p className="text-xl font-bold text-[#3bbfab] pt-2">AED {price}</p>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between pb-4 border-t">
        {price ? (
          <div className="flex items-center justify-between w-full gap-2">
            <Button asChild className="bg-[#0077cb] text-white px-2 flex-1">
              <Link href={id ? `/product/${id}` : "#"}>View Now</Link>
            </Button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3bbfab] text-white px-2 py-2 rounded-md hover:bg-green-700 flex-1 text-center"
            >
              Buy Now
            </a>
          </div>
        ) : (
          <Link href={id ? `/product/${id}` : "#"} passHref className="w-full">
            <Button className="w-full bg-[#0077cb] text-white mt-4">
              View Products
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
