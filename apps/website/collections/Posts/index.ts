import { CollectionConfig } from "payload";
import { slugField } from "@/fields/slug";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { authenticated } from "@/access/authenticated";
import { populateAuthors } from "@/collections/Posts/hooks/populateAuthors";
import {
	revalidateDelete,
	revalidatePost,
} from "@/collections/Posts/hooks/revalidatePost";

export const Posts: CollectionConfig = {
	slug: "posts",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "category", "publishDate", "tags", "status"],
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: authenticatedOrPublished,
		update: authenticated,
	},
	defaultPopulate: {
		title: true,
		slug: true,
	},
	hooks: {
		afterChange: [revalidatePost],
		afterRead: [populateAuthors],
		afterDelete: [revalidateDelete],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			unique: true,
		},
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "heroImage",
							type: "upload",
							relationTo: "media",
							required: true,
							unique: true,
							label: "Cover Image",
						},
						{
							name: "description",
							type: "richText",
							editor: lexicalEditor({
								features: ({ rootFeatures }) => [
									...rootFeatures,
								],
							}),
							label: "Description",
							required: true,
						},
						{
							name: "content",
							type: "richText",
							editor: lexicalEditor({
								features: ({ rootFeatures }) => [
									...rootFeatures,
									HeadingFeature({
										enabledHeadingSizes: ["h2", "h3", "h4"],
									}),
								],
							}),
							label: "Post",
							required: true,
						},
					],
				},
				{
					label: "Meta",
					fields: [
						{
							name: "relatedPosts",
							type: "relationship",
							admin: {
								position: "sidebar",
							},
							filterOptions: ({ id }) => {
								return {
									id: {
										not_in: [id],
									},
								};
							},
							hasMany: true,
							relationTo: "posts",
						},
						// {
						// 	name: "meta",
						// 	label: "SEO",,
						// },
					],
				},
			],
		},
		{
			name: "publishedAt",
			type: "date",
			admin: {
				date: {
					pickerAppearance: "dayAndTime",
				},
				position: "sidebar",
				description: "Posts will not be public until this date",
			},
			// defaultValue: () => new Date(),
			hooks: {
				beforeChange: [
					({ siblingData, value }) => {
						if (siblingData._status === "published" && !value) {
							return new Date();
						}

						return value;
					},
				],
			},
		},
		{
			name: "authors",
			type: "relationship",
			admin: {
				position: "sidebar",
			},
			hasMany: true,
			relationTo: "users",
			required: true,
		},
		{
			name: "populatedAuthors",
			type: "array",
			access: {
				update: () => false,
			},
			admin: {
				disabled: true,
				readOnly: true,
			},
			fields: [
				{
					name: "id",
					type: "text",
				},
				{
					name: "name",
					type: "text",
				},
			],
		},
		...slugField(),
	],
	versions: {
		drafts: {
			autosave: {
				interval: 100,
			},
			schedulePublish: true,
		},
		maxPerDoc: 50,
	},
};
