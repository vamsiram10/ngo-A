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
    { name: "V. Radha Priyanka", role: "Founder/ President", desc: "Visionary and compassionate, she leads Avasa with purpose, heart, and unwavering commitment to its mission.", img: "/team/vinathi.jpg" },
    { name: "V. Keerthi Sri", role: "Vice President", desc: "Provides strategic oversight, ensuring organizational alignment, operational excellence, and effective implementation of programs.", img: "/team/vinathi.jpg" },
    { name: "Ananya Pandey", role: "General Secretary", desc: "Manages administrative affairs, ensures clear communication, and upholds governance with integrity.", img: "/team/priyanka.jpg" },
    { name: "M.V. Nageswara Rao", role: "Joint Secretary", desc: "Supports administrative functions and streamlines coordination to ensure operational efficiency.", img: "/team/ajay.jpg" },
    { name: "V. Lakshmi Prasanna", role: "Treasurer", desc: "Manages financial operations, maintains transparent records, and ensures accountable use of funds.", img: "/team/priyanka.jpg" },
    { name: "K. Usha Bhargavi", role: "Executive member", desc: "Contributes to decision-making, supports program execution, and upholds the organization's mission through active involvement.", img: "/team/ajay.jpg" },
    { name: "V. Sai Harini", role: "Executive member", desc: "Contributes in organizational activities, offering insights and assistance to drive impactful initiatives forward.", img: "/team/ajay.jpg" },
    { name: "Ch. Vinathi", role: "Head of Finance", desc: "Oversees financial planning, budgeting, and compliance to ensure fiscal responsibility and sustainability.", img: "/team/ajay.jpg" },
    { name: "R.V.R. Vamsi", role: "Head of Social Media", desc: "Leads the organization's digital presence by strategizing, creating, and managing content to amplify outreach and engagement.", img: "/team/ajay.jpg" },
  ];

  return (
    <div className="w-full bg-black text-white pb-10 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl pt-20">
              About Us
            </h1>
          </motion.div>
        </div>

        {/* WHO WE ARE SECTION */}
        <div className="py-16 sm:py-20 lg:py-24 border-t border-gray-800">
          <motion.section
            id="who-we-are"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-[#fb64b6]/10 rounded-xl p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                {/* Text Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold text-[#fb64b6] sm:text-3xl lg:text-4xl mb-6">
                    Who We Are
                  </h2>
                  <div className="text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                    <p>
                      What began as a heartfelt initiative by <strong className="text-[#fb64b6]">V. Radha Priyanka</strong> and her close friends in 2022 has now grown into a registered movement of compassion and change. Rooted in Hyderabad, our journey started with simple acts—distributing clothes and food to those in need.
                    </p>
                    <p>
                      As our vision expanded, so did our reach. We built a dedicated team and extended to Jaipur—taking our mission of care to more communities. From refreshment drives and medical kit distributions to visits to orphanages and old age homes, every effort is driven by the same purpose—to bring hope, dignity, and support.
                    </p>
                    <p>
                      Founded in 2022 and officially incorporated as a <strong className="text-[#fb64b6]">registered NGO in November 2024</strong>, Avasa is registered under the Telangana Societies Registration Act, 2001 with registration number <strong className="text-[#fb64b6]">1108 of 2024</strong>. This recognition enables us to scale our initiatives and deepen our commitment to meaningful, community-driven change.
                    </p>
                  </div>
                </div>
                {/* Image Content */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
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
        <div className="py-16 sm:py-20 lg:py-24 border-t border-gray-800">
          <motion.section
            id="what-we-do"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-[#fb64b6] text-center sm:text-3xl lg:text-4xl mb-12">
              What We Do
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Card 1 */}
              <div className="bg-[#fb64b6]/10 rounded-xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-[#fb64b6] sm:text-xl lg:text-2xl mb-4">
                  1. Love and Care
                </h3>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  We believe compassion is the foundation of change. Through regular visits to orphanages and old age homes, our volunteers build emotional connections and support holistic well-being.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fb64b6]/10 rounded-xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-[#fb64b6] sm:text-xl lg:text-2xl mb-4">
                  2. Seasonal & Awareness Drives
                </h3>
                <ul className="text-sm sm:text-base lg:text-lg leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Winter:</strong> Sweaters, blankets, and warm clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Summer:</strong> Refreshments, hydration kits, and cooling supplies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Medical Kits:</strong> Especially in underserved areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Period Kits:</strong> Especially in underserved areas</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#fb64b6]/10 rounded-xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-[#fb64b6] sm:text-xl lg:text-2xl mb-4">
                  3. Development Support
                </h3>
                <ul className="text-sm sm:text-base lg:text-lg leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Educational aids: projectors, stationery, floor carpets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>School infrastructure: basic classroom needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#fb64b6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Community upliftment for marginalized groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        {/* MEET OUR TEAM SECTION */}
        <div className="py-16 sm:py-20 lg:py-24 border-t border-gray-800">
          <motion.section
            id="meet-our-team"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-[#fb64b6] text-center sm:text-3xl lg:text-4xl mb-12">
              Meet Our Board
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#fb64b6]/10 rounded-xl p-6 text-center hover:bg-[#fb64b6]/20 transition-all duration-300 hover:scale-105 min-h-0 overflow-hidden"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#fb64b6]">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#fb64b6] sm:text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white sm:text-sm mb-3">
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
