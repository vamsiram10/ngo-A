"use client";
import React, { useRef, useEffect } from "react";

/**
 * WalkingDogWithPerson
 * Shows a person walking a dog with basic SVG animation.
 * The dog and person gently move legs and bob as if walking.
 */
const WalkingDogWithPerson = ({
  width = 300,
  height = 200,
  style = {},
  className = "",
}) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    let raf;

    const animate = () => {
      const legAngle = Math.sin(frame * 0.2) * 15;
      const y = Math.sin(frame * 0.1) * 4;

      if (sceneRef.current) {
        sceneRef.current.setAttribute("transform", `translate(0, ${y})`);

        const dogFrontLeg = sceneRef.current.querySelector("#dogFrontLeg");
        const dogBackLeg = sceneRef.current.querySelector("#dogBackLeg");
        const personFrontLeg =
          sceneRef.current.querySelector("#personFrontLeg");
        const personBackLeg = sceneRef.current.querySelector("#personBackLeg");
        const leash = sceneRef.current.querySelector("#leash");

        if (dogFrontLeg)
          dogFrontLeg.setAttribute("transform", `rotate(${legAngle},80,140)`);
        if (dogBackLeg)
          dogBackLeg.setAttribute("transform", `rotate(${-legAngle},60,140)`);
        if (personFrontLeg)
          personFrontLeg.setAttribute(
            "transform",
            `rotate(${legAngle},200,160)`
          );
        if (personBackLeg)
          personBackLeg.setAttribute(
            "transform",
            `rotate(${-legAngle},180,160)`
          );
        if (leash) leash.setAttribute("d", `M100,100 Q110,110 120,${120 + y}`);
      }

      frame++;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => raf && cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", background: "none", ...style }}
      className={className}
    >
      <g ref={sceneRef} fill="none" stroke="#000" strokeWidth="3">
        {/* Dog body */}
        <ellipse cx="80" cy="120" rx="25" ry="15" fill="black" />
        <circle cx="100" cy="110" r="10" fill="black" />
        <circle cx="103" cy="108" r="2" fill="white" />
        {/* Dog tail */}
        <path d="M60,120 Q50,110 55,100" stroke="black" />
        {/* Dog legs */}
        <g id="dogFrontLeg">
          <line x1="80" y1="130" x2="80" y2="150" />
        </g>
        <g id="dogBackLeg">
          <line x1="60" y1="130" x2="60" y2="150" />
        </g>

        {/* Person head & body */}
        <circle cx="200" cy="60" r="15" fill="black" />
        <line x1="200" y1="75" x2="200" y2="130" stroke="black" />
        {/* Arms */}
        <line x1="200" y1="90" x2="180" y2="110" stroke="black" />
        <line x1="200" y1="90" x2="220" y2="110" stroke="black" />
        {/* Legs */}
        <g id="personFrontLeg">
          <line x1="200" y1="130" x2="220" y2="160" stroke="black" />
        </g>
        <g id="personBackLeg">
          <line x1="200" y1="130" x2="180" y2="160" stroke="black" />
        </g>

        {/* Leash */}
        <path id="leash" d="M100,100 Q110,110 120,120" stroke="blue" />
      </g>
    </svg>
  );
};

export default WalkingDogWithPerson;
