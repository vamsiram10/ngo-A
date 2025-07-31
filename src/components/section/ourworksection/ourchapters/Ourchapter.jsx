"use client";
import { useState, useRef, Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

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
    img: "/images/chapter-jaipur.webp",
    volunteers: 70,
    contact: "jaipur@ngo-a.org",
    position: { top: "34%", left: "36%" },
  },
  {
    id: "hyd",
    name: "Hyderabad",
    img: "/images/chapter-hyd.webp",
    volunteers: 25,
    contact: "hyd@ngo-a.org",
    position: { top: "62%", left: "44%" },
  },
];

const galleryContent = [
  {
    id: "hyd",
    title: "Hyderabad Chapter",
    description:
      "Our Hyderabad chapter has been at the forefront of community engagement, organizing everything from educational drives to health camps. These moments capture the spirit of our volunteers and the vibrant communities we serve.",
    images: [
      {
        src: "/images/chapter-hyd1.webp",
        alt: "Hyderabad event 1",
        title: "Food Drive",
        description: "Sharing warm meals and warmer smiles with those in need.",
      },
      {
        src: "/images/chapter-hyd2.webp",
        alt: "Hyderabad event 2",
        title: "Health Drive",
        description: "Providing essential health services.",
      },
      {
        src: "/images/chapter-hyd3.webp",
        alt: "Hyderabad event 3",
        title: "Summer Reach",
        description: "Spreading relief and smiles in summer .",
      },
      {
        src: "/images/chapter-hyd4.webp",
        alt: "Hyderabad event 4",
        title: "Community Joy",
        description: "Sharing moments of happiness.",
      },
      {
        src: "/images/chapter-hyd5.webp",
        alt: "Hyderabad event 4",
        title: "Care Serve",
        description: "Sharing meals and love with the little ones",
      },
    ],
  },
  {
    id: "jaipur",
    title: "Jaipur Chapter",
    description:
      "In the heart of the Pink City, our Jaipur chapter brings smiles and support to many. From local clean-up initiatives to celebrating festivals with underprivileged children, our volunteers create lasting bonds and beautiful memories.",
    images: [
      {
        src: "/jaipur/j1.webp",
        alt: "Jaipur event 1",
        title: "Tech Aid",
        description:
          "Bridging gaps in learning by supporting government school classrooms",
      },
      {
        src: "/jaipur/j2.webp",
        alt: "Jaipur event 2",
        title: "Proud Roots",
        description:
          "Celebrating the spirit of unity, freedom, and pride on Republic Day.",
      },
      {
        src: "/jaipur/j3.webp",
        alt: "Jaipur event 3",
        title: "Winter Drive",
        description:
          "Spreading warmth this winter — with blankets, clothes, and compassion.",
      },
      {
        src: "/jaipur/j4.webp",
        alt: "Jaipur event 4",
        title: "Cool Relief",
        description: "Beating the heat with refreshing drinks and kindness.",
      },
      {
        src: "/jaipur/j5.webp",
        alt: "Jaipur event 4",
        title: "Health Hand",
        description:
          "Distributing essential medical kits to support safer, healthier lives.",
      },
    ],
  },
];

const toWebpIfJpg = (src) =>
  typeof src === "string" ? src.replace(/\.jpg$/i, ".webp") : src;

function ChapterCard({ chapter }) {
  return (
    <Suspense fallback={<div className="h-64 bg-neutral-900 rounded-2xl" />}>
      <MotionDiv
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="overflow-hidden bg-neutral-900 rounded-2xl border-neutral-800 shadow-md transition-shadow duration-300 border hover:shadow-pink-600/20"
      >
        <div className="relative w-full bg-black aspect-[4/3]">
          <Image
            src={toWebpIfJpg(chapter.img)}
            alt={`View of ${chapter.name}`}
            fill
            className="object-contain"
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 100vw"
            priority={false}
          />
        </div>
        <div className="flex flex-col p-5 h-full sm:p-6">
          <h3 className="mb-2 text-xl font-semibold text-pink-400 sm:text-2xl">
            {chapter.name}
          </h3>
          <p className="mb-4 text-neutral-400 text-sm sm:text-base">
            {chapter.volunteers}+ Active Volunteers
          </p>
          <Link href="/contactus">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="mt-auto py-2.5 w-full text-white font-semibold text-sm text-base text-center bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg transition-all duration-300 hover:from-pink-500 hover:to-violet-500 sm:py-3"
              as="button"
            >
              Contact Chapter
            </MotionDiv>
          </Link>
        </div>
      </MotionDiv>
    </Suspense>
  );
}

