import { ReactNode } from "react";
import Providers from "../../components/Providers";
import "../globals.css";
import {
	default_caption_font,
	default_font,
	default_title_font,
} from "@/fonts";
import SiteHeader from "@/components/SiteHeader";

const HomeLayout = async ({ children }: { children: ReactNode }) => {
	return (
		<html lang={"en-us"} suppressHydrationWarning>
			<body
				// 	fontFamily: `var(--font-cardcontent-default)`,
				className={`${default_font.variable} ${default_title_font.variable} ${default_caption_font.variable} flex flex-col`}
			>
				<div
					className={
						"grid min-h-screen w-full max-w-[96rem] grid-rows-[auto_1fr_auto] gap-2.5 self-center py-1.5 sm:px-5 sm:py-2.5 md:px-7 md:py-5"
					}
				>
					<Providers>
						<SiteHeader />
						{children}
					</Providers>
				</div>
			</body>
		</html>
	);
};

export default HomeLayout;
