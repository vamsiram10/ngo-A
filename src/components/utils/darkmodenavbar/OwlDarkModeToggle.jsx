"use client";

import { useEffect, useRef, useState } from "react";

const OwlDarkModeToggle = () => {
  const overlayRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleMode = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.className = "transition-overlay zoom-in";

    if (!darkMode) {
      requestAnimationFrame(() => {
        overlay.classList.add("expand");
      });
      setTimeout(() => setDarkMode(true), 1250);
    } else {
      overlay.classList.remove("expand");
      overlay.classList.add("shrink");
      setTimeout(() => setDarkMode(false), 1250);
    }
  };

  return (
    <>
      <button className="owl-toggle" onClick={toggleMode}>
        {/* Eyes closed */}
        <svg
          className={darkMode ? "eye-closed hidden" : "eye-closed"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="currentColor"
        >
          <path
            d="M10 24 C16 18, 24 18, 30 24"
            stroke="#000"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M34 24 C40 18, 48 18, 54 24"
            stroke="#000"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M14 36 Q20 38, 26 36"
            stroke="#000"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M38 36 Q44 38, 50 36"
            stroke="#000"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>

        {/* Eyes open */}
        <svg
          className={darkMode ? "eye-open" : "eye-open hidden"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="currentColor"
        >
          <path
            d="M10 24 C16 18, 24 18, 30 24"
            stroke="#fff"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M34 24 C40 18, 48 18, 54 24"
            stroke="#fff"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="20" cy="36" r="10" fill="#fff" />
          <circle cx="20" cy="36" r="4" fill="#000" />
          <circle cx="44" cy="36" r="10" fill="#fff" />
          <circle cx="44" cy="36" r="4" fill="#000" />
        </svg>
      </button>

      <div className="page-content">
        <h1>Welcome to my website</h1>
      </div>

      <div ref={overlayRef} className="transition-overlay zoom-in"></div>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          width: 100%;
          font-family: "Segoe UI", sans-serif;
          overflow: hidden;
          transition: background-color 0.6s ease-in-out;
        }

        body.light {
          background-color: #ffffff;
          color: #000000;
        }

        body.dark {
          background-color: #111111;
          color: #ffffff;
        }

        .owl-toggle {
          position: fixed;
          top: 2vh;
          left: 2vw;
          z-index: 1002;
          background: none;
          border: none;
          cursor: pointer;
          width: 10vw;
          max-width: 60px;
          height: auto;
        }

        .owl-toggle svg {
          width: 100%;
          height: auto;
        }

        .eye-open,
        .eye-closed {
          display: block;
        }

        .hidden {
          display: none !important;
        }

        h1 {
          text-align: center;
          margin-top: 10vh;
          font-size: clamp(1.5rem, 4vw, 3rem);
          z-index: 1;
          position: relative;
        }

        .transition-overlay {
          position: fixed;
          width: 10vw;
          height: 10vw;
          max-width: 120px;
          max-height: 120px;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          pointer-events: none;
          border-radius: 50%;
          transform: scale(0);
          transform-origin: center;
        }

        .zoom-in {
          top: -15vh;
          left: 100vw;
          transform: scale(0);
        }

        .expand {
          animation: enterFromTopRight 2.5s forwards ease-in;
        }

        .shrink {
          animation: exitToBottomLeft 2.5s forwards ease-in;
        }

        @keyframes enterFromTopRight {
          0% {
            top: -15vh;
            left: 100vw;
            transform: scale(0);
          }
          30% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.4);
          }
          100% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(30);
          }
        }

        @keyframes exitToBottomLeft {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(30);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.4);
          }
          100% {
            top: 110vh;
            left: -10vw;
            transform: scale(0);
          }
        }

        @media screen and (max-width: 600px) {
          .owl-toggle {
            width: 14vw;
            max-width: 50px;
          }

          h1 {
            font-size: 6vw;
          }
        }
      `}</style>
    </>
  );
};

export default OwlDarkModeToggle;
