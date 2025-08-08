"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(
        currentScrollY < lastScrollY.current || currentScrollY < 100
      );
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full bg-[var(--nav-background)] z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div style={{ width: "50px", heigh: "50px" }}>
              <Image
                src="/logo/pulmoplus-logo.png"
                alt="Logo"
                width={250}
                height={300}
                objectFit="cover"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-wider">
              <span className="text-[#0A2647]">Pulmo</span>
              <span className="text-[var(--accent)]">Plus</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-m font-bold ${
                    isActive
                      ? "text-[var(--accent)] underline"
                      : "text-[#0A2647] hover:text-[var(--accent)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#0A2647] text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={handleLinkClick}
                  className={`block py-2 font-bold ${
                    isActive
                      ? "text-[#3bbfab] underline"
                      : "text-[#0A2647] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
