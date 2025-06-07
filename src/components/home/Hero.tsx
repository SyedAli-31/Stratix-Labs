"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
// Change the import to match the same package as your Particles component uses
import { loadSlim } from "tsparticles-slim"; // Stay with the original import from your code
import type { Engine } from "tsparticles-engine"; // Keep consistent with the original
import Link from "next/link";
import Image from "next/image";

// Import icons

import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import {
  SiAdobe, SiAmazon, SiGoogle, SiMeta, SiSlack
} from "react-icons/si";

// Utility functions
const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>): void {
    const later = () => {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};


interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
}

const isLowEndDevice = (): boolean => {
  const nav = navigator as ExtendedNavigator;
  return (
    typeof navigator !== 'undefined' &&
    (
      (nav.deviceMemory !== undefined && nav.deviceMemory < 4) ||
      (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4)
    )
  );
};



import {  FiArrowRight } from "react-icons/fi";

// Type definitions
b0cdf58 (Initial commit)
interface FloatingObjectProps {
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
  animationDelay?: number;
  className?: string;
}

interface GlowingOrbProps {
  className: string;
  size: string;
  color: string;
  delay?: number;
}

// 3D Object Component for visual effects
const FloatingObject: React.FC<FloatingObjectProps> = ({
  children,
  initialX = 0,
  initialY = 0,
  animationDelay = 0,
  className = ""
}) => {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(element);

  return () => {
    if (element) {
      observer.unobserve(element);
    }
  };
}, []);

  // Simplified animation for low-end devices
  const animationConfig = useMemo(() => {
    const isLow = isLowEndDevice();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return {
      duration: isLow || isMobile ? 8 : 12,
      ease: "easeInOut",
      delay: animationDelay,
      // Reduce movement range for low-end devices
      x: isLow || isMobile
        ? [initialX, initialX + 10, initialX - 5, initialX]
        : [initialX, initialX + 20, initialX - 10, initialX],
      y: isLow || isMobile
        ? [initialY, initialY - 8, initialY + 5, initialY]
        : [initialY, initialY - 15, initialY + 10, initialY],
    };
  }, [initialX, initialY, animationDelay]);



  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: [initialX, initialX + 20, initialX - 10, initialX],
        y: [initialY, initialY - 15, initialY + 10, initialY],
        opacity: 1,
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: animationDelay,
      }}
    >
      {children}
    </motion.div>
  );
};

// GlowingOrb component for background effects
const GlowingOrb: React.FC<GlowingOrbProps> = ({ className, size, color, delay = 0 }) => {

  const [isVisible, setIsVisible] = useState(false);
  const orbRef = useRef(null);

 useEffect(() => {
  const orb = orbRef.current;
  if (!orb) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(orb);

  return () => {
    if (orb) {
      observer.unobserve(orb);
    }
  };
}, []);

  // Simplified animation for mobile
  const animationConfig = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return {
      duration: isMobile ? 6 : 8,
      scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
      opacity: isMobile ? [0.15, 0.3, 0.15] : [0.2, 0.4, 0.2],
    };
  }, []);


  return (
    <motion.div
      className={`rounded-full blur-3xl opacity-30 absolute ${className}`}
      style={{
        background: color,
        width: size,
        height: size,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
      }}
    />
  );
};

// Galaxy Spiral Component - Exact match to the image


