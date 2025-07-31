"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const fallbackImg =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function handleImgError(e) {
  if (e.target.src !== fallbackImg) {
    e.target.src = fallbackImg;
  }
}
function convertJpgToWebp(src) {
  if (typeof src === "string" && src.endsWith(".jpg")) {
    return src.replace(/\.jpg$/, ".webp");
  }
  return src;
}

// --- Main Internship Section Page ---

const InternshipTestimonials = memo(function InternshipTestimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "My online content writing internship with Avasa Foundation taught me to write on complex social issues with sensitivity and impact.",
      name: "Mahalakshmi L",
      role: "Former Content Writing Intern",
      avatar: "/images/avatar1.webp",
    },
    {
      id: 2,
      quote:
        "I learned HTML, CSS, and Responsive Design, which helped improve my technical and problem-solving skills.",
      name: "Ch.Nikhil",
      role: "Former Technical Intern",
      avatar: "/images/avatar2.webp",
    },
    {
      id: 3,
      quote:
        "It was great working with Avasa Foundation; the guidance and environment here encouraged me to work harder. It was phenomenal, and I look forward to working here again",
      name: "Krishna Swami",
      role: "Former Content Writing Intern",
      avatar: "/images/avatar3.webp",
    },
    {
      id: 4,
      quote:
        "This internship allowed me to discover my graphic design skills. I'm truly grateful to be a part of Avasa.",
      name: "Manthan jain",
      role: "Former Social Media Intern",
      avatar: "/images/avatar4.webp",
    },
    {
      id: 5,
      quote:
        "I learned how to tailor my content impactfully. Heartfelt thanks to Team Avasa for this invaluable opportunity",
      name: "K Gayathri Devi",
      role: "Former Content Writing Intern",
      avatar: "/images/avatar5.webp",
    },
    {
      id: 6,
      quote:
        "An amazing experience as a technical support intern at Avasa; it significantly boosted my confidence and allowed me to grow technically and professionally.",
      name: "B.Chandrashekar Reddy",
      role: "Former Technical Intern",
      avatar: "/images/avatar6.webp",
    },
    {
      id: 7,
      quote:
        "A great learning experience as a content writing intern. Analyzing Avasa's past work was both challenging and memorable.",
      name: "Drishti Wacchani",
      role: "Former Content Writing Intern",
      avatar: "/images/avatar7.jpeg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const testimonialVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto px-4 max-w-5xl text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-pink-500 md:text-4xl">
          What Our Interns Say
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="z-10 hidden p-2 bg-white/10 rounded-full transition-colors duration-300 shrink-0 hover:bg-white/20 md:block"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="overflow-hidden relative mx-auto h-96 w-full max-w-3xl h-80 md:mx-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center p-4"
              >
                <div className="flex flex-col justify-center items-center p-6 w-full h-full text-center bg-neutral-900 border-neutral-800 rounded-2xl border">
                  <p className="mb-6 text-neutral-300 text-lg italic md:text-xl">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="relative w-20 h-20 h-24 md:w-24">
                      <Image
                        src={convertJpgToWebp(
                          testimonials[currentTestimonial].avatar
                        )}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover rounded-full"
                        onError={handleImgError}
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>
                    <div className="ml-6 text-left">
                      <p className="font-semibold text-white text-base md:text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-pink-400 text-sm md:text-base">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={nextTestimonial}
            className="z-10 hidden p-2 bg-white/10 rounded-full transition-colors duration-300 shrink-0 hover:bg-white/20 md:block"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-white/10 rounded-full transition-colors duration-300 hover:bg-white/20 md:hidden"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentTestimonial === index
                    ? "bg-pink-500"
                    : "bg-neutral-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-white/10 rounded-full transition-colors duration-300 hover:bg-white/20 md:hidden"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});
InternshipTestimonials.displayName = "InternshipTestimonials";

const InternshipFeaturePoint = memo(function InternshipFeaturePoint({
  number,
  title,
  children,
}) {
  return (
    <div className="relative pl-14">
      <div className="absolute left-0 top-1 flex items-center justify-center h-10 w-10 text-pink-400 font-semibold bg-pink-900/50 rounded-full border-pink-700/60 border">
        {number}
      </div>
      <h3 className="mb-2 pt-1 font-semibold text-lg text-white">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{children}</p>
    </div>
  );
});
InternshipFeaturePoint.displayName = "InternshipFeaturePoint";

