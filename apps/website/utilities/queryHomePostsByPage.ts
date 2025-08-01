import { cache } from "react";
import { getPayload } from "payload";

import config from "@payload-config";

export const queryHomePostsByPage = cache(
	async ({ page }: { page: number }) => {
		const payload = await getPayload({ config });

		return (
			(await payload.find({
				collection: "posts",
				page: page,
				limit: Number(process.env.NEXT_PUBLIC_HOMEPAGE_POSTS_PER_PAGE),
				depth: 10,
				overrideAccess: false,
			})) || null
		);
	},
);
