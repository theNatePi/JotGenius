const {nextui} = require('@nextui-org/theme');
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",  
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
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
        gradient_0: '#080716',
        gradient_1: '#110f2b',
        card_0: '#D9D9D9',
        card_1: '#737373',
        typing_cursor: '#333355'
      },
    },
  },
  darkMode: "class",
  plugins: [require('daisyui'), nextui(), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
