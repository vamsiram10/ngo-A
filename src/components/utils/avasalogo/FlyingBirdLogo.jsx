"use client";
import React, { useRef, useEffect } from "react";

/**
 * FlyingBirdLogo
 * Animated SVG logo of a stylized bird in flight, with flapping wings.
 * Modern, minimal, and suitable for a foundation or creative org.
 * This version moves the bird smoothly from left to right, continuously, and goes on forever.
 *
 * NOTE: To ensure this does not interfere with the navbar or other UI,
 * the logo is now absolutely positioned in its parent, not fixed to the viewport.
 *
 * To use as a background or hero element, wrap in a container with relative positioning.
 *
 * This change should resolve issues with the navbar not working (e.g., not clickable).
 */
const FlyingBirdLogo = ({
  primaryColor = "#EC4899", // pink-500
  accentColor = "#F9A8D4", // pink-300
  beakColor = "#F59E42", // orange
  eyeColor = "#222",
  style = {},
  className = "",
  width = 180, // default width of the container in px
  height = 120, // default height of the container in px
  absolute = false, // allow parent to control positioning
  zIndex = 1, // default zIndex, can be overridden
}) => {
  const leftWingRef = useRef(null);
  const rightWingRef = useRef(null);
  const birdGroupRef = useRef(null);
  const shadowRef = useRef(null);

  // We'll use a fixed size for the container and SVG
  const baseSvgWidth = 300;
  const baseSvgHeight = 200;

  useEffect(() => {
    let frame = 0;
    let raf;
    const scale = Math.min(width / baseSvgWidth, height / baseSvgHeight);
    const birdWidth = baseSvgWidth * 0.6 * scale;
    const minX = -birdWidth;
    const maxX = width;
    let x = minX;

    const waveAmplitude = 0.09 * height;
    const waveFrequency = 0.025;
    const moveSpeed = Math.max(1, width / 120);
    const centerY = height / 2;

    const animate = () => {
      const wingAngle = Math.sin(frame * 0.12) * 28;
      x += moveSpeed;
      if (x > maxX) {
        x = minX;
      }
      const floatY = Math.sin(x * waveFrequency) * waveAmplitude;

      if (leftWingRef.current)
        leftWingRef.current.setAttribute(
          "transform",
          `rotate(${-wingAngle}, 90, 100)`
        );
      if (rightWingRef.current)
        rightWingRef.current.setAttribute(
          "transform",
          `rotate(${wingAngle}, 210, 100)`
        );
      if (birdGroupRef.current)
        birdGroupRef.current.setAttribute(
          "transform",
          `translate(${x},${centerY - 100 * scale + floatY}) scale(${scale})`
        );
      if (shadowRef.current)
        shadowRef.current.setAttribute("cx", 150 * scale + x);

      frame++;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => raf && cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [width, height]);

  // Use absolute or static positioning, not fixed, so navbar is clickable
  const containerStyle = {
    position: absolute ? "absolute" : "static",
    top: 0,
    left: 0,
    width,
    height,
    zIndex,
    background: "none",
    overflow: "hidden",
    display: "block",
    pointerEvents: "none", // ensure logo never blocks mouse events
    ...style,
  };

  return (
    <div style={containerStyle} className={className}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          background: "none",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <g ref={birdGroupRef}>
          {/* Left Wing */}
          <g ref={leftWingRef}>
            <path
              d="M90,100 Q40,60 60,140 Q100,120 90,100"
              fill={accentColor}
              stroke={primaryColor}
              strokeWidth="4"
            />
          </g>
          {/* Right Wing */}
          <g ref={rightWingRef}>
            <path
              d="M210,100 Q260,60 240,140 Q200,120 210,100"
              fill={accentColor}
              stroke={primaryColor}
              strokeWidth="4"
            />
          </g>
          {/* Bird Body */}
          <ellipse
            cx="150"
            cy="110"
            rx="60"
            ry="38"
            fill={primaryColor}
            stroke={accentColor}
            strokeWidth="4"
          />
          {/* Bird Head */}
          <circle
            cx="200"
            cy="80"
            r="28"
            fill={primaryColor}
            stroke={accentColor}
            strokeWidth="4"
          />
          {/* Beak */}
          <polygon
            points="228,80 250,88 228,92"
            fill={beakColor}
            stroke="#EAB308"
            strokeWidth="2"
          />
          {/* Eye */}
          <circle cx="215" cy="80" r="4.5" fill={eyeColor} />
          <circle cx="217" cy="79" r="1.2" fill="#fff" />
          {/* Tail Feathers */}
          <path
            d="M95,140 Q80,170 120,150"
            stroke={primaryColor}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M105,145 Q100,180 135,155"
            stroke={accentColor}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        {/* Optional: Add a subtle shadow for depth, moves with bird */}
        <ellipse
          ref={shadowRef}
          cx={150}
          cy={height - 15}
          rx={60 * Math.min(width / baseSvgWidth, height / baseSvgHeight)}
          ry={10 * Math.min(width / baseSvgWidth, height / baseSvgHeight)}
          fill="#000"
          opacity="0.08"
          style={{ transition: "cx 0.1s" }}
        />
      </svg>
    </div>
  );
};

export default FlyingBirdLogo;
