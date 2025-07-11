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

  return (
    <div className="px-4 sm:px-8 md:px-16 py-16 space-y-24">
      {/* Section: Who We Are */}
      <motion.section
        id="who-we-are"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-[#fb64b6] text-center mb-6">
          Who We Are
        </h2>
        <p className="max-w-5xl mx-auto text-lg text-center leading-relaxed text-black">
          What began as a heartfelt initiative by <strong>V. Radha Priyanka</strong> and her
          close friends in 2022 has now grown into a registered movement of compassion and
          change. Rooted in Hyderabad, our journey started with simple acts—distributing clothes
          and food to those in need.
          <br /><br />
          As our vision expanded, so did our reach. We built a dedicated team and extended to
          Jaipur—taking our mission of care to more communities. From refreshment drives and
          medical kit distributions to visits to orphanages and old age homes, every effort is
          driven by the same purpose—to bring hope, dignity, and support.
          <br /><br />
          In November 2024, we officially registered as an NGO, allowing us to amplify our
          impact and reach.
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
        <h2 className="text-4xl font-bold text-[#fb64b6] text-center mb-6">
          What We Do
        </h2>
        <div className="max-w-5xl mx-auto space-y-10 text-black">
          <div className="bg-[#fb64b6]/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#fb64b6] mb-2">1. Love and Care</h3>
            <p className="text-lg">
              We believe compassion is the foundation of change. Through regular visits to
              orphanages and old age homes, our volunteers build emotional connections and
              support holistic well-being.
            </p>
          </div>

          <div className="bg-[#fb64b6]/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#fb64b6] mb-2">2. Seasonal Drives</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li><strong>Winter:</strong> Sweaters, blankets, and warm clothing</li>
              <li><strong>Summer:</strong> Refreshments, hydration kits, and cooling supplies</li>
              <li><strong>Medical Kits:</strong> Especially in underserved areas</li>
            </ul>
          </div>

          <div className="bg-[#fb64b6]/10 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-[#fb64b6] mb-2">3. Development Support</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
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
      >
        <h2 className="text-4xl font-bold text-[#fb64b6] text-center mb-10">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-[260px] md:w-[350px]  bg-[#fb64b6]/10 p-6 rounded-xl text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-[#fb64b6]"
              />
              <h3 className="text-xl font-semibold text-[#fb64b6]">
                {member.name}
              </h3>
              <p className="text-gray-700 mt-1 text-black">{member.role}</p>
              <p className="text-sm mt-2 text-black">{member.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
