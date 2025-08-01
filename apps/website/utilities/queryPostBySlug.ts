import { cache } from "react";
import { draftMode } from "next/headers";
import { getPayload } from "payload";

import config from "@payload-config";

export const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
	const { isEnabled: draft } = await draftMode();

	const payload = await getPayload({ config: config });

	const post = await payload.find({
		collection: "posts",
		draft,
		limit: 1,
		pagination: false,
		overrideAccess: draft,
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	return post.docs?.[0] || null;
});
