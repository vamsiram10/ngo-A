"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is AVASA Foundation?",
    answer:
      "AVASA is a youth-led NGO creating impact through education, healthcare, gender awareness, sustainability and tech initiatives.",
  },
  {
    question: "Who runs AVASA?",
    answer:
      "AVASA is completely youth-driven and run by volunteers passionate about change.",
  },
  {
    question: "What are your key initiatives?",
    answer:
      "We run projects in menstrual hygiene, school transformations, digital literacy, medical support, and environmental care.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Visit our Instagram @avasa.foundation or LinkedIn to apply. We welcome passionate individuals from all backgrounds.",
  },
  {
    question: "Do you work only in Hyderabad?",
    answer:
      "We are based in Hyderabad but aim to scale and replicate our model across other cities.",
  },
  {
    question: "What are some successful past projects?",
    answer:
      "We've revamped government schools, distributed over 1,500 menstrual kits, and planted 3,000+ trees.",
  },
  {
    question: "Can I donate to support AVASA?",
    answer:
      "Yes! We accept donations to fund our initiatives. Contact us via email or social media.",
  },
  {
    question: "Are you a registered NGO?",
    answer: "Yes, AVASA Foundation is a registered non-profit organization.",
  },
  {
    question: "How do you ensure transparency?",
    answer:
      "We maintain transparency via regular updates on our social platforms and public reporting of project impacts.",
  },
  {
    question: "What does 'AVASA' mean?",
    answer:
      "AVASA means 'shelter' or 'space' — symbolizing our commitment to creating safe, inclusive spaces for growth.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 min-h-[160vh] text-white font-sans bg-black sm:min-h-[120vh] md:min-h-[130vh] lg:min-h-[100vh]">
      <div className="container relative top-18 mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-4xl font-bold text-center text-pink-500 tracking-wide uppercase">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-[#2b2b2b] rounded-lg border-[#333] shadow-lg transition-all duration-300 border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-pink-400 focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
