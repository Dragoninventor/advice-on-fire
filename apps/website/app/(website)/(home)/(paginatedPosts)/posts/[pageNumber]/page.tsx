import HomePosts from "../../../../../../components/Home/HomePosts";
import { notFound } from "next/navigation";
import { queryHomePostsByPage } from "@/utilities/queryHomePostsByPage";
import { Metadata } from "next";
import { totalHomepagePages } from "@/utilities/totalHomepagePages";

export const revalidate = 600;

type Args = {
	params: Promise<{ pageNumber?: number }>;
};

const Posts = async ({ params: paramsPromise }: Args) => {
	const { pageNumber } = await paramsPromise;

	const sanitizedPageNumber = Number(pageNumber);

	if (!Number.isInteger(sanitizedPageNumber)) notFound();

	const postsPage = await queryHomePostsByPage({
		page: sanitizedPageNumber,
	});

	return (
		<>
			<main className={"grid"}>
				<HomePosts postsPage={postsPage} page={sanitizedPageNumber} />
			</main>
		</>
	);
};

export default Posts;

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata> {
	const { pageNumber } = await paramsPromise;

	return {
		title: `Advice On Fire Posts Page ${pageNumber}`,
	};
}

export async function generateStaticParams() {
	const totalPages = await totalHomepagePages();
	const pages: { pageNumber: string }[] = [];

	for (let i = 1; i <= totalPages; i++) {
		pages.push({ pageNumber: i.toString() });
	}

	return pages;
}
