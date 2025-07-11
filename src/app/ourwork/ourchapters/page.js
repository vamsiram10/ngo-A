"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chapters = [
  {
    id: "jaipur",
    name: "Jaipur",
    img: "/images/chapter-jaipur.jpg",
    volunteers: 120,
    contact: "jaipur@ngo-a.org",
    position: { top: "34%", left: "36%" },
  },
  {
    id: "hyd",
    name: "Hyderabad",
    img: "/images/chapter-hyd.jpg",
    volunteers: 220,
    contact: "hyd@ngo-a.org",
    position: { top: "62%", left: "44%" },
  },
];

const MapPin = ({ chapter, onMouseEnter, onMouseLeave, isHovered }) => (
  <div
    onMouseEnter={() => onMouseEnter(chapter.id)}
    onMouseLeave={onMouseLeave}
    onTouchStart={() => onMouseEnter(chapter.id)}
    onTouchEnd={() => setTimeout(() => onMouseLeave(), 800)}
    className="absolute z-10 cursor-pointer"
    style={{
      left: chapter.position.left,
      top: chapter.position.top,
      transform: "translate(-50%, -50%)",
    }}
  >
    <div
      className={`w-4 h-4 rounded-full bg-pink-500 transition-all duration-300 ${
        isHovered ? "shadow-[0_0_15px_rgba(236,72,153,0.8)]" : "shadow-md"
      }`}
    ></div>
    <div className="absolute w-4 h-4 rounded-full bg-pink-500 animate-ping"></div>
  </div>
);

