"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Brand Strategy", href: "/service/brand-strategy" },
      { name: "Digital Marketing", href: "/service/digital-marketing" },
      { name: "Content Creation", href: "/service/content-creation" },
      { name: "Social Media", href: "/service/social-media-management" },
      { name: "SEO Optimization", href: "/service/seo-optimization" },
      { name: "Web Development", href: "/service/web-development" },

    ],
  },

];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-blue-900/80 backdrop-blur-lg border-b border-blue-900 shadow-lg"
          : "bg-[#1e293b] border-b border-blue-900 shadow-md"
      )}
    >
      <div className="container mx-auto px-3">
        {/* Navbar */}
        <div className="flex items-center justify-between py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/op.png"
              alt="Stratix Labs Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-sans font-semibold text-[26px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#a6afea] to-[#7785ee]">
              Stratix Labs
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group text-white hover:bg-gradient-to-br from-[#1D2B88] to-[#4a5ef1] rounded-lg shadow-sm hover:shadow-lg">
                {link.subLinks ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 font-medium text-white bg-gradient-to-br from-[#1D2B88] to-[#4a5ef1] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>


                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute left-0 mt-3 w-56 bg-blue-700/90 backdrop-blur-md border border-blue-900 rounded-xl shadow-xl z-50"
                        >
                          <div className="flex flex-col">
                            {link.subLinks.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:text-white transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={link.href}>
                    <span className="inline-block px-4 py-2 text-sm font-medium text-white hover:text-white  transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-gradient-to-br from-blue-600 to-purple-700 text-white font-medium rounded-lg hover:scale-105 hover:shadow-lg transition-transform"
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            className="md:hidden text-white bg-blue-600 hover:bg-blue-800 px-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 bg-[#0f172a]/95 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-6 py-3 text-white hover:text-purple-400 hover:bg-blue-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-6 pt-4">
                  <Link href="/contact">
                    <Button
                      className="w-full bg-gradient-to-br from-purple-600 to-blue-700 text-white hover:scale-105 transition-transform"
                      onClick={handleLinkClick}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;