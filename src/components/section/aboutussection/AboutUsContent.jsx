"use client";
import { motion } from "framer-motion";
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
      desc: "Visionary and compassionate, she leads Avasa with purpose, heart, and unwavering commitment to its mission.",
      img: "/team/vinathi.jpg",
    },
    {
      name: "V. Keerthi Sri",
      role: "Vice President",
      desc: "Provides strategic oversight, ensuring organizational alignment, operational excellence, and effective implementation of programs.",
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
      desc: "Contributes to decision-making, supports program execution, and upholds the organization's mission through active involvement.",
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
      desc: "Leads the organization's digital presence by strategizing, creating, and managing content to amplify outreach and engagement.",
      img: "/team/ajay.jpg",
    },
  ];

  return (
    <div className="pb-10 w-full text-white bg-black sm:pb-10">
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="pt-20 text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
              About Us
            </h1>
          </motion.div>
        </div>

        {/* WHO WE ARE SECTION */}
        <div className="py-16 border-t border-gray-800 sm:py-20 lg:py-24">
          <motion.section
            id="who-we-are"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="p-6 bg-[#fb64b6]/10 rounded-xl sm:p-8 lg:p-10">
              <div className="flex flex-col items-start gap-12 lg:flex-row">
                {/* Text Content */}
                <div className="lg:w-1/2">
                  <h2 className="mb-6 text-2xl font-bold text-[#fb64b6] sm:text-3xl lg:text-4xl">
                    Who We Are
                  </h2>
                  <div className="text-sm leading-relaxed space-y-4 sm:text-base lg:text-lg">
                    <p>
                      What began as a heartfelt initiative by{" "}
                      <strong className="text-[#fb64b6]">
                        V. Radha Priyanka
                      </strong>{" "}
                      and her close friends in 2022 has now grown into a
                      registered movement of compassion and change. Rooted in
                      Hyderabad, our journey started with simple
                      acts—distributing clothes and food to those in need.
                    </p>
                    <p>
                      As our vision expanded, so did our reach. We built a
                      dedicated team and extended to Jaipur—taking our mission
                      of care to more communities. From refreshment drives and
                      medical kit distributions to visits to orphanages and old
                      age homes, every effort is driven by the same purpose—to
                      bring hope, dignity, and support.
                    </p>
                    <p>
                      Founded in 2022 and officially incorporated as a{" "}
                      <strong className="text-[#fb64b6]">
                        registered NGO in November 2024
                      </strong>
                      , Avasa is registered under the Telangana Societies
                      Registration Act, 2001 with registration number{" "}
                      <strong className="text-[#fb64b6]">1108 of 2024</strong>.
                      This recognition enables us to scale our initiatives and
                      deepen our commitment to meaningful, community-driven
                      change.
                    </p>
                  </div>
                </div>
                {/* Image Content */}
                <div className="mt-8 w-1/2 lg:mt-0">
                  <div className="overflow-hidden relative w-full h-64 rounded-2xl sm:h-80 lg:h-96">
                    <Image
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt="Avasa NGO team members"
                      src="/images/aboutus1.jpg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* WHAT WE DO SECTION */}
        <div className="py-16 border-t border-gray-800 sm:py-20 lg:py-24">
          <motion.section
            id="what-we-do"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-12 text-2xl font-bold text-[#fb64b6] text-center sm:text-3xl lg:text-4xl">
              What We Do
            </h2>

            <div className="mx-auto max-w-4xl space-y-8">
              {/* Card 1 */}
              <div className="p-6 bg-[#fb64b6]/10 rounded-xl sm:p-8">
                <h3 className="mb-4 text-lg font-semibold text-[#fb64b6] sm:text-xl lg:text-2xl">
                  1. Love and Care
                </h3>
                <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
                  We believe compassion is the foundation of change. Through
                  regular visits to orphanages and old age homes, our volunteers
                  build emotional connections and support holistic well-being.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-[#fb64b6]/10 rounded-xl sm:p-8">
                <h3 className="mb-4 text-lg font-semibold text-[#fb64b6] sm:text-xl lg:text-2xl">
                  2. Seasonal & Awareness Drives
                </h3>
                <ul className="text-sm leading-relaxed space-y-2 sm:text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>
                      <strong>Winter:</strong> Sweaters, blankets, and warm
                      clothing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>
                      <strong>Summer:</strong> Refreshments, hydration kits, and
                      cooling supplies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>
                      <strong>Medical Kits:</strong> Especially in underserved
                      areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>
                      <strong>Period Kits:</strong> Especially in underserved
                      areas
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-[#fb64b6]/10 rounded-xl sm:p-8">
                <h3 className="mb-4 text-lg font-semibold text-[#fb64b6] sm:text-xl lg:text-2xl">
                  3. Development Support
                </h3>
                <ul className="text-sm leading-relaxed space-y-2 sm:text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>
                      Educational aids: projectors, stationery, floor carpets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>School infrastructure: basic classroom needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-[#fb64b6] rounded-full"></span>
                    <span>Community upliftment for marginalized groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        {/* MEET OUR TEAM SECTION */}
        <div className="py-16 border-t border-gray-800 sm:py-20 lg:py-24">
          <motion.section
            id="meet-our-team"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-12 text-2xl font-bold text-[#fb64b6] text-center sm:text-3xl lg:text-4xl">
              Meet Our Board
            </h2>

            <div className="grid grid-cols-1 gap-6 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="overflow-hidden p-6 min-h-0 text-center bg-[#fb64b6]/10 rounded-xl transition-all duration-300 hover:bg-[#fb64b6]/20 hover:scale-105"
                >
                  <div className="overflow-hidden relative mx-auto mb-4 w-24 h-24 h-28 rounded-full border-4 border-[#fb64b6] sm:w-28">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#fb64b6] sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-xs text-white sm:text-sm">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed sm:text-sm">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* FOOTER SPACER */}
        <div className="h-32 sm:h-24" />
      </div>
    </div>
  );
}
