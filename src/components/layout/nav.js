"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Products", href: "/products" },
];

const serviceLinks = [
  { label: "Road Works", href: "/services/road-works" },
  { label: "Infrastructure Works", href: "/services/infrastructure-works" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const servicesRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsDesktopServicesOpen(false);
  };

  const isServicesActive = pathname.startsWith("/services");

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
              <span className="text-[#0A2647]">
              Pulmo
            </span>
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

            {/* Desktop Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                className={`flex items-center text-m font-bold ${
                  isServicesActive
                    ? "text-[var(--accent)]"
                    : "text-[#0A2647] hover:text-[var(--accent)]"
                }`}
              >
                Services <i className="fas fa-chevron-down ml-1 text-sm" />
              </button>
              {isDesktopServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {serviceLinks.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={label}
                        href={href}
                        className={`block px-4 py-2 text-sm font-bold ${
                          isActive
                            ? "text-[#fbbf27] underline"
                            : "text-[#0A2647] hover:text-[#fbbf27]"
                        }`}
                        onClick={() => setIsDesktopServicesOpen(false)}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#0A2647]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
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
                        ? "text-white underline"
                        : "text-[#0A2647] hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex justify-between items-center w-full font-bold py-2 ${
                    isServicesActive
                      ? "text-white"
                      : "text-[#0A2647] hover:text-[#FFB800]"
                  }`}
                >
                  Services{" "}
                  <i
                    className={`fas fa-chevron-${
                      isMobileServicesOpen ? "up" : "down"
                    } ml-1 text-sm`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4">
                    {serviceLinks.map(({ label, href }) => {
                      const isActive = pathname === href;
                      return (
                        <Link
                          key={label}
                          href={href}
                          onClick={handleLinkClick}
                          className={`block py-2 font-bold ${
                            isActive
                              ? "text-white underline"
                              : "text-[#0A2647] hover:text-[#fbbf27]"
                          }`}
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
