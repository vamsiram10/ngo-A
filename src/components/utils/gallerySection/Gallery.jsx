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

export const DraggableCardBody = ({ className, children, style }) => {
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

    window.addEventListener("resize", updateConstraints);

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
        ...style,
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-60 w-48 overflow-hidden rounded-md bg-neutral-100 p-4 shadow-2xl transform-3d dark:bg-neutral-900",
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
      title: "Literacy",
      image: "/gallery/literacy.jpg",
      className: "absolute",
      style: {
        top: "12%",
        left: "10%",
        rotate: "-18deg",
        zIndex: 10,
      },
    },
    {
      title: "Beat the Heat",
      image: "/gallery/heat.jpg",
      className: "absolute",
      style: {
        top: "18%",
        right: "12%",
        rotate: "14deg",
        zIndex: 9,
      },
    },
    {
      title: "Naya Sawera NGO",
      image: "/gallery/3.jpg",
      className: "absolute",
      style: {
        bottom: "18%",
        left: "8%",
        rotate: "-8deg",
        zIndex: 8,
      },
    },
    {
      title: "Sarthak Oldage Home",
      image: "/gallery/4.jpg",
      className: "absolute",
      style: {
        bottom: "10%",
        right: "8%",
        rotate: "22deg",
        zIndex: 7,
      },
    },
    {
      title: "Winter Drive",
      image: "/gallery/winterdrive.jpg",
      className: "absolute",
      style: {
        top: "28%",
        left: "22%",
        rotate: "-7deg",
        zIndex: 6,
      },
    },
    {
      title: "Medikit Drive",
      image: "/gallery/medikitdrive.jpg",
      className: "absolute",
      style: {
        top: "32%",
        right: "20%",
        rotate: "10deg",
        zIndex: 5,
      },
    },
    {
      title: "Food Donation Drive",
      image: "/gallery/7.jpg",
      className: "absolute",
      style: {
        bottom: "22%",
        left: "25%",
        rotate: "-15deg",
        zIndex: 4,
      },
    },
    {
      title: "Republic Day Celebrations",
      image: "/gallery/republicday.jpg",
      className: "absolute",
      style: {
        bottom: "25%",
        right: "25%",
        rotate: "16deg",
        zIndex: 3,
      },
    },
  ];

  function getCardStyle(item, idx) {
    // Remove any unsupported @media keys from the style object
    const baseStyle = { ...item.style };
    // If idx === 0, apply responsive overrides using a CSS class instead of inline style
    if (idx === 0) {
      // Remove any @media keys if present
      Object.keys(baseStyle).forEach((key) => {
        if (key.startsWith("@media")) {
          delete baseStyle[key];
        }
      });
    }
    return baseStyle;
  }

  // For the first card, add a responsive class for md:top-[16%] md:left-[18%] md:[rotate:-14deg]
  // We'll use Tailwind's arbitrary values for top/left/rotate
  // See: https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values

  return (
    <DraggableCardContainer className="overflow-clip relative flex items-center justify-center min-h-screen w-full">
      <p className="absolute top-1/2 mx-auto max-w-sm text-center text-4xl font-black text-pink-500 pointer-events-none select-none -translate-y-3/4 dark:text-pink-400 md:text-6xl lg:text-8xl">
        GALLERY
      </p>
      {items.map((item, idx) => (
        <DraggableCardBody
          className={cn(
            item.className,
            idx === 0 && "md:top-[16%] left-[18%] md:[rotate:-14deg]"
          )}
          style={getCardStyle(item, idx)}
          key={item.title + idx}
        >
          <img
            src={item.image}
            alt={item.title}
            className="z-10 object-cover relative h-36 w-36 pointer-events-none md:h-52"
          />
          <h3 className="mt-2 text-center text-base font-bold text-neutral-700 dark:text-neutral-300 md:text-lg">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
