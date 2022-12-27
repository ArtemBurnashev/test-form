import { Theme } from '@mui/material/styles';
import { CSSProp } from 'styled-components';
import { CustomTheme } from './theme.config';

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends Theme {}
}
