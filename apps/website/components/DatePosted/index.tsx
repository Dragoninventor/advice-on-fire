import { DateTime } from "luxon";
import React from "react";
import { formatAuthors } from "@/utilities/formatAuthors";
import { Post } from "@/payload-types";

const DatePosted = ({
	date,
	authors,
}: {
	date: DateTime;
	authors: Post["populatedAuthors"];
}) => {
	const toOrdinal = (n: number) => {
		let s = ["th", "st", "nd", "rd"];
		let v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	};

	const formattedDate = `${date.toFormat("MMMM")} ${toOrdinal(date.day)}, ${
		date.year
	}`;

	return (
		<p
			className={`font-(family-name:--font-caption-default) text-sm tracking-tight text-gray-600`}
		>
			Posted on{" "}
			<time dateTime={date.toISODate() as string}>{formattedDate}</time>
			{authors ? (
				<span>
					, by{" "}
					<span className={"underline"}>
						{formatAuthors(authors)}.
					</span>
				</span>
			) : (
				"."
			)}
		</p>
	);
};

export default DatePosted;
