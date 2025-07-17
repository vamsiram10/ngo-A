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
    <div className="text-white bg-black">
      {/* Header Section */}
      <div className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-pink-400">About Us</h1>
        </motion.div>
      </div>

      {/* WHO WE ARE SECTION */}
      <motion.section
        id="who-we-are"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto px-4 py-12 py-16 max-w-6xl md:px-8"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-pink-400">
              Who We Are
            </h2>
            <p className="mb-4 text-white">
              What began as a heartfelt initiative by{" "}
              <strong className="text-pink-400">V. Radha Priyanka</strong> and
              her close friends in 2022 has now grown into a registered movement
              of compassion and change. Rooted in Hyderabad, our journey started
              with simple acts— distributing clothes and food to those in need.
            </p>
            <p className="mb-4 text-white">
              As our vision expanded, so did our reach. We built a dedicated
              team and extended to Jaipur—taking our mission of care to more
              communities. From refreshment drives and medical kit distributions
              to visits to orphanages and old age homes, every effort is driven
              by the same purpose—to bring hope, dignity, and support.
            </p>
            <p className="text-white">
              Founded in 2022 and officially incorporated as a{" "}
              <strong className="text-pink-400">
                registered NGO in November 2024
              </strong>
              , Avasa is registered under the Telangana Societies Registration
              Act, 2001 with registration number{" "}
              <strong className="text-pink-400">1108 of 2024</strong>. This
              recognition enables us to scale our initiatives and deepen our
              commitment to meaningful, community-driven change.
            </p>
          </div>
          {/* Image */}
          <div className="overflow-hidden relative h-72 w-full rounded-xl md:h-[400px]">
            <Image
              fill
              src="/images/aboutus1.jpg"
              alt="Avasa NGO team members"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* WHAT WE DO SECTION */}
      <motion.section
        id="what-we-do"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto px-4 py-12 py-16 max-w-6xl md:px-8"
      >
        <h2 className="mb-10 text-3xl font-semibold text-center text-pink-400">
          What We Do
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 bg-neutral-900 rounded-xl shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-pink-400">
              1. Love and Care
            </h3>
            <p className="text-white">
              We believe compassion is the foundation of change. Through regular
              visits to orphanages and old age homes, our volunteers build
              emotional connections and support holistic well-being.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-neutral-900 rounded-xl shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-pink-400">
              2. Seasonal & Awareness Drives
            </h3>
            <ul className="pl-4 text-white list-disc space-y-1">
              <li>
                <strong className="text-pink-400">Winter:</strong> Sweaters,
                blankets, and warm clothing
              </li>
              <li>
                <strong className="text-pink-400">Summer:</strong> Refreshments,
                hydration kits, and cooling supplies
              </li>
              <li>
                <strong className="text-pink-400">Medical Kits:</strong>{" "}
                Especially in underserved areas
              </li>
              <li>
                <strong className="text-pink-400">Period Kits:</strong>{" "}
                Especially in underserved areas
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-neutral-900 rounded-xl shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-pink-400">
              3. Development Support
            </h3>
            <ul className="pl-4 text-white list-disc space-y-1">
              <li>Educational aids: projectors, stationery, floor carpets</li>
              <li>School infrastructure: basic classroom needs</li>
              <li>Community upliftment for marginalized groups</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <div className="h-0 md:h-10 lg:h-0" />

      {/* MEET OUR BOARD SECTION */}
      <div className="py-20 min-h-[4000px] bg-black sm:min-h-[1900px] md:min-h-[1700px] lg:min-h-[1550px]">
        <motion.section
          id="meet-our-team"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-pink-400 md:text-4xl">
            Meet Our Board
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 mx-auto px-4 px-8 max-w-7xl min-h-[400px] min-h-[500px] min-h-[600px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 h-full min-h-[350px] text-center bg-neutral-900 rounded-2xl shadow-md md:min-h-[380px] lg:min-h-[400px]"
              >
                <div className="overflow-hidden mb-4 w-32 h-32 rounded-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mb-2 text-sm font-medium text-pink-400">
                  {member.role}
                </p>
                <p className="text-sm text-white">{member.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
