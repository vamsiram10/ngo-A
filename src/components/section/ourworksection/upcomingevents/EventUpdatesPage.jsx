"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// mapQuery: replace spaces in the address with "+" to make it URL-friendly for Google Maps
const events = [
  {
    date: "2025-07-20",
    time: "5:00 PM",
    name: "AI & Innovation Summit",
    address: "madore jodhpur",
    details:
      "Explore the future of AI, networking with top researchers and startups.",
    // mapQuery is used to generate a Google Maps search link for the address below
    mapQuery: "mandore+jodhpur",
  },
  {
    date: "2025-08-01",
    time: "2:00 PM",
    name: "Open Source Hackathon",
    address: "NIT Trichy Lab Block",
    details:
      "48-hour coding sprint focused on building tools for the community.",
    // mapQuery is used to generate a Google Maps search link for the address below
    mapQuery: "NIT+Trichy+Lab+Block",
  },
  // {
  //   date: "2025-08-15",
  //   time: "9:00 AM",
  //   name: "Independence Day Celebration",
  //   address: "Central Grounds, Campus",
  //   details: "Flag hoisting, cultural activities, and refreshments.",
  //   mapQuery: "Central+Grounds+Campus",
  // },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

if (typeof window !== "undefined") {
  if (!document.getElementById("event-updates-gradient-style")) {
    const style = document.createElement("style");
    style.id = "event-updates-gradient-style";
    style.innerHTML = `
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradientMove 15s ease infinite;
      }
      @keyframes gradientMove {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      /* Make grid lines more visible */
      .event-grid-bg {
        --grid-color-light: #d946ef;
        --grid-color-dark: #a21caf;
        --grid-opacity: 0.35;
        --grid-size: 32px;
        background-size: var(--grid-size) var(--grid-size);
        background-image:
          linear-gradient(to right, rgba(217,70,239,var(--grid-opacity)) 1.5px, transparent 1.5px),
          linear-gradient(to bottom, rgba(217,70,239,var(--grid-opacity)) 1.5px, transparent 1.5px);
      }
      @media (prefers-color-scheme: dark) {
        .event-grid-bg {
          background-image:
            linear-gradient(to right, rgba(162,28,175,var(--grid-opacity)) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(162,28,175,var(--grid-opacity)) 1.5px, transparent 1.5px);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

export default function EventUpdatesPage() {
  return (
    <div className="overflow-x-hidden relative flex items-center justify-center min-h-screen w-full font-sans text-white bg-black">
      {/* Grid background */}
      <div className={cn("absolute inset-0 z-0 event-grid-bg")} />
      {/* Radial gradient for faded look */}
      <div className="z-10 absolute inset-0 flex items-center justify-center bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* Extra gradient overlay for color pop */}
      <div className="z-20 absolute inset-0 bg-gradient-to-tr from-pink-500 via-black to-white opacity-10 blur-2xl pointer-events-none animate-gradient"></div>
      {/* Main content */}
      <div className="z-30 relative px-4 py-16 mx-auto max-w-4xl w-full sm:px-6">
        <h1
          className="mt-16 mb-8 text-center text-pink-400 font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          style={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          📢 Announcements
        </h1>
        <div className="space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="p-4 bg-black/70 border-pink-500/40 rounded-3xl shadow-lg transition-all duration-300 backdrop-blur-md border hover:shadow-pink-400/30 sm:p-6"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-2 text-xs text-pink-300 sm:text-sm">
                📅 {event.date} | ⏰ {event.time}
              </p>
              <h2 className="mb-2 text-lg font-bold text-pink-400 sm:text-2xl">
                {event.name}
              </h2>
              <p className="flex items-center gap-1 mb-1 text-xs text-pink-200 sm:text-sm">
                <span className="inline-flex items-center">
                  <Image
                    src="/avasa.svg"
                    alt="Avasa Location"
                    width={18}
                    height={18}
                    className="inline-block mr-1"
                    style={{ minWidth: 18, minHeight: 18 }}
                  />
                </span>
                <Link
                  href={`/contactus/map`}
                  className="text-pink-200 transition-colors underline hover:text-pink-400"
                >
                  {event.address}
                </Link>
              </p>
              <p className="text-xs text-white/90 leading-relaxed sm:text-sm">
                📝 {event.details}
              </p>
              <div className="overflow-hidden relative mt-4 rounded-xl border-pink-500/20 shadow-inner border">
                <iframe
                  title={`Map of ${event.address}`}
                  src={`https://www.google.com/maps?q=${event.mapQuery}&output=embed`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div
                  className="z-20 absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -100%)",
                    pointerEvents: "none",
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="z-10 absolute w-16 h-16 rounded-full border-2 border-pink-700/70 animate-ping-signal"></span>
                    <span className="z-0 absolute w-24 h-24 rounded-full border-2 border-pink-900/60 animate-ping-signal2"></span>
                    <span className="z-20 absolute w-12 h-12 bg-black/80 rounded-full shadow-lg"></span>
                    <Image
                      src="/svg/AVASA.svg"
                      alt="Avasa Map Marker"
                      width={36}
                      height={36}
                      className="z-30 rounded-full drop-shadow-lg"
                    />
                    <style jsx>{`
                      .animate-ping-signal {
                        animation: ping-signal 1.5s cubic-bezier(0, 0, 0.2, 1)
                          infinite;
                      }
                      .animate-ping-signal2 {
                        animation: ping-signal2 2.2s cubic-bezier(0, 0, 0.2, 1)
                          infinite;
                      }
                      @keyframes ping-signal {
                        0% {
                          opacity: 0.7;
                          transform: scale(0.7);
                        }
                        70% {
                          opacity: 0.18;
                          transform: scale(1.3);
                        }
                        100% {
                          opacity: 0;
                          transform: scale(1.5);
                        }
                      }
                      @keyframes ping-signal2 {
                        0% {
                          opacity: 0.4;
                          transform: scale(0.8);
                        }
                        70% {
                          opacity: 0.06;
                          transform: scale(1.7);
                        }
                        100% {
                          opacity: 0;
                          transform: scale(2);
                        }
                      }
                    `}</style>
                  </div>
                </div>
                <div className="mt-2 text-xs text-pink-300 text-center">
                  For better and exact location, refer to{" "}
                  <Link
                    href="/contactus/map"
                    className="text-pink-200 underline hover:text-pink-400"
                  >
                    map location in Contact Us page
                  </Link>
                  .
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
