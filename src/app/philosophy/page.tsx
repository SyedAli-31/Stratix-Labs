"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Star, Lightbulb } from "lucide-react";
const philosophies = [
  {
    title: "Client-Centric Approach",
    description: "Everything we do starts and ends with our clients' success in mind.",
    moreDetails:
      "Our deep understanding of customer needs ensures that we craft tailored solutions that guarantee satisfaction.",
  },
  {
    title: "Innovation as Standard",
    description: "We constantly push boundaries and embrace new technologies.",
    moreDetails:
      "Innovation is embedded in our DNA. From leveraging the latest in AI to pioneering new solutions.",
  },
  {
    title: "Quality Without Compromise",
    description: "Excellence is not an act, but a habit in everything we deliver.",
    moreDetails:
      "We pride ourselves on delivering only the highest quality products and services, with meticulous attention to detail in every project.",
  },
  {
    title: "Collaborative Growth",
    description: "We grow together with our clients, partners, and team members.",
    moreDetails:
      "We believe that sustainable success comes from strong collaboration, where every stakeholder plays a key role in our shared growth.",
  },
];
const coreValues = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and fairness, fostering trust and transparency in all relationships.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting the benchmark for quality and dedication.",
    icon: Star,
  },
  {
    title: "Innovation",
    description: "We embrace creativity and forward-thinking to deliver cutting-edge solutions that shape the future.",
    icon: Lightbulb,
  },
];
export default function Philosophy() {
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
            Our Philosophy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Guided by principles that define who we are and how we work
          </p>
        </motion.div>

        {/* 💥 Philosophy Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="transform-gpu"
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-pink-400 shadow-lg hover:shadow-pink-300/30 transition-all duration-300 rounded-2xl">


                <CardContent className="p-6 min-h-[340px] flex flex-col justify-between">

                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4"
                  >
                    <span className="text-2xl font-bold text-pink-600">
                      {index + 1}
                    </span>
                  </motion.div>

               
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {item.description}
                  </p>
                  {/* Learn More Button and More Details */}
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

        {/* Core Values Section */}
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 p-8 bg-gradient-to-br from-[#0e0c2f] via-[#140e44] to-[#1c1a56] rounded-lg border border-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
        Our Core Values
      </h2>
      <div className="grid gap-8 md:grid-cols-3 text-center">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              textDecoration: "underline",
              color: "#ff4d6d",
            }}
            className="bg-white text-gray-900 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-pink-300 transition-all duration-300 border border-gray-200"

          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <value.icon className="w-10 h-10 text-pink-600" />
              </div>

            </div>
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>

          </motion.div>
        ))}
      </div>
    </motion.div>
      </div>
    </section>
  );
}
