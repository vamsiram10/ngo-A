"use client";

import React, { useEffect, useRef } from "react";
import "@/app/globals.css";

// SwiperJS for carousel (no CSS parsing issues)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Fix: Import modules from 'swiper/modules' instead of 'swiper'
import { EffectCoverflow, Pagination } from "swiper/modules";

const games = [
  {
    title: "Dota 2",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    description:
      "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
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
        className="line-title"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(2px)",
          transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
        }}
      >
        trending games
      </h2>
      <div className="custom-carousel">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
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
                <div className="item-desc">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
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
        .line-title::before,
        .line-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          border-radius: 2px;
        }
        .line-title::before {
          width: 100%;
          background: #f2f2f2;
        }
        .line-title::after {
          width: 32px;
          background: #e73700;
        }
        .custom-carousel {
          width: 100%;
        }
        .game-swiper {
          /* Add more gap below images for dots on desktop */
        }
        .item {
          margin: 0 15px 60px;
          width: 320px;
          height: 400px;
          display: flex;
          align-items: flex-end;
          background: #343434 no-repeat center center / cover;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease-in-out;
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
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        }
        .item-desc {
          padding: 0 24px 12px;
          color: #fff;
          position: relative;
          z-index: 1;
          transform: translateY(calc(100% - 54px));
          transition: all 0.4s ease-in-out;
        }
        .item.active .item-desc {
          transform: none;
        }
        .item-desc p {
          opacity: 0;
          transform: translateY(32px);
          transition: all 0.4s ease-in-out 0.2s;
        }
        .item.active .item-desc p {
          opacity: 1;
          transform: translateY(0);
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
            margin: 0 12px 48px;
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
          /* Add extra space below the images for the pagination dots */
          .game-swiper {
            padding-bottom: 10px !important; /* Increased for more gap */
          }
          /* Optionally, increase the gap above the dots */
          .swiper-pagination {
            bottom: 150px !important;
          }
        }
        /* Add gap between images and dots on desktop only */
        @media (min-width: 768px) {
          .game-swiper {
            padding-bottom: 20px !important; /* Much bigger gap below images for dots on desktop */
          }
          .swiper-pagination {
            bottom: 10px !important; /* Move dots much further down on desktop */
          }
          .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
            margin: 0 8px;
          }
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
        .swiper-pagination {
          position: absolute;
          text-align: center;
          transition: 300ms opacity;
          transform: translateZ(0);
          z-index: 10;
          left: 0;
          right: 0;
          /* Move dots much further down on desktop only */
          bottom: 5px;
        }
        @media (min-width: 768px) {
          .swiper-pagination {
            bottom: 40px !important; /* Increased gap between image cards and dots on desktop */
          }
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 100%;
          background: #e73700;
          opacity: 0.3;
          margin: 0 4px;
          transition: opacity 0.3s;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #e73700;
        }
        /* Coverflow effect */
        .swiper-coverflow .swiper-wrapper {
          perspective: 1200px;
        }
        .swiper-coverflow .swiper-slide {
          transition: transform 0.4s, box-shadow 0.4s;
        }
        /* Responsive for Swiper */
        @media (max-width: 767px) {
          .swiper-slide {
            width: 240px !important;
            height: 340px !important;
          }
          /* Add extra gap between images and dots on mobile */
          .game-swiper {
            padding-bottom: 110px !important; /* Ensure extra gap for dots */
          }
          .swiper-pagination {
            bottom: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
