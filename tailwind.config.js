/**
 * Legacy Qwik config. Next.js PostCSS uses tailwind.config.ts.
 * Keep content paths aligned so a default Tailwind lookup cannot drop app/ styles.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./lib/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        sand: "#F4EFE6",
        ivory: "#FAF7F2",
        terracotta: {
          DEFAULT: "#C4A574",
          dark: "#9A7B4F",
          light: "#E0C9A4",
        },
        ink: "#12100E",
      },
    },
  },
  plugins: [],
};
