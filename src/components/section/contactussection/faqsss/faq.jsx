"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How can I contact your support team?",
    answer:
      "You can reach our support team by filling out the contact form on this page or by emailing us directly at support@example.com.",
  },
  {
    question: "What is your response time?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business days.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our main office is located in New York City, but we serve clients worldwide.",
  },
  {
    question: "Can I schedule a meeting?",
    answer:
      "Absolutely! Please use the contact form to request a meeting, and our team will get back to you to arrange a suitable time.",
  },
  {
    question: "Is my information safe with you?",
    answer:
      "Yes, we take your privacy seriously and use industry-standard security measures to protect your data.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative top-40 mx-auto py-10 px-4 max-w-2xl">
      <h2 className="mb-8 text-3xl font-bold text-center text-pink-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white border-pink-200 rounded-lg shadow-sm border"
          >
            <button
              className="flex justify-between items-center px-5 py-4 w-full text-left font-semibold text-neutral-800 focus:outline-none"
              onClick={() => toggleFaq(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-pink-500">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="px-5 pb-4 text-neutral-700 animate-fadeIn"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
