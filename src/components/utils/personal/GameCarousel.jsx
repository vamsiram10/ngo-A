"use client";

import React, { useEffect, useRef } from "react";
import "@/app/globals.css";

// SwiperJS for carousel (no CSS parsing issues)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
// Removed: import "swiper/css/pagination";

// Fix: Import modules from 'swiper/modules' instead of 'swiper'
import { EffectCoverflow } from "swiper/modules"; // Removed Pagination

const games = [
  {
    title: "Dota 2",
    image: "/gallery/2.jpg",
    description:
      "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    title: "Elden Ring",
    image: "/gallery/3.jpg",
    description:
      "Elden Ring is an action RPG developed by FromSoftware, featuring a vast open world and challenging combat.",
  },
  {
    title: "Hollow Knight",
    image: "/gallery/4.jpg",
    description:
      "Hollow Knight is a critically acclaimed metroidvania game with hand-drawn art and deep exploration.",
  },
  {
    title: "Cyberpunk 2077",
    image: "/gallery/5.jpg",
    description:
      "Cyberpunk 2077 is an open-world RPG set in Night City, offering immersive storytelling and futuristic action.",
  },
  {
    title: "Celeste",
    image: "/gallery/1.jpg",
    description:
      "Celeste is a platformer about climbing a mountain, featuring tight controls and a heartfelt story.",
  },
  {
    title: "The Witcher 3",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    description:
      "The Witcher 3 is a story-driven RPG where you explore a rich open world as Geralt of Rivia.",
  },
  {
    title: "RDR 2",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    description:
      "RDR 2 is an action-adventure game developed and published by Rockstar Games, set in a fictionalized Western US.",
  },
  {
    title: "PUBG Mobile",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
    description:
      "PUBG Mobile is a battle royale shooter that pits 100 players against each other in a struggle for survival.",
  },
  {
    title: "Fortnite",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
    description:
      "Battle royale where 100 players fight to be the last person standing. Fast building mechanics & colorful design.",
  },
  {
    title: "Far Cry 5",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
    description:
      "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft, set in an open world environment.",
  },
];

