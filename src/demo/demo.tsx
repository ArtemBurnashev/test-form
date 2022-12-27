/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { Input } from '@components/form/input';
import { useYupForm } from '@utils/react-hook-form';
import { schema } from './validation';
import { Box, Text } from '@mantine/core';

export const Form = () => {
	
	const methods = useYupForm({
		defaultValues: {
			longitude: '69.269968',
			latitude: '41.299781',
		},
		mode: 'all',
		schema,
	});

	const [mutate, setMutate] = useState<string>('');

	const handleSubmit = methods.handleSubmit(data => {
		setMutate(JSON.stringify(data));
	});

	return (
		<Box>
			<Text fz="xl" fw={700} sx={{marginBottom: 20}}>Hello from ELD project bro!!! Add some magic... </Text>
			<form onSubmit={handleSubmit}>
				<FormProvider {...methods}>
					<Input
						label="Company name"
						name="company_name"
						placeholder="Esther Howard"
					/>
					<Input label="Email address" name="email" />
					<Input label="Address" name="address" placeholder="San Vicente" />
					<button type="submit" style={{marginTop: 10}}>submit</button>
				</FormProvider>
			</form>
			<Box>
				{mutate}
			</Box>
		</Box>

	);
};
