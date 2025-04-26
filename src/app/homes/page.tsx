"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
              Professional cleaning solutions for your home and business
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
      <p className="text-muted-foreground mt-3 text-lg">
        Explore our range of professional cleaning solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Home Cleaning",
          desc: "Thorough residential cleaning for a healthier, fresher living space.",
          link: "/home-cleaning",
          icon: <path d="M3 9.5L12 4l9 5.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />,
        },
        {
          title: "Carpet Cleaning",
          desc: "Remove deep stains, dirt, and allergens with our expert carpet services.",
          link: "/carpet-cleaning",
          icon: <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
        },
        {
          title: "Duct Cleaning",
          desc: "Improve indoor air quality with complete duct and vent cleaning.",
          link: "/duct-cleaning",
          icon: <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2" />,
        },
        {
          title: "Car Detailing",
          desc: "Premium interior and exterior car cleaning for a showroom finish.",
          link: "/car-detailing",
          icon: <path d="M3 13h18l-1.5-5h-15L3 13Zm0 0v5a2 2 0 0 0 2 2h2v-3h10v3h2a2 2 0 0 0 2-2v-5" />,
        },
        {
          title: "Sanitization",
          desc: "Professional-grade disinfection services for homes and offices.",
          link: "/sanitization",
          icon: (
            <>
              <path d="M12 2v20" />
              <path d="M5 8h14" />
              <path d="M5 16h14" />
            </>
          ),
        },
        {
          title: "Deep Cleaning",
          desc: "Intensive cleaning that targets hidden dirt and bacteria in every corner.",
          link: "/deep-cleaning",
          icon: (
            <>
              <path d="M3 3h18v18H3V3z" />
              <path d="M9 9h6v6H9z" />
            </>
          ),
        },
      ].map((service, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35 }}
          className="relative group p-6 rounded-3xl border shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-purple-500/20 bg-gradient-to-br from-[#10121d] via-[#0b0d19] to-[#0a0a16] border-gray-700"
        >
          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {service.icon}
            </svg>
          </div>

          <h3 className="text-2xl font-semibold mb-2 transition-colors group-hover:text-primary text-white">
            {service.title}
          </h3>

          <p className="text-gray-400 mb-5 leading-relaxed">{service.desc}</p>

          <Link href={service.link}>
            <span className="inline-flex items-center text-sm font-medium hover:underline transition-colors text-primary">
              Learn more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
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
