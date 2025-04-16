'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SEO = () => {
  const [contentRef, isVisible] = useScrollAnimation<HTMLDivElement>();

  const benefits = [
    "Technical SEO audits and fixes",
    "Keyword research and mapping",
    "Backlink building strategy",
    "Local SEO optimization",
    "Continuous rank tracking"
  ];
  const process = [
    { step: 1, title: "Site Audit", description: "Comprehensive technical SEO analysis" },
    { step: 2, title: "Keyword Strategy", description: "Identifying high-value search opportunities" },
    { step: 3, title: "On-Page Optimization", description: "Content and metadata enhancements" },
    { step: 4, title: "Off-Page SEO", description: "Link building and authority signals" },
    { step: 5, title: "Monitoring", description: "Rank tracking and algorithm updates" }
  ];

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
            backgroundImage: 'linear-gradient(to bottom right, #7c3aed, #5b21b6)',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-purple-500">
              SEO Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8">
            Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.
            </p>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
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
            <h2 className="text-3xl font-bold mb-6 text-white">About Our SEO Optimization Service</h2>
            <p className="text-gray-300 mb-6">
            At Stratix Labs, our SEO Optimization service is designed to help businesses achieve their marketing goals through strategic, data-driven approaches. We combine industry expertise with innovative techniques to deliver exceptional results.
            </p>
            <p className="text-gray-300 mb-6">
            Our team of experienced professionals works closely with you to understand your unique needs and develop customized solutions that drive real business growth. We stay at the forefront of industry trends to ensure that your marketing efforts are always ahead of the curve.
            </p>
            <p className="text-gray-300 mb-8">
            Whether you&apos;re looking to increase brand awareness, generate leads, or boost conversions, our SEO Optimization service provides the tools and expertise you need to succeed in today&apos;s competitive marketplace.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-2">
                Discuss Your Brand Strategy
              </Button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map(step => (
                <div key={step.step} className="relative pl-12 border-l border-gray-800">
                  <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
              Discover how our SEO Optimization service can transform your business. Contact us today for a free consultation and take the first step toward achieving your marketing goals.


              </p>
              <Link href="/contact">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
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

export default SEO;