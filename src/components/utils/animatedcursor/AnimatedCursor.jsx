"use client";

import { useEffect } from "react";

// Animated custom cursor component
export default function AnimatedCursor() {
  useEffect(() => {
    // ✅ CHANGE FOLDER NAME & FRAME COUNT BELOW
    const folder = "cursor6"; // Folder inside /public/
    const frameCount = 3; // Number of frames in that folder
    const frames = [];

    for (let i = 1; i <= frameCount; i++) {
      frames.push(`/${folder}/frame${i}.png`);
    }

    let index = 0;
    const fps = 10;

    const interval = setInterval(() => {
      document.body.style.cursor = `url(${frames[index]}), auto`;
      index = (index + 1) % frames.length;
    }, 1000 / fps);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return null; // No visible JSX
}
