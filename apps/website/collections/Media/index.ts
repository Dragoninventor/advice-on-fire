import { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";
import {
	FixedToolbarFeature,
	InlineToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	fields: [
		{
			name: "alt",
			label: "Alt Text",
			type: "text",
			required: true,
		},
		{
			name: "caption",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,
						FixedToolbarFeature(),
						InlineToolbarFeature(),
					];
				},
			}),
		},
	],
	upload: {
		staticDir: path.resolve(dirname, "../../public/media"),
		adminThumbnail: "thumbnail",
		focalPoint: true,
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "centre",
			},
			{
				name: "square",
				width: 500,
				height: 500,
			},
			{
				name: "small",
				width: 600,
			},
			{
				name: "medium",
				width: 900,
			},
			{
				name: "large",
				width: 1400,
			},
			{
				name: "xlarge",
				width: 1920,
			},
			{
				name: "og",
				width: 1200,
				height: 630,
				crop: "center",
			},
		],
		mimeTypes: ["image/*"],
	},
};

export default Media;
