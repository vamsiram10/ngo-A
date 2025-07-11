"use client";
import React, { useEffect, useState, useCallback } from "react";
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
    quote:
      "This is a sample testimonial written here in five lines. The team exceeded all my expectations and delivered outstanding results. Their professionalism and creativity truly set them apart from others. I would highly recommend working with them for any project. Thank you for your dedication and hard work.",
    name: "V.Radha Priyanka",
    designation: "CEO, Example Inc.",
    src: "https://images3.alphacoders.com/134/1342304.jpeg",
  },
  {
    quote:
      "Being a part of this journey has been truly transformative. Every project we undertake brings us closer as a team and allows us to make a real difference in the community. The dedication and passion everyone brings is inspiring. I am grateful for the opportunity to contribute and grow alongside such amazing people. Together, we are building something meaningful.",
    name: "RVR",
    designation: "Core Team Member",
    src: "https://images2.alphacoders.com/136/thumbbig-1369365.webp",
  },
  {
    quote:
      "Joining this team has been one of the best decisions I've made. The collaborative spirit and unwavering support from everyone make every challenge feel achievable. Each initiative is a step towards positive change, and I am proud to be part of it. The friendships and memories we've created are invaluable. Looking forward to many more milestones together.",
    name: "Vamsi",
    designation: "Operations Lead",
    src: "https://images7.alphacoders.com/132/thumbbig-1329456.webp",
  },
  {
    quote:
      "From brainstorming sessions to on-ground events, every moment with this team is filled with learning and joy. The impact we create motivates me to push my limits and strive for excellence. I appreciate the trust and encouragement I receive here. It's more than just work—it's a family working towards a shared vision.",
    name: "Vinathi",
    designation: "Event Coordinator",
    src: "https://images2.alphacoders.com/136/thumb-440-1360490.webp",
  },
  {
    quote:
      "The sense of purpose and belonging I feel here is unmatched. Each member brings unique strengths, and together we overcome every obstacle. Our collective efforts have touched many lives, and that is deeply fulfilling. I am excited for what the future holds and to continue making a difference with this incredible team.",
    name: "Aneesh",
    designation: "Community Outreach",
    src: "https://images3.alphacoders.com/134/1342304.jpeg",
  },
  {
    quote:
      "Working with this team has taught me the true meaning of service and compassion. Every initiative is thoughtfully planned and executed, ensuring maximum impact. The encouragement to innovate and take initiative has helped me grow both personally and professionally. I am honored to be part of such a dedicated group.",
    name: "Anannya",
    designation: "Volunteer Coordinator",
    src: "https://images8.alphacoders.com/135/thumbbig-1359642.webp",
  },
];

interface AnimatedTestimonialsProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}

const IMAGE_SIZE = 384;
const IMAGE_SIZE_MD_LG = 320;
const IMAGE_SIZE_SM_LG = 280;

