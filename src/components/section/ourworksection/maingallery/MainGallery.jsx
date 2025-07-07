"use client";

import "@/app/globals.css";
import "./maingallery.css";
import { useEffect, useRef } from "react";

// Set this to match your navbar's height (in px, rem, etc.)
// If your navbar is 80px tall, set offset = "80px"
const NAVBAR_HEIGHT = "80px"; // Change this value to match your navbar height

export default function MainGallery() {
  const items = [
    "jelly-o brownie sweet",
    "Muffin jelly gingerbread",
    "sesame snaps chocolate",
    "Oat cake",
    "jujubes cheesecake",
    "Dragée pudding brownie",
    "Oat cake",
    "powder toffee",
    "pudding cheesecake",
    "toffee bear claw",
    "cake cookie croissant",
    "liquorice sweet roll",
    "chocolate marzipan",
    "danish dessert lollipop",
    "sugar plum dragée",
  ];

  const getBackgroundImage = (index) => {
    const images = [
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc",
      "https://images.unsplash.com/photo-1422255198496-21531f12a6e8",
      "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90",
      "https://images.unsplash.com/photo-1476097297040-79e9e1603142",
      "https://images.unsplash.com/photo-1464652149449-f3b8538144aa",
    ];
    return `${
      images[index % images.length]
    }?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=`;
  };

  // Add animation classes for each card
  const getItemClass = (index) => `gallery__item gallery__item-animate`;

  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Animate grid slide down on mount
  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      grid.classList.add("slide-down-show");
    }

    // Intersection Observer for card animations on scroll
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("gallery__item-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      // Cleanup
      return () => {
        cardRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }
  }, []);

  // Responsive styles for mobile/tablet, injected as a <style> tag
  const responsiveStyle = `
    @media (max-width: 900px) {
      .gallery__grid {
        gap: 16px !important;
        grid-template-columns: repeat(2, 1fr) !important;
        padding-left: 8px !important;
        padding-right: 8px !important;
      }
      .gallery__item {
        min-height: 90px !important;
        max-width: 100px !important;
        margin: 0 !important;
      }
      .gallery__title {
        left: 0 !important;
        font-size: 1.2rem !important;
        text-align: center !important;
      }
      .gallery__section {
        padding: 1rem 0.1rem 0.25rem 0.1rem !important;
      }
      .gallery__spacer {
        height: 0.7rem !important;
      }
      .gallery__item-details {
        padding: 6px !important;
        font-size: 0.7rem !important;
      }
      .gallery__item-index {
        font-size: 0.7rem !important;
      }
    }
    @media (max-width: 600px) {
      .gallery__grid {
        gap: 50px !important;
        grid-template-columns: 1fr !important;
        padding-left: 6px !important;
        padding-right: 6px !important;
      }
      .gallery__item {
        min-height: 48px !important;
        max-width: 70vw !important;
        margin: 0 !important;
      }
      .gallery__title {
        left: 0 !important;
        font-size: 0.9rem !important;
        text-align: center !important;
      }
      .gallery__section {
        padding: 0.5rem 0.05rem 0.15rem 0.05rem !important;
      }
      .gallery__item-details {
        padding: 3px !important;
        font-size: 0.6rem !important;
      }
      .gallery__item-index {
        font-size: 0.6rem !important;
      }
      .gallery__spacer {
        height: 0.5rem !important;
      }
    }
  `;

  // Animation styles for cards
  const cardAnimationStyle = `
    .gallery__item-animate {
      opacity: 0;
      transform: translateY(60px) scale(0.96);
      transition:
        opacity 0.7s cubic-bezier(.4,1.4,.6,1),
        transform 0.7s cubic-bezier(.4,1.4,.6,1);
      will-change: opacity, transform;
    }
    .gallery__item-visible {
      opacity: 1 !important;
      transform: translateY(0) scale(1) !important;
    }
    .slide-down-init {
      opacity: 0;
      transform: translateY(-160px);
      transition: opacity 0.7s cubic-bezier(.4,1.4,.6,1), transform 0.7s cubic-bezier(.4,1.4,.6,1);
    }
    .slide-down-show {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;

  return (
    <>
      <style>{cardAnimationStyle}</style>
      <style>{responsiveStyle}</style>
      <div
        className="gallery"
        style={{
          padding: "0",
          marginTop: NAVBAR_HEIGHT,
          backgroundColor: "black",
        }}
      >
        <div className="gallery__message">
          Sorry, your browser does not support CSS Grid. 😅
        </div>

        <section
          className="gallery__section"
          style={{
            height: "auto",
            padding: "2rem 0.5rem 1rem 0.5rem",
            backgroundColor: "black",
          }}
        >
          <h1
            className="gallery__title"
            style={{
              marginBottom: "1rem",
              fontSize: "2rem",
              color: "white",
              position: "relative",
              left: "40rem",
            }}
          >
            GALLERY
          </h1>
          {/* Spacer for gap between gallery title and cards */}
          <div className="gallery__spacer" style={{ height: "1rem" }} />
          <div
            ref={gridRef}
            className="gallery__grid slide-down-init"
            style={{
              gap: "36px",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyItems: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            {items.map((text, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={getItemClass(index)}
                style={{
                  backgroundImage: `url(${getBackgroundImage(index)})`,
                  aspectRatio: "1 / 1",
                  minHeight: "260px",
                  maxWidth: "340px",
                  width: "100%",
                  margin: "0 auto",
                  // Optional: stagger animation delay for initial load
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                <div className="gallery__overlay" />
                <div
                  className="gallery__item-details"
                  style={{
                    padding: "22px",
                    fontSize: "1.25rem",
                  }}
                >
                  <span
                    className="gallery__item-index"
                    style={{
                      fontSize: "1.3rem",
                      paddingRight: "0.7em",
                    }}
                  >
                    {index + 1}
                  </span>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
