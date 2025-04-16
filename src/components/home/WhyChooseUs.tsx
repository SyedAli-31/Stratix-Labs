"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

const features = [
  "Happy customers and 95% repeat business.",
  "Strong focus on quality assurance throughout the process.",
  "We have been in business since 2005.",
  "Over 350 staff.",
  "ISO 9001 and ISO 27001 certified company.",
  "Seamless communication and collaboration with clients.",
  "Software engineers who understand western work ethic.",
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 flex justify-center bg-black relative overflow-hidden px-6 md:px-10 lg:px-16">
      {/* Background Animations on both sides */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full filter blur-3xl opacity-15"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-l from-purple-700 to-purple-500 rounded-full filter blur-3xl opacity-15"
        />
      </div>

      <div className="container max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Heading & Text with Animation */}
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
              className="text-4xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text"
            >
              WHY CHOOSE US
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-300 space-y-4 text-lg text-center md:text-left"
            >
              <p>
                Our teams of experts are the driving force behind all of our successes.
                Together, we believe that anything is possible and work relentlessly to meet
                or exceed our client&apos;s expectations while staying true to our core values.
              </p>
              <p>
                Orient Software is committed to hiring the most talented individuals in
                Information Technology and providing them with ongoing professional
                growth and career development opportunities.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Features List with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg p-8 border border-gray-800"
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
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600/60 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
