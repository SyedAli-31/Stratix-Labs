"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DuctCleaningSection from "@/components/home/duct-cleaning-services";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
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
              Professional HVAC solutions for your home and business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Duct Cleaning Section */}
      <DuctCleaningSection />

      {/* Services Section */}
      <section className="py-16 px-4 bg-background" id="services">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-primary tracking-tight">Our Services</h2>
      <p className="text-muted-foreground mt-3 text-lg">Explore our range of professional HVAC solutions</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card Template */}
      {[
        {
          title: "HVAC Installation",
          desc: "Professional installation of heating, ventilation, and air conditioning systems.",
          link: "/",
          icon: (
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
          ),
          highlight: false,
        },
        {
          title: "Duct Cleaning",
          desc: "Comprehensive cleaning of air ducts to improve indoor air quality.",
          link: "/duct-cleaning",
          icon: (
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
          ),
          highlight: false,
        },
        {
          title: "HVAC Maintenance",
          desc: "Regular maintenance to keep your HVAC system running efficiently.",
          link: "#",
          icon: (
            <>
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M6.5 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2.5" />
              <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
              <path d="M18 18h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2" />
            </>
          ),
          highlight: false,
        },
      ].map((service, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35 }}
          className={`relative group p-6 rounded-3xl border shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-indigo-500/20 ${
            service.highlight
              ? "bg-[hsl(var(--duct-container))] border-2 border-[hsl(var(--duct-primary))]"
              : "bg-gradient-to-br from-[#10121d] via-[#0b0d19] to-[#0a0a16] border-gray-700"
          }`}
        >
          {service.highlight && (
            <div className="absolute top-0 right-0 bg-[hsl(var(--duct-primary))] text-black px-3 py-1 text-xs font-bold rounded-bl-xl shadow-md z-10">
              Popular
            </div>
          )}

          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {service.icon}
            </svg>
          </div>

          <h3
            className={`text-2xl font-semibold mb-2 transition-colors group-hover:text-primary ${
              service.highlight ? "text-[hsl(var(--duct-light))]" : "text-white"
            }`}
          >
            {service.title}
          </h3>

          <p className="text-gray-400 mb-5 leading-relaxed">{service.desc}</p>

          <Link href={service.link}>
            <span className={`inline-flex items-center text-sm font-medium hover:underline transition-colors ${
              service.highlight ? "text-[hsl(var(--duct-primary))]" : "text-primary"
            }`}>
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
