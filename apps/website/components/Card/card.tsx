import { CSSProperties, ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Card = ({
	children,
	id,
	className,
	style,
}: {
	children: ReactNode;
	id?: string;
	className?: string;
	style?: CSSProperties;
}) => {
	return (
		<div
			id={id}
			className={`relative rounded bg-gray-50 shadow ${
				inter.className
			}${className ? ` ${className}` : ""}`}
			style={style}
		>
			{children}
		</div>
	);
};

export default Card;
