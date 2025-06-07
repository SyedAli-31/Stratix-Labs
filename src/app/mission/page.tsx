"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import CTABanner from "@/components/home/CTABanner";
import { Lightbulb, TrendingUp, ShieldCheck, Globe, Leaf, BookOpen } from "lucide-react";
// Lazy load Framer Motion only on client
const LazyMotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,
});

const missionItems = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology",
    icon: Lightbulb,
  },
  {
    title: "Client Success",
    description: "Delivering solutions that drive business growth",
    icon: TrendingUp,
  },
  {
    title: "Quality Excellence",
    description: "Maintaining highest standards in every project",
    icon: ShieldCheck,
  },
  {
    title: "Global Impact",
    description: "Creating solutions with worldwide reach",
    icon: Globe,
  },
  {
    title: "Sustainable Growth",
    description: "Building long-term success for our clients",
    icon: Leaf,
  },
  {
    title: "Continuous Learning",
    description: "Staying ahead with emerging technologies",
    icon: BookOpen,
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
                  <Card className="bg-white border border-gray-200 hover:border-pink-500 shadow-lg hover:shadow-pink-300/30 transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6 min-h-[240px] flex flex-col justify-between">
                      {/* Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                          <item.icon className="w-7 h-7 text-pink-600" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 text-center">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base text-center">{item.description}</p>
                      </div>

                      {/* CTA */}
                      <div className="mt-4 text-sm text-pink-600 text-center font-medium hover:underline cursor-pointer">
                        <Link href={"/services"}>Discover the Difference →</Link>
                        
                      </div>

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
