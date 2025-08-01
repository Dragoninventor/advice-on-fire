import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
	return (
		<h1
			className={
				"font-(family-name:--font-title-default) mb-2.5 text-pretty text-3xl leading-relaxed text-gray-900 md:text-5xl"
			}
		>
			{children}
		</h1>
	);
};
