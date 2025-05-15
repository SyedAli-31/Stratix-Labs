'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import CTABanner from './CTABanner';
import {
  BarChart3,
  Megaphone,
  PenTool,
  Instagram,
  Search,
  Code,
} from 'lucide-react';

const services = [
  {
    id: 1,
    slug: 'brand-strategy',
    title: 'Brand Strategy',
    description:
      'Develop a compelling brand identity and positioning that resonates with your target audience and differentiates you from competitors.',
    icon: <BarChart3 className="h-8 w-8" />,
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 2,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing campaigns that drive traffic, engagement, and conversions across multiple channels.',
    icon: <Megaphone className="h-8 w-8" />,
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 3,
    slug: 'content-creation',
    title: 'Content Creation',
    description:
      'High-quality, engaging content that tells your brand story and connects with your audience on an emotional level.',
    icon: <PenTool className="h-8 w-8" />,
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 4,
    slug: 'social-media-management',
    title: 'Social Media Management',
    description:
      'Strategic social media presence that builds community, increases engagement, and drives brand awareness.',
    icon: <Instagram className="h-8 w-8" />,
    color: 'from-pink-600 to-pink-800',
  },
  {
    id: 5,
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    description:
      'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
    icon: <Search className="h-8 w-8" />,
    color: 'from-green-600 to-green-800',
  },
  {
    id: 6,
    slug: 'web-development',
    title: 'Web Development',
    description:
      'Responsive, user-friendly websites that provide exceptional user experience and drive conversions.',
    icon: <Code className="h-8 w-8" />,
    color: 'from-cyan-600 to-cyan-800',
  },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="services"
      className="relative py-10 bg-blue-600 overflow-hidden"
      ref={ref}
    >
      <div className="relative container mx-auto px-4 md:px-8 z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-300">
            Our Services
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Discover our comprehensive range of marketing services designed to elevate your brand,
            engage your audience, and drive measurable results for your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={`/service/${service.slug}`}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  gradientColor={`bg-gradient-to-br ${service.color}`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <CTABanner
          heading="Ready to Elevate Your Brand?"
          subheading="Schedule a consultation with our experts to discuss how our services can be tailored to your specific needs."
          buttonText="Book a Free Strategy Call"
        />
      </div>
    </div>
  );
};

export default Services;
