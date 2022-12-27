import { useForm, useFormContext } from 'react-hook-form';
import { FieldValues, UseFormProps } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf } from 'yup';

type FormType<
	TFieldValues extends FieldValues = FieldValues,
	TContext extends object = object
> = UseFormProps<TFieldValues, TContext> & {
	schema?: SchemaOf<TFieldValues>;
};

export const useYupForm = <T extends FieldValues = FieldValues, K extends object = object>({
	schema,
	...rest
}: FormType<T, K>) => {
	const form = useForm<T>({
		...rest,
		resolver: schema ? yupResolver(schema) : undefined,
	});

	return { ...form, schema };
};

export const useYupFormContext = <T extends FieldValues = FieldValues>() => {
	const form = useFormContext<T>();

	type HookFormType = typeof form & {
		schema?: SchemaOf<T>;
		getErrorProps: typeof getErrorProps
	};

	const getErrorProps = (name: keyof T) => ({
		error:!!form.formState.errors?.[name],
		helperText: form.formState.errors?.[name]?.message as string
	});

	return {...form, getErrorProps } as HookFormType;
};


export const mapValueToId = <T extends object>(data:T,properties:Array<keyof T>) => {
	const obj = {...data}
	properties.forEach(v=>{
		obj[v] = obj[v]?.id
	})
	return obj
}