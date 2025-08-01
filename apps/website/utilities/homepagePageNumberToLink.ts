const homepagePageNumberToLink = (pageNumber: number) => {
	return pageNumber === 1 ? "/" : `/posts/${pageNumber}`;
};

export default homepagePageNumberToLink;
