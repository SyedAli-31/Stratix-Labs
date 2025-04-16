"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { CheckCircle, Users, Briefcase, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const Stratix: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary opacity-20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
            About Stratix Labs
          </h2>
          <p className="text-gray-300">
            We are a premium marketing agency dedicated to elevating brands through innovative strategies and creative excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="order-2 md:order-1" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-amber-500">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              At Stratix Labs, we believe that exceptional marketing is both an art and a science. Our mission is to create transformative strategies that connect brands with their audiences in meaningful ways, driving measurable results and lasting impact.
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Users size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Strategic Approach</h4>
                  <p className="mt-2 text-gray-300">We develop custom strategies based on deep market research and consumer insights.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Creative Excellence</h4>
                  <p className="mt-2 text-gray-300">Our award-winning creative team delivers impactful visuals and compelling messaging.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Lightbulb size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Measurable Results</h4>
                  <p className="mt-2 text-gray-300">We provide detailed analytics and reporting to track and optimize campaign performance.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 md:order-2 relative" variants={itemVariants}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-amber-500 rounded-lg blur-lg opacity-20"></div>
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Marketing strategy visualization"
              className="rounded-lg shadow-xl relative z-10"
              width={800}
              height={533}
            />

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-800">
                <div className="text-3xl font-bold mb-1 text-amber-500">
                  <AnimatedCounter target={250} suffix="+" duration={2} />
                </div>
                <div className="text-sm text-gray-300">Global Clients</div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-800">
                <div className="text-3xl font-bold mb-1 text-amber-500">
                  <AnimatedCounter target={55} suffix="+" duration={2} />
                </div>
                <div className="text-sm text-gray-300">Industry Awards</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
            variants={itemVariants}
          >
            <div className="text-amber-500 mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Data-Driven</h3>
            <p className="text-gray-300">
              We make decisions based on comprehensive data analysis and market research.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
            variants={itemVariants}
          >
            <div className="text-amber-500 mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Innovative</h3>
            <p className="text-gray-300">
              We stay ahead of trends to bring cutting-edge solutions to our clients.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
            variants={itemVariants}
          >
            <div className="text-amber-500 mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Collaborative</h3>
            <p className="text-gray-300">
              We work closely with clients to ensure their vision guides our strategy.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
            variants={itemVariants}
          >
            <div className="text-amber-500 mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Results-Focused</h3>
            <p className="text-gray-300">
              We&rsquo;re committed to achieving measurable outcomes for every campaign.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stratix;
