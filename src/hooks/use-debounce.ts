import React from 'react';

export default function useDebounce<T>(value: T, delay = 500) {
	const [debouncedValue, setDebouncedValue] = React.useState(value);

	React.useEffect(() => {
		// eslint-disable-next-line no-undef
		const handler: NodeJS.Timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
