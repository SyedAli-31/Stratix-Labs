"use client";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Link from "next/link";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-foreground bg-background overflow-hidden">
      <HeroBackground particlesInit={particlesInit} />

      {/* Hero Content */}
      <div className="z-10 text-center px-4 sm:px-10 max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-500  to-yellow-400 bg-clip-text text-transparent drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We Build Brands That Leave a Mark
        </motion.h1>

        <motion.p
          className="mt-6 text-white   sm:text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          At <span className="text-white font-semibold">Stratix Labs</span>, we craft bold digital experiences powered by strategy,
          innovation, and design. From startups to enterprises, we turn visions into reality.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Link
            href="/services"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-background transition-all duration-300"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// Background particles
const HeroBackground = ({ particlesInit }: { particlesInit: (engine: Engine) => Promise<void> }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#0B1120",
            },
          },
          fpsLimit: 400,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 250,
                links: {
                  opacity: 1,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#9333EA",
            },
            links: {
              color: "#9333EA",
              distance: 400,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
