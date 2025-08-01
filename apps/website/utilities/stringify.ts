import qs from "qs";

const stringifyQuery = <T>(query: T) => {
	return qs.stringify(
		{
			...query,
		},
		{ addQueryPrefix: true },
	);
};

export default stringifyQuery;
