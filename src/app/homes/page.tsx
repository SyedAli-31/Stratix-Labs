"use client";

import { motion } from "framer-motion";

import DuctCleaningSection from "@/components/home/duct-cleaning-services";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-6 md:py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Breathe <span className="text-white">Better</span> Air
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-[700px] mx-auto">
              Professional cleaning solutions for your home and business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Duct Cleaning Section */}
      <DuctCleaningSection />

      


    </main>
  );
}