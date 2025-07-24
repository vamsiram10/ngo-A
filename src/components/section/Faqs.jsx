"use client";
import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is AVASA Foundation?",
    answer:
      "AVASA is a youth-led NGO creating impact through education, gender awareness, sustainability through tech initiatives focusing on the SDGs.",
  },
  {
    question: "Who runs AVASA?",
    answer:
      "AVASA is completely youth-driven and run by volunteers passionate about change. You can find out about board members though about us section",
  },
  {
    question: "What are your key initiatives?",
    answer:
      "We run projects in school transformations, child shelters, old-age homes, digital literacy, medical support, and environmental care.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Visit our Volunteering page or you can also contact on our social media: Instagram @avasa.foundation or  use LinkedIn to apply. We welcome passionate individuals from all backgrounds.",
  },
  {
    question: "Do you work only in Hyderabad?",
    answer:
      "We are based in Hyderabad and Jaipur but aim to scale and replicate our model across other cities. Contact us if you can help us out",
  },
  {
    question: "What are some successful past projects?",
    answer:
      "We've revamped government schools, distributed over 1,500 relief packets during summer and several sweaters and winter-wears during extreme cold weather in Rajasthan, funded the education of underpriviliged kids.",
  },
  {
    question: "Can I donate to support AVASA?",
    answer:
      "As we completely depend on donations as a Non-profit organization you can click on donate now button on homepage or contact us directly.",
  },
  {
    question: "Are you a registered NGO?",
    answer: "Yes, AVASA Foundation is a registered non-profit organization. ",
  },
  {
    question: "How do you ensure transparency?",
    answer:
      "We maintain transparency via regular updates on our social platforms and public reporting of project impacts, as well as having a channel for donors so we can regularly update them on our initiatives.",
  },
  {
    question: "What does 'AVASA' mean?",
    answer:
      "AVASA means 'shelter' or 'space' — symbolizing our commitment to creating safe, inclusive spaces for development.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Scroll to the opened FAQ if it is opened
  useEffect(() => {
    if (
      activeIndex !== null &&
      faqRefs.current[activeIndex] &&
      typeof window !== "undefined"
    ) {
      // Only scroll if the opened FAQ is not fully visible
      const rect = faqRefs.current[activeIndex].getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      if (!isVisible) {
        faqRefs.current[activeIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [activeIndex]);

  return (
    <section className="py-16 min-h-[200vh] text-white font-sans bg-black sm:min-h-[120vh] md:min-h-[180vh] lg:min-h-[100vh]">
      <div className="container relative top-18 mx-auto px-6 lg:px-20">
        <h2 className="mb-12 text-4xl font-bold text-center text-pink-500 tracking-wide uppercase">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
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
