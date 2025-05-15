'use client';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter"; // Update path as needed

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CMO, TechVision Inc.",
    image: "/sarah.png",
    quote: "Stratix lab transformed our brand presence completely. Their strategic approach and creative execution resulted in a 40% increase in our market share within just 6 months. The team is innovative, responsive, and truly committed to our success.",
    rating: 5
  },
  {
    id: 2,
    name: "David Wilson",
    position: "CEO, GlobalRetail",
    image: "/david-wilson.png",
    quote: "Working with Stratix lab has been game-changing for our business. Their digital marketing strategy tripled our online conversions while significantly reducing our cost per acquisition. I'm continually impressed by their data-driven approach and creative solutions.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Lee",
    position: "Marketing Director, InnovateCorp",
    image: "/jennifer.png",
    quote: "The team at Stratix lab doesn't just execute campaigns they become true partners in your business growth. Their deep understanding of our industry and target audience has led to campaigns that consistently outperform our expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    position: "Founder, StartupSuccess",
    image: "/michael.png",
    quote: "As a startup, we needed a marketing partner who could maximize our limited budget while helping us stand out in a crowded market. Stratix lab delivered beyond our expectations, helping us secure our Series A funding largely based on the brand presence they created for us.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const updateSlideWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.offsetWidth);
      }
    };
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goToSlide = (index: number) => setCurrentSlide(index);

  // Stats data
  const stats = [
    { id: 1, value: 150, label: "Global Clients", suffix: "+" },
    { id: 2, value: 95, label: "Success Rate", suffix: "%" },
    { id: 3, value: 120, label: "Satisfied Clients", suffix: "+" },
    { id: 4, value: 10, label: "Years of Experience", suffix: "" }
  ];

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
    <section id="testimonials" className="relative" ref={ref}>
      <div className="relative w-full min-h-[100vh] bg-white overflow-hidden px-4 md:px-8 py-16">
        {/* Background Shapes */}
        {/* <div className="absolute top-0 right-0 w-[70%] h-[40%] bg-[#00008b] rounded-l-[90px] lg:rounded-l-[80px] z-0" /> */}
        <div className="absolute bottom-0 right-0 w-[100%] h-[20%] bg-[#00008b] rounded-l-[0px] lg:rounded-l-[0px] z-0" />
        <div className="absolute top-20 left-5 w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute top-16 left-10 w-4 h-4 border border-yellow-500 rounded opacity-70 z-10" />
        <div className="absolute top-[28rem] right-10 w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute bottom-20 right-10  w-4 h-4 border border-yellow-500 rounded" />
        <div className="absolute right-10 top-20  w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute top-32 left-16  w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute bottom-16 left-10 w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute bottom-10 left-4 w-4 h-4 border border-yellow-500 rounded z-10" />

        <div className="absolute bottom-20 right-40  w-4 h-4 border border-yellow-500 rounded" />
        <div className="absolute right-10 top-20  w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute top-12 left-[1000px]  w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute bottom-16 left-10 w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute bottom-10 left-4 w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute top-24 left-[1120px]  w-4 h-4 border border-yellow-500 rounded z-10" />
        <div className="absolute top-12 left-[1050px]  w-4 h-4 border border-yellow-500 rounded z-10" />
        {/* Background Card */}
        <div className="absolute top-[120px] md:top-[170px] right-4 left-4 md:right-20 md:left-20 md:h-[450px] h-[600px] bg-white rounded-3xl z-0 shadow-2xl shadow-stone-400" />

        {/* Heading */}

        <div className="absolute top-[140px]  right-1/2 translate-x-1/2 z-10 text-center w-full ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold md:mt-8 mt-4  bg-gradient-to-r from-pink-900 via-purple-600 to-black bg-clip-text text-transparent drop-shadow-lg">
            Client Success Stories
          </h2>
          <p className="text-blue-950 text-sm sm:text-md md:text-xl  font-bold">
            Hear what our clients have to say about their experience working with Stratix lab.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative max-w-6xl mx-auto mt-[170px]">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div ref={sliderRef} className="overflow-hidden">
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

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-900/60 text-pink-400 border-pink-500 hover:bg-pink-500 hover:text-black rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-900/60 text-pink-400 border-pink-500 hover:bg-pink-500 hover:text-black rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-colors ${index === currentSlide
                      ? "bg-pink-500"
                      : "bg-gray-600 hover:bg-pink-400"
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
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
              className="text-center bg-gradient-to-br from-purple-900 to-indigo-950 shadow-xl border border-purple-700  backdrop-blur-sm p-6 rounded-lg "
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