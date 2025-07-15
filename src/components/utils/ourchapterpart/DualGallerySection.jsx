"use client";

import React, { useRef, useState } from "react";

// Images remain the same
const imagesLeft = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
];

const imagesRight = [
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
];

// Slide animation keyframes
const slideKeyframes = `
@keyframes slideInLeft {
  from { transform: translateX(-60px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutLeft {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(60px); opacity: 0; }
}
@keyframes slideInRight {
  from { transform: translateX(60px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutRight {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-60px); opacity: 0; }
}
`;

function DualGallerySection() {
  // For scrolling, we use refs and horizontal scroll containers
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);

  // Animation state: "idle", "in", "out"
  const [leftAnim, setLeftAnim] = useState("idle");
  const [rightAnim, setRightAnim] = useState("idle");
  const [leftDirection, setLeftDirection] = useState("right"); // or "left"
  const [rightDirection, setRightDirection] = useState("right");

  // Slide animation duration
  const animDuration = 350;

  // Helper to get animation style (not used for scroll, but keep for possible fade)
  const getAnimStyle = (anim, direction, side) => {
    if (anim === "idle") return { opacity: 1, transition: "none" };
    if (anim === "out") {
      if (side === "left") {
        return {
          animation: `${
            direction === "right" ? "slideOutLeft" : "slideOutRight"
          } ${animDuration}ms forwards`,
        };
      } else {
        return {
          animation: `${
            direction === "right" ? "slideOutLeft" : "slideOutRight"
          } ${animDuration}ms forwards`,
        };
      }
    }
    if (anim === "in") {
      if (side === "left") {
        return {
          animation: `${
            direction === "right" ? "slideInLeft" : "slideInRight"
          } ${animDuration}ms`,
        };
      } else {
        return {
          animation: `${
            direction === "right" ? "slideInLeft" : "slideInRight"
          } ${animDuration}ms`,
        };
      }
    }
    return {};
  };

  // Scroll handlers
  const scrollLeftGallery = (direction) => {
    if (!leftScrollRef.current) return;
    const container = leftScrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRightGallery = (direction) => {
    if (!rightScrollRef.current) return;
    const container = rightScrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // Dots for navigation (scroll to image)
  const renderDots = (images, scrollRef) => (
    <div
      style={{
        marginTop: 12,
        display: "flex",
        justifyContent: "center",
        gap: 8,
      }}
    >
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => {
            if (!scrollRef.current) return;
            const container = scrollRef.current;
            const child = container.children[idx];
            if (child) {
              // Scroll so that the image is at the start of the container
              container.scrollTo({
                left: child.offsetLeft,
                behavior: "smooth",
              });
            }
          }}
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: "none",
            background: "#ccc",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          aria-label={`Go to image ${idx + 1}`}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Inject keyframes for slide animation */}
      <style>{slideKeyframes}</style>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
          width: "100%",
          padding: "2rem 0",
        }}
      >
        {/* Left Gallery */}
        <div style={{ textAlign: "center", maxWidth: 270 }}>
          <div
            style={{
              position: "relative",
              width: 250,
              height: 250,
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <button
              aria-label="Scroll left"
              onClick={() => scrollLeftGallery("left")}
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              &#8592;
            </button>
            <div
              ref={leftScrollRef}
              style={{
                width: 250,
                height: 250,
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                scrollBehavior: "smooth",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                position: "relative",
              }}
              tabIndex={0}
            >
              {imagesLeft.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Gallery Left ${idx + 1}`}
                  style={{
                    width: 250,
                    height: 250,
                    objectFit: "cover",
                    borderRadius: "1rem",
                    display: "inline-block",
                    marginRight: idx !== imagesLeft.length - 1 ? 8 : 0,
                    verticalAlign: "top",
                  }}
                  draggable={false}
                />
              ))}
            </div>
            <button
              aria-label="Scroll right"
              onClick={() => scrollLeftGallery("right")}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              &#8594;
            </button>
          </div>
          {renderDots(imagesLeft, leftScrollRef)}
        </div>

        {/* Right Gallery */}
        <div style={{ textAlign: "center", maxWidth: 270 }}>
          <div
            style={{
              position: "relative",
              width: 250,
              height: 250,
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <button
              aria-label="Scroll left"
              onClick={() => scrollRightGallery("left")}
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              &#8592;
            </button>
            <div
              ref={rightScrollRef}
              style={{
                width: 250,
                height: 250,
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                scrollBehavior: "smooth",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                position: "relative",
              }}
              tabIndex={0}
            >
              {imagesRight.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Gallery Right ${idx + 1}`}
                  style={{
                    width: 250,
                    height: 250,
                    objectFit: "cover",
                    borderRadius: "1rem",
                    display: "inline-block",
                    marginRight: idx !== imagesRight.length - 1 ? 8 : 0,
                    verticalAlign: "top",
                  }}
                  draggable={false}
                />
              ))}
            </div>
            <button
              aria-label="Scroll right"
              onClick={() => scrollRightGallery("right")}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                background: "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              &#8594;
            </button>
          </div>
          {renderDots(imagesRight, rightScrollRef)}
        </div>
      </div>
    </>
  );
}

export default DualGallerySection;
