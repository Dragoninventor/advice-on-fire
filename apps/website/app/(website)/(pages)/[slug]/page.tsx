import Card from "@/components/Card/card";
import React from "react";
import { getPayload } from "payload";
import { Metadata } from "next";
import config from "@payload-config";
import { PostHero } from "@/components/Hero";
import { notFound } from "next/navigation";
import { queryPostBySlug } from "@/utilities/queryPostBySlug";

export async function generateStaticParams() {
	const payload = await getPayload({ config: config });
	const posts = await payload.find({
		collection: "posts",
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		select: {
			slug: true,
		},
	});

	return posts.docs.map(({ slug }) => {
		return { slug };
	});
}

type Args = {
	params: Promise<{
		slug?: string;
	}>;
};

export default async function Page({ params: paramsPromise }: Args) {
	const { slug = "home" } = await paramsPromise;

	const post = await queryPostBySlug({
		slug: slug,
	});

	if (!post) {
		notFound();
	}

	return (
		<main className={""}>
			<Card className={`h-full px-2 pb-4 pt-2`}>
				<PostHero post={post} />
			</Card>
		</main>
	);
}

export const generateMetadata = async ({
	params: paramsPromise,
}: Args): Promise<Metadata> => {
	const { slug = "home" } = await paramsPromise;
	const post = await queryPostBySlug({ slug: slug });

	return {
		title: post.title ? `${post.title} - Advice On Fire` : "Advice On Fire",
	};
};
