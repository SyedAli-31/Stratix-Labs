"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const animations = [
  {
    title: "Cinematic 2D & 3D Animation",
    description:
      "Transform ideas into breathtaking animated stories that engage, inspire, and leave a lasting impression.",
    bgPattern:
      "radial-gradient(circle at 100% 100%, rgba(192, 38, 211, 0.08) 0%, transparent 60%)",
  },
  {
    title: "Immersive 3D Visual Experiences",
    description:
      "Craft hyper-realistic visuals, environments, and product renders that breathe life into your brand.",
    bgPattern:
      "radial-gradient(circle at 0% 0%, rgba(79, 70, 229, 0.08) 0%, transparent 60%)",
  },
  {
    title: "Dynamic Motion Graphics",
    description:
      "Deliver high-impact messages through sleek, fast-paced visuals tailored to modern attention spans.",
    bgPattern:
      "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#1f002e] via-[#15002b] to-[#0e001f] flex justify-center px-4 md:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-700 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto relative max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-indigo-500">
            What We Actually Do
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-pink-400 font-medium"
          >
            Powering brands through creativity, technology, and pure visual magic.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {animations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.2,
                duration: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className="group"
            >
              <Card
                className={cn(
                  "relative overflow-hidden border border-purple-800 bg-[#1a002c]/50 backdrop-blur-xl h-full transition-all duration-300",
                  "shadow-xl hover:shadow-purple-600/50 hover:shadow-2xl rounded-2xl"
                )}
                style={{ backgroundImage: item.bgPattern }}
              >
                <CardContent className="p-8 relative z-10">
                  <motion.h3
                    className="text-2xl font-semibold text-white mb-4 group-hover:text-pink-500 transition-colors"
                    whileHover={{ x: 6 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-purple-200 group-hover:text-white transition-colors leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-fuchsia-800/30 to-transparent transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
