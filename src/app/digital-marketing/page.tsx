'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DigitalMarketingPage = () => {
  const [contentRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  // Unique Content Start
  const benefits = [
    "360° digital campaign management across all channels",
    "Real-time performance tracking and optimization",
    "Custom audience targeting strategies",
    "Conversion rate optimization expertise",
    "Transparent reporting with actionable insights"
  ];

  const process = [
    { step: 1, title: "Audit & Benchmarking", description: "Comprehensive analysis of your current digital presence" },
    { step: 2, title: "Channel Strategy", description: "Selecting the right mix of digital channels for your goals" },
    { step: 3, title: "Campaign Design", description: "Creating high-converting ad creatives and landing pages" },
    { step: 4, title: "Launch & Monitor", description: "Precision targeting and continuous performance tracking" },
    { step: 5, title: "Scale & Optimize", description: "Data-driven adjustments to maximize ROI" }
  ];
  // Unique Content End

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-950">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #f59e0b, #b45309)', // Amber gradient
            backgroundSize: 'cover'
          }}
        />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <Link href="/services">
            <Button variant="outline" className="mb-8 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-300 to-amber-500">
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive digital marketing campaigns that drive traffic, engagement, and conversions across multiple channels.
            </p>
            <Link href="/contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">About Our Digital Marketing Service</h2>
            <p className="text-gray-300 mb-6">
              In today&apos;s digital landscape, a strategic approach to online marketing is essential. Our campaigns are designed to deliver measurable results across all digital channels.
            </p>
            <p className="text-gray-300 mb-6">
              We combine data analytics with creative execution to ensure your message reaches the right audience at the right time.
            </p>
            <p className="text-gray-300 mb-8">
              From social media to search engines, we optimize every touchpoint in the customer journey.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-2">
                Discuss Your Campaign
              </Button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map(step => (
                <div key={step.step} className="relative pl-12 border-l border-gray-800">
                  <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Grow Online?</h3>
              <p className="text-gray-300 mb-6">
                Our digital marketing strategies deliver real results. Let&apos;s discuss how we can help you achieve your goals.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;