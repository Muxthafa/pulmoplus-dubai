import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#005B99] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">About Us</h3>
            <p className="text-white/80 mb-4">
              PulmoPlus provides innovative respiratory care solutions designed
              to support healthier living in Dubai. From CPAP and BiPAP machines
              to portable oxygen concentrators, nebulizers, and hospital-grade
              ventilators, our mission is to enhance breathing comfort and
              improve quality of life.
            </p>
            <div className="flex space-x-4">
              <a className="text-[#49f2d9] hover:text-[#0077CB] cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-[#49f2d9] hover:text-[#0077CB] cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-[#49f2d9] hover:text-[#0077CB] cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-[#49f2d9] hover:text-[#0077CB] cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  href="/products?category=cpap"
                  className="hover:text-[#49f2d9]"
                >
                  CPAP
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=bipap"
                  className="hover:text-[#49f2d9]"
                >
                  BiPAP
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=portable-oxygen"
                  className="hover:text-[#49f2d9]"
                >
                  Portable Oxygen
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=ventilator"
                  className="hover:text-[#49f2d9]"
                >
                  Ventilator
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=oxygen-and-nebuliser"
                  className="hover:text-[#49f2d9]"
                >
                  Oxygen and Nebuliser
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-[#49f2d9]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#49f2d9]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#49f2d9]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#49f2d9]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#49f2d9] mt-1 mr-3"></i>
                <span>Port Saeed, Deira, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-[#49f2d9] mr-3"></i>
                <span>+971 544479123</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#49f2d9] mr-3"></i>
                <span>pulmoplus11@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-[#49f2d9] mr-3"></i>
                <span>Open 24/7 – Always Here for You</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} PulmoPlus Dubai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
