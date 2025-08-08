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
              to support healthier living. From portable inhalers to
              hospital-grade nebulizers, our mission is to enhance breathing comfort.
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
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="" className="hover:text-[#49f2d9]">
                  Nebulizers
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-[#49f2d9]">
                  Inhalers
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-[#49f2d9]">
                  Oxygen Concentrators
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-[#49f2d9]">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-[#49f2d9]">
                  Rental Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-[#49f2d9]">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#49f2d9]">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#49f2d9]">Products</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#49f2d9]">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#49f2d9] text-xl font-bold mb-4">Contact Info</h3>
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
                <span>info@pulmoplus.com</span>
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
            © {new Date().getFullYear()} PulmoPlus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
