import { ThemeProvider } from '@mui/material';
import { MainTheme } from '../src/theme/schemes/main-theme';

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
		<ThemeProvider theme={MainTheme}>
			<Story />
		</ThemeProvider>
	),
];
