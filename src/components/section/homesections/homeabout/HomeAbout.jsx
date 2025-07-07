import { useRef, useEffect } from "react";

const missionStatement =
  "To empower underprivileged communities by providing access to education, healthcare, and sustainable livelihood opportunities, fostering holistic development and social inclusion.";
const visionStatement =
  "A world where every individual has the opportunity to realize their full potential, live with dignity, and contribute positively to society.";

const HomeAbout = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.animate(
        [
          { opacity: 0, transform: "translateY(60px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 900,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        }
      );
    }
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative flex flex-col items-center justify-start py-10 px-2 w-full min-h-screen bg-black"
      id="about"
    >
      <h2 className="mb-6 w-full text-3xl font-bold text-white tracking-tight text-center sm:text-4xl md:text-5xl">
        About Us
      </h2>
      <div className="flex flex-col items-center justify-center gap-7 px-2 w-full max-w-6xl sm:px-4 md:flex-row">
        <div className="flex-1 flex flex-col items-start w-full">
          <p className="text-sm text-gray-200 leading-relaxed text-justify text-base sm:px-2 md:text-lg">
            What began as a heartfelt initiative by{" "}
            <span className="font-semibold text-pink-400">
              V. Radha Priyanka
            </span>{" "}
            and her close friends in 2022 has now grown into a registered
            movement of compassion and change. Rooted in Hyderabad, our journey
            started with simple acts—distributing clothes and food to those in
            need. These small beginnings laid the foundation for something much
            larger. As our vision expanded, so did our reach. With time, we
            built a dedicated team and extended our work to Jaipur, taking our
            mission of care to more communities. From refreshment drives and
            medical kit distributions to visits to orphanages and old age homes,
            every effort has been guided by the same purpose—to bring hope,
            dignity, and support to those often overlooked. In November 2024, we
            proudly took a big step forward by officially registering as an NGO,
            allowing us to amplify our impact and reach more lives. Today, we
            stand as a growing family of changemakers, united by empathy and
            driven by action.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10 w-full md:mb-32">
        <img
          src="/main1.jpg"
          alt="About Us"
          className="object-cover w-full max-w-2xl h-40 rounded-lg shadow-lg md:h-56"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div
        className="flex flex-col items-center order-1 w-full md:mt-20"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: "0.5rem",
          zIndex: 30,
          pointerEvents: "none",
        }}
      >
        <div
          className="flex flex-row gap-4 gap-9 px-2 w-full max-w-3xl"
          style={{ pointerEvents: "auto" }}
        >
          <div className="flex flex-col items-center justify-center p-4 w-1/2 h-[220px] min-h-[180px] bg-black/90 rounded-lg border-2 border-pink-500 shadow-md transition-shadow duration-300 hover:shadow-xl sm:p-3 md:p-8">
            <h3 className="flex items-center gap-2 mb-1 text-base font-semibold text-pink-300 sm:text-lg md:text-xl">
              <span role="img" aria-label="Mission">
                🎯
              </span>
              Mission
            </h3>
            <p className="text-gray-100 text-xs text-center sm:text-sm md:text-base">
              {missionStatement}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 w-1/2 h-[220px] min-h-[180px] bg-black/90 rounded-lg border-2 border-pink-500 shadow-md transition-shadow duration-300 hover:shadow-xl sm:p-3 md:p-8">
            <h3 className="flex items-center gap-2 mb-1 text-base font-semibold text-pink-300 sm:text-lg md:text-xl">
              <span role="img" aria-label="Vision">
                👁️
              </span>
              Vision
            </h3>
            <p className="text-gray-100 text-xs text-center sm:text-sm md:text-base">
              {visionStatement}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          #about > div[style] {
            position: static !important;
            left: unset !important;
            right: unset !important;
            bottom: unset !important;
            z-index: unset !important;
            pointer-events: auto !important;
            margin-bottom: 1.5rem;
            margin-top: 0.5rem;
          }
          #about > div[style] > div {
            flex-direction: row !important;
            gap: 1rem !important;
          }
          #about > div[style] > div > div {
            width: 48% !important;
            min-width: 140px !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            height: 180px !important;
            min-height: 140px !important;
            padding: 1.1rem !important;
            font-size: 1.05rem !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }
        }
        @media (min-width: 768px) {
          #about > .flex.justify-center.my-10.w-full {
            margin-bottom: 6rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeAbout;
