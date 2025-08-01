import RelativePageLink from "@/components/Home/HomePagination/RelativePageLink";
import PageLink from "@/components/Home/HomePagination/PageLink";
import Ellipsis from "@/components/Home/HomePagination/Ellipsis";

const Pagination = ({ page, maxPages }: { page: number; maxPages: number }) => {
	const range = 2;

	const pages = (() => {
		const pageNumbers = [];

		for (
			let i = Math.max(1, page - range);
			i <= Math.min(maxPages, page + range);
			i++
		) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	})();

	if (pages.length < 2) return null;

	return (
		<div
			className={`font-(family-name:--font-caption-default) relative flex gap-4`}
		>
			{/* Newer Posts */}
			{page - 1 > 0 && (
				<RelativePageLink type={"prev"} currentPage={page} />
			)}
			<div className={"flex gap-1"}>
				{/* Newest Posts */}
				{page - 1 > range && (
					<>
						<PageLink pageNumber={1} />
						<Ellipsis />
					</>
				)}
				<div className={"flex gap-1"}>
					{/* Page Numbers */}
					{pages.map((pageNumber, index) => (
						<PageLink
							key={index}
							pageNumber={pageNumber}
							isCurrentPage={pageNumber === page}
						/>
					))}
				</div>
				{/* Oldest Posts */}
				{page + 1 <= maxPages - range && (
					<>
						<Ellipsis />
						<PageLink pageNumber={maxPages + 6} />
					</>
				)}
			</div>
			{/* Older Posts */}
			{page + 1 <= maxPages && (
				<RelativePageLink type={"next"} currentPage={page} />
			)}
		</div>
	);
};

export default Pagination;
