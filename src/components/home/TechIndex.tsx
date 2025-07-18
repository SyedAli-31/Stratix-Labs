"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Mobile Development", percentage: 87 },
  { name: "Web Development", percentage: 90 },
  { name: "Software Development", percentage: 90 },
  { name: "Graphic Design", percentage: 95 },
  { name: "2D & 3D Animation", percentage: 87 },
  { name: "SEO", percentage: 83 },
];

const philosophies = [
  {
    title: "Our Mission",
    path: "/mission",
    description: "Empowering businesses through digital solutions",
    image: "/mission.png",
  },
  {
    title: "Our Vision",
    path: "/vision",
    description: "Leading the future of digital innovation and transformation",
    image: "/vision.jpg",
  },
  {
    title: "Our Philosophy",
    path: "/philosophy",
    description: "Guided by principles that define who we are",
    image: "/philosophy.jpg",
  },
  {
    title: "Our Strategy",
    path: "/strategy",
    description: "Systematic approach to delivering excellence",
    image: "/strategy.png",
  },
];

export default function TechIndex() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-28 md:px-16 px-2 flex justify-center bg-[#ffffff] overflow-hidden">
      {/* Decorative SVG top wave */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-48"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00008b"
            fillOpacity="1"
            d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,133.3C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container relative z-10" ref={ref}>
        {inView && (
          <>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl font-bold mb-4 text-black">
                Improve and Innovate with the Tech Trends
              </h2>
              <p className="text-gray-800 max-w-2xl mx-auto">
                We hire and build your own remote dedicated development teams tailored to your specific needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center ml-2 mr-2">
              {/* Skills Section */}
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-black font-bold group-hover:text-red-600 transition-colors">
                        {skill.name}
                      </span>
                     
                    </div>
                    <div className="h-2 bg-gray-400 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#00008b] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Philosophies Section */}
              <div className="grid grid-cols-2 gap-4 ">
                {philosophies.map((item, index) => (
                  <Link key={index} href={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer relative group overflow-hidden rounded-lg shadow-lg"
                    >
                      <div className="relative w-full h-40">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                      </div>
                      <div className="absolute h-24 bottom-0 w-full p-4 text-white bg-black/70 group-hover:bg-red-600 transition-all duration-300">
                        <h3 className="text-[16px] font-semibold">{item.title}</h3>
                        <p className=" text-[9px] md:text-[13px]   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Decorative Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00008b"
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,208C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
