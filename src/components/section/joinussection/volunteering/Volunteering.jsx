"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { useEffect, useState } from "react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Stat({ to, suffix, label }) {
  return (
    <div className="text-center">
      <Counter to={to} suffix={suffix} />
      <p className="mt-2 font-serif text-xs text-neutral-400 tracking-widest uppercase">
        {label}
      </p>
    </div>
  );
}

function FeaturePoint({ number, title, children }) {
  return (
    <motion.div variants={itemVariants} className="relative pl-14">
      <div className="absolute left-0 top-1 flex items-center justify-center h-10 w-10 text-pink-400 font-semibold bg-pink-900/50 rounded-full border-pink-700/60 border">
        {number}
      </div>
      <h3 className="mb-2 pt-1 font-semibold text-lg text-white">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{children}</p>
    </motion.div>
  );
}

const fallbackImg =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80";

// Helper function to convert .jpg to .webp, but leave .jpeg and .png unchanged
function convertJpgToWebp(src) {
  if (typeof src === "string" && src.endsWith(".jpg")) {
    return src.replace(/\.jpg$/, ".webp");
  }
  return src;
}

function OptimizedImage({
  src,
  alt,
  fill = false,
  className = "",
  style = {},
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(convertJpgToWebp(src));

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      style={style}
      onError={() => {
        if (imgSrc !== fallbackImg) setImgSrc(fallbackImg);
      }}
      sizes={fill ? "100vw" : undefined}
      {...props}
    />
  );
}

