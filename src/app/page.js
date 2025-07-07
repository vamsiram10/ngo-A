"use client";
import HomeOther from "@/components/section/homesections/homeother/HomeOther";
import HomeTeam from "@/components/section/homesections/hometeam/HomeTeam";
import { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import FlyingBirdLogo from "@/components/utils/avasalogo/FlyingBirdLogo";
import SomeThing from "@/components/section/homesections/something/SomeThing";
import HomeGallery from "@/components/section/homesections/homegallery/HomeGallery";
import HomeAbout from "@/components/section/homesections/homeabout/HomeAbout";

export default function HomePage() {
  const mainContainer = useRef(null);

  return (
    <ReactLenis root>
      <main
        ref={mainContainer}
        className="relative min-h-[70vh] w-screen overflow-x-hidden"
      >
        <HomeOther />
        <HomeAbout />
        <HomeTeam />
        <HomeGallery />
      </main>
    </ReactLenis>
  );
}
