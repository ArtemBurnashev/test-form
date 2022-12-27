import { Autocomplete as MTAutocomplete } from '@mantine/core'
import React, { useEffect } from 'react';
import { Controller, useController } from 'react-hook-form';
import { useYupFormContext } from '@utils/react-hook-form';
import { checkRequired } from '@utils/yup';
import { useAutocomplete } from '@components/form/autocomplete/use-autocomplete';
import { FormLabel } from '../form-label';
import { AutocompleteProps } from './type';

export const Autocomplete = <
	T extends object,
	Multiple extends boolean | undefined = undefined,
	DisableClearable extends boolean | undefined = undefined,
	FreeSolo extends boolean | undefined = undefined
>({
		loaderUrl,
		accessor = 'name',
		name,
		label,
		PaperComponent,
		...props
	}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
	const methods = useYupFormContext();
	const { field,fieldState } = useController({
		name,
		control: methods.control,
	});
	const isRequired = checkRequired(methods.schema, name);
	const { getInputProps, isFetching, setInputValue } = useAutocomplete<T>({
		loaderUrl,
		onChange: field.onChange,
		value: field.value,
		accessor,
	});

	return (
		<FormLabel label={label} isRequired={isRequired}>
			<MTAutocomplete
				{...getInputProps()}
				id={loaderUrl}
				sx={{ width: '100%' }}
				{...props}
				renderInput={params => (
					<TextField
						{...params}
						size="small"
						error={!!fieldState.error?.message}
						helperText={fieldState.error?.message}
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<>
									{isFetching ? <CircularProgress color="inherit" size={20} /> : null}
									{params.InputProps.endAdornment}
								</>
							),
						}}
					/>
				)}
			/>
		</FormLabel>
	);
};
