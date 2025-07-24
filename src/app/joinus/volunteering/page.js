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
      <p className="font-serif text-xs text-neutral-400 tracking-widest mt-2 uppercase">
        {label}
      </p>
    </div>
  );
}

function FeaturePoint({ number, title, children }) {
  return (
    <motion.div variants={itemVariants} className="relative pl-14">
      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-pink-900/50 border border-pink-700/60 text-pink-400 font-semibold">
        {number}
      </div>
      <h3 className="font-semibold text-lg text-white mb-2 pt-1">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{children}</p>
    </motion.div>
  );
}

const fallbackImg =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80";

function OptimizedImage({
  src,
  alt,
  fill = false,
  className = "",
  style = {},
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);

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

export default function VolunteeringPage() {
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
      img: "/images/hydc.jpg",
      title: "Hyderabad",
      desc: "Craft compelling visuals and social content.",
      time: "5-10 hrs/week",
      formLink: "https://forms.gle/gcmvF29bSx6FkxnG7",
    },
    {
      id: 2,
      img: "/images/cjaipur.jpeg",
      title: "Jaipur",
      desc: "Be the face of our mission. Plan and lead campaigns.",
      time: "Flexible",
      formLink: "https://forms.gle/gcmvF29bSx6FkxnG7",
    },
    {
      id: 3,
      img: "/images/remote3.jpg",
      title: "Remote",
      desc: "Help us measure what matters. Analyze our social impact.",
      time: "8-12 hrs/week",
      formLink: "https://forms.gle/gcmvF29bSx6FkxnG7",
    },
  ];

  const heroImg = "/images/vm.jpeg";
  const whyImg = "/images/Why Your Help Matters.jpeg";

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
    <main className="bg-black text-white">
      {/* Inject responsive style for hero image */}
      <style>{heroImgResponsiveStyle}</style>
      <section className="relative min-h-[90vh] flex items-center justify-center text-center p-4 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full absolute inset-0">
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
          className="relative z-20 w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Become a <span className="text-pink-500">Changemaker</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-200 mx-auto max-w-3xl mb-10 leading-relaxed"
          >
            Join a passionate community dedicated to creating tangible, lasting
            impact.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="#opportunities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-800/60"
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

      <div className="relative z-20" style={{ transform: "translateY(-96px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl py-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-4">
              <Stat to={90} suffix="+" label="Volunteers Engaged" />
              <Stat to={8} label="Active Projects" />
              <Stat to={2000} suffix="+" label="Smiles Ignited" />
            </div>
          </div>
        </div>

        <div className="bg-black pt-20 md:pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-16 text-center">
                Why Your Help Matters
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-pink-900/30"
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
          className="bg-neutral-950 pt-20 pb-24 md:pt-24 md:pb-32 border-t border-neutral-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-12 text-center">
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
                  className="bg-white rounded-xl flex flex-col border border-gray-200 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full rounded-t-xl overflow-hidden">
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
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 flex-grow leading-relaxed">
                      {item.desc}
                    </p>
                    {/* The commitment line below has been removed */}
                    <a
                      href={item.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-auto"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-all duration-300"
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
