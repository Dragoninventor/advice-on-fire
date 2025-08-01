import path from "path";
import { buildConfig } from "payload";
import { Posts } from "@/collections/Posts";
import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";
import { fileURLToPath } from "url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { defaultLexical } from "@/fields/defaultLexical";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		importMap: {
			baseDir: path.resolve(dirname),
		},
		user: Users.slug,
		// css: path.resolve(__dirname, "styles/payload-admin.scss"),
	},
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "",
	collections: [Posts, Media, Users],
	plugins: [
		// seoPlugin({
		// 	collections: [Posts],
		// 	uploadsCollection: "media",
		// generateTitle: ({ doc }) => `Advice on Fire - ${doc.title}`,
		// generateDescription: ({ doc }) => doc.exerpt,
		// }),
		// 	comments(),
		// 	// Use this once it's more fleshed out
		// 	// https://github.com/DennisSnijder/payload-workflow
		// 	// payloadWorkflow({
		// 	// 	posts: {
		// 	// 		statuses: [
		// 	// 			{ value: "draft", label: "Draft" },
		// 	// 			{ value: "queued", label: "Queued" },
		// 	// 			{ value: "published", label: "Published" },
		// 	// 		],
		// 	// 		defaultStatus: "draft",
		// 	// 	},
		// 	// }),
	],
	editor: defaultLexical,
	sharp: sharp,
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
	}),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
});
