import Card from "@/components/Card/card";
import { Post } from "@/payload-types";
import FeaturedImage from "../../../FeaturedImage";
import Link from "next/link";
import DatePosted from "../../../DatePosted";
import { DateTime } from "luxon";
import RichText from "@/components/RichText";
import { Content } from "@/components/Content";

export const PostPreview = async ({
	post,
	isOdd,
}: {
	post: Post;
	isOdd?: boolean;
}) => {
	const url = `/${post.slug}`;

	const firstParagraph = post.content.root.children.filter((node) => node.type === "paragraph")
			.slice(0, 1);
	const postPreviewContent = {
		...post.content,
		root: {
			...post.content.root,
			children: firstParagraph.length > 0 ? firstParagraph : post.description.root.children,
		},
	};

	return (
		<Card
			className={`group grid grid-cols-1 gap-2.5 px-2 pb-6 pt-2 lg:grid-cols-2`}
		>
			<FeaturedImage
				image={post.heroImage}
				className={`${isOdd ? `lg:order-last` : ""}`}
			/>
			<Content wrapperClassName={"px-6 pt-8 pb-6 md:px-8"}>
				<h3
					className={
						"font-(family-name:--font-title-default) text-3xl leading-relaxed text-gray-900 md:mb-4 lg:text-4xl"
					}
				>
					<Link href={url}>{post.title}</Link>
				</h3>
				{post.publishedAt && (
					<DatePosted
						date={DateTime.fromISO(post.publishedAt)}
						authors={post.populatedAuthors}
					/>
				)}
				<RichText data={postPreviewContent} />
				<p>
					<Link
						href={url}
						className={`mt-2.5 block w-fit rounded-md border border-slate-300 bg-slate-100 px-4 py-1.5 tracking-wide text-slate-700 shadow-sm shadow-rose-500/0 transition-[background-color,border-color,box-shadow,color] hover:border-slate-300/0 hover:bg-pink-600 hover:text-pink-50 hover:shadow-pink-600/30 hover:transition-[background-color,box-shadow] motion-reduce:transition-none md:mt-4`}
						tabIndex={-1}
						aria-hidden
					>
						<span className={"underline"}>Continue Reading</span>{" "}
						<span>→</span>
					</Link>
				</p>
			</Content>
		</Card>
	);
};