export default function Volunteering() {
  useEffect(() => {
    const html = document.documentElement;
    const prevScroll = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prevScroll;
    };
  }, []);

  const opportunities = [
    {
      id: 1,
      img: "/images/hydc.webp", // changed from .jpg to .webp
      title: "Hyderabad",
      desc: "Join our dedicated team in Hyderabad to drive local initiatives and make a tangible impact in the community.",
      longDesc:
        "As a volunteer with our Hyderabad chapter, you'll have the opportunity to participate in a wide range of activities based on current needs. This could include organizing community events, assisting with local awareness campaigns, or supporting our ongoing projects on the ground. It's a chance to build connections and see the direct results of your efforts in your city.",
      formLink: "https://forms.gle/gcmvF29bSx6FkxnG7",
    },
    {
      id: 2,
      img: "/images/cjaipur.jpeg", // unchanged, .jpeg remains
      title: "Jaipur",
      desc: "Become a key part of our Jaipur chapter, helping to organize events and support campaigns that strengthen the community.",
      longDesc:
        "Volunteering with the Jaipur chapter places you at the heart of our community efforts in the city. You'll work alongside other passionate individuals on diverse tasks, from on-ground event support to helping with the logistics of our local drives. This is a perfect opportunity for anyone looking to contribute their skills to a meaningful cause in Jaipur.",
      formLink: "https://forms.gle/gcmvF29bSx6FkxnG7",
    },
    {
      id: 3,
      img: "/images/remote3.webp", // changed from .jpg to .webp
      title: "Remote",
      desc: "Contribute your skills from anywhere. Support our core digital operations, from social media to research.",
      longDesc:
        "Our remote volunteers are crucial to our national success. You'll collaborate with our central team to support all our chapters and help us grow our digital footprint.",
      formLink: "https://forms.gle/gcmvF29bSx6FkxnG7",
    },
  ];

  const heroImg = "/images/volunteer5.jpeg"; // unchanged, .jpeg remains
  const whyImg = "/images/Why Your Help Matters.jpeg"; // unchanged, .jpeg remains

  const whyJoinFeatures = [
    {
      number: "01",
      title: "Make a Real Impact",
      description:
        "Your work directly contributes to improving lives and strengthening communities.",
    },
    {
      number: "02",
      title: "Develop New Skills",
      description:
        "Gain valuable experience in leadership, communication, and project management.",
    },
    {
      number: "03",
      title: "Join a Community",
      description:
        "Connect with like-minded individuals who share your passion for social good.",
    },
  ];

  const heroImgStyle = {
    objectFit: "cover",
    opacity: 0.4,
    zIndex: 0,
    objectPosition: "center 30%", // Moves image down, showing more of the top
  };

  const heroImgResponsiveStyle = `
    @media (min-width: 768px) {
      .custom-hero-img {
        object-position: center 10% !important;
      }
    }
  `;

  return (
    <main className="text-white bg-black">
      {/* Inject responsive style for hero image */}
      <style>{heroImgResponsiveStyle}</style>
      <section className="relative flex items-center justify-center p-4 pb-32 min-h-[90vh] text-center">
        <div className="z-0 absolute inset-0">
          <div className="absolute inset-0 w-full h-full">
            <OptimizedImage
              src={heroImg}
              alt="A group of smiling volunteers"
              fill
              className="custom-hero-img"
              style={heroImgStyle}
              priority
            />
          </div>
          {/* Removed black fade overlay */}
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="z-20 relative w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-white md:text-6xl"
          >
            Become a <span className="text-pink-500">Changemaker</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-3xl text-lg text-neutral-200 leading-relaxed md:text-xl"
          >
            Join a passionate community dedicated to creating tangible, lasting
            impact.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#opportunities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="py-3 px-8 px-10 text-white font-bold bg-pink-600 rounded-full shadow-lg shadow-pink-800/60 transition-all duration-300 hover:bg-pink-700 md:py-4"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("opportunities");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Opportunities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="z-20 relative" style={{ transform: "translateY(-96px)" }}>
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="py-12 bg-white/5 border-white/10 rounded-2xl border backdrop-blur-lg">
            <div className="grid grid-cols-1 gap-y-10 gap-y-0 gap-x-4 mx-auto max-w-5xl md:grid-cols-3">
              <Stat to={90} suffix="+" label="Volunteers Engaged" />
              <Stat to={8} label="Active Projects" />
              <Stat to={2000} suffix="+" label="Smiles Ignited" />
            </div>
          </div>
        </div>

        <div className="pt-20 bg-black md:pt-28">
          <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
            <div className="p-8 bg-neutral-900 rounded-3xl border-neutral-800 border md:p-16">
              <h2 className="mb-16 text-3xl font-bold text-pink-500 text-center md:text-4xl">
                Why Your Help Matters
              </h2>
              <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="overflow-hidden relative mx-auto w-full max-w-lg rounded-2xl shadow-2xl shadow-pink-900/30 aspect-[4/3] lg:mx-0"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <OptimizedImage
                      src={whyImg}
                      alt="A volunteer helping the community"
                      fill
                      style={{
                        objectFit: "cover",
                        zIndex: 0,
                      }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={containerVariants}
                  viewport={{ once: true, amount: 0.3 }}
                  className="space-y-10"
                >
                  {whyJoinFeatures.map((feature) => (
                    <FeaturePoint
                      key={feature.number}
                      number={feature.number}
                      title={feature.title}
                    >
                      {feature.description}
                    </FeaturePoint>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div
          id="opportunities"
          className="pt-20 pb-24 pb-32 bg-neutral-950 border-t border-neutral-800 md:pt-24"
        >
          <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold text-pink-500 text-center md:text-4xl">
              Current Opportunities
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              {opportunities.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex flex-col bg-white rounded-xl border-gray-200 transition-all duration-300 border hover:shadow-xl"
                >
                  <div className="overflow-hidden relative h-48 w-full rounded-t-xl">
                    <div className="absolute inset-0 w-full h-full">
                      <OptimizedImage
                        src={item.img}
                        alt={item.title}
                        fill
                        style={{
                          objectFit: "cover",
                          zIndex: 0,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="mb-3 text-xl font-bold text-black md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="flex-grow mb-4 text-gray-600 text-base leading-relaxed">
                      {item.desc}
                    </p>
                    {/* The commitment line below has been removed */}
                    <a
                      href={item.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-auto w-full"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="py-3 w-full text-white font-bold bg-black rounded-lg transition-all duration-300 hover:bg-gray-800"
                      >
                        Register Now
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
