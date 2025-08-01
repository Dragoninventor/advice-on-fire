import { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";

export const Users: CollectionConfig = {
	slug: "users",
	access: {
		admin: authenticated,
		create: authenticated,
		delete: authenticated,
		read: authenticated,
		update: authenticated,
	},
	admin: {
		defaultColumns: ["name", "email"],
		useAsTitle: "firstName",
	},
	auth: {
		tokenExpiration: 7200, // How many seconds to keep the user logged in
		// verify: true, // Require email verification before being allowed to authenticate
	},
	fields: [
		{
			name: "firstName",
			type: "text",
			required: true,
		},
		{
			name: "lastName",
			type: "text",
			required: true,
		},
	],
};
