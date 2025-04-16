"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import CTABanner from "@/components/home/CTABanner";

// Lazy load Framer Motion only on client
const LazyMotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,
});

const missionItems = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology",
  },
  {
    title: "Client Success",
    description: "Delivering solutions that drive business growth",
  },
  {
    title: "Quality Excellence",
    description: "Maintaining highest standards in every project",
  },
  {
    title: "Global Impact",
    description: "Creating solutions with worldwide reach",
  },
  {
    title: "Sustainable Growth",
    description: "Building long-term success for our clients",
  },
  {
    title: "Continuous Learning",
    description: "Staying ahead with emerging technologies",
  },
];

export default function Mission() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <section className="relative z-0 min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0e0c2f] via-[#140e44] to-[#1c1a56] overflow-hidden">
      {/* 💡 Background Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-3xl rounded-full z-0" />

      <div className="relative z-10 container mx-auto">
        {hydrated && (
          <>
            {/* 🔥 Animated Heading */}
            <LazyMotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Our Mission
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Empowering businesses through innovative digital solutions
              </p>
            </LazyMotionDiv>

            {/* 🚀 Mission Cards */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {missionItems.map((item, index) => (
                <LazyMotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
                  className="transform-gpu"
                >
                  <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700 hover:border-pink-500 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6 min-h-[160px] flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </LazyMotionDiv>
              ))}
            </div>

            {/* CTA Section */}
            <CTABanner
              heading="Ready to Elevate Your Brand?"
              subheading="Schedule a consultation with our experts to discuss how our services can be tailored to your specific needs."
              buttonText="Book a Free Strategy Call"
            />
          </>
        )}
      </div>
    </section>
  );
}
