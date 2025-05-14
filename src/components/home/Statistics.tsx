'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { number: 1500, label: 'Projects Done' },
  { number: 2000, label: 'Happy Customers' },
  { number: 28, label: 'Experienced Staff' },
  { number: 15, label: 'Countries Worldwide' },
];

export default function Statistics() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex justify-center bg-[#234bba] overflow-hidden">
      {/* 🎨 Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          className="w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, #dbeafe 0%, transparent 60%)',
              'radial-gradient(circle at 80% 30%, #e0e7ff66, transparent 70%)',
              'radial-gradient(circle at 50% 80%, #c7d2fe33, transparent 60%)',
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* 💬 Content */}
      <div className="relative z-10 container max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10 bg-white rounded-xl shadow-xl p-6 sm:p-12 border border-blue-200">
        {/* 📢 Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-lg"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#0f172a] leading-snug">
            We&apos;ve helped businesses increase their revenue by{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-extrabold">
              90%
            </span>{' '}
            in their first year with us!
          </h2>
        </motion.div>

        {/* 📊 Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ number, label }: { number: number; label: string }) {
  const count = useMotionValue(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const controls = animate(count, number, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayNumber(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [startAnimation, count, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setStartAnimation(true)}
      className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 w-full max-w-[200px] h-[120px] text-center flex flex-col justify-center shadow-lg border border-blue-300 hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 drop-shadow-sm">
        {displayNumber}+
      </h3>
      <p className="text-white text-xs sm:text-sm">{label}</p>
    </motion.div>
  );
}