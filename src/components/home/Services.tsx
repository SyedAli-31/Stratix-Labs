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
    <div id="services" className="relative py-10 overflow-hidden" ref={ref}>
<div className="absolute inset-0 z-0 overflow-hidden">
  {/* Stormy Clouds Layer */}
  <div className="absolute inset-0 z-0 overflow-hidden">
  {/* Static Stormy Cloud Background */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover opacity-90"
    style={{
      backgroundImage: `url('https://www.transparenttextures.com/patterns/cloudy-day.png')`, // lightweight cloudy texture
      backgroundColor: "#1E293B", // dark base
    }}
  />

  {/* Occasional Lightning Flicker - only once on mount */}
  <motion.div
    className="absolute inset-0 bg-white pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.08, 0] }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      delay: 2,
    }}
    style={{ mixBlendMode: "screen" }}
  />

  {/* Ocean Wave Layer */}
  <motion.div
    className="absolute inset-0 opacity-50"
    initial={{ backgroundPosition: "0% 100%" }}
    animate={{ backgroundPosition: "100% 100%" }}
    transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2300f0ff' fill-opacity='0.3' d='M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,160C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  />
</div>

</div>

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
         {/* Services Section */}
         <section className="py-1 px-4 mb-10 " id="other-services">
     <div className="container mx-auto max-w-6xl">
       <div className="text-center mb-14">
         <h2 className="text-4xl font-bold text-yellow-500 tracking-tight">Other Related Services</h2>
         <p className="text-muted-foreground mt-3 text-lg">
           Explore our range of professional cleaning solutions
         </p>
       </div>
   
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           {
             title: "Home Cleaning",
             desc: "Thorough residential cleaning for a healthier, fresher living space.",
             link: "/home-cleaning",
             icon: <path d="M3 9.5L12 4l9 5.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />,
           },
           {
             title: "Carpet Cleaning",
             desc: "Remove deep stains, dirt, and allergens with our expert carpet services.",
             link: "/carpet-cleaning",
             icon: <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
           },
           {
             title: "Duct Cleaning",
             desc: "Improve indoor air quality with complete duct and vent cleaning.",
             link: "/duct-cleaning",
             icon: <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2" />,
           },
           {
             title: "Car Detailing",
             desc: "Premium interior and exterior car cleaning for a showroom finish.",
             link: "/car-detailing",
             icon: <path d="M3 13h18l-1.5-5h-15L3 13Zm0 0v5a2 2 0 0 0 2 2h2v-3h10v3h2a2 2 0 0 0 2-2v-5" />,
           },
           {
             title: "Sanitization",
             desc: "Professional-grade disinfection services for homes and offices.",
             link: "/sanitization",
             icon: (
               <>
                 <path d="M12 2v20" />
                 <path d="M5 8h14" />
                 <path d="M5 16h14" />
               </>
             ),
           },
           {
             title: "Deep Cleaning",
             desc: "Intensive cleaning that targets hidden dirt and bacteria in every corner.",
             link: "/deep-cleaning",
             icon: (
               <>
                 <path d="M3 3h18v18H3V3z" />
                 <path d="M9 9h6v6H9z" />
               </>
             ),
           },
         ].map((service, i) => (
           <motion.div
             key={i}
             whileHover={{ scale: 1.04 }}
             transition={{ duration: 0.35 }}
             className="relative group p-6 rounded-3xl border shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-purple-500/20 bg-gradient-to-br from-[#10121d] via-[#0b0d19] to-[#0a0a16] border-gray-700"
           >
             <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
               <svg
                 className="w-6 h-6 text-primary"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 viewBox="0 0 24 24"
               >
                 {service.icon}
               </svg>
             </div>
   
             <h3 className="text-2xl font-semibold mb-2 transition-colors group-hover:text-primary text-white">
               {service.title}
             </h3>
   
             <p className="text-gray-400 mb-5 leading-relaxed">{service.desc}</p>
   
             <Link href={service.link}>
               <span className="inline-flex items-center text-sm font-medium hover:underline transition-colors text-primary">
                 Learn more
                 <svg
                   className="w-4 h-4 ml-1"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   viewBox="0 0 24 24"
                 >
                   <path d="M5 12h14" />
                   <path d="m12 5 7 7-7 7" />
                 </svg>
               </span>
             </Link>
           </motion.div>
         ))}
       </div>
     </div>
     </section>
      </div>
    </div>
  );
};

export default Services;
