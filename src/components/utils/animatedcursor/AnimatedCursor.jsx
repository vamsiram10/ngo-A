"use client";

import { useEffect } from "react";

export default function AnimatedCursor() {
  useEffect(() => {
    const folder = "cursor6";
    const frameCount = 3;
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

    return () => clearInterval(interval);
  }, []);

  return null;
}
