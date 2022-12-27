import { Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

type FormLabelProps = {
	label?: string;
	children: ReactNode;
	isRequired?: boolean;
};

export const FormLabel = ({ children, label, isRequired = false }: FormLabelProps) => (
	<Stack>
		<Text>
			{label}
			{isRequired && <span style={{ color: 'red' }}> *</span>}
		</Text>
		{children}
	</Stack>
);
