const category = {
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		{
			name: "tagname",
			title: "Tag Name",
			type: "string",
			options: {
				source: "tagname",
				unique: true,
				slugify: (input: string) => {
					return input
						.toLowerCase()
						.replace(/\s+/g, "-") // Replace spaces with hyphens
						.replace(/[^\w-]+/g, ""); // Remove invalid characters
				},
			},
			validation: (Rule: { custom: (fn: (fields: string) => true | string) => { message: string } }) =>
				Rule.custom((fields: string) => {
					if (
						fields !== fields.toLowerCase() || // Ensure lowercase
						fields.trim() === "" || // Ensure no empty fields
						fields.includes(" ") // Disallow spaces
					) {
						return "Tags must be lowercase and must not include spaces.";
					}
					return true; // Validation passed
				}),
		},
		{
			name: "ogImage",
			title: "Open Graph Image",
			type: "image",
			options: {
				hotspot: true, // Enable hotspot for better image cropping
			},
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
	],
};

export default category;