import React from "react";

export default function Blogs() {
  return (
    <div className="absolute top-2 left-150 flex items-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Rotating Loader */}
        <div className="flex items-center justify-center mb-8 w-20 h-20">
          <span
            className="inline-block w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"
            style={{ borderTopColor: "transparent" }}
            aria-label="Loading"
          ></span>
        </div>
        <h1 className="text-4xl font-extrabold text-transparent text-center tracking-wider bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-400 bg-clip-text select-none animate-pulse">
          Coming Soon
        </h1>
      </div>
    </div>
  );
}