const useResponsiveImageSize = () => {
  const [size, setSize] = useState(IMAGE_SIZE);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(IMAGE_SIZE_SM_LG);
      } else if (window.innerWidth < 1024) {
        setSize(IMAGE_SIZE_MD_LG);
      } else {
        setSize(IMAGE_SIZE);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Shimmer: React.FC = () => (
  <span
    className="z-10 absolute inset-0 pointer-events-none"
    aria-hidden="true"
    style={{
      borderRadius: "inherit",
      overflow: "hidden",
      display: "block",
    }}
  >
    <span
      className="shimmer"
      style={{
        position: "absolute",
        top: 0,
        left: "-75%",
        width: "50%",
        height: "100%",
        background:
          "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
        animation: "shimmer-move 2.2s infinite",
        borderRadius: "inherit",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
    <style>
      {`
        @keyframes shimmer-move {
          0% { left: -75%; }
          100% { left: 125%; }
        }
      `}
    </style>
  </span>
);

const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials = DEFAULT_TESTIMONIALS,
  autoplay = false,
}) => {
  const [active, setActive] = useState<number>(0);
  const imageSize = useResponsiveImageSize();

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
    return;
  }, [autoplay, testimonials.length, handleNext]);

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

  const titleClass =
    "mb-4 w-full text-2xl font-bold text-white tracking-tight text-center sm:text-3xl md:text-5xl md:mb-6";
  const matterBlockClass =
    "relative flex flex-col flex-1 items-center gap-4 px-2 py-3 min-h-[120px] max-w-xs w-full bg-white/80 rounded-2xl shadow-lg dark:bg-neutral-900/80 md:flex-row md:gap-8 md:px-8 md:py-8 md:min-h-[220px] md:max-w-3xl";
  const nameClass =
    "text-lg font-semibold text-pink-500 dark:text-pink-400 sm:text-xl md:text-3xl";
  const designationClass =
    "text-xs text-gray-500 dark:text-neutral-400 sm:text-sm";
  const quoteBlockClass =
    "relative px-2 py-3 max-w-xs w-full bg-white/90 rounded-2xl shadow-lg dark:bg-neutral-900/90 md:px-8 md:py-8 md:max-w-3xl";
  const quoteTextClass =
    "text-sm text-gray-700 leading-relaxed dark:text-neutral-300 md:text-lg";

  // Helper to render image, using <img> for external URLs
  const TestimonialImage: React.FC<{
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    width: number;
    height: number;
    draggable?: boolean;
    priority?: boolean;
  }> = ({ src, alt, className, style, width, height, draggable, priority }) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable={draggable}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
    />
  );

  return (
    <div className="relative flex flex-col items-center justify-center mx-auto px-1 py-1 w-full max-w-6xl min-h-screen font-sans antialiased sm:px-1 lg:px-1">
      {/* Gradient background at the bottom */}
      <div className="z-0 absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(24,24,27,0.3) 0%, rgba(0,0,0,0.85) 60%, #000 100%)",
          }}
        />
      </div>
      <h2 className={titleClass}>Testimonials</h2>
      <div className="flex flex-col items-center justify-center gap-10 w-full md:flex-row lg:gap-45">
        <div
          className="flex flex-col flex-shrink-0 items-center"
          style={{
            width: imageSize,
          }}
        >
          <div
            className="relative"
            style={{
              width: imageSize,
              height: imageSize,
              minWidth: imageSize,
              minHeight: imageSize,
              maxWidth: imageSize,
              maxHeight: imageSize,
            }}
          >
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
              <TestimonialImage
                src={testimonials[getPrevIndex()].src}
                alt={testimonials[getPrevIndex()].name}
                width={imageSize}
                height={imageSize}
                draggable={false}
                className="object-cover object-center w-full h-full rounded-xl shadow-md"
                style={{ opacity: 0.3, filter: "blur(3px)" }}
                priority={false}
              />
            </motion.div>
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
                <TestimonialImage
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={imageSize}
                  height={imageSize}
                  draggable={false}
                  className="object-cover object-center w-full h-full rounded-2xl shadow-lg"
                  priority={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div
          className={matterBlockClass}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <Shimmer />
          <div className="flex flex-col flex-1 justify-center min-w-0 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ x: 48, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -48, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col"
              >
                <div className="flex flex-col items-start gap-1">
                  <h3 className={nameClass}>{testimonials[active].name}</h3>
                  <span className={designationClass}>
                    {testimonials[active].designation}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 mt-0 min-w-[48px] md:flex-col">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded-full dark:bg-neutral-800 shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Previous testimonial"
              type="button"
            >
              <IconArrowLeft className="h-6 w-6 text-gray-700 transition-transform duration-300 dark:text-neutral-400 group-hover:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded-full dark:bg-neutral-800 shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Next testimonial"
              type="button"
            >
              <IconArrowRight className="h-6 w-6 text-gray-700 transition-transform duration-300 dark:text-neutral-400 group-hover:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 w-full md:mt-16">
        <div
          className={quoteBlockClass}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <Shimmer />
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={quoteTextClass}
            >
              {testimonials[active].quote}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
