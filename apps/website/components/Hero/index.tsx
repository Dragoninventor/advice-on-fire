import type { Post } from "@/payload-types";
import FeaturedImage from "../FeaturedImage";
import DatePosted from "../DatePosted";
import { DateTime } from "luxon";
import RichText from "@/components/RichText";
import { Content } from "@/components/Content";
import { Title } from "@/components/Content/TitleHeading";

export const PostHero = ({ post }: { post: Post }) => {
	const {
		content,
		heroImage,
		populatedAuthors: authors,
		publishedAt,
		title,
	} = post;

	// const hasAuthors =
	// 	authors && authors.length > 0 && formatAuthors(authors) !== "";

	return (
		<>
			<FeaturedImage image={heroImage} />
			<Content>
				<Title>{title}</Title>
				{publishedAt && (
					<DatePosted
						date={DateTime.fromISO(publishedAt)}
						authors={authors}
					/>
				)}
				<RichText data={content} />
			</Content>
		</>
	);
};
