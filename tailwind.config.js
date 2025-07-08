// tailwind.config.mjs
export default {
  theme: {
    extend: {
      screens: {
        sm: "40rem", // 640px
        md: "48rem", // 768px
        lg: "64rem", // 1024px
        xl: "80rem", // 1280px
        "2xl": "96rem", // 1536px
      },
    },
  },
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  plugins: [],

  darkMode: ["class"],
};

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add this custom shadow for the card hover glow
      boxShadow: {
        'pink-glow': '0 0 20px rgba(236, 72, 153, 0.3)',
      }
    },
  },
  plugins: [],
};