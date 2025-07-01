"use client";
import React, { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: "This is a sample testimonial. Replace with your own data.",
    name: "John Doe",
    designation: "CEO, Example Inc.",
    src: "https://images3.alphacoders.com/134/1342304.jpeg",
  },
  {
    quote: "Another testimonial goes here. Add more as needed.",
    name: "Jane Smith",
    designation: "CTO, Example Corp.",
    src: "https://images2.alphacoders.com/136/thumbbig-1369365.webp",
  },
  {
    quote:
      "Working with this team was a fantastic experience. Highly recommended!",
    name: "Alice Johnson",
    designation: "Lead Designer, Creative Studio",
    src: "https://images7.alphacoders.com/132/thumbbig-1329456.webp",
  },
  {
    quote: "Professional, efficient, and reliable. Would collaborate again.",
    name: "Bob Williams",
    designation: "Project Manager, BuildIt",
    src: "https://images2.alphacoders.com/136/thumb-440-1360490.webp",
  },
];

interface AnimatedTestimonialsProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}

const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials = DEFAULT_TESTIMONIALS,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
    return;
    // eslint-disable-next-line
  }, [autoplay, testimonials.length]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="mx-auto px-4 py-20 max-w-4xl font-sans antialiased md:px-8 lg:px-12">
        <div className="text-center text-gray-500">
          No testimonials available.
        </div>
      </div>
    );
  }

  const getPrevIndex = () =>
    (active - 1 + testimonials.length) % testimonials.length;

  return (
    <div className="relative left-0 flex items-center justify-center mx-auto px-4 py-8 px-8 py-12 mt-15 w-full max-w-3xl min-h-[80vh] font-sans antialiased sm:px-6 md:static lg:px-12">
      <div className="top-10 flex flex-col items-center gap-4 gap-3 md:flex-row">
        {/* Image Section */}
        <div className="flex justify-center items-center mb-8 w-full w-1/2 md:mb-0">
          {/* Make the frame square in responsive only */}
          <div className="relative w-full aspect-square sm:w-64 md:w-96">
            {/* Single back image in cross structure */}
            <motion.div
              key={testimonials[getPrevIndex()].src + "-back"}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 60,
                filter: "blur(3px)",
              }}
              animate={{
                opacity: 0.3,
                scale: 0.8,
                x: 0,
                y: 40,
                filter: "blur(3px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 0,
                y: 60,
                filter: "blur(3px)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none origin-bottom"
              style={{ zIndex: 5 }}
            >
              <img
                src={testimonials[getPrevIndex()].src}
                alt={testimonials[getPrevIndex()].name}
                width={400}
                height={400}
                draggable={false}
                className="object-cover object-center h-full w-full rounded-xl border-gray-200 shadow-md border dark:border-neutral-800"
                style={{ opacity: 0.3, filter: "blur(3px)" }}
              />
            </motion.div>
            {/* Main (active) image */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={testimonials[active].src}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  z: 0,
                  rotate: 0,
                  zIndex: 40,
                  y: [0, -40, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
                style={{ zIndex: 40 }}
              >
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="object-cover object-center h-full w-full rounded-2xl border-gray-200 shadow-lg border dark:border-neutral-800"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center w-full max-w-xl md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                {testimonials[active].name}
              </h3>
              <p className="mb-3 text-xs text-gray-500 dark:text-neutral-400 sm:text-sm">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-2 text-base text-gray-700 leading-relaxed text-lg dark:text-neutral-300 sm:mt-4">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.18,
                      ease: "easeInOut",
                      delay: 0.015 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-6 sm:pt-8">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center h-9 w-9 w-10 bg-gray-100 rounded-full dark:bg-neutral-800 shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-400 sm:h-10"
              aria-label="Previous testimonial"
              type="button"
            >
              <IconArrowLeft className="h-5 w-5 w-6 text-gray-700 transition-transform duration-300 dark:text-neutral-400 group-hover:rotate-12 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center h-9 w-9 w-10 bg-gray-100 rounded-full dark:bg-neutral-800 shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-400 sm:h-10"
              aria-label="Next testimonial"
              type="button"
            >
              <IconArrowRight className="h-5 w-5 w-6 text-gray-700 transition-transform duration-300 dark:text-neutral-400 group-hover:-rotate-12 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
