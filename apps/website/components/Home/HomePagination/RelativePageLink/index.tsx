import homepagePageNumberToLink from "@/utilities/homepagePageNumberToLink";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import Link from "next/link";

const RelativePageLink = ({
	type,
	currentPage,
}: {
	type: "prev" | "next";
	currentPage: number;
}) => {
	switch (type) {
		case "prev":
			return (
				<Link
					href={homepagePageNumberToLink(currentPage - 1)}
					rel={"prev"}
					className={
						"inline-flex items-center gap-2.5 text-slate-700 underline"
					}
				>
					<IoChevronBackSharp size={"0.75rem"} />
					<span>Newer Posts</span>
				</Link>
			);
		case "next":
			return (
				<Link
					href={homepagePageNumberToLink(currentPage + 1)}
					rel={"next"}
					className={"flex items-center gap-1.5 text-slate-700"}
				>
					<span className={"underline"}>Older Posts</span>
					<IoChevronForwardSharp size={"0.75rem"} />
				</Link>
			);
		default:
			return null;
	}
};

export default RelativePageLink;
