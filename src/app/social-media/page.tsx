'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SocialMediaPage = () => {
  const [contentRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  // ===== ONLY CHANGED CONTENT STARTS HERE =====
  const benefits = [
    "Platform-specific strategy for each network",
    "Daily community engagement and growth hacking",
    "Influencer partnership management",
    "Crisis management protocols",
    "Competitor benchmarking and analysis"
  ];

  const process = [
    { step: 1, title: "Profile Optimization", description: "Complete setup/refresh of all social profiles" },
    { step: 2, title: "Content Planning", description: "Monthly content calendar development" },
    { step: 3, title: "Engagement Strategy", description: "Daily monitoring and interaction plan" },
    { step: 4, title: "Paid Amplification", description: "Strategic boosting of top-performing content" },
    { step: 5, title: "Performance Review", description: "Monthly analytics reporting and adjustments" }
  ];
  // ===== ONLY CHANGED CONTENT ENDS HERE =====

  // ===== BELOW IS IDENTICAL TO BRAND STRATEGY PAGE =====
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
            backgroundImage: 'linear-gradient(to bottom right, #db2777, #9d174d)', // Pink gradient
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-300 to-pink-500">
              Social Media Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Strategic social media presence that builds community, increases engagement, and drives brand awareness.
            </p>
            <Link href="/contact">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg">
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
            <h2 className="text-3xl font-bold mb-6 text-white">About Our Social Media Service</h2>
            <p className="text-gray-300 mb-6">
              Social media is where conversations happen. We transform your profiles into vibrant communities that amplify your brand voice.
            </p>
            <p className="text-gray-300 mb-6">
              Our team handles everything from content creation to audience engagement, ensuring consistent brand messaging across all platforms.
            </p>
            <p className="text-gray-300 mb-8">
              We don&apos;t just post content - we build relationships that convert followers into customers.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-6 py-2">
                Discuss Your Social Strategy
              </Button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map(step => (
                <div key={step.step} className="relative pl-12 border-l border-gray-800">
                  <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-pink-600 to-pink-500 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Dominate Social Media?</h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s create a social presence that truly engages your audience and grows your business.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  Launch Social Strategy
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaPage;