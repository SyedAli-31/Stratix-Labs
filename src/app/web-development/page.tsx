'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  const [contentRef] = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const found = services.find(s => s.title === 'Web Development');
    if (found) {
      const convertedService: ServiceType = {
        id: String(found.id), // Convert number to string safely
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

  // --- Rest of your code remains the same (no errors, no 'any') ---

  const benefits = [
    "Fully responsive websites designed to engage users",
    "SEO-friendly development for better search engine rankings",
    "Custom-built solutions tailored to your business needs",
    "Fast-loading pages with optimized performance",
    "Ongoing support and maintenance for your web presence"
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We begin by understanding your brand, goals, and audience."
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our team designs custom wireframes and prototypes for approval."
    },
    {
      step: 3,
      title: "Development",
      description: "We develop the site with high standards of performance and security."
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "We test the website across devices and browsers, ensuring top performance."
    },
    {
      step: 5,
      title: "Launch & Maintenance",
      description: "Once launched, we offer continuous support and updates to keep your site performing."
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
      {/* rest of your JSX exactly as it was, no changes needed */}
    </div>
  );
};

export default WebDevelopment;
