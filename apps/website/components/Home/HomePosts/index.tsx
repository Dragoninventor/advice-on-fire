import Card from "@/components/Card/card";
import React from "react";
import { Post } from "@/payload-types";
import { PostPreview } from "@/components/Home/HomePosts/PostPreview";
import { PaginatedDocs } from "payload";
import { Category } from "@/components/Home/Category";
import { Content } from "@/components/Content";

const HomePosts = ({
	postsPage,
	page,
}: {
	postsPage: PaginatedDocs<Post>;
	page: number;
}) => {
	const posts = postsPage.docs;

	if (page === 1 && postsPage.totalDocs > 1) {
		return (
			<div className={"grid grid-cols-1 gap-4"}>
				<Category label={posts.length > 1 ? "Latest Post" : undefined}>
					<PostPreview post={posts[0]} isOdd={false} />
				</Category>
				{posts.length > 1 && (
					<Category
						label={posts.length > 2 ? "Recent Posts" : undefined}
					>
						{posts.slice(1).map((post, index: number) => {
							return (
								<PostPreview
									post={post}
									isOdd={!(index % 2)}
									key={index}
								/>
							);
						})}
					</Category>
				)}
			</div>
		);
	}

	if (postsPage.totalDocs > 0) {
		return (
			<div className={"grid grid-cols-1 gap-4"}>
				<Category>
					{posts.map((post, index: number) => {
						return (
							<PostPreview
								post={post}
								isOdd={!!(index % 2)}
								key={index}
							/>
						);
					})}
				</Category>
			</div>
		);
	}

	return (
		<Card style={{ height: "100%" }}>
			<Content>
				<h2
					className={
						"font-(family-name:--font-title-default) mt-4 text-center text-3xl text-gray-900 md:mb-4 lg:text-4xl"
					}
				>
					{page === 1 ? "There are no posts yet!" : "No more posts!"}
				</h2>
			</Content>
		</Card>
	);
};

export default HomePosts;
