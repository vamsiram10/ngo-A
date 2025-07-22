"use client";
import HomeOther from "@/components/section/homesections/homeother/HomeOther";
import HomeTeam from "@/components/section/homesections/hometeam/HomeTeam";
import { useRef, useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import HomeGallery from "@/components/section/homesections/homegallery/HomeGallery";
import HomeAbout from "@/components/section/homesections/homeabout/HomeAbout";
import HomeGallery2 from "@/components/section/homesections/homegallery2/HomeGallery2";

function LenisDebug() {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      console.log("Lenis instance:", lenis);

      const timeout = setTimeout(() => {
        lenis.scrollTo(1, {
          duration: 1,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [lenis]);

  return null;
}

export default function HomePage() {
  const mainContainer = useRef(null);

  return (
    <ReactLenis root>
      <LenisDebug />
      <main
        ref={mainContainer}
        className="relative min-h-screen w-screen overflow-x-hidden"
      >
        <HomeOther />

        <HomeAbout />
        <HomeGallery2 />
        <HomeTeam />

        <HomeGallery />
      </main>
    </ReactLenis>
  );
}
