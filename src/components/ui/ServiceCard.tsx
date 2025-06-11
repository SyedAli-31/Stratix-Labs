'use client';

import { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradientColor: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  icon,
  gradientColor,
}: ServiceCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: id * 0.1, // Delay based on card index
      },
    },
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    hover: {
      scale: 1.02,
      y: -8,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: 4,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      whileTap="hover"
      className="cursor-pointer w-full h-full"
    >
      <motion.div variants={hoverVariants} initial="rest" animate="rest" whileHover="hover">
        <Card className="h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[410px] xl:min-h-[420px] flex flex-col bg-gradient-to-br from-white via-gray-50 to-slate-100 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <div className="flex flex-col h-full p-6 sm:p-7 lg:p-8">
            <motion.div
              className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center ${gradientColor} text-white shadow-lg`}
              variants={iconVariants}
            >
              {icon}
            </motion.div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 mb-3 sm:mb-4 leading-tight">
              {title}
            </h3>

            <p className="text-[16px] sm:text-base lg:text-[18px] text-slate-700 leading-relaxed mb-6 sm:mb-8 flex-grow line-clamp-4">
              {description}
            </p>

            <div className="mt-auto">
              <div className="inline-flex items-center justify-center font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-900 hover:from-purple-600 hover:to-blue-600 px-4 py-2.5 sm:px-5 sm:py-3 lg:px-2 lg:py-1.5 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base lg:text-lg min-w-[140px] sm:min-w-[160px] group/button">
                <span className="mr-2">Learn More</span>
                <motion.div variants={arrowVariants}>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
