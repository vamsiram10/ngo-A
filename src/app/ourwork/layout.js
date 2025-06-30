"use client";
// import { ReactLenis } from "@/lenis/react";

function OurWorkLayout({ children }) {
  return (
    // <ReactLenis root>
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-pink-300">
      <h1 className="text-white text-6xl font-bold text-center mt-[5.5rem]">
        OUR WORK vinathi & ananya
      </h1>
      {children}
    </main>
    // </ReactLenis>
  );
}

export default OurWorkLayout;
