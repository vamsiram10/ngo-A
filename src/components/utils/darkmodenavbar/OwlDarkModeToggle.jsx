"use client";

import { useRef, useState } from "react";

/**
 * OwlDarkModeToggle
 *
 * This version is designed to be used *behind* the navbar, i.e. as a background overlay
 * that animates behind the navbar and page content.
 *
 * To use this, place <OwlDarkModeToggle /> as a sibling *before* your Navbar in the layout,
 * and use absolute/fixed positioning with a negative z-index so the overlay is behind the navbar.
 *
 * The button itself is visually hidden (screen-reader only) so the toggle can be triggered
 * by a custom button in the Navbar, or you can expose the button as needed.
 */

const OwlDarkModeToggle = ({ triggerRef }) => {
  const overlayRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  // Set body class directly for global dark/light mode
  if (typeof window !== "undefined") {
    document.body.classList.remove(darkMode ? "light" : "dark");
    document.body.classList.add(darkMode ? "dark" : "light");
  }

  // Expose toggleMode for external trigger (e.g. from Navbar)
  const toggleMode = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    overlay.className = "transition-overlay-back zoom-in-back";

    if (!darkMode) {
      requestAnimationFrame(() => {
        overlay.classList.add("expand-back");
      });
      setTimeout(() => {
        setDarkMode(true);
      }, 1250);
    } else {
      overlay.classList.remove("expand-back");
      overlay.classList.add("shrink-back");
      setTimeout(() => {
        setDarkMode(false);
      }, 1250);
    }
  };

  // If a ref is passed, allow parent to trigger toggleMode
  if (triggerRef) {
    triggerRef.current = toggleMode;
  }

  return (
    <>
      {/* Visually hidden button for accessibility, can be removed if not needed */}
      <button
        className="owl-toggle-back sr-only"
        onClick={toggleMode}
        aria-label="Toggle dark mode"
        type="button"
        tabIndex={-1}
        style={{ display: "none" }}
      >
        Toggle dark mode
      </button>

      {/* Overlay sits behind navbar and content */}
      <div
        ref={overlayRef}
        className="transition-overlay-back zoom-in-back"
      ></div>

      <style jsx global>{`
        /* Overlay for background transition, sits behind navbar/content */
        .transition-overlay-back {
          position: fixed;
          top: -15vh;
          left: 100vw;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 0; /* Behind navbar (which should be z-index: 10 or higher) */
          pointer-events: none;
          border-radius: 50%;
          transform: scale(0);
          transform-origin: center;
          transition: none;
        }

        .zoom-in-back {
          top: -15vh;
          left: 100vw;
          transform: scale(0);
        }

        .expand-back {
          animation: enterFromTopRightBack 2.5s forwards
            cubic-bezier(0.4, 0, 0.2, 1);
        }

        .shrink-back {
          animation: exitToBottomLeftBack 2.5s forwards
            cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes enterFromTopRightBack {
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

        @keyframes exitToBottomLeftBack {
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

        /* Remove overflow: hidden from html/body so overlay can cover full page */
        html,
        body {
          overflow: visible !important;
        }
      `}</style>
    </>
  );
};

export default OwlDarkModeToggle;
