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
};
