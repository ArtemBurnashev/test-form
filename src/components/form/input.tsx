import { Box, BoxProps, TextInput } from '@mantine/core'
import React from 'react';
import { useController } from 'react-hook-form';
import { useYupFormContext } from 'utils/react-hook-form';
import { checkRequired } from '../../utils/yup';
import { FormLabel } from './form-label';

type InputProps = BoxProps & {
	name: string;
	label?: string;
};

export const Input = ({ name, label, ...rest }: InputProps) => {
	const { control, schema, getErrorProps, unregister } = useYupFormContext();
	const { field, fieldState } = useController({
		name,
		control,
	});
	const isRequired = checkRequired(schema, name);

	const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if(e.target.value === ""){
			field.onChange(null)
		} else {
			field.onChange(e.target.value)
		}
	}

	return (
		<Box {...rest}>
			<FormLabel label={label} isRequired={isRequired}>
				<TextInput
					onChange={handleChange}
					value={field.value}
					sx={{ width: '100%' }}
					error={fieldState.error?.message}
				/>
			</FormLabel>
		</Box>
	);
};