function ContentItem({ title, description, isFaq = false }) {
  return (
    <Suspense
      fallback={<div className="py-5 border-t border-neutral-800 sm:py-6" />}
    >
      <MotionDiv
        variants={itemVariants}
        className="py-5 border-t border-neutral-800 sm:py-6"
      >
        <h3
          className={`font-semibold mb-2 ${
            isFaq ? "text-white" : "text-pink-400"
          } text-base sm:text-lg`}
        >
          {title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      </MotionDiv>
    </Suspense>
  );
}

function GalleryCard({ image, isActive, onClick, index }) {
  return (
    <Suspense
      fallback={<div className="bg-neutral-900 rounded-2xl aspect-square" />}
    >
      <MotionDiv
        variants={itemVariants}
        whileHover="hover"
        transition={{ type: "spring", stiffness: 250 }}
        className={`group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-600/30 transition-shadow duration-300
          ${isActive ? "mobile-gallery-active" : ""}
        `}
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-pressed={isActive}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClick();
        }}
        style={{ touchAction: "manipulation" }}
      >
        <Image
          src={toWebpIfJpg(image.src)}
          alt={image.alt}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105
            ${isActive ? "mobile-gallery-scale" : ""}
          `}
          style={{ objectFit: "cover" }}
          draggable={false}
          sizes="(max-width: 640px) 288px, 320px"
          priority={false}
        />
        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${isActive ? "mobile-gallery-opacity" : ""}
          `}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white pointer-events-none sm:p-6">
          <MotionDiv
            initial={{ y: 10, opacity: 0 }}
            variants={{ hover: { y: 0, opacity: 1 } }}
            animate={isActive ? "hover" : undefined}
            transition={{ delay: 0.1, ease: "easeOut" }}
            className="font-bold text-lg sm:text-xl"
            as="h3"
          >
            {image.title}
          </MotionDiv>
          <MotionDiv
            initial={{ y: 10, opacity: 0 }}
            variants={{ hover: { y: 0, opacity: 1 } }}
            animate={isActive ? "hover" : undefined}
            transition={{ delay: 0.15, ease: "easeOut" }}
            className="text-sm text-neutral-300"
            as="p"
          >
            {image.description}
          </MotionDiv>
        </div>
        {isActive && (
          <div
            className="z-40 fixed inset-0 sm:hidden"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              if (typeof window !== "undefined" && window.innerWidth < 640) {
                onClick();
              }
            }}
          />
        )}
      </MotionDiv>
    </Suspense>
  );
}

function ChapterGallery({ title, description, images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Suspense fallback={<div className="mb-16 last:mb-0" />}>
      <MotionDiv variants={itemVariants} className="mb-16 last:mb-0">
        <div className="mx-auto mb-8 px-4 max-w-3xl text-center">
          <h3 className="mb-3 text-2xl font-bold text-pink-400 sm:text-3xl">
            {title}
          </h3>
          <p className="text-neutral-300 text-base sm:text-lg">{description}</p>
        </div>
        <div className="overflow-x-auto flex py-4 pl-4 pr-4 pr-8 custom-scrollbar space-x-4 sm:pl-8 md:space-x-6">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-72 sm:w-80">
              <GalleryCard
                image={image}
                index={index}
                isActive={activeIndex === index}
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth < 640
                  ) {
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }}
              />
            </div>
          ))}
        </div>
        <style jsx global>{`
          @media (max-width: 639px) {
            .mobile-gallery-active {
              z-index: 50;
              box-shadow: 0 8px 32px 0 rgba(236, 72, 153, 0.25),
                0 1.5px 8px 0 rgba(236, 72, 153, 0.15);
            }
            .mobile-gallery-scale {
              transform: scale(1.05);
              transition: transform 0.3s;
            }
            .mobile-gallery-opacity {
              opacity: 1 !important;
              transition: opacity 0.3s;
            }
          }
        `}</style>
      </MotionDiv>
    </Suspense>
  );
}

