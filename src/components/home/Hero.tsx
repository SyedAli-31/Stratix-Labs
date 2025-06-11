"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import type { Engine } from "tsparticles-engine";

// Import icons
import {  FiArrowRight } from "react-icons/fi";

// Proper dynamic imports
const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
  loading: () => null
});

// Type definitions
interface FloatingObjectProps {
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
  animationDelay?: number;
  className?: string;
  id?: number;
}

interface GlowingOrbProps {
  className: string;
  size: string;
  color: string;
  delay?: number;
  id?: number;
}

// Optimized 3D Object Component
const FloatingObject: React.FC<FloatingObjectProps> = ({
  children,
  initialX = 0,
  initialY = 0,
  animationDelay = 0,
  className = "",
  id = 0
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: [initialX, initialX + 10, initialX - 5, initialX],
        y: [initialY, initialY - 8, initialY + 5, initialY],
        opacity: 1,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: animationDelay + (id * 0.05),
      }}
    >
      {children}
    </motion.div>
  );
};

// Optimized GlowingOrb component
const GlowingOrb: React.FC<GlowingOrbProps> = ({ className, size, color, delay = 0, id = 0 }) => {
  return (
    <motion.div
      className={`rounded-full blur-2xl opacity-20 absolute ${className}`}
      style={{
        background: color,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        scale: [0.9, 1, 0.9],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay + (id * 0.05),
        ease: "linear"
      }}
    />
  );
};

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [showParticles, setShowParticles] = useState<boolean>(false);
  const [ , setParticlesLoaded] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  
  const scrollScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fixed particles initialization
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    try {
      // Dynamic import inside the callback
      const { loadSlim } = await import("tsparticles-slim");
      await loadSlim(engine);
      setParticlesLoaded(true);
    } catch (error) {
      console.error("Failed to load particles:", error);
    }
  }, []);

  useEffect(() => {
    // Mount immediately for content
    setIsMounted(true);

    // Show particles after page is loaded and idle
    const showParticlesTimer = setTimeout(() => {
      if (document.readyState === 'complete') {
        // Wait for next idle period
        if (window.requestIdleCallback) {
          window.requestIdleCallback(() => {
            setShowParticles(true);
          }, { timeout: 2000 });
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => setShowParticles(true), 1500);
        }
      } else {
        // If document is still loading, wait for load event
        const handleLoad = () => {
          setTimeout(() => setShowParticles(true), 1000);
        };
        window.addEventListener('load', handleLoad, { once: true });
        return () => window.removeEventListener('load', handleLoad);
      }
    }, 800);

    // Optimized cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const cursor = document.querySelector('.cursor-glow');
      if (cursor) {
        (cursor as HTMLElement).style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
        (cursor as HTMLElement).style.opacity = '0.8';
      }
    };

    // Use passive listeners for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearTimeout(showParticlesTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const staggerDelay = 0.4;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center text-white bg-[#030014] overflow-hidden"
    >
      {/* Optimized cursor glow */}
      <div className="cursor-glow fixed w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-600/15 to-blue-500/15 blur-[50px] pointer-events-none opacity-0 transition-opacity duration-300 will-change-transform" />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Static background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0a0a1a] via-[#070718] to-[#030014]" />

        {/* Lazy loaded particles */}
        {showParticles && (
          <HeroBackground particlesInit={particlesInit} />
        )}

        {/* Optimized glowing orbs */}
        <GlowingOrb
          id={0}
          className="-top-[10%] -right-[5%]"
          size="30rem"
          color="linear-gradient(120deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15))"
        />
        <GlowingOrb
          id={1}
          className="-bottom-[15%] -left-[10%]"
          size="35rem"
          color="linear-gradient(120deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))"
          delay={0.5}
        />
      </div>

      {/* Reduced 3D Elements */}
      <AnimatePresence>
        {isMounted && (
          <>
            <FloatingObject id={0} initialX={-150} initialY={-100} animationDelay={0.5} className="left-[10%] top-[20%]">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg opacity-25" />
            </FloatingObject>
            <FloatingObject id={1} initialX={80} initialY={30} animationDelay={0.3} className="right-[15%] top-[15%]">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full opacity-20" />
            </FloatingObject>
            <FloatingObject id={2} initialX={-30} initialY={60} animationDelay={0.8} className="left-[20%] bottom-[20%]">
              <div className="w-8 h-8 border border-purple-400 rounded-full opacity-20" />
            </FloatingObject>
          </>
        )}
      </AnimatePresence>

      {/* Hero Content Container */}
      <motion.div
        className="z-10 max-w-7xl w-full px-4 sm:px-8 mx-auto"
        style={{ scale: scrollScale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center py-16 sm:py-24">

          {/* Text Content */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">

            {/* Fast loading badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-sm text-blue-300 font-medium border border-blue-500/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Tailored Solutions</span>
              </span>
            </motion.div>

            {/* Optimized Main Heading */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="inline-block">We Build</span>{" "}
                  <span className="inline-block relative mt-1">
                    <span className="relative z-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-xl">
                      Brands
                    </span>
                    <motion.span
                      className="absolute -bottom-1.5 left-0 w-full h-[6px] bg-gradient-to-r from-yellow-500/50 to-yellow-500/0"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    />
                  </span>{" "}
                  <span className="md:block">
                    That <span className="text-cyan-400 inline-block ml-2">Leave a Mark</span>
                  </span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: staggerDelay }}
              >
                At <span className="text-white font-semibold relative">
                  Stratix Labs
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                </span>, We craft bold, transformative digital experiences powered by strategy, innovation, and design. From startups to enterprises, we turn visions into reality by shaping brands that resonate.
              </motion.p>
            </div>

            {/* Fast loading CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center lg:justify-start pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: staggerDelay * 2 }}
            >
              <Link
                href="#services"
                className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Services
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/contact"
                className="group relative px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:text-black hover:bg-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let&apos;s Talk
                </span>
                <motion.span
                  className="absolute inset-0 rounded-full bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Priority Image for LCP */}
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Image
                src="/her.png"
                alt="Hero Visual"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl object-cover"
                priority
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

// Optimized background particles component
const HeroBackground = ({
  particlesInit,
}: {
  particlesInit: (engine: Engine) => Promise<void>;
}) => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
       <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#0B1120" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.8,
                },
              },
              push: {
                quantity: 4
              }
            },
          },
          particles: {
            color: {
              value: ["#9333EA", "#4F46E5", "#0EA5E9", "#8B5CF6"],
            },
            links: {
              color: "#9333EA",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 1,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1
              }
            },
          },
          detectRetina: true,
        }}
      />
    </div>
 
    </motion.div>
  );
};
