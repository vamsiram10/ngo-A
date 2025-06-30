"use client";
import HomeTeam from "@/components/section/homesections/hometeam/HomeTeam";
import { useRef } from "react";

export default function HomePage() {
  const mainContainer = useRef(null);
  return (
    <main
      ref={mainContainer}
      className="relative min-h-screen w-screen overflow-x-hidden"
    >
      <HomeTeam />
    </main>
  );
}
