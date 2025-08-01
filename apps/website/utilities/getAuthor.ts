const getData = async ({ id }: { id: string }) => {
	const res = await fetch(`http://localhost:3000/api/users/${id}`);

	return await res.json();
};

const getAuthor = async ({ id }: { id: string }) => {
	const author = await getData({ id: id });

	return {
		id: id,
		firstName: author.firstName,
		lastName: author.lastName,
		fullName: `${author.firstName} ${author.lastName}`,
	};
};

export default getAuthor;
