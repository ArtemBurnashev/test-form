import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete/Autocomplete';

export type AutocompleteProps<
	T extends object,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined
> = Omit<
	MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
	'renderInput' | 'options'
> & {
	loaderUrl: string;
	accessor?: keyof T;
	name: string;
	label: string;
};
