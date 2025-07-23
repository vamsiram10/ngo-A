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
      img: "",
    },
  ];

  return (
    <motion.section>
      <div className="relative top-8 text-white bg-black">
        <div className="py-16 px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-transparent bg-pink-500 bg-clip-text sm:text-5xl">
              About Us
            </h1>
          </motion.div>
        </div>

        <div className="grid items-center gap-8 px-4 sm:px-40 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-transparent bg-pink-300 bg-clip-text sm:text-4xl">
              Who We Are
            </h2>
            <p className="mb-4">
              What began as a heartfelt initiative by{" "}
              <strong className="text-pink-400">V. Radha Priyanka</strong> and
              her close friends in 2022 has now grown into a registered movement
              of compassion and change.
            </p>
            <p className="mb-4">
              Our journey started with simple acts—distributing clothes and food
              to those in need. As our vision expanded, so did our reach. Today,
              we operate in Hyderabad and Jaipur, building a community that
              cares deeply.
            </p>
            <p>
              Officially incorporated as a{" "}
              <strong className="text-pink-400">
                registered NGO in November 2024
              </strong>{" "}
              under Telangana Societies Registration Act (Reg. No:{" "}
              <strong className="text-pink-400">1108 of 2024</strong>).
            </p>
          </div>
          <div className="overflow-hidden relative w-full h-64 rounded-xl sm:h-96">
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

        <div className="relative px-4 py-12 py-20 sm:px-40">
          <h2 className="mb-10 text-3xl font-semibold text-center text-pink-300 sm:text-4xl lg:text-4xl">
            What We Do
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Love and Care */}
            <div className="flex flex-col items-center p-6 bg-neutral-900 rounded-xl shadow-md lg:p-8">
              <div className="overflow-hidden flex items-center justify-center mb-4 w-40 h-40 bg-neutral-800 border-2 border-pink-400">
                <Image
                  src="/aboutus/love.jpg"
                  alt="Love and Care"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-400 text-center lg:text-2xl">
                1. Love and Care
              </h3>
              <p className="text-center lg:text-lg">
                Regular visits to orphanages and old age homes to foster
                connections and holistic well-being.
              </p>
            </div>

            {/* Seasonal & Awareness Drives */}
            <div className="flex flex-col items-center p-6 bg-neutral-900 rounded-xl shadow-md lg:p-8">
              <div className="overflow-hidden flex items-center justify-center mb-4 w-40 h-40 bg-neutral-800 border-2 border-pink-400">
                <Image
                  src="/aboutus/seasonal.jpg"
                  alt="Seasonal & Awareness Drives"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-400 text-center lg:text-2xl">
                2. Seasonal & Awareness Drives
              </h3>
              <ul className="text-center list-disc list-inside space-y-1 lg:text-lg">
                <li>
                  <strong className="text-pink-400">Winter:</strong> Warm
                  clothing
                </li>
                <li>
                  <strong className="text-pink-400">Summer:</strong> Hydration
                  kits & refreshments
                </li>
                <li>
                  <strong className="text-pink-400">
                    Medical & Period Kits
                  </strong>
                </li>
              </ul>
            </div>

            {/* Development Support */}
            <div className="flex flex-col items-center p-6 bg-neutral-900 rounded-xl shadow-md lg:p-8">
              <div className="overflow-hidden flex items-center justify-center mb-4 w-40 h-40 bg-neutral-800 border-2 border-pink-400">
                <Image
                  src="/aboutus/development.jpg"
                  alt="Development Support"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-400 text-center lg:text-2xl">
                3. Development Support
              </h3>
              <ul className="text-center list-disc list-inside space-y-1 lg:text-lg">
                <li>Educational aids: projectors, stationery</li>
                <li>Basic school infrastructure</li>
                <li>Community upliftment programs</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="relative mb-15 text-3xl font-bold text-center text-pink-300 md:text-4xl">
          Meet Our Board
        </h2>
        <div className="grid grid-cols-1 gap-8 px-17 mx-auto px-6 px-8 max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 mb-10 min-h-[350px] text-center bg-neutral-900 rounded-2xl shadow-md md:min-h-[380px] lg:min-h-[200px]"
            >
              <div className="overflow-hidden mb-4 w-32 h-32 rounded-full">
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-pink-400 text-4xl font-bold bg-neutral-800">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
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
      </div>
    </motion.section>
  );
}
