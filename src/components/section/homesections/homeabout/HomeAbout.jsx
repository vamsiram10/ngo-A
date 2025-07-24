"use client";
import { useRef, useEffect } from "react";

const missionStatement =
  "Avasa Foundation is dedicated to holistic outreach, creating sustainable positive impact in the lives of the most vulnerable. From nurturing emotional well-being in care homes to providing lifeline resources for the homeless and needy, and fostering educational empowerment in government schools, slums, and rural communities, we are committed to building a more equitable and caring world.";
const visionStatement =
  "To see a world where dignity, deep care, and the opportunity to flourish are universal rights, not privileges, for all individuals, regardless of their situation.";

const shinyStyle = `
  .shiny-block {
    position: relative;
    overflow: hidden;
    /* background and border color changes removed */
    box-shadow: 0 0 24px 0 #818cf855, 0 2px 24px 0 #a21caf33;
    transition: box-shadow 0.3s;
  }
  .shiny-block::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      120deg,
      rgba(129,140,248,0.10) 0%,
      rgba(168,85,247,0.13) 40%,
      rgba(255,255,255,0.18) 50%,
      rgba(129,140,248,0.08) 60%,
      rgba(129,140,248,0.07) 100%
    );
    filter: blur(8px);
    opacity: 0.6;
    z-index: 0;
    animation: shine-move 3.5s linear infinite;
    pointer-events: none;
  }
  @keyframes shine-move {
    0% { transform: rotate(0deg) translateX(-20%) scale(1.1);}
    100% { transform: rotate(1deg) translateX(20%) scale(1.1);}
  }
  .shiny-block .shiny-content {
    position: relative;
    z-index: 1;
  }
  .shiny-block:hover {
    box-shadow: 0 0 40px 0 #818cf8cc, 0 2px 40px 0 #a21caf88;
  }
`;

export default function AboutMatter() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.animate(
        [
          { opacity: 0, transform: "translateY(60px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 1000,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shinyStyle }} />

      <div className="z-0 absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black to-black pointer-events-none"></div>

      <div
        ref={aboutRef}
        id="about"
        className="z-10 relative px-4 py-10 w-full text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          About Us
        </h2>
        <div className="mx-auto mt-2 w-24 h-1 bg-pink-500 rounded-full shadow-md"></div>
      </div>

      <div className="z-10 relative mt-2 p-4 mx-auto w-full max-w-3xl bg-black/80 rounded-lg shadow-lg sm:mt-4 md:mt-6">
        <p className="text-gray-200 leading-relaxed text-justify text-sm sm:text-base">
          Founded in 2022 by{" "}
          <span className="font-semibold text-pink-400">V. Radha Priyanka</span>{" "}
          and friends, our journey began in{" "}
          <span className="text-transparent font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            Hyderabad
          </span>{" "}
          with small acts of kindness. From food drives to health support, we’ve
          expanded to{" "}
          <span className="text-transparent font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            Jaipur
          </span>{" "}
          and beyond. Now a registered NGO, we’re united by empathy, action, and
          a mission to uplift lives. Our work continues to bring dignity and
          care to the underserved.
        </p>
      </div>

      <div className="z-10 relative flex flex-col gap-4 mt-8 mx-auto w-full max-w-3xl">
        {/* Mission Block */}
        <div className="flex flex-col items-center p-4 w-full text-left rounded-xl border-pink-500 shadow-md shiny-block border">
          <div className="shiny-content">
            <h3 className="flex items-center gap-2 mb-2 text-pink-300 text-lg font-bold animate-bounce drop-shadow-[0_2px_8px_rgba(236,72,153,0.7)] sm:text-xl md:text-2xl">
              <strong> Mission</strong>
            </h3>
            <p className="text-gray-100 text-sm leading-snug sm:text-base">
              {missionStatement}
            </p>
          </div>
        </div>

        {/* Vision Block */}
        <div className="flex flex-col items-center p-4 mb-10 w-full text-center rounded-xl border-pink-500 shadow-md shiny-block border">
          <div className="w-full w-3/4 text-left shiny-content lg:ml-auto">
            <h3 className="flex items-center justify-start gap-2 mb-2 text-pink-300 text-lg font-bold text-left animate-bounce drop-shadow-[0_2px_8px_rgba(236,72,153,0.7)] sm:text-xl md:text-2xl">
              <strong> Vision</strong>
            </h3>
            <p className="text-gray-100 text-sm leading-snug sm:text-base">
              {visionStatement}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
