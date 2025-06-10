"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

const features = [
  "Happy customers and 95% repeat business.",
  "Strong focus on quality assurance throughout the process.",
  "Seamless communication and collaboration with clients.",
  "Software engineers who understand western work ethic.",
];

const LazyWhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 flex justify-center bg-white relative overflow-hidden px-6 md:px-10 lg:px-16">
      <div className="container max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text"
            >
              WHY CHOOSE US
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-700 space-y-4 text-lg text-center md:text-left"
            >
              <p>
                Our teams of experts are the driving force behind all of our successes.
                Together, we believe that anything is possible and work relentlessly to meet
                or exceed our client&apos;s expectations while staying true to our core values.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 border border-blue-800 shadow-xl"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LazyWhyChooseUs;
