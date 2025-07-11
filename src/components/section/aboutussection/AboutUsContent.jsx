"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

  // Responsive minHeight: 500vh for mobile/tablet, no change for desktop
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
      className="px-4 py-16 space-y-24 sm:px-8 md:px-16"
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
        <h2 className="mb-6 text-4xl font-bold text-[#fb64b6] text-center">
          Who We Are
        </h2>
        <p className="mx-auto max-w-5xl text-lg text-center leading-relaxed text-black">
          What began as a heartfelt initiative by{" "}
          <strong>V. Radha Priyanka</strong> and her close friends in 2022 has
          now grown into a registered movement of compassion and change. Rooted
          in Hyderabad, our journey started with simple acts—distributing
          clothes and food to those in need.
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
        <h2 className="mb-6 text-4xl font-bold text-[#fb64b6] text-center">
          What We Do
        </h2>
        <div className="mx-auto max-w-5xl text-black space-y-10">
          <div className="p-6 bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="mb-2 text-2xl font-semibold text-[#fb64b6]">
              1. Love and Care
            </h3>
            <p className="text-lg">
              We believe compassion is the foundation of change. Through regular
              visits to orphanages and old age homes, our volunteers build
              emotional connections and support holistic well-being.
            </p>
          </div>

          <div className="p-6 bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="mb-2 text-2xl font-semibold text-[#fb64b6]">
              2. Seasonal Drives
            </h3>
            <ul className="text-lg list-disc list-inside space-y-1">
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

          <div className="p-6 bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="mb-2 text-2xl font-semibold text-[#fb64b6]">
              3. Development Support
            </h3>
            <ul className="text-lg list-disc list-inside space-y-1">
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
        <div className="relative top-15 sm:mt-16 md:mt-24 lg:mt-32">
          <h2 className="text-4xl font-bold text-[#fb64b6] text-center">
            Meet Our Team
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 w-[260px] text-center bg-[#fb64b6]/10 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg md:w-[350px]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover mx-auto mb-4 w-28 h-28 rounded-full border-4 border-[#fb64b6]"
                />
                <h3 className="text-xl font-semibold text-[#fb64b6]">
                  {member.name}
                </h3>
                <p className="mt-1 text-gray-700 text-black">{member.role}</p>
                <p className="mt-2 text-sm text-black">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
