"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";

// Animation Variants for a dynamic, "Wix quality" feel
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Local Components (Place them here, inside the page file) ---

const Stat = ({ to, suffix, label }) => (
    <div className="text-center">
        <Counter to={to} suffix={suffix} />
        <p className="font-serif text-xs text-neutral-400 tracking-widest mt-2 uppercase">
            {label}
        </p>
    </div>
);

const FeaturePoint = ({ title, children }) => (
    <motion.div variants={itemVariants} className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700 transition-all duration-300 hover:border-pink-500/70 hover:bg-neutral-800">
        <h3 className="font-semibold text-lg text-pink-400 mb-2">{title}</h3>
        <p className="text-neutral-300 leading-relaxed">{children}</p>
    </motion.div>
);

// --- Main Internship Page Component ---

export default function InternshipPage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* --- LAYERED HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center p-4">
        {/* Background Image - Remember to change this path */}
        <Image
          src="/images/intern1.jpg" // IMPORTANT: Change to your internship background image
          alt="Interns collaborating on a project"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        {/* Content on top of the image */}
        <motion.div
          initial="hidden" animate="visible" variants={containerVariants}
          className="relative z-20"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6">
            Launch Your <span className="text-pink-500">Career</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-200 mx-auto max-w-3xl mb-10 leading-relaxed">
            Gain real-world experience, build your portfolio, and work on projects that make a genuine difference in the world.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#programs">
                <motion.button whileHover={{ scale: 1.05 }} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-800/60">
                    Explore Programs
                </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- OVERLAPPING STATS & FEATURES SECTION --- */}
      {/* The negative margin pulls this section up over the hero for a seamless flow. */}
      <section className="relative bg-black py-20 -mt-20 z-30 rounded-t-3xl border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Band */}
            <div className="border-b border-neutral-800 pb-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Stat to={100} suffix="+" label="Interns Mentored" />
                    <Stat to={95} suffix="%" label="Success Rate" />
                    <Stat to={15} label="Active Cities" />
                </div>
            </div>

            {/* What You'll Gain Section */}
            <div className="pt-20">
                <h2 className="text-4xl font-bold text-pink-500 mb-12 text-center">What You'll Gain</h2>
                <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeaturePoint title="Professional Portfolio">Work on live projects and build a collection of work to showcase to employers.</FeaturePoint>
                    <FeaturePoint title="Dedicated Mentorship">Receive 1-on-1 guidance from experienced professionals in your field.</FeaturePoint>
                    <FeaturePoint title="Certificate & LOR">Gain a formal certificate and a letter of recommendation upon completion.</FeaturePoint>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- INTERNSHIP PROGRAMS SECTION --- */}
      <section id="programs" className="bg-neutral-950 py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-pink-500 mb-12 text-center">Internship Programs</h2>
            <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }} className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {[
                { img: "/images/intern1.jpg", title: "Research & Impact Analysis", desc: "Dive deep into data to measure program effectiveness, identify trends, and contribute to strategic reports." },
                { img: "/images/intern2.jpg", title: "Design & Communications", desc: "Shape our narrative by creating powerful brand assets and managing digital campaigns." },
              ].map((item) => (
                <motion.div
                  key={item.title} variants={itemVariants}
                  className="bg-neutral-900 rounded-xl overflow-hidden flex flex-col border border-neutral-800 transition-all duration-300 hover:border-pink-500/80 hover:-translate-y-2 hover:shadow-pink-glow"
                >
                  <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover h-56" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-pink-400 mb-3">{item.title}</h3>
                    <p className="text-neutral-300 text-base flex-grow leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>
    </main>
  );
}