"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";

// Animation Variants
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

export default function VolunteeringPage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* --- LAYERED HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center p-4">
        {/* Background Image */}
        <Image
          src="/images/volunteer-hero.jpg" // IMPORTANT: Change this to your actual background image
          alt="A group of smiling volunteers"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        {/* Content */}
        <motion.div
          initial="hidden" animate="visible" variants={containerVariants}
          className="relative z-20"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6">
            Become a <span className="text-pink-500">Changemaker</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-200 mx-auto max-w-3xl mb-10 leading-relaxed">
            Join a passionate community dedicated to creating tangible, lasting impact. Your time and skills can change lives.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#opportunities">
                <motion.button whileHover={{ scale: 1.05 }} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-800/60">
                    View Opportunities
                </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- OVERLAPPING STATS & FEATURES SECTION --- */}
      {/* The negative margin is key to the "Wix" feel. It pulls this section up. */}
      <section className="relative bg-black py-20 -mt-20 z-30 rounded-t-3xl border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats Band */}
            <div className="border-b border-neutral-800 pb-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Stat to={100} suffix="+" label="Volunteers Engaged" />
                    <Stat to={8} label="Active Projects" />
                    <Stat to={2000} suffix="+" label="Lives Impacted" />
                </div>
            </div>

            {/* Why Volunteer Section */}
            <div className="pt-20">
                <h2 className="text-4xl font-bold text-pink-500 mb-12 text-center">Why Your Help Matters</h2>
                <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeaturePoint title="Make a Real Impact">Your work directly contributes to improving lives and strengthening communities.</FeaturePoint>
                    <FeaturePoint title="Develop New Skills">Gain valuable experience in leadership, communication, and project management.</FeaturePoint>
                    <FeaturePoint title="Join a Community">Connect with like-minded individuals who share your passion for social good.</FeaturePoint>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- OPPORTUNITIES SECTION --- */}
      <section id="opportunities" className="bg-neutral-950 py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-pink-500 mb-12 text-center">Current Opportunities</h2>
            <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { img: "/images/volunteer1.jpg", title: "Design & Media", desc: "Craft compelling visuals and social content that tells our story." },
                { img: "/images/volunteer2.jpg", title: "Community Outreach", desc: "Be the face of our mission. Plan and lead campaigns and awareness drives." },
                { img: "/images/volunteer3.jpg", title: "Research & Impact", desc: "Help us measure what matters. Conduct surveys and analyze our social impact." },
              ].map((item) => (
                <motion.div
                  key={item.title} variants={itemVariants}
                  className="bg-neutral-900 rounded-xl overflow-hidden flex flex-col border border-neutral-800 transition-all duration-300 hover:border-pink-500/80 hover:-translate-y-2 hover:shadow-pink-glow"
                >
                  <Image src={item.img} alt={item.title} width={500} height={300} className="w-full object-cover h-48" />
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