"use client"
// components/Testimonials.tsx

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "@/components/ui/TestimonialCard"; // Update path as needed
import AnimatedCounter from "@/components/ui/AnimatedCounter"; // Update path as needed
import { Button } from "@/components/ui/button"; // Update path as needed
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CMO, TechVision Inc.",
    image: "/images/sarah.jpg", // Use public folder for images
    quote: "ElevateMedia transformed our brand presence completely. Their strategic approach and creative execution resulted in a 40% increase in our market share within just 6 months. The team is innovative, responsive, and truly committed to our success.",
    rating: 5
  },
  {
    id: 2,
    name: "David Wilson",
    position: "CEO, GlobalRetail",
    image: "/images/david.jpg",
    quote: "Working with ElevateMedia has been game-changing for our business. Their digital marketing strategy tripled our online conversions while significantly reducing our cost per acquisition. I'm continually impressed by their data-driven approach and creative solutions.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Lee",
    position: "Marketing Director, InnovateCorp",
    image: "/images/jennifer.jpg",
    quote: "The team at ElevateMedia doesn't just execute campaigns – they become true partners in your business growth. Their deep understanding of our industry and target audience has led to campaigns that consistently outperform our expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    position: "Founder, StartupSuccess",
    image: "/images/michael.jpg",
    quote: "As a startup, we needed a marketing partner who could maximize our limited budget while helping us stand out in a crowded market. ElevateMedia delivered beyond our expectations, helping us secure our Series A funding largely based on the brand presence they created for us.",
    rating: 5
  }
];

// Stats data
const stats = [
  { id: 1, value: 250, label: "Global Clients", suffix: "+" },
  { id: 2, value: 93, label: "Success Rate", suffix: "%" },
  { id: 3, value: 15, label: "Industry Awards", suffix: "+" },
  { id: 4, value: 12, label: "Years of Experience", suffix: "" }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Update slide width on window resize
  useEffect(() => {
    const updateSlideWidth = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        setSlideWidth(width);
      }
    };

    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-300 to-white bg-clip-text text-transparent">
  Client Success Stories
</h2>


          <p className="text-gray-300">
            Hear what our clients have to say about their experience working with ElevateMedia.
          </p>
        </motion.div>
        
        {/* Testimonial Slider */}
        <motion.div 
          className="relative mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div 
            className="overflow-hidden"
            ref={sliderRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  position={testimonial.position}
                  image={testimonial.image}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  slideWidth={slideWidth}
                />
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-black rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-black rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? "bg-primary" 
                    : "bg-gray-600 hover:bg-primary/50"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold mb-2 text-amber-500">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
