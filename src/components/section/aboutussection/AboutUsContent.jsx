"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      name: "V. Radha Priyanka",
      role: "Founder/ President",
      desc: "Visionary and compassionate, she leads Avasa with purpose, heart, and unwavering commitment to its mission."
      img: "/team/vinathi.jpg",
    },
    {
      name: "V. Keerthi Sri",
      role: "Vice President",
      desc: "Provides strategic oversight, ensuring organizational alignment, operational excellence, and effective implementation of programs."
      img: "/team/vinathi.jpg",
    },
    {
      name: "Ananya Pandey",
      role: "General Secretary",
      desc: "Manages administrative affairs, ensures clear communication, and upholds governance with integrity.",
      img: "/team/priyanka.jpg",
    },
    {
      name: "M.V. Nageswara Rao",
      role: "Joint Secretary",
      desc: "Supports administrative functions and streamlines coordination to ensure operational efficiency.",
      img: "/team/ajay.jpg",
    },
    {
      name: "V. Lakshmi Prasanna",
      role: "Treasurer",
      desc: "Manages financial operations, maintains transparent records, and ensures accountable use of funds.",
      img: "/team/priyanka.jpg",
    },
    {
      name: "K. Usha Bhargavi",
      role: "Executive member",
      desc: "Contributes to decision-making, supports program execution, and upholds the organization’s mission through active involvement.",
      img: "/team/ajay.jpg",
    },
    {
      name: "V. Sai Harini",
      role: "Executive member",
      desc: "Contributes in organizational activities, offering insights and assistance to drive impactful initiatives forward.",
      img: "/team/ajay.jpg",
    },
    {
      name: "Ch. Vinathi",
      role: "Head of Finance",
      desc: "Oversees financial planning, budgeting, and compliance to ensure fiscal responsibility and sustainability.",
      img: "/team/ajay.jpg",
    },
    {
      name: "R.V.R. Vamsi",
      role: "Head of Social Media",
      desc: "Leads the organization’s digital presence by strategizing, creating, and managing content to amplify outreach and engagement.",
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
      className="px-4 py-12 text-white bg-black space-y-20  sm:px-6 md:px-10 lg:px-16 mt-10"
      style={minHeight ? { minHeight } : undefined}
    >

     {/* Section: Hero Banner Full Screen */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative mt-10 flex items-center justify-center overflow-hidden"
>

  {/* Centered Heading */}
  <div className="z-10 text-center">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
      About Us
    </h1>
  </div>
</motion.div>


      {/* Section: Who We Are */}
      <motion.section
        id="who-we-are"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
      <div className="flex justify-around items-center bg-[#fb64b6]/10 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex-1/2">
        <h2 className="mb-6 text-3xl font-bold text-[#fb64b6] text-center sm:text-4xl">
          Who We Are
        </h2>
        <p className="mx-auto px-2   text-center leading-relaxed text-white text-lg sm:px-14">
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
          Founded in 2022 and officially incorporated as a <strong className="text-[#fb64b6]">registered NGO in November 2024</strong>, 
          Avasa is registered under the Telangana Societies Registration Act, 2001 
          with registration number <strong className="text-[#fb64b6]">1108 of 2024</strong>. This recognition enables us to scale our
          initiatives and deepen our commitment to meaningful, community-driven change.
        </p>
      </div>
          <Image
      className="m-10 rounded-2xl"
      width={550}
      height={300}
      alt="image"
      src="/images/aboutus1.jpg"
    />

      </div>
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
              2. Seasonal & Awareness Drives
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
              <li>
                <strong>Period Kits:</strong> Especially in underserved areas
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
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 md:mx-20">
          <h2 className="text-3xl font-bold text-[#fb64b6] text-center sm:text-4xl">
            Meet Our Team
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-8 px-2 sm:mt-10 sm:px-0 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-5 w-[85vw] sm:w-[280px] text-center bg-[#fb64b6]/10 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:p-6 md:w-[300px] lg:w-[320px]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover mx-auto mb-4 w-24 h-24 sm:h-28 rounded-full border-4 border-[#fb64b6] sm:w-28"
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
