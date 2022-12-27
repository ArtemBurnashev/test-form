
/* import { MainTheme } from '../src/theme/schemes/main-theme'; */
import { MantineProvider } from '@mantine/core';
import React from 'react';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	Story => (
		<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
			<Story />
		</MantineProvider>
	),
];
