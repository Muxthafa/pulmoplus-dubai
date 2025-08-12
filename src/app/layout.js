import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "PulmoPlus Dubai – Premium CPAP, BiPAP & Oxygen Machines in Dubai & UAE",
    template: "%s | PulmoPlus Dubai & UAE",
  },
  description: "PulmoPlus offers portable oxygen machines, CPAP, BiPAP, ventilators, and other respiratory solutions in Dubai and across the UAE. Shop premium brands like ResMed, Philips, and Inogen.",
  keywords: [
    "Portable oxygen machine in Dubai",
    "oxygen machine in Dubai",
    "CPAP in Dubai",
    "BiPAP in Dubai",
    "Portable ventilator in Dubai",
    "sleep apnea machine",
    "portable CPAP in Dubai",
    "oxygen concentrator in UAE",
    "portable oxygen",
    "CPAP",
    "BiPAP",
    "ventilator",
    "Inogen machine in Dubai",
    "ResMed CPAP",
    "ResMed machine in Dubai",
    "Philips machine in UAE",
    "sleeping problem",
    "snoring problem solution",
    "sleeping machine in Dubai",
  ],
  authors: [{ name: "PulmoPlus" }],
  creator: "PulmoPlus",
  publisher: "PulmoPlus",
  metadataBase: new URL("https://www.pulmoplus.com"),
  openGraph: {
    type: "website",
    siteName: "PulmoPlus",
    title: "PulmoPlus – Respiratory Care Solutions in Dubai & UAE",
    description:
      "Shop CPAP, BiPAP, portable oxygen, nebulizers, Ventilators, and more.",
    url: "https://www.pulmoplus.com",
    images: [
      {
        url: "/images/logo/pulmoplus-logo.png",
        width: 1200,
        height: 630,
        alt: "PulmoPlus Respiratory Care Products in Dubai",
      },
    ],
  },
  themeColor: "#0077cb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
          <main className="min-h-screen pt-10">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
