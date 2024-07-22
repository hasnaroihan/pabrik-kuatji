/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/*.html",
        "./*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                opensans: ['"Open Sans"'],
                mansalva: ['"Mansalva"'],
                patrick: ['"Patrick Hand SC"'],
                gochi: ['"Gochi Hand"'],
                plusjakarta: ['"Plus Jakarta Sans"'],
            },
            colors: {
                bluesky: {
                    DEFAULT: "#92E9FC",
                },
                accent: {
                    DEFAULT: "#0F6375",
                },
            },
            gridColumn: {
                "span-2": "span 2 / span 2",
                "span-3": "span 3 / span 3",
            },
            screens: {
                lgtab: {
                    raw: "((max-width: 1024px) and (min-height: 1088px))",
                },
            },
            keyframes: {
                scrollx: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                scrollxDelay: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".backface-hidden": {
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden",
                },
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
            });
        }),
    ],
};
