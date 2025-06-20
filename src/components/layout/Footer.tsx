"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  ArrowUp,
  
  Facebook,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "b0479c74-c682-4bca-b0df-cca21cc766e9";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear(); // ✅ fix for hydration

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("email", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("You have successfully subscribed!");
        setEmail("");
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Toaster position="top-right" />
       <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Stratix Labs Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <span className="font-sans font-semibold text-[26px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#a6afea] to-[#7785ee]">
                  Stratix Labs
                </span>
              </Link>
              <p className="text-gray-400 mb-4">
                Transforming brands through innovative marketing strategies and
                premium creative solutions.
              </p>
              <div className="flex space-x-4">
                
                <Link
                  href="https://www.facebook.com/profile.php?id=61575081911392&mibextid=ZbWKwL"
                  className="text-gray-400 hover:text-gold transition-colors"
                  target="_blank"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/106972398/admin/dashboard/"
                  className="text-gray-400 hover:text-gold transition-colors"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/stratixlabs_27/"
                  className="text-gray-400 hover:text-gold transition-colors"
                  target="_blank"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/service/digital-marketing"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/brand-strategy"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/content-creation"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/social-media-management"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/seo-optimization"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/web-development"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Get the latest news and updates on digital marketing trends.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubscribe();
                }}
                className="flex"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 focus:border-gold focus:ring-gold"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="ml-2 text-gold border-gold hover:bg-gold hover:text-gray-900"
                  disabled={loading}
                >
                  {loading ? "Sending..." : <Send size={18} />}
                </Button>
              </form>
            </div>
          </div>

         <div className="border-t border-gray-800 mt-12 pt-8">
  <div className="flex flex-col md:flex-row items-center justify-between">
    {/* Centered Text */}
    <div className="w-full text-center md:text-right md:w-2/3">
      <span className="text-gray-400 text-sm">
        &copy; {currentYear} Stratix Labs. All rights reserved.
      </span>
    </div>

    {/* Arrow Button on the Right */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
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
</div>

        </div>
      </div>
    </>
  );
};

export default Footer;
