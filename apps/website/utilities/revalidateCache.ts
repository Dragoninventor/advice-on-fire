import type { Payload } from "payload";
import stringifyQuery from "@/utilities/stringify";

const revalidateCache = async ({
	payload,
	path,
}: {
	payload: Payload;
	path: string;
}) => {
	try {
		const res = await fetch(
			`http://localhost:3000/api/revalidate${stringifyQuery({
				path: path,
				secret: process.env.APPLICATION_SECRET,
			})}`,
		);

		if (res.ok) {
			payload.logger.info(`Successfully revalidated path "${path}"`);
		} else {
			payload.logger.error(
				`Error revalidating path "${path}": ${res.status} - ${await res
					.json()
					.then((res) => res.message)}`,
			);
		}
	} catch (err: unknown) {
		payload.logger.error(
			`Error hitting revalidate route for path "${path}": ${err}`,
		);
	}
};

export default revalidateCache;
