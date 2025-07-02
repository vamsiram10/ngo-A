"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Timeline from "@/components/utils/timeline/Timeline";

const Events = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Timeline />
    </>
  );
};

export default Events;
