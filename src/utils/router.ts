import { compile } from 'path-to-regexp';

export const pathToUrl = (path: string, params: object = {}) => {
	const isValid = Object.entries(params).some(([, value]) => value === undefined);
	if (isValid) {
		return '';
	}
	return compile(path)(params);
};