const Hero: React.FC = () => {
  const [, setIsLoaded] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle particles initialization with slim version as in original code
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    // Use loadSlim instead of loadFull to match your imports
    await loadSlim(engine);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);


    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedCheckMobile);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent): void => {

    // Add cursor glow effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const cursor = document.querySelector('.cursor-glow');
      if (cursor) {
        (cursor as HTMLElement).setAttribute(
          'style',
          `top: ${e.clientY - 200}px; left: ${e.clientX - 200}px; opacity: 1`
        );
      }
    };


    // Type-safe debounce with unknown args signature
    const debouncedHandleMouseMove: (...args: unknown[]) => void = debounce(
      handleMouseMove as (...args: unknown[]) => void,
      10
    );

    if (!isMobile) {
      window.addEventListener('mousemove', debouncedHandleMouseMove);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', debouncedHandleMouseMove);
      }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

    };
  }, []);


 



  const staggerDelay = 0.2;


  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center text-white bg-[#030014] overflow-hidden"
    >
      {/* Custom cursor glow effect */}
      <div className="cursor-glow fixed w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-500/30 blur-[80px] pointer-events-none opacity-0 transition-opacity duration-500" />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0a0a1a] via-[#070718] to-[#030014] opacity-90" />

        {/* Enhanced particle effects */}
        <HeroBackground particlesInit={particlesInit} />

        {/* Glowing orbs for atmosphere */}
        <GlowingOrb
          className="-top-[10%] -right-[5%]"
          size="40rem"
          color="linear-gradient(120deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))"
        />
        <GlowingOrb
          className="-bottom-[15%] -left-[10%]"
          size="45rem"
          color="linear-gradient(120deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2))"
          delay={2}
        />
      </div>

      {/* 3D Elements */}
      <AnimatePresence>
        {isMounted && (
          <>
            <FloatingObject initialX={-200} initialY={-150} animationDelay={1.5} className="left-[10%] top-[20%]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl opacity-40" />
            </FloatingObject>
            <FloatingObject initialX={100} initialY={50} animationDelay={0.8} className="right-[15%] top-[15%]">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full opacity-30" />
            </FloatingObject>
            <FloatingObject initialX={-50} initialY={100} animationDelay={2.3} className="left-[20%] bottom-[20%]">
              <div className="w-14 h-14 border-2 border-purple-400 rounded-full opacity-30" />
            </FloatingObject>
            <FloatingObject initialX={150} initialY={-80} animationDelay={1.2} className="right-[10%] bottom-[30%]">
              <div className="w-32 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-20 rotate-12" />
            </FloatingObject>
            <FloatingObject initialX={-30} initialY={-30} animationDelay={2} className="right-[30%] bottom-[15%]">
              <div className="w-12 h-12 border border-blue-300 rounded-md opacity-40 rotate-45" />
            </FloatingObject>
          </>
        )}
      </AnimatePresence>

      {/* Hero Content Container */}
      <motion.div
        className="z-10 max-w-7xl w-full px-4 sm:px-8 mx-auto"
        style={{ opacity: scrollOpacity, scale: scrollScale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center py-16 sm:py-24">

          {/* Text Content - Takes 3 columns on large screens */}
          <div className="lg:col-span-3 space-y-10 text-center lg:text-left">

            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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

            {/* Main Heading with advanced styling */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="overflow-hidden"
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="inline-block">We Build</span>{" "}
                  <span className="inline-block relative mt-1">
                    <span className="relative z-10 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-xl">
                      Brands
                    </span>
                    <motion.span
                      className="absolute -bottom-1.5 left-0 w-full h-[10px] bg-gradient-to-r from-yellow-500/60 to-yellow-500/0"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                    />
                  </span>{" "}
                  <span className="md:block">
                    That <span className="text-cyan-400 inline-block ml-2">Leave a Mark</span>
                  </span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: staggerDelay }}
              >
                At <span className="text-white font-semibold relative">
                  Stratix Labs
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 0.8 }}
                  />
                </span>, We craft bold, transformative digital experiences powered by strategy, innovation, and design. From startups to enterprises, we turn visions into reality by shaping brands that resonate.
              </motion.p>
            </div>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:items-center justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: staggerDelay * 2 }}
            >
              <Link
                href="#other-services"
                className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Services
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>

              <Link
                href="/contact"
                className="group relative px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:text-black hover:bg-white  transition-all duration-300"
              >
                <span className="relative z-10 flex items-center  justify-center gap-2">
                  Let&apos;s Talk
                </span>
                <motion.span
                  className="absolute inset-0 rounded-full bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <Image
              src="/her.png" // Replace with actual path
              alt="Hero Visual"
              width={600} // Adjust width as needed
              height={600} // Adjust height as needed
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>


      </motion.div>


    </section>
  );
};


export default Hero;



// Enhanced background particles - adjust parameters to work with slim version
const HeroBackground = ({
  particlesInit,
}: {
  particlesInit: (engine: Engine) => Promise<void>;
}) => {
  return (
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
  );
};

