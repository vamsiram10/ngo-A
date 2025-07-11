"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "@/components/Counter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Stat = ({ to, suffix, label }) => (
  <div className="text-center">
    <Counter to={to} suffix={suffix} />
    <p className="font-serif text-xs text-neutral-400 tracking-widest mt-2 uppercase">
      {label}
    </p>
  </div>
);

const FeaturePoint = ({ number, title, children }) => (
  <motion.div variants={itemVariants} className="relative pl-12">
    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-pink-900/50 border border-pink-700/60 text-pink-400 font-semibold">
      {number}
    </div>
    <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">{children}</p>
  </motion.div>
);

const RegistrationModal = ({ isOpen, onClose, opportunity }) => {
  const [view, setView] = useState("details");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setView("details");
      setFileName("");
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setView("success");
  };

  if (!opportunity) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {view === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={opportunity.img}
                    alt={opportunity.title}
                    width={800}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-pink-500 mb-2">
                      {opportunity.title}
                    </h2>
                    <p className="text-neutral-400 mb-4">
                      Duration: {opportunity.duration}
                    </p>
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      {opportunity.longDesc}
                    </p>
                    <h3 className="font-semibold text-white mb-2">
                      Ideal Candidate Qualities:
                    </h3>
                    <ul className="list-disc list-inside text-neutral-400 space-y-1 mb-6">
                      {opportunity.requirements.map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setView("form")}
                        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all"
                      >
                        Apply for this Role
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
              {view === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-8"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-pink-500">
                      {opportunity.title}
                    </h2>
                    <p className="text-neutral-400">Application Form</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                      />
                      <input
                        className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <input
                      className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      type="url"
                      name="linkedin"
                      placeholder="LinkedIn Profile URL"
                    />
                    <div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={(e) =>
                          setFileName(e.target.files[0]?.name || "")
                        }
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="w-full bg-neutral-800 border border-dashed border-neutral-600 rounded-lg px-4 py-2.5 text-neutral-400 hover:bg-neutral-700 hover:border-pink-500 transition-all"
                      >
                        {fileName || "Upload Resume/CV (PDF, DOC)"}
                      </button>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={() => setView("details")}
                        className="text-neutral-400 hover:text-white transition"
                      >
                        &larr; Back to Details
                      </button>
                      <button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
              {view === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-green-500 mx-auto mb-4 h-16 w-16"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Application Received!
                  </h2>
                  <p className="text-neutral-300 mb-6">
                    Thank you for applying for the &quot;{opportunity.title}
                    &quot; program. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function InternshipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOpp, setSelectedOpp] = useState(null);
  const openModal = (opportunity) => {
    setSelectedOpp(opportunity);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const opportunities = [
    {
      id: 1,
      img: "/images/intern1.jpg",
      title: "Research & Impact Analysis",
      desc: "Dive deep into data to measure program effectiveness, identify trends, and contribute to strategic reports.",
      duration: "3-6 months",
      longDesc:
        "As a Research & Impact Analyst Intern, you will play a crucial role in shaping our strategy by providing data-backed insights. This role is perfect for a detail-oriented individual passionate about turning data into actionable stories of social change.",
      requirements: [
        "Strong analytical and quantitative skills.",
        "Experience with data visualization tools is a plus.",
        "Excellent written and verbal communication.",
        "Pursuing a degree in Social Sciences, Data Science, or related field.",
      ],
    },
    {
      id: 2,
      img: "/images/intern2.jpg",
      title: "Design & Communications",
      desc: "Shape our narrative by creating powerful brand assets and managing digital campaigns.",
      duration: "3-4 months",
      longDesc:
        "This is a creative role for a visual storyteller. You will work alongside our communications team to design marketing materials, manage our social media presence, and help define the visual identity of our foundation across all digital platforms.",
      requirements: [
        "A strong portfolio showcasing design skills (UI, graphics, etc.).",
        "Proficiency in Adobe Creative Suite or Figma.",
        "Understanding of social media marketing principles.",
        "A keen eye for aesthetics and detail.",
      ],
    },
  ];
  return (
    <>
      <main className="bg-black text-white">
        <section className="relative min-h-[90vh] flex items-center justify-center text-center p-4">
          <Image
            src="/images/intern1.jpg"
            alt="Interns collaborating"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-20"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Launch Your <span className="text-pink-500">Career</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-200 mx-auto max-w-3xl mb-10 leading-relaxed"
            >
              Gain real-world experience, build your portfolio, and work on
              projects that make a genuine difference.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="#programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-800/60"
                >
                  Explore Programs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative -mt-20 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl py-12">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <Stat to={100} suffix="+" label="Interns Mentored" />
                <Stat to={95} suffix="%" label="Success Rate" />
                <Stat to={15} label="Active Cities" />
              </div>
            </div>
          </div>
          <div className="bg-black pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-16 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(107,33,168,0.08),_transparent_40%)]"></div>
                <div className="absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-cover bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d333_1x.png')] opacity-20"></div>
                <h2 className="text-4xl font-bold text-pink-500 mb-16 text-center">
                  What You&apos;ll Gain
                </h2>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={containerVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid lg:grid-cols-3 gap-12 md:gap-16 items-center"
                >
                  <div className="lg:col-span-1 space-y-12 text-right">
                    <FeaturePoint number="01" title="Professional Portfolio">
                      Work on live projects and build a collection of work to
                      showcase to employers.
                    </FeaturePoint>
                    <FeaturePoint number="02" title="Dedicated Mentorship">
                      Receive 1-on-1 guidance from experienced professionals in
                      your field.
                    </FeaturePoint>
                  </div>
                  <motion.div
                    variants={itemVariants}
                    className="lg:col-span-1 flex justify-center items-center order-first lg:order-none"
                  >
                    <div className="relative w-full max-w-xs aspect-square rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl">
                      <Image
                        src="/images/intern2.jpg"
                        alt="An intern receiving mentorship"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </motion.div>
                  <div className="lg:col-span-1 space-y-12 text-left">
                    <FeaturePoint number="03" title="Certificate & LOR">
                      Gain a formal certificate and a letter of recommendation
                      upon completion.
                    </FeaturePoint>
                    <FeaturePoint number="04" title="Strategic Experience">
                      Learn how non-profits operate, from grassroots execution
                      to high-level strategy.
                    </FeaturePoint>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="programs"
          className="bg-neutral-950 py-24 border-t border-neutral-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-pink-500 mb-12 text-center">
              Internship Programs
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-10 md:grid-cols-1 lg:grid-cols-2"
            >
              {opportunities.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-neutral-900 rounded-xl flex flex-col border border-neutral-800 transition-all duration-300 hover:border-pink-500/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/40 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.08),_transparent_40%)]"
                >
                  <div
                    className="relative h-56 w-full rounded-t-xl overflow-hidden cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-2xl font-semibold text-pink-400 mb-3 cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 text-base mb-4 flex-grow leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="text-sm text-neutral-400 font-semibold mb-6">
                      Duration:{" "}
                      <span className="text-neutral-200">{item.duration}</span>
                    </p>
                    <motion.button
                      onClick={() => openModal(item)}
                      whileHover={{ scale: 1.05 }}
                      className="w-full mt-auto bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white font-bold py-3 rounded-lg transition-all duration-300"
                    >
                      View &amp; Apply
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <RegistrationModal
        isOpen={modalOpen}
        onClose={closeModal}
        opportunity={selectedOpp}
      />
    </>
  );
}
