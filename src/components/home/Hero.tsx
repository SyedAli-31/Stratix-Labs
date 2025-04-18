"use client";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine"; // <- Updated to Engine type

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-foreground bg-background overflow-hidden">
      <HeroBackground particlesInit={particlesInit} />

      {/* Hero Content */}
      <div className="z-10 text-center px-4 sm:px-10">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-accent-foreground bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Stratix Labs: Elevate Your Digital Presence
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          We blend innovation, design, and strategy to help brands thrive in the digital era.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <a
            href="#services"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent-foreground text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// ✅ Update type here to return Promise<void>
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
          fpsLimit: 60,
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
                distance: 140,
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
              distance: 150,
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
              speed: 1,
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
