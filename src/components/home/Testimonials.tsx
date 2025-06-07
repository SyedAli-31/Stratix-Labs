'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    position: "Marketing Head, Al-Madina Foods",
    image: "/sarah.jpeg",
    quote:
      "Stratix Lab revolutionized our digital presence. Their innovative solutions and team professionalism made our rebranding journey seamless and successful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jennifer",
    position: "CEO, TechnoHub Solutions",
    image: "/jennifer.jpeg",
    quote:
      "Working with Stratix Lab was a game-changer. Their strategic approach and timely delivery boosted our engagement metrics significantly.",
    rating: 4,
  },
  {
    id: 3,
    name: "David Wilson",
    position: "Operations Manager, GreenLeaf",
    image: "/david-wilson.png",
    quote:
      "The creativity and dedication of the Stratix Lab team exceeded our expectations. They understood our vision and brought it to life brilliantly.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael",
    position: "Founder, EduSmart",
    image: "/michael.png",
    quote:
      "Their attention to detail and proactive communication made our collaboration smooth and effective. Highly recommend Stratix Lab!",
    rating: 4,
  },
];

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const slidesPerPage = isDesktop ? 2 : 1;
  const totalPages = Math.ceil(testimonials.length / slidesPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  const visibleTestimonials = testimonials.slice(
    currentIndex * slidesPerPage,
    currentIndex * slidesPerPage + slidesPerPage
  );

  if (!isMounted) {
    return (
      <section id="testimonials" className="relative">
        <div className="relative w-full min-h-screen bg-white overflow-hidden px-4 md:px-8 py-16">
          <div className="flex items-center justify-center h-96">
            <div className="animate-pulse text-gray-500">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" ref={ref} className="relative bg-white">
      <div className="absolute top-0 left-0 right-0 h-20 md:h-30 bg-blue-600 z-0" />
      <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 lg:pt-40 pb-16 z-10">
        <motion.h2
          className="text-center md:mt-0 mt-4 text-2xl md:text-3xl lg:text-5xl font-bold bg-black bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Client Success Stories
        </motion.h2>

        <motion.p
          className="text-center text-blue-950 text-base md:text-lg max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear what our clients have to say about their experience working with Stratix Lab.
        </motion.p>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visibleTestimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>

          {/* Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-700 text-white border-blue-800 hover:bg-pink-500 hover:border-pink-600 rounded-full shadow w-10 h-10 lg:w-12 lg:h-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-700 text-white border-blue-800 hover:bg-pink-500 hover:border-pink-600 rounded-full shadow w-10 h-10 lg:w-12 lg:h-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-400 hover:bg-pink-400 hover:scale-110"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
