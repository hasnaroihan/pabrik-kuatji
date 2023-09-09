/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
    "./build/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"'],
        mansalva: ['"Mansalva"'],
        patrick: ['"Patrick Hand SC"'],
        gochi: ['"Gochi Hand"'],
        plusjakarta: ['"Plus Jakarta Sans"']
      },
      colors: {
        bluesky: {
          DEFAULT: "#92E9FC"
        },
        accent: {
          DEFAULT: "#0F6375"
        }
      }
    }
  },
  plugins: [
    plugin(function({addUtilities}) {
      
        addUtilities({
          ".no-scrollbar::-webkit-scrollbar" : {
              "display": "none"
            },
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none"
            },
          }
        )
        })
  ],
}

