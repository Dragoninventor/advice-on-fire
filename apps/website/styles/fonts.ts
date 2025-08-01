import { Playfair_Display, Roboto, Varta } from "next/font/google";

export const default_font = Varta({
	subsets: ["latin"],
	weight: ["300"],
	variable: "--font-default",
	fallback: ["sans-serif"],
});

export const default_title_font = Playfair_Display({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-title-default",
	fallback: ["sans-serif"],
});

export const default_caption_font = Roboto({
	subsets: ["latin"],
	weight: ["300"],
	variable: "--font-caption-default",
	fallback: ["sans-serif"],
});
