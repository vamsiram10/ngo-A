"use client";
import HomeOther from "@/components/section/homesections/homeother/HomeOther";
import HomeTeam from "@/components/section/homesections/hometeam/HomeTeam";
import { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import FlyingBirdLogo from "@/components/utils/avasalogo/FlyingBirdLogo";

export default function HomePage() {
  const mainContainer = useRef(null);

  return (
    <ReactLenis root>
      <main
        ref={mainContainer}
        className="relative min-h-screen w-screen overflow-x-hidden"
      >
        <FlyingBirdLogo />
        <HomeOther />
        <HomeTeam />
      </main>
    </ReactLenis>
  );
}