const ChapterCard = ({ chapter }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 250 }}
    className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-md hover:shadow-pink-600/20 transition-shadow duration-300 overflow-hidden"
  >
    <div className="relative h-44 sm:h-56 md:h-48 w-full">
      <Image
        src={chapter.img}
        alt={`View of ${chapter.name}`}
        fill
        className="object-cover"
        sizes="100vw"
        priority={chapter.id === "jaipur"}
      />
    </div>
    <div className="p-5 sm:p-6 flex flex-col h-full">
      <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-2">
        {chapter.name}
      </h3>
      <p className="text-neutral-400 mb-4 text-sm sm:text-base">
        {chapter.volunteers}+ Active Volunteers
      </p>
      <Link href={`mailto:${chapter.contact}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full mt-auto bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300"
        >
          Contact Chapter
        </motion.button>
      </Link>
    </div>
  </motion.div>
);

const ContentItem = ({ title, description, isFaq = false }) => (
  <motion.div
    variants={itemVariants}
    className="border-t border-neutral-800 py-5 sm:py-6"
  >
    <h3
      className={`font-semibold mb-2 ${
        isFaq ? "text-white" : "text-pink-400"
      } text-base sm:text-lg`}
    >
      {title}
    </h3>
    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default function OurChaptersPage() {
  const [hoveredChapter, setHoveredChapter] = useState(null);
  const getChapterById = (id) => chapters.find((c) => c.id === id);

  return (
    <main className="bg-black text-white">
      <div className="overflow-hidden">
        {/* Hero */}
        <div className="relative flex items-center justify-center text-center px-4 min-h-[100vh] sm:min-h-[80vh] md:min-h-[100vh]">
          <Image
            src="/images/chapter-hero.jpg"
            alt="Volunteers"
            fill
            className="object-cover z-0 opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-20 max-w-4xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Our Roots, <span className="text-pink-500">Your Community</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-300 mb-6 sm:mb-10"
            >
              From bustling metros to local neighborhoods, our mission is
              powered by dedicated chapters across India. Find yours today.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="#map">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full text-white text-base sm:text-lg font-semibold transition"
                >
                  Explore Our Chapters
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="bg-black py-12 sm:py-16 md:py-24 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            {/* Map */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-pink-500 mb-6 sm:mb-10 text-center">
              Find a Chapter Near You
            </h2>

            <div className="flex justify-center">
              <div
                id="map"
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  xs:aspect-[16/9]
                  border border-neutral-800
                  rounded-xl
                  overflow-hidden
                  bg-neutral-900
                  mb-10 sm:mb-16
                  max-w-full
                  md:max-w-3xl
                  lg:max-w-4xl
                  xl:max-w-5xl
                  md:aspect-[16/7]
                  md:h-[420px]
                  lg:h-[520px]
                  xl:h-[600px]
                "
              >
                <Image
                  src="/images/india-map.png"
                  alt="Map of India"
                  fill
                  className="object-contain opacity-10"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
                />
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    onMouseEnter={() => setHoveredChapter(chapter.id)}
                    onMouseLeave={() => setHoveredChapter(null)}
                    onTouchStart={() => setHoveredChapter(chapter.id)}
                    onTouchEnd={() =>
                      setTimeout(() => setHoveredChapter(null), 800)
                    }
                    className="absolute z-10 cursor-pointer"
                    style={{
                      left: chapter.position.left,
                      top: chapter.position.top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`
                        rounded-full border-2 sm:border-4 border-pink-500 bg-white flex items-center justify-center shadow-lg transition-all duration-300
                        ${
                          hoveredChapter === chapter.id
                            ? "ring-2 sm:ring-4 ring-pink-300/60"
                            : ""
                        }
                        w-8 h-8 sm:w-10 sm:h-10
                      `}
                    >
                      <Image
                        src="/svg/AVASA.svg"
                        alt="AVASA Logo"
                        width={24}
                        height={24}
                        className="rounded-full object-contain bg-white animate-blink-signal sm:w-8 sm:h-8 w-6 h-6"
                        priority
                      />
                    </div>
                  </div>
                ))}
                <AnimatePresence>
                  {hoveredChapter && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 p-2 sm:p-4 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-left"
                    >
                      <h3 className="text-pink-400 font-semibold text-sm sm:text-base md:text-lg">
                        {getChapterById(hoveredChapter)?.name}
                      </h3>
                      <p className="text-neutral-300 text-xs sm:text-sm">
                        {getChapterById(hoveredChapter)?.volunteers}+ Volunteers
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* Chapters List */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-pink-500 mb-8 sm:mb-12 text-center">
              Our Chapters
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
            >
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                >
                  <ChapterCard chapter={chapter} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-black py-16 sm:py-24 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-6">
                The Heart of Our Community
              </h2>
              <div className="space-y-5 sm:space-y-6">
                <ContentItem
                  title="Local Events & Drives"
                  description="From charity drives to awareness campaigns, our chapters are active on the ground, making a visible difference."
                />
                <ContentItem
                  title="Skill-Building Workshops"
                  description="We host workshops to empower our volunteers with new skills in leadership, communication, and project management."
                />
                <ContentItem
                  title="Collaborative Projects"
                  description="Each chapter works on unique, localized projects that address the specific needs of their community."
                />
              </div>
            </div>
            <div className="relative h-64 sm:h-[400px] lg:h-[500px] w-full">
              <div className="absolute top-0 right-0 h-2/3 w-2/3 rounded-2xl overflow-hidden shadow-xl z-10">
                <Image
                  src="/images/chapter-jaipur.jpg"
                  alt="Jaipur Chapter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 h-1/2 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/chapter-hyd.jpg"
                  alt="Hyderabad Chapter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-neutral-950 py-16 sm:py-24 border-b border-neutral-800">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-10 text-center">
              Starting a Chapter: FAQs
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-5"
            >
              <ContentItem
                title="What is the first step to starting a chapter?"
                description="Contact us through our contact page! We’ll provide a starter kit and help you build a local team."
                isFaq
              />
              <ContentItem
                title="How many people do I need to start a chapter?"
                description="Just 3–5 dedicated members can kickstart a chapter. Passion matters more than numbers!"
                isFaq
              />
              <ContentItem
                title="What support do I get?"
                description="Branding, mentorship, access to our tools, and step-by-step support from our leadership team."
                isFaq
              />
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 sm:py-24 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4">
              Ready to Lead the Change?
            </h2>
            <p className="text-neutral-300 mb-8 text-base sm:text-lg">
              Be a pioneer in your community. We’ll support you every step of
              the way to launch your chapter.
            </p>
            <Link href="/contactus">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white font-bold py-3 px-8 rounded-full text-base sm:text-lg transition"
              >
                Start a Chapter
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
