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
      setTimeout(() => setDarkMode(true), 1000);
    } else {
      overlay.classList.remove("expand");
      overlay.classList.add("shrink");
      setTimeout(() => setDarkMode(false), 1000);
    }
  };

  return (
    <>
      <button
        className="owl-toggle"
        onClick={toggleMode}
        aria-label="Toggle dark mode"
      >
        {/* Owl face */}
        <div className={`owl-face ${darkMode ? "owl-dark" : "owl-light"}`}>
          {/* Owl ears */}
          <div className="left owl-ear"></div>
          <div className="right owl-ear"></div>
          {/* Owl eyes */}
          <div className="owl-eyes">
            <div className={`owl-eye left ${darkMode ? "open" : "closed"}`}>
              <div className="pupil"></div>
            </div>
            <div className={`owl-eye right ${darkMode ? "open" : "closed"}`}>
              <div className="pupil"></div>
            </div>
          </div>
          {/* Owl beak */}
          <div className="owl-beak"></div>
        </div>
      </button>

      <div className="page-content">
        <h1>
          {darkMode ? "Night Mode Activated 🌙" : "Day Mode Activated ☀️"}
        </h1>
        <p className="subtitle">
          {darkMode
            ? "Enjoy the calm of the night."
            : "Welcome to the bright side!"}
        </p>
      </div>

      <div ref={overlayRef} className="transition-overlay zoom-in"></div>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          width: 100%;
          font-family: "Segoe UI", "Geist", "Geist Mono", sans-serif;
          overflow-x: hidden;
          transition: background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body.light {
          background: linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%);
          color: #1a202c;
        }

        body.dark {
          background: linear-gradient(120deg, #18181b 0%, #23272f 100%);
          color: #f1f5f9;
        }

        .owl-toggle {
          position: fixed;
          top: 3vh;
          left: 2vw;
          z-index: 1002;
          background: none;
          border: none;
          cursor: pointer;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
        }
        .owl-toggle:active {
          transform: scale(0.96) rotate(-3deg);
        }

        .owl-face {
          position: relative;
          width: 80px;
          height: 80px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.5s;
        }
        .owl-dark {
          background: #23272f;
          box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.25);
        }
        .owl-light {
          background: #fff;
        }
        .owl-ear {
          position: absolute;
          top: -18px;
          width: 22px;
          height: 28px;
          background: #fff;
          border-radius: 60% 60% 40% 40%;
          z-index: 2;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
          transition: background 0.5s;
        }
        .owl-dark .owl-ear {
          background: #23272f;
        }
        .owl-ear.left {
          left: 0;
          transform: rotate(-18deg);
        }
        .owl-ear.right {
          right: 0;
          transform: rotate(18deg);
        }
        .owl-eyes {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 60px;
          position: absolute;
          top: 28px;
          left: 10px;
        }
        .owl-eye {
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          border: 2.5px solid #23272f;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: background 0.5s, border 0.5s;
        }
        .owl-dark .owl-eye {
          background: #23272f;
          border: 2.5px solid #fff;
        }
        .owl-eye.closed::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background: #23272f;
          border-radius: 2px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        .owl-dark .owl-eye.closed::after {
          background: #fff;
        }
        .owl-eye.open .pupil {
          background: #23272f;
        }
        .owl-dark .owl-eye.open .pupil {
          background: #fff;
        }
        .pupil {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #23272f;
          margin: 0 auto;
          transition: background 0.5s;
        }
        .owl-beak {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 16px;
          background: #fbbf24;
          border-radius: 50% 50% 80% 80%;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          z-index: 3;
        }

        .page-content {
          margin-top: 16vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          text-align: center;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 0.5em;
          background: linear-gradient(90deg, #6366f1 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .subtitle {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 2em;
          font-weight: 500;
        }
        body.dark .subtitle {
          color: #cbd5e1;
        }

        .transition-overlay {
          position: fixed;
          width: 120px;
          height: 120px;
          background-color: rgba(99, 102, 241, 0.7);
          z-index: 1000;
          pointer-events: none;
          border-radius: 50%;
          transform: scale(0);
          transform-origin: center;
          left: 2vw;
          top: 3vh;
          transition: background 0.5s;
        }
        body.dark .transition-overlay {
          background-color: rgba(251, 191, 36, 0.7);
        }

        .zoom-in {
          transform: scale(0);
        }

        .expand {
          animation: enterFromButton 1.2s forwards cubic-bezier(0.4, 0, 0.2, 1);
        }

        .shrink {
          animation: exitToButton 1.2s forwards cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes enterFromButton {
          0% {
            transform: scale(0);
            opacity: 0.7;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(30);
            opacity: 0;
          }
        }

        @keyframes exitToButton {
          0% {
            transform: scale(30);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0.7;
          }
        }

        @media (max-width: 900px) {
          .owl-toggle {
            width: 70px;
            height: 70px;
          }
          .owl-face {
            width: 62px;
            height: 62px;
          }
          .transition-overlay {
            width: 80px;
            height: 80px;
          }
        }
        @media (max-width: 600px) {
          .owl-toggle {
            width: 54px;
            height: 54px;
            top: 2vh;
            left: 2vw;
          }
          .owl-face {
            width: 44px;
            height: 44px;
          }
          .transition-overlay {
            width: 50px;
            height: 50px;
            left: 2vw;
            top: 2vh;
          }
          h1 {
            font-size: 7vw;
          }
        }
      `}</style>
    </>
  );
};

export default OwlDarkModeToggle;
