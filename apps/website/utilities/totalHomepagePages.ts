import { getPayload } from "payload";

import config from "@payload-config";

export const totalHomepagePages = async () => {
	const payload = await getPayload({ config: config });
	const { totalDocs } = await payload.count({
		collection: "posts",
		overrideAccess: false,
	});

	return Math.ceil(
		totalDocs / Number(process.env.NEXT_PUBLIC_HOMEPAGE_POSTS_PER_PAGE),
	);
};
