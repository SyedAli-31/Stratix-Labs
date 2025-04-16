"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {

  ArrowUp,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Send
} from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Stratix Labs Logo"
                width={60}
                height={60}
                className="w-14 h-14 object-contain"
              />
              <span className="font-bold text-[36px] bg-clip-text text-transparent bg-gradient-to-r from-[#1D2B88] via-[#6B7BF9] to-white">
                Stratix Labs
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming brands through innovative marketing strategies and premium creative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Brand Strategy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Content Creation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Social Media Management</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Web Development</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get the latest news and updates on digital marketing trends.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 focus:border-gold focus:ring-gold"
              />
              <Button type="submit" variant="outline" className="ml-2 text-gold border-gold hover:bg-gold hover:text-gray-900">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stratix Labs. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="icon"
            className="bg-gray-800 text-gold border-gold hover:bg-gold hover:text-gray-900"
            onClick={handleScrollToTop}
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
