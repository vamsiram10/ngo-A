"use client";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
function AboutUsLayout({ children }) {
  return (
    <ReactLenis root>
      <main className="min-h-[100vh] w-screen overflow-x-hidden bg-black">
        {children}
      </main>
    </ReactLenis>
  );
}

export default AboutUsLayout;
