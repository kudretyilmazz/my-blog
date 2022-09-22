/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = {
	reactStrictMode: true,
	...nextTranslate(),
	swcMinify: true,
	env: {
		NEXT_PUBLIC_END_POINT: process.env.NEXT_PUBLIC_END_POINT,
	},
};

module.exports = nextConfig;
