"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    setIsVisible(true);
  }, []);

  return (
    <footer className="overflow-hidden relative px-6 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl sm:px-8 lg:px-8">
      <div className="z-10 relative flex flex-col gap-6 gap-8 mx-auto max-w-6xl lg:flex-row">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl lg:text-lg">
            🌟 Follow Us
          </h3>
          <div className="flex space-x-4 sm:space-x-6">
            {[
              {
                href: "https://instagram.com",
                src: "instagram",
                color: "#ec4899",
                emoji: "📸",
              },
              {
                href: "https://twitter.com",
                src: "twitter",
                color: "#1da1f2",
                emoji: "🐦",
              },
              {
                href: "https://youtube.com",
                src: "youtube",
                color: "#ff0000",
                emoji: "📺",
              },
              {
                href: "https://facebook.com",
                src: "facebook",
                color: "#1877f3",
                emoji: "👥",
              },
              {
                href: "https://linkedin.com",
                src: "linkedin",
                color: "#0a66c2",
                emoji: "💼",
              },
            ].map(({ href, src, color, emoji }) => (
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
                    className="w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow sm:w-8 lg:w-7"
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

        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl lg:mt-0">
            🚀 Quick Links
          </h3>
          <ul className="flex flex-wrap justify-center gap-3 text-sm font-medium text-left space-y-2 lg:flex-col">
            {[
              { name: "About Us", icon: "ℹ️", href: "/aboutus" },
              { name: "Our Work", icon: "🛠️", href: "/ourwork" },
              { name: "Join us", icon: "📞", href: "/joinus" },
              { name: "Contact Us", icon: "🔒", href: "/contactus" },
            ].map(({ name, icon, href }) => (
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

        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h3 className="mb-4 text-lg font-bold tracking-wide text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text drop-shadow sm:text-xl lg:mt-0">
            📞 Contact Us
          </h3>
          <div className="text-sm text-center lg:text-left">
            <p className="flex items-center gap-2 mb-2 text-white">
              <span>📧</span>
              Email:{" "}
              <span className="transition-colors underline">{`avasafoundation28@gmail.com`}</span>
            </p>
            <p className="flex items-start gap-2 mb-4 text-white">
              <span>📍</span>
              Address:{" "}
              <span className="block text-gray-300 text-xs sm:text-sm">
                Flat No.402, H No.3-98/Srr/402, Mayuri Nagar,
                <span className="hidden sm:inline"> Raghava Residency,</span>
                <br className="sm:hidden" />
                <span className="sm:hidden">Raghava Residency,</span>
                Miyapur, Serilingampally,
                <br className="sm:hidden" />
                Rangareddy, Telangana, India
              </span>
            </p>
          </div>
          <button className="relative px-6 py-2 w-40 text-white font-bold text-xs bg-gradient-to-r from-pink-500 to-pink-700 rounded-none border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-none before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-none after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-none [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]">
            <span className="z-10 relative">SUPPORT A CAUSE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </button>
        </div>
      </div>

      {/* Newsletter Subscription with enhanced styling
      <div className="z-10 relative mt-12 pt-8 border-t border-gray-700 lg:mt-16">
        <div className="mx-auto max-w-lg text-center">
          <h4 className="mb-4 text-lg font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text sm:text-xl">
            📬 Stay Updated
          </h4>
          <p className="mb-6 text-base text-gray-300 sm:text-lg">
            Subscribe to our newsletter for the latest updates and stories of
            hope.
          </p>
          <div className="flex flex-col items-center gap-3 gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 w-full text-gray-900 text-base bg-white border-pink-400 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent sm:px-6"
            />
            <button className="px-6 py-3 text-white font-semibold text-base bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 sm:px-8">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      {/* Copyright */}
      <div className="z-10 relative mt-12 pt-6 text-center text-sm text-gray-400 border-t border-gray-700">
        <span className="font-semibold text-pink-400">Avasa Foundation</span>{" "}
        &copy; {new Date().getFullYear()} &mdash; All rights reserved.
        <div className="flex flex-col items-center justify-center gap-1 mt-2 text-xs text-gray-500">
          <span>Registered NGO: AVASA FOUNDATION, Reg. No. 1108</span>
          <span>
            Flat No.402, H No.3-98/Srr/402, Mayuri Nagar, Raghava Residency,
            Miyapur, Serilingampally, Rangareddy, Telangana, India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
