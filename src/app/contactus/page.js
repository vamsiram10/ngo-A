"use client";
import React from "react";
import ContactUsSection from "@/components/section/contactussection/ContactUsSection";

const ContactUsPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <h1 className="text-white text-6xl font-bold text-center mt-[5.5rem]">
        Contact Us
      </h1>
      <ContactUsSection />
    </main>
  );
};

export default ContactUsPage;
