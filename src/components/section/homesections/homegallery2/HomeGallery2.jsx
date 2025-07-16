import React, { useRef, useEffect } from "react";

// Example video data. Replace with your own video URLs or sources.
const videos = [
  {
    src: "/videos/video1.mp4",
    type: "video/mp4",
    poster: "/thumbnails/thumb1.jpg",
  },
  {
    src: "/videos/video2.mp4",
    type: "video/mp4",
    poster: "/thumbnails/thumb2.jpg",
  },
  {
    src: "/videos/video3.mp4",
    type: "video/mp4",
    poster: "/thumbnails/thumb3.jpg",
  },
  // Add more videos as needed
];

const VIDEO_WIDTH = 400; // px
const GAP = 32; // px (2rem)
const SCROLL_SPEED = 1; // px per frame

const HomeGallery2 = () => {
  const scrollRef = useRef(null);

  // Duplicate videos for seamless looping
  const videoList = [...videos, ...videos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let frameId;
    let isHovered = false;

    // Hide scrollbar (for all browsers)
    if (scrollContainer) {
      scrollContainer.style.scrollbarWidth = "none";
      scrollContainer.style.msOverflowStyle = "none";
      scrollContainer.style.overflow = "hidden";
    }

    const animate = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += SCROLL_SPEED;
        // Calculate the width of one set of videos (all original videos + gaps)
        const singleSetWidth =
          videos.length * VIDEO_WIDTH + (videos.length - 1) * GAP;
        // Reset scroll to start for infinite loop
        if (scrollContainer.scrollLeft >= singleSetWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        background: "#111",
        padding: "2rem 0",
      }}
    >
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          overflow: "hidden",
          scrollBehavior: "auto",
          width: "100vw",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="homegallery2-scroll"
      >
        {videoList.map((video, idx) => (
          <div
            key={idx}
            style={{
              minWidth: `${VIDEO_WIDTH}px`,
              maxWidth: `${VIDEO_WIDTH}px`,
              flex: `0 0 ${VIDEO_WIDTH}px`,
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              background: "#222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video
              src={video.src}
              type={video.type}
              poster={video.poster}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                background: "#000",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
      {/* Optional: Add a subtle gradient fade on left/right */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "60px",
          height: "100%",
          background:
            "linear-gradient(to right, #111 80%, rgba(17,17,17,0) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "60px",
          height: "100%",
          background:
            "linear-gradient(to left, #111 80%, rgba(17,17,17,0) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default HomeGallery2;
