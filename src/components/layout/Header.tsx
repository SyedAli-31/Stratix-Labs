"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";


interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/5 backdrop-blur-md border-b border-black shadow-md"
          : "bg-white border-b border-black shadow-md"
      )}
    >
      <div className="container mx-auto px-3">
        {/* Top Contact Bar */}
        <div className="flex items-center justify-between h-6 border-b text-sm border-black text-black transition-all duration-300">
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center font-bold gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@stratixlabs.com</span>
            </div>
            <div className="flex items-center ml-2 font-bold gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between py-3 ml-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/op.png"
              alt="Stratix Labs Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-sans font-semibold text-[26px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1D2B88] to-[#4a5ef1]">
  Stratix Labs
</span>

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group relative">
                <span className="inline-block px-3 py-2 text-sm font-medium text-black transition-all duration-300 bg-white group-hover:bg-blue-600 group-hover:text-white rounded-md">
                  {link.name}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              passHref
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-purple-800 text-white font-medium rounded-md transition-colors duration-300"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-black inline-block px-3  bg-blue-600 hover:bg-blue-800 "
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
              className="md:hidden mt-2 bg-black/95 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-6 py-3 text-gray-200 hover:text-purple-800 hover:bg-gray-900 transition-colors block"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-6 pt-4">
                  <Link href="/contact">
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-800 text-white"
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