export default function GameCarousel() {
  const swiperRef = useRef(null);

  // For "active" effect on click, allow toggling active state
  useEffect(() => {
    const handleClick = (e) => {
      const items = document.querySelectorAll(".custom-carousel .item");
      // If the clicked item is already active, remove active from all
      if (e.currentTarget.classList.contains("active")) {
        items.forEach((el) => el.classList.remove("active"));
      } else {
        items.forEach((el) => el.classList.remove("active"));
        e.currentTarget.classList.add("active");
      }
    };
    const items = document.querySelectorAll(".custom-carousel .item");
    items.forEach((el, idx) => {
      el.addEventListener("click", handleClick);
      // Set first as active by default
      if (idx === 0) el.classList.add("active");
    });
    return () => {
      items.forEach((el) => el.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <section className="game-section centered-section">
      <h2
        className="line-title animated-title pink-text"
        style={{
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
          top: 0,
          transform: "none",
          fontSize: "2rem",
          zIndex: 20,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(2px)",
          textAlign: "center",
          transition:
            "transform 0.3s cubic-bezier(.4,2,.6,1), left 0.3s cubic-bezier(.4,2,.6,1)",
          display: "block",
          width: "fit-content",
        }}
      >
        GALLERY
      </h2>
      <div className="custom-carousel">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          // Make left and right side animation symmetric by using rotate: 0 and stretch: 0
          coverflowEffect={{
            rotate: 0, // No rotation, so both sides animate the same
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false, // Remove slide shadows for symmetry
            scale: 0.85, // Ensures both sides scale equally
          }}
          spaceBetween={30} // Ensures equal gap between all cards (left and right)
          // Removed: pagination={{ clickable: true }}
          modules={[EffectCoverflow]} // Removed Pagination
          className="game-swiper"
        >
          {games.map((game, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "320px", height: "400px" }}
            >
              <div
                className={`item${index === 0 ? " active" : ""}`}
                style={{
                  backgroundImage: `url(${game.image})`,
                }}
              >
                {/* Add a subtle floating animation to the image background */}
                <div className="item-float-bg" />
                <div className="item-desc pink-text">
                  <h3 className="item-title-animated pink-text">
                    {game.title}
                  </h3>
                  {/* Description is now white, not pink */}
                  <p className="game-desc-white">{game.description}</p>
                </div>
                {/* Add a subtle glowing border animation when active */}
                <div className="item-glow" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Swiper and custom styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Roboto", sans-serif;
        }
        .centered-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          position: relative;
          top: -15px;
        }
        .game-section {
          /* Remove original padding to avoid double spacing */
          padding: 0;
        }
        .line-title {
          width: 400px;
          position: relative;
          margin-bottom: 48px;
          padding-bottom: 16px;
          font-size: 20px;
          font-weight: 700;
          text-transform: capitalize;
        }
        .animated-title {
          animation: fadeInDown 1s cubic-bezier(0.4, 2, 0.6, 1);
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        // .line-title::before,
        // .line-title::after {
        //   content: "";
        //   position: absolute;
        //   bottom: 0;
        //   left: 0;
        //   height: 4px;
        //   border-radius: 2px;
        // }
        // .line-title::before {
        //   width: 100%;
        //   background: #f2f2f2;
        // }
        // .line-title::after {
        //   width: 32px;
        //   background: #e73700;
        // }
        .custom-carousel {
          width: 100%;
        }
        .game-swiper {
          /* Add more gap below images for dots on desktop */
        }
        .item {
          margin: 0 0px 60px; /* Remove horizontal margin, Swiper's spaceBetween will handle it */
          width: 320px;
          height: 400px;
          display: flex;
          align-items: flex-end;
          background: #343434 no-repeat center center / cover;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 2, 0.6, 1);
          cursor: pointer;
        }
        /* 
          To expand the card both left and right, 
          use left: 50%; transform: translateX(-50%);
          and set width for .item and .item.active.
        */
        .custom-carousel .swiper-slide {
          display: flex;
          justify-content: center;
          /* This ensures the .item is centered in the slide */
        }
        .item {
          left: 50%;
          transform: translateX(-50%);
          position: relative;
        }
        .item.active {
          width: 500px !important;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
        }
        .item:after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          /* Make the gradient symmetric on both left and right sides */
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.7) 100%
            ),
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.18) 0%,
              rgba(0, 0, 0, 0) 20%,
              rgba(0, 0, 0, 0) 80%,
              rgba(0, 0, 0, 0.18) 100%
            );
        }
        /* Floating background animation for each card */
        .item-float-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          pointer-events: none;
          background: inherit;
          border-radius: 16px;
          animation: floatBg 4s ease-in-out infinite alternate;
          opacity: 0.15;
          filter: blur(8px) brightness(1.2);
        }
        @keyframes floatBg {
          0% {
            transform: scale(1) translateY(0px);
          }
          100% {
            transform: scale(1.04) translateY(-10px);
          }
        }
        /* Glowing border animation for active card */
        .item-glow {
          display: none;
        }
        .item.active .item-glow {
          display: block;
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 20px;
          pointer-events: none;
          z-index: 2;
          box-shadow: 0 0 32px 8px #e73700, 0 0 0 0 #fff;
          animation: glowPulse 1.2s infinite alternate;
        }
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 32px 8px #e73700, 0 0 0 0 #fff;
            opacity: 0.7;
          }
          100% {
            box-shadow: 0 0 48px 16px #e73700, 0 0 8px 2px #fff;
            opacity: 1;
          }
        }
        /* Animated title for each card */
        .item-title-animated {
          animation: fadeInUp 0.7s cubic-bezier(0.4, 2, 0.6, 1);
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .item-desc {
          padding: 0 24px 12px;
          color: #fff;
          position: relative;
          z-index: 1;
          transform: translateY(calc(100% - 54px));
          transition: all 0.4s cubic-bezier(0.4, 2, 0.6, 1);
        }
        .item.active .item-desc {
          transform: none;
        }
        .item-desc p {
          opacity: 0;
          transform: translateY(32px);
          transition: all 0.4s cubic-bezier(0.4, 2, 0.6, 1) 0.2s;
        }
        .item.active .item-desc p {
          opacity: 1;
          transform: translateY(0);
        }
        /* Animate the description text with a fade-in when active */
        .item.active .item-desc p {
          animation: fadeInText 0.6s 0.2s both;
        }
        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: translateY(32px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Make description color white, not pink */
        .game-desc-white {
          color: #fff !important;
        }

        /* Make sure left and right cards look and animate identically */
        .swiper-coverflow .swiper-slide {
          /* Remove any default rotation or skew for symmetry */
          transform-origin: 50% 50% !important;
        }
        /* --- Symmetry fix: force all coverflow slides to have no rotation, skew, or translation except scale --- */
        .swiper-coverflow .swiper-slide {
          /* Remove any transform set by Swiper except scale for both sides */
          /* This will override Swiper's default coverflow transforms */
          /* The !important is needed to override inline styles from Swiper */
          transform: scale(0.85) !important;
          /* The active slide will be handled by Swiper as scale(1) */
        }
        .swiper-coverflow .swiper-slide-active {
          transform: scale(1) !important;
        }

        @media (max-width: 767px) {
          .centered-section {
            padding: 0 2vw;
            min-height: 100vh; /* Make section a bit bigger on mobile */
          }
          .line-title {
            width: 290px;
            margin-bottom: 28px;
            font-size: 22px;
          }
          .custom-carousel .swiper-slide {
            justify-content: center;
          }
          .item,
          .game-swiper .swiper-slide {
            width: 240px !important;
            height: 340px;
            margin: 0 0px 48px; /* Remove horizontal margin, Swiper's spaceBetween will handle it */
          }
          .item {
            left: 50%;
            transform: translateX(-50%);
            position: relative;
          }
          .item.active {
            width: 320px !important;
            left: 50%;
            transform: translateX(-50%);
          }
          .item-desc {
            padding: 0 18px 10px;
            transform: translateY(calc(100% - 54px));
          }
          /* Remove extra space for pagination dots on mobile */
          .game-swiper {
            padding-bottom: 10px !important;
          }
          /* Remove pagination dots on mobile */
          .swiper-pagination {
            display: none !important;
          }
          /* Symmetry fix for mobile */
          .swiper-coverflow .swiper-slide {
            transform: scale(0.85) !important;
          }
          .swiper-coverflow .swiper-slide-active {
            transform: scale(1) !important;
          }
          /* Floating background animation for mobile */
          .item-float-bg {
            filter: blur(6px) brightness(1.1);
          }
        }
        /* Add gap between images and dots on desktop only */
        @media (min-width: 768px) {
          .game-swiper {
            padding-bottom: 20px !important;
          }
          /* Remove pagination dots on desktop */
          .swiper-pagination {
            display: none !important;
          }
        }
        /* Make every letter color as pink */
        .pink-text,
        .pink-text * {
          color: #ff69b4 !important;
        }
        /* But override for description */
        .game-desc-white {
          color: #fff !important;
        }
      `}</style>
      {/* Swiper core styles (mimicking swiper/css, swiper/css/effect-coverflow, swiper/css/pagination) */}
      <style jsx global>{`
        /* Swiper core styles */
        .swiper {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          transition-property: transform;
          box-sizing: content-box;
        }
        .swiper-slide {
          flex-shrink: 0;
          width: 320px;
          height: 400px;
          position: relative;
          transition-property: transform;
          display: block;
        }
        .swiper-slide-active {
          z-index: 2;
        }
        .swiper-slide-next,
        .swiper-slide-prev {
          z-index: 1;
        }
        /* Remove Swiper pagination dots globally */
        .swiper-pagination,
        .swiper-pagination-bullet,
        .swiper-pagination-bullet-active {
          display: none !important;
        }
        /* Coverflow effect */
        .swiper-coverflow .swiper-wrapper {
          perspective: 1200px;
        }
        .swiper-coverflow .swiper-slide {
          transition: transform 0.4s cubic-bezier(0.4, 2, 0.6, 1),
            box-shadow 0.4s cubic-bezier(0.4, 2, 0.6, 1);
        }
        /* --- Symmetry fix: force all coverflow slides to have no rotation, skew, or translation except scale --- */
        .swiper-coverflow .swiper-slide {
          transform: scale(0.85) !important;
        }
        .swiper-coverflow .swiper-slide-active {
          transform: scale(1) !important;
        }
        /* Responsive for Swiper */
        @media (max-width: 767px) {
          .swiper-slide {
            width: 240px !important;
            height: 340px !important;
          }
          .game-swiper {
            padding-bottom: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
