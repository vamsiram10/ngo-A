"use client";
// import { ReactLenis } from "@/lenis/react";

function AboutUsLayout({ children }) {
  return (
    // <ReactLenis root>
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-amber-400">
      <h1 className="text-white text-6xl font-bold text-center mt-[5.5rem]">
        ABOUT US vinathi
      </h1>
      {children}
    </main>
    // </ReactLenis>
  );
}

export default AboutUsLayout;
