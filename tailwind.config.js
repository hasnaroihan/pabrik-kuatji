/** @type {import('tailwindcss').Config} */
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
        mansalva: ['"Mansalva"']
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
  plugins: [],
}

