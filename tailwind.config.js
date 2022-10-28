/** @type {import('tailwindcss').Config} */

const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heebo: "'Poppins', sans-serif",
			},
			colors: {
				primary: "#21243D",
				secondary: "#ff3c41",
				thirty: "#EDF7FA",
				lighttext: "#8695A4",
				generalBg: "#E5E5E5",
			},
		},
	},
	plugins: [lineClamp, require("@tailwindcss/typography")],
};
