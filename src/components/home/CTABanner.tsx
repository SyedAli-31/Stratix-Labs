'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner = ({
  heading = "Ready to Transform Your Marketing Strategy?",
  subheading = "Let's discuss how Stratix Labs can help you achieve your business goals with our premium marketing solutions.",
  buttonText = "Get a Free Consultation",
  buttonLink = "/contact"
}: CTABannerProps) => {
  return (
    <section className="py-16 relative overflow-hidden">
      

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={buttonLink} passHref>
              <Button 
                size="lg" 
                className="bg-[#00008b] hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg"
              >
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
