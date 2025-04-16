'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// ✅ Define Service type based on services array
type Service = (typeof services)[number];

const ServicePage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [contentRef] = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    if (slug) {
      const found = services.find((s) => s.slug === slug);
      if (found) {
        setService(found);
      } else {
        router.push('/services');
      }
    }
  }, [slug, router]);

  if (!service) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <p className="text-white text-xl">Loading service...</p>
      </div>
    );
  }

  const benefits = [
    "Customized strategies tailored to your specific business goals",
    "Data-driven approach with regular performance reports",
    "Expert team with years of industry experience",
    "Transparent pricing with no hidden fees",
    "Continuous optimization based on real-time insights"
  ];

  const process = [
    { step: 1, title: "Discovery & Analysis", description: "We analyze your business and market." },
    { step: 2, title: "Strategy Development", description: "Custom strategies aligned to your goals." },
    { step: 3, title: "Implementation", description: "We implement with precision." },
    { step: 4, title: "Monitoring & Optimization", description: "Ongoing refinement to boost ROI." },
    { step: 5, title: "Reporting & Evaluation", description: "Clear, transparent performance reports." }
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-950">
      {/* HERO */}
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
            <Button variant="outline" className="mb-8 border-gray-700 text-gray-300 hover:bg-gray-800">
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

      {/* DETAILS */}
      <div ref={contentRef as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 md:px-8 py-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">About Our {service.title} Service</h2>
            <p className="text-gray-300 mb-6">
              At Stratix Labs, our {service.title} service is designed to help businesses achieve real results.
            </p>
            <p className="text-gray-300 mb-6">
              Our experienced professionals tailor strategies to your goals, backed by data and innovation.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="text-gray-300">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-primary/80 text-white">Discuss Your Project</Button>
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Process</h2>
            <div className="space-y-8">
              {process.map(step => (
                <div key={step.step} className="relative pl-12 border-l border-gray-800">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Let’s elevate your business with {service.title}. Reach out today.</p>
              <Link href="/contact">
                <Button className="w-full bg-primary text-white">Schedule a Consultation</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Explore Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <div key={s.id} className="bg-gray-900 border border-gray-800 rounded-lg hover:border-primary/50">
                  <div className={`h-2 bg-gradient-to-r ${s.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{s.description}</p>
                    <Link href={`/service/${s.slug}`}>
                      <Button variant="outline" className="w-full text-gray-300 hover:bg-gray-800">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
