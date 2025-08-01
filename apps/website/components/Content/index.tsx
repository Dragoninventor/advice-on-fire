import { ReactNode } from "react";

export const Content = ({
	children,
	className,
	wrapperClassName,
}: {
	children: ReactNode;
	className?: string;
	wrapperClassName?: string;
}) => {
	return (
		<div
			className={`flex w-full flex-col items-center ${wrapperClassName ? ` ${wrapperClassName}` : "px-6 py-6 sm:px-12 md:px-16"}`}
		>
			<article
				className={`font-(family-name:--font-default) w-full max-w-2xl text-gray-800 [&_p:not(:last-child)]:mb-5 [&_p]:leading-relaxed md:[&_p]:text-justify ${
					className ? ` ${className}` : ""
				}`}
			>
				{children}
			</article>
		</div>
	);
};
