import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        anton: ["Anton SC", "sans-serif"],  // Adding Anton SC font
        plexMono: ["IBM Plex Mono", "serif"],  // Adding IBM Plex Mono font
      },
      screens: {
        xl: "1200px", // Custom breakpoint
      },
    },
  },
  plugins: [],
});

export default config;