// Change the exported component name to match the file name: Ourchapter
function Ourchapter() {
  const [hoveredChapterId, setHoveredChapterId] = useState(null);

  const chapterToShow = hoveredChapterId
    ? chapters.find((c) => c.id === hoveredChapterId)
    : null;

  const chaptersSectionRef = useRef(null);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    if (chaptersSectionRef.current) {
      chaptersSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      if (typeof window !== "undefined") {
        const el = document.getElementById("chapters");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Remove overflow-hidden from the wrapper div to allow natural scrolling
  // Also, ensure the main element takes min-h-screen for full page scroll
  return (
    <main className="min-h-screen w-full text-white bg-black">
      <div>
        <div className="relative flex flex-col items-center justify-center px-4 min-h-[100vh] sm:min-h-[80vh] md:flex-row">
          <Suspense
            fallback={
              <div className="z-20 relative py-16 max-w-2xl w-full w-1/2 text-center text-left md:py-0" />
            }
          >
            <MotionDiv
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="z-20 relative py-16 max-w-2xl w-full w-1/2 text-center text-left md:py-0"
            >
              <MotionDiv
                variants={itemVariants}
                className="mb-4 mt-8 text-4xl font-bold md:text-6xl"
                as="h1"
              >
                Our Roots, <span className="text-pink-500">Your Community</span>
              </MotionDiv>
              <MotionDiv
                variants={itemVariants}
                className="mb-6 text-lg text-neutral-300 sm:mb-10"
                as="p"
              >
                From bustling metros to local neighborhoods, our mission is
                powered by dedicated chapters across India. Find yours today.
              </MotionDiv>
              <MotionDiv
                variants={itemVariants}
                className="flex justify-center md:justify-start"
              >
                <button
                  onClick={handleSmoothScroll}
                  className="px-6 py-3 text-white text-base font-semibold bg-pink-600 rounded-full hover:bg-pink-700 transition sm:text-lg"
                  type="button"
                >
                  Explore Our Chapters
                </button>
              </MotionDiv>
            </MotionDiv>
          </Suspense>
          <div className="relative flex justify-center items-center w-full h-[200px] sm:h-[480px] md:w-1/2 lg:h-[850px]">
            <div
              id="map"
              className="overflow-hidden z-20 relative w-full max-w-2xl bg-neutral-900/90 border-2 border-pink-500 rounded-2xl shadow-2xl aspect-[4/3] backdrop-blur-lg aspect-[16/9] md:max-w-4xl"
              style={{
                minWidth: 0,
                minHeight: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={toWebpIfJpg("/images/india-map.png")}
                  alt="Map of India"
                  fill
                  className="object-contain opacity-80 saturate-150"
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 1024px) 100vw, 100vw"
                  priority={true}
                />
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    onMouseEnter={() => setHoveredChapterId(chapter.id)}
                    onMouseLeave={() => setHoveredChapterId(null)}
                    onTouchStart={() => setHoveredChapterId(chapter.id)}
                    onTouchEnd={() =>
                      setTimeout(() => setHoveredChapterId(null), 800)
                    }
                    className="z-30 absolute cursor-pointer"
                    style={{
                      left: chapter.position.left,
                      top: chapter.position.top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`rounded-full border-2 sm:border-4 border-pink-500 bg-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                        hoveredChapterId === chapter.id
                          ? "ring-2 sm:ring-4 ring-pink-300/60 scale-110"
                          : ""
                      } w-10 h-10 sm:w-12 sm:h-12`}
                    >
                      <Image
                        src={toWebpIfJpg("/svg/AVASA.svg")}
                        alt="AVASA Logo"
                        width={32}
                        height={32}
                        className="object-contain w-8 h-8 h-10 bg-white rounded-full animate-blink-signal sm:w-10"
                        style={{ objectFit: "contain" }}
                        priority={false}
                      />
                    </div>
                  </div>
                ))}
                <Suspense fallback={null}>
                  <AnimatePresence>
                    {chapterToShow && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="z-40 absolute bottom-4 left-4 left-6 p-3 p-5 text-left bg-black/80 rounded-xl border-pink-500/30 backdrop-blur-lg border sm:bottom-6"
                      >
                        <h3 className="text-pink-400 font-semibold text-base sm:text-lg md:text-xl">
                          {chapterToShow.name}
                        </h3>
                        <p className="text-neutral-200 text-xs sm:text-sm">
                          {chapterToShow.volunteers}+ Volunteers
                        </p>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </Suspense>
              </div>
            </div>
          </div>
          <div className="z-0 absolute inset-0 pointer-events-none">
            <Image
              src={toWebpIfJpg("/images/vm.jpg")}
              alt="Volunteers"
              fill
              className="object-cover opacity-50 saturate-150"
              style={{
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
              sizes="100vw"
              priority={false}
            />
            <style jsx global>{`
              @media (min-width: 1024px) {
                .object-cover {
                  object-position: center 15% !important;
                }
              }
            `}</style>
          </div>
        </div>

        <div
          id="chapters"
          ref={chaptersSectionRef}
          className="py-16 bg-black border-y border-neutral-800 md:py-24"
        >
          <div className="mx-auto px-4 max-w-5xl">
            <h2 className="mb-8 text-2xl font-bold text-pink-500 text-center text-4xl xs:text-3xl sm:mb-12">
              Our Chapters
            </h2>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2" />
              }
            >
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
              >
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="mx-auto w-full max-w-sm">
                    <ChapterCard chapter={chapter} />
                  </div>
                ))}
              </MotionDiv>
            </Suspense>
          </div>
        </div>

        <div className="py-16 bg-black border-b border-neutral-800 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 px-4 text-center">
              <h2 className="mb-3 text-3xl font-bold text-pink-500 sm:text-4xl">
                Moments That Define Us
              </h2>
              <p className="mx-auto max-w-3xl text-neutral-400 text-base sm:text-lg">
                A glimpse into the lifeblood of our mission—the events, drives,
                and smiles from our chapters nationwide.
              </p>
            </div>
            <Suspense fallback={<div />}>
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.1 }}
              >
                {galleryContent.map((chapter) => (
                  <ChapterGallery
                    key={chapter.id}
                    title={chapter.title}
                    description={chapter.description}
                    images={chapter.images}
                  />
                ))}
              </MotionDiv>
            </Suspense>
          </div>
        </div>

        <div className="py-16 bg-neutral-950 border-b border-neutral-800 sm:py-24">
          <div className="mx-auto px-4 max-w-2xl">
            <h2 className="mb-10 text-3xl font-bold text-pink-500 text-center sm:text-4xl">
              Starting a Chapter: FAQs
            </h2>
            <Suspense fallback={<div className="space-y-5" />}>
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-5"
              >
                <ContentItem
                  title="What's the impact of Avasa Foundation's Hyderabad and Jaipur chapters?
