'use client';

import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { services, type Service } from '@/lib/data'; // ✅ Correct type import
import { useEffect, useState } from 'react';

const BrandStrategyPage = () => {
  const [service, setService] = useState<Service | null>(null);
  const [contentRef] = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const foundService = services.find(s => s.title === 'Brand Strategy');
    if (foundService) {
      setService(foundService);
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
    "Customized brand positioning that differentiates you from competitors",
    "Audience research to identify core customer personas",
    "Brand voice and messaging framework development",
    "Competitive landscape analysis",
    "Brand architecture strategy for multi-product businesses"
  ];

  const process = [
    {
      step: 1,
      title: "Brand Audit",
      description: "We analyze your current brand assets, messaging, and market position."
    },
    {
      step: 2,
      title: "Market Research",
      description: "Deep dive into your audience demographics and competitor strategies."
    },
    {
      step: 3,
      title: "Positioning Workshop",
      description: "Collaborative sessions to define your unique value proposition."
    },
    {
      step: 4,
      title: "Messaging Framework",
      description: "Development of core messaging pillars and tone guidelines."
    },
    {
      step: 5,
      title: "Implementation Plan",
      description: "Roadmap for rolling out your new brand strategy across all touchpoints."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-950">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${service.color.split('from-')[1].split(' ')[0]}, ${service.color.split('to-')[1]})`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-gold">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">About Our {service.title} Service</h2>
            <p className="text-gray-300 mb-6">
              At Stratix Labs, our {service.title} service helps businesses establish a strong online presence with high-performance, user-friendly websites.
            </p>
            <p className="text-gray-300 mb-6">
              Our team creates customized solutions that are mobile-responsive, SEO-friendly, and tailored to your specific needs.
            </p>
            <p className="text-gray-300 mb-8">
              We focus on delivering top-notch websites that engage users and drive conversions.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-6 py-2">
                Discuss Your Project
              </Button>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map(step => (
                <div key={step.step} className="relative pl-12 border-l border-gray-800">
                  <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white font-bold">
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
                Discover how our {service.title} service can transform your business. Contact us today for a free consultation.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Related Services */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Explore Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
            .filter(s => s.title !== service.title)
            .slice(0, 3)
            .map(relatedService => (
              <div key={relatedService.id} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${relatedService.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{relatedService.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-2">{relatedService.description}</p>
                  <Link href={`/service/${relatedService.id}`}>
                    <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandStrategyPage;
