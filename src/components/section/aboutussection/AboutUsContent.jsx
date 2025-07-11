"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutUsContent() {
  const team = [
    {
      name: "Vinathi",
      role: "Account Manager",
      desc: "Cheerful and enthusiastic, she handles financial expenses with positivity.",
      img: "/team/vinathi.jpg",
    },
    {
      name: "Radha Priyanka",
      role: "Founder",
      desc: "Visionary and compassionate, she leads Avasa with purpose and heart.",
      img: "/team/priyanka.jpg",
    },
    {
      name: "Ajay",
      role: "Outreach Lead",
      desc: "Manages drives and events with energy and dedication.",
      img: "/team/ajay.jpg",
    },
    {
      name: "Radha Priyanka",
      role: "Founder",
      desc: "Visionary and compassionate, she leads Avasa with purpose and heart.",
      img: "/team/priyanka.jpg",
    },
    {
      name: "Ajay",
      role: "Outreach Lead",
      desc: "Manages drives and events with energy and dedication.",
      img: "/team/ajay.jpg",
    },
  ];

  const [minHeight, setMinHeight] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setMinHeight("450vh");
        } else {
          setMinHeight(undefined);
        }
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="px-4 py-12 text-white bg-black space-y-20 space-y-24 sm:px-6 md:px-10 lg:px-16"
      style={minHeight ? { minHeight } : undefined}
    >
      {/* Section: Who We Are */}
      <motion.section
        id="who-we-are"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="mb-6 text-3xl font-bold text-[#fb64b6] text-center sm:text-4xl">
          Who We Are
        </h2>
        <p className="mx-auto px-2 max-w-4xl max-w-5xl text-base text-center leading-relaxed text-white text-lg sm:px-6">
          What began as a heartfelt initiative by{" "}
          <strong className="text-[#fb64b6]">V. Radha Priyanka</strong> and her
          close friends in 2022 has now grown into a registered movement of
          compassion and change. Rooted in Hyderabad, our journey started with
          simple acts—distributing clothes and food to those in need.
          <br />
          <br />
          As our vision expanded, so did our reach. We built a dedicated team
          and extended to Jaipur—taking our mission of care to more communities.
          From refreshment drives and medical kit distributions to visits to
          orphanages and old age homes, every effort is driven by the same
          purpose—to bring hope, dignity, and support.
          <br />
          <br />
          In November 2024, we officially registered as an NGO, allowing us to
          amplify our impact and reach.
        </p>
      </motion.section>

      {/* Section: What We Do */}
      <motion.section
        id="what-we-do"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="mb-6 text-3xl font-bold text-[#fb64b6] text-center sm:text-4xl">
          What We Do
        </h2>
        <div className="mx-auto px-2 max-w-4xl max-w-5xl text-white space-y-8 space-y-10 sm:px-0">
          <div className="p-5 bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition sm:p-6">
            <h3 className="mb-2 text-xl font-semibold text-[#fb64b6] sm:text-2xl">
              1. Love and Care
            </h3>
            <p className="text-base sm:text-lg">
              We believe compassion is the foundation of change. Through regular
              visits to orphanages and old age homes, our volunteers build
              emotional connections and support holistic well-being.
            </p>
          </div>

          <div className="p-5 bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition sm:p-6">
            <h3 className="mb-2 text-xl font-semibold text-[#fb64b6] sm:text-2xl">
              2. Seasonal Drives
            </h3>
            <ul className="text-base list-disc list-inside space-y-1 sm:text-lg">
              <li>
                <strong>Winter:</strong> Sweaters, blankets, and warm clothing
              </li>
              <li>
                <strong>Summer:</strong> Refreshments, hydration kits, and
                cooling supplies
              </li>
              <li>
                <strong>Medical Kits:</strong> Especially in underserved areas
              </li>
            </ul>
          </div>

          <div className="p-5 bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition sm:p-6">
            <h3 className="mb-2 text-xl font-semibold text-[#fb64b6] sm:text-2xl">
              3. Development Support
            </h3>
            <ul className="text-base list-disc list-inside space-y-1 sm:text-lg">
              <li>Educational aids: projectors, stationery, floor carpets</li>
              <li>School infrastructure: basic classroom needs</li>
              <li>Community upliftment for marginalized groups</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section: Meet Our Team */}
      <motion.section
        id="meet-our-team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative"
      >
        <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <h2 className="text-3xl font-bold text-[#fb64b6] text-center sm:text-4xl">
            Meet Our Team
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-8 px-2 mt-10 px-0 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-5 w-[85vw] w-[280px] text-center bg-[#fb64b6]/10 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:p-6 md:w-[300px] lg:w-[320px]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover mx-auto mb-4 w-24 h-24 h-28 rounded-full border-4 border-[#fb64b6] sm:w-28"
                />
                <h3 className="text-lg font-semibold text-[#fb64b6] sm:text-xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-white sm:text-base">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-white sm:text-sm">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
