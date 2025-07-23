"use client";
import React, { useRef, useEffect } from "react";

const FlyingBirdLogo = ({
  primaryColor = "#EC4899",
  accentColor = "#F9A8D4",
  beakColor = "#F59E42",
  eyeColor = "#222",
  style = {},
  className = "",
  width = 180,
  height = 120,
  absolute = false,
  zIndex = 1,
}) => {
  const leftWingRef = useRef(null);
  const rightWingRef = useRef(null);
  const birdGroupRef = useRef(null);
  const shadowRef = useRef(null);

  const baseSvgWidth = 300;
  const baseSvgHeight = 200;

  const [bounceFrame, setBounceFrame] = React.useState(0);

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
      setBounceFrame(frame);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => raf && cancelAnimationFrame(raf);
  }, [width, height]);

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
    pointerEvents: "none",
    ...style,
  };

  const getBounceY = (i, frame, amplitude = 7, speed = 0.18, phase = 0) => {
    return Math.sin(frame * speed + i * 0.5 + phase) * amplitude;
  };

  const server404 = "Updates will be announced soon. Stay tuned!";
  const server404Color = "orange";

  const tagX = 70;
  const tagY = 120;

  const tagWidth = 90;
  const tagHeight = 32;
  const tagRadius = 8;

  const stringStartX = 150;
  const stringStartY = 100;
  const stringEndX = tagX + tagWidth / 2;
  const stringEndY = tagY;

  return (
    <div style={containerStyle} className={className}>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          pointerEvents: "auto",
        }}
      ></div>
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
          <g ref={leftWingRef}>
            <path
              d="M90,100 Q40,60 60,140 Q100,120 90,100"
              fill={accentColor}
              stroke={primaryColor}
              strokeWidth="4"
            />
          </g>
          <g ref={rightWingRef}>
            <path
              d="M210,100 Q260,60 240,140 Q200,120 210,100"
              fill={accentColor}
              stroke={primaryColor}
              strokeWidth="4"
            />
          </g>
          <ellipse
            cx="150"
            cy="110"
            rx="60"
            ry="38"
            fill={primaryColor}
            stroke={accentColor}
            strokeWidth="4"
          />
          <circle
            cx="200"
            cy="80"
            r="28"
            fill={primaryColor}
            stroke={accentColor}
            strokeWidth="4"
          />
          <polygon
            points="228,80 250,88 228,92"
            fill={beakColor}
            stroke="#EAB308"
            strokeWidth="2"
          />
          <circle cx="215" cy="80" r="4.5" fill={eyeColor} />
          <circle cx="217" cy="79" r="1.2" fill="#fff" />
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
          <line
            x1={stringStartX}
            y1={stringStartY}
            x2={stringEndX}
            y2={stringEndY}
            stroke="#eab308"
            strokeWidth="2"
          />
          <rect
            x={tagX}
            y={tagY}
            rx={tagRadius}
            ry={tagRadius}
            width={tagWidth}
            height={tagHeight}
            fill="#fff"
            stroke="#e11d48"
            strokeWidth="2"
            opacity="0.95"
            filter="url(#tagShadow)"
          />
          <defs>
            <filter id="tagShadow" x="0" y="0" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodColor="#000"
                floodOpacity="0.12"
              />
            </filter>
          </defs>
          <g>
            {server404.split("").map((char, i) => {
              const fontSize = 18;
              const totalLen = server404.length;
              const charWidth = fontSize * 0.62;
              const textTotalWidth = charWidth * totalLen;
              const startX = tagX + (tagWidth - textTotalWidth) / 2;
              const bounceY = getBounceY(i, bounceFrame, 7, 0.18, 0);
              return (
                <text
                  key={i}
                  x={startX + i * charWidth}
                  y={tagY + tagHeight / 2 + fontSize / 3 + bounceY}
                  fontFamily="monospace, Menlo, monospace"
                  fontSize={fontSize}
                  fontWeight="bold"
                  fill="#e11d48"
                  style={{
                    userSelect: "none",
                    pointerEvents: "none",
                    transition: "y 0.1s",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </text>
              );
            })}
          </g>
        </g>
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
