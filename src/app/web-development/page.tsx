'use client';

import { useEffect, useState } from 'react';

import { services } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
    const found = services.find((s) => s.title === 'Web Development');
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

  return (
    <div
      className="pt-24 pb-20 min-h-screen bg-gray-950"
      ref={contentRef}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-white mb-8">{service.title}</h1>
        <p className="text-lg text-white mb-12">{service.description}</p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Benefits</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg text-white">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Our Process</h2>
          <div className="space-y-8">
            {process.map((step) => (
              <div key={step.step} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-lg text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;
