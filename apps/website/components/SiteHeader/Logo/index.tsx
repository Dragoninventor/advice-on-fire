import Link from "next/link";

import smallLogo from "@/public/logo_icon.png";
import fullLogo from "@/public/logo.png";
import { Image } from "@/components/Image";

const Logo = () => {
	return (
		<>
			{/* Mobile Icon */}
			<Link
				href={"/"}
				className={"relative h-full pb-[2px] md:hidden"}
				style={{
					aspectRatio: `${smallLogo.width / smallLogo.height} / 1`,
				}}
			>
				<Image
					src={smallLogo}
					alt={"Advice On Fire"}
					className={"object-contain"}
					priority
					quality={100}
					draggable={false}
				/>
			</Link>
			{/* Desktop Icon */}
			<Link
				href={"/"}
				className={"relative hidden h-full md:block"}
				style={{
					aspectRatio: `${fullLogo.width / fullLogo.height} / 1`,
				}}
			>
				<Image
					src={fullLogo}
					alt={"Advice On Fire"}
					className={"object-contain"}
					priority
					quality={100}
					draggable={false}
				/>
			</Link>
		</>
	);
};

export default Logo;
