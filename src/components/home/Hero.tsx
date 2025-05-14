"use client";

import React, { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import Link from "next/link";
import type { Engine } from "tsparticles-engine";

import type { ISourceOptions } from "tsparticles-engine";

// Dynamically import heavy components
const Particles = dynamic(() => import('react-tsparticles').then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#030014]" />
});

// Dynamic import for particle engine
const { loadSlim } = await import('tsparticles-slim');

// Import icons
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import {
  SiAdobe, SiAmazon, SiGoogle, SiMeta, SiSlack
} from "react-icons/si";

// Utility functions
const debounce = <F extends (...args: any[]) => any>(func: F, wait: number): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<F>): void {
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

const isLowEndDevice = (): boolean => {
  return (
    typeof navigator !== 'undefined' &&
    (
      ('deviceMemory' in navigator && (navigator as any).deviceMemory < 4) ||
      ('hardwareConcurrency' in navigator && navigator.hardwareConcurrency < 4)
    )
  );
};

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
// 3D Object Component for visual effects - optimized
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
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
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
      ref={elementRef}
      className={`absolute pointer-events-none ${className}`}
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={isVisible ? {
        x: animationConfig.x,
        y: animationConfig.y,
        opacity: 1,
      } : { opacity: 0 }}
      transition={{
        duration: animationConfig.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: animationConfig.ease,
        delay: animationConfig.delay,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </motion.div>
  );
};

// GlowingOrb component - optimized
const GlowingOrb: React.FC<GlowingOrbProps> = ({ className, size, color, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const orbRef = useRef(null);

  useEffect(() => {
    if (!orbRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(orbRef.current);

    return () => {
      if (orbRef.current) {
        observer.unobserve(orbRef.current);
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
      ref={orbRef}
      className={`rounded-full blur-3xl opacity-30 absolute ${className}`}
      style={{
        background: color,
        width: size,
        height: size,
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
      }}
      initial={{ opacity: 0 }}
      animate={isVisible ? {
        scale: animationConfig.scale,
        opacity: animationConfig.opacity,
      } : { opacity: 0 }}
      transition={{
        duration: animationConfig.duration,
        repeat: Infinity,
        delay,
      }}
    />
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);
  const containerRef = useRef(null);

  // Handle particles initialization with slim version
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
    setIsLoaded(true);
  }, []);

  // Device detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Add event listener for resize with debounce
    const debouncedCheckMobile = debounce(checkMobile, 250);
    window.addEventListener('resize', debouncedCheckMobile);

    // Component mounted
    setIsMounted(true);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedCheckMobile);
    };
  }, []);

  // Cursor glow effect - optimized with debounce and requestAnimationFrame
  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent): void => {
      const cursor = document.querySelector('.cursor-glow');
      if (cursor) {
        requestAnimationFrame(() => {
          (cursor as HTMLElement).style.top = `${e.clientY - 200}px`;
          (cursor as HTMLElement).style.left = `${e.clientX - 200}px`;
          (cursor as HTMLElement).style.opacity = '1';
        });
      }
    };

    // Add debounced event listener
    const debouncedHandleMouseMove = debounce(handleMouseMove, 10);

    // Only add mouse effect on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', debouncedHandleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', debouncedHandleMouseMove);
    };
  }, [isMobile]);


  // Calculate stagger delay based on device
  const staggerDelay = useMemo(() => isMobile ? 0.1 : 0.2, [isMobile]);

  // Memoize particles options to prevent recalculation
  const particlesOptions: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "#0B1120" } },
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile,
          mode: "grab",
        },
        onClick: {
          enable: !isMobile,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: isMobile ? 120 : 180,
          links: {
            opacity: 0.8,
          },
        },
        push: {
          quantity: isMobile ? 2 : 4,
        },
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
        direction: "none", // ✅ This is now strictly valid
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: isMobile ? 0.5 : 1,
        straight: false,
        attract: {
          enable: !isMobile,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: isMobile ? 1600 : 800,
        },
        value: isMobile ? 30 : 80,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: isMobile ? 2 : 3 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }), [isMobile]);
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center text-white bg-[#030014] overflow-hidden"
    >
      {/* Custom cursor glow effect - only on desktop */}
      {!isMobile && (
        <div className="cursor-glow fixed w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-500/30 blur-[80px] pointer-events-none opacity-0 transition-opacity duration-500" />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0a0a1a] via-[#070718] to-[#030014] opacity-90" />

        {/* Enhanced particle effects - conditionally rendered */}
        {isMounted && (
          <div className="absolute inset-0 z-0">
            <Particles
              id="tsparticles"
              init={particlesInit}
              className="absolute inset-0"
              options={particlesOptions}
              style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
            />
          </div>
        )}

        {/* Glowing orbs for atmosphere - conditionally rendered */}
        {isMounted && (
          <>
            <GlowingOrb
              className="-top-[10%] -right-[5%]"
              size={isMobile ? "30rem" : "40rem"}
              color="linear-gradient(120deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))"
            />
            <GlowingOrb
              className="-bottom-[15%] -left-[10%]"
              size={isMobile ? "35rem" : "45rem"}
              color="linear-gradient(120deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2))"
              delay={2}
            />
          </>
        )}
      </div>

      {/* 3D Elements - conditionally rendered based on device capability */}
      <AnimatePresence>
        {isMounted && !isLowEndDevice() && (
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
        style={{
          opacity: scrollOpacity,
          scale: scrollScale,
          willChange: 'transform, opacity',
          transform: 'translateZ(0)'
        }}
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
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-sm text-blue-300 font-medium border border-blue-500/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>New Services Available</span>
              </span>
            </motion.div>

            {/* Main Heading with advanced styling */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="overflow-hidden"
                style={{ willChange: 'opacity' }}
              >
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: isMobile ? 0.8 : 1.2,
                    ease: isMobile ? "easeOut" : [0.23, 1, 0.32, 1]
                  }}
                  style={{ willChange: 'transform' }}
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
                      transition={{ delay: isMobile ? 1 : 1.5, duration: isMobile ? 0.8 : 1.2, ease: "easeOut" }}
                      style={{ willChange: 'width' }}
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
                transition={{ duration: isMobile ? 0.7 : 1, delay: staggerDelay }}
                style={{ willChange: 'transform, opacity' }}
              >
                At <span className="text-white font-semibold relative">
                  Stratix Labs
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: isMobile ? 1.5 : 2, duration: 0.8 }}
                    style={{ willChange: 'width' }}
                  />
                </span>, we craft bold, transformative digital experiences powered by strategy, innovation, and design.
                From startups to enterprises, we turn visions into reality—shaping brands that resonate.
              </motion.p>
            </div>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:items-center justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: staggerDelay * 2 }}
              style={{ willChange: 'transform, opacity' }}
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
                  style={{ willChange: 'transform' }}
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
                  transition={{ duration: 0.3 }}
                  style={{ willChange: 'transform' }}
                />
              </Link>

              {/* Star rating element */}
              <motion.div
                className="hidden sm:flex items-center gap-2 pl-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: staggerDelay * 3 }}
                style={{ willChange: 'opacity' }}
              >
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-300">
                  <span className="font-medium text-white">5.0</span> (200+ reviews)
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual elements - Takes 2 columns on large screens */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.8 : 1.2, delay: staggerDelay * 2 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative w-full max-w-md">
              {/* Mockup visualization */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 backdrop-blur-sm shadow-2xl shadow-indigo-500/20">
                <div className="p-1">
                  <div className="h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    {/* Hero visualization */}
                    <div className="h-full w-full relative">
                      {/* Abstract brand visualization - only rendered on capable devices */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-40 h-40 bg-gradient-conic from-purple-500 via-cyan-500 to-purple-500 rounded-full opacity-90"
                          animate={{
                            rotate: 360,
                            scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: {
                              repeat: Infinity,
                              duration: isMobile ? 15 : 10,
                              ease: "linear"
                            },
                            scale: {
                              repeat: Infinity,
                              duration: isMobile ? 12 : 8,
                              ease: "easeInOut"
                            }
                          }}
                          style={{ willChange: 'transform' }}
                        />
                        {!isLowEndDevice() && (
                          <motion.div
                            className="absolute w-64 h-64 border-2 border-blue-400/30 rounded-full"
                            animate={{
                              rotate: -360,
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: isMobile ? 30 : 20,
                              ease: "linear"
                            }}
                            style={{ willChange: 'transform' }}
                          />
                        )}
                        <motion.div
                          className="absolute w-80 h-80 border border-cyan-300/20 rounded-full"
                          animate={{ scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: isMobile ? 12 : 8,
                            ease: "easeInOut"
                          }}
                          style={{ willChange: 'transform' }}
                        />
                      </div>

                      {/* Stratix Labs logo placeholder in center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-xl bg-white shadow-xl flex items-center justify-center"
                          animate={{ rotate: [0, 5, 0, -5, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: isMobile ? 9 : 6,
                            ease: "easeInOut"
                          }}
                          style={{ willChange: 'transform' }}
                        >
                          <span className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            SL
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mockup control bar */}
                <div className="px-4 py-3 flex items-center gap-3 border-t border-gray-700/30">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="h-1.5 w-full rounded-full bg-gray-700/50">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: isMobile ? 12 : 8,
                        ease: "easeInOut"
                      }}
                      style={{ willChange: 'width' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges - only for non-low-end devices */}
              {!isLowEndDevice() && (
                <>
                  <motion.div
                    className="absolute -right-8 -top-10 bg-gradient-to-br from-blue-500 to-cyan-400 px-4 py-2 rounded-lg shadow-lg rotate-12"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [12, 8, 12],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: isMobile ? 4 : 3,
                        ease: "easeInOut"
                      },
                      rotate: {
                        repeat: Infinity,
                        duration: isMobile ? 9 : 6,
                        ease: "easeInOut"
                      },
                    }}
                    style={{ willChange: 'transform' }}
                  >
                    <span className="text-white font-medium">Innovation Award</span>
                  </motion.div>

                  <motion.div
                    className="absolute -left-6 -bottom-6 bg-gradient-to-br from-purple-500/90 to-indigo-500/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg -rotate-6"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [-6, -10, -6],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: isMobile ? 5 : 4,
                        ease: "easeInOut",
                        delay: 1
                      },
                      rotate: {
                        repeat: Infinity,
                        duration: isMobile ? 7 : 5,
                        ease: "easeInOut",
                        delay: 1
                      },
                    }}
                    style={{ willChange: 'transform' }}
                  >
                    <span className="text-white text-sm font-medium">Design Excellence</span>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          className="mt-16 pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: staggerDelay * 3 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <p className="text-center text-sm uppercase tracking-wider text-slate-400 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
            {[SiAdobe, SiAmazon, SiGoogle, SiMeta, SiSlack].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-gray-200 transition-colors"
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Icon size={30} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - only show on non-mobile */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          style={{ willChange: 'transform, opacity' }}
        >
          <FiChevronDown className="text-white/60 w-6 h-6" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
