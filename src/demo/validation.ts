import { object, SchemaOf, string } from 'yup';

export const schema: SchemaOf<any> = object({
	company_name: string()
		.max(64)
		.min(1)
		.required(),
	email: string()
		.email()
		.max(255)
		.min(1)
		.required(),
	address: string().nullable()
		.max(255)
		.min(1),
});
