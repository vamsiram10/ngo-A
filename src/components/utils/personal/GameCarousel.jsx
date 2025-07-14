"use client";

import React, { useEffect, useRef } from "react";
import "@/app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const games = [
  {
    title: "Dota 2",
    image: "/maingallery/a.jpg",
    description:
      "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    title: "Elden Ring",
    image: "/maingallery/b.jpg",
    description:
      "Elden Ring is an action RPG developed by FromSoftware, featuring a vast open world and challenging combat.",
  },
  {
    title: "Hollow Knight",
    image: "/maingallery/c.jpg",
    description:
      "Hollow Knight is a critically acclaimed metroidvania game with hand-drawn art and deep exploration.",
  },
  {
    title: "Cyberpunk 2077",
    image: "/maingallery/d.jpg",
    description:
      "Cyberpunk 2077 is an open-world RPG set in Night City, offering immersive storytelling and futuristic action.",
  },
  {
    title: "Celeste",
    image: "/maingallery/e.jpg",
    description:
      "Celeste is a platformer about climbing a mountain, featuring tight controls and a heartfelt story.",
  },
  {
    title: "The Witcher 3",
    image: "/maingallery/f.jpg",
    description:
      "The Witcher 3 is a story-driven RPG where you explore a rich open world as Geralt of Rivia.",
  },
  {
    title: "RDR 2",
    image: "/maingallery/g.jpg",
    description:
      "RDR 2 is an action-adventure game developed and published by Rockstar Games, set in a fictionalized Western US.",
  },
  {
    title: "PUBG Mobile",
    image: "/maingallery/h.jpg",
    description:
      "PUBG Mobile is a battle royale shooter that pits 100 players against each other in a struggle for survival.",
  },
  {
    title: "Fortnite",
    image: "/maingallery/i.jpg",
    description:
      "Battle royale where 100 players fight to be the last person standing. Fast building mechanics & colorful design.",
  },
  {
    title: "Far Cry 5",
    image: "/maingallery/j.jpg",
    description:
      "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft, set in an open world environment.",
  },
  {
    title: "Assassin's Creed Valhalla",
    image: "/maingallery/k.jpg",
    description:
      "Assassin's Creed Valhalla lets you become a legendary Viking on a quest for glory in England's Dark Ages.",
  },
  {
    title: "Overwatch",
    image: "/maingallery/l.jpg",
    description:
      "Overwatch is a vibrant team-based shooter set on a near-future earth, with unique heroes and abilities.",
  },
  {
    title: "Minecraft",
    image: "/maingallery/m.jpg",
    description:
      "Minecraft is a sandbox game where you can build, explore, and survive in a blocky, procedurally-generated world.",
  },
  {
    title: "League of Legends",
    image: "/maingallery/n.jpg",
    description:
      "League of Legends is a fast-paced, competitive online game blending the speed and intensity of an RTS with RPG elements.",
  },
  {
    title: "Apex Legends",
    image: "/maingallery/o.jpg",
    description:
      "Apex Legends is a free-to-play battle royale game featuring unique characters and fast-paced squad-based gameplay.",
  },
  {
    title: "Genshin Impact",
    image: "/maingallery/p.jpg",
    description:
      "Genshin Impact is an open-world action RPG with beautiful visuals and elemental combat, set in the world of Teyvat.",
  },
  {
    title: "Valorant",
    image: "/maingallery/q.jpg",
    description:
      "Valorant is a tactical first-person shooter from Riot Games, combining precise gunplay with unique agent abilities.",
  },
  {
    title: "God of War",
    image: "/maingallery/r.jpg",
    description:
      "God of War follows Kratos and his son Atreus on a mythological journey through Norse realms.",
  },
  {
    title: "Sekiro: Shadows Die Twice",
    image: "/maingallery/s.jpg",
    description:
      "Sekiro is an action-adventure game by FromSoftware, known for its challenging sword combat and stealth mechanics.",
  },
  {
    title: "Super Mario Odyssey",
    image: "/maingallery/t.jpg",
    description:
      "Super Mario Odyssey is a 3D platformer where Mario travels across various worlds to save Princess Peach.",
  },
  {
    title: "Hollow Knight",
    image: "/maingallery/u.jpg",
    description:
      "Hollow Knight is a challenging 2D action-adventure set in a vast, ruined kingdom of insects and heroes.",
  },
  {
    title: "Celeste",
    image: "/maingallery/v.jpg",
    description:
      "Celeste is a platformer about climbing a mountain, overcoming tough obstacles, and facing inner struggles.",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    image: "/maingallery/w.jpg",
    description:
      "Breath of the Wild is an open-world adventure where you explore, solve puzzles, and battle to save Hyrule.",
  },
  {
    title: "Stardew Valley",
    image: "/maingallery/x.jpg",
    description:
      "Stardew Valley is a relaxing farming simulation game where you grow crops, raise animals, and build relationships.",
  },
  {
    title: "Hades",
    image: "/maingallery/y.jpg",
    description:
      "Hades is a rogue-like dungeon crawler where you battle out of the Underworld as the immortal Prince Zagreus.",
  },
  {
    title: "Animal Crossing: New Horizons",
    image: "/maingallery/z.jpg",
    description:
      "Animal Crossing: New Horizons lets you build your dream island life, make friends, and decorate to your heart's content.",
  },
];

