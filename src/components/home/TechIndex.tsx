"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    description: "Empowering businesses through innovative digital solutions",
    image: "/mission.jpg",
  },
  {
    title: "Our Vision",
    path: "/vision",
    description: "Leading the future of digital innovation and transformation",
    image: "/mobile.png",
  },
  {
    title: "Our Philosophy",
    path: "/philosophy",
    description: "Guided by principles that define who we are",
    image: "/model.png",
  },
  {
    title: "Our Strategy",
    path: "/strategy",
    description: "Systematic approach to delivering excellence",
    image: "/seo.webp",
  },
];

export default function TechIndex() {
  return (
    <section className="relative py-28 flex justify-center bg-[#ffffff] overflow-hidden">
      {/* Decorative SVG background top edge */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-48"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00008b" // Tailwind orange-500
            fillOpacity="1"
            d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,133.3C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
      {/* Overlay diagonal gradient */}
      {/* === Abstract Colorful Top Wave (Like Image) === */}





      {/* Main Content */}
      <div className="container relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 relative z-10"
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-black font-bold group-hover:text-red-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-red-600">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-400 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#00008b] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophies Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative z-10"
          >
            {philosophies.map((item, index) => (
              <Link key={index} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer relative group overflow-hidden rounded-lg shadow-lg"
                >
                  {/* Background Image */}
                  <div className="relative w-full h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 w-full p-4 text-white bg-black/70 group-hover:bg-red-600 transition-all duration-300">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      {/* === Oceanic Bottom Wave === */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none rotate-360">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >


        </svg>
      </div>

    </section>
  );
}