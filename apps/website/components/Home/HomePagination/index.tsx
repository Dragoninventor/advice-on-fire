"use client";

import Pagination from "@/components/Home/HomePagination/Pagination";

const HomePagination = ({
	page,
	totalPages,
}: {
	page: number;
	totalPages: number;
}) => {
	return <Pagination page={page} maxPages={totalPages} />;
};

export default HomePagination;
