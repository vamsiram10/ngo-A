"use client";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
function ContactUsLayout({ children }) {
  return (
    <ReactLenis root>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
        <h1 className="text-white text-6xl font-bold text-center mt-[5.5rem]">
          ananya Work
        </h1>
        {children}
      </main>
    </ReactLenis>
  );
}

export default ContactUsLayout;
