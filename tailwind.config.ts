import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@brainberg/dashboard/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    fontFamily: {
      inter: "Inter",
    },
    extend: {
      colors: {
        bgYellow: "#FED789",
        blackGray: "#573E0C",
        darkBlack: "#493204",
        gray: "#767676",
        darkGray: "#868686",
        "black-gray-100": "#333333",
        "black-gay-300": "#131B45",
        "purple-200": "#91A0E2",
        "purple-300": "#7584D7",
        "cyan-600": "#06B7DB",
        "blue-900": "#4906DB",
        "gray-300": "#BDC4D0",
        "gray-100": "#F9FAFB",
        "black-200": "#475467",
        "black-500": "#101828",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(276.47deg, #FF5900 19.58%, #5970D5 81.66%)",

        "yellow-bg-gradient":
          "linear-gradient(179.38deg, #FED789 -24.19%, #FFFFFF 27.75%)",
        "yellow-dark-gradient":
          "linear-gradient(276.47deg, #FF5900 19.58%, #FFB31A 81.66%)",
        "login-bg": `url('../public/Images/bg-gradient.png')`,
        radialBar: "linear-gradient(-0.3deg, #8DEDB7 0deg, #246E44 360deg)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1F386B",
              50: "#E6F1FE",
              100: "#CCE3FD",
              600: "#005BC4",
            },
            foreground: { DEFAULT: "#11181C", 500: "#71717A", 800: "#27272A" },
            default: {
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              900: "#18181B",
              foreground: "#000000",
            },
            warning: {
              50: "#FEFCE8",
              100: "#FDEDD3",
              200: "#FBDBA7",
              400: "#F7B750",
              500: "#F5A524",
              600: "#C4841D",
              700: "#936316",
              800: "#62420E",
            },
            // mainBg: "#F7FBFF",
            danger: {
              DEFAULT: "#F31260",
              50: "#FEE7EF",
              200: "#FAA0BF",
              300: "#FF7171",
            },
            secondary: {
              DEFAULT: "#F5A524",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#17C964",
              50: "#E8FAF0",
              200: "#A2E9C1",
              600: "#12A150",
            },
            // cyan: {
            //   100: "#E6FAFE",
            //   200: "#D7F8FE",
            //   600: "#06B7DB",
            //   800: "#0E8AAA",
            //   900: "#053B48",
            // },
            // pink: {
            //   50: "#FFEDFA",
            //   400: "#FF71D7",
            //   700: "#992F7B",
            // },
          },
        },
      },
    }),
  ],
};
