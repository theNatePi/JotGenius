/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        main: ["Lato", "sans-serif"],
        input: ["Roboto Mono", "monospace"]
      },  
      colors: {
        background: '#080716',
        card_0: '#D9D9D9',
        card_1: '#737373',
      },
    },
  },
  plugins: [require("daisyui")],
};
