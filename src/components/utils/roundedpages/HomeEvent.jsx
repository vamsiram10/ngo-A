"use client";

import React, { useEffect, useRef } from "react";

const CAROUSEL_RADIUS = 400;
const ITEM_WIDTH = 260;
const ITEM_HEIGHT = 340;

const carouselData = [
  {
    title: "Paris",
    num: "01",
    img: "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
  },
  {
    title: "Warsaw",
    num: "02",
    img: "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
  },
  {
    title: "Madrid",
    num: "03",
    img: "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
  },
  {
    title: "Sydney",
    num: "04",
    img: "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=",
  },
  {
    title: "Istanbul",
    num: "05",
    img: "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=",
  },
  {
    title: "Prague",
    num: "06",
    img: "https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=",
  },
  {
    title: "Munich",
    num: "07",
    img: "https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=",
  },
  {
    title: "Venice",
    num: "08",
    img: "https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=",
  },
  {
    title: "Oslo",
    num: "09",
    img: "https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=",
  },
  {
    title: "London",
    num: "10",
    img: "https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=",
  },
];

const HomeEvent = () => {
  const carouselRef = useRef(null);
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    let progress = 0;
    let startX = 0;
    let isDragging = false;
    let animationFrameId = null;

    const $carousel = carouselRef.current;
    const $items = $carousel
      ? Array.from($carousel.querySelectorAll(".carousel-item"))
      : [];
    const $cursors = [cursorRef.current, cursor2Ref.current].filter(Boolean);

    const displayItems = () => {
      const n = $items.length;
      const theta = 360 / n;
      for (let i = 0; i < n; i++) {
        const angle = theta * i + progress;
        const item = $items[i];
        item.style.transform = `rotateY(${angle}deg) translateZ(${CAROUSEL_RADIUS}px)`;
        item.style.zIndex = Math.round(
          1000 - Math.abs((((angle % 360) + 360) % 360) - 180)
        );
        item.style.opacity =
          Math.abs((((angle % 360) + 360) % 360) - 180) < 90 ? 1 : 0.5;
      }
    };

    const animate = () => {
      displayItems();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handlePointerDown = (e) => {
      isDragging = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handlePointerMove = (e) => {
      let clientX, clientY;
      if (e.touches && e.touches.length) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      $cursors.forEach(($cursor) => {
        if ($cursor) {
          $cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        }
      });

      if (!isDragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = x - startX;
      progress += dx * 0.3;
      startX = x;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleWheel = (e) => {
      progress += e.deltaY * 0.3;
    };

    $items.forEach((item, i) => {
      item.onclick = () => {
        progress = -i * (360 / $items.length);
      };
    });

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("touchmove", handlePointerMove);
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div
        className="carousel"
        ref={carouselRef}
        style={{
          perspective: "1200px",
          width: "100%",
          height: "500px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {carouselData.map((item, idx) => (
          <div
            className="carousel-item"
            key={item.num}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: `${ITEM_WIDTH}px`,
              height: `${ITEM_HEIGHT}px`,
              transform: `rotateY(${
                (360 / carouselData.length) * idx
              }deg) translateZ(${CAROUSEL_RADIUS}px)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.5s cubic-bezier(.17,.67,.83,.67)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transformOrigin: `center center -${CAROUSEL_RADIUS}px`,
              cursor: "pointer",
              userSelect: "none",
              pointerEvents: "auto",
              zIndex:
                1000 - Math.abs(idx - Math.floor(carouselData.length / 2)),
            }}
          >
            <div
              className="carousel-box"
              style={{
                width: "90%",
                height: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.25)",
                borderRadius: "20px",
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.17)",
                padding: "20px",
              }}
            >
              <div
                className="title"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                  color: "#222",
                  textAlign: "center",
                }}
              >
                {item.title}
              </div>
              <div
                className="num"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                  color: "#666",
                  textAlign: "center",
                }}
              >
                {item.num}
              </div>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  marginBottom: "1rem",
                  boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.17)",
                }}
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="cursor"
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.1)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "multiply",
          transform: "translate(-100px, -100px)",
          transition: "background 0.2s",
        }}
      ></div>
      <div
        className="cursor cursor2"
        ref={cursor2Ref}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.05)",
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "multiply",
          transform: "translate(-100px, -100px)",
          transition: "background 0.2s",
        }}
      ></div>
    </>
  );
};

export default HomeEvent;
