"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Fallback image URL
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

function handleImgError(e) {
  if (e.target.src !== fallbackImg) {
    e.target.src = fallbackImg;
  }
}

export default function InternshipPage() {
  const opportunities = [
    {
      id: 1,
      img: "/images/intern1.jpg",
      title: "Technical Intern",
      desc: "Help with website maintenance, data management, and IT support to keep our digital infrastructure strong and efficient.",
      duration: "3-6 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
    {
      id: 2,
      img: "/images/intern2.jpg",
      title: "Social Media Intern",
      desc: "Create engaging content, manage our online presence, and connect with our community across various social platforms.",
      duration: "3-4 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
    {
      id: 3,
      img: "/images/intern1.jpg",
      title: "Fundraising Intern",
      desc: "Support our fundraising efforts through research, outreach, and campaign assistance to help us reach our financial goals.",
      duration: "4-6 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
    {
      id: 4,
      img: "/images/intern2.jpg",
      title: "Content Writing Intern",
      desc: "Craft compelling articles, blog posts, and website content to share our story and the impact of our work.",
      duration: "3-5 months",
      formLink: "https://forms.gle/eM8hh64etLhw2fAy5",
    },
  ];

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
      description: "Directly contribute to the betterment of underprivileged communities.",
    },
    {
      number: "04",
      title: "Professional Development",
      description: "Enhance your teamwork, communication, and organizational skills.",
    },
    {
      number: "05",
      title: "Certificate of Completion",
      description: "Receive recognition for your dedication after successfully completing the 1-month internship.",
    },
    {
      number: "06",
      title: "Personal Satisfaction",
      description: "Experience the joy of giving back and being part of a positive change.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "This internship was a game-changer! I gained so much hands-on experience and contributed to projects that made a real difference.",
      name: "Mahalakshmi L",
      role: "Former Technical Intern",
      avatar: "/images/avatar1.jpg",
    },
    {
      id: 2,
      quote: "The mentorship I received was incredible. I felt supported and empowered to take on new challenges and grow as a professional.",
      name: "Ch.Nikhil",
      role: "Former Social Media Intern",
      avatar: "/images/avatar2.jpg",
    },
    {
      id: 3,
      quote: "A truly rewarding experience. I connected with amazing people and developed skills that are directly applicable to my career goals.",
      name: "Krishna",
      role: "Former Fundraising Intern",
      avatar: "/images/avatar3.jpg",
    },
    {
        id: 4,
        quote: "An incredible journey of learning and growth. The team was fantastic, and I'm proud of the work we accomplished together.",
        name: "Manthan jain",
        role: "Former Content Writing Intern",
        avatar: "/images/avatar4.jpg",
    },
    {
        id: 5,
        quote: "I highly recommend this internship to anyone looking to make a difference. It's a fantastic opportunity to apply your skills in a meaningful way.",
        name: "K Gayathri Devi",
        role: "Former Social Media Intern",
        avatar: "/images/avatar5.jpg",
    },
    {
        id: 6,
        quote: "I highly recommend this internship to anyone looking to make a difference. It's a fantastic opportunity to apply your skills in a meaningful way.",
        name: "B.Chandrashekar Reddy",
        role: "Former Social Media Intern",
        avatar: "/images/avatar6.jpg",
    },
    {
        id: 7,
        quote: "I highly recommend this internship to anyone looking to make a difference. It's a fantastic opportunity to apply your skills in a meaningful way.",
        name: "Noman ahmad",
        role: "Former Social Media Intern",
        avatar: "/images/avatar7.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
        nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);


  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };


  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center p-4 pb-32">
        <img
          src="/images/intern1.jpg"
          alt="Interns collaborating"
          onError={handleImgError}
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
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
            className="text-4xl md:text-6xl font-bold text-white mb-6"
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
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-800/60"
              >
                Explore Programs
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Main content wrapper */}
      <div className="relative z-20 -mt-24">

        {/* Testimonials Carousel Section */}
        <div className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-12">
                    What Our Interns Say
                </h2>

                <div className="relative h-80 md:h-64">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-2xl w-full mx-auto flex flex-col items-center">
                                <p className="text-neutral-300 text-lg italic mb-6">
                                    “{testimonials[currentTestimonial].quote}”
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonials[currentTestimonial].avatar}
                                        alt={testimonials[currentTestimonial].name}
                                        onError={handleImgError}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="ml-4 text-left">
                                        <p className="font-semibold text-white">{testimonials[currentTestimonial].name}</p>
                                        <p className="text-pink-400 text-sm">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

                {/* Indicator Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentTestimonial === index ? 'bg-pink-500' : 'bg-neutral-600'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-black pt-20 md:pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-12 text-center">
                What You'll Gain
              </h2>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-pink-900/30 mb-16"
              >
                <img
                  src="/images/intern2.jpg"
                  alt="A group of interns working together"
                  onError={handleImgError}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
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

        <br></br>

        {/* Programs Section */}
        <div
          id="programs"
          className="bg-neutral-950 py-20 md:py-24 pb-24 md:pb-32 border-t border-neutral-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-12 text-center">
              Internship Programs
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-10"
            >
              {opportunities.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl flex flex-col border border-gray-200 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      onError={handleImgError}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 flex-grow leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold mb-6">
                      Duration: <span className="text-black">{item.duration}</span>
                    </p>
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
                        Apply Now
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