const InternshipWhyJoin = memo(function InternshipWhyJoin() {
  const whyJoinFeatures = [
    {
      number: "01",
      title: "Work Remotely",
      description: "Enjoy the flexibility of contributing from anywhere!",
    },
    {
      number: "02",
      title: "Gain Real-World Experience",
      description: "Develop valuable skills in your chosen field.",
    },
    {
      number: "03",
      title: "Make a Meaningful Impact",
      description:
        "Directly contribute to the betterment of underprivileged communities.",
    },
    {
      number: "04",
      title: "Professional Development",
      description:
        "Enhance your teamwork, communication, and organizational skills.",
    },
    {
      number: "05",
      title: "Certificate of Completion",
      description:
        "Receive recognition for your dedication after successfully completing the 1-month internship.",
    },
    {
      number: "06",
      title: "Personal Satisfaction",
      description:
        "Experience the joy of giving back and being part of a positive change.",
    },
  ];
  return (
    <div className="pt-20 bg-black md:pt-28">
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="p-8 bg-neutral-900 rounded-3xl border-neutral-800 border md:p-16">
          <h2 className="mb-12 text-3xl font-bold text-pink-500 text-center md:text-4xl">
            What You&apos;ll Gain
          </h2>
          <div className="overflow-hidden relative mx-auto mb-16 w-full max-w-3xl rounded-2xl shadow-2xl shadow-pink-900/30 aspect-[16/9]">
            <Image
              src="/images/certificate.png"
              alt="A group of interns working together"
              fill
              className="object-cover absolute inset-0 w-full h-full"
              style={{ objectFit: "cover" }}
              onError={handleImgError}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyJoinFeatures.map((feature) => (
              <InternshipFeaturePoint
                key={feature.number}
                number={feature.number}
                title={feature.title}
              >
                {feature.description}
              </InternshipFeaturePoint>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
InternshipWhyJoin.displayName = "InternshipWhyJoin";

const InternshipPrograms = memo(function InternshipPrograms() {
  const opportunities = [
    {
      id: 1,
      img: "/images/Technical Intern.webp",
      title: "Technical Intern",
      desc: "Help with website maintenance, data management, and IT support to keep our digital infrastructure strong and efficient.",
      duration: "1-3 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
    {
      id: 2,
      img: "/images/Social Media Intern.png",
      title: "Social Media Intern",
      desc: "Create engaging content, manage our online presence, and connect with our community across various social platforms.",
      duration: "1-3 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
    {
      id: 3,
      img: "/images/Fundraising Intern.webp",
      title: "Fundraising Intern",
      desc: "Support our fundraising efforts through research, outreach, and campaign assistance to help us reach our financial goals.",
      duration: "1-3 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
    {
      id: 4,
      img: "/images/Content Writing Intern.webp",
      title: "Content Writing Intern",
      desc: "Craft compelling articles, blog posts, and website content to share our story and the impact of our work.",
      duration: "1-3 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
  ];
  return (
    <div
      id="programs"
      className="py-20 pb-24 pb-32 bg-neutral-950 border-t border-neutral-800 md:py-24"
    >
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-pink-500 text-center md:text-4xl">
          Internship Programs
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {opportunities.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-xl border-gray-200 transition-shadow duration-300 border hover:shadow-xl"
            >
              <div className="overflow-hidden relative h-56 w-full rounded-t-xl">
                <Image
                  src={convertJpgToWebp(item.img)}
                  alt={item.title}
                  fill
                  className="object-cover absolute inset-0 w-full h-full"
                  style={{ objectFit: "cover" }}
                  onError={handleImgError}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
                  quality={75}
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-3 text-xl font-bold text-black md:text-2xl">
                  {item.title}
                </h3>
                <p className="flex-grow mb-4 text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
                <p className="mb-6 text-sm text-gray-500 font-semibold">
                  Duration: <span className="text-black">{item.duration}</span>
                </p>
                <a
                  href={item.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto py-3 w-full text-white font-bold text-center bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
InternshipPrograms.displayName = "InternshipPrograms";

// --- Dynamic Imports of the new components ---
const DynamicInternshipTestimonials = dynamic(
  () => Promise.resolve(InternshipTestimonials),
  { ssr: false }
);
const DynamicInternshipWhyJoin = dynamic(
  () => Promise.resolve(InternshipWhyJoin),
  { ssr: false }
);
const DynamicInternshipPrograms = dynamic(
  () => Promise.resolve(InternshipPrograms),
  { ssr: false }
);

export default function Internship() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      {/* --- HERO SECTION (loads immediately for fast LCP) --- */}
      <section className="relative flex items-center justify-center p-4 pb-32 min-h-[90vh] text-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={convertJpgToWebp("/images/innternmain1.jpg")}
            alt="Interns collaborating"
            fill
            className="object-cover z-0 opacity-30"
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
            onError={handleImgError}
            priority
            sizes="100vw"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="z-20 relative"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
          >
            Launch Your <span className="text-pink-500">Career</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-3xl text-lg text-neutral-200 leading-relaxed md:text-xl"
          >
            Gain real-world experience, build your portfolio, and work on
            projects that make a genuine difference.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="py-3 px-8 px-10 text-white font-bold bg-pink-600 rounded-full shadow-lg shadow-pink-800/60 transition-all duration-300 hover:bg-pink-700 md:py-4"
              >
                Explore Programs
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- LAZY-LOADED SECTIONS --- */}
      <div className="z-20 relative flex flex-col flex-1">
        <DynamicInternshipTestimonials />
        <DynamicInternshipWhyJoin />
        <br />
        <DynamicInternshipPrograms />
      </div>
    </div>
  );
}
