"use client";
import React from "react";
import Link from "next/link";

// Use only correct, real social URLs to avoid hydration mismatch
const SOCIALS = [
  {
    href: "https://www.instagram.com/avasa.foundation/",
    src: "instagram",
    color: "#ec4899",
    emoji: "📸",
  },
  {
    href: "https://www.youtube.com/@avasafoundation",
    src: "youtube",
    color: "#ff0000",
    emoji: "📺",
  },
  {
    href: "https://www.facebook.com/avasafoundation",
    src: "facebook",
    color: "#1877f3",
    emoji: "👥",
  },
  {
    href: "https://www.linkedin.com/company/the-avasa-foundation/?originalSubdomain=in",
    src: "linkedin",
    color: "#0a66c2",
    emoji: "💼",
  },
];

const QUICK_LINKS = [
  { name: "About Us", icon: "ℹ️", href: "/aboutus" },
  { name: "Our Work", icon: "🛠️", href: "/ourwork" },
  { name: "Join us", icon: "📞", href: "/joinus" },
  { name: "Contact Us", icon: "🔒", href: "/contactus" },
];

const ADDRESS = (
  <>
    Flat No.402, H No.3-98/Srr/402, Mayuri Nagar,
    <span className="hidden sm:inline"> Raghava Residency,</span>
    <br className="sm:hidden" />
    <span className="sm:hidden">Raghava Residency,</span>
    Miyapur, Serilingampally,
    <br className="sm:hidden" />
    Rangareddy, Telangana, India
  </>
);

const Footer = () => {
  // Hardcode the year to 2025 to avoid hydration mismatch
  const copyrightYear = 2025;

  return (
    <footer
      className="overflow-hidden flex-none px-4 py-8 w-full text-white bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl sm:px-8 lg:px-12"
      style={{
        zIndex: 50,
      }}
    >
      <div className="z-10 relative flex flex-col gap-10 gap-6 mx-auto max-w-6xl md:flex-row">
        {/* Follow Us */}
        <div className="flex-1 flex flex-col items-center mb-8 mb-0 md:items-start">
          <h3 className="mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl">
            🌟 Follow Us
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {SOCIALS.map(({ href, src, emoji }) => (
              <a
                key={src}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <span className="sr-only">{src}</span>
                <div className="relative">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${src}.svg`}
                    alt={src}
                    className="w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow sm:w-8"
                    style={{
                      filter: "invert(1) brightness(2)",
                    }}
                  />
                  <span className="absolute text-xs opacity-0 transition-opacity duration-300 -top-2 -right-2 group-hover:opacity-100">
                    {emoji}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center mb-8 mb-0 md:items-start">
          <h3 className="mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl">
            🚀 Quick Links
          </h3>
          <ul className="flex flex-wrap justify-center items-start gap-x-4 gap-y-2 text-sm font-medium md:flex-col">
            {QUICK_LINKS.map(({ name, icon, href }) => (
              <li key={name} className="group">
                <Link
                  href={href}
                  className="flex items-center gap-2 text-white transition-all duration-300 hover:text-pink-400 group-hover:translate-x-1"
                >
                  <span className="text-xs">{icon}</span>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl">
            📞 Contact Us
          </h3>
          <div className="text-sm text-center md:text-left">
            <p className="flex items-center justify-center gap-2 mb-2 text-white md:justify-start">
              <span>📧</span>
              Email:{" "}
              <span className="break-all transition-colors underline">
                avasafoundation28@gmail.com
              </span>
            </p>
            <p className="flex items-start justify-center gap-2 mb-4 text-white md:justify-start">
              <span>📍</span>
              Address:{" "}
              <span className="block text-gray-300 text-xs sm:text-sm">
                {ADDRESS}
              </span>
            </p>
          </div>
          <button className="relative px-6 py-2 mt-4 w-40 text-white font-bold text-xs bg-gradient-to-r from-pink-500 to-pink-700 rounded-none border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-none before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-none after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-none [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms] md:mt-0">
            <span className="z-10 relative">SUPPORT A CAUSE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="z-10 relative mt-10 pt-6 text-center text-sm text-gray-400 border-t border-gray-700">
        <span className="font-semibold text-pink-400">Avasa Foundation</span>{" "}
        &copy; {copyrightYear} &mdash; All rights reserved.
        <div className="flex flex-col items-center justify-center gap-1 mt-2 text-xs text-gray-500">
          <span>Registered NGO: AVASA FOUNDATION, Reg. No. 1108</span>
          <span className="max-w-xs break-words sm:max-w-none">
            Flat No.402, H No.3-98/Srr/402, Mayuri Nagar, Raghava Residency,
            Miyapur, Serilingampally, Rangareddy, Telangana, India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
