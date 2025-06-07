"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Rocket, Globe } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const visionItems = [
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description:
      "We lead by example, setting the pace in technology and innovative digital solutions that transform industries.",
    moreDetails:
      "We strive to create cutting-edge solutions that challenge traditional boundaries and empower businesses to stay ahead.",
  },
  {
    icon: Target,
    title: "Global Excellence",
    description:
      "Our focus is on becoming the number one choice for businesses, irrespective of their size, all around the globe.",
    moreDetails:
      "With tailored strategies and impactful solutions, we ensure that our clients’ goals are not just met, but exceeded in every region.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Solutions",
    description:
      "We are committed to pioneering tomorrow’s technology today, ensuring that businesses are prepared for the future.",
    moreDetails:
      "Leveraging AI, machine learning, and automation, our solutions prepare businesses for challenges and opportunities that lie ahead.",
  },
  {
    icon: Globe,
    title: "Worldwide Impact",
    description:
      "Our reach is global, with a focus on making a lasting impact through digital transformation and sustainable practices.",
    moreDetails:
      "Every solution we deliver is built to create positive change, ensuring our clients lead the market with responsibility and vision.",
  },
];

export default function Vision() {
  return (
    <section className="relative z-0 min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0e0c2f] via-[#140e44] to-[#1c1a56] overflow-hidden">
     

      <div className="relative z-10 container mx-auto">
        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Vision
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            &ldquo;We envision a future where every business, regardless of size, has access to
            world-class digital solutions that drive growth and innovation.&rdquo;
          </p>
        </motion.div>

        {/* 💥 Vision Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="transform-gpu"
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-pink-400 shadow-lg hover:shadow-pink-300/30 transition-all duration-300 rounded-2xl">
                <CardContent className="p-6 min-h-[340px] flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-10 h-10 text-red-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {item.description}
                  </p>

                  <motion.div
                    className="mt-auto"

                  >
                    <button
                      className="text-pink-600 font-semibold text-sm hover:underline focus:outline-none"
                      onClick={() => alert(item.moreDetails)} // Replace with modal or accordion logic
                    >
                      Learn More
                    </button>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2">
                      {item.moreDetails}
                    </p>
                  </motion.div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <CTABanner
            heading="Ready to Elevate Your Brand?"
            subheading="Schedule a consultation with our experts to discuss how our services can be tailored to your specific needs."
            buttonText="Book a Free Strategy Call"
          />
        </motion.div>
      </div>
    </section>
  );
}