export default function GameCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const items = document.querySelectorAll(".custom-carousel .item");
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
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
            scale: 0.85,
          }}
          spaceBetween={30}
          modules={[EffectCoverflow]}
          className="game-swiper"
        >
          {games.map((game, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "320px", height: "400px" }}
            >
              <div className={`item${index === 0 ? " active" : ""}`}>
                <img
                  src={game.image}
                  alt={game.title}
                  className="item-image"
                  draggable={false}
                />
                <div className="item-float-bg" />
                <div className="item-desc pink-text">
                  <h3 className="item-title-animated pink-text">
                    {game.title}
                  </h3>
                  <p className="game-desc-white">{game.description}</p>
                </div>
                <div className="item-glow" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
        .custom-carousel {
          width: 100%;
        }
        .game-swiper {
        }
        .item {
          margin: 0 0px 60px;
          width: 320px;
          height: 400px;
          display: flex;
          align-items: flex-end;
          background: #343434;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 2, 0.6, 1);
          cursor: pointer;
        }
        .item-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }
        .custom-carousel .swiper-slide {
          display: flex;
          justify-content: center;
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
          z-index: 1;
          pointer-events: none;
        }
        .item-float-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
          background: none;
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
          z-index: 2;
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
        .game-desc-white {
          color: #fff !important;
        }
        .swiper-coverflow .swiper-slide {
          transform-origin: 50% 50% !important;
        }
        .swiper-coverflow .swiper-slide {
          transform: scale(0.85) !important;
        }
        .swiper-coverflow .swiper-slide-active {
          transform: scale(1) !important;
        }
        @media (max-width: 767px) {
          .centered-section {
            padding: 0 2vw;
            min-height: 100vh;
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
            margin: 0 0px 48px;
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
          .game-swiper {
            padding-bottom: 10px !important;
          }
          .swiper-pagination {
            display: none !important;
          }
          .swiper-coverflow .swiper-slide {
            transform: scale(0.85) !important;
          }
          .swiper-coverflow .swiper-slide-active {
            transform: scale(1) !important;
          }
          .item-float-bg {
            filter: blur(6px) brightness(1.1);
          }
          .item-image {
            width: 100%;
            height: 100%;
          }
        }
        @media (min-width: 768px) {
          .game-swiper {
            padding-bottom: 20px !important;
          }
          .swiper-pagination {
            display: none !important;
          }
        }
        .pink-text,
        .pink-text * {
          color: #ff69b4 !important;
        }
        .game-desc-white {
          color: #fff !important;
        }
      `}</style>
      <style jsx global>{`
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
        .swiper-pagination,
        .swiper-pagination-bullet,
        .swiper-pagination-bullet-active {
          display: none !important;
        }
        .swiper-coverflow .swiper-wrapper {
          perspective: 1200px;
        }
        .swiper-coverflow .swiper-slide {
          transition: transform 0.4s cubic-bezier(0.4, 2, 0.6, 1),
            box-shadow 0.4s cubic-bezier(0.4, 2, 0.6, 1);
        }
        .swiper-coverflow .swiper-slide {
          transform: scale(0.85) !important;
        }
        .swiper-coverflow .swiper-slide-active {
          transform: scale(1) !important;
        }
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
