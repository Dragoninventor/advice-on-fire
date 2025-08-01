import { CSSProperties, ReactNode } from "react";

export const Category = ({
	children,
	label,
	className,
	style,
}: {
	children: ReactNode;
	label?: string;
	className?: string;
	style?: CSSProperties;
}) => {
	return (
		<section
			className={`${className ? `${className} ` : ""}flex flex-col`}
			style={style}
		>
			{label && (
				<h2
					className={
						"z-10 -mb-6 ml-6 self-start rounded-full bg-gray-50 px-7 py-2.5 text-gray-900 shadow shadow-gray-700/30"
					}
				>
					{label}
				</h2>
			)}
			<div className={"grid grid-cols-1 gap-4"}>{children}</div>
		</section>
	);
};
