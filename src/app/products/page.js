import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import allProducts from "@/data/products";

const categorySEO = {
  "cpap": {
    title: "CPAP Machines & Masks in Dubai & UAE | PulmoPlus",
    description:
      "Buy CPAP machines, masks, and accessories in Dubai & UAE. Treat sleep apnea with ResMed, Philips, and other leading brands. Fast delivery & expert setup.",
    keywords: [
      "CPAP in Dubai",
      "sleep apnea machine",
      "portable CPAP in Dubai",
      "ResMed CPAP",
      "CPAP mask Dubai",
      "AirSense 11 CPAP in Dubai",
      "new cpap machine",
      "air11 cpap in Dubai",
      "⁠updated cpap"
    ],
  },
  "bipap": {
    title: "BiPAP Machines in Dubai & UAE | PulmoPlus",
    description:
      "Shop BiPAP machines for respiratory care and sleep apnea treatment in Dubai & UAE. Premium brands with delivery and setup.",
    keywords: [
      "BiPAP in Dubai",
      "BiPAP machine UAE",
      "Philips BiPAP Dubai",
      "ResMed BiPAP",
      "BiPAP mask Dubai",
    ],
  },
  "portable oxygen": {
    title: "Portable Oxygen Concentrators in Dubai & UAE | PulmoPlus",
    description:
      "Browse portable oxygen machines and concentrators for travel and home use in Dubai & UAE. Compact, lightweight, and long battery life.",
    keywords: [
      "portable oxygen",
      "portable oxygen machine in Dubai",
      "oxygen concentrator UAE",
      "Inogen machine in Dubai",
    ],
  },
  "ventilator": {
    title: "Portable & Home Ventilators in Dubai & UAE | PulmoPlus",
    description:
      "Find portable and home ventilators in Dubai & UAE for long-term respiratory support. Hospital-grade devices with reliable performance.",
    keywords: [
      "portable ventilator in Dubai",
      "ventilator UAE",
      "home ventilator Dubai",
    ],
  },
  "oxygen and nebuliser": {
    title: "Oxygen Therapy & Nebulisers in Dubai & UAE | PulmoPlus",
    description:
      "Shop oxygen therapy equipment and nebulisers for asthma and respiratory treatment in Dubai & UAE. Lightweight and easy-to-use devices.",
    keywords: [
      "nebuliser in Dubai",
      "oxygen machine in Dubai",
      "portable nebuliser UAE",
      "home nebuliser Dubai",
    ],
  },
};

export async function generateMetadata({
  searchParams,
}) {
  const categoryParam = searchParams?.category?.toLowerCase();
  const siteName = "PulmoPlus";

  if (categoryParam && categorySEO[categoryParam]) {
    const seo = categorySEO[categoryParam];
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: `https://www.pulmoplus.com/products?category=${categoryParam}`,
        images: [
          {
            url: `/images/${categoryParam}.jpg`,
            width: 1200,
            height: 630,
            alt: `${categoryParam} products in Dubai`,
          },
        ],
      },
    };
  }

  // Default for All Products
  return {
    title: `All Respiratory Care Products – CPAP, BiPAP, Oxygen Machines | ${siteName}`,
    description:
      "Browse all respiratory care products including CPAP, BiPAP, ventilators, and portable oxygen concentrators. Available in Dubai and across the UAE.",
    keywords: [
      "Portable oxygen machine in Dubai",
      "oxygen machine in Dubai",
      "CPAP in Dubai",
      "BiPAP in Dubai",
      "ventilator in Dubai",
      "oxygen concentrator in UAE",
    ],
    openGraph: {
      title: `All Respiratory Care Products – CPAP, BiPAP, Oxygen Machines`,
      description:
        "Browse all respiratory care products including CPAP, BiPAP, ventilators, and portable oxygen concentrators in Dubai & UAE.",
      url: `https://www.pulmoplus.com/products`,
      images: [
        {
          url: "/images/logo/pulmoplus-logo.png",
          width: 600,
          height: 300,
          alt: "All Respiratory Products in Dubai",
        },
      ],
    },
  };
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
