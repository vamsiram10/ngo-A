"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({ className, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // physics biatch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  useEffect(() => {
    // Update constraints when component mounts or window resizes
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();

    // Add resize listener
    window.addEventListener("resize", updateConstraints);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });
        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY
        );
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900",
        className
      )}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="absolute inset-0 bg-white pointer-events-none select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};

export function Gallery() {
  const items = [
    {
      title: "Tyler Durden",
      image: "/svg/AVASA.svg", // Replace with your actual image path
      className:
        "absolute top-20 left-10 rotate-[-12deg] sm:top-16 sm:left-[15%] md:top-20 md:left-[20%]",
    },

    {
      title: "The Narrator",
      image: "/svg/AVASA.svg",
      className:
        "absolute top-20 right-10 rotate-[15deg] sm:top-16 sm:right-[15%] md:top-20 md:right-[20%]",
    },
    {
      title: "Iceland",
      image: "/svg/AVASA.svg",
      className:
        "absolute bottom-20 left-10 rotate-[-8deg] sm:bottom-16 sm:left-[15%] md:bottom-20 md:left-[20%]",
    },
    {
      title: "Japan",
      image: "/svg/AVASA.svg",
      className:
        "absolute bottom-20 right-10 rotate-[20deg] sm:bottom-16 sm:right-[15%] md:bottom-20 md:right-[20%]",
    },
  ];
  return (
    <DraggableCardContainer className="overflow-clip relative flex items-center justify-center min-h-screen w-full">
      <p className="absolute top-1/2 mx-auto max-w-sm text-center text-4xl font-black text-white -translate-y-3/4 dark:text-white md:text-6xl lg:text-8xl">
        GALLERY
      </p>
      {items.map((item, idx) => (
        <DraggableCardBody
          className={`${item.className} md:${item.className
            .split(" ")
            .slice(1)
            .join(" ")}`}
          key={item.title + idx}
        >
          <img
            src={item.image}
            alt={item.title}
            className="z-10 object-cover relative h-60 w-60 w-80 pointer-events-none md:h-80"
          />
          <h3 className="mt-4 text-center text-lg font-bold text-neutral-700 dark:text-neutral-300 md:text-2xl">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
