"use client";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
function AboutUsLayout({ children }) {
  return (
    <ReactLenis root>
      <main className="relative min-h-[100vh] w-screen overflow-x-hidden bg-black">
        <h1 className="text-[#fb64b6] text-5xl font-bold text-center mt-[8rem]">
          ABOUT US
        </h1>
        {children}
      </main>
    </ReactLenis>
  );
}

export default AboutUsLayout;
