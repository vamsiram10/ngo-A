import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = ["/maindesk.jpeg", "/maindesk3.jpg", "/main.jpg"];

const dropInKeyframes = [
  { transform: "translateY(-200px)", opacity: 0 },
  { transform: "translateY(0)", opacity: 1 },
];

const dropInTiming = {
  duration: 2000,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  fill: "forwards",
};

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 30,
  background: "rgba(0,0,0,0.4)",
  border: "none",
  color: "#fff",
  fontSize: "2.5rem",
  width: "3.5rem",
  height: "3.5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
  userSelect: "none",
};

const BG_FADE_DURATION = 500;
const BG_AUTO_INTERVAL = 2000;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

const HomeOther = () => {
  const textRef = useRef(null);
  const marqueeRef = useRef(null);
  const bgRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (textRef.current) {
      textRef.current.animate(dropInKeyframes, dropInTiming);
    }
  }, []);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const textWidth = marquee.scrollWidth;
      const containerWidth = marquee.parentElement.offsetWidth;

      const tween = gsap.fromTo(
        marquee,
        { x: -textWidth },
        {
          x: containerWidth,
          duration: 10,
          ease: "linear",
          repeat: -1,
        }
      );
      return () => {
        tween.kill();
      };
    }
  }, []);

  // Fix: Only auto-advance if not fading, and always use the latest index
  useEffect(() => {
    if (isFading) return;
    const interval = setInterval(() => {
      setPrevIndex((prev) => currentIndex);
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, BG_FADE_DURATION);
    }, BG_AUTO_INTERVAL);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isFading]);

  const handleBgClick = (e) => {
    if (
      e.target.closest(".carousel-arrow") ||
      e.target.closest(".marquee-link")
    ) {
      return;
    }
    if (isFading) return;
    setPrevIndex(currentIndex);
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsFading(false);
    }, BG_FADE_DURATION);
  };

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    let startX = null;
    let startY = null;
    let isSwiping = false;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwiping = true;
      }
    };

    const onTouchMove = (e) => {
      if (!isSwiping || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (isFading) return;
        setPrevIndex(currentIndex);
        setIsFading(true);
        setTimeout(() => {
          if (dx > 0) {
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );
          } else {
            setCurrentIndex((prev) => (prev + 1) % images.length);
          }
          setIsFading(false);
        }, BG_FADE_DURATION);
        isSwiping = false;
      }
    };

    const onTouchEnd = () => {
      isSwiping = false;
    };

    bg.addEventListener("touchstart", onTouchStart, { passive: true });
    bg.addEventListener("touchmove", onTouchMove, { passive: true });
    bg.addEventListener("touchend", onTouchEnd);

    return () => {
      bg.removeEventListener("touchstart", onTouchStart);
      bg.removeEventListener("touchmove", onTouchMove);
      bg.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isFading]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (isFading) return;
      if (e.key === "ArrowLeft") {
        setPrevIndex(currentIndex);
        setIsFading(true);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
          );
          setIsFading(false);
        }, BG_FADE_DURATION);
      } else if (e.key === "ArrowRight") {
        setPrevIndex(currentIndex);
        setIsFading(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setIsFading(false);
        }, BG_FADE_DURATION);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isFading]);

  const getBgStyle = (img, fadeOverlay = 0.4) => {
    if (isMobile) {
      //for mobile guys
      return {
        backgroundImage: `linear-gradient(rgba(0,0,0,${fadeOverlay}), rgba(0,0,0,${fadeOverlay})), url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "10% top",
        backgroundRepeat: "no-repeat",
      };
    }
    //desktop
    return {
      backgroundImage: `linear-gradient(rgba(0,0,0,${fadeOverlay}), rgba(0,0,0,${fadeOverlay})), url('${img}')`,
      backgroundSize: "100%",
      backgroundPosition: "center bottom 65%",
      backgroundRepeat: "no-repeat",
    };
  };

  return (
    <div className="overflow-x-hidden relative h-dvh w-screen">
      <div
        ref={bgRef}
        className="flex items-center justify-center h-dvh w-screen"
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "100dvh",

          ...(isMobile
            ? {
                height: "100dvh",
                minHeight: "100dvh",
                maxHeight: "100dvh",
                touchAction: "pan-y",
                WebkitOverflowScrolling: "touch",
              }
            : {}),
        }}
        onClick={handleBgClick}
        tabIndex={-1}
      >
        {/* Transparent light black overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(0,0,0,0.25)",
            zIndex: 3,
          }}
        />
        {/* Crossfade: Only show prev bg if fading, otherwise don't render it at all */}
        {isFading && prevIndex !== null && (
          <div
            className="absolute inset-0 transition-opacity"
            style={{
              ...getBgStyle(images[prevIndex], 0.4),
              opacity: 1,
              zIndex: 1,
              transition: `opacity ${BG_FADE_DURATION}ms`,
              pointerEvents: "none",
            }}
          />
        )}
        <div
          className="absolute inset-0 transition-opacity"
          style={{
            ...getBgStyle(images[currentIndex], 0.55),
            opacity: isFading ? 0 : 1,
            zIndex: 2,
            transition: `opacity ${BG_FADE_DURATION}ms`,
            pointerEvents: "none",
          }}
        />
        {/* Content overlays */}
        <div
          className="z-10 relative flex flex-col items-center justify-center w-full"
          style={{
            top: isMobile ? "60px" : undefined,
          }}
        >
          <div className="z-50 relative mb-10">
            <p
              ref={textRef}
              className="px-4 text-white text-3xl font-semibold text-center md:text-7xl"
              style={{
                opacity: 0,
                transform: "translateY(-200px)",
                willChange: "transform, opacity",
              }}
            >
              "Here for a Cause"
            </p>
          </div>
        </div>
        <div
          className="select-none"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100vw",
            overflow: "hidden",
            zIndex: 20,
            height: isMobile ? "44px" : "60px",
            position: "absolute",
            background: "rgba(0,0,0,0.0)",
            pointerEvents: "auto",
          }}
        >
          <Link
            href="/contactus/map"
            ref={marqueeRef}
            className="marquee-link"
            style={{
              whiteSpace: "nowrap",
              fontWeight: 100,
              fontSize: isMobile ? "1.1rem" : "1.5rem",
              color: "#f9a8d4",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              letterSpacing: "0.1em",
              display: "inline-block",
              willChange: "transform",
              padding: isMobile ? "0.5rem" : "1rem",
              userSelect: "none",
              textDecoration: "none",
              pointerEvents: "auto",
            }}
            tabIndex={0}
            scroll={false}
          >
            Event updates coming soon &nbsp;•&nbsp; Stay tuned for upcoming
            events &nbsp;•&nbsp; Event updates coming soon &nbsp;•&nbsp; Stay
            tuned for upcoming events &nbsp;•&nbsp; Avasa Foundation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeOther;
