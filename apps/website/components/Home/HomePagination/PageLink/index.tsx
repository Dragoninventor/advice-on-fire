import Link from "next/link";
import homepagePageNumberToLink from "@/utilities/homepagePageNumberToLink";

const PageLink = ({
	pageNumber,
	isCurrentPage,
}: {
	pageNumber: number;
	isCurrentPage?: boolean;
}) => {
	return (
		<Link
			className={
				"flex aspect-square h-8 w-full items-center justify-center rounded border border-gray-200 text-slate-600 aria-[current=page]:font-bold aria-[current=page]:text-slate-900 aria-[current=page]:underline"
			}
			href={homepagePageNumberToLink(pageNumber)}
			aria-current={isCurrentPage ? "page" : undefined}
		>
			{pageNumber}
		</Link>
	);
};

export default PageLink;
