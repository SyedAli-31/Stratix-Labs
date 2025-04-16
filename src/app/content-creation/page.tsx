'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContentCreationPage = () => {
  const [contentRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  // ===== ONLY CHANGED CONTENT STARTS HERE =====
  const benefits = [
    "Story-driven content that resonates emotionally",
    "SEO-optimized writing with keyword strategy",
    "Professional photography/videography services",
    "Consistent brand voice across all content",
    "Content calendar and publishing strategy"
  ];

  const process = [
    { step: 1, title: "Content Strategy", description: "Developing themes aligned with business goals" },
    { step: 2, title: "Creative Briefing", description: "Defining tone, style, and messaging guidelines" },
    { step: 3, title: "Production", description: "High-quality content creation by specialists" },
    { step: 4, title: "Editing & Optimization", description: "Refining for clarity and engagement" },
    { step: 5, title: "Distribution Plan", description: "Strategic publishing across channels" }
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
            backgroundImage: 'linear-gradient(to bottom right, #2563eb, #1e40af)', // Blue gradient
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-blue-500">
              Content Creation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              High-quality, engaging content that tells your brand story and connects with your audience on an emotional level.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
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
            <h2 className="text-3xl font-bold mb-6 text-white">About Our Content Creation Service</h2>
            <p className="text-gray-300 mb-6">
              Great content is the backbone of digital marketing. We craft compelling narratives that capture attention and drive engagement.
            </p>
            <p className="text-gray-300 mb-6">
              From blog posts to video production, every piece is designed to reinforce your brand identity and business objectives.
            </p>
            <p className="text-gray-300 mb-8">
              We don&apos;t just create content - we create conversations that matter to your audience.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2">
                Discuss Your Content Needs
              </Button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map(step => (
                <div key={step.step} className="relative pl-12 border-l border-gray-800">
                  <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Elevate Your Content?</h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s create content that truly resonates with your audience and drives business results.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Start Content Strategy
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentCreationPage;