'use client';

import { useEffect, useState } from 'react';
import { services } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ServiceType = {
  id: string;
  title: string;
  description: string;
  color: string;
};

const WebDevelopment = () => {
  const [service, setService] = useState<ServiceType | null>(null);
  const [contentRef] = useScrollAnimation<HTMLDivElement>(); // no need to use isVisible

  useEffect(() => {
    const found = services.find((s) => s.title === 'Web Development');
    if (found) {
      const convertedService: ServiceType = {
        id: String(found.id),
        title: found.title,
        description: found.description,
        color: found.color,
      };
      setService(convertedService);
    }
  }, []);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Loading service details...</h2>
      </div>
    );
  }

  const benefits = [
    "Fully responsive websites designed to engage users",
    "SEO-friendly development for better search engine rankings",
    "Custom-built solutions tailored to your business needs",
    "Fast-loading pages with optimized performance",
    "Ongoing support and maintenance for your web presence",
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We begin by understanding your brand, goals, and audience.",
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our team designs custom wireframes and prototypes for approval.",
    },
    {
      step: 3,
      title: "Development",
      description: "We develop the site with high standards of performance and security.",
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "We test the website across devices and browsers, ensuring top performance.",
    },
    {
      step: 5,
      title: "Launch & Maintenance",
      description: "Once launched, we offer continuous support and updates to keep your site performing.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #3b82f6, #1e40af)',
            backgroundSize: 'cover',
          }}
        />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <Link href="/services">
            <Button variant="outline" className="mb-8 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-blue-600">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // 👈 yeh key fix hai
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Benefits of Our Web Development Service</h2>
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
                Let&apos;s Build Your Website
              </Button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map((step) => (
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
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Launch Your Website?</h3>
              <p className="text-gray-300 mb-6">
                We deliver high-performance websites tailored to your business needs. Let&apos;s collaborate and build something great!
              </p>
              <Link href="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
