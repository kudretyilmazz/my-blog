/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = {
	reactStrictMode: true,
	...nextTranslate(),
	swcMinify: true,
	env: {
		NEXT_PUBLIC_END_POINT: process.env.NEXT_PUBLIC_END_POINT,
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