"
                  description="Our Hyderabad and Jaipur chapters are making a tangible difference by empowering disadvantaged people in the society .We work in three areas mainly: Love and Care, Seasonal and Awareness Drives and Development and Support 
."
                  isFaq
                />
                <ContentItem
                  title="How can I start a new Avasa Foundation chapter in my city?
"
                  description="If you're passionate about our mission, please contact us! We have specific guidelines and a process for establishing new chapters, ensuring alignment with our vision and values.
"
                  isFaq
                />
                <ContentItem
                  title="How many people are required to start a new Avasa Foundation chapter?
"
                  description="Generally, it can range from 5-7 people along with a committed core team. We'll provide detailed requirements during the application process."
                  isFaq
                />
              </MotionDiv>
            </Suspense>
          </div>
        </div>

        <div className="py-16 text-center sm:py-24">
          <div className="mx-auto px-4 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-pink-500 sm:text-4xl">
              Ready to Lead the Change?
            </h2>
            <p className="mb-8 text-neutral-300 text-base sm:text-lg">
              Be a pioneer in your community. We’ll support you every step of
              the way to launch your chapter.
            </p>
            <Link href="/contactus">
              <Suspense
                fallback={
                  <button className="py-3 px-8 text-white font-bold text-base bg-gradient-to-r from-pink-600 to-violet-600 rounded-full transition sm:text-lg">
                    Start a Chapter
                  </button>
                }
              >
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  className="py-3 px-8 text-white font-bold text-base bg-gradient-to-r from-pink-600 to-violet-600 rounded-full hover:from-pink-500 hover:to-violet-500 transition sm:text-lg"
                  as="button"
                >
                  Start a Chapter
                </MotionDiv>
              </Suspense>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Ourchapter;
