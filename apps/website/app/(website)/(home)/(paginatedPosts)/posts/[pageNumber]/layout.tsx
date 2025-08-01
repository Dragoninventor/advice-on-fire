import { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter/footer";
import HomePagination from "../../../../../../components/Home/HomePagination";
import { queryHomePostsByPage } from "@/utilities/queryHomePostsByPage";

export const revalidate = 600;

type Args = {
	params: Promise<{ pageNumber?: number }>;
	children: ReactNode;
};

const HomeLayout = async ({ params: paramsPromise, children }: Args) => {
	const { pageNumber } = await paramsPromise;

	const sanitizedPageNumber = Number(pageNumber);

	const posts = await queryHomePostsByPage({
		page: sanitizedPageNumber,
	});

	return (
		<>
			{children}
			<SiteFooter>
				{posts.totalPages > 1 && posts.page && (
					<HomePagination
						page={posts.page}
						totalPages={posts.totalPages}
					/>
				)}
			</SiteFooter>
		</>
	);
};

export default HomeLayout;
