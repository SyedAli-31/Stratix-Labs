"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from 'next/image'; 

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #000000, #2D1B69)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="text-primary"
        >
          <defs>
            <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="opacity-50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: Text */}
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-300 to-amber-500">
                Where Strategy Fuels Market Success
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg">
                We craft strategic marketing campaigns that deliver exceptional results. Transform your brand&apos;s presence with our innovative approach.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-800 hover:bg-primary/90 text-white px-6 py-6 rounded-lg font-medium transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-6 rounded-lg font-medium transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300"
                >
                  View Our Work
                </Button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                {["Premium Quality", "Proven Results", "Expert Strategy"].map((text) => (
                  <div key={text} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300 text-sm sm:text-base">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Right: Image and Stats */}
          {isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 mt-12 lg:mt-0 relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-amber-500 rounded-lg blur-lg opacity-20 animate-pulse" />
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium marketing agency"
                  width={1000} // Provide width and height for optimization
                  height={667}
                  className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover"
                />
              </div>

              <div className="relative z-20 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard title="Campaign success rate" value="93%" />
                <StatCard title="Global clients" value="250+" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Reusable StatCard
type StatCardProps = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-black/90 backdrop-blur-md p-5 rounded-lg shadow-lg border border-gray-800"
    >
      <div className="space-y-1">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-amber-500">{value}</p>
      </div>
    </motion.div>
  );
};
