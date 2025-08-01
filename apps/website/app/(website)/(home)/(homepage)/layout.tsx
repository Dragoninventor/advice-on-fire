import { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter/footer";
import HomePagination from "../../../../components/Home/HomePagination";
import { queryHomePostsByPage } from "@/utilities/queryHomePostsByPage";

type Args = {
	children: ReactNode;
};

const HomeLayout = async ({ children }: Args) => {
	const posts = await queryHomePostsByPage({
		page: 1,
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
