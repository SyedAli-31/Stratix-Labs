"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Target, Code, Users } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const strategies = [
  {
    icon: Lightbulb,
    title: "Discovery",
    steps: [
      "Understanding client needs",
      "Market research",
      "Technology assessment",
      "Opportunity identification",
    ],
  },
  {
    icon: Target,
    title: "Planning",
    steps: [
      "Solution architecture",
      "Resource allocation",
      "Timeline development",
      "Risk assessment",
    ],
  },
  {
    icon: Code,
    title: "Execution",
    steps: [
      "Agile development",
      "Quality assurance",
      "Regular client updates",
      "Continuous integration",
    ],
  },
  {
    icon: Users,
    title: "Optimization",
    steps: [
      "Performance monitoring",
      "User feedback integration",
      "Continuous improvement",
      "Scale optimization",
    ],
  },
];

export default function Strategy() {
  return (
    <section className="relative z-0 min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0e0c2f] via-[#140e44] to-[#1c1a56] overflow-hidden">
      <div className="container mx-auto px-4 mt-10 ">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We Maximize Added Value for Our Clients
          </h1>
          <p className="text-gray-300 text-lg">
            Our proven strategies ensure we deliver consistent and exceptional results.
          </p>
        </motion.div>

        {/* Grid Layout */}
        {/* Strategy Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="transform-gpu"
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-pink-400 shadow-md hover:shadow-pink-200/40 transition-all duration-300 rounded-2xl">
                <CardContent className="flex flex-col justify-between p-6 min-h-[360px] sm:min-h-[380px] lg:min-h-[400px]">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-3">
                      <strategy.icon className="w-9 h-9 text-red-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-gray-900">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mt-1 text-center">
                      Key focus areas for effective {strategy.title.toLowerCase()}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm sm:text-base text-gray-700">
                    {strategy.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-start gap-2"
                      >
                        <ArrowRight className="w-4 h-4 text-red-600 mt-1" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>


        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
         
        </motion.div>
        
        <CTABanner 
          heading="Ready to Elevate Your Brand?"
          subheading="Schedule a consultation with our experts to discuss how our services can be tailored to your specific needs."
          buttonText="Book a Free Strategy Call"
        />
      </div>
    
    </section >
  );
}
