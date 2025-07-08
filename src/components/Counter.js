"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

/**
 * A more robust counter component that animates when it enters the viewport.
 * The useInView ref is attached to the parent div for reliable triggering.
 */
export default function Counter({ to, suffix = "", label }) {
  const nodeRef = useRef(null);
  
  // The ref for the Intersection Observer is now on the container div.
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          // Ensure node's textContent is updated correctly
          node.textContent = Math.round(value).toLocaleString() + (suffix || "");
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, suffix]);

  return (
    // The ref is now here, on the main container for this stat.
    <div ref={ref} className="text-center">
      <p ref={nodeRef} className="text-4xl md:text-5xl font-bold text-pink-400">
        0{suffix || ""}
      </p>
      <p className="text-neutral-400 mt-2 text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}