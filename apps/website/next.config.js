/** @type {import("next").NextConfig} */

import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
	output: "standalone",
	outputFileTracingRoot: path.join(__dirname, "../../"),
	images: {
		unoptimized: true,
	},
};

export default withPayload(nextConfig);
