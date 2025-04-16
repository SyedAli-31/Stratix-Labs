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
    <div className="min-h-screen bg-gradient-to-br from-[#0e0c2f] via-[#140e44] to-[#1c1a56] py-10 ">
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
              className="transform-gpu"
            >
              <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-700 hover:border-pink-500 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 p-6 rounded-2xl">
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                    <strategy.icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-white mb-4">{strategy.title}</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    {strategy.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4 text-red-600" />
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
    </div>
  );
}
