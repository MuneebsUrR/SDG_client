/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|spinner|ripple).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#DD1367",
        secondary: "#23036E",
        light: "#efeee5",
        gray:"#D6EBD8",
        buttonGray:"#F5F5F5",
        dark: "#151a17",
        lightpink:'#F7F1F7',
        footer :'#D6EBD8'
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#DD1367",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#23036E",
              foreground: "#FFFFFF",
            },
            focus: "#BEF264",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#DD1367",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#23036E",
              foreground: "#FFFFFF",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
}