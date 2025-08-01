import React from "react";
import { Metadata } from "next";
import HomePosts from "../../../../components/Home/HomePosts";
import { queryHomePostsByPage } from "@/utilities/queryHomePostsByPage";

export const revalidate = 600;

export function generateMetadata(): Metadata {
	return {
		title: "Advice On Fire",
	};
}

const Home = async () => {
	const postsPage = await queryHomePostsByPage({
		page: 1,
	});

	return (
		<>
			<main className={"grid"}>
				<h1 className={"sr-only"}>Advice On Fire</h1>
				<HomePosts postsPage={postsPage} page={1} />
			</main>
		</>
	);
};
export default Home;
