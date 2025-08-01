import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				sunrise:
					"linear-gradient(135deg, rgba(11, 0, 34, 1) 0%, rgba(87, 0, 139, 1) 52%, rgba(185, 0, 171, 1) 82%, rgba(255, 0, 112, 1) 100%)",
			},
		},
	},
	plugins: [],
};
export default config;
