const { nextui } = require('@nextui-org/theme');
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|modal|navbar|progress|ripple|spinner).js"
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
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
        background_complement: '#0A061BBB',
        test_color: '#D3D1E9',
        gradient_0: '#080716',
        gradient_1: '#110f2b',
        card_0: '#D9D9D999',
        card_1: '#737373FF',
        card_2: '#472B6E55',
        card_3: '#7B4BBFAA',
        typing_cursor: '#333355',
        
        navbar_button_selected: '#9e58d3',
        navbar_button_secondary: '#734696',

        title_0: '#b85fd3',
        sub_0: '#ca99d8'
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
