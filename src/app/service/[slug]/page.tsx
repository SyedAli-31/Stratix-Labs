'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { otherServices } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Check, Rocket, ArrowLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { use } from 'react';

// Define the service type based on what's expected from otherServices
interface Service {
  slug: string;
  title: string;
  desc: string;
  // Add other properties your service object might have
}

interface Props {
  params: Promise<{ slug: string }>;
}

const ServiceDetailPage = ({ params }: Props) => {
  const { slug } = use(params);

  const service = otherServices.find((s: Service) => s.slug === slug);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // simulate a short loading time
    return () => clearTimeout(timer);
  }, []);

  if (!service) return notFound();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin rounded-full h-full w-full border-4 border-t-transparent border-blue-400" />
          <div className="absolute top-2 left-2 right-2 bottom-2 animate-pulse rounded-full h-5/6 w-5/6 bg-blue-100/20" />
        </div>
        <h2 className="mt-8 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
          Loading Stratix Magic...
        </h2>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };



  interface ProcessStep {
    title: string;
    description: string;
  }

  const processSteps: ProcessStep[] = [
    { title: "Discovery & Analysis", description: "We conduct a comprehensive analysis of your business needs, market position, and target audience to establish clear objectives and KPIs." },
    { title: "Strategy Development", description: "Our experts craft custom strategies aligned with your business goals, with a clear roadmap for implementation and expected outcomes." },
    { title: "Implementation", description: "We execute the strategy with precision, utilizing cutting-edge tools and methodologies to maximize efficiency and effectiveness." },
    { title: "Reporting & Evaluation", description: "Receive detailed performance reports with actionable insights to understand the impact of our services on your business metrics." },
    { title: "Monitoring & Optimization", description: "Continuous refinement of strategies based on real-time data to ensure optimal ROI and sustained growth." },
  ];

  const benefits: string[] = [
    "Customized strategies tailored to your specific business goals and market position",
    "Data-driven approach with regular performance reports and actionable insights",
    "Expert team with years of industry experience across diverse market segments",
    "Transparent pricing with no hidden fees and a clear return on investment framework",
    "Continuous optimization based on real-time analytics and market trends"
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section with parallax effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-25">

          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        </div>

        <motion.div
          className="relative py-32 md:py-40"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start">
              <Link href="/services">
                <Button variant="outline" className="mb-12 border border-blue-300/30 text-blue-100 hover:bg-blue-800/50 rounded-full px-6 py-2 shadow-lg backdrop-blur-sm">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Button>
              </Link>

              <div className="max-w-3xl">
                <motion.div className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-100/20 backdrop-blur-sm text-blue-100 text-sm font-medium" variants={itemVariants}>
                  Premium Digital Service
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
                  variants={itemVariants}
                >
                  {service.title}
                </motion.h1>

                <motion.div
                  className="w-20 h-1.5 bg-blue-400 rounded-full mb-8"
                  variants={itemVariants}
                />

                <motion.p
                  className="text-xl md:text-2xl text-blue-50 max-w-3xl mb-12 font-light leading-relaxed"
                  variants={itemVariants}
                >
                  {service.desc}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-blue-50 text-blue-900 font-semibold rounded-full px-8 py-6 shadow-xl hover:shadow-blue-300/30 transition-all duration-300 text-base"
                  >
                    <Rocket className="mr-3 h-5 w-5" />
                    Start Your Project
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 font-medium rounded-full px-8 py-6 transition-all duration-300 text-base"
                  ><Link href={"/contact"}>
                      Book a Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px]">
            <path d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Stats Section with Card Rotation on Hover */}

      {/* Service Benefits Section */}
      <div className="bg-blue-900 py-24 md:py-32 relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Benefits */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100/20 backdrop-blur-sm text-blue-100 text-sm font-medium mb-6">
                Why Choose Us
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                Transformative Benefits That <span className="text-blue-300">Drive Growth</span>
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/30 group-hover:bg-blue-400/50 flex items-center justify-center transition-all duration-300">
                      <Check className="h-4 w-4 text-blue-100" />
                    </div>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Image/Visual */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-700/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-700 to-blue-900 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-blue-600/30 rounded-full">
                      <Star className="h-14 w-14 text-blue-200" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Results-Driven Approach</h3>
                  <p className="text-blue-100 max-w-md mx-auto">
                    Our analytical methodology ensures measurable outcomes and continuous improvement for your marketing campaigns.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px]">
            <path d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H0V120Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Process Section with Interactive Tabs */}
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              A Proven Process for Success
            </h2>
            <p className="text-gray-600 text-lg">
              Our systematic approach ensures consistent results and maximum value for your business.
            </p>
          </motion.div>

          {/* Interactive Process Tabs - Scrollable on mobile */}
          <div className="mb-8 flex justify-center overflow-x-auto pb-2 px-4 -mx-4 md:px-0 md:-mx-0">
            <div className="inline-flex rounded-full p-1 bg-blue-50 border border-blue-100 whitespace-nowrap">
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${activeTab === idx
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-700 hover:bg-blue-100'
                    }`}
                >
                  Step {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <div className="aspect-square rounded-2xl bg-blue-100 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white text-xl sm:text-2xl font-bold flex items-center justify-center mx-auto mb-6">{activeTab + 1}</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-blue-900">{processSteps[activeTab].title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">{processSteps[activeTab].title}</h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{processSteps[activeTab].description}</p>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setActiveTab((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))}
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 w-full sm:w-auto"
                      >
                        Previous Step
                      </Button>

                      <Button
                        onClick={() => setActiveTab((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))}
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                      >
                        Next Step <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-400/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/20 filter blur-3xl"></div>

        <motion.div
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100/20 backdrop-blur-sm text-blue-100 text-sm font-medium mb-6">
            Get Started Today
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Revolutionize Your <span className="text-blue-300">Marketing Strategy</span>?
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their digital presence with our expert services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-blue-50 text-blue-900 font-semibold rounded-full px-8 py-6 shadow-xl hover:shadow-blue-300/30 transition-all duration-300 text-base"
            >
              <Rocket className="mr-3 h-5 w-5" />
           <Link href={"/about"}>
                   Launch Your Success Now</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium rounded-full px-8 py-6 transition-all duration-300 text-base"
            ><Link href={"/contact"}>
                Schedule a Strategy Call</Link>

            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;