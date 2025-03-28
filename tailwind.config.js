/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  darkMode: "class", // or'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#ffc727",
        dark: "#111111"
      },
      container:{
        center:"true",
        padding:{
          default: "1rem",
          sm: "!rem"
        },
      },
    },
  },
  plugins: [],
}

