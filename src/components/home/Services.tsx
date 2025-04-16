"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "./CTABanner";
import {
  BarChart3,
  Megaphone,
  PenTool,
  Instagram,
  Search,
  Code,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "brand-strategy",
    title: "Brand Strategy",
    description:
      "Develop a compelling brand identity and positioning that resonates with your target audience and differentiates you from competitors.",
    icon: <BarChart3 className="h-8 w-8" />,
    color: "from-purple-600 to-purple-800",
  },
  {
    id: 2,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing campaigns that drive traffic, engagement, and conversions across multiple channels.",
    icon: <Megaphone className="h-8 w-8" />,
    color: "from-amber-500 to-amber-700",
  },
  {
    id: 3,
    slug: "content-creation",
    title: "Content Creation",
    description:
      "High-quality, engaging content that tells your brand story and connects with your audience on an emotional level.",
    icon: <PenTool className="h-8 w-8" />,
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 4,
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Strategic social media presence that builds community, increases engagement, and drives brand awareness.",
    icon: <Instagram className="h-8 w-8" />,
    color: "from-pink-600 to-pink-800",
  },
  {
    id: 5,
    slug: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
    icon: <Search className="h-8 w-8" />,
    color: "from-green-600 to-green-800",
  },
  {
    id: 6,
    slug: "web-development",
    title: "Web Development",
    description:
      "Responsive, user-friendly websites that provide exceptional user experience and drive conversions.",
    icon: <Code className="h-8 w-8" />,
    color: "from-cyan-600 to-cyan-800",
  },
];

const Services = () => {
  const [hydrated, setHydrated] = useState(false); // To check if the component is mounted
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  useEffect(() => {
    setHydrated(true);
  }, []);

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

  if (!hydrated) {
    return null; // Ensure nothing is rendered until hydration is complete
  }

  return (
    <section id="services" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-95 z-0"></div>

      {/* Animated Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10 z-0"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-300 to-amber-500">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of marketing services designed to elevate your brand,
              engage your audience, and drive measurable results for your business.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <Link key={service.id} href={`/service/${service.slug}`}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradientColor={`bg-gradient-to-br ${service.color}`}
                variants={itemVariants}
              />
            </Link>
          ))}
        </motion.div>

        <CTABanner 
          heading="Ready to Elevate Your Brand?"
          subheading="Schedule a consultation with our experts to discuss how our services can be tailored to your specific needs."
          buttonText="Book a Free Strategy Call"
        />
      </div>
    </section>
  );
};

export default Services;